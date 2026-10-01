import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIClient;
}

// Health check API
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    time: new Date().toISOString(),
  });
});

// AI Pilgrim Assistant API
app.post("/api/pilgrim-ai", async (req, res) => {
  const { message, currentStage, history, route } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Messaggio obbligatorio." });
  }

  const routeName = route?.name || "Cammino per la Terra Santa (Roma → Brindisi) / Cammino di Leuca";
  const routeDest = route?.destination || "Brindisi (Porta d'Oriente per la Terra Santa) o Santa Maria di Leuca";

  const stageContext = currentStage
    ? `Tappa attuale del pellegrino: Tappa ${currentStage.number} da ${currentStage.from} a ${currentStage.to} (${currentStage.distanceKm} km, dislivello +${currentStage.elevationGain}m). Itinerario: ${routeName}. Strutture disponibili in questa tappa: Conventi: ${currentStage.convents?.map((c: any) => `${c.name} (${c.costType || 'donativo'})`).join(", ") || "Nessuno"}; Campeggi/Tenda: ${currentStage.campsites?.map((c: any) => `${c.name} (€${c.price})`).join(", ") || "Aree bivacco libere"}; Salva-Vita: ${currentStage.emergencyStays?.map((e: any) => `${e.name} (~€${e.priceMin})`).join(", ")}.`
    : `Il pellegrino sta pianificando l'itinerario a piedi con zaino e tenda: ${routeName}, destinazione ${routeDest}. Tutte le tappe sono rigorosamente sotto i 30 km giornalieri.`;

  // Attempt Gemini 2.5 Flash with strict timeout
  const ai = getGeminiClient();

  if (ai) {
    try {
      const systemInstruction = `Sei "Fra Cammino", l'assistente spirituale, logistico ed esperto fraterno per i pellegrini che percorrono a piedi con zaino e tenda i percorsi religiosi:
1. "Cammino per la Terra Santa" (Roma San Pietro → Brindisi, 28 tappe giornaliere max 29.1 km, storico porto dei Crociati e Templari, Colonne Romane dell'Appia e Tempio del Santo Sepolcro prima dell'imbarco verso Gerusalemme).
2. "Cammino di Leuca" (Roma San Pietro → Santa Maria di Leuca, 35 tappe giornaliere max 29.1 km, Santuario Mariano De Finibus Terrae).
3. "Cammino di Terra Santa a Piedi" (Giaffa/Jaffa → Gerusalemme Santo Sepolcro, 6 tappe tutte < 30 km: Giaffa, Lod, Ramla, Emmaus Nicopolis & Latrun, Abu Ghosh, Ein Karem, Gerusalemme).
4. "Guida Ufficiale del Pellegrino (Credenziale, Galateo & Documenti)":
   - Credenziale del Pellegrino: passaporto del viandante. Si richiede su www.sloways.shop (AEVF, 8€), Confraternita di San Jacopo di Perugia (offerta libera), o Basilica di Leuca (testimonium@camminidileuca.it). Obbligatoria per l'accoglienza povera e i timbri.
   - Galateo Telefonico per i Conventi: chiamare sempre tra le 09:30-11:30 o 15:00-17:00. MAI durante le Lodi (06:30-08:00), pranzo (12:30-14:30), Vespri/cena (18:30-20:30) o silenzio notturno (dopo le 21:00). Saluto appropriato: "Pace e bene" con francescani, "Sia lodato Gesù Cristo" con parroci e monaci.
   - La Regola del Donativo Consapevole: l'accoglienza a donativo non è gratis! Serve a sostenere le spese per chi arriverà domani. Quota raccomandata: 10-15€ a notte (o 20-25€ se c'è cena comunitaria).
   - Documenti indispensabili: Carta d'identità / Passaporto con 6 mesi di validità (per Terra Santa), Tessera Sanitaria Europea TEAM, credenziale cartacea in busta impermeabile, lettera di presentazione pastorale del proprio parroco, visto Gatepass B2 per Israele, backup cartaceo e foto cloud.
   - Oltremare & Volo: traghetto Brindisi-Grecia a passaggio ponte (45-75€), volo civile approvato dalla Custodia Francescana, divieto assoluto bombole gas in aereo (da comprare a Giaffa/Tel Aviv!), picchetti e bastoncini solo in stiva.
   - Testimonium: a Leuca (Finibus Terrae), Brindisi (San Giovanni al Sepolcro), Gerusalemme (Convento San Salvatore Custodia di Terra Santa).

Linee guida di risposta:
1. Accoglienza religiosa (conventi, monasteri, parrocchie): accessibile solo con Credenziale del Pellegrino (timbro, donativo libero consapevole o quota simbolica 10-15€, avvisare prima telefonicamente).
2. Tenda e bivacco: rispetto della regola del bivacco notturno dal tramonto all'alba, chiedere sempre permesso al parroco o sindaco per il prato, mai lasciare tracce.
3. "Salva-Vita Booking": se i conventi sono chiusi o pieni, c'è temporale forte o infortunio, consigliare subito di attivare uno dei 2 alloggi low-cost salva-vita della tappa (<35€/notte).
4. Fornellino e budget: alimenti facili e veloci da discount o mercati locali (hummus, falafel, pita in Terra Santa; legumi, pasta rapida e tonno in Italia).
5. Prevenzione vesciche e idratazione: vaselina sui piedi la mattina, calze tecniche doppie anti-sfregamento, bere regolarmente alle fontanelle (nasoni a Roma, AQP in Puglia, fontane KKL in Terra Santa).

Contesto attuale:
${stageContext}

Rispondi sempre in italiano, con tono accogliente, pratico, fraterno e incoraggiante. Mantieni la risposta concisa (entro 150-200 parole) con elenchi puntati chiari per istruzioni pratiche.`;

      const contents: any[] = [];
      if (Array.isArray(history)) {
        for (const h of history.slice(-4)) {
          if (h.sender === "user") {
            contents.push({ role: "user", parts: [{ text: h.text }] });
          } else if (h.sender === "ai") {
            contents.push({ role: "model", parts: [{ text: h.text }] });
          }
        }
      }
      contents.push({ role: "user", parts: [{ text: message }] });

      // 6-second timeout promise for snappy interactive experience
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout Gemini")), 6000)
      );

      const geminiPromise = ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.6,
        },
      });

      const response: any = await Promise.race([geminiPromise, timeoutPromise]);

      if (response && response.text) {
        return res.json({
          reply: response.text,
          source: "gemini-2.5-flash",
        });
      }
    } catch (err: any) {
      console.warn("Gemini call fell back to expert pilgrim knowledge base:", err?.message || err);
    }
  }

  // Robust, comprehensive Fallback Pilgrim Knowledge Base Engine
  const fallbackReply = generatePilgrimFallback(message, currentStage);
  return res.json({
    reply: fallbackReply,
    source: "fra-cammino-expert",
  });
});

/**
 * Knowledge Base Fraterna per Fra Cammino:
 * Risponde accuratamente e con calore a ogni domanda tipica del pellegrino su Roma-Leuca.
 */
function generatePilgrimFallback(msg: string, currentStage: any): string {
  const query = msg.toLowerCase();

  // 1. Tenda, pioggia, maltempo
  if (query.includes("pioggi") || query.includes("maltempo") || query.includes("temporale") || query.includes("meteo")) {
    return (
      "Pace e bene, pellegrino! Il maltempo con tenda e zaino non va mai sottovalutato:\n\n" +
      "1. **Se c'è pioggia leggera o passeggera:** monta la tenda proteggendo prima il telo impermeabile superiore (flysheet) e isola lo zaino con la cover impermeabile e sacchi stagni all'interno per il sacco a pelo.\n" +
      "2. **Se c'è temporale con fulmini o vento forte:** NON dormire in tenda sotto alberi isolati o su crinali esposti. È il momento perfetto per attivare l'opzione **'Salva-Vita Booking'** presente nella scheda di questa tappa!\n" +
      "3. **In alternativa:** chiedi al parroco del paese se può ospitarti sotto il portico della chiesa, nel chiostro coperto o nell'oratorio parrocchiale: con la Credenziale del Pellegrino difficilmente ti lasceranno sotto l'acqua."
    );
  }

  // 2. Chiamare conventi, galateo telefonico, orari, formule di saluto
  if (query.includes("chiamare") || query.includes("telefonare") || query.includes("telefonat") || query.includes("galateo") || query.includes("orari convent") || query.includes("script")) {
    return (
      "Pace e bene! Ecco il **Galateo Telefonico del Pellegrino** per chiamare conventi e parrocchie:\n\n" +
      "• **Quando chiamare:**\n" +
      "  - Mattina: **09:30 – 11:30** (dopo le Lodi comunitarie e prima del pranzo).\n" +
      "  - Pomeriggio: **15:00 – 17:00** (dopo il riposo e prima dei Vespri serali).\n" +
      "  - **DA EVITARE ASSOLUTAMENTE:** 06:30-08:30 (preghiera), 12:30-14:30 (pranzo monastico), 18:30-20:30 (Messa/cena) e dopo le 21:00 (silenzio notturno).\n" +
      "• **Formule di saluto:**\n" +
      "  - Francescani/Cappuccini: *'Pace e bene Padre/Fratello...'*.\n" +
      "  - Parroci: *'Sia lodato Gesù Cristo / Buongiorno don [Nome]...'*\n" +
      "  - Benedettini/Trappisti: *'Laudato Gesù Cristo, Padre Foresterario...'*\n" +
      "• **Cosa dire (Script essenziale):** Presentati per nome, specifica che sei un pellegrino a piedi con credenziale in arrivo per l'orario X, con sacco a pelo e materassino al seguito, chiedendo con umiltà se c'è ospitalità povera (posto sacco a pelo o prato per la tenda).\n" +
      "• **Se dicono di no:** ringrazia sempre di cuore per la preghiera e non insistere mai!"
    );
  }

  // 2b. Documenti, passaporto, visto, tessera sanitaria, lettera parroco
  if (query.includes("document") || query.includes("passaport") || query.includes("visto") || query.includes("tessera sanitari") || query.includes("lettera") || query.includes("carta identit")) {
    return (
      "Pace e bene! Ecco la checklist dei **Documenti Indispensabili** da tenere nella busta impermeabile dello zaino:\n\n" +
      "1. **Carta d'Identità valida:** per la registrazione ospiti nei conventi e ostelli italiani.\n" +
      "2. **Tessera Sanitaria Europea (TEAM):** per assistenza medica, guardie mediche e farmacie.\n" +
      "3. **Credenziale Ufficiale del Pellegrino:** con gli spazi per i timbri giornalieri.\n" +
      "4. **Lettera di Presentazione del tuo Parroco:** su carta intestata con timbro parrocchiale; apre le porte dei monasteri più riservati.\n" +
      "5. **Per chi va in Terra Santa (Israele):** Passaporto con almeno 6 mesi di validità residua, tagliandino azzurro *Gatepass B2* rilasciato all'arrivo a Tel Aviv (senza timbro sul passaporto) e assicurazione sanitaria viaggio.\n" +
      "• **Consiglio d'oro:** fai foto a tutti i documenti e salvali offline sullo smartphone e sul cloud."
    );
  }

  // 2c. Credenziale, timbri, testimonium, dove richiederla
  if (query.includes("credenziale") || query.includes("timbro") || query.includes("timbri") || query.includes("testimonium") || query.includes("richieder")) {
    return (
      "Pace e bene! La **Credenziale del Pellegrino** è il passaporto del viandante:\n\n" +
      "• **Dove richiederla prima di partire:**\n" +
      "  - Online su **www.sloways.shop** (ufficiale AEVF, costo 8€).\n" +
      "  - Confraternita di San Jacopo di Compostela (Perugia, www.confraternitadisanjacopo.it, a offerta libera).\n" +
      "  - A Roma: Sagrestia della Basilica di San Pietro o Spedale della Provvidenza a Trastevere.\n" +
      "• **Timbri (Sellos):** Fai apporre 1 timbro al giorno (chiesa, convento, municipio, pro loco o bar del borgo).\n" +
      "• **Testimonium Finale:** Rilasciato a Santa Maria di Leuca (testimonium@camminidileuca.it per gli ultimi 100 km), a Brindisi (Tempio del Sepolcro), a Roma e a Gerusalemme (Convento San Salvatore della Custodia di Terra Santa)."
    );
  }

  // 2d. Donativo consapevole, costo conventi
  if (query.includes("donativo") || query.includes("offerta") || query.includes("gratis") || query.includes("costo convent") || query.includes("quanto lasciare")) {
    return (
      "Pace e bene! L'accoglienza a **Donativo** nei conventi NON significa 'gratis':\n\n" +
      "• **Significato evangelico:** È un atto di carità e corresponsabilità. L'offerta sostiene le spese vive (acqua calda, luce, pulizie) e permette al convento di tenere aperta la porta per i pellegrini che arriveranno domani!\n" +
      "• **Quota raccomandata:**\n" +
      "  - Solo pernottamento e doccia: almeno **10€ – 15€** a notte.\n" +
      "  - Con cena comunitaria o colazione fraterna: almeno **20€ – 25€**.\n" +
      "• **Consegna:** Lascia l'offerta nella cassetta delle elemosine o nelle mani del foresterario al momento della partenza con un sentito ringraziamento."
    );
  }

  // 2e. Convento generico nella tappa
  if (query.includes("convent") || query.includes("parrocch") || query.includes("monaster") || query.includes("accoglienz")) {
    const conventList = currentStage?.convents?.length
      ? currentStage.convents.map((c: any) => `• **${c.name}** (${c.costType || 'donativo'})`).join("\n")
      : "Nessun convento registrato direttamente all'arrivo di questa tappa, ma ci sono parrocchie limitrofe e strutture salva-vita!";

    return (
      "Pace e bene! L'accoglienza nei conventi e nelle parrocchie è il cuore spirituale del nostro cammino:\n\n" +
      conventList + "\n\n" +
      "**Regole d'oro per l'accoglienza:**\n" +
      "• **Orario chiamata:** Telefona tra le 09:30-11:30 o 15:00-17:00 per avvisare del tuo arrivo.\n" +
      "• **Credenziale obbligatoria:** Mostra subito la tua credenziale per ricevere il timbro ufficiale della tappa.\n" +
      "• **Donativo consapevole:** Se la struttura è a donativo libero, lascia un'offerta di **10-15€** a persona per le spese di accoglienza."
    );
  }

  // 3. Tenda, bivacco, campeggio
  if (query.includes("tenda") || query.includes("bivacco") || query.includes("campegg") || query.includes("dormire")) {
    const campInfo = currentStage?.campsites?.length
      ? currentStage.campsites.map((c: any) => `• **${c.name}** (piazzola da ~€${c.price || 8})`).join("\n")
      : "In questa tappa puoi usufruire del bivacco notturno o chiedere ospitalità sul prato parrocchiale.";

    return (
      "Pace e bene, pellegrino della tenda! Portare la casa sulle spalle dona grandissima libertà:\n\n" +
      campInfo + "\n\n" +
      "**Regole fondamentali per la tenda in cammino:**\n" +
      "• **Bivacco notturno:** In Italia il bivacco dal tramonto all'alba è tollerato nella maggior parte dei sentieri se non espressamente vietato da riserve naturali integrali.\n" +
      "• **Chiedere il permesso:** Se vedi un campo o il giardino di una parrocchia/convento, chiedi sempre con garbo al proprietario o al parroco: quasi sempre ti indicheranno il posto più sicuro con accesso all'acqua.\n" +
      "• **Leave No Trace:** Non lasciare traccia, raccogli ogni singolo rifiuto e non accendere mai fuochi liberi a terra (usa solo il fornellino a gas su superficie piana non infiammabile)."
    );
  }

  // 4. Vesciche, piedi, scarpe, dolori
  if (query.includes("vescic") || query.includes("piede") || query.includes("piedi") || query.includes("scarp") || query.includes("dolor") || query.includes("tendin")) {
    return (
      "Fratello pellegrino, i piedi sono le tue ali e vanno custoditi come un tesoro!\n\n" +
      "**Cura immediata delle vesciche stasera:**\n" +
      "1. Lava i piedi con acqua fredda e sapone neutro; asciugali alla perfezione tra le dita.\n" +
      "2. Se la vescica è gonfia di liquido, prendi un ago sterile con un filo di cotone disinfettato, fora delicatamente i due lati della vescica e lascia il filo dentro per tutta la notte: farà drenare il siero senza togliere la pelle protettiva.\n" +
      "3. La mattina rimuovi il filo, disinfetta e applica un cerotto per vesciche (tipo Compeed) o garza con nastro telato traspirante.\n\n" +
      "**Prevenzione per la tappa di domani:**\n" +
      "• Applica un leggero velo di vaselina o crema anti-sfregamento prima di indossare le calze.\n" +
      "• Usa calze tecniche sintetiche o in lana merino a doppio strato (mai cotone semplice che trattiene il sudore).\n" +
      "• A metà tappa togli le scarpe per 10 minuti e fai respirare la pelle."
    );
  }

  // 5. Cibo, fornellino, discount, risparmio spesa
  if (query.includes("cibo") || query.includes("mangiare") || query.includes("fornellin") || query.includes("spesa") || query.includes("discount") || query.includes("gas")) {
    return (
      "Nutrire il corpo con semplicità è una grande gioia del pellegrino con la tenda! Ecco come mangiare sano spendendo 6-8€ al giorno:\n\n" +
      "• **Cosa comprare nei piccoli discount di paese:**\n" +
      "  - Couscous precotto (cuoce in 3 minuti con acqua calda a fiamma spenta, risparmiando gas prezioso).\n" +
      "  - Riso o pasta a cottura rapida (5-6 min).\n" +
      "  - Scatolette di tonno sott'olio, sgombro, legumi pronti (fagioli, lenticchie, ceci per proteine vegetali).\n" +
      "  - Un pezzo di formaggio stagionato (grana/parmigiano) che resiste benissimo al caldo nello zaino.\n" +
      "  - Frutta secca (mandorle, noci, datteri) da sgranocchiare durante le salite.\n" +
      "• **Consiglio gas:** chiudi sempre la valvola della bombola e cucina al riparo dal vento per dimezzare il consumo di combustibile."
    );
  }

  // 6. Acqua, fontanelle, nasoni
  if (query.includes("acqua") || query.includes("fontan") || query.includes("borraccia") || query.includes("bere") || query.includes("sete")) {
    return (
      "Pace e bene! L'acqua è vita sul Cammino di Leuca, specialmente attraversando la campagna laziale, il Sannio e le pianure pugliesi:\n\n" +
      "• **Quanta portarne:** Tieni sempre a portata di mano almeno **1.5 - 2 litri d'acqua** la mattina alla partenza. Nelle tappe pugliesi estive porta 2.5 litri.\n" +
      "• **Dove trovarla:**\n" +
      "  - Nel Lazio: trovi i famosi 'nasoni' a Roma e fontanelle pubbliche nei borghi dei Castelli e dei Lepini.\n" +
      "  - In Campania e Molise: ottime sorgenti e fontane parrocchiali nei centri storici.\n" +
      "  - In Puglia: cerca le leggendarie fontanine in ghisa a testa di drago dell'**Acquedotto Pugliese (AQP)**, con acqua freschissima e potabile controllata.\n" +
      "• **Regola:** Non partire mai dal paese con la borraccia mezza vuota sperando di trovare acqua lungo i campi isolati!"
    );
  }

  // 7. Salva-Vita Booking, emergenza
  if (query.includes("salva-vita") || query.includes("booking") || query.includes("emergenz") || query.includes("albergo") || query.includes("b&b") || query.includes("camera")) {
    const stays = currentStage?.emergencyStays?.length
      ? currentStage.emergencyStays.map((s: any) => `• **${s.name}** (a partire da circa €${s.priceMin}/notte)`).join("\n")
      : "Nella nostra app abbiamo selezionato le 2 opzioni più economiche per ogni tappa sotto i 35€.";

    return (
      "Fratello pellegrino, l'umiltà del cammino insegna che se il corpo è sfinito, c'è febbre, o un convento non ha posto, ricorrere al **'Salva-Vita Booking'** è saggio e doveroso!\n\n" +
      stays + "\n\n" +
      "Clicca sul pulsante arancione **'Booking Salva-Vita'** nella scheda della tappa per aprire direttamente la ricerca o telefonare alla struttura a tariffa minima. Una doccia calda e un letto vero ti permetteranno di ripartire all'alba rinfrancato nello spirito!"
    );
  }

  // 8. Tappe specifiche o distanza
  if (currentStage) {
    return (
      `Pace e bene pellegrino! Riguardo la tua domanda sulla **Tappa ${currentStage.number}** (da ${currentStage.from} a ${currentStage.to}):\n\n` +
      `• **Distanza:** ${currentStage.distanceKm} km (entro il limite di sicurezza dei 30 km/giorno) con dislivello +${currentStage.elevationGain || 0}m.\n` +
      `• **Accoglienza convento:** ${currentStage.convents?.length ? currentStage.convents.map((c: any) => c.name).join(', ') : 'Parrocchie locali con credenziale'}.\n` +
      `• **Tenda/Bivacco:** ${currentStage.campsites?.length ? currentStage.campsites.map((c: any) => c.name).join(', ') : 'Aree verdi e prati parrocchiali previa richiesta'}.\n` +
      `• **Salva-Vita:** ${currentStage.emergencyStays?.length ? currentStage.emergencyStays.map((e: any) => `${e.name} (~€${e.priceMin})`).join(', ') : 'B&B low-cost a ridosso del sentiero'}.\n\n` +
      `Passo dopo passo, con rispetto per la terra e fiducia nella Provvidenza, arriverai a Santa Maria di Leuca!`
    );
  }

  // 8. Aereo, volo, bombole a gas, picchetti tenda
  if (query.includes("aereo") || query.includes("volo") || query.includes("volare") || query.includes("gas") || query.includes("bombo") || query.includes("picchett") || query.includes("bagaglio") || query.includes("stiva")) {
    return (
      "Pace e bene, pellegrino! Ecco le risposte essenziali sul raccordo aereo per la Terra Santa:\n\n" +
      "1. **L'aereo è permesso nel pellegrinaggio?** Assolutamente SÌ: la Custodia Francescana di Terra Santa riconosce il volo come ponte logistico moderno data l'assenza di linee navali civili dirette tra Italia e Israele. Il cammino autentico ricomincia a piedi appena atterrati a Giaffa!\n" +
      "2. **BOMBOLE A GAS (Divieto Tassativo):** Non puoi MAI imbarcare bombole (né in cabina né in stiva). Comprale appena arrivi a Giaffa (Decathlon Rishon LeZion, Rikohet Trekking o ferramenta di Old Jaffa a ~25 NIS / 6€).\n" +
      "3. **Picchetti tenda & Bastoncini:** Vietati nel bagaglio a mano (sequestro immediato). Vanno imbarcati in stiva in una sacca protettiva da viaggio.\n" +
      "4. **Visto & Passaporto:** Passaporto valido 6 mesi. All'arrivo a Tel Aviv ricevi il tagliandino azzurro **Gatepass B2** (nessun timbro sul passaporto!)."
    );
  }

  // 9. Stretto, mare, traghetto da Brindisi
  if (query.includes("stretto") || query.includes("traghett") || query.includes("mare") || query.includes("nave") || query.includes("grecia") || query.includes("igoumenitsa")) {
    return (
      "Pace e bene! Il passaggio dello stretto dal porto di Brindisi:\n\n" +
      "• **Traghetto per la Grecia (Igoumenitsa):** Linee Grimaldi e A-Ships operano partenze serali giornaliere da Brindisi Costa Morena (~8-9 ore di navigazione notturna).\n" +
      "• **Tariffa Passaggio Ponte (Deck):** Circa 45-75€ per viaggiatore a piedi con zaino. Puoi stendere materassino e sacco a pelo nelle zone interne del traghetto.\n" +
      "• **Dalla Grecia a Israele:** Storicamente si proseguiva per Rodi, Cipro e Giaffa. Oggi per raggiungere Israele dal Mediterraneo orientale la via civile ordinaria è un volo breve Atene/Larnaca → Tel Aviv Ben Gurion.\n" +
      "• **Il rito di Brindisi:** Prima di imbarcarti visita il Tempio di San Giovanni al Sepolcro per ricevere la solenne benedizione dei naviganti pellegrini."
    );
  }

  // 10. Gerusalemme a piedi, Santo Sepolcro, Testimonium, Giaffa
  if (query.includes("gerusalemme") || query.includes("giaffa") || query.includes("jaffa") || query.includes("sepolcro") || query.includes("testimonium") || query.includes("custodia") || query.includes("shabbat")) {
    return (
      "Pace e bene! Il Cammino a piedi da Giaffa a Gerusalemme comprende **6 tappe tutte sotto i 30 km** (118.9 km totali):\n\n" +
      "1. **Giaffa → Lod (22.4 km):** Chiesa di San Pietro all'antico porto e Basilica di San Giorgio a Lod.\n" +
      "2. **Lod → Ramla → Neve Shalom (21.8 km):** Convento Francescano dal 1296 e Oasi di Pace interreligiosa.\n" +
      "3. **Neve Shalom → Latrun & Emmaus (18.2 km):** Abbazia Trappista e luogo del Vangelo dei Discepoli di Emmaus.\n" +
      "4. **Latrun → Abu Ghosh (20.7 km):** Ascesa ai Monti di Giudea e Abbazia Crociata del 1140.\n" +
      "5. **Abu Ghosh → Ein Karem (19.3 km):** Sorgenti di Sataf e Santuario della Visitazione del Battista.\n" +
      "6. **Ein Karem → GERUSALEMME (16.5 km):** Ingresso da Porta di Giaffa, timbro e **Testimonium** al Convento di San Salvatore (Custodia Terra Santa) e ingresso al Santo Sepolcro (Anastasis)!\n\n" +
      "• **Shabbat:** Ricorda che da venerdì tramonto a sabato sera i negozi ebraici e trasporti chiudono: pianifica la spesa fornellino in anticipo!"
    );
  }

  // 11. Brindisi, Terra Santa, Crociati, Templari, Imbarco
  if (query.includes("brindisi") || query.includes("terra santa") || query.includes("crociat") || query.includes("templar") || query.includes("sepolcro") || query.includes("imbarc") || query.includes("colonn")) {
    return (
      "Pace e bene, pellegrino della Terra Santa! Brindisi è per eccellenza la 'Porta d'Oriente':\n\n" +
      "• **Le Colonne Romane terminali:** Sul lungomare di Brindisi terminava la Via Appia e la Via Traiana. Qui i pellegrini e i crociati contemplavano il mare prima di imbarcarsi per Gerusalemme.\n" +
      "• **Il Tempio di San Giovanni al Sepolcro:** Straordinaria rotonda dell'XI secolo a pianta circolare, edificata come copia fedele della Basilica dell'Anastasis (Santo Sepolcro) di Gerusalemme. È la meta culminante dove ricevere il timbro con la Croce di Terra Santa e la benedizione del mare.\n" +
      "• **Dove alloggiare a Brindisi con credenziale:**\n" +
      "  - Monastero di Santa Chiara e San Benedetto (donativo libero, chiostro medievale, prato interno).\n" +
      "  - Area tenda all'Oasi WWF di Torre Guaceto (11€) o Parco Cillarese.\n" +
      "  - Salva-Vita: Ostello del Salento Low-Cost (~23€) o B&B Appia Terminal (~30€) a due passi da porto e stazione.\n" +
      "• **Rientro a Roma:** Dalla Stazione FS di Brindisi Centrale partono treni diretti Freccia e Intercity per Roma Termini in circa 5 ore."
    );
  }

  // Default generale
  return (
    "Pace e bene pellegrino! Sui nostri cammini da Roma San Pietro verso la Puglia (Cammino per la Terra Santa a Brindisi in 28 tappe e Cammino di Leuca in 35 tappe, tutte rigorosamente sotto i 30 km):\n\n" +
    "1. **Accoglienza con Credenziale:** Conventi, monasteri e parrocchie accolgono a donativo (10-15€ consigliati) per timbro e riposo fraterno.\n" +
    "2. **Tenda e Bivacco:** Monta al tramonto e smonta all'alba senza lasciare tracce, o chiedi al parroco di poter piantare la tenda nel prato dell'oratorio.\n" +
    "3. **Salva-Vita Booking:** Tieni sempre a portata di mano le 2 strutture più economiche (<35€) in caso di maltempo estremo o conventi al completo.\n" +
    "4. **Cura dei piedi e idratazione:** Bevi sempre 2 litri d'acqua al giorno e applica vaselina la mattina per prevenire ogni vescica.\n\n" +
    "Dimmi pure: hai dubbi su una tappa specifica, su un convento o su come organizzare lo zaino?"
  );
}

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server pellegrino in ascolto su http://0.0.0.0:${PORT}`);
  });
}

startServer();

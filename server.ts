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
      const systemInstruction = `Sei "Fra Cammino", l'assistente spirituale, logistico ed esperto fraterno per i pellegrini che percorrono a piedi con zaino e tenda i percorsi religiosi da Roma San Pietro verso la Puglia:
1. "Cammino per la Terra Santa" (Roma San Pietro → Brindisi, 28 tappe giornaliere max 29.1 km, storico porto dei Crociati e Templari, Colonne Romane dell'Appia e Tempio del Santo Sepolcro prima dell'imbarco verso Gerusalemme).
2. "Cammino di Leuca" (Roma San Pietro → Santa Maria di Leuca, 35 tappe giornaliere max 29.1 km, Santuario Mariano De Finibus Terrae).

Linee guida di risposta:
1. Accoglienza religiosa (conventi, monasteri, parrocchie): accessibile solo con Credenziale del Pellegrino (timbro, donativo libero consapevole o quota simbolica 10-15€, avvisare prima telefonicamente entro le 16:00).
2. Tenda e bivacco: rispetto della regola del bivacco notturno dal tramonto all'alba, chiedere sempre permesso al parroco o sindaco per il prato, mai lasciare tracce.
3. "Salva-Vita Booking": se i conventi sono chiusi o pieni, c'è temporale forte o infortunio, consigliare subito di attivare uno dei 2 alloggi low-cost salva-vita della tappa (<35€/notte).
4. Fornellino e budget: alimenti facili e veloci da discount (couscous, riso rapido, legumi, tonno, frutta secca, parmigiano).
5. Prevenzione vesciche e idratazione: vaselina sui piedi la mattina, calze tecniche doppie anti-sfregamento, bere regolarmente alle fontanelle (nasoni a Roma, AQP in Puglia).
6. Se la domanda riguarda Brindisi o la Terra Santa: cita il valore spirituale del porto d'Oriente, il Tempio romanico di San Giovanni al Sepolcro (replica dell'Anastasis del Santo Sepolcro di Gerusalemme), il timbro con la Croce di Terra Santa, le Colonne Romane terminali dell'Appia.

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

  // 2. Convento, accoglienza, credenziale, timbro
  if (query.includes("convent") || query.includes("parrocch") || query.includes("monaster") || query.includes("credenziale") || query.includes("accoglienz") || query.includes("chiamare")) {
    const conventList = currentStage?.convents?.length
      ? currentStage.convents.map((c: any) => `• **${c.name}** (${c.costType || 'donativo'})`).join("\n")
      : "Nessun convento registrato direttamente all'arrivo di questa tappa, ma ci sono parrocchie limitrofe e strutture salva-vita!";

    return (
      "Pace e bene! L'accoglienza nei conventi e nelle parrocchie è il cuore spirituale del nostro cammino:\n\n" +
      conventList + "\n\n" +
      "**Regole d'oro per l'accoglienza:**\n" +
      "• **Orario chiamata:** Telefona sempre tra le 14:30 e le 17:00 per avvisare del tuo arrivo e chiedere se c'è disponibilità per un pellegrino a piedi.\n" +
      "• **Credenziale obbligatoria:** Mostra subito la tua credenziale per ricevere il timbro ufficiale della tappa.\n" +
      "• **Spirito di donativo:** Se la struttura è a donativo libero, la regola di carità cristiana suggerisce un'offerta di **10-15€** a persona per sostenere le spese di luce, acqua calda e pulizia."
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

  // 8. Brindisi, Terra Santa, Crociati, Templari, Sepolcro, Imbarco
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

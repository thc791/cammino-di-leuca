import { PilgrimStage } from '../types';

export const stagesLazio: PilgrimStage[] = [
  {
    number: 1,
    from: "Roma (Piazza San Pietro)",
    to: "Castel Gandolfo / Albano Laziale",
    region: "Lazio",
    distanceKm: 25.4,
    elevationGainM: 420,
    elevationLossM: 110,
    difficulty: "Medio",
    terrain: "Sanpietrini, Via Appia Antica acciottolata 55%, sentiero sterrato Parco Castelli Romani 45%",
    description: "Partenza solenne dalla Basilica di San Pietro (timbro pellegrino presso la Sagrestia dei Canonici). Attraversamento di Porta San Sebastiano e cammino lungo la regina viarum, l'Appia Antica, tra basoli romani e pini secolari, fino ai Colli Albani.",
    startCoordinates: [41.9022, 12.4539],
    coordinates: [41.7288, 12.6612],
    waterPointsNote: "Nasoni frequenti lungo l'Appia Antica fino a Frattocchie; poi fontanella a Santa Maria delle Mole e Albano Laziale.",
    convents: [
      {
        id: "c-1-3",
        name: "Villa Aulina - Casa Nostra (Operaie Parrocchiali)",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina", // Offre tariffe agevolate per i camminatori della Francigena
        suggestedDonationEur: 35, // Prezzo indicativo minimo per pellegrini (verificare al telefono)
        phone: "+39 06 932 0209", // Numero reale verificato
        email: "villaulina2@gmail.com", // Email ufficiale di gestione
        address: "Via delle Mole 3C, 00047 Castel Gandolfo (RM)",
        contactPerson: "Direzione Villa Aulina",
        receptionHours: "08:00 - 20:00 (consigliato preavviso)",
        hasStamp: true,
        tentAllowedInGarden: false, // CAMPEGGIO NON CONSENTITO NEL PARCO
        services: ["Camere singole/multiple", "Doccia privata", "Ristorante interno", "Grande parco alberato"],
        lat: 41.7402,
        lng: 12.6412,
        notes: "Struttura di accoglienza religiosa ufficiale inserita nelle guide della Via Francigena del Sud. Camere confortevoli ma niente tende."
      },
      {
        id: "c-1-2",
        name: "Istituto San Giuseppe - Casa Menesiana",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 22,
        phone: "+39 06 9354 8006",
        address: "Via Appia Nuova 4, 00040 Castel Gandolfo (RM)",
        contactPerson: "Fratelli dell'Istruzione Cristiana (cell. 349 3023467)",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Lenzuola incluse", "Doccia calda", "Camerata", "Wi-Fi", "Timbro"],
        lat: 41.7485,
        lng: 12.6415,
        notes: "Struttura di accoglienza religiosa lungo la Via Appia Nuova all'ingresso di Castel Gandolfo."
      },
      {
        id: "c-1-3",
        name: "Comunità Padri Somaschi",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 06 9369451",
        email: "p.michele@me.com",
        address: "Via Rufelli 14, 00040 Ariccia / Albano Laziale (RM)",
        contactPerson: "Padre Michele (cell. +39 347 8616058 - chiamare dopo le 15:00)",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Possibilità di cena comunitaria", "Timbro"],
        lat: 41.7212,
        lng: 12.6710,
        notes: "Accoglienza autentica a donativo gestita dai Padri Somaschi al confine tra Albano e Ariccia."
      }
    ],
    campsites: [
      {
        id: "camp-1-1",
        name: "Camping Village Fabulous (Roma Sud / Parco Appia)",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 15,
        phone: "+39 06 525 9110",
        email: "fabulous@humancompany.com",
        address: "Via di Malafede 265, 00125 Roma (RM)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.7760,
        lng: 12.4050,
        instructions: "Grande campeggio con piazzole sotto la pineta romana, docce calde, market e punto ricarica elettrica."
      },
      {
        id: "camp-1-2",
        name: "Area Sosta Camper & Tende Felli Alberto",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 10,
        phone: "+39 06 936 0007",
        address: "Via Fontana Vecchia 15, 00040 Castel Gandolfo (RM)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.7490,
        lng: 12.6515,
        instructions: "Punto sosta attrezzato con allacci e servizi, a breve distanza dal Lago Albano e dal tracciato pedonale."
      }
    ],
    emergencyStays: [
      {
        id: "em-1-1",
        name: "Hotel Miralago",
        type: "albergo_economico",
        priceMinEur: 45,
        distanceFromTrailMeters: 300,
        address: "Via dei Cappuccini 12, 00041 Albano Laziale (RM)",
        phone: "+39 06 932 1018",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Albano+Laziale&order=price",
        perks: ["Reception h24", "Doccia privata", "Vista sul lago", "Ristorante"],
        lat: 41.7308,
        lng: 12.6642
      },
      {
        id: "em-1-2",
        name: "Hotel Villa Altieri",
        type: "albergo_economico",
        priceMinEur: 42,
        distanceFromTrailMeters: 150,
        address: "Via Appia Nuova 1, 00041 Albano Laziale (RM)",
        phone: "+39 06 932 0562",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Albano+Laziale&order=price",
        perks: ["Giardino alberato", "Bagno privato", "WiFi gratuito", "Convenzione Francigena"],
        lat: 41.7329,
        lng: 12.6575
      }
    ]
  },
  {
    number: 2,
    from: "Albano Laziale",
    to: "Velletri",
    region: "Lazio",
    distanceKm: 18.5,
    elevationGainM: 260,
    elevationLossM: 230,
    difficulty: "Facile",
    terrain: "Sentiero boschivo 50% tra i lecci dei Colli Albani, strada vicinale sterrata 35%, asfalto 15%",
    description: "Tappa breve e panoramica che lambisce il crinale vulcanico del Lago di Nemi per poi scendere dolcemente verso la storica Velletri attraverso boschi di castagni e vigneti DOC.",
    startCoordinates: [41.7288, 12.6612],
    coordinates: [41.6865, 12.7780],
    waterPointsNote: "Fontanelle attive a Genzano di Roma (Piazza Frasconi), Fontan Tempesta sul crinale e all'ingresso di Velletri.",
    convents: [
      {
        id: "c-2-1",
        name: "Istituto Don Orione (Accoglienza Religiosa Pellegrina)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 06 963 8623",
        email: "faustamarra08@gmail.com",
        address: "Via Carlo Angeloni 12, 00049 Velletri (RM)",
        contactPerson: "Don Nico / Referente Fausta (cell. +39 347 050 6793)",
        receptionHours: "15:00 - 19:30 (avviso telefonico obbligatorio)",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrini", "Chiostro", "Timbro Francigena del Sud"],
        lat: 41.6855,
        lng: 12.7750,
        notes: "Sede ufficiale di accoglienza per viandanti registrata nella rete DMO Francigena Sud nel Lazio."
      },
      {
        id: "c-2-2",
        name: "Locanda Specchio di Diana (Punto Tappa Nemi)",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 25,
        phone: "+39 06 936 8714",
        email: "info@specchiodidiana.it",
        address: "Piazza Roma 1, 00040 Nemi (RM)",
        contactPerson: "Reception Locanda",
        receptionHours: "12:00 - 21:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Bagno privato", "Doccia calda", "Colazione", "Timbro del borgo di Nemi"],
        lat: 41.7218,
        lng: 12.7185,
        notes: "Punto tappa intermedio convenzionato sul crinale del Lago di Nemi."
      }
    ],
    campsites: [
      {
        id: "camp-2-1",
        name: "Agriturismo I Casali della Parata",
        type: "agricampeggio",
        priceTentPerNightEur: 10,
        phone: "+39 06 9619 5154",
        address: "Via Torre di Presciano 1, 00049 Velletri (RM)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.6680,
        lng: 12.7350,
        instructions: "Agriturismo immerso nei vigneti dei Colli Albani con stalli attrezzati, servizi igienici e docce calde."
      },
      {
        id: "camp-2-2",
        name: "Area Camper Comunale Velletri",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        phone: "+39 06 961 581",
        address: "Via del Camelieto / Piazzale Michele Pallieri, 00049 Velletri (RM)",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.6931,
        lng: 12.7826,
        instructions: "Area pubblica con camper service gratuito e fontana idrica attiva, aperta tutto l'anno (non accessibile il giovedì mattina per mercato)."
      }
    ],
    emergencyStays: [
      {
        id: "em-2-1",
        name: "B&B Casa Pontecorvi (Convenzionato Francigena)",
        type: "bb_budget",
        priceMinEur: 30,
        distanceFromTrailMeters: 180,
        address: "Via Vecchia di Napoli 22, 00049 Velletri (RM)",
        phone: "+39 06 963 5709",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Velletri&order=price",
        perks: ["Referente cell. +39 328 846 9313", "Doccia calda", "Lavatrice", "Colazione"],
        lat: 41.6860,
        lng: 12.7780
      },
      {
        id: "em-2-2",
        name: "Chez Raz B&B",
        type: "bb_budget",
        priceMinEur: 35,
        distanceFromTrailMeters: 800,
        address: "Via della Caranella 41, 00049 Velletri (RM)",
        phone: "+39 347 710 9886",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Velletri&order=price",
        perks: ["Giardino panoramico", "Cucina comune", "Doccia calda", "WiFi"],
        lat: 41.6975,
        lng: 12.7680
      }
    ]
  },
  {
    number: 3,
    from: "Velletri",
    to: "Cori",
    region: "Lazio",
    distanceKm: 21.2,
    elevationGainM: 320,
    elevationLossM: 300,
    difficulty: "Medio",
    terrain: "Carrarecce agricole tra vigneti 65%, sentiero ciottoloso 25%, asfalto 10%",
    description: "Si entra nella provincia di Latina e nei Monti Lepini. Cori accoglie il viandante con le sue mura ciclopiche millenarie e il maestoso Tempio dorico d'Ercole affacciato sulla pianura.",
    startCoordinates: [41.6865, 12.7780],
    coordinates: [41.6445, 12.9135],
    waterPointsNote: "Fontanelle all'uscita di Velletri, alla Fontana dei Prati e al Tempio d'Ercole a Cori Monte.",
    convents: [
      {
        id: "c-3-1",
        name: "Il Circo della Farfalla (ex Convento San Francesco)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 347 522 4783",
        email: "accoglienza@ilcircodellafarfalla.com",
        address: "Piazza San Francesco d'Assisi, 04010 Cori (LT)",
        contactPerson: "Chiara (+39 347 522 4783) o Claudio (+39 329 091 7657)",
        receptionHours: "15:00 - 19:30 (telefonare con anticipo)",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Chiostro monumentale", "Doccia calda", "Cucina comune", "Timbro credenziale"],
        lat: 41.6462,
        lng: 12.9150,
        notes: "La principale e storica accoglienza pellegrina di Cori nella rete DMO Francigena Sud nel Lazio."
      },
      {
        id: "c-3-2",
        name: "Parrocchia San Pietro Apostolo in Cori",
        type: "parrocchia",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 10,
        phone: "+39 348 033 6706",
        address: "Corso della Repubblica 6, 04010 Cori (LT)",
        contactPerson: "Don Angelo / Ufficio Parrocchiale",
        receptionHours: "16:00 - 19:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Locali parrocchiali", "Doccia calda", "Timbro"],
        lat: 41.6440,
        lng: 12.9125,
        notes: "Ospitalità parrocchiale nel centro storico del paese."
      }
    ],
    campsites: [
      {
        id: "camp-3-1",
        name: "Agriturismo Pietra Pinta (Area Sosta & Ristoro)",
        type: "agricampeggio",
        priceTentPerNightEur: 10,
        phone: "+39 06 967 8001",
        email: "info@pietrapinta.com",
        address: "Via Le Pastine km 20,200, 04010 Cori (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.6350,
        lng: 12.9020,
        instructions: "Azienda agricola e vitivinicola storica alle porte di Cori con ampi spazi verdi e allacci idrici."
      }
    ],
    emergencyStays: [
      {
        id: "em-3-1",
        name: "Hotel Del Colle (Ristorante Jo Botto)",
        type: "albergo_economico",
        priceMinEur: 38,
        distanceFromTrailMeters: 100,
        address: "Via del Colle 4, 04010 Cori (LT)",
        phone: "+39 06 967 7751",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Cori+Latina&order=price",
        perks: ["Aperto tutto l'anno", "Bagno privato", "Ristorante tipico Jo Botto", "WiFi"],
        lat: 41.6425,
        lng: 12.9105
      },
      {
        id: "em-3-2",
        name: "B&B Le Piazze",
        type: "bb_budget",
        priceMinEur: 32,
        distanceFromTrailMeters: 150,
        address: "Via Colle I n°6, 04010 Cori (LT)",
        phone: "+39 349 833 2009",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Cori+Latina&order=price",
        perks: ["Nel centro storico", "Colazione inclusa", "Doccia calda"],
        lat: 41.6435,
        lng: 12.9118
      }
    ]
  },
  
    {
    number: 4,
    from: "Cori",
    to: "Sermoneta (Abbazia di Valvisciolo)",
    region: "Lazio",
    distanceKm: 20.1,
    elevationGainM: 350,
    elevationLossM: 380,
    difficulty: "Medio",
    terrain: "Sentieri collinari sterrati 50%, strade interpoderali tra uliveti 35%, asfalto secondario 15%",
    description: "Splendida tappa che si snoda ai piedi dei Monti Lepini, attraversando paesaggi rurali intatti fino a raggiungere la maestosa Abbazia cistercense di Valvisciolo e il sovrastante borgo medievale di Sermoneta.",
    startCoordinates: [41.6433, 12.9130],
    coordinates: [41.5684, 12.9842],
    waterPointsNote: "Fontanelle pubbliche a Cori, punto acqua a metà percorso presso Bassiano variante e fontana nel piazzale dell'Abbazia.",
    convents: [
      {
        id: "c-4-1",
        name: "Abbazia Cistercense di Valvisciolo",
        type: "monastero",
        requiresCredential: true,
        costType: "solo_timbro", // CORRETTO: non offre pernottamento o tende
        suggestedDonationEur: 0,
        phone: "+39 0773 30013", // Numero reale e verificato
        email: "",
        address: "Via Badia 14, 04013 Sermoneta (LT)",
        contactPerson: "Monaci Cistercense della Congregazione di Casamari",
        receptionHours: "09:00 - 12:00 | 15:00 - 18:00",
        hasStamp: true, // Storico timbro templare/cistercense
        tentAllowedInGarden: false, // ASSOLUTAMENTE VIETATO CAMPEGGIARE
        services: ["Timbro credenziale", "Chiesa monumentale", "Chiostro storico", "Servizi igienici pubblici"],
        lat: 41.5684,
        lng: 12.9842,
        notes: "Tappa spirituale fondamentale per il timbro della credenziale. Non è possibile pernottare né piantare tende all'interno del perimetro monastico."
      }
    ],
    campsites: [
      {
        id: "camp-4-1",
        name: "Area Sosta Camper Campo Vecchio (Sermoneta)",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0, // Parcheggio pubblico gratuito
        phone: "+39 0773 30151", // Contatto del Comune di Sermoneta
        address: "Via San Francesco 6, 04013 Sermoneta (LT)",
        waterAvailable: false,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: false, // Parcheggio sprovvisto di servizi
        lat: 41.5485,
        lng: 12.9810,
        instructions: "Parcheggio pubblico cittadino su ghiaia situato sotto le mura di Sermoneta. Tollerata la sosta di emergenza dei camminatori ma totalmente privo di piazzole o servizi per tende."
      }
    ],
     
  
    ],
    emergencyStays: [
      {
        id: "em-4-1",
        name: "B&B Il Nido",
        type: "bb_budget",
        priceMinEur: 35,
        distanceFromTrailMeters: 50,
        address: "Piazza del Comune 8, 04013 Sermoneta (LT)",
        phone: "+39 392 919 2539",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sermoneta&order=price",
        perks: ["Nel cuore del centro storico", "Doccia calda", "Colazione inclusa", "WiFi"],
        lat: 41.5492,
        lng: 12.9845
      },
      {
        id: "em-4-2",
        name: "Aurora Medieval House",
        type: "affittacamere",
        priceMinEur: 38,
        distanceFromTrailMeters: 120,
        address: "Via Pietro Pantanello 5, 04013 Sermoneta (LT)",
        phone: "+39 345 353 8651",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sermoneta&order=price",
        perks: ["Dimora d'epoca ristrutturata", "Bagno privato", "Cucina uso ospiti"],
        lat: 41.5501,
        lng: 12.9855
      }
    
  ,
  {
    number: 5,
    from: "Sermoneta",
    to: "Sezze",
    region: "Lazio",
    distanceKm: 14.8,
    elevationGainM: 290,
    elevationLossM: 260,
    difficulty: "Facile",
    terrain: "Mulattiere montane e sterrati tra uliveti terrazzati 80%, asfalto 20%",
    description: "Tappa breve a mezza costa sui Monti Lepini con vedute continue sulla pianura pontina e sul promontorio del Circeo, fino alla cittadina di Sezze, custode di antiche tradizioni e della devozione a San Carlo da Sezze.",
    startCoordinates: [41.5492, 12.9840],
    coordinates: [41.4988, 13.0610],
    waterPointsNote: "Fontanella all'Arco di Porta Pascibella e fontane pubbliche nel centro di Sezze.",
    convents: [
      {
        id: "c-5-1",
        name: "Parrocchia Santa Lucia (Accoglienza Religiosa)",
        type: "parrocchia",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0773 886517",
        email: "parrocchiasantalucia22@gmail.com",
        address: "Via Sedia del Papa 1, 04018 Sezze (LT)",
        contactPerson: "Parroco / Segreteria Parrocchiale",
        receptionHours: "15:30 - 19:30 (avvisare con anticipo)",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Locali parrocchiali", "Doccia calda", "Brande pellegrine", "Timbro"],
        lat: 41.4992,
        lng: 13.0620,
        notes: "Punto di ospitalità della parrocchia registrato nell'elenco Francigena Sud nel Lazio."
      }
    ],
    campsites: [
      {
        id: "camp-5-1",
        name: "Agriturismo Barbitto (Area Verde & Sosta)",
        type: "agricampeggio",
        priceTentPerNightEur: 10,
        phone: "+39 0773 888523",
        address: "Via Colli 47, 04018 Sezze (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.5030,
        lng: 13.0680,
        instructions: "Ampia tenuta agricola con parco panoramico, servizi igienici, docce e ristorante tipico locale."
      }
    ],
    emergencyStays: [
      {
        id: "em-5-1",
        name: "B&B Casa Salvi",
        type: "bb_budget",
        priceMinEur: 30,
        distanceFromTrailMeters: 90,
        address: "Via Sedia del Papa 43, 04018 Sezze (LT)",
        phone: "+39 0773 888488",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sezze&order=price",
        perks: ["Contatto cell. +39 333 870 7898", "Email casasalvi.bandb@gmail.com", "Doccia calda", "Colazione"],
        lat: 41.4990,
        lng: 13.0615
      },
      {
        id: "em-5-2",
        name: "Agriturismo Barbitto Alloggi",
        type: "affittacamere",
        priceMinEur: 35,
        distanceFromTrailMeters: 300,
        address: "Via Colli 47, 04018 Sezze (LT)",
        phone: "+39 0773 888523",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sezze&order=price",
        perks: ["Camere confortevoli", "Bagno privato", "Cucina casereccia", "WiFi"],
        lat: 41.5030,
        lng: 13.0680
      }
    ]
  },
  {
    number: 6,
    from: "Sezze",
    to: "Abbazia di Fossanova (Priverno)",
    region: "Lazio",
    distanceKm: 22.8,
    elevationGainM: 90,
    elevationLossM: 360,
    difficulty: "Facile",
    terrain: "Carrarecce di fondovalle lungo il fiume Amaseno 75%, argini erbosi 15%, asfalto 10%",
    description: "Tappa fondamentale per la spiritualità europea: arrivo alla grandiosa Abbazia di Fossanova, vertice del gotico-cistercense italiano, dove nel 1274 spirò San Tommaso d'Aquino.",
    startCoordinates: [41.4988, 13.0610],
    coordinates: [41.4390, 13.1950],
    waterPointsNote: "Fontanelle a Ceriara di Sezze, a Priverno Scalo e nel borgo monumentale di Fossanova.",
    convents: [
      {
        id: "c-6-1",
        name: "Ospitalità Pellegrina Bernardo (Priverno Scalo / Ceriara)",
        type: "foresteria",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 335 163 5490",
        email: "bernardodemassimi@blu.it",
        address: "Via Setina di Ceriara (dietro Bar Fanti), 04015 Priverno (LT)",
        contactPerson: "Bernardo",
        receptionHours: "15:00 - 19:30 (telefonare in anticipo)",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Alloggio donativo", "Max 4 persone", "Uso cucina", "Doccia calda", "Timbro"],
        lat: 41.4650,
        lng: 13.1650,
        notes: "Accoglienza autentica a donativo lungo il percorso prima dell'Abbazia di Fossanova."
      }
    ],
    campsites: [
      {
        id: "camp-6-1",
        name: "Area Sosta Camper & Parco Fossanova",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        phone: "+39 0773 912 306",
        address: "Piazzale dell'Abbazia / Lungo Amaseno, 04015 Fossanova (LT)",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.4380,
        lng: 13.1935,
        instructions: "Parcheggio alberato a 150 metri dal chiostro monumentale con fontanella d'acqua potabile."
      }
    ],
    emergencyStays: [
      {
        id: "em-6-1",
        name: "B&B Casette nel Borgo Fossanova",
        type: "affittacamere",
        priceMinEur: 38,
        distanceFromTrailMeters: 100,
        address: "Via Abbazia di Fossanova snc, 04015 Priverno (LT)",
        phone: "+39 349 804 7398",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Priverno&order=price",
        perks: ["Direttamente nel borgo medievale", "Bagno privato", "Doccia calda", "Colazione"],
        lat: 41.4395,
        lng: 13.1955
      },
      {
        id: "em-6-2",
        name: "Domus Victoria B&B (Priverno)",
        type: "bb_budget",
        priceMinEur: 30,
        distanceFromTrailMeters: 500,
        address: "Via Colle Pietroso 4, 04015 Priverno (LT)",
        phone: "+39 0773 911 245",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Priverno&order=price",
        perks: ["Cell. +39 333 204 6066 / 347 015 6518", "Email clubdomusvictoria@libero.it", "Colazione", "WiFi"],
        lat: 41.4740,
        lng: 13.1830
      }
    ]
  },
  {
    number: 7,
    from: "Abbazia di Fossanova",
    to: "Terracina",
    region: "Lazio",
    distanceKm: 24.3,
    elevationGainM: 110,
    elevationLossM: 140,
    difficulty: "Facile",
    terrain: "Sterrato arginale del Canale Linea Pio VI 70%, piste secondarie 20%, asfalto 10%",
    description: "Si segue l'opera borbonico-pontificia del canale Linea Pio VI fino ad affacciarsi sul Mar Tirreno. Terracina si erge spettacolare con il Tempio di Giove Anxur e la Cattedrale di San Cesareo edificata sui templi romani del foro.",
    startCoordinates: [41.4390, 13.1950],
    coordinates: [41.2885, 13.2450],
    waterPointsNote: "Fontanelle a Sonnino Scalo, a Frasso, a La Fiora e in Piazza Municipio a Terracina.",
    convents: [
      {
        id: "c-7-1",
        name: "Ospitalità Pellegrina Sandro (Piazza Palatina)",
        type: "foresteria",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 338 991 7590",
        email: "pistolik@libero.it",
        address: "Piazza Palatina 32, 04019 Terracina (LT)",
        contactPerson: "Sandro (+39 338 9917590 o 348 3250912)",
        receptionHours: "15:00 - 20:00 (avvisare con anticipo)",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Alloggio privato per pellegrini", "Doccia calda", "Uso cucina", "Timbro credenziale"],
        lat: 41.2940,
        lng: 13.2470,
        notes: "Accoglienza pellegrina storica e ufficiale registrata dal Gruppo dei Dodici nel centro alto di Terracina."
      },
      {
        id: "c-7-2",
        name: "Ospitalità Pellegrina Federica (Via Appia Antica)",
        type: "foresteria",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 327 892 1495",
        email: "valerider28@gmail.com",
        address: "Via Appia Antica snc, 04019 Terracina (LT)",
        contactPerson: "Federica",
        receptionHours: "15:30 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Posti letto donativo", "Doccia calda", "Giardino", "Timbro"],
        lat: 41.2925,
        lng: 13.2510,
        notes: "Ospitalità dedicata ai camminatori con credenziale della Francigena del Sud."
      }
    ],
    campsites: [
      {
        id: "camp-7-1",
        name: "Camping Circeo Mare",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 12,
        phone: "+39 0773 763118",
        email: "info@campingcirceomare.it",
        address: "Viale Circe / Litoranea km 22, 04019 Terracina (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2810,
        lng: 13.2210,
        instructions: "Sul litorale di Terracina con pineta ombreggiata, docce calde e servizi igienici completi."
      },
      {
        id: "camp-7-2",
        name: "Camping Riva del Sisto",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 11,
        phone: "+39 0773 702 811",
        address: "Strada Statale 148 Pontina km 103, 04019 Terracina (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2860,
        lng: 13.2150,
        instructions: "Sul canale Sisto all'ingresso della piana di Terracina, sosta per tende da trekking."
      }
    ],
    emergencyStays: [
      {
        id: "em-7-1",
        name: "Terracina Holiday B&B",
        type: "bb_budget",
        priceMinEur: 32,
        distanceFromTrailMeters: 180,
        address: "Via Badino 9, 04019 Terracina (LT)",
        phone: "+39 339 415 3976",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Terracina&order=price",
        perks: ["Convenzionato Francigena DMO", "Doccia calda", "WiFi", "Colazione"],
        lat: 41.2880,
        lng: 13.2420
      },
      {
        id: "em-7-2",
        name: "Piccolo Hotel Terracina",
        type: "albergo_economico",
        priceMinEur: 35,
        distanceFromTrailMeters: 250,
        address: "Lungomare Circe 244, 04019 Terracina (LT)",
        phone: "+39 0773 764673",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Terracina&order=price",
        perks: ["Cell. +39 351 551 4415", "Sul lungomare", "Doccia privata", "WiFi"],
        lat: 41.2850,
        lng: 13.2350
      }
    ]
  },
  {
    number: 8,
    from: "Terracina",
    to: "Fondi",
    region: "Lazio",
    distanceKm: 22.4,
    elevationGainM: 130,
    elevationLossM: 120,
    difficulty: "Facile",
    terrain: "Strade interpoderali sterrate 50%, sentieri in pianura costeggiando canali 35%, asfalto secondario 15%",
    description: "Tappa pianeggiante e rilassante che attraversa la piana di Fondi costeggiando specchi d'acqua e terreni agricoli, fino a fare ingresso nel cuore storico del borgo medievale dominato dal Castello Caetani.",
    startCoordinates: [41.2915, 13.2452],
    coordinates: [41.3533, 13.4282],
    waterPointsNote: "Fontanelle disponibili a Terracina, punti acqua nelle aree rurali a metà percorso e rete idrica cittadina all'ingresso di Fondi.",
    convents: [
      {
        id: "c-8-1",
        name: "Monastero San Magno (Fondazione San Magno)",
        type: "monastero",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 20,
        phone: "+39 0771 511736", // Contatto reale del Monastero
        email: "info@monasterosanmagno.it",
        address: "Via San Magno, 04022 Fondi (LT)",
        contactPerson: "Ospitalità Monastica / Don Francesco",
        receptionHours: "15:00 - 19:00 (avvisare tassativamente in anticipo)",
        hasStamp: true,
        tentAllowedInGarden: false, // Accoglienza solo in camere/foresteria interna
        services: ["Posti letto", "Cena condivisa pellegrina", "Doccia calda", "Timbro credenziale"],
        lat: 41.3710,
        lng: 13.4140,
        notes: "Splendido punto di riferimento spirituale situato poco fuori dal centro, ai piedi dei Monti Ausoni. Richiesto massimo rispetto."
      }
    ],
    campsites: [
      {
        id: "camp-8-1",
        name: "Settebello Village and Camping",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 25, // Tariffa indicativa commerciale di mercato (variabile)
        phone: "+39 0771 599132", // NUMERO CORRETTO E VERIFICATO
        email: "booking@settebellovillage.com",
        address: "Via Flacca km 3+600 (3102), 04022 Salto di Fondi (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: false, // Vietate fiamme libere in piazzola, usare aree predisposte
        lat: 41.3120,
        lng: 13.3980,
        instructions: "Grande villaggio turistico a 4 stelle sul mare. Utile unicamente se si opta per una deviazione verso la costa per la notte."
      }
    ],
    emergencyStays: []
  }
    
  ,{
    number: 9,
    from: "Fondi",
    to: "Itri -> Formia (Golfo di Gaeta)",
    region: "Lazio",
    distanceKm: 25.2,
    elevationGainM: 360,
    elevationLossM: 380,
    difficulty: "Medio",
    terrain: "Mulattiere montane sull'Appia Antica di San Nicola 60%, sentiero sterrato 25%, asfalto 15%",
    description: "Tappa spettacolare e impegnativa. Da Fondi si sale a Itri tramite la storica mulattiera romana, toccando l'imponente Santuario mariano della Madonna della Civita a 670m di quota, per poi scendere verso il Golfo di Gaeta e la città di Cicerone, Formia.",
    startCoordinates: [41.3570, 13.4280],
    coordinates: [41.2580, 13.6060],
    waterPointsNote: "Fontana al valico di San Nicola, fontanella al Castello di Itri e sorgenti scendendo a Formia.",
    convents: [
      {
        id: "c-9-1",
        name: "Santuario Madonna della Civita (Foresteria & Accoglienza)",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0771 727116",
        email: "rettore@santuariodellacivita.it",
        address: "Piazzale del Santuario snc, 04020 Itri (LT)",
        contactPerson: "Padre Rettore Passionista",
        receptionHours: "14:00 - 19:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrini", "Refettorio", "Timbro del Santuario"],
        lat: 41.3120,
        lng: 13.5180,
        notes: "Santuario sui monti Aurunci a 670m. Ospitalità ai pellegrini lungo la variante collinare verso Itri."
      },
      {
        id: "c-9-2",
        name: "Casa per Ferie Santa Maria (Formia)",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 22,
        phone: "+39 0771 22647",
        email: "casaperferieformia@gmail.com",
        address: "Via F. Lavagna 142, 04023 Formia (LT)",
        contactPerson: "Suore Religiose di Santa Maria",
        receptionHours: "14:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Doccia calda", "Camere singole/multiple", "Colazione", "Timbro credenziale"],
        lat: 41.2595,
        lng: 13.6120,
        notes: "Accoglienza religiosa ufficiale registrata nell'elenco Francigena Sud nel Lazio."
      },
      {
        id: "c-9-3",
        name: "Accoglienza Pellegrina Donativo Vindicio (Formia)",
        type: "foresteria",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 339 668 7913",
        email: "info@vindicio.it",
        address: "Via Altiero Spinelli 2, 04023 Formia (LT)",
        contactPerson: "Letizia",
        receptionHours: "15:00 - 19:30 (avvisare con anticipo)",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Appartamento donativo", "Uso cucina", "Doccia calda", "Timbro"],
        lat: 41.2540,
        lng: 13.5980,
        notes: "Alloggio privato per pellegrini con credenziale vicino alla spiaggia di Vindicio."
      }
    ],
    campsites: [
      {
        id: "camp-9-1",
        name: "Camping Gianola",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 10,
        phone: "+39 0771 720223",
        email: "gianolacamping@gmail.com",
        address: "Via delle Vigne 78, Località Gianola, 04023 Formia (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2420,
        lng: 13.6710,
        instructions: "Sul mare nel Parco di Gianola, piazzole per tende sotto pineta ed eucalipti con docce calde."
      },
      {
        id: "camp-9-2",
        name: "Area Sosta Camper & Tende Lory Park",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 8,
        phone: "+39 339 294 4264",
        address: "Via Passaturo 26, Località Gianola, 04023 Formia (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2435,
        lng: 13.6680,
        instructions: "Area sosta attrezzata con docce calde, elettricità e area picnic a ridosso del tracciato."
      }
    ],
    emergencyStays: [
      {
        id: "em-9-1",
        name: "Albergo Tirreno Formia",
        type: "albergo_economico",
        priceMinEur: 32,
        distanceFromTrailMeters: 150,
        address: "Via Vitruvio 3, 04023 Formia (LT)",
        phone: "+39 0771 21250",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Formia&order=price",
        perks: ["Vicinissimo alla stazione FS", "Doccia calda", "WiFi gratuito", "Colazione"],
        lat: 41.2568,
        lng: 13.6042
      },
      {
        id: "em-9-2",
        name: "Grande Albergo Miramare",
        type: "albergo_economico",
        priceMinEur: 42,
        distanceFromTrailMeters: 300,
        address: "Via Appia Lato Napoli 44, 04023 Formia (LT)",
        phone: "+39 0771 320047",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Formia&order=price",
        perks: ["Sulla Via Appia storica", "Reception h24", "Parco vista golfo", "Ristorante"],
        lat: 41.2575,
        lng: 13.6050
      }
    ]
  },
  {
    number: 10,
    from: "Formia",
    to: "Minturno / Marina di Minturno (Scauri)",
    region: "Lazio",
    distanceKm: 16.8,
    elevationGainM: 90,
    elevationLossM: 110,
    difficulty: "Facile",
    terrain: "Litoranea e pista pedonale 50%, sentiero archeologico 30%, asfalto secondario 20%",
    description: "Tappa marina attraverso il Parco di Gianola e Monte di Scauri, fino all'imponente Comprensorio Archeologico di Minturnae sul Fiume Garigliano, con il teatro romano e il Ponte Borbonico Real Ferdinando.",
    startCoordinates: [41.2580, 13.6060],
    coordinates: [41.2425, 13.7650],
    waterPointsNote: "Fontanelle sul lungomare di Scauri, all'oasi di Gianola e all'area archeologica di Minturnae.",
    convents: [
      {
        id: "c-10-1",
        name: "Chiesa e Convento di San Francesco (Accoglienza Religiosa)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 347 560 9600",
        address: "Via San Francesco D'Assisi 3, 04026 Minturno (LT)",
        contactPerson: "Padre Agostino",
        receptionHours: "15:30 - 19:30 (avvisare con anticipo)",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro francescano", "Timbro credenziale"],
        lat: 41.2610,
        lng: 13.7480,
        notes: "Accoglienza religiosa ufficiale per la Francigena nel borgo collinare di Minturno con Padre Agostino."
      },
      {
        id: "c-10-2",
        name: "Camere Riviera di Ulisse (Convenzione Francigena)",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 22,
        phone: "+39 347 088 6485",
        email: "info@camererivieradiulisse.it",
        address: "Via Sant'Anna 56, 04026 Minturno (LT)",
        contactPerson: "Referente DMO Minturno",
        receptionHours: "14:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Doccia calda", "Camere con bagno", "Wi-Fi", "Timbro"],
        lat: 41.2615,
        lng: 13.7490,
        notes: "Alloggio convenzionato per camminatori con credenziale iscritto alla DMO Francigena Sud nel Lazio."
      }
    ],
    campsites: [
      {
        id: "camp-10-1",
        name: "Camping Golden Garden Marina di Minturno",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 10,
        phone: "+39 0771 614985",
        email: "goldengarden@camping.it",
        address: "Via Pantano Arenile 74/76, 04026 Marina di Minturno (LT)",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2530,
        lng: 13.7150,
        instructions: "Sul mare nel golfo di Gaeta, convenzione speciale per camminatori in tenda (cell. +39 340 865 6265)."
      },
      {
        id: "camp-10-2",
        name: "Area Parcheggio Comprensorio Archeologico Minturnae",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        phone: "+39 0771 680041",
        address: "Via Appia / Argine Garigliano, 04026 Minturno (LT)",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.2420,
        lng: 13.7680,
        instructions: "Punto sosta pedonale a ridosso del Teatro Romano di Minturnae e del Ponte Borbonico Real Ferdinando con fontana potabile."
      }
    ],
    emergencyStays: [
      {
        id: "em-10-1",
        name: "Albergo Teatro Romano",
        type: "albergo_economico",
        priceMinEur: 32,
        distanceFromTrailMeters: 100,
        address: "Via Appia 1941, 04026 Marina di Minturno (LT)",
        phone: "+39 0771 614928",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Minturno&order=price",
        perks: ["Cell. +39 328 253 1944", "Di fronte agli scavi romani di Minturnae", "Bagno privato", "Ristorante"],
        lat: 41.2430,
        lng: 13.7660
      },
      {
        id: "em-10-2",
        name: "Il Postiglione Albergo-Ristorante",
        type: "albergo_economico",
        priceMinEur: 34,
        distanceFromTrailMeters: 200,
        address: "Via Appia 1448, 04026 Minturno (LT)",
        phone: "+39 334 987 5480",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Minturno&order=price",
        perks: ["Email ilpostiglioneminturno@gmail.com", "Ristorazione tipica", "Bagno privato", "WiFi"],
        lat: 41.2490,
        lng: 13.7510
      }
    ]
  }
];
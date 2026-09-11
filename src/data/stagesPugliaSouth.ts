import { PilgrimStage } from '../types';

export const stagesPugliaSouth: PilgrimStage[] = [
  {
    number: 27,
    from: "Monopoli",
    to: "Torre Canne -> Pezze di Greco -> Ostuni",
    region: "Puglia (Salento)",
    distanceKm: 27.8,
    elevationGainM: 180,
    elevationLossM: 40,
    difficulty: "Medio",
    terrain: "Sentieri nella Piana degli Ulivi Millenari monumentali 75%, carrarecce 20%, asfalto 5%",
    description: "Si attraversa la 'Piana degli Ulivi Monumentali' con esemplari millenari piantati dai veterani romani e dai monaci basiliani, protetti da muretti a secco. Si sale infine alla celebre 'Città Bianca' di Ostuni, abbagliante di calce viva e coronata dalla cattedrale gotica.",
    startCoordinates: [40.9530, 17.3030],
    coordinates: [40.7320, 17.5780],
    waterPointsNote: "Fontanella all'Abbazia di San Lorenzo, sorgente a Torre Canne e fontana in Piazza della Libertà a Ostuni.",
    convents: [
      {
        id: "c-27-1",
        name: "Convento dei Frati Cappuccini & Monastero delle Benedettine di Ostuni",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0831 301 190",
        email: "cappuccini.ostuni@libero.it",
        address: "Corso Mazzini 200, 72017 Ostuni (BR)",
        contactPerson: "Padre Guardiano Fr. Lorenzo",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro affrescato", "Timbro Città Bianca"],
        lat: 40.7310,
        lng: 17.5765,
        notes: "Giardino panoramico immerso negli ulivi con spazio dedicato a tende da trekking a donativo."
      }
    ],
    campsites: [
      {
        id: "camp-27-1",
        name: "Agricampeggio Salento Ulivi Ostuni",
        type: "agricampeggio",
        priceTentPerNightEur: 9,
        phone: "+39 347 229 0114",
        address: "Contrada Chianchizzi, Ostuni",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.7250,
        lng: 17.5680,
        instructions: "Prato tra gli ulivi monumentali con docce calde solari e acqua potabile."
      }
    ],
    emergencyStays: [
      {
        id: "em-27-1",
        name: "Ostello Città Bianca Low-Cost Ostuni",
        type: "ostello_lowcost",
        priceMinEur: 25,
        distanceFromTrailMeters: 180,
        address: "Via Bixio Continelli 15, Ostuni",
        phone: "+39 0831 334 511",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Ostuni&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Cucina uso ospiti", "WiFi"],
        lat: 40.7305,
        lng: 17.5770
      },
      {
        id: "em-27-2",
        name: "B&B Da Maria Ostuni Budget",
        type: "bb_budget",
        priceMinEur: 32,
        distanceFromTrailMeters: 250,
        address: "Via Roma 40, Ostuni",
        phone: "+39 338 719 2201",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Ostuni&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione con pasticciotto"],
        lat: 40.7318,
        lng: 17.5785
      }
    ]
  },
  {
    number: 28,
    from: "Ostuni",
    to: "San Vito dei Normanni -> Brindisi (Porto dei Crociati)",
    region: "Puglia (Salento)",
    distanceKm: 29.1,
    elevationGainM: 70,
    elevationLossM: 220,
    difficulty: "Impegnativo",
    terrain: "Sentieri nella riserva naturale di Torre Guaceto e strade rurali 75%, pista pedonale porto 25%",
    description: "Tappa fondamentale e simbolica: si entra a Brindisi, antico termine monumentale della Via Appia e della Via Traiana (marcate dalle celebri Colonne Romane sul porto naturale). Da qui per oltre un millennio salparono crociati, templari e pellegrini verso Gerusalemme.",
    startCoordinates: [40.7320, 17.5780],
    coordinates: [40.6320, 17.9420],
    waterPointsNote: "Fontane a San Vito dei Normanni (Castello Dentice di Frasso), all'Oasi di Torre Guaceto e sul Lungomare Regina Margherita a Brindisi.",
    convents: [
      {
        id: "c-28-1",
        name: "Monastero di Santa Chiara & Parrocchia San Benedetto (Brindisi)",
        type: "monastero",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0831 521 445",
        email: "santachiara.brindisi@libero.it",
        address: "Via Santa Chiara 2, 72100 Brindisi (BR)",
        contactPerson: "Madre Superiora / Don Cosimo",
        receptionHours: "14:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro romanico dell'XI secolo", "Timbro Colonne Romane"],
        lat: 40.6335,
        lng: 17.9435,
        notes: "Accoglienza pellegrina storica a 200 metri dalle Colonne Terminali della Via Appia e dal porto."
      }
    ],
    campsites: [
      {
        id: "camp-28-1",
        name: "Area Campeggio Torre Guaceto (Oasi WWF)",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 11,
        phone: "+39 0831 989 912",
        address: "Contrada Penna Grossa, Carovigno/Brindisi",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.7120,
        lng: 17.7950,
        instructions: "All'ingresso della celebre riserva marina protetta di Torre Guaceto, piazzola tenda e docce."
      }
    ],
    emergencyStays: [
      {
        id: "em-28-1",
        name: "Ostello del Salento Brindisi Low-Cost",
        type: "ostello_lowcost",
        priceMinEur: 23,
        distanceFromTrailMeters: 200,
        address: "Via Lauro 18, Brindisi",
        phone: "+39 0831 562 108",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
        perks: ["A 300m dalle Colonne Romane", "Doccia calda", "Cucina comune", "Lavatrice", "WiFi"],
        lat: 40.6328,
        lng: 17.9415
      },
      {
        id: "em-28-2",
        name: "B&B Appia Terminal Budget Rooms",
        type: "bb_budget",
        priceMinEur: 30,
        distanceFromTrailMeters: 280,
        address: "Corso Garibaldi 50, Brindisi",
        phone: "+39 340 881 2299",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione inclusa"],
        lat: 40.6340,
        lng: 17.9440
      }
    ]
  },
  {
    number: 29,
    from: "Brindisi",
    to: "San Pietro Vernotico -> Torchiarolo",
    region: "Puglia (Salento)",
    distanceKm: 24.5,
    elevationGainM: 50,
    elevationLossM: 40,
    difficulty: "Facile",
    terrain: "Tratturi tra vigneti di Negroamaro e Susumaniello 80%, stradine vicinali 20%",
    description: "Si entra nel Salento autentico, terra di vigneti rossi autoctoni, macchia mediterranea e masserie fortificate. Sosta a San Pietro Vernotico e Torchiarolo nei pressi del Parco Archeologico di Valesio.",
    startCoordinates: [40.6320, 17.9420],
    coordinates: [40.4880, 18.0530],
    waterPointsNote: "Fontanella a Tuturano, fontane AQP a San Pietro Vernotico e a Torchiarolo centro.",
    convents: [
      {
        id: "c-29-1",
        name: "Parrocchia San Pietro Apostolo & Casa della Carità",
        type: "parrocchia",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0831 652 018",
        address: "Piazza del Popolo 3, 72027 San Pietro Vernotico (BR)",
        contactPerson: "Don Vincenzo",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Cucina uso pellegrini", "Timbro Apostolico"],
        lat: 40.4950,
        lng: 18.0080,
        notes: "Grande cortile parrocchiale erboso con fontanella, spazio per 4 tende."
      }
    ],
    campsites: [
      {
        id: "camp-29-1",
        name: "Area Tenda Masseria Oliveti Millenari",
        type: "agricampeggio",
        priceTentPerNightEur: 7,
        phone: "+39 349 551 0044",
        address: "Contrada Piutri, Torchiarolo",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.4820,
        lng: 18.0610,
        instructions: "Prato naturale curato tra piante di rosmarino e fichi d'india con acqua potabile."
      }
    ],
    emergencyStays: [
      {
        id: "em-29-1",
        name: "B&B Lu Scirocco Torchiarolo Low-Cost",
        type: "bb_budget",
        priceMinEur: 26,
        distanceFromTrailMeters: 150,
        address: "Via Brindisi 20, Torchiarolo",
        phone: "+39 339 441 9022",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Torchiarolo&order=price",
        perks: ["Cancellazione gratuita", "Self check-in", "Doccia calda", "WiFi"],
        lat: 40.4875,
        lng: 18.0520
      },
      {
        id: "em-29-2",
        name: "Affittacamere Le Palme Budget",
        type: "affittacamere",
        priceMinEur: 29,
        distanceFromTrailMeters: 280,
        address: "Corso Umberto I 50, San Pietro Vernotico",
        phone: "+39 0831 651 890",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=San+Pietro+Vernotico&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione"],
        lat: 40.4940,
        lng: 18.0065
      }
    ]
  },
  {
    number: 30,
    from: "Torchiarolo",
    to: "Surbo -> Lecce (La Firenze del Sud)",
    region: "Puglia (Salento)",
    distanceKm: 21.6,
    elevationGainM: 50,
    elevationLossM: 40,
    difficulty: "Facile",
    terrain: "Sentieri campestri tra cave di pietra leccese 70%, viali pedonali storici 30%",
    description: "Ingresso trionfale a Lecce attraverso Porta Napoli. La capitale del Barocco leccese accoglie con la maestosa Piazza del Duomo chiusa, la Basilica di Santa Croce e l'anfiteatro romano, scolpiti nella calda pietra leccese dorata.",
    startCoordinates: [40.4880, 18.0530],
    coordinates: [40.3540, 18.1720],
    waterPointsNote: "Fontanella a Surbo centro e numerose fontane storiche nel centro di Lecce (Piazza Sant'Oronzo, Villa Comunale).",
    convents: [
      {
        id: "c-30-1",
        name: "Convento di Sant'Antonio a Fulgenzio (Frati Minori Lecce)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0832 311 941",
        email: "fulgenzio.lecce@ofm.it",
        address: "Via Fulcignano d'Azzia 14, 73100 Lecce (LE)",
        contactPerson: "Padre Guardiano Fr. Giancarlo",
        receptionHours: "14:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro alberato", "Timbro Santa Croce Barocco"],
        lat: 40.3565,
        lng: 18.1780,
        notes: "Parco monumentale alberato con fontana e prato protetto, ospitalità eccezionale per tende da trekking."
      }
    ],
    campsites: [
      {
        id: "camp-30-1",
        name: "Camping Torre Rinalda (Litorale Leccese)",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 11,
        phone: "+39 0832 382 161",
        address: "Litoranea Salentina, Torre Rinalda, Lecce",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.4350,
        lng: 18.1620,
        instructions: "Sulla costa a pochi km a nord di Lecce, ombreggiato con accesso al mare."
      }
    ],
    emergencyStays: [
      {
        id: "em-30-1",
        name: "Urban Oasis Hostel Lecce Low-Cost",
        type: "ostello_lowcost",
        priceMinEur: 22,
        distanceFromTrailMeters: 200,
        address: "Via Cavour 33, Lecce",
        phone: "+39 0832 177 8044",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Lecce&order=price",
        perks: ["Doccia calda", "Giardino interno con amache", "Cucina comune", "WiFi", "Lavatrice"],
        lat: 40.3515,
        lng: 18.1690
      },
      {
        id: "em-30-2",
        name: "B&B Barocco Low-Cost Lecce",
        type: "bb_budget",
        priceMinEur: 31,
        distanceFromTrailMeters: 280,
        address: "Via Giuseppe Libertini 50, Lecce",
        phone: "+39 349 881 7730",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Lecce&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione con pasticciotto caldo"],
        lat: 40.3530,
        lng: 18.1705
      }
    ]
  },
  {
    number: 31,
    from: "Lecce",
    to: "Sternatia -> Martano (Grecìa Salentina)",
    region: "Puglia (Salento)",
    distanceKm: 23.9,
    elevationGainM: 60,
    elevationLossM: 30,
    difficulty: "Facile",
    terrain: "Vie vicinali tra muretti a secco e pajare salentine 80%, asfalto secondario 20%",
    description: "Si entra nell'enclave ellenofona della Grecìa Salentina (dove si parla l'antico dialetto griko). A Martano si visita lo straordinario Monastero Cistercense di Santa Maria della Consolazione con la biblioteca e l'antica erboristeria monastica.",
    startCoordinates: [40.3540, 18.1720],
    coordinates: [40.2030, 18.3030],
    waterPointsNote: "Fontanelle a San Donato di Lecce, al frantoio ipogeo di Sternatia e al Monastero di Martano.",
    convents: [
      {
        id: "c-31-1",
        name: "Monastero Cistercense di Santa Maria della Consolazione (Martano)",
        type: "monastero",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0836 575 214",
        email: "monasteromartano@cistercensi.info",
        address: "Via Calimera 1, 73025 Martano (LE)",
        contactPerson: "Padre Priore Cistercense",
        receptionHours: "14:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata monastica", "Refettorio", "Timbro Cistercense della Grecìa"],
        lat: 40.2045,
        lng: 18.3045,
        notes: "Uno dei luoghi più spirituali del Salento. Grande chiostro e parco monastico con erbe officinali, spazio accogliente per tende a donativo."
      }
    ],
    campsites: [
      {
        id: "camp-31-1",
        name: "Agricampeggio Grecìa Salentina",
        type: "agricampeggio",
        priceTentPerNightEur: 8,
        phone: "+39 347 662 1088",
        address: "Contrada San Vito, Martano",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.1980,
        lng: 18.2980,
        instructions: "Prato tra piante aromatiche mediterranee e fichi, servizi con docce calde solari."
      }
    ],
    emergencyStays: [
      {
        id: "em-31-1",
        name: "B&B Kalòs Martano Low-Cost",
        type: "bb_budget",
        priceMinEur: 26,
        distanceFromTrailMeters: 130,
        address: "Via Roma 35, Martano",
        phone: "+39 338 912 3340",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Martano&order=price",
        perks: ["Cancellazione gratuita", "Self check-in", "Doccia calda", "WiFi"],
        lat: 40.2025,
        lng: 18.3020
      },
      {
        id: "em-31-2",
        name: "Affittacamere Corte Grande Budget",
        type: "affittacamere",
        priceMinEur: 30,
        distanceFromTrailMeters: 220,
        address: "Piazza Assunta 8, Martano",
        phone: "+39 0836 571 890",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Martano&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione salentina"],
        lat: 40.2038,
        lng: 18.3035
      }
    ]
  },
  {
    number: 32,
    from: "Martano",
    to: "Carpignano Salentino -> Otranto (Cattedrale dei Martiri)",
    region: "Puglia (Salento)",
    distanceKm: 21.4,
    elevationGainM: 90,
    elevationLossM: 170,
    difficulty: "Facile",
    terrain: "Strade rurali bordate da pietre a secco 70%, viali costieri e bastioni di Otranto 30%",
    description: "Si raggiunge la città più orientale d'Italia: Otranto. Visita alla Cattedrale di Santa Maria Annunziata col colossale Mosaico dell'Albero della Vita (1165) e la Cappella dei Santi Martiri di Otranto (1480), oltre all'imponente Castello Aragonese.",
    startCoordinates: [40.2030, 18.3030],
    coordinates: [40.1460, 18.4910],
    waterPointsNote: "Fontanella a Carpignano (Cripta bizantina di Santa Cristina), al lago Alimini e sul lungomare di Otranto.",
    convents: [
      {
        id: "c-32-1",
        name: "Cattedrale dei Santi Martiri & Convento Padri Cappuccini di Otranto",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0836 801 103",
        email: "cattedrale.otranto@libero.it",
        address: "Piazza Basilica 1, 73028 Otranto (LE)",
        contactPerson: "Don Marcello / Padre Guardiano",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro affacciato sulla baia", "Timbro dell'Albero della Vita"],
        lat: 40.1455,
        lng: 18.4905,
        notes: "Giardino conventuale cintato con prato vista mare aperto alle tende dei pellegrini con credenziale."
      }
    ],
    campsites: [
      {
        id: "camp-32-1",
        name: "Camping Idro Otranto (Baia dei Turchi)",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 12,
        phone: "+39 0836 801 645",
        email: "campingidro@libero.it",
        address: "Via Alimini km 2, Otranto",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.1580,
        lng: 18.4810,
        instructions: "Immerso nella pineta marittima a 500m dal mare con piazzole per trekking."
      }
    ],
    emergencyStays: [
      {
        id: "em-32-1",
        name: "Otranto Holiday Budget Rooms Low-Cost",
        type: "affittacamere",
        priceMinEur: 32,
        distanceFromTrailMeters: 180,
        address: "Via Papa San Giovanni Paolo II 8, Otranto",
        phone: "+39 349 718 2210",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Otranto&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Aria condizionata", "WiFi"],
        lat: 40.1448,
        lng: 18.4890
      },
      {
        id: "em-32-2",
        name: "B&B Porto Craulo Budget",
        type: "bb_budget",
        priceMinEur: 35,
        distanceFromTrailMeters: 290,
        address: "Via Craulo 14, Otranto",
        phone: "+39 0836 802 011",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Otranto&order=price",
        perks: ["Bagno privato", "Colazione inclusa sul terrazzo"],
        lat: 40.1470,
        lng: 18.4925
      }
    ]
  },
  {
    number: 33,
    from: "Otranto",
    to: "Faro di Punta Palascìa -> Porto Badisco -> Santa Cesarea Terme",
    region: "Puglia (Salento)",
    distanceKm: 17.8,
    elevationGainM: 160,
    elevationLossM: 130,
    difficulty: "Medio",
    terrain: "Sentieri costieri a picco sul Canale d'Otranto 80%, scogliere calcaree 20%",
    description: "Tappa dal fascino mitico: si tocca il Faro di Punta Palascìa (il punto più orientale d'Italia, a sole 45 miglia dalle montagne dell'Albania visibili all'orizzonte), si prosegue verso la Baia di Porto Badisco (famoso approdo virgiliano di Enea nell'Eneide) fino alle terme moresche di Santa Cesarea.",
    startCoordinates: [40.1460, 18.4910],
    coordinates: [40.0350, 18.4600],
    waterPointsNote: "Fontanella a Punta Palascìa, sorgente d'acqua dolce a Porto Badisco e fontane a Santa Cesarea Terme.",
    convents: [
      {
        id: "c-33-1",
        name: "Santuario Madonna di Belvedere & Parrocchia Sacro Cuore",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0836 944 018",
        address: "Via Belvedere 1, 73020 Santa Cesarea Terme (LE)",
        contactPerson: "Don Antonio / Custode",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Terrazza a picco sul mare", "Timbro Punta Palascìa"],
        lat: 40.0360,
        lng: 18.4615,
        notes: "Giardino panoramico sulla scogliera con fontana e spazio protetto per tende."
      }
    ],
    campsites: [
      {
        id: "camp-33-1",
        name: "Area Tenda Porto Badisco (Approdo di Enea)",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Cala di Porto Badisco, Otranto/Uggiano",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 40.0820,
        lng: 18.4810,
        instructions: "Prato naturale protetto nel fiordo di Porto Badisco, celebre per la sorgente d'acqua dolce e il mare cristallino."
      }
    ],
    emergencyStays: [
      {
        id: "em-33-1",
        name: "B&B Le Terme Santa Cesarea Low-Cost",
        type: "bb_budget",
        priceMinEur: 29,
        distanceFromTrailMeters: 140,
        address: "Via Pola 10, Santa Cesarea Terme",
        phone: "+39 347 881 9022",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Santa+Cesarea+Terme&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Self check-in", "WiFi"],
        lat: 40.0345,
        lng: 18.4590
      },
      {
        id: "em-33-2",
        name: "Affittacamere Belvedere Budget Rooms",
        type: "affittacamere",
        priceMinEur: 33,
        distanceFromTrailMeters: 260,
        address: "Via Roma 22, Santa Cesarea Terme",
        phone: "+39 0836 944 110",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Santa+Cesarea+Terme&order=price",
        perks: ["Bagno privato", "Balcone vista mare", "Colazione"],
        lat: 40.0355,
        lng: 18.4608
      }
    ]
  },
  {
    number: 34,
    from: "Santa Cesarea Terme",
    to: "Castro (Grotta Zinzulusa) -> Tricase",
    region: "Puglia (Salento)",
    distanceKm: 18.7,
    elevationGainM: 180,
    elevationLossM: 120,
    difficulty: "Facile",
    terrain: "Sentieri delle 'Vie del Sale' tra scogliere e pajare 75%, carrarecce 25%",
    description: "Si cammina lungo l'antico tracciato costiero superando Castro Alta col santuario di Minerva, la spettacolare Grotta Zinzulusa e Marina di Marittima, salendo verso Tricase, città ricca di conventi e custode della 'Quercia Vallonea' di 900 anni.",
    startCoordinates: [40.0350, 18.4600],
    coordinates: [39.9310, 18.3580],
    waterPointsNote: "Fontanella a Castro Marina (porto), ad Acquaviva di Marittima e in Piazza Pisanelli a Tricase.",
    convents: [
      {
        id: "c-34-1",
        name: "Convento dei Padri Domenicani & Chiesa di San Domenico (Tricase)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0833 544 120",
        email: "domenicani.tricase@libero.it",
        address: "Piazza Pisanelli 4, 73039 Tricase (LE)",
        contactPerson: "Padre Superiore / Don Rocco",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro rinascimentale", "Timbro Quercia Vallonea"],
        lat: 39.9320,
        lng: 18.3595,
        notes: "Grande chiostro cinquecentesco con giardino interno recintato per tende e fontana potabile."
      }
    ],
    campsites: [
      {
        id: "camp-34-1",
        name: "Agricampeggio Quercia Vallonea Tricase",
        type: "agricampeggio",
        priceTentPerNightEur: 8,
        phone: "+39 349 112 0033",
        address: "Via Marina Serra, Tricase",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 39.9250,
        lng: 18.3710,
        instructions: "Piazzola tenda sotto la celebre quercia millenaria dai rami larghi 50 metri, docce e servizi puliti."
      }
    ],
    emergencyStays: [
      {
        id: "em-34-1",
        name: "B&B Terra d'Oriente Tricase Low-Cost",
        type: "bb_budget",
        priceMinEur: 28,
        distanceFromTrailMeters: 120,
        address: "Via Sant'Angelo 15, Tricase",
        phone: "+39 340 771 8890",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Tricase&order=price",
        perks: ["Cancellazione gratuita", "Doccia ad alta pressione", "Self check-in", "WiFi"],
        lat: 40.0345,
        lng: 18.4590
      },
      {
        id: "em-34-2",
        name: "Affittacamere Porta Terra Budget",
        type: "affittacamere",
        priceMinEur: 32,
        distanceFromTrailMeters: 240,
        address: "Largo Porta Terra 6, Tricase",
        phone: "+39 0833 541 902",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Tricase&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione tipica"],
        lat: 39.9315,
        lng: 18.3585
      }
    ]
  },
  {
    number: 35,
    from: "Tricase",
    to: "Marina Serra -> Gagliano del Capo -> SANTA MARIA DI LEUCA (De Finibus Terrae)",
    region: "Puglia (Salento)",
    distanceKm: 23.4,
    elevationGainM: 170,
    elevationLossM: 190,
    difficulty: "Medio",
    terrain: "Sentiero panoramico del Ciolo tra i fiordi salentini 70%, mulattiere costiere 25%, scalinata monumentale 5%",
    description: "TAPPA FINALE E CONQUISTA DEL FINIBUS TERRAE! Si attraversa la celebre piscina naturale di Marina Serra e il vertiginoso Canyon del Ciolo col Sentiero delle Cipolliane. Si risale infine al promontorio di Punta Meliso dove sorge la Basilica Pontificia Santuario di Santa Maria de Finibus Terrae: qui le acque dello Ionio e dell'Adriatico si abbracciano. Ritiro solenne del Testimonium e timbro finale!",
    startCoordinates: [39.9310, 18.3580],
    coordinates: [39.7970, 18.3680],
    waterPointsNote: "Fontanella a Marina Serra, al Canalone del Ciolo e nel piazzale del Santuario di Leuca.",
    convents: [
      {
        id: "c-35-1",
        name: "Foresteria della Basilica Santuario di Santa Maria De Finibus Terrae",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0833 758 103",
        email: "santuarioleuca@virgilio.it",
        address: "Piazza Giovanni Paolo II 1, 73030 Santa Maria di Leuca (LE)",
        contactPerson: "Mons. Rettore del Santuario",
        receptionHours: "14:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Rilascio solenne Testimonium De Finibus Terrae", "Timbro Finale Trionfale"],
        lat: 39.7975,
        lng: 18.3690,
        notes: "META FINALE DEL PELLEGRINAGGIO! Accoglienza sul promontorio tra Ionio e Adriatico con giardino del santuario riservato per le tende dei pellegrini giunti a piedi da Roma."
      },
      {
        id: "c-35-2",
        name: "Casa del Pellegrino Padre Pio & Suore Oblate",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 18,
        phone: "+39 0833 758 240",
        address: "Via Santuario 12, Santa Maria di Leuca",
        contactPerson: "Suor Angela",
        receptionHours: "14:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Doccia calda", "Lenzuola", "Colazione inclusa"],
        lat: 39.7985,
        lng: 18.3675,
        notes: "A 100m dalla basilica, camere tranquille per riposare dopo quasi 800 km a piedi."
      }
    ],
    campsites: [
      {
        id: "camp-35-1",
        name: "Camping Santa Maria di Leuca",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 11,
        phone: "+39 0833 758 557",
        email: "info@campingleuca.com",
        address: "Strada Statale 275 km 35, Santa Maria di Leuca",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 39.8110,
        lng: 18.3580,
        instructions: "Grande campeggio ombreggiato in pineta con piscina, tariffa speciale camminatori a piedi con tenda, lavanderia e minimarket."
      }
    ],
    emergencyStays: [
      {
        id: "em-35-1",
        name: "Ostello Finibus Terrae Low-Cost Leuca",
        type: "ostello_lowcost",
        priceMinEur: 24,
        distanceFromTrailMeters: 220,
        address: "Corso Colombo 40, Santa Maria di Leuca",
        phone: "+39 0833 758 911",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Santa+Maria+di+Leuca&order=price",
        perks: ["A 150m dal lungomare", "Doccia calda", "Cucina uso ospiti", "WiFi", "Deposito zaini"],
        lat: 40.0345,
        lng: 18.4590
      },
      {
        id: "em-35-2",
        name: "B&B Punta Ristola Budget Rooms",
        type: "bb_budget",
        priceMinEur: 33,
        distanceFromTrailMeters: 310,
        address: "Via Ristola 18, Santa Maria di Leuca",
        phone: "+39 347 992 0188",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Santa+Maria+di+Leuca&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Vista tramonto sullo Ionio"],
        lat: 39.7940,
        lng: 18.3550
      }
    ]
  }
];

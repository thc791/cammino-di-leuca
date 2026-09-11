import { PilgrimStage } from '../types';

export const stagesPugliaNorth: PilgrimStage[] = [
  {
    number: 18,
    from: "Buonalbergo",
    to: "Troia (Subappennino Dauno)",
    region: "Puglia (Daunia & Tavoliere)",
    distanceKm: 27.4,
    elevationGainM: 380,
    elevationLossM: 410,
    difficulty: "Impegnativo",
    terrain: "Tratturi storici della transumanza 70%, crinali sterrati 20%, asfalto 10%",
    description: "Si valica l'Appennino campano-lucano entrando in Puglia attraverso i Monti Dauni. Arrivo al borgo monumentale di Troia, con la sua celebre Concattedrale romanico-pugliese e l'incomparabile rosone ad undici raggi scolpito nel 1100.",
    startCoordinates: [41.2210, 14.9810],
    coordinates: [41.3630, 15.3110],
    waterPointsNote: "Fontana al valico del Sannio, fontanella a Castelfranco in Miscano e sorgente San Leonardo all'ingresso di Troia.",
    convents: [
      {
        id: "c-18-1",
        name: "Convento di San Domenico & Foresteria Vescovile di Troia",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0881 970 020",
        email: "cattedraletroia@virgilio.it",
        address: "Piazza Giovanni XXIII 1, 71029 Troia (FG)",
        contactPerson: "Don Pio / Custode Cattedrale",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro duecentesco", "Timbro del celebre Rosone a 11 raggi"],
        lat: 41.3640,
        lng: 15.3125,
        notes: "Grande cortile alberato della foresteria con fontana potabile e prato per tende."
      }
    ],
    campsites: [
      {
        id: "camp-18-1",
        name: "Area Tenda Parco San Leonardo Troia",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Via Regina Margherita, Troia",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.3610,
        lng: 15.3080,
        instructions: "Parco pubblico alberato con vista sconfinata sul Tavoliere delle Puglie e fontanella d'acqua freschissima."
      }
    ],
    emergencyStays: [
      {
        id: "em-18-1",
        name: "B&B Il Rosone di Troia Low-Cost",
        type: "bb_budget",
        priceMinEur: 28,
        distanceFromTrailMeters: 120,
        address: "Via Regina Margherita 24, Troia",
        phone: "+39 347 882 1090",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Troia+Foggia&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Self check-in", "WiFi"],
        lat: 41.3625,
        lng: 15.3105
      },
      {
        id: "em-18-2",
        name: "Affittacamere Porta Foggia Rooms",
        type: "affittacamere",
        priceMinEur: 33,
        distanceFromTrailMeters: 260,
        address: "Corso Regina Margherita 80, Troia",
        phone: "+39 0881 977 114",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Troia+Foggia&order=price",
        perks: ["Bagno privato", "Riscaldamento/AC", "Colazione inclusa"],
        lat: 41.3638,
        lng: 15.3120
      }
    ]
  },
  {
    number: 19,
    from: "Troia",
    to: "Santuario della Madonna Incoronata (Foggia)",
    region: "Puglia (Daunia & Tavoliere)",
    distanceKm: 26.8,
    elevationGainM: 80,
    elevationLossM: 350,
    difficulty: "Medio",
    terrain: "Tratturi di terra battuta nel Tavoliere 80%, strade interpoderali 15%, asfalto 5%",
    description: "Si scende nell'immenso 'granaio d'Italia', il Tavoliere delle Puglie, con orizzonti sterminati di grano e ulivi. Meta della giornata è il millenario Santuario dell'Incoronata (anno 1001), dove apparve la Madonna sull'albero di quercia.",
    startCoordinates: [41.3630, 15.3110],
    coordinates: [41.3960, 15.6540],
    waterPointsNote: "Attenzione: portare almeno 2 litri d'acqua nel Tavoliere. Fontanella a Giardinetto e al Santuario Incoronata.",
    convents: [
      {
        id: "c-19-1",
        name: "Foresteria Pellegrini del Santuario dell'Incoronata (Padri Orionini)",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0881 814 111",
        email: "santuario@incoronata.it",
        address: "Borgo Incoronata, 71122 Foggia (FG)",
        contactPerson: "Padre Rettore Orionino",
        receptionHours: "14:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Refettorio pellegrini", "Timbro della Madonna Nera Incoronata"],
        lat: 41.3965,
        lng: 15.6545,
        notes: "Ospitalità secolare per credenziali. Il grandioso parco di querce secolari attorno al santuario ospita tende in un'area riservata e protetta."
      }
    ],
    campsites: [
      {
        id: "camp-19-1",
        name: "Area Campeggio Bosco dell'Incoronata",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 6,
        phone: "+39 0881 814 020",
        address: "Parco Naturale Bosco Incoronata, Foggia",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.3940,
        lng: 15.6510,
        instructions: "Piazzole ombreggiate sotto i lecci secolari del Parco Naturale Regionale con fontane d'acqua dell'Acquedotto Pugliese."
      }
    ],
    emergencyStays: [
      {
        id: "em-19-1",
        name: "B&B Pellegrino Incoronata Low-Cost",
        type: "bb_budget",
        priceMinEur: 26,
        distanceFromTrailMeters: 180,
        address: "Borgo Incoronata 15, Foggia",
        phone: "+39 349 901 2280",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Foggia&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Cucina uso ospiti", "WiFi"],
        lat: 41.3955,
        lng: 15.6530
      },
      {
        id: "em-19-2",
        name: "Hotel Residenza Sveva Budget",
        type: "albergo_economico",
        priceMinEur: 32,
        distanceFromTrailMeters: 450,
        address: "Strada Statale 16 km 682, Foggia",
        phone: "+39 0881 635 120",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Foggia&order=price",
        perks: ["Reception 24h", "Bagno privato con phon", "Colazione a buffet"],
        lat: 41.3980,
        lng: 15.6560
      }
    ]
  },
  {
    number: 20,
    from: "Santuario Incoronata",
    to: "Ordona (Herdonia) -> Cerignola",
    region: "Puglia (Daunia & Tavoliere)",
    distanceKm: 28.3,
    elevationGainM: 70,
    elevationLossM: 80,
    difficulty: "Medio",
    terrain: "Tratturi del Parco Archeologico di Herdonia 60%, strade rurali 35%, asfalto 5%",
    description: "Si attraversa il Parco Archeologico dell'antica Herdonia (la 'Pompei della Puglia'), città romana posta sull'Appia Traiana, per poi raggiungere Cerignola, città delle celebri 'Fosse Granarie' ipogee e del gigantesco Duomo Tonti.",
    startCoordinates: [41.3960, 15.6540],
    coordinates: [41.2650, 15.9010],
    waterPointsNote: "Fontanella ad Ordona centro, sorgente a Borgo Libertà e fontane 'AQP' a Cerignola.",
    convents: [
      {
        id: "c-20-1",
        name: "Convento dei Frati Minori Cappuccini di Cerignola",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0885 421 210",
        email: "cappuccini.cerignola@virgilio.it",
        address: "Via Sant'Antonio da Padova 4, 71042 Cerignola (FG)",
        contactPerson: "Frate Portinaio",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro francescano", "Timbro Duomo Tonti"],
        lat: 41.2660,
        lng: 15.9025,
        notes: "Chiostro interno tranquillo con ampio cortile per le tende dei pellegrini a donativo."
      }
    ],
    campsites: [
      {
        id: "camp-20-1",
        name: "Area Tenda Agriturismo Piano San Rocco",
        type: "agricampeggio",
        priceTentPerNightEur: 7,
        phone: "+39 347 182 3340",
        address: "Contrada San Rocco, Cerignola",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2580,
        lng: 15.8910,
        instructions: "Spazio erboso tra gli ulivi della varietà Bella di Cerignola, con doccia e fornitura idrica."
      }
    ],
    emergencyStays: [
      {
        id: "em-20-1",
        name: "B&B Duomo Tonti Cerignola Low-Cost",
        type: "bb_budget",
        priceMinEur: 27,
        distanceFromTrailMeters: 110,
        address: "Piazza Duomo 18, Cerignola",
        phone: "+39 339 514 8870",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Cerignola&order=price",
        perks: ["Cancellazione gratuita", "Doccia ad alta pressione", "Self check-in", "WiFi"],
        lat: 41.2645,
        lng: 15.9005
      },
      {
        id: "em-20-2",
        name: "Albergo Paradiso Budget Rooms",
        type: "albergo_economico",
        priceMinEur: 33,
        distanceFromTrailMeters: 290,
        address: "Corso Aldo Moro 55, Cerignola",
        phone: "+39 0885 422 189",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Cerignola&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione tipica pugliese"],
        lat: 41.2658,
        lng: 15.9020
      }
    ]
  },
  {
    number: 21,
    from: "Cerignola",
    to: "Canosa di Puglia",
    region: "Puglia (Daunia & Tavoliere)",
    distanceKm: 24.2,
    elevationGainM: 130,
    elevationLossM: 90,
    difficulty: "Facile",
    terrain: "Tratturi di terra battuta e carrarecce 75%, argini fiume Ofanto 15%, asfalto 10%",
    description: "Si attraversa il leggendario fiume Ofanto (famoso per la battaglia di Canne della seconda guerra punica) entrando nella provincia di Barletta-Andria-Trani. Canosa accoglie il pellegrino con la Cattedrale di San Sabino (anno 1101) e il Mausoleo di Boemondo d'Altavilla, eroe della Prima Crociata.",
    startCoordinates: [41.2650, 15.9010],
    coordinates: [41.2220, 16.0660],
    waterPointsNote: "Fontanella al Ponte Romano sull'Ofanto, sorgente San Leucio e fontane in Piazza Vittorio Veneto a Canosa.",
    convents: [
      {
        id: "c-21-1",
        name: "Cattedrale San Sabino & Monastero Suore Carmelitane",
        type: "monastero",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0883 661 145",
        email: "cattedrale.canosa@libero.it",
        address: "Piazza San Sabino 2, 76012 Canosa di Puglia (BT)",
        contactPerson: "Don Felice / Suor Maria Teresa",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Cripta paleocristiana", "Timbro Boemondo I"],
        lat: 41.2228,
        lng: 16.0672,
        notes: "Ospitalità nel complesso vescovile con giardino per tende e visita guidata alla tomba di Boemondo."
      }
    ],
    campsites: [
      {
        id: "camp-21-1",
        name: "Area Tenda Parco Archeologico San Leucio",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Colle San Leucio, Canosa di Puglia",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.2180,
        lng: 16.0710,
        instructions: "Prato naturale panoramico con fontana d'acqua potabile tra i capitelli corinzi del tempio ellenistico."
      }
    ],
    emergencyStays: [
      {
        id: "em-21-1",
        name: "B&B Domus Boemondo Canosa",
        type: "bb_budget",
        priceMinEur: 28,
        distanceFromTrailMeters: 100,
        address: "Via Boemondo 14, Canosa di Puglia",
        phone: "+39 348 719 0041",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Canosa+di+Puglia&order=price",
        perks: ["Cancellazione gratuita", "Self check-in", "Doccia calda", "WiFi"],
        lat: 41.2215,
        lng: 16.0652
      },
      {
        id: "em-21-2",
        name: "Affittacamere La Terrazza Low-Cost",
        type: "affittacamere",
        priceMinEur: 32,
        distanceFromTrailMeters: 230,
        address: "Via Bovio 30, Canosa di Puglia",
        phone: "+39 0883 662 090",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Canosa+di+Puglia&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Terrazza solarium per stendere"],
        lat: 41.2222,
        lng: 16.0668
      }
    ]
  },
  {
    number: 22,
    from: "Canosa di Puglia",
    to: "Corato -> Ruvo di Puglia",
    region: "Puglia (Terra di Bari)",
    distanceKm: 26.6,
    elevationGainM: 190,
    elevationLossM: 110,
    difficulty: "Medio",
    terrain: "Tratturi pietrosi dell'Alta Murgia e strade tra uliveti secolari della Coratina 75%, asfalto 25%",
    description: "Si sale sull'Altopiano delle Murge attraversando il regno dell'olivo coratino. A Ruvo di Puglia si ammira una delle cattedrali romaniche più verticali e suggestive della cristianità, con la facciata a capanna decorata da grifoni ed esseri fantastici.",
    startCoordinates: [41.2220, 16.0660],
    coordinates: [41.1150, 16.4880],
    waterPointsNote: "Fontanelle a Corato centro (Piazza Cesare Battisti), fontanella rurale Murgia e fontana pubblica a Ruvo.",
    convents: [
      {
        id: "c-22-1",
        name: "Convento dei Frati Minori Osservanti & Santuario Madonna delle Grazie",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 080 361 1022",
        email: "grazie.ruvo@ofm.it",
        address: "Corso Cotugno 2, 70037 Ruvo di Puglia (BA)",
        contactPerson: "Padre Guardiano Fr. Salvatore",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Cucina comune", "Timbro Cattedrale di Ruvo"],
        lat: 41.1162,
        lng: 16.4895,
        notes: "Grande chiostro cinquecentesco con prato cintato adibito a campeggio pellegrino su richiesta."
      }
    ],
    campsites: [
      {
        id: "camp-22-1",
        name: "Area Tenda Masseria Parco dell'Alta Murgia",
        type: "agricampeggio",
        priceTentPerNightEur: 8,
        phone: "+39 347 551 2901",
        address: "Strada Comunale Graviscella, Ruvo di Puglia",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.1020,
        lng: 16.4710,
        instructions: "Masseria fortificata murgiana con accoglienza tende tra querce roverelle e jazzi in pietra a secco."
      }
    ],
    emergencyStays: [
      {
        id: "em-22-1",
        name: "Ostello della Murgia Ruvo Low-Cost",
        type: "ostello_lowcost",
        priceMinEur: 26,
        distanceFromTrailMeters: 160,
        address: "Via Cattedrale 45, Ruvo di Puglia",
        phone: "+39 080 362 8840",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Ruvo+di+Puglia&order=price",
        perks: ["A 80m dalla Cattedrale", "Doccia calda", "WiFi veloce", "Cucina comune"],
        lat: 41.1148,
        lng: 16.4875
      },
      {
        id: "em-22-2",
        name: "B&B Il Canto delle Pietre Budget",
        type: "bb_budget",
        priceMinEur: 29,
        distanceFromTrailMeters: 250,
        address: "Via Fornaci 12, Ruvo di Puglia",
        phone: "+39 339 618 9011",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Ruvo+di+Puglia&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione con focaccia ruvese"],
        lat: 41.1155,
        lng: 16.4888
      }
    ]
  },
  {
    number: 23,
    from: "Ruvo di Puglia",
    to: "Terlizzi -> Bitonto",
    region: "Puglia (Terra di Bari)",
    distanceKm: 20.2,
    elevationGainM: 80,
    elevationLossM: 120,
    difficulty: "Facile",
    terrain: "Vie poderali tra oliveti 'Olio Cima di Bitonto' 80%, stradine campestri 20%",
    description: "Attraversamento della 'città dei fiori' (Terlizzi) fino a Bitonto, 'città degli ulivi'. Qui sorge la Cattedrale di San Valentino, vertice assoluto del romanico pugliese col celebre ambone scolpito da Nicolaus nel 1229 con il grifone svevo.",
    startCoordinates: [41.1150, 16.4880],
    coordinates: [41.1090, 16.6900],
    waterPointsNote: "Fontanelle a Terlizzi (Piazza Cavour), a Sovereto (antico ospizio crociato) e a Porta Baresana a Bitonto.",
    convents: [
      {
        id: "c-23-1",
        name: "Convento dei Frati Cappuccini & Santuario di San Leone (Bitonto)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 14,
        phone: "+39 080 375 1045",
        email: "cappuccini.bitonto@gmail.com",
        address: "Via Cappuccini 1, 70032 Bitonto (BA)",
        contactPerson: "Padre Guardiano Fr. Michele",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro affrescato", "Timbro Grifone Svevo"],
        lat: 41.1105,
        lng: 16.6920,
        notes: "Accoglienza francescana calorosa. Giardino alberato recintato con prato disponibile per montare tende."
      }
    ],
    campsites: [
      {
        id: "camp-23-1",
        name: "Area Tenda Parco Naturale Lama Balice",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Lama Balice, Bitonto",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.1130,
        lng: 16.6850,
        instructions: "Canyon carsico protetto con fontanella potabile, ricco di grotte rupestri ed erbe aromatiche spontanee."
      }
    ],
    emergencyStays: [
      {
        id: "em-23-1",
        name: "B&B Cattedrale Bitonto Low-Cost",
        type: "bb_budget",
        priceMinEur: 27,
        distanceFromTrailMeters: 130,
        address: "Piazza Cattedrale 20, Bitonto",
        phone: "+39 340 991 3340",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Bitonto&order=price",
        perks: ["Cancellazione gratuita", "Doccia ad alta pressione", "Self check-in", "WiFi"],
        lat: 41.1085,
        lng: 16.6895
      },
      {
        id: "em-23-2",
        name: "Porta Baresana Rooms Budget",
        type: "affittacamere",
        priceMinEur: 31,
        distanceFromTrailMeters: 220,
        address: "Piazza Cavour 8, Bitonto",
        phone: "+39 080 374 2110",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Bitonto&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Colazione inclusa al bar storico"],
        lat: 41.1098,
        lng: 16.6912
      }
    ]
  },
  {
    number: 24,
    from: "Bitonto",
    to: "Bari (Basilica di San Nicola)",
    region: "Puglia (Terra di Bari)",
    distanceKm: 20.8,
    elevationGainM: 40,
    elevationLossM: 150,
    difficulty: "Facile",
    terrain: "Pista ciclabile e pedonale della Lama Balice 60%, lungomare pedonale di Bari 30%, asfalto 10%",
    description: "Tappa trionfale verso il mare Adriatico! Si entra a Bari Vecchia fino alla venerata Basilica Pontificia di San Nicola, patrono universale dei naviganti e dei pellegrini, custode delle sacre reliquie giunte da Myra nel 1087 e storico porto di imbarco crociato per Gerusalemme.",
    startCoordinates: [41.1090, 16.6900],
    coordinates: [41.1300, 16.8700],
    waterPointsNote: "Fontanelle nella Lama Balice, fontane sul Lungomare Vittorio Veneto e nella corte della Basilica di San Nicola.",
    convents: [
      {
        id: "c-24-1",
        name: "Foresteria dei Padri Domenicani della Basilica di San Nicola",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 18,
        phone: "+39 080 573 7111",
        email: "basilicasannicola@libero.it",
        address: "Largo Abate Elia 13, 70122 Bari (BA)",
        contactPerson: "Padre Priore Domenicano",
        receptionHours: "14:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Refettorio", "Timbro Solenne di San Nicola"],
        lat: 41.1308,
        lng: 16.8710,
        notes: "Il cuore spirituale del pellegrinaggio adriatico. Chiostro monumentale con cortile interno protetto, accesso alla cripta con la sacra Manna di San Nicola."
      }
    ],
    campsites: [
      {
        id: "camp-24-1",
        name: "Area Campeggio Pineta San Francesco",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 10,
        phone: "+39 080 534 4022",
        address: "Via Verdi, Pineta San Francesco, Bari",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.1340,
        lng: 16.8350,
        instructions: "Parco costiero ombreggiato con pineta marittima, docce e prese ricarica per camminatori."
      }
    ],
    emergencyStays: [
      {
        id: "em-24-1",
        name: "Olive Tree Youth Hostel Bari Low-Cost",
        type: "ostello_lowcost",
        priceMinEur: 22,
        distanceFromTrailMeters: 250,
        address: "Via Sagarriga Visconti 214, Bari",
        phone: "+39 080 528 2901",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Bari&order=price",
        perks: ["Doccia calda", "Cucina comune super attrezzata", "Terrazza relax", "Lavatrice a gettoni", "WiFi"],
        lat: 41.1210,
        lng: 16.8640
      },
      {
        id: "em-24-2",
        name: "B&B Bari Vecchia Budget Rooms",
        type: "bb_budget",
        priceMinEur: 32,
        distanceFromTrailMeters: 180,
        address: "Strada San Marco 14, Bari Vecchia",
        phone: "+39 349 711 0023",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Bari&order=price",
        perks: ["Cancellazione gratuita", "Bagno privato", "Colazione inclusa"],
        lat: 41.1295,
        lng: 16.8702
      }
    ]
  },
  {
    number: 25,
    from: "Bari (San Nicola)",
    to: "Torre a Mare -> Mola di Bari -> Polignano a Mare",
    region: "Puglia (Terra di Bari)",
    distanceKm: 28.5,
    elevationGainM: 60,
    elevationLossM: 50,
    difficulty: "Medio",
    terrain: "Sentieri costieri a picco sul mare 65%, piste ciclopedonali 25%, asfalto secondario 10%",
    description: "Tappa litoranea mozzafiato che costeggia il mare Adriatico passando per le antiche torri costiere di avvistamento saracene. Arrivo a Polignano a Mare, la 'perla dell'Adriatico', con le sue case bianche aggrappate alle scogliere calcaree a picco su Lama Monachile.",
    startCoordinates: [41.1300, 16.8700],
    coordinates: [41.0000, 17.2200],
    waterPointsNote: "Fontanelle sul lungomare di Torre a Mare, al porto di Mola di Bari e nel borgo antico di Polignano.",
    convents: [
      {
        id: "c-25-1",
        name: "Convento di Santa Maria delle Grazie (Mola) & Chiesa Matrice Polignano",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 080 473 1180",
        address: "Piazza San Domenico 2, 70042 Polignano a Mare (BA)",
        contactPerson: "Don Gaetano / Padre Guardiano",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro sul mare", "Timbro Lama Monachile"],
        lat: 41.0012,
        lng: 17.2215,
        notes: "Accoglienza francescana a 100 metri dal mare con cortile interno per tende."
      }
    ],
    campsites: [
      {
        id: "camp-25-1",
        name: "Camping Ripagnola & Cala San Vito Polignano",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 12,
        phone: "+39 080 424 0110",
        email: "campingripagnola@libero.it",
        address: "Località Ripagnola, Polignano a Mare",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.0150,
        lng: 17.1850,
        instructions: "Sul mare con calette di ciottoli, prato per tende da trekking e bar con ricarica dispositivi."
      }
    ],
    emergencyStays: [
      {
        id: "em-25-1",
        name: "Affittacamere Lama Monachile Budget",
        type: "affittacamere",
        priceMinEur: 34,
        distanceFromTrailMeters: 140,
        address: "Via Roma 45, Polignano a Mare",
        phone: "+39 347 182 5590",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Polignano+a+Mare&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Aria condizionata", "WiFi"],
        lat: 40.9995,
        lng: 17.2195
      },
      {
        id: "em-25-2",
        name: "B&B Costa dei Trulli Low-Cost",
        type: "bb_budget",
        priceMinEur: 36,
        distanceFromTrailMeters: 280,
        address: "Via Dogali 12, Polignano a Mare",
        phone: "+39 080 424 9911",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Polignano+a+Mare&order=price",
        perks: ["Colazione tipica inclusa", "Bagno privato"],
        lat: 41.0008,
        lng: 17.2210
      }
    ]
  },
  {
    number: 26,
    from: "Polignano a Mare",
    to: "Monopoli (Castello Carlo V)",
    region: "Puglia (Terra di Bari)",
    distanceKm: 14.5,
    elevationGainM: 40,
    elevationLossM: 40,
    difficulty: "Facile",
    terrain: "Sentiero delle scogliere e cale sabbiose 75%, pista ciclabile litoranea 25%",
    description: "Tappa breve e paradisiaca lungo le suggestive 'cale' adriatiche (Cala San Giovanni, Cala Portavecchia). Arrivo a Monopoli con il porto antico dalle barche blu 'gozzi', la Cattedrale della Madonna della Madia (giunta miracolosamente su una zattera di travi nel 1117) e il possente Castello Carlo V.",
    startCoordinates: [41.0000, 17.2200],
    coordinates: [40.9530, 17.3030],
    waterPointsNote: "Fontanelle a Cala Ripagnola, al Porto Vecchio di Monopoli e in Piazza Vittorio Emanuele II.",
    convents: [
      {
        id: "c-26-1",
        name: "Convento di San Francesco d'Assisi & Oasi San Salvatore",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 080 742 120",
        email: "sanfrancesco.monopoli@libero.it",
        address: "Via San Francesco 12, 70043 Monopoli (BA)",
        contactPerson: "Padre Guardiano Fr. Vito",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro affacciato sul porto", "Timbro Madonna della Madia"],
        lat: 40.9540,
        lng: 17.3045,
        notes: "Nel cuore della Monopoli medievale a ridosso del mare con giardino interno per tende."
      }
    ],
    campsites: [
      {
        id: "camp-26-1",
        name: "Camping Santo Stefano Monopoli",
        type: "campeggio_ufficiale",
        priceTentPerNightEur: 11,
        phone: "+39 080 803 108",
        email: "info@campingsantostefano.it",
        address: "Contrada Santo Stefano 3, Monopoli",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 40.9320,
        lng: 17.3310,
        instructions: "Accanto alla magnifica abbazia-castello benedettina di Santo Stefano, pineta sul mare e tariffa speciale camminatori."
      }
    ],
    emergencyStays: [
      {
        id: "em-26-1",
        name: "B&B Borgo Antico Monopoli Low-Cost",
        type: "bb_budget",
        priceMinEur: 33,
        distanceFromTrailMeters: 120,
        address: "Via Garibaldi 60, Monopoli",
        phone: "+39 349 618 4402",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Monopoli&order=price",
        perks: ["Cancellazione gratuita", "Self check-in", "Doccia ad alta pressione", "WiFi"],
        lat: 40.9525,
        lng: 17.3020
      },
      {
        id: "em-26-2",
        name: "Affittacamere Bellavista Budget",
        type: "affittacamere",
        priceMinEur: 37,
        distanceFromTrailMeters: 250,
        address: "Largo Plebiscito 10, Monopoli",
        phone: "+39 080 747 889",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Monopoli&order=price",
        perks: ["Bagno privato", "Aria condizionata", "Vista mare parziale"],
        lat: 40.9535,
        lng: 17.3038
      }
    ]
  }
];

import { PilgrimStage } from '../types';

export const stagesCampania: PilgrimStage[] = [
  {
    number: 11,
    from: "Minturno",
    to: "Sessa Aurunca",
    region: "Campania",
    distanceKm: 21.4,
    elevationGainM: 290,
    elevationLossM: 120,
    difficulty: "Medio",
    terrain: "Sentiero rurale tra oliveti e vigneti del Falerno 70%, strada secondaria 30%",
    description: "Si attraversa il fiume Garigliano entrando in Campania e nell'antico vulcano spento di Roccamonfina. Arrivo alla nobile Sessa Aurunca con la magnifica Cattedrale romanica dei Santi Pietro e Paolo e il teatro romano.",
    startCoordinates: [41.2425, 13.7650],
    coordinates: [41.2360, 13.9310],
    waterPointsNote: "Fontana borbonica all'imbocco del ponte Garigliano, fontanelle a Cascano e nella villa comunale di Sessa Aurunca.",
    convents: [
      {
        id: "c-11-1",
        name: "Convento dei Frati Minori Santa Maria delle Grazie",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0823 936 045",
        email: "grazie.sessa@ofm.it",
        address: "Piazza Santa Maria delle Grazie 1, 81037 Sessa Aurunca (CE)",
        contactPerson: "Padre Guardiano Fr. Giuseppe",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Cucina pellegrina", "Chiostro affrescato", "Timbro Cattedrale"],
        lat: 41.2375,
        lng: 13.9330,
        notes: "Ampio parco e orto dei frati con prato ombreggiato aperto alle tende dei pellegrini a donativo."
      },
      {
        id: "c-11-2",
        name: "Foresteria Vescovile Diocesi di Sessa Aurunca",
        type: "foresteria",
        requiresCredential: true,
        costType: "tariffa_pellegrina",
        suggestedDonationEur: 18,
        phone: "+39 0823 937 114",
        address: "Piazza Duomo 4, Sessa Aurunca",
        contactPerson: "Don Roberto",
        receptionHours: "16:00 - 19:00",
        hasStamp: true,
        tentAllowedInGarden: false,
        services: ["Doccia calda", "Lenzuola", "Silenzio"],
        lat: 41.2355,
        lng: 13.9295,
        notes: "Accanto al magnifico pergamo musivo della cattedrale."
      }
    ],
    campsites: [
      {
        id: "camp-11-1",
        name: "Agricampeggio Roccamonfina Falerno",
        type: "agricampeggio",
        priceTentPerNightEur: 8,
        phone: "+39 347 112 9044",
        address: "Via Raccomandata 18, Sessa Aurunca",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.2410,
        lng: 13.9220,
        instructions: "Prato tra i vigneti di Falerno, doccia solare e ricarica dispositivi."
      }
    ],
    emergencyStays: [
      {
        id: "em-11-1",
        name: "B&B Duomo Sessa Aurunca",
        type: "bb_budget",
        priceMinEur: 28,
        distanceFromTrailMeters: 120,
        address: "Via Duomo 22, Sessa Aurunca",
        phone: "+39 338 991 4055",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sessa+Aurunca&order=price",
        perks: ["Cancellazione gratuita", "Self check-in h24", "Doccia calda", "WiFi"],
        lat: 41.2358,
        lng: 13.9302
      },
      {
        id: "em-11-2",
        name: "Affittacamere Le Volte Low-Cost",
        type: "affittacamere",
        priceMinEur: 33,
        distanceFromTrailMeters: 260,
        address: "Corso Lucilio 88, Sessa Aurunca",
        phone: "+39 0823 938 122",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Sessa+Aurunca&order=price",
        perks: ["Bagno privato", "Aria condizionata/riscaldamento", "Colazione"],
        lat: 41.2365,
        lng: 13.9315
      }
    ]
  },
  {
    number: 12,
    from: "Sessa Aurunca",
    to: "Teano",
    region: "Campania",
    distanceKm: 20.8,
    elevationGainM: 340,
    elevationLossM: 260,
    difficulty: "Medio",
    terrain: "Sentieri collinari su terra vulcanica 65%, carrarecce 25%, asfalto 10%",
    description: "Si risalgono le pendici vulcaniche tra castagneti e noccioli fino a Teano, la celebre città dell'incontro storico del 1860 tra Garibaldi e Vittorio Emanuele II, custode di antiche memorie francescane e di una maestosa cattedrale.",
    startCoordinates: [41.2360, 13.9310],
    coordinates: [41.2505, 14.0675],
    waterPointsNote: "Fontanella a Casale di Carinola, sorgente delle Caldare e fontane storiche nel centro di Teano.",
    convents: [
      {
        id: "c-12-1",
        name: "Convento Sant'Antonio di Padova dei Frati Minori (Teano)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0823 875 024",
        email: "santantonio.teano@ofm.it",
        address: "Piazzale Sant'Antonio 1, 81057 Teano (CE)",
        contactPerson: "Padre Guardiano Fr. Antonio",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro affrescato", "Timbro Antoniano"],
        lat: 41.2520,
        lng: 14.0710,
        notes: "Storico convento situato su una collina che domina Teano. Grande prato alberato perfetto per tende con fornitura idrica."
      }
    ],
    campsites: [
      {
        id: "camp-12-1",
        name: "Area Verde Parco San Casciano (Bivacco)",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Collina San Casciano, Teano",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.2540,
        lng: 14.0640,
        instructions: "Area sosta picnic comunale con fontana d'acqua sorgiva e tavoli in legno. Bivacco notturno consentito."
      }
    ],
    emergencyStays: [
      {
        id: "em-12-1",
        name: "B&B Sidicino Teano Low-Cost",
        type: "bb_budget",
        priceMinEur: 26,
        distanceFromTrailMeters: 160,
        address: "Via Roma 40, Teano",
        phone: "+39 349 221 8890",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Teano&order=price",
        perks: ["Self check-in rapido", "Doccia rigenerante", "Bollitore e snack", "WiFi"],
        lat: 41.2500,
        lng: 14.0665
      },
      {
        id: "em-12-2",
        name: "Locanda Garibaldi Budget Rooms",
        type: "affittacamere",
        priceMinEur: 31,
        distanceFromTrailMeters: 290,
        address: "Piazza Duomo 12, Teano",
        phone: "+39 0823 875 911",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Teano&order=price",
        perks: ["Bagno in camera", "Riscaldamento/AC", "Ristorantino al piano terra"],
        lat: 41.2512,
        lng: 14.0682
      }
    ]
  },
  {
    number: 13,
    from: "Teano",
    to: "Capua",
    region: "Campania",
    distanceKm: 26.5,
    elevationGainM: 110,
    elevationLossM: 240,
    difficulty: "Medio",
    terrain: "Sentieri di campagna tra frutteti e pianura del Volturno 70%, strade secondarie 30%",
    description: "Si scende verso la fertile pianura campana lambita dal fiume Volturno. Si passa nei pressi dell'antico anfiteatro di Santa Maria Capua Vetere (secondo per grandezza solo al Colosseo) e si entra nella storica Capua attraverso la porta federiciana.",
    startCoordinates: [41.2505, 14.0675],
    coordinates: [41.1070, 14.2150],
    waterPointsNote: "Fontane a Sparanise, a Francolise e presso il ponte sul Volturno a Capua.",
    convents: [
      {
        id: "c-13-1",
        name: "Convento di Santa Caterina & Chiesa dell'Annunziata",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0823 961 142",
        address: "Corso Appio 30, 81043 Capua (CE)",
        contactPerson: "Don Salvatore / Padre Guardiano",
        receptionHours: "16:00 - 20:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro storico", "Timbro di Capua Fidelissima"],
        lat: 41.1082,
        lng: 14.2165,
        notes: "Nel centro storico a ridosso del fiume Volturno. Cortile recintato con erba disponibile per tende."
      }
    ],
    campsites: [
      {
        id: "camp-13-1",
        name: "Area Verde Parco del Volturno (Bivacco)",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Argine Volturno, Porta Napoli, Capua",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.1040,
        lng: 14.2120,
        instructions: "Prato alberato lungo il fiume con fontanella d'acqua potabile. Bivacco notturno tranquillo."
      }
    ],
    emergencyStays: [
      {
        id: "em-13-1",
        name: "B&B Capys Economy Capua",
        type: "bb_budget",
        priceMinEur: 25,
        distanceFromTrailMeters: 150,
        address: "Via Gran Quartiere 10, Capua",
        phone: "+39 333 419 0211",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Capua&order=price",
        perks: ["Cancellazione gratuita", "Self check-in", "Doccia calda", "Cucina uso ospiti"],
        lat: 41.1065,
        lng: 14.2140
      },
      {
        id: "em-13-2",
        name: "Hotel Fieramosca Budget Rooms",
        type: "albergo_economico",
        priceMinEur: 32,
        distanceFromTrailMeters: 310,
        address: "Piazza dei Giudici 5, Capua",
        phone: "+39 0823 961 422",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Capua&order=price",
        perks: ["Reception h24", "Bagno privato", "Colazione continentale inclusa"],
        lat: 41.1075,
        lng: 14.2155
      }
    ]
  },
  {
    number: 14,
    from: "Capua",
    to: "Caserta Vecchia / Caserta",
    region: "Campania",
    distanceKm: 19.5,
    elevationGainM: 260,
    elevationLossM: 90,
    difficulty: "Facile",
    terrain: "Strade rurali e sentieri dei Monti Tifatini 65%, asfalto secondario 35%",
    description: "Dai fasti di Capua ci si dirige verso Caserta e l'incantevole borgo medievale di Caserta Vecchia, posto a 400m di quota sui Colli Tifatini con il suo duomo arabo-normanno.",
    startCoordinates: [41.1070, 14.2150],
    coordinates: [41.0965, 14.3680],
    waterPointsNote: "Fontanella a San Prisco, presso la Basilica di Sant'Angelo in Formis e a Caserta Vecchia (Piazza Vescovado).",
    convents: [
      {
        id: "c-14-1",
        name: "Convento dei Padri Agostiniani & Santuario di Caserta Vecchia",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0823 371 180",
        email: "agostiniani.casertavecchia@gmail.com",
        address: "Piazza Duomo 1, 81100 Caserta Vecchia (CE)",
        contactPerson: "Padre Superiore",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata comune", "Giardino sui Tifatini", "Timbro del Duomo Normanno"],
        lat: 41.0970,
        lng: 14.3690,
        notes: "Borgo medievale intatto e senza auto. Chiostro con erba per tende dei pellegrini."
      }
    ],
    campsites: [
      {
        id: "camp-14-1",
        name: "Agricampeggio Colli Tifatini",
        type: "agricampeggio",
        priceTentPerNightEur: 9,
        phone: "+39 340 882 1450",
        address: "Via Montanara 14, Caserta",
        waterAvailable: true,
        showerAvailable: true,
        electricityAvailable: true,
        stoveCookingAllowed: true,
        lat: 41.0920,
        lng: 14.3580,
        instructions: "Piazzola tenda panoramica con vista sul golfo di Napoli e Vesuvio in lontananza."
      }
    ],
    emergencyStays: [
      {
        id: "em-14-1",
        name: "B&B Reggia Express Caserta Low-Cost",
        type: "bb_budget",
        priceMinEur: 27,
        distanceFromTrailMeters: 250,
        address: "Via Roma 85, Caserta",
        phone: "+39 347 502 9110",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Caserta&order=price",
        perks: ["Cancellazione gratuita", "Doccia ad alta pressione", "Self check-in h24", "WiFi"],
        lat: 41.0720,
        lng: 14.3320
      },
      {
        id: "em-14-2",
        name: "Ostello dei Borboni Caserta",
        type: "ostello_lowcost",
        priceMinEur: 29,
        distanceFromTrailMeters: 380,
        address: "Via Mazzini 40, Caserta",
        phone: "+39 0823 321 099",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Caserta&order=price",
        perks: ["Cucina comune", "Lavatrice", "Deposito bagagli custodito"],
        lat: 41.0740,
        lng: 14.3350
      }
    ]
  },
  {
    number: 15,
    from: "Caserta",
    to: "Maddaloni -> Montesarchio (Valle Caudina)",
    region: "Campania",
    distanceKm: 23.8,
    elevationGainM: 320,
    elevationLossM: 210,
    difficulty: "Medio",
    terrain: "Sentieri storici dell'Acquedotto Carolino del Vanvitelli 55%, carrarecce 30%, asfalto 15%",
    description: "Si attraversa la Valle di Maddaloni passando sotto i maestosi Ponti della Valle dell'Acquedotto Carolino (patrimonio UNESCO) e si entra nella leggendaria Valle Caudina fino al borgo di Montesarchio dominato dal castello e dalla torre longobarda.",
    startCoordinates: [41.0965, 14.3680],
    coordinates: [41.0640, 14.6430],
    waterPointsNote: "Fontanelle ai Ponti della Valle Carolini, sorgente a Sant'Agata de' Goti bivio, e fontane a Montesarchio.",
    convents: [
      {
        id: "c-15-1",
        name: "Convento di San Francesco dei Frati Minori (Montesarchio)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 14,
        phone: "+39 0824 831 042",
        email: "sanfrancesco.montesarchio@ofm.it",
        address: "Piazza Umberto I, 82016 Montesarchio (BN)",
        contactPerson: "Frate Guardiano",
        receptionHours: "15:30 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrini", "Refettorio", "Timbro della Rocca"],
        lat: 41.0655,
        lng: 14.6445,
        notes: "Grande ospitalità francescana alle falde della collina del Castello. Spazio per tende nell'antico orto."
      }
    ],
    campsites: [
      {
        id: "camp-15-1",
        name: "Area Tenda Parco della Torre di Montesarchio",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Salita Castello, Montesarchio",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.0680,
        lng: 14.6460,
        instructions: "Prato naturale sotto le mura della torre longobarda con vista panoramica sulla Valle Caudina e fontana d'acqua potabile."
      }
    ],
    emergencyStays: [
      {
        id: "em-15-1",
        name: "B&B La Rocca Caudina Montesarchio",
        type: "bb_budget",
        priceMinEur: 28,
        distanceFromTrailMeters: 140,
        address: "Via Madonna delle Grazie 12, Montesarchio",
        phone: "+39 349 778 0122",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Montesarchio&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Self check-in", "WiFi"],
        lat: 41.0635,
        lng: 14.6420
      },
      {
        id: "em-15-2",
        name: "Affittacamere Da Mario Low-Cost",
        type: "affittacamere",
        priceMinEur: 32,
        distanceFromTrailMeters: 250,
        address: "Via Roma 45, Montesarchio",
        phone: "+39 0824 832 901",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Montesarchio&order=price",
        perks: ["Bagno privato con asciugacapelli", "Aria condizionata", "Colazione"],
        lat: 41.0645,
        lng: 14.6435
      }
    ]
  },
  {
    number: 16,
    from: "Montesarchio",
    to: "Benevento",
    region: "Campania",
    distanceKm: 22.1,
    elevationGainM: 190,
    elevationLossM: 250,
    difficulty: "Facile",
    terrain: "Sentieri lungo il corso del fiume Calore e tratturi 65%, stradine vicinali 25%, asfalto 10%",
    description: "Si raggiunge l'illustre Benevento, cuore del Ducato Longobardo e crocevia strategico dove l'antica Via Appia Traiana proseguiva verso Brindisi e le coste pugliesi. Ingresso monumentale dall'Arco di Traiano (114 d.C.) e visita al complesso di Santa Sofia (UNESCO).",
    startCoordinates: [41.0640, 14.6430],
    coordinates: [41.1320, 14.7790],
    waterPointsNote: "Fontanelle ad Apollosa, a San Leucio del Sannio e nasoni nel centro storico di Benevento.",
    convents: [
      {
        id: "c-16-1",
        name: "Convento di San Francesco dei Frati Minori Conventuali (Benevento)",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 15,
        phone: "+39 0824 212 90",
        email: "sanfrancesco.benevento@libero.it",
        address: "Piazza San Francesco 2, 82100 Benevento (BN)",
        contactPerson: "Padre Guardiano Fr. Pasquale",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Chiostro francescano", "Timbro Santa Sofia UNESCO"],
        lat: 41.1310,
        lng: 14.7760,
        notes: "Accoglienza pellegrina centenaria. Chiostro e giardino interno chiuso, accetta tende su richiesta preventiva."
      },
      {
        id: "c-16-2",
        name: "Convento dei Padri Cappuccini - Oasi Sacro Cuore",
        type: "convento",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0824 317 011",
        address: "Via Cappuccini 20, Benevento",
        contactPerson: "Padre Superiore",
        receptionHours: "16:00 - 19:00",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata", "Silenzio"],
        lat: 41.1270,
        lng: 14.7850,
        notes: "Posizione tranquilla poco fuori dalle mura."
      }
    ],
    campsites: [
      {
        id: "camp-16-1",
        name: "Area Tenda Oasi WWF Fiume Sabato",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Lungofiume Sabato, Benevento",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.1280,
        lng: 14.7720,
        instructions: "Parco fluviale urbano verdeggiante con fontanella d'acqua fresca. Bivacco serale discreto ammesso."
      }
    ],
    emergencyStays: [
      {
        id: "em-16-1",
        name: "Ostello Arco Traiano Benevento Low-Cost",
        type: "ostello_lowcost",
        priceMinEur: 24,
        distanceFromTrailMeters: 180,
        address: "Via Traiano 25, Benevento",
        phone: "+39 0824 241 189",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Benevento&order=price",
        perks: ["A 100m dall'Arco di Traiano", "Doccia calda", "Cucina comune", "WiFi veloce", "Deposito zaini"],
        lat: 41.1325,
        lng: 14.7795
      },
      {
        id: "em-16-2",
        name: "B&B Al Duomo Benevento Budget",
        type: "bb_budget",
        priceMinEur: 30,
        distanceFromTrailMeters: 250,
        address: "Corso Garibaldi 112, Benevento",
        phone: "+39 347 618 2045",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Benevento&order=price",
        perks: ["Bagno privato", "Climatizzatore", "Colazione con prodotti tipici"],
        lat: 41.1305,
        lng: 14.7770
      }
    ]
  },
  {
    number: 17,
    from: "Benevento",
    to: "Paduli -> Buonalbergo (Via Traiana)",
    region: "Campania",
    distanceKm: 23.9,
    elevationGainM: 410,
    elevationLossM: 190,
    difficulty: "Impegnativo",
    terrain: "Tracciato archeologico della Via Traiana romana e tratturi 75%, carrarecce 20%, asfalto 5%",
    description: "Si imbocca ufficialmente la Via Appia Traiana che collegava Benevento a Brindisi. Si attraversa il celebre 'Ponte delle Chianche', spettacolare ponte romano a sei arcate ancora integro, per salire al borgo fortificato di Buonalbergo, storicamente noto come 'Bonus Albergus' per l'ospitalità ai viandanti.",
    startCoordinates: [41.1320, 14.7790],
    coordinates: [41.2210, 14.9810],
    waterPointsNote: "Fontanella a Ponte delle Chianche, sorgente a Paduli centro e fontana pubblica a Buonalbergo (Piazza Garibaldi).",
    convents: [
      {
        id: "c-17-1",
        name: "Santuario Santissimo Salvatore & Casa Parrocchiale Buonalbergo",
        type: "santuario",
        requiresCredential: true,
        costType: "donativo_libero",
        suggestedDonationEur: 12,
        phone: "+39 0824 840 033",
        email: "parrocchia.buonalbergo@virgilio.it",
        address: "Piazza Santissimo Salvatore 3, 82020 Buonalbergo (BN)",
        contactPerson: "Don Domenico",
        receptionHours: "15:00 - 19:30",
        hasStamp: true,
        tentAllowedInGarden: true,
        services: ["Doccia calda", "Camerata pellegrina", "Cucina comune", "Timbro Via Traiana"],
        lat: 41.2225,
        lng: 14.9825,
        notes: "Nel 'Bonus Albergus' medievale: prato del santuario panoramico sulle colline dell'Appennino campano, tende accolte a braccia aperte."
      }
    ],
    campsites: [
      {
        id: "camp-17-1",
        name: "Area Bivacco Ponte delle Chianche (Romano)",
        type: "area_bivacco_consentita",
        priceTentPerNightEur: 0,
        address: "Località Ponte Chianche, Paduli/Buonalbergo",
        waterAvailable: true,
        showerAvailable: false,
        electricityAvailable: false,
        stoveCookingAllowed: true,
        lat: 41.1980,
        lng: 14.9450,
        instructions: "Prato naturale accanto all'antico ponte romano della Via Traiana del II secolo d.C. con sorgente d'acqua freschissima."
      }
    ],
    emergencyStays: [
      {
        id: "em-17-1",
        name: "Locanda del Pellegrino Buonalbergo",
        type: "bb_budget",
        priceMinEur: 27,
        distanceFromTrailMeters: 80,
        address: "Via Regina Elena 14, Buonalbergo",
        phone: "+39 333 712 5590",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Buonalbergo&order=price",
        perks: ["Cancellazione gratuita", "Doccia calda", "Colazione casalinga inclusa", "Lavaggio scarpe/indumenti"],
        lat: 41.2205,
        lng: 14.9802
      },
      {
        id: "em-17-2",
        name: "Agriturismo La Quercia Budget Rooms",
        type: "affittacamere",
        priceMinEur: 34,
        distanceFromTrailMeters: 550,
        address: "Contrada Montecalvo 8, Buonalbergo",
        phone: "+39 0824 840 188",
        bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Buonalbergo&order=price",
        perks: ["Bagno privato", "Cena contadina convenzionata pellegrini 12€"],
        lat: 41.2250,
        lng: 14.9860
      }
    ]
  }
];

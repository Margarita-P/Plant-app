const plantData = [
  {
    id: 1,
    name: 'Orchidėja',
    image: require('./assets/plants/orchid2.jpg'),
    description: 'Egzotiška kambarinė gėlė.',
    wateringInstructions: 'Laistykite augalą kas 1 ar 2 savaites, tačiau svarbu stebėti šaknis – kai jos pilkšvos, gėlė yra ištroškusi',
    lightRequirements: 'Mėgsta daug netiesioginės saulės šviesos',
  },
  {
    id: 2,
    name: 'Aglaonema',
    image: require('./assets/plants/aglaonema.jpg'),
    description: 'Krūmo formos gėlė, ilgai žydi ir suformuoja vaisius.',
    wateringInstructions: 'Nuo pavasario iki rudens augalą būtina laistyti gausiai, žiemą laistymas suretinamas iki vidutinio. Laistyti gėlę reikia tik minkštu ir šiltu vandeniu, kuris būna nusistovėjęs kelias dienas kambario temperatūroje.',
    lightRequirements: 'Aglaonema mėgsta gerą apšvietimą. Vasarą, karščiausiomis dienos valandomis gėlę reikia apsaugoti nuo tiesioginių saulės spindulių.  Žiemą gėlei reikalingas ypač ryškus ir intensyvus apšvietimas.',
  },
  {
    id: 3,
    name: 'Filodendras',
    image: require('./assets/plants/filodendras.jpg'),
    description: 'Viena iš gražiausių lapinių gėlių. Atsiradusi iš Amerikos atogrąžų.',
    wateringInstructions: 'Dažnai ir per auginimo sezoną visuomet laistyti kompostą. Gerai suspausti šaknis į žemę vijoklinėms rūšims.',
    lightRequirements: 'Labiausiai tinka pusiau ryški šviesa, primenanti atogrąžų priedangą. ',
  },
  {
    id: 4,
    name: 'Kalatėja',
    image: require('./assets/plants/Kalateja.jpg'),
    description: 'Viena iš gražiausių ir nuostabiausių tropinių lapinių augalų pasaulyje.',
    wateringInstructions: 'Stipriai drėkinti. Laikyti žemę visuomet drėgną visą laiką vasarą ir pavasarį, žiemą laistymą mažinti.',
    lightRequirements: 'Laikyti šviesoje, tačiau pavėsyje arba kambaryje, pereinančiame iš šviesos į šešėlį ir atvirkščiai. Nestatyti tiesioginėje, vidurdienio saulės šviesoje, kurioje gali išblankti lapų spalvos.',
  },
  {
    id: 5,
    name: 'Monstera',
    image: require('./assets/plants/Monstera.jpg'),
    description: 'Nereikli ir greitai auganti didelė gėlė. Tai labiausiai paplitęs naminis augalas - sukuria džiungles namuose.',
    wateringInstructions: 'Nuo pavasario iki rudens monstera laistoma gausiai. Žiemą laistyti reikia taip, kad žemė neperdžiūtų ir nebūtų per daug drėgna.',
    lightRequirements: 'Geriausia laikyti ten, kur yra pakankamai ryškios pasklidusios šviesos ir lengvas šešėlis.',
  },
  {
    id: 6,
    name: 'Sansevjera',
    image: require('./assets/plants/Sansevjera.jpg'),
    description: 'Sansevjera yra puikus, nereiklus kambarinis augalas, kuris tinka auginti ir kaip vienetinis augalas, ir kompozicijose su kitomis kambarinėmis gėlėmis.',
    wateringInstructions: 'Sansevjerą nuo pavasario iki rudens reikia laistyti reguliariai ir vidutiniškai, žemė turi pradžiūti iki kito laistymo. Žiemą laistymą reikia apriboti iki vieno karto per dvi tris savaites.',
    lightRequirements: 'Sansevjera mėgsta ryškią šviesą, tačiau gerai jaučiasi ir šešėlyje.',
  },
  {
    id: 7,
    name: 'Skindapas',
    image: require('./assets/plants/Skindapas.jpg'),
    description: 'Gėlė yra žinoma dėl savo patrauklių lapų, kurie yra dideli ir platūs, gali būti margi arba vienspalviai, žali.',
    wateringInstructions: 'Laistykite augalą, kai viršutinis dirvožemio centimetras ar du, jaučiasi sausi.',
    lightRequirements: 'Teikia pirmenybę ryškiai, netiesioginei šviesai. Nelaikykite augalo tiesioginiuose saulės spinduliuose, nes tai gali nudeginti lapus.',
  },
  {
    id: 8,
    name: 'Karališkoji begonija',
    image: require('./assets/plants/karaliskoji-begonija.jpg'),
    description: 'Išpopuliarėjo dėl savo didelių, širdies pavidalo, spalvotuų lapų.',
    wateringInstructions: 'Vasarą laistyti 2 kartus per savaitę, žiemą kartą per dvi savaites.',
    lightRequirements: 'Nemėgsta tiesioginių saulės spindulių, tačiau nori būti šviesoje. Geriausiai statyti, ten kur šviesu, bet nekrenta tiesioginiai spinduliai.',
  },
  // Add more plant objects as needed
];

export default plantData;

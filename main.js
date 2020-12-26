// Message should read: "Congratulation young Genin: You are going to train in VILLAGE, under the "KAGE" and you will master these powerfull jutsu: JUTSUS"

const lore = {
  landOfFire: {
    village: "Konohagakure",
    title: "Hokage",
    kage: [
      "Hashirama Senju",
      "Tobirama Senju",
      "Hiruzen Sarutobi",
      "Minato Namikaze",
      "Tsunade",
      "Kakashi Hatake",
      "Naruto Uzumaki",
    ],
  },

  landOfWater: {
    village: "Kirigakure",
    title: "Mizukage",
    kage: [
      "Byakuren",
      "Gengetsu Hōzuki",
      "Sandaime Mizukage",
      "Yagura Karatachi",
      "Mei Terumī",
      "Chōjūrō",
    ],
  },

  landOfEarth: {
    village: "Iwagakure",
    title: "Tsuchikage",
    kage: ["Ishikawa", "Mū‎", "Ōnoki", "Kurotsuchi"],
  },

  landOfCloud: {
    village: "Kirigakure",
    title: "Raikage",
    kage: [
      "Shodai Raikage",
      "Nidaime Raikage",
      "Sandaime Raikage",
      "Yondaime Raikage",
      "Daurui",
    ],
  },

  landOfWind: {
    village: "Sunagakure",
    title: "Kazekage",
    kage: ["Reto", "Shamon", "Sandaime Kazekage", "Rasa", "Gaara"],
  },

  jutsu: {
    suiton: [
      "Kirigakure no Jutsu",
      "Ukojizai no Jutsu",
      "Shabondama no Ninjutsu",
      "Sensatsu Suishō",
      "Mizu Bunshin no Jutsu",
      "Mizudeppō no Jutsu",
      "Suirō no Jutsu",
      "Senshokukō",
      "Hōmatsu no Jutsu",
      "Bakusui Shōha",
      "Goshokuzame",
      "Daikōdan no Jutsu",
      "Gōsuiwan no Jutsu",
      "Daibakufu no Jutsu",
      "Teppōdama",
      "Hatō",
      "Tate Eboshi",
      "Suidan no Jutsu",
      "Suishōha",
      "Suiryūdan no Jutsu",
      "Suigadan",
      "Suijinheki",
      "Mizukagami no Jutsu",
      "Suidanha",
      "Suikōdan no Jutsu",
      "Mizurappa",
    ],

    katon: [
      "Homura",
      "Haisekishō",
      "Dai Endan",
      "Bakufū Ranbu",
      "Homuranagase",
      "Ryūka no Jutsu",
      "Ryūen Hōka no Jutsu",
      "Kibaku Enjin",
      "Karyū Endan",
      "Endan",
      "Gōryūka no Jutsu",
      "Gōka Mekkyaku",
      "Gōka Messhitsu",
      "Gōkakyū no Jutsu",
      "Gōen no Jutsu",
      "Haijingakure no Jutsu",
      "Hōsenka no Jutsu",
      "Hōsenka Tsumabeni",
    ],

    doton: [
      "Kajūgan no Jutsu",
      "Shinjū Zanshu no Jutsu",
      "Otoshibuta",
      "Doryūkatsu",
      "Doryō Dango",
      "Doroku Gaeshi",
      "Doryūheki",
      "Banri Doryūheki",
      "Kengan no Jutsu",
      "Gōremu no Jutsu",
      "Daichidōkaku",
      "Moguragakure no Jutsu",
      "Keijūgan no Jutsu",
      "Chidōkaku",
      "Kaido Shōkutsu",
      "Ressenga",
      "Sando no Jutsu",
      "Dochū Senkō",
      "Yomi Numa",
      "Chōkajūgan no Jutsu",
    ],

    raiton: [
      "Chidori",
      "Raikiri",
      "Kirin",
      "Kuropansa",
      "Daburu Rariatto",
      "Shichū Shibari",
      "Rariatto",
      "Raijū Tsuiga",
      "Raigen Raikōchū",
      "Shiden",
      "Kage Bunshin no Jutsu",
      "Hebi Ikazuchi",
      "Jinraisen",
      "Kangekiha",
      "Raitoningu Sutorēto",
      "Raiden",
    ],

    fūton: [
      "Kiryū Ranbu",
      "Kakeami",
      "Renkūdan",
      "Fūjin no Jutsu",
      "Reppūshō",
      "Daitoppa",
      "Ōkamaitachi no Jutsu",
      "Mugen Sajin — Daitoppa",
      "Atsugai",
      "Rasengan",
      "Rasenshuriken",
      "Sasandan",
      "Fūhakujun",
      "Shinkūjin",
      "Shinkū Taigyoku",
      "Shinkū Renpa",
      "Shinkūha",
      "Kazekiri no Jutsu",
      "Kazanami",
    ],
  },
};

function randomVillage() {
  let land = "";
  const landIndex = Math.floor(Math.random() * 5);
  switch (landIndex) {
    case 0:
      land = "landOfFire";
      break;
    case 1:
      land = "landOfWater";
      break;
    case 2:
      land = "landOfEarth";
      break;
    case 3:
      land = "landOfCloud";
      break;
    case 4:
      land = "landOfWind";
      break;
    default:
      break;
  }
  return land;
}

function randomKage(landString) {
  //console.log(landString)
  //console.log(lore[landString]['kage'].length)
  const kageIndex = Math.floor(Math.random() * lore[landString]["kage"].length);
  //switch (kageIndex)
  return kageIndex;
}


function randomJutsu() {
  let jutsuNature = "";
  const jutsuIndex = Math.floor(Math.random() * 5);
  switch (jutsuIndex) {
    case 0:
      jutsuNature = "suiton";
      break;
    case 1:
      jutsuNature = "katon";
      break;
    case 2:
      jutsuNature = "doton";
      break;
    case 3:
      jutsuNature = "raiton";
      break;
    case 4:
      jutsuNature = "fūton";
      break;
    default:
      break;
  }
  return jutsuNature;
}

function displayMessage() {
  messageBits = [];

  // LAND
  const land = randomVillage();
  messageBits.push(land);
  //console.log(land);

  // VILLAGE
  const village = lore[land]["village"];
  messageBits.push(village);
  //console.log(village);

  // KAGE'S TITLE
  const kageTitle = lore[land]["title"];
  messageBits.push(kageTitle);
  //console.log(title)

  // KAGE
  const kage = lore[land]["kage"][randomKage(land)];
  messageBits.push(kage);

  // JUTSU NATURE
  const jutsuNature = randomJutsu();
  messageBits.push(jutsuNature);

  // JUTSU
  let copy = lore["jutsu"][jutsuNature];
  let justuPicks = [];
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    justuPicks.push(copy.splice(randomIndex, 1)[0]);
  }

  messageBits.push(justuPicks);

  // PRINT MESSAGE
  console.log(`
  Congratulation young Genin:
You are going to train in the village of ${messageBits[1]} inside the ${messageBits[0]}.
Your sensei will be the ${messageBits[2]} ${messageBits[3]} and you will learn the ${messageBits[4]} art and master these powerful jutsu: ${messageBits[5]}
`);
}

// RUN THE FUNCTION 
displayMessage();
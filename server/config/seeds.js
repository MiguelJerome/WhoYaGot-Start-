const db = require('./connection');
const { User, Player } = require('../models');

db.once('open', async () => {

  await Player.deleteMany();

  const players = await Player.insertMany([
    {
      "TeamID": 1,
      "PlayerID": 30000065,
      "Name": "Patrice Bergeron",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 35.5
    },{
      "TeamID": 1,
      "PlayerID": 30000195,
      "Name": "Craig Smith",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 5.6
    },{
      "TeamID": 1,
      "PlayerID": 30000218,
      "Name": "Jakub Zboril",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 1,
      "PlayerID": 30000525,
      "Name": "Mike Reilly",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 1,
      "PlayerID": 30000605,
      "Name": "David Krejci",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 1,
      "PlayerID": 30000607,
      "Name": "David Pastrnak",
      "Team": "BOS",
      "Position": "RW",
      "FantasyPoints": 45.1
    },{
      "TeamID": 1,
      "PlayerID": 30000691,
      "Name": "Nick Foligno",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 14.2
    },{
      "TeamID": 1,
      "PlayerID": 30000805,
      "Name": "Charlie Coyle",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 13.4
    },{
      "TeamID": 1,
      "PlayerID": 30000958,
      "Name": "Derek Forbort",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 11.7
    },{
      "TeamID": 1,
      "PlayerID": 30000995,
      "Name": "Pavel Zacha",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 13.8
    },{
      "TeamID": 1,
      "PlayerID": 30001035,
      "Name": "Tomáš Nosek",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 4.9
    },{
      "TeamID": 1,
      "PlayerID": 30001088,
      "Name": "Brandon Carlo",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 3.5
    },{
      "TeamID": 1,
      "PlayerID": 30001179,
      "Name": "Anton Strålman",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": -0.8
    },{
      "TeamID": 1,
      "PlayerID": 30001187,
      "Name": "Taylor Hall",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 23.1
    },{
      "TeamID": 1,
      "PlayerID": 30001238,
      "Name": "Jake DeBrusk",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 25.9
    },{
      "TeamID": 1,
      "PlayerID": 30001264,
      "Name": "Hampus Lindholm",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 24.2
    },{
      "TeamID": 1,
      "PlayerID": 30001374,
      "Name": "Linus Ullmark",
      "Team": "BOS",
      "Position": "G",
      "FantasyPoints": 30.1
    },{
      "TeamID": 1,
      "PlayerID": 30002539,
      "Name": "Matt Grzelcyk",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 13.4
    },{
      "TeamID": 1,
      "PlayerID": 30002839,
      "Name": "A.J. Greer",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 17.1
    },{
      "TeamID": 1,
      "PlayerID": 30003006,
      "Name": "Dan Renouf",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 0.3
    },{
      "TeamID": 1,
      "PlayerID": 30003157,
      "Name": "Trent Frederic",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 1,
      "PlayerID": 30003671,
      "Name": "Jack Studnicka",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 1,
      "PlayerID": 30003893,
      "Name": "Connor Clifton",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 19.2
    },{
      "TeamID": 1,
      "PlayerID": 30003991,
      "Name": "Jeremy Swayman",
      "Team": "BOS",
      "Position": "G",
      "FantasyPoints": 1.4
    },{
      "TeamID": 1,
      "PlayerID": 30004126,
      "Name": "Jakub Lauko",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 3.8
    },{
      "TeamID": 2,
      "PlayerID": 30000432,
      "Name": "Craig Anderson",
      "Team": "BUF",
      "Position": "G",
      "FantasyPoints": 14
    },{
      "TeamID": 2,
      "PlayerID": 30000502,
      "Name": "Zemgus Girgensons",
      "Team": "BUF",
      "Position": "LW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 2,
      "PlayerID": 30000642,
      "Name": "Jeff Skinner",
      "Team": "BUF",
      "Position": "LW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 2,
      "PlayerID": 30000854,
      "Name": "Riley Sheahan",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 2,
      "PlayerID": 30001002,
      "Name": "Kyle Okposo",
      "Team": "BUF",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 2,
      "PlayerID": 30001013,
      "Name": "Vinnie Hinostroza",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 2,
      "PlayerID": 30001061,
      "Name": "Eric Comrie",
      "Team": "BUF",
      "Position": "G",
      "FantasyPoints": 18
    },{
      "TeamID": 2,
      "PlayerID": 30002577,
      "Name": "Alex Tuch",
      "Team": "BUF",
      "Position": "RW",
      "FantasyPoints": 30.5
    },{
      "TeamID": 2,
      "PlayerID": 30002632,
      "Name": "Anders Bjork",
      "Team": "BUF",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 2,
      "PlayerID": 30003158,
      "Name": "Tage Thompson",
      "Team": "BUF",
      "Position": "RW",
      "FantasyPoints": 13.8
    },{
      "TeamID": 2,
      "PlayerID": 30003169,
      "Name": "Rasmus Asplund",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 12.5
    },{
      "TeamID": 2,
      "PlayerID": 30003172,
      "Name": "Kale Clague",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 2,
      "PlayerID": 30003202,
      "Name": "Casey Fitzgerald",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 1.7
    },{
      "TeamID": 2,
      "PlayerID": 30003643,
      "Name": "Casey Mittelstadt",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 2,
      "PlayerID": 30003657,
      "Name": "Henri Jokiharju",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 2,
      "PlayerID": 30003750,
      "Name": "Rasmus Dahlin",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 40.9
    },{
      "TeamID": 2,
      "PlayerID": 30004026,
      "Name": "Victor Olofsson",
      "Team": "BUF",
      "Position": "LW",
      "FantasyPoints": 22.1
    },{
      "TeamID": 2,
      "PlayerID": 30004048,
      "Name": "Lawrence Pilut",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 2,
      "PlayerID": 30004061,
      "Name": "Ilya Lyubushkin",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 6.3
    },{
      "TeamID": 2,
      "PlayerID": 30004105,
      "Name": "Mattias Samuelsson",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 2,
      "PlayerID": 30004431,
      "Name": "Jacob Bryson",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 2,
      "PlayerID": 30004479,
      "Name": "Dylan Cozens",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 16.3
    },{
      "TeamID": 2,
      "PlayerID": 30004502,
      "Name": "Peyton Krebs",
      "Team": "BUF",
      "Position": "C",
      "FantasyPoints": 2.1
    },{
      "TeamID": 2,
      "PlayerID": 30004815,
      "Name": "Jack Quinn",
      "Team": "BUF",
      "Position": "RW",
      "FantasyPoints": 1.7
    },{
      "TeamID": 2,
      "PlayerID": 30004867,
      "Name": "JJ Peterka",
      "Team": "BUF",
      "Position": "RW",
      "FantasyPoints": 10.9
    },{
      "TeamID": 2,
      "PlayerID": 30004980,
      "Name": "Owen Power",
      "Team": "BUF",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 3,
      "PlayerID": 30000273,
      "Name": "Robert Hagg",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 10
    },{
      "TeamID": 3,
      "PlayerID": 30000390,
      "Name": "Jakub Vrana",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 5.9
    },{
      "TeamID": 3,
      "PlayerID": 30000397,
      "Name": "David Perron",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 19.6
    },{
      "TeamID": 3,
      "PlayerID": 30000405,
      "Name": "Oskar Sundqvist",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 12.9
    },{
      "TeamID": 3,
      "PlayerID": 30000659,
      "Name": "Olli Määttä",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 20.5
    },{
      "TeamID": 3,
      "PlayerID": 30000735,
      "Name": "Adam Erne",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 3,
      "PlayerID": 30000821,
      "Name": "Andrew Copp",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 4.9
    },{
      "TeamID": 3,
      "PlayerID": 30000842,
      "Name": "Tyler Bertuzzi",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 3.8
    },{
      "TeamID": 3,
      "PlayerID": 30000846,
      "Name": "Dylan Larkin",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 31.7
    },{
      "TeamID": 3,
      "PlayerID": 30001063,
      "Name": "Ben Chiarot",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 3,
      "PlayerID": 30001078,
      "Name": "Jordan Oesterle",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 3,
      "PlayerID": 30002590,
      "Name": "Alex Nedeljkovic",
      "Team": "DET",
      "Position": "G",
      "FantasyPoints": 7.3
    },{
      "TeamID": 3,
      "PlayerID": 30002760,
      "Name": "Ville Husso",
      "Team": "DET",
      "Position": "G",
      "FantasyPoints": 17
    },{
      "TeamID": 3,
      "PlayerID": 30003193,
      "Name": "Filip Hronek",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 16.7
    },{
      "TeamID": 3,
      "PlayerID": 30003644,
      "Name": "Michael Rasmussen",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 3,
      "PlayerID": 30003674,
      "Name": "Gustav Lindstrom",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 3,
      "PlayerID": 30003892,
      "Name": "Dominik Kubalik",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 30.5
    },{
      "TeamID": 3,
      "PlayerID": 30003899,
      "Name": "Pius Suter",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 3,
      "PlayerID": 30004079,
      "Name": "Filip Zadina",
      "Team": "DET",
      "Position": "RW",
      "FantasyPoints": 2.1
    },{
      "TeamID": 3,
      "PlayerID": 30004101,
      "Name": "Joe Veleno",
      "Team": "DET",
      "Position": "C",
      "FantasyPoints": 5.9
    },{
      "TeamID": 3,
      "PlayerID": 30004475,
      "Name": "Moritz Seider",
      "Team": "DET",
      "Position": "D",
      "FantasyPoints": 13.8
    },{
      "TeamID": 3,
      "PlayerID": 30004816,
      "Name": "Lucas Raymond",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 3,
      "PlayerID": 30005489,
      "Name": "Elmer Soderblom",
      "Team": "DET",
      "Position": "LW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 4,
      "PlayerID": 30000015,
      "Name": "Brendan Gallagher",
      "Team": "MON",
      "Position": "RW",
      "FantasyPoints": 4.2
    },{
      "TeamID": 4,
      "PlayerID": 30000115,
      "Name": "Sean Monahan",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 4,
      "PlayerID": 30000227,
      "Name": "Mike Matheson",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 4,
      "PlayerID": 30000418,
      "Name": "David Savard",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 13.4
    },{
      "TeamID": 4,
      "PlayerID": 30000465,
      "Name": "Mike Hoffman",
      "Team": "MON",
      "Position": "LW",
      "FantasyPoints": 10.4
    },{
      "TeamID": 4,
      "PlayerID": 30000665,
      "Name": "Jake Allen",
      "Team": "MON",
      "Position": "G",
      "FantasyPoints": 18.2
    },{
      "TeamID": 4,
      "PlayerID": 30000734,
      "Name": "Jonathan Drouin",
      "Team": "MON",
      "Position": "LW",
      "FantasyPoints": 3.5
    },{
      "TeamID": 4,
      "PlayerID": 30000942,
      "Name": "Christian Dvorak",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 4,
      "PlayerID": 30000967,
      "Name": "Chris Wideman",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 4,
      "PlayerID": 30001786,
      "Name": "Evgenii Dadonov",
      "Team": "MON",
      "Position": "RW",
      "FantasyPoints": 1
    },{
      "TeamID": 4,
      "PlayerID": 30002781,
      "Name": "Sam Montembeault",
      "Team": "MON",
      "Position": "G",
      "FantasyPoints": 5.9
    },{
      "TeamID": 4,
      "PlayerID": 30003211,
      "Name": "Rem Pitlick",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 0.3
    },{
      "TeamID": 4,
      "PlayerID": 30003667,
      "Name": "Nick Suzuki",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 27.1
    },{
      "TeamID": 4,
      "PlayerID": 30003726,
      "Name": "Johnathan Kovacevic",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 4,
      "PlayerID": 30003964,
      "Name": "Michael Pezzetta",
      "Team": "MON",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 4,
      "PlayerID": 30003990,
      "Name": "Jake Evans",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 5.9
    },{
      "TeamID": 4,
      "PlayerID": 30004166,
      "Name": "Jordan Harris",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 20
    },{
      "TeamID": 4,
      "PlayerID": 30004361,
      "Name": "Josh Anderson",
      "Team": "MON",
      "Position": "RW",
      "FantasyPoints": 10
    },{
      "TeamID": 4,
      "PlayerID": 30004385,
      "Name": "Cayden Primeau",
      "Team": "MON",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 4,
      "PlayerID": 30004472,
      "Name": "Kirby Dach",
      "Team": "MON",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 4,
      "PlayerID": 30004664,
      "Name": "Corey Schueneman",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 4,
      "PlayerID": 30004803,
      "Name": "Kaiden Guhle",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 4,
      "PlayerID": 30004928,
      "Name": "Cole Caufield",
      "Team": "MON",
      "Position": "RW",
      "FantasyPoints": 23.8
    },{
      "TeamID": 4,
      "PlayerID": 30005128,
      "Name": "Arber Xhekaj",
      "Team": "MON",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 4,
      "PlayerID": 30005631,
      "Name": "Juraj Slafkovsky",
      "Team": "MON",
      "Position": "LW",
      "FantasyPoints": 3.8
    },{
      "TeamID": 5,
      "PlayerID": 30000052,
      "Name": "Claude Giroux",
      "Team": "OTT",
      "Position": "RW",
      "FantasyPoints": 15.4
    },{
      "TeamID": 5,
      "PlayerID": 30000186,
      "Name": "Austin Watson",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 5.6
    },{
      "TeamID": 5,
      "PlayerID": 30000295,
      "Name": "Magnus Hellberg",
      "Team": "OTT",
      "Position": "G",
      "FantasyPoints": 4.7
    },{
      "TeamID": 5,
      "PlayerID": 30000446,
      "Name": "Thomas Chabot",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 21.3
    },{
      "TeamID": 5,
      "PlayerID": 30000668,
      "Name": "Anton Forsberg",
      "Team": "OTT",
      "Position": "G",
      "FantasyPoints": 17.9
    },{
      "TeamID": 5,
      "PlayerID": 30000902,
      "Name": "Nick Holden",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 7
    },{
      "TeamID": 5,
      "PlayerID": 30000997,
      "Name": "Travis Hamonic",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 11.7
    },{
      "TeamID": 5,
      "PlayerID": 30001082,
      "Name": "Derick Brassard",
      "Team": "OTT",
      "Position": "C",
      "FantasyPoints": 3.1
    },{
      "TeamID": 5,
      "PlayerID": 30003032,
      "Name": "Mathieu Joseph",
      "Team": "OTT",
      "Position": "RW",
      "FantasyPoints": 10.4
    },{
      "TeamID": 5,
      "PlayerID": 30003077,
      "Name": "Tyler Motte",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 25.5
    },{
      "TeamID": 5,
      "PlayerID": 30003085,
      "Name": "Nikita Zaitsev",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 5,
      "PlayerID": 30003160,
      "Name": "Alex DeBrincat",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 23.8
    },{
      "TeamID": 5,
      "PlayerID": 30003206,
      "Name": "Dylan Gambrell",
      "Team": "OTT",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 5,
      "PlayerID": 30003665,
      "Name": "Josh Norris",
      "Team": "OTT",
      "Position": "C",
      "FantasyPoints": 7.3
    },{
      "TeamID": 5,
      "PlayerID": 30003668,
      "Name": "Erik Brannstrom",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 6.3
    },{
      "TeamID": 5,
      "PlayerID": 30003896,
      "Name": "Drake Batherson",
      "Team": "OTT",
      "Position": "RW",
      "FantasyPoints": 27.6
    },{
      "TeamID": 5,
      "PlayerID": 30003898,
      "Name": "Parker Kelly",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 1.4
    },{
      "TeamID": 5,
      "PlayerID": 30003912,
      "Name": "Mark Kastelic",
      "Team": "OTT",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 5,
      "PlayerID": 30004077,
      "Name": "Brady Tkachuk",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 33.4
    },{
      "TeamID": 5,
      "PlayerID": 30004284,
      "Name": "Kevin Mandolese",
      "Team": "OTT",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 5,
      "PlayerID": 30004514,
      "Name": "Shane Pinto",
      "Team": "OTT",
      "Position": "C",
      "FantasyPoints": 21.3
    },{
      "TeamID": 5,
      "PlayerID": 30004773,
      "Name": "Artem Zub",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 12.1
    },{
      "TeamID": 5,
      "PlayerID": 30004819,
      "Name": "Jake Sanderson",
      "Team": "OTT",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 5,
      "PlayerID": 30004821,
      "Name": "Tim Stützle",
      "Team": "OTT",
      "Position": "LW",
      "FantasyPoints": 20
    },{
      "TeamID": 6,
      "PlayerID": 30000048,
      "Name": "Pierre-Edouard Bellemare",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 6,
      "PlayerID": 30000371,
      "Name": "Haydn Fleury",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 6,
      "PlayerID": 30000477,
      "Name": "Nick Paul",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 23
    },{
      "TeamID": 6,
      "PlayerID": 30000650,
      "Name": "Ian Cole",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 3.5
    },{
      "TeamID": 6,
      "PlayerID": 30000737,
      "Name": "Victor Hedman",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 27.6
    },{
      "TeamID": 6,
      "PlayerID": 30000739,
      "Name": "Alex Killorn",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 10.9
    },{
      "TeamID": 6,
      "PlayerID": 30000742,
      "Name": "Brayden Point",
      "Team": "TB",
      "Position": "C",
      "FantasyPoints": 25.9
    },{
      "TeamID": 6,
      "PlayerID": 30000743,
      "Name": "Steven Stamkos",
      "Team": "TB",
      "Position": "C",
      "FantasyPoints": 43
    },{
      "TeamID": 6,
      "PlayerID": 30000771,
      "Name": "Brian Elliott",
      "Team": "TB",
      "Position": "G",
      "FantasyPoints": 11.7
    },{
      "TeamID": 6,
      "PlayerID": 30000880,
      "Name": "Pat Maroon",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 6,
      "PlayerID": 30001047,
      "Name": "Nikita Kucherov",
      "Team": "TB",
      "Position": "RW",
      "FantasyPoints": 33
    },{
      "TeamID": 6,
      "PlayerID": 30001050,
      "Name": "Vladislav Namestnikov",
      "Team": "TB",
      "Position": "C",
      "FantasyPoints": 7.3
    },{
      "TeamID": 6,
      "PlayerID": 30001168,
      "Name": "Pierre-Cedric Labrie",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 6,
      "PlayerID": 30001265,
      "Name": "Corey Perry",
      "Team": "TB",
      "Position": "RW",
      "FantasyPoints": 17.5
    },{
      "TeamID": 6,
      "PlayerID": 30001279,
      "Name": "Trevor Carrick",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 6,
      "PlayerID": 30001377,
      "Name": "Andrei Vasilevskiy",
      "Team": "TB",
      "Position": "G",
      "FantasyPoints": 18
    },{
      "TeamID": 6,
      "PlayerID": 30002821,
      "Name": "Erik Cernak",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 3.5
    },{
      "TeamID": 6,
      "PlayerID": 30002867,
      "Name": "Philippe Myers",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 4.9
    },{
      "TeamID": 6,
      "PlayerID": 30003137,
      "Name": "Mikhail Sergachev",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 24.2
    },{
      "TeamID": 6,
      "PlayerID": 30003250,
      "Name": "Brandon Hagel",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 19.2
    },{
      "TeamID": 6,
      "PlayerID": 30003652,
      "Name": "Cal Foote",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 6,
      "PlayerID": 30003947,
      "Name": "Ross Colton",
      "Team": "TB",
      "Position": "C",
      "FantasyPoints": 12.5
    },{
      "TeamID": 6,
      "PlayerID": 30004131,
      "Name": "Gabriel Fortier",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 6,
      "PlayerID": 30004606,
      "Name": "Nick Perbix",
      "Team": "TB",
      "Position": "D",
      "FantasyPoints": 5.6
    },{
      "TeamID": 6,
      "PlayerID": 30004945,
      "Name": "Cole Koepke",
      "Team": "TB",
      "Position": "LW",
      "FantasyPoints": 1
    },{
      "TeamID": 7,
      "PlayerID": 30000040,
      "Name": "Morgan Rielly",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 7,
      "PlayerID": 30000061,
      "Name": "Wayne Simmonds",
      "Team": "TOR",
      "Position": "RW",
      "FantasyPoints": 2.1
    },{
      "TeamID": 7,
      "PlayerID": 30000106,
      "Name": "T.J. Brodie",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 5.6
    },{
      "TeamID": 7,
      "PlayerID": 30000111,
      "Name": "Mark Giordano",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 16.7
    },{
      "TeamID": 7,
      "PlayerID": 30000144,
      "Name": "Kyle Clifford",
      "Team": "TOR",
      "Position": "LW",
      "FantasyPoints": 2.8
    },{
      "TeamID": 7,
      "PlayerID": 30000241,
      "Name": "Calle Jarnkrok",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 7
    },{
      "TeamID": 7,
      "PlayerID": 30000266,
      "Name": "Nicolas Aube-Kubel",
      "Team": "TOR",
      "Position": "RW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 7,
      "PlayerID": 30000275,
      "Name": "John Tavares",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 29.6
    },{
      "TeamID": 7,
      "PlayerID": 30000486,
      "Name": "William Nylander",
      "Team": "TOR",
      "Position": "RW",
      "FantasyPoints": 28
    },{
      "TeamID": 7,
      "PlayerID": 30000629,
      "Name": "Matt Murray",
      "Team": "TOR",
      "Position": "G",
      "FantasyPoints": -0.2
    },{
      "TeamID": 7,
      "PlayerID": 30000961,
      "Name": "Jake Muzzin",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 7.7
    },{
      "TeamID": 7,
      "PlayerID": 30002424,
      "Name": "Justin Holl",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 14.2
    },{
      "TeamID": 7,
      "PlayerID": 30002785,
      "Name": "Ilya Samsonov",
      "Team": "TOR",
      "Position": "G",
      "FantasyPoints": 24.4
    },{
      "TeamID": 7,
      "PlayerID": 30002859,
      "Name": "Michael Bunting",
      "Team": "TOR",
      "Position": "LW",
      "FantasyPoints": 18.4
    },{
      "TeamID": 7,
      "PlayerID": 30003130,
      "Name": "Auston Matthews",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 30.1
    },{
      "TeamID": 7,
      "PlayerID": 30003231,
      "Name": "Denis Malgin",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 7,
      "PlayerID": 30003342,
      "Name": "Mitchell Marner",
      "Team": "TOR",
      "Position": "RW",
      "FantasyPoints": 17.1
    },{
      "TeamID": 7,
      "PlayerID": 30003544,
      "Name": "Victor Mete",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 7,
      "PlayerID": 30003549,
      "Name": "Zach Aston-Reese",
      "Team": "TOR",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 7,
      "PlayerID": 30003604,
      "Name": "David Kampf",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 5.9
    },{
      "TeamID": 7,
      "PlayerID": 30003753,
      "Name": "Alexander Kerfoot",
      "Team": "TOR",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 7,
      "PlayerID": 30004051,
      "Name": "Pierre Engvall",
      "Team": "TOR",
      "Position": "LW",
      "FantasyPoints": 1.7
    },{
      "TeamID": 7,
      "PlayerID": 30004099,
      "Name": "Rasmus Sandin",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 7,
      "PlayerID": 30004360,
      "Name": "Filip Kral",
      "Team": "TOR",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 7,
      "PlayerID": 30004415,
      "Name": "Erik Kallgren",
      "Team": "TOR",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 7,
      "PlayerID": 30004509,
      "Name": "Nicholas Robertson",
      "Team": "TOR",
      "Position": "LW",
      "FantasyPoints": 11.7
    },{
      "TeamID": 8,
      "PlayerID": 30000228,
      "Name": "Aleksander Barkov",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 15.4
    },{
      "TeamID": 8,
      "PlayerID": 30000239,
      "Name": "Aaron Ekblad",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 5.9
    },{
      "TeamID": 8,
      "PlayerID": 30000263,
      "Name": "Nick Cousins",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 1
    },{
      "TeamID": 8,
      "PlayerID": 30000269,
      "Name": "Radko Gudas",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 11.7
    },{
      "TeamID": 8,
      "PlayerID": 30000356,
      "Name": "Eric Staal",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 8,
      "PlayerID": 30000559,
      "Name": "Sam Bennett",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 8,
      "PlayerID": 30000656,
      "Name": "Patric Hornqvist",
      "Team": "FLA",
      "Position": "RW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 8,
      "PlayerID": 30000667,
      "Name": "Sergei Bobrovsky",
      "Team": "FLA",
      "Position": "G",
      "FantasyPoints": 16.4
    },{
      "TeamID": 8,
      "PlayerID": 30000882,
      "Name": "Brandon Montour",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 17.1
    },{
      "TeamID": 8,
      "PlayerID": 30000980,
      "Name": "Sam Reinhart",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 8,
      "PlayerID": 30001159,
      "Name": "Carter Verhaeghe",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 13.8
    },{
      "TeamID": 8,
      "PlayerID": 30001242,
      "Name": "Marc Staal",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 8,
      "PlayerID": 30002217,
      "Name": "Ryan Lomberg",
      "Team": "FLA",
      "Position": "LW",
      "FantasyPoints": 7
    },{
      "TeamID": 8,
      "PlayerID": 30002758,
      "Name": "Gustav Forsling",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 26.7
    },{
      "TeamID": 8,
      "PlayerID": 30002776,
      "Name": "Colin White",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 22.1
    },{
      "TeamID": 8,
      "PlayerID": 30003134,
      "Name": "Matthew Tkachuk",
      "Team": "FLA",
      "Position": "LW",
      "FantasyPoints": 32.6
    },{
      "TeamID": 8,
      "PlayerID": 30003214,
      "Name": "Josh Mahura",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 11.7
    },{
      "TeamID": 8,
      "PlayerID": 30003358,
      "Name": "Rudolfs Balcers",
      "Team": "FLA",
      "Position": "LW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 8,
      "PlayerID": 30003681,
      "Name": "Eetu Luostarinen",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 25
    },{
      "TeamID": 8,
      "PlayerID": 30003951,
      "Name": "Lucas Carlsson",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 8,
      "PlayerID": 30004494,
      "Name": "Spencer Knight",
      "Team": "FLA",
      "Position": "G",
      "FantasyPoints": 7.4
    },{
      "TeamID": 8,
      "PlayerID": 30004809,
      "Name": "Anton Lundell",
      "Team": "FLA",
      "Position": "C",
      "FantasyPoints": 17.5
    },{
      "TeamID": 8,
      "PlayerID": 30004935,
      "Name": "Matt Kiersted",
      "Team": "FLA",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 9,
      "PlayerID": 30000127,
      "Name": "Brent Burns",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 9,
      "PlayerID": 30000296,
      "Name": "Antti Raanta",
      "Team": "CAR",
      "Position": "G",
      "FantasyPoints": 5.9
    },{
      "TeamID": 9,
      "PlayerID": 30000321,
      "Name": "Derek Stepan",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 11.7
    },{
      "TeamID": 9,
      "PlayerID": 30000324,
      "Name": "Brady Skjei",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 19.6
    },{
      "TeamID": 9,
      "PlayerID": 30000331,
      "Name": "Jesper Fast",
      "Team": "CAR",
      "Position": "RW",
      "FantasyPoints": 3.5
    },{
      "TeamID": 9,
      "PlayerID": 30000358,
      "Name": "Jordan Staal",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 3.8
    },{
      "TeamID": 9,
      "PlayerID": 30000368,
      "Name": "Brett Pesce",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 17.5
    },{
      "TeamID": 9,
      "PlayerID": 30000643,
      "Name": "Jaccob Slavin",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 13.8
    },{
      "TeamID": 9,
      "PlayerID": 30000795,
      "Name": "Paul Stastny",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 4.2
    },{
      "TeamID": 9,
      "PlayerID": 30000871,
      "Name": "Teuvo Teravainen",
      "Team": "CAR",
      "Position": "LW",
      "FantasyPoints": 16.7
    },{
      "TeamID": 9,
      "PlayerID": 30000886,
      "Name": "Stefan Noesen",
      "Team": "CAR",
      "Position": "RW",
      "FantasyPoints": 13.4
    },{
      "TeamID": 9,
      "PlayerID": 30000948,
      "Name": "Jordan Martinook",
      "Team": "CAR",
      "Position": "LW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 9,
      "PlayerID": 30000996,
      "Name": "Calvin De Haan",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 3.8
    },{
      "TeamID": 9,
      "PlayerID": 30001203,
      "Name": "Frederik Andersen",
      "Team": "CAR",
      "Position": "G",
      "FantasyPoints": 15.7
    },{
      "TeamID": 9,
      "PlayerID": 30002816,
      "Name": "Ondrej Kase",
      "Team": "CAR",
      "Position": "RW",
      "FantasyPoints": 0
    },{
      "TeamID": 9,
      "PlayerID": 30002819,
      "Name": "Sebastian Aho",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 28
    },{
      "TeamID": 9,
      "PlayerID": 30003226,
      "Name": "Ethan Bear",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 9,
      "PlayerID": 30003359,
      "Name": "Jalen Chatfield",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 9,
      "PlayerID": 30003396,
      "Name": "Dylan Coghlan",
      "Team": "CAR",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 9,
      "PlayerID": 30003654,
      "Name": "Martin Necas",
      "Team": "CAR",
      "Position": "RW",
      "FantasyPoints": 24.6
    },{
      "TeamID": 9,
      "PlayerID": 30004075,
      "Name": "Jesperi Kotkaniemi",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 9,
      "PlayerID": 30004076,
      "Name": "Andrei Svechnikov",
      "Team": "CAR",
      "Position": "LW",
      "FantasyPoints": 33.8
    },{
      "TeamID": 9,
      "PlayerID": 30004806,
      "Name": "Seth Jarvis",
      "Team": "CAR",
      "Position": "C",
      "FantasyPoints": 17.5
    },{
      "TeamID": 10,
      "PlayerID": 30000070,
      "Name": "Dougie Hamilton",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 22.5
    },{
      "TeamID": 10,
      "PlayerID": 30000207,
      "Name": "Damon Severson",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 8
    },{
      "TeamID": 10,
      "PlayerID": 30000613,
      "Name": "Ryan Graves",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 16.7
    },{
      "TeamID": 10,
      "PlayerID": 30000810,
      "Name": "Erik Haula",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 14.2
    },{
      "TeamID": 10,
      "PlayerID": 30000855,
      "Name": "Brendan Smith",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 10,
      "PlayerID": 30001040,
      "Name": "Tomas Tatar",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 14.2
    },{
      "TeamID": 10,
      "PlayerID": 30001052,
      "Name": "Ondrej Palat",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 11.7
    },{
      "TeamID": 10,
      "PlayerID": 30001108,
      "Name": "Jonas Siegenthaler",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 10,
      "PlayerID": 30002600,
      "Name": "Vitek Vanecek",
      "Team": "NJ",
      "Position": "G",
      "FantasyPoints": 2.1
    },{
      "TeamID": 10,
      "PlayerID": 30002779,
      "Name": "Mackenzie Blackwood",
      "Team": "NJ",
      "Position": "G",
      "FantasyPoints": 11.4
    },{
      "TeamID": 10,
      "PlayerID": 30002826,
      "Name": "Andreas Johnsson",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 10,
      "PlayerID": 30003079,
      "Name": "Miles Wood",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 11.7
    },{
      "TeamID": 10,
      "PlayerID": 30003139,
      "Name": "Michael McLeod",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 5.2
    },{
      "TeamID": 10,
      "PlayerID": 30003165,
      "Name": "Nate Bastian",
      "Team": "NJ",
      "Position": "RW",
      "FantasyPoints": 5.2
    },{
      "TeamID": 10,
      "PlayerID": 30003612,
      "Name": "Jesper Bratt",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 37.2
    },{
      "TeamID": 10,
      "PlayerID": 30003639,
      "Name": "Nico Hischier",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 25.9
    },{
      "TeamID": 10,
      "PlayerID": 30003683,
      "Name": "Jesper Boqvist",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 0.3
    },{
      "TeamID": 10,
      "PlayerID": 30003711,
      "Name": "Fabian Zetterlund",
      "Team": "NJ",
      "Position": "LW",
      "FantasyPoints": 5.6
    },{
      "TeamID": 10,
      "PlayerID": 30004162,
      "Name": "Kevin Bahl",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 10,
      "PlayerID": 30004190,
      "Name": "Yegor Sharangovich",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 19.2
    },{
      "TeamID": 10,
      "PlayerID": 30004470,
      "Name": "Jack Hughes",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 23
    },{
      "TeamID": 10,
      "PlayerID": 30004585,
      "Name": "John Marino",
      "Team": "NJ",
      "Position": "D",
      "FantasyPoints": 14.2
    },{
      "TeamID": 10,
      "PlayerID": 30004805,
      "Name": "Alexander Holtz",
      "Team": "NJ",
      "Position": "RW",
      "FantasyPoints": 3.5
    },{
      "TeamID": 10,
      "PlayerID": 30004810,
      "Name": "Dawson Mercer",
      "Team": "NJ",
      "Position": "C",
      "FantasyPoints": 17.1
    },{
      "TeamID": 11,
      "PlayerID": 30000204,
      "Name": "Kyle Palmieri",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 11,
      "PlayerID": 30000276,
      "Name": "Anders Lee",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 27.6
    },{
      "TeamID": 11,
      "PlayerID": 30000280,
      "Name": "Josh Bailey",
      "Team": "NYI",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 11,
      "PlayerID": 30000285,
      "Name": "Cal Clutterbuck",
      "Team": "NYI",
      "Position": "RW",
      "FantasyPoints": 6.6
    },{
      "TeamID": 11,
      "PlayerID": 30000288,
      "Name": "Matt Martin",
      "Team": "NYI",
      "Position": "LW",
      "FantasyPoints": 10.4
    },{
      "TeamID": 11,
      "PlayerID": 30000290,
      "Name": "Adam Pelech",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 11,
      "PlayerID": 30000292,
      "Name": "Mathew Barzal",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 18.8
    },{
      "TeamID": 11,
      "PlayerID": 30000341,
      "Name": "Anthony Beauvillier",
      "Team": "NYI",
      "Position": "LW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 11,
      "PlayerID": 30000514,
      "Name": "Zach Parise",
      "Team": "NYI",
      "Position": "LW",
      "FantasyPoints": 15.9
    },{
      "TeamID": 11,
      "PlayerID": 30000712,
      "Name": "Nikita Soshnikov",
      "Team": "NYI",
      "Position": "RW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 11,
      "PlayerID": 30000875,
      "Name": "Semyon Varlamov",
      "Team": "NYI",
      "Position": "G",
      "FantasyPoints": 6.3
    },{
      "TeamID": 11,
      "PlayerID": 30000966,
      "Name": "Jean-Gabriel Pageau",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 11,
      "PlayerID": 30000998,
      "Name": "Ross Johnston",
      "Team": "NYI",
      "Position": "LW",
      "FantasyPoints": -0.4
    },{
      "TeamID": 11,
      "PlayerID": 30000999,
      "Name": "Scott Mayfield",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 14.6
    },{
      "TeamID": 11,
      "PlayerID": 30001000,
      "Name": "Brock Nelson",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 20.9
    },{
      "TeamID": 11,
      "PlayerID": 30001003,
      "Name": "Ryan Pulock",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 19.6
    },{
      "TeamID": 11,
      "PlayerID": 30001155,
      "Name": "Casey Cizikas",
      "Team": "NYI",
      "Position": "C",
      "FantasyPoints": 7
    },{
      "TeamID": 11,
      "PlayerID": 30002618,
      "Name": "Ilya Sorokin",
      "Team": "NYI",
      "Position": "G",
      "FantasyPoints": 22.4
    },{
      "TeamID": 11,
      "PlayerID": 30003684,
      "Name": "Robin Salo",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 11,
      "PlayerID": 30003739,
      "Name": "Sebastian Aho",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 11,
      "PlayerID": 30004085,
      "Name": "Oliver Wahlstrom",
      "Team": "NYI",
      "Position": "RW",
      "FantasyPoints": 18.8
    },{
      "TeamID": 11,
      "PlayerID": 30004086,
      "Name": "Noah Dobson",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 20.5
    },{
      "TeamID": 11,
      "PlayerID": 30004176,
      "Name": "Alexander Romanov",
      "Team": "NYI",
      "Position": "D",
      "FantasyPoints": 15.4
    },{
      "TeamID": 12,
      "PlayerID": 30000226,
      "Name": "Vincent Trocheck",
      "Team": "NYR",
      "Position": "C",
      "FantasyPoints": 23.4
    },{
      "TeamID": 12,
      "PlayerID": 30000260,
      "Name": "Jaroslav Halak",
      "Team": "NYR",
      "Position": "G",
      "FantasyPoints": 2.4
    },{
      "TeamID": 12,
      "PlayerID": 30000320,
      "Name": "Chris Kreider",
      "Team": "NYR",
      "Position": "LW",
      "FantasyPoints": 18.8
    },{
      "TeamID": 12,
      "PlayerID": 30000467,
      "Name": "Mika Zibanejad",
      "Team": "NYR",
      "Position": "C",
      "FantasyPoints": 35.5
    },{
      "TeamID": 12,
      "PlayerID": 30000670,
      "Name": "Sammy Blais",
      "Team": "NYR",
      "Position": "LW",
      "FantasyPoints": 3.5
    },{
      "TeamID": 12,
      "PlayerID": 30000834,
      "Name": "Jacob Trouba",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 26.3
    },{
      "TeamID": 12,
      "PlayerID": 30000914,
      "Name": "Barclay Goodrow",
      "Team": "NYR",
      "Position": "C",
      "FantasyPoints": 17.5
    },{
      "TeamID": 12,
      "PlayerID": 30001268,
      "Name": "Ryan Carpenter",
      "Team": "NYR",
      "Position": "C",
      "FantasyPoints": 1.7
    },{
      "TeamID": 12,
      "PlayerID": 30001301,
      "Name": "Ryan Reaves",
      "Team": "NYR",
      "Position": "RW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 12,
      "PlayerID": 30001322,
      "Name": "Artemi Panarin",
      "Team": "NYR",
      "Position": "LW",
      "FantasyPoints": 34
    },{
      "TeamID": 12,
      "PlayerID": 30002761,
      "Name": "Jimmy Vesey",
      "Team": "NYR",
      "Position": "LW",
      "FantasyPoints": 6.6
    },{
      "TeamID": 12,
      "PlayerID": 30002999,
      "Name": "Igor Shesterkin",
      "Team": "NYR",
      "Position": "G",
      "FantasyPoints": 20.4
    },{
      "TeamID": 12,
      "PlayerID": 30003144,
      "Name": "Julien Gauthier",
      "Team": "NYR",
      "Position": "RW",
      "FantasyPoints": 1
    },{
      "TeamID": 12,
      "PlayerID": 30003168,
      "Name": "Libor Hajek",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 12,
      "PlayerID": 30003184,
      "Name": "Ryan Lindgren",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 16.7
    },{
      "TeamID": 12,
      "PlayerID": 30003194,
      "Name": "Adam Fox",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 28.4
    },{
      "TeamID": 12,
      "PlayerID": 30003655,
      "Name": "Filip Chytil",
      "Team": "NYR",
      "Position": "C",
      "FantasyPoints": 15
    },{
      "TeamID": 12,
      "PlayerID": 30004082,
      "Name": "K'Andre Miller",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 12,
      "PlayerID": 30004087,
      "Name": "Vitali Kravtsov",
      "Team": "NYR",
      "Position": "RW",
      "FantasyPoints": 1.7
    },{
      "TeamID": 12,
      "PlayerID": 30004471,
      "Name": "Kaapo Kakko",
      "Team": "NYR",
      "Position": "RW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 12,
      "PlayerID": 30004554,
      "Name": "Zac Jones",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 12,
      "PlayerID": 30004807,
      "Name": "Alexis Lafrenière",
      "Team": "NYR",
      "Position": "LW",
      "FantasyPoints": 17.1
    },{
      "TeamID": 12,
      "PlayerID": 30004820,
      "Name": "Braden Schneider",
      "Team": "NYR",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 13,
      "PlayerID": 30000043,
      "Name": "James Van Riemsdyk",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": 19.6
    },{
      "TeamID": 13,
      "PlayerID": 30000124,
      "Name": "Justin Braun",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 13,
      "PlayerID": 30000264,
      "Name": "Scott Laughton",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": 11.7
    },{
      "TeamID": 13,
      "PlayerID": 30000349,
      "Name": "Travis Konecny",
      "Team": "PHI",
      "Position": "RW",
      "FantasyPoints": 25.9
    },{
      "TeamID": 13,
      "PlayerID": 30000421,
      "Name": "Cam Atkinson",
      "Team": "PHI",
      "Position": "RW",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30000501,
      "Name": "Nicolas Deslauriers",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": 2.8
    },{
      "TeamID": 13,
      "PlayerID": 30000615,
      "Name": "Kevin Hayes",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 22.5
    },{
      "TeamID": 13,
      "PlayerID": 30000623,
      "Name": "Ivan Provorov",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 26.7
    },{
      "TeamID": 13,
      "PlayerID": 30000624,
      "Name": "Travis Sanheim",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 13,
      "PlayerID": 30000733,
      "Name": "Tony DeAngelo",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 20.9
    },{
      "TeamID": 13,
      "PlayerID": 30000780,
      "Name": "Lukas Sedlak",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 13,
      "PlayerID": 30001294,
      "Name": "Rasmus Ristolainen",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30002620,
      "Name": "Louie Belpedio",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30002747,
      "Name": "Hayden Hodgson",
      "Team": "PHI",
      "Position": "RW",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30002791,
      "Name": "Felix Sandstrom",
      "Team": "PHI",
      "Position": "G",
      "FantasyPoints": 3.3
    },{
      "TeamID": 13,
      "PlayerID": 30003016,
      "Name": "Nick Seeler",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 13,
      "PlayerID": 30003149,
      "Name": "Kieffer Bellows",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 13,
      "PlayerID": 30003166,
      "Name": "Carter Hart",
      "Team": "PHI",
      "Position": "G",
      "FantasyPoints": 25.9
    },{
      "TeamID": 13,
      "PlayerID": 30003191,
      "Name": "Wade Allison",
      "Team": "PHI",
      "Position": "RW",
      "FantasyPoints": 10.9
    },{
      "TeamID": 13,
      "PlayerID": 30003404,
      "Name": "Zack MacEwen",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 8
    },{
      "TeamID": 13,
      "PlayerID": 30003653,
      "Name": "Owen Tippett",
      "Team": "PHI",
      "Position": "RW",
      "FantasyPoints": 0.3
    },{
      "TeamID": 13,
      "PlayerID": 30003656,
      "Name": "Morgan Frost",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 13,
      "PlayerID": 30003961,
      "Name": "Tanner Laczynski",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 3.1
    },{
      "TeamID": 13,
      "PlayerID": 30004089,
      "Name": "Joel Farabee",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": 15
    },{
      "TeamID": 13,
      "PlayerID": 30004205,
      "Name": "Egor Zamula",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 5.9
    },{
      "TeamID": 13,
      "PlayerID": 30004406,
      "Name": "Samuel Ersson",
      "Team": "PHI",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30004557,
      "Name": "Ronnie Attard",
      "Team": "PHI",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30004946,
      "Name": "Jackson Cates",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 1.4
    },{
      "TeamID": 13,
      "PlayerID": 30004958,
      "Name": "Olle Lycksell",
      "Team": "PHI",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 13,
      "PlayerID": 30005397,
      "Name": "Noah Cates",
      "Team": "PHI",
      "Position": "LW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 14,
      "PlayerID": 30000143,
      "Name": "Jeff Carter",
      "Team": "PIT",
      "Position": "C",
      "FantasyPoints": 23.4
    },{
      "TeamID": 14,
      "PlayerID": 30000392,
      "Name": "Tristan Jarry",
      "Team": "PIT",
      "Position": "G",
      "FantasyPoints": 28.2
    },{
      "TeamID": 14,
      "PlayerID": 30000403,
      "Name": "Josh Archibald",
      "Team": "PIT",
      "Position": "RW",
      "FantasyPoints": 6.6
    },{
      "TeamID": 14,
      "PlayerID": 30000443,
      "Name": "Kasperi Kapanen",
      "Team": "PIT",
      "Position": "RW",
      "FantasyPoints": 13.8
    },{
      "TeamID": 14,
      "PlayerID": 30000523,
      "Name": "Jason Zucker",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 20.5
    },{
      "TeamID": 14,
      "PlayerID": 30000637,
      "Name": "Brock McGinn",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 7
    },{
      "TeamID": 14,
      "PlayerID": 30000651,
      "Name": "Sidney Crosby",
      "Team": "PIT",
      "Position": "C",
      "FantasyPoints": 37.6
    },{
      "TeamID": 14,
      "PlayerID": 30000653,
      "Name": "Brian Dumoulin",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 16.3
    },{
      "TeamID": 14,
      "PlayerID": 30000658,
      "Name": "Kris Letang",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 16.3
    },{
      "TeamID": 14,
      "PlayerID": 30000660,
      "Name": "Evgeni Malkin",
      "Team": "PIT",
      "Position": "C",
      "FantasyPoints": 31.7
    },{
      "TeamID": 14,
      "PlayerID": 30000723,
      "Name": "Jeff Petry",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 22.1
    },{
      "TeamID": 14,
      "PlayerID": 30000888,
      "Name": "Rickard Rakell",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 30.1
    },{
      "TeamID": 14,
      "PlayerID": 30000982,
      "Name": "Chad Ruhwedel",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 14,
      "PlayerID": 30001100,
      "Name": "Bryan Rust",
      "Team": "PIT",
      "Position": "RW",
      "FantasyPoints": 24.6
    },{
      "TeamID": 14,
      "PlayerID": 30002479,
      "Name": "Teddy Blueger",
      "Team": "PIT",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 14,
      "PlayerID": 30002532,
      "Name": "Jake Guentzel",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 21.7
    },{
      "TeamID": 14,
      "PlayerID": 30002587,
      "Name": "Marcus Pettersson",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 18.8
    },{
      "TeamID": 14,
      "PlayerID": 30002631,
      "Name": "Danton Heinen",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 25
    },{
      "TeamID": 14,
      "PlayerID": 30003109,
      "Name": "Drake Caggiula",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 0.3
    },{
      "TeamID": 14,
      "PlayerID": 30003376,
      "Name": "Casey DeSmith",
      "Team": "PIT",
      "Position": "G",
      "FantasyPoints": 4.6
    },{
      "TeamID": 14,
      "PlayerID": 30003634,
      "Name": "Jan Rutta",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 18.4
    },{
      "TeamID": 14,
      "PlayerID": 30003650,
      "Name": "Ryan Poehling",
      "Team": "PIT",
      "Position": "C",
      "FantasyPoints": 8
    },{
      "TeamID": 14,
      "PlayerID": 30003666,
      "Name": "Pierre-Olivier Joseph",
      "Team": "PIT",
      "Position": "D",
      "FantasyPoints": 14.6
    },{
      "TeamID": 14,
      "PlayerID": 30004490,
      "Name": "Sam Poulin",
      "Team": "PIT",
      "Position": "LW",
      "FantasyPoints": 1.4
    },{
      "TeamID": 15,
      "PlayerID": 30000012,
      "Name": "Lars Eller",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 15,
      "PlayerID": 30000211,
      "Name": "Matt Irwin",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 15,
      "PlayerID": 30000378,
      "Name": "Alex Ovechkin",
      "Team": "WAS",
      "Position": "LW",
      "FantasyPoints": 20
    },{
      "TeamID": 15,
      "PlayerID": 30000379,
      "Name": "T.J. Oshie",
      "Team": "WAS",
      "Position": "RW",
      "FantasyPoints": 17.5
    },{
      "TeamID": 15,
      "PlayerID": 30000382,
      "Name": "Evgeny Kuznetsov",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 14.2
    },{
      "TeamID": 15,
      "PlayerID": 30000384,
      "Name": "Dmitry Orlov",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 18.8
    },{
      "TeamID": 15,
      "PlayerID": 30000410,
      "Name": "Conor Sheary",
      "Team": "WAS",
      "Position": "LW",
      "FantasyPoints": 19.2
    },{
      "TeamID": 15,
      "PlayerID": 30000491,
      "Name": "Connor Brown",
      "Team": "WAS",
      "Position": "RW",
      "FantasyPoints": -1.3
    },{
      "TeamID": 15,
      "PlayerID": 30000495,
      "Name": "Darcy Kuemper",
      "Team": "WAS",
      "Position": "G",
      "FantasyPoints": 17.4
    },{
      "TeamID": 15,
      "PlayerID": 30000587,
      "Name": "John Carlson",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 28.8
    },{
      "TeamID": 15,
      "PlayerID": 30000845,
      "Name": "Nick Jensen",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 18.8
    },{
      "TeamID": 15,
      "PlayerID": 30000848,
      "Name": "Anthony Mantha",
      "Team": "WAS",
      "Position": "RW",
      "FantasyPoints": 14.6
    },{
      "TeamID": 15,
      "PlayerID": 30000954,
      "Name": "Dylan Strome",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 14.2
    },{
      "TeamID": 15,
      "PlayerID": 30001011,
      "Name": "Erik Gustafsson",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 6.3
    },{
      "TeamID": 15,
      "PlayerID": 30001023,
      "Name": "Trevor Van Riemsdyk",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 10
    },{
      "TeamID": 15,
      "PlayerID": 30001201,
      "Name": "Garnet Hathaway",
      "Team": "WAS",
      "Position": "RW",
      "FantasyPoints": 7
    },{
      "TeamID": 15,
      "PlayerID": 30001309,
      "Name": "Marcus Johansson",
      "Team": "WAS",
      "Position": "LW",
      "FantasyPoints": 20
    },{
      "TeamID": 15,
      "PlayerID": 30002695,
      "Name": "Nic Dowd",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 14.2
    },{
      "TeamID": 15,
      "PlayerID": 30003026,
      "Name": "Charlie Lindgren",
      "Team": "WAS",
      "Position": "G",
      "FantasyPoints": 8.2
    },{
      "TeamID": 15,
      "PlayerID": 30003221,
      "Name": "Beck Malenstyn",
      "Team": "WAS",
      "Position": "LW",
      "FantasyPoints": 2.4
    },{
      "TeamID": 15,
      "PlayerID": 30004152,
      "Name": "Martin Fehervary",
      "Team": "WAS",
      "Position": "D",
      "FantasyPoints": 10
    },{
      "TeamID": 15,
      "PlayerID": 30004404,
      "Name": "Joe Snively",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 2.1
    },{
      "TeamID": 15,
      "PlayerID": 30004491,
      "Name": "Connor McMichael",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 1
    },{
      "TeamID": 15,
      "PlayerID": 30004562,
      "Name": "Aliaksei Protas",
      "Team": "WAS",
      "Position": "C",
      "FantasyPoints": 8
    },{
      "TeamID": 16,
      "PlayerID": 30000064,
      "Name": "Jakub Voracek",
      "Team": "CBJ",
      "Position": "RW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 16,
      "PlayerID": 30000110,
      "Name": "Johnny Gaudreau",
      "Team": "CBJ",
      "Position": "LW",
      "FantasyPoints": 30.5
    },{
      "TeamID": 16,
      "PlayerID": 30000233,
      "Name": "Erik Gudbranson",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 16,
      "PlayerID": 30000778,
      "Name": "Boone Jenner",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 24.2
    },{
      "TeamID": 16,
      "PlayerID": 30001036,
      "Name": "Gustav Nyquist",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 16.7
    },{
      "TeamID": 16,
      "PlayerID": 30001448,
      "Name": "Daniil Tarasov",
      "Team": "CBJ",
      "Position": "G",
      "FantasyPoints": 7.8
    },{
      "TeamID": 16,
      "PlayerID": 30002616,
      "Name": "Elvis Merzlikins",
      "Team": "CBJ",
      "Position": "G",
      "FantasyPoints": 7.4
    },{
      "TeamID": 16,
      "PlayerID": 30002770,
      "Name": "Zach Werenski",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 26.7
    },{
      "TeamID": 16,
      "PlayerID": 30002824,
      "Name": "Jack Roslovic",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 16.7
    },{
      "TeamID": 16,
      "PlayerID": 30002853,
      "Name": "Sean Kuraly",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 8
    },{
      "TeamID": 16,
      "PlayerID": 30002980,
      "Name": "Eric Robinson",
      "Team": "CBJ",
      "Position": "LW",
      "FantasyPoints": 5.9
    },{
      "TeamID": 16,
      "PlayerID": 30003131,
      "Name": "Patrik Laine",
      "Team": "CBJ",
      "Position": "LW",
      "FantasyPoints": 5.6
    },{
      "TeamID": 16,
      "PlayerID": 30003145,
      "Name": "Jake Bean",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 13.8
    },{
      "TeamID": 16,
      "PlayerID": 30003185,
      "Name": "Andrew Peeke",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 20.5
    },{
      "TeamID": 16,
      "PlayerID": 30003267,
      "Name": "Mathieu Olivier",
      "Team": "CBJ",
      "Position": "RW",
      "FantasyPoints": 5.2
    },{
      "TeamID": 16,
      "PlayerID": 30003550,
      "Name": "Gavin Bayreuther",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 16,
      "PlayerID": 30004090,
      "Name": "Liam Foudy",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 16,
      "PlayerID": 30004091,
      "Name": "Adam Boqvist",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 1.7
    },{
      "TeamID": 16,
      "PlayerID": 30004430,
      "Name": "Vladislav Gavrikov",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 14.2
    },{
      "TeamID": 16,
      "PlayerID": 30004799,
      "Name": "Yegor Chinakhov",
      "Team": "CBJ",
      "Position": "RW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 16,
      "PlayerID": 30004956,
      "Name": "Justin Danforth",
      "Team": "CBJ",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 16,
      "PlayerID": 30004988,
      "Name": "Cole Sillinger",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 4.9
    },{
      "TeamID": 16,
      "PlayerID": 30004989,
      "Name": "Kent Johnson",
      "Team": "CBJ",
      "Position": "C",
      "FantasyPoints": 18.8
    },{
      "TeamID": 16,
      "PlayerID": 30005049,
      "Name": "Jet Greaves",
      "Team": "CBJ",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 16,
      "PlayerID": 30005578,
      "Name": "Nick Blankenburg",
      "Team": "CBJ",
      "Position": "D",
      "FantasyPoints": 7
    },{
      "TeamID": 17,
      "PlayerID": 30000253,
      "Name": "Seth Jones",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 17,
      "PlayerID": 30000507,
      "Name": "Jake McCabe",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 17,
      "PlayerID": 30000547,
      "Name": "Jujhar Khaira",
      "Team": "CHI",
      "Position": "LW",
      "FantasyPoints": 4.5
    },{
      "TeamID": 17,
      "PlayerID": 30000693,
      "Name": "Jack Johnson",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 8
    },{
      "TeamID": 17,
      "PlayerID": 30000726,
      "Name": "Jarred Tinordi",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 17,
      "PlayerID": 30000748,
      "Name": "Jason Dickinson",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 15.4
    },{
      "TeamID": 17,
      "PlayerID": 30000841,
      "Name": "Andreas Athanasiou",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 17,
      "PlayerID": 30000866,
      "Name": "Patrick Kane",
      "Team": "CHI",
      "Position": "RW",
      "FantasyPoints": 17.5
    },{
      "TeamID": 17,
      "PlayerID": 30000872,
      "Name": "Jonathan Toews",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 18.4
    },{
      "TeamID": 17,
      "PlayerID": 30000940,
      "Name": "Max Domi",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 14.6
    },{
      "TeamID": 17,
      "PlayerID": 30001009,
      "Name": "Petr Mrazek",
      "Team": "CHI",
      "Position": "G",
      "FantasyPoints": 4.7
    },{
      "TeamID": 17,
      "PlayerID": 30001046,
      "Name": "Tyler Johnson",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 20
    },{
      "TeamID": 17,
      "PlayerID": 30001215,
      "Name": "Alex Stalock",
      "Team": "CHI",
      "Position": "G",
      "FantasyPoints": 19.2
    },{
      "TeamID": 17,
      "PlayerID": 30001219,
      "Name": "Connor Murphy",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 17,
      "PlayerID": 30001947,
      "Name": "Buddy Robinson",
      "Team": "CHI",
      "Position": "RW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 17,
      "PlayerID": 30002874,
      "Name": "Caleb Jones",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 4.9
    },{
      "TeamID": 17,
      "PlayerID": 30003170,
      "Name": "Taylor Raddysh",
      "Team": "CHI",
      "Position": "RW",
      "FantasyPoints": 14.2
    },{
      "TeamID": 17,
      "PlayerID": 30003357,
      "Name": "Colin Blackwell",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 17,
      "PlayerID": 30003705,
      "Name": "MacKenzie Entwistle",
      "Team": "CHI",
      "Position": "RW",
      "FantasyPoints": 3.1
    },{
      "TeamID": 17,
      "PlayerID": 30003996,
      "Name": "Sam Lafferty",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 17,
      "PlayerID": 30004123,
      "Name": "Philipp Kurashev",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 17,
      "PlayerID": 30004156,
      "Name": "Alec Regula",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 0.7
    },{
      "TeamID": 17,
      "PlayerID": 30004394,
      "Name": "Reese Johnson",
      "Team": "CHI",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 17,
      "PlayerID": 30004507,
      "Name": "Alex Vlasic",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 17,
      "PlayerID": 30004965,
      "Name": "Arvid Söderblom",
      "Team": "CHI",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 17,
      "PlayerID": 30005599,
      "Name": "Filip Roos",
      "Team": "CHI",
      "Position": "D",
      "FantasyPoints": 3.8
    },{
      "TeamID": 18,
      "PlayerID": 30000137,
      "Name": "Joe Pavelski",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 30.5
    },{
      "TeamID": 18,
      "PlayerID": 30000200,
      "Name": "Scott Wedgewood",
      "Team": "DAL",
      "Position": "G",
      "FantasyPoints": 4.6
    },{
      "TeamID": 18,
      "PlayerID": 30000212,
      "Name": "Colin Miller",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 7
    },{
      "TeamID": 18,
      "PlayerID": 30000516,
      "Name": "Ryan Suter",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 5.6
    },{
      "TeamID": 18,
      "PlayerID": 30000750,
      "Name": "Radek Faksa",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 5.2
    },{
      "TeamID": 18,
      "PlayerID": 30000755,
      "Name": "Esa Lindell",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 15.4
    },{
      "TeamID": 18,
      "PlayerID": 30000762,
      "Name": "Tyler Seguin",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 18,
      "PlayerID": 30000844,
      "Name": "Luke Glendening",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 18,
      "PlayerID": 30001248,
      "Name": "Joel Hanley",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 1.4
    },{
      "TeamID": 18,
      "PlayerID": 30001302,
      "Name": "Jamie Benn",
      "Team": "DAL",
      "Position": "LW",
      "FantasyPoints": 10.4
    },{
      "TeamID": 18,
      "PlayerID": 30002223,
      "Name": "Mason Marchment",
      "Team": "DAL",
      "Position": "LW",
      "FantasyPoints": 23.4
    },{
      "TeamID": 18,
      "PlayerID": 30002502,
      "Name": "Jani Hakanpaa",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 18,
      "PlayerID": 30002811,
      "Name": "Roope Hintz",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 25
    },{
      "TeamID": 18,
      "PlayerID": 30002812,
      "Name": "Denis Gurianov",
      "Team": "DAL",
      "Position": "RW",
      "FantasyPoints": 4.5
    },{
      "TeamID": 18,
      "PlayerID": 30003640,
      "Name": "Miro Heiskanen",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 22.1
    },{
      "TeamID": 18,
      "PlayerID": 30003658,
      "Name": "Jake Oettinger",
      "Team": "DAL",
      "Position": "G",
      "FantasyPoints": 27.9
    },{
      "TeamID": 18,
      "PlayerID": 30003689,
      "Name": "Jason Robertson",
      "Team": "DAL",
      "Position": "LW",
      "FantasyPoints": 26.3
    },{
      "TeamID": 18,
      "PlayerID": 30004092,
      "Name": "Ty Dellandrea",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 18,
      "PlayerID": 30004103,
      "Name": "Nils Lundkvist",
      "Team": "DAL",
      "Position": "D",
      "FantasyPoints": 14.2
    },{
      "TeamID": 18,
      "PlayerID": 30004461,
      "Name": "Joel Kiviranta",
      "Team": "DAL",
      "Position": "LW",
      "FantasyPoints": 13.8
    },{
      "TeamID": 18,
      "PlayerID": 30004951,
      "Name": "Jacob Peterson",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 18,
      "PlayerID": 30005004,
      "Name": "Wyatt Johnston",
      "Team": "DAL",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 19,
      "PlayerID": 30000318,
      "Name": "Jayson Megna",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 19,
      "PlayerID": 30000599,
      "Name": "Anton Blidh",
      "Team": "COL",
      "Position": "LW",
      "FantasyPoints": 0.3
    },{
      "TeamID": 19,
      "PlayerID": 30000757,
      "Name": "Valeri Nichushkin",
      "Team": "COL",
      "Position": "RW",
      "FantasyPoints": 43
    },{
      "TeamID": 19,
      "PlayerID": 30000879,
      "Name": "Josh Manson",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 4.9
    },{
      "TeamID": 19,
      "PlayerID": 30000904,
      "Name": "Nathan MacKinnon",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": 38.8
    },{
      "TeamID": 19,
      "PlayerID": 30000906,
      "Name": "Mikko Rantanen",
      "Team": "COL",
      "Position": "RW",
      "FantasyPoints": 29
    },{
      "TeamID": 19,
      "PlayerID": 30000959,
      "Name": "Kurtis MacDermid",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 19,
      "PlayerID": 30000981,
      "Name": "Evan Rodrigues",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": 7.5
    },{
      "TeamID": 19,
      "PlayerID": 30001147,
      "Name": "Erik Johnson",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 16.3
    },{
      "TeamID": 19,
      "PlayerID": 30001261,
      "Name": "Andrew Cogliano",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 19,
      "PlayerID": 30002512,
      "Name": "Artturi Lehkonen",
      "Team": "COL",
      "Position": "LW",
      "FantasyPoints": 20
    },{
      "TeamID": 19,
      "PlayerID": 30002513,
      "Name": "J.T. Compher",
      "Team": "COL",
      "Position": "LW",
      "FantasyPoints": 6.6
    },{
      "TeamID": 19,
      "PlayerID": 30003001,
      "Name": "Dryden Hunt",
      "Team": "COL",
      "Position": "LW",
      "FantasyPoints": 2.8
    },{
      "TeamID": 19,
      "PlayerID": 30003087,
      "Name": "Devon Toews",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 19,
      "PlayerID": 30003183,
      "Name": "Samuel Girard",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 19,
      "PlayerID": 30003646,
      "Name": "Cale Makar",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 25.5
    },{
      "TeamID": 19,
      "PlayerID": 30003746,
      "Name": "Alexandar Georgiev",
      "Team": "COL",
      "Position": "G",
      "FantasyPoints": 24.5
    },{
      "TeamID": 19,
      "PlayerID": 30003800,
      "Name": "Jacob Macdonald",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 0.7
    },{
      "TeamID": 19,
      "PlayerID": 30003923,
      "Name": "Mikhail Maltsev",
      "Team": "COL",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 19,
      "PlayerID": 30004034,
      "Name": "Pavel Francouz",
      "Team": "COL",
      "Position": "G",
      "FantasyPoints": 3.8
    },{
      "TeamID": 19,
      "PlayerID": 30004093,
      "Name": "Martin Kaut",
      "Team": "COL",
      "Position": "RW",
      "FantasyPoints": -0.4
    },{
      "TeamID": 19,
      "PlayerID": 30004191,
      "Name": "Logan O'Connor",
      "Team": "COL",
      "Position": "RW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 19,
      "PlayerID": 30004474,
      "Name": "Bowen Byram",
      "Team": "COL",
      "Position": "D",
      "FantasyPoints": 23.4
    },{
      "TeamID": 19,
      "PlayerID": 30004486,
      "Name": "Alex Newhook",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": 1.4
    },{
      "TeamID": 19,
      "PlayerID": 30005582,
      "Name": "Ben Meyers",
      "Team": "COL",
      "Position": "C",
      "FantasyPoints": 3.5
    },{
      "TeamID": 20,
      "PlayerID": 30000059,
      "Name": "Brayden Schenn",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 15
    },{
      "TeamID": 20,
      "PlayerID": 30000072,
      "Name": "Torey Krug",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 7.7
    },{
      "TeamID": 20,
      "PlayerID": 30000287,
      "Name": "Nick Leddy",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 7
    },{
      "TeamID": 20,
      "PlayerID": 30000333,
      "Name": "Thomas Greiss",
      "Team": "STL",
      "Position": "G",
      "FantasyPoints": 3.3
    },{
      "TeamID": 20,
      "PlayerID": 30000631,
      "Name": "Justin Faulk",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 23.4
    },{
      "TeamID": 20,
      "PlayerID": 30000666,
      "Name": "Jordan Binnington",
      "Team": "STL",
      "Position": "G",
      "FantasyPoints": 20.5
    },{
      "TeamID": 20,
      "PlayerID": 30000709,
      "Name": "Josh Leivo",
      "Team": "STL",
      "Position": "LW",
      "FantasyPoints": 0.7
    },{
      "TeamID": 20,
      "PlayerID": 30000784,
      "Name": "Ivan Barbashev",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 6.6
    },{
      "TeamID": 20,
      "PlayerID": 30000792,
      "Name": "Colton Parayko",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 20,
      "PlayerID": 30000797,
      "Name": "Vladimir Tarasenko",
      "Team": "STL",
      "Position": "RW",
      "FantasyPoints": 22.5
    },{
      "TeamID": 20,
      "PlayerID": 30000979,
      "Name": "Ryan O'Reilly",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 4.2
    },{
      "TeamID": 20,
      "PlayerID": 30001192,
      "Name": "Tyler Pitlick",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 20,
      "PlayerID": 30001229,
      "Name": "Brandon Saad",
      "Team": "STL",
      "Position": "LW",
      "FantasyPoints": 0.7
    },{
      "TeamID": 20,
      "PlayerID": 30001235,
      "Name": "Noel Acciari",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 2.1
    },{
      "TeamID": 20,
      "PlayerID": 30001314,
      "Name": "Robert Bortuzzo",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 2.8
    },{
      "TeamID": 20,
      "PlayerID": 30001387,
      "Name": "Niko Mikkola",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 7.7
    },{
      "TeamID": 20,
      "PlayerID": 30002530,
      "Name": "Pavel Buchnevich",
      "Team": "STL",
      "Position": "LW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 20,
      "PlayerID": 30002617,
      "Name": "Nathan Walker",
      "Team": "STL",
      "Position": "LW",
      "FantasyPoints": 3.8
    },{
      "TeamID": 20,
      "PlayerID": 30003143,
      "Name": "Logan Brown",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 0.7
    },{
      "TeamID": 20,
      "PlayerID": 30003186,
      "Name": "Jordan Kyrou",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 4.9
    },{
      "TeamID": 20,
      "PlayerID": 30003617,
      "Name": "Calle Rosen",
      "Team": "STL",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 20,
      "PlayerID": 30003659,
      "Name": "Robert Thomas",
      "Team": "STL",
      "Position": "C",
      "FantasyPoints": 10.4
    },{
      "TeamID": 20,
      "PlayerID": 30003766,
      "Name": "Alexey Toropchenko",
      "Team": "STL",
      "Position": "RW",
      "FantasyPoints": 1
    },{
      "TeamID": 20,
      "PlayerID": 30004812,
      "Name": "Jake Neighbours",
      "Team": "STL",
      "Position": "LW",
      "FantasyPoints": 2.8
    },{
      "TeamID": 21,
      "PlayerID": 30000183,
      "Name": "Filip Forsberg",
      "Team": "NAS",
      "Position": "LW",
      "FantasyPoints": 14.2
    },{
      "TeamID": 21,
      "PlayerID": 30000184,
      "Name": "Roman Josi",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 21,
      "PlayerID": 30000189,
      "Name": "Colton Sissons",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 21,
      "PlayerID": 30000222,
      "Name": "Juuse Saros",
      "Team": "NAS",
      "Position": "G",
      "FantasyPoints": 11
    },{
      "TeamID": 21,
      "PlayerID": 30000250,
      "Name": "Mattias Ekholm",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 12.1
    },{
      "TeamID": 21,
      "PlayerID": 30000257,
      "Name": "Yakov Trenin",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 6.6
    },{
      "TeamID": 21,
      "PlayerID": 30000472,
      "Name": "Mark Borowiecki",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 0.7
    },{
      "TeamID": 21,
      "PlayerID": 30000515,
      "Name": "Mikael Granlund",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 11.7
    },{
      "TeamID": 21,
      "PlayerID": 30000522,
      "Name": "Nino Niederreiter",
      "Team": "NAS",
      "Position": "RW",
      "FantasyPoints": 17.5
    },{
      "TeamID": 21,
      "PlayerID": 30000638,
      "Name": "Roland McKeown",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30000692,
      "Name": "Ryan Johansen",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 11.7
    },{
      "TeamID": 21,
      "PlayerID": 30000720,
      "Name": "Michael McCarron",
      "Team": "NAS",
      "Position": "RW",
      "FantasyPoints": 0.3
    },{
      "TeamID": 21,
      "PlayerID": 30001084,
      "Name": "Ryan McDonagh",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 21,
      "PlayerID": 30001146,
      "Name": "Matt Duchene",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 17.1
    },{
      "TeamID": 21,
      "PlayerID": 30001204,
      "Name": "Kevin Gravel",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30002309,
      "Name": "Mark Jankowski",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30002521,
      "Name": "Zach Sanford",
      "Team": "NAS",
      "Position": "LW",
      "FantasyPoints": 1
    },{
      "TeamID": 21,
      "PlayerID": 30002825,
      "Name": "Alexandre Carrier",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 21,
      "PlayerID": 30002827,
      "Name": "Jeremy Lauzon",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 21,
      "PlayerID": 30003146,
      "Name": "Dante Fabbro",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 21,
      "PlayerID": 30003442,
      "Name": "Tanner Jeannot",
      "Team": "NAS",
      "Position": "LW",
      "FantasyPoints": 12.9
    },{
      "TeamID": 21,
      "PlayerID": 30003642,
      "Name": "Cody Glass",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 7.3
    },{
      "TeamID": 21,
      "PlayerID": 30003660,
      "Name": "Eeli Tolvanen",
      "Team": "NAS",
      "Position": "RW",
      "FantasyPoints": 14.6
    },{
      "TeamID": 21,
      "PlayerID": 30004001,
      "Name": "Kiefer Sherwood",
      "Team": "NAS",
      "Position": "LW",
      "FantasyPoints": 6.3
    },{
      "TeamID": 21,
      "PlayerID": 30004027,
      "Name": "Jordan Gross",
      "Team": "NAS",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30004058,
      "Name": "Kevin Lankinen",
      "Team": "NAS",
      "Position": "G",
      "FantasyPoints": 7.4
    },{
      "TeamID": 21,
      "PlayerID": 30004392,
      "Name": "Jimmy Huntington",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30004488,
      "Name": "Philip Tomasino",
      "Team": "NAS",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 21,
      "PlayerID": 30004748,
      "Name": "Cole Smith",
      "Team": "NAS",
      "Position": "LW",
      "FantasyPoints": 4.5
    },{
      "TeamID": 22,
      "PlayerID": 30000594,
      "Name": "Nate Schmidt",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 22,
      "PlayerID": 30000620,
      "Name": "Sam Gagner",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 12.9
    },{
      "TeamID": 22,
      "PlayerID": 30000801,
      "Name": "Connor Hellebuyck",
      "Team": "WPG",
      "Position": "G",
      "FantasyPoints": 24
    },{
      "TeamID": 22,
      "PlayerID": 30000822,
      "Name": "Nikolaj Ehlers",
      "Team": "WPG",
      "Position": "LW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 22,
      "PlayerID": 30000826,
      "Name": "Josh Morrissey",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 18.8
    },{
      "TeamID": 22,
      "PlayerID": 30000830,
      "Name": "Mark Scheifele",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 22,
      "PlayerID": 30000835,
      "Name": "Blake Wheeler",
      "Team": "WPG",
      "Position": "RW",
      "FantasyPoints": 14.6
    },{
      "TeamID": 22,
      "PlayerID": 30001070,
      "Name": "Adam Lowry",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 22,
      "PlayerID": 30001224,
      "Name": "Dylan DeMelo",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 22,
      "PlayerID": 30001225,
      "Name": "Brenden Dillon",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 22,
      "PlayerID": 30002772,
      "Name": "Kyle Connor",
      "Team": "WPG",
      "Position": "LW",
      "FantasyPoints": 13.8
    },{
      "TeamID": 22,
      "PlayerID": 30002842,
      "Name": "Kyle Capobianco",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 22,
      "PlayerID": 30003126,
      "Name": "David Rittich",
      "Team": "WPG",
      "Position": "G",
      "FantasyPoints": 1
    },{
      "TeamID": 22,
      "PlayerID": 30003132,
      "Name": "Pierre-Luc Dubois",
      "Team": "WPG",
      "Position": "LW",
      "FantasyPoints": 16.3
    },{
      "TeamID": 22,
      "PlayerID": 30003148,
      "Name": "Logan Stanley",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 22,
      "PlayerID": 30003222,
      "Name": "Axel Jonsson-Fjallby",
      "Team": "WPG",
      "Position": "LW",
      "FantasyPoints": 2.4
    },{
      "TeamID": 22,
      "PlayerID": 30003603,
      "Name": "Neal Pionk",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 20.9
    },{
      "TeamID": 22,
      "PlayerID": 30003691,
      "Name": "Dylan Samberg",
      "Team": "WPG",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 22,
      "PlayerID": 30003744,
      "Name": "Mason Appleton",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 6.6
    },{
      "TeamID": 22,
      "PlayerID": 30003751,
      "Name": "Dominic Toninato",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 22,
      "PlayerID": 30004054,
      "Name": "Saku Maenalanen",
      "Team": "WPG",
      "Position": "RW",
      "FantasyPoints": 3.8
    },{
      "TeamID": 22,
      "PlayerID": 30004110,
      "Name": "David Gustafsson",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 3.5
    },{
      "TeamID": 22,
      "PlayerID": 30004389,
      "Name": "Morgan Barron",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 11.7
    },{
      "TeamID": 22,
      "PlayerID": 30004813,
      "Name": "Cole Perfetti",
      "Team": "WPG",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 23,
      "PlayerID": 30000499,
      "Name": "Marcus Foligno",
      "Team": "MIN",
      "Position": "LW",
      "FantasyPoints": 6.3
    },{
      "TeamID": 23,
      "PlayerID": 30000517,
      "Name": "Jared Spurgeon",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 17.5
    },{
      "TeamID": 23,
      "PlayerID": 30000524,
      "Name": "Jonas Brodin",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 23,
      "PlayerID": 30000628,
      "Name": "Marc-Andre Fleury",
      "Team": "MIN",
      "Position": "G",
      "FantasyPoints": 10.2
    },{
      "TeamID": 23,
      "PlayerID": 30000806,
      "Name": "Matt Dumba",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 7.7
    },{
      "TeamID": 23,
      "PlayerID": 30000991,
      "Name": "Jon Merrill",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 1.7
    },{
      "TeamID": 23,
      "PlayerID": 30001012,
      "Name": "Ryan Hartman",
      "Team": "MIN",
      "Position": "RW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 23,
      "PlayerID": 30001056,
      "Name": "Andrej Sustr",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 23,
      "PlayerID": 30001087,
      "Name": "Mats Zuccarello",
      "Team": "MIN",
      "Position": "RW",
      "FantasyPoints": 26.7
    },{
      "TeamID": 23,
      "PlayerID": 30001253,
      "Name": "Alex Goligoski",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 23,
      "PlayerID": 30002711,
      "Name": "Frederick Gaudreau",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 7.7
    },{
      "TeamID": 23,
      "PlayerID": 30002719,
      "Name": "Jacob Middleton",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 20.5
    },{
      "TeamID": 23,
      "PlayerID": 30002774,
      "Name": "Jordan Greenway",
      "Team": "MIN",
      "Position": "LW",
      "FantasyPoints": -0.8
    },{
      "TeamID": 23,
      "PlayerID": 30002820,
      "Name": "Joel Eriksson Ek",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 21.3
    },{
      "TeamID": 23,
      "PlayerID": 30003140,
      "Name": "Tyson Jost",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 1.4
    },{
      "TeamID": 23,
      "PlayerID": 30003156,
      "Name": "Sam Steel",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 7.7
    },{
      "TeamID": 23,
      "PlayerID": 30003173,
      "Name": "Filip Gustavsson",
      "Team": "MIN",
      "Position": "G",
      "FantasyPoints": 3
    },{
      "TeamID": 23,
      "PlayerID": 30003779,
      "Name": "Mason Shaw",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 0.7
    },{
      "TeamID": 23,
      "PlayerID": 30003933,
      "Name": "Brandon Duhaime",
      "Team": "MIN",
      "Position": "RW",
      "FantasyPoints": 12.5
    },{
      "TeamID": 23,
      "PlayerID": 30004112,
      "Name": "Calen Addison",
      "Team": "MIN",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 23,
      "PlayerID": 30004181,
      "Name": "Connor Dewar",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": 2.1
    },{
      "TeamID": 23,
      "PlayerID": 30004480,
      "Name": "Matthew Boldy",
      "Team": "MIN",
      "Position": "LW",
      "FantasyPoints": 25
    },{
      "TeamID": 23,
      "PlayerID": 30004784,
      "Name": "Kirill Kaprizov",
      "Team": "MIN",
      "Position": "LW",
      "FantasyPoints": 23.8
    },{
      "TeamID": 23,
      "PlayerID": 30004818,
      "Name": "Marco Rossi",
      "Team": "MIN",
      "Position": "C",
      "FantasyPoints": -0.4
    },{
      "TeamID": 24,
      "PlayerID": 30000032,
      "Name": "Nazem Kadri",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 31.7
    },{
      "TeamID": 24,
      "PlayerID": 30000073,
      "Name": "Milan Lucic",
      "Team": "CGY",
      "Position": "LW",
      "FantasyPoints": 6.3
    },{
      "TeamID": 24,
      "PlayerID": 30000100,
      "Name": "Christopher Tanev",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 24,
      "PlayerID": 30000103,
      "Name": "Mikael Backlund",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 24,
      "PlayerID": 30000150,
      "Name": "Trevor Lewis",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 24,
      "PlayerID": 30000157,
      "Name": "Tyler Toffoli",
      "Team": "CGY",
      "Position": "RW",
      "FantasyPoints": 21.7
    },{
      "TeamID": 24,
      "PlayerID": 30000237,
      "Name": "MacKenzie Weegar",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 24,
      "PlayerID": 30000311,
      "Name": "Blake Coleman",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 24,
      "PlayerID": 30000573,
      "Name": "Jacob Markstrom",
      "Team": "CGY",
      "Position": "G",
      "FantasyPoints": 18.7
    },{
      "TeamID": 24,
      "PlayerID": 30000633,
      "Name": "Noah Hanifin",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 4.9
    },{
      "TeamID": 24,
      "PlayerID": 30000636,
      "Name": "Elias Lindholm",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 7
    },{
      "TeamID": 24,
      "PlayerID": 30000766,
      "Name": "Jonathan Huberdeau",
      "Team": "CGY",
      "Position": "LW",
      "FantasyPoints": 15.9
    },{
      "TeamID": 24,
      "PlayerID": 30000909,
      "Name": "Nikita Zadorov",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 10.9
    },{
      "TeamID": 24,
      "PlayerID": 30000953,
      "Name": "Michael Stone",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 21.7
    },{
      "TeamID": 24,
      "PlayerID": 30001133,
      "Name": "Rasmus Andersson",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 20.9
    },{
      "TeamID": 24,
      "PlayerID": 30001437,
      "Name": "Brett Ritchie",
      "Team": "CGY",
      "Position": "RW",
      "FantasyPoints": 12.9
    },{
      "TeamID": 24,
      "PlayerID": 30002218,
      "Name": "Andrew Mangiapane",
      "Team": "CGY",
      "Position": "LW",
      "FantasyPoints": 13.4
    },{
      "TeamID": 24,
      "PlayerID": 30002786,
      "Name": "Daniel Vladar",
      "Team": "CGY",
      "Position": "G",
      "FantasyPoints": 4.6
    },{
      "TeamID": 24,
      "PlayerID": 30003174,
      "Name": "Dillon Dube",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 15
    },{
      "TeamID": 24,
      "PlayerID": 30003424,
      "Name": "Kevin Rooney",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 4.5
    },{
      "TeamID": 24,
      "PlayerID": 30003880,
      "Name": "Adam Ruzicka",
      "Team": "CGY",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 24,
      "PlayerID": 30004749,
      "Name": "Connor Mackey",
      "Team": "CGY",
      "Position": "D",
      "FantasyPoints": 0.3
    },{
      "TeamID": 25,
      "PlayerID": 30000362,
      "Name": "Brad Malone",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 25,
      "PlayerID": 30000372,
      "Name": "Derek Ryan",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 4.9
    },{
      "TeamID": 25,
      "PlayerID": 30000424,
      "Name": "Ryan Murray",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 25,
      "PlayerID": 30000440,
      "Name": "Zach Hyman",
      "Team": "EDM",
      "Position": "LW",
      "FantasyPoints": 30.1
    },{
      "TeamID": 25,
      "PlayerID": 30000476,
      "Name": "Cody Ceci",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 25,
      "PlayerID": 30000540,
      "Name": "Ryan Nugent-Hopkins",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 30.1
    },{
      "TeamID": 25,
      "PlayerID": 30000549,
      "Name": "Darnell Nurse",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 26.3
    },{
      "TeamID": 25,
      "PlayerID": 30000557,
      "Name": "Brett Kulak",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 14.2
    },{
      "TeamID": 25,
      "PlayerID": 30000746,
      "Name": "Jack Campbell",
      "Team": "EDM",
      "Position": "G",
      "FantasyPoints": 16.4
    },{
      "TeamID": 25,
      "PlayerID": 30000763,
      "Name": "Devin Shore",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 3.5
    },{
      "TeamID": 25,
      "PlayerID": 30000893,
      "Name": "Tyson Barrie",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 16.3
    },{
      "TeamID": 25,
      "PlayerID": 30000976,
      "Name": "Evander Kane",
      "Team": "EDM",
      "Position": "LW",
      "FantasyPoints": 28.4
    },{
      "TeamID": 25,
      "PlayerID": 30001076,
      "Name": "Leon Draisaitl",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 39.7
    },{
      "TeamID": 25,
      "PlayerID": 30001233,
      "Name": "Connor McDavid",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 37.6
    },{
      "TeamID": 25,
      "PlayerID": 30002611,
      "Name": "Warren Foegele",
      "Team": "EDM",
      "Position": "LW",
      "FantasyPoints": 5.2
    },{
      "TeamID": 25,
      "PlayerID": 30003133,
      "Name": "Jesse Puljujärvi",
      "Team": "EDM",
      "Position": "RW",
      "FantasyPoints": 3.8
    },{
      "TeamID": 25,
      "PlayerID": 30003163,
      "Name": "Markus Niemelainen",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 25,
      "PlayerID": 30003663,
      "Name": "Kailer Yamamoto",
      "Team": "EDM",
      "Position": "RW",
      "FantasyPoints": 6.3
    },{
      "TeamID": 25,
      "PlayerID": 30003729,
      "Name": "Stuart Skinner",
      "Team": "EDM",
      "Position": "G",
      "FantasyPoints": 13.9
    },{
      "TeamID": 25,
      "PlayerID": 30004081,
      "Name": "Evan Bouchard",
      "Team": "EDM",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 25,
      "PlayerID": 30004117,
      "Name": "Ryan McLeod",
      "Team": "EDM",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 25,
      "PlayerID": 30004804,
      "Name": "Dylan Holloway",
      "Team": "EDM",
      "Position": "LW",
      "FantasyPoints": -0.4
    },{
      "TeamID": 26,
      "PlayerID": 30000089,
      "Name": "Alexander Edler",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 3.5
    },{
      "TeamID": 26,
      "PlayerID": 30000123,
      "Name": "Jonathan Quick",
      "Team": "LA",
      "Position": "G",
      "FantasyPoints": 16.2
    },{
      "TeamID": 26,
      "PlayerID": 30000145,
      "Name": "Drew Doughty",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 18.4
    },{
      "TeamID": 26,
      "PlayerID": 30000149,
      "Name": "Anze Kopitar",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 26,
      "PlayerID": 30000199,
      "Name": "Kevin Fiala",
      "Team": "LA",
      "Position": "LW",
      "FantasyPoints": 17.5
    },{
      "TeamID": 26,
      "PlayerID": 30000245,
      "Name": "Viktor Arvidsson",
      "Team": "LA",
      "Position": "LW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 26,
      "PlayerID": 30000825,
      "Name": "Brendan Lemieux",
      "Team": "LA",
      "Position": "LW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 26,
      "PlayerID": 30001424,
      "Name": "Phillip Danault",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 26,
      "PlayerID": 30002582,
      "Name": "Adrian Kempe",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 22.5
    },{
      "TeamID": 26,
      "PlayerID": 30003171,
      "Name": "Carl Grundstrom",
      "Team": "LA",
      "Position": "RW",
      "FantasyPoints": 5.6
    },{
      "TeamID": 26,
      "PlayerID": 30003232,
      "Name": "Jacob Moverare",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 26,
      "PlayerID": 30003236,
      "Name": "Trevor Moore",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 26,
      "PlayerID": 30003561,
      "Name": "Matt Roy",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 24.2
    },{
      "TeamID": 26,
      "PlayerID": 30003588,
      "Name": "Alex Iafallo",
      "Team": "LA",
      "Position": "LW",
      "FantasyPoints": 15
    },{
      "TeamID": 26,
      "PlayerID": 30003611,
      "Name": "Calvin Petersen",
      "Team": "LA",
      "Position": "G",
      "FantasyPoints": 4.7
    },{
      "TeamID": 26,
      "PlayerID": 30003664,
      "Name": "Gabriel Vilardi",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 29.4
    },{
      "TeamID": 26,
      "PlayerID": 30003692,
      "Name": "Jaret Anderson-Dolan",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 0.7
    },{
      "TeamID": 26,
      "PlayerID": 30003786,
      "Name": "Sean Walker",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 3.8
    },{
      "TeamID": 26,
      "PlayerID": 30004141,
      "Name": "Sean Durzi",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 26,
      "PlayerID": 30004423,
      "Name": "Blake Lizotte",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 7.7
    },{
      "TeamID": 26,
      "PlayerID": 30004436,
      "Name": "Mikey Anderson",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 26,
      "PlayerID": 30004501,
      "Name": "Arthur Kaliyev",
      "Team": "LA",
      "Position": "RW",
      "FantasyPoints": 12.9
    },{
      "TeamID": 26,
      "PlayerID": 30004798,
      "Name": "Quinton Byfield",
      "Team": "LA",
      "Position": "C",
      "FantasyPoints": 5.9
    },{
      "TeamID": 26,
      "PlayerID": 30004994,
      "Name": "Brandt Clarke",
      "Team": "LA",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 27,
      "PlayerID": 30000086,
      "Name": "Nick Bonino",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 2.8
    },{
      "TeamID": 27,
      "PlayerID": 30000128,
      "Name": "Logan Couture",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 11.7
    },{
      "TeamID": 27,
      "PlayerID": 30000132,
      "Name": "Tomas Hertl",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 13.4
    },{
      "TeamID": 27,
      "PlayerID": 30000136,
      "Name": "Matt Nieto",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 10.9
    },{
      "TeamID": 27,
      "PlayerID": 30000140,
      "Name": "Marc-Edouard Vlasic",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 4.5
    },{
      "TeamID": 27,
      "PlayerID": 30000430,
      "Name": "James Reimer",
      "Team": "SJ",
      "Position": "G",
      "FantasyPoints": 24.2
    },{
      "TeamID": 27,
      "PlayerID": 30000442,
      "Name": "Scott Harrington",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 3.5
    },{
      "TeamID": 27,
      "PlayerID": 30000445,
      "Name": "Erik Karlsson",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 22.1
    },{
      "TeamID": 27,
      "PlayerID": 30000857,
      "Name": "Evgeny Svechnikov",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 14.6
    },{
      "TeamID": 27,
      "PlayerID": 30000881,
      "Name": "Jaycob Megna",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 27,
      "PlayerID": 30001226,
      "Name": "Timo Meier",
      "Team": "SJ",
      "Position": "RW",
      "FantasyPoints": 16.7
    },{
      "TeamID": 27,
      "PlayerID": 30002592,
      "Name": "Kaapo Kahkonen",
      "Team": "SJ",
      "Position": "G",
      "FantasyPoints": 2.6
    },{
      "TeamID": 27,
      "PlayerID": 30002680,
      "Name": "Kevin Labanc",
      "Team": "SJ",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 27,
      "PlayerID": 30002693,
      "Name": "Aaron Dell",
      "Team": "SJ",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 27,
      "PlayerID": 30003014,
      "Name": "Matt Benning",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 3.1
    },{
      "TeamID": 27,
      "PlayerID": 30003041,
      "Name": "Steven Lorentz",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 13.4
    },{
      "TeamID": 27,
      "PlayerID": 30003104,
      "Name": "Markus Nutivaara",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 27,
      "PlayerID": 30003150,
      "Name": "Luke Kunin",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 16.7
    },{
      "TeamID": 27,
      "PlayerID": 30003322,
      "Name": "Noah Gregor",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 1.4
    },{
      "TeamID": 27,
      "PlayerID": 30003401,
      "Name": "Jeffrey Viel",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 27,
      "PlayerID": 30003529,
      "Name": "Oskar Lindblom",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 7.7
    },{
      "TeamID": 27,
      "PlayerID": 30003622,
      "Name": "Radim Simek",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 6.6
    },{
      "TeamID": 27,
      "PlayerID": 30003693,
      "Name": "Mario Ferraro",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 13.4
    },{
      "TeamID": 27,
      "PlayerID": 30003694,
      "Name": "Jonah Gadjovich",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 0.7
    },{
      "TeamID": 27,
      "PlayerID": 30004417,
      "Name": "Nico Sturm",
      "Team": "SJ",
      "Position": "C",
      "FantasyPoints": 20.9
    },{
      "TeamID": 27,
      "PlayerID": 30004762,
      "Name": "Alexander Barabanov",
      "Team": "SJ",
      "Position": "RW",
      "FantasyPoints": 0.3
    },{
      "TeamID": 27,
      "PlayerID": 30004827,
      "Name": "Thomas Bordeleau",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 27,
      "PlayerID": 30004995,
      "Name": "William Eklund",
      "Team": "SJ",
      "Position": "LW",
      "FantasyPoints": 0
    },{
      "TeamID": 27,
      "PlayerID": 30005297,
      "Name": "Nick Cicek",
      "Team": "SJ",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 28,
      "PlayerID": 30000060,
      "Name": "Luke Schenn",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 10
    },{
      "TeamID": 28,
      "PlayerID": 30000153,
      "Name": "Tanner Pearson",
      "Team": "VAN",
      "Position": "LW",
      "FantasyPoints": 8
    },{
      "TeamID": 28,
      "PlayerID": 30000617,
      "Name": "J.T. Miller",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 15.9
    },{
      "TeamID": 28,
      "PlayerID": 30000943,
      "Name": "Oliver Ekman-Larsson",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 12.5
    },{
      "TeamID": 28,
      "PlayerID": 30000965,
      "Name": "Curtis Lazar",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 10.9
    },{
      "TeamID": 28,
      "PlayerID": 30001276,
      "Name": "Bo Horvat",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 23
    },{
      "TeamID": 28,
      "PlayerID": 30001299,
      "Name": "Tyler Myers",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 5.9
    },{
      "TeamID": 28,
      "PlayerID": 30001312,
      "Name": "Noah Juulsen",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 0.7
    },{
      "TeamID": 28,
      "PlayerID": 30001949,
      "Name": "Guillaume Brisebois",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 1.4
    },{
      "TeamID": 28,
      "PlayerID": 30002524,
      "Name": "Spencer Martin",
      "Team": "VAN",
      "Position": "G",
      "FantasyPoints": 1.3
    },{
      "TeamID": 28,
      "PlayerID": 30002581,
      "Name": "Thatcher Demko",
      "Team": "VAN",
      "Position": "G",
      "FantasyPoints": 6
    },{
      "TeamID": 28,
      "PlayerID": 30002703,
      "Name": "Kyle Burroughs",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 8
    },{
      "TeamID": 28,
      "PlayerID": 30002777,
      "Name": "Brock Boeser",
      "Team": "VAN",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 28,
      "PlayerID": 30002876,
      "Name": "Conor Garland",
      "Team": "VAN",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 28,
      "PlayerID": 30003345,
      "Name": "Riley Stillman",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 1
    },{
      "TeamID": 28,
      "PlayerID": 30003571,
      "Name": "Tucker Poolman",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 3.8
    },{
      "TeamID": 28,
      "PlayerID": 30003647,
      "Name": "Elias Pettersson",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 24.6
    },{
      "TeamID": 28,
      "PlayerID": 30003859,
      "Name": "Sheldon Dries",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 28,
      "PlayerID": 30004080,
      "Name": "Quinn Hughes",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": 17.5
    },{
      "TeamID": 28,
      "PlayerID": 30004380,
      "Name": "Jack Rathbone",
      "Team": "VAN",
      "Position": "D",
      "FantasyPoints": -0.8
    },{
      "TeamID": 28,
      "PlayerID": 30004442,
      "Name": "Ilya Mikheyev",
      "Team": "VAN",
      "Position": "RW",
      "FantasyPoints": 1.7
    },{
      "TeamID": 28,
      "PlayerID": 30004476,
      "Name": "Vasily Podkolzin",
      "Team": "VAN",
      "Position": "RW",
      "FantasyPoints": 7.3
    },{
      "TeamID": 28,
      "PlayerID": 30004531,
      "Name": "Nils Hoglander",
      "Team": "VAN",
      "Position": "LW",
      "FantasyPoints": 3.1
    },{
      "TeamID": 28,
      "PlayerID": 30004583,
      "Name": "Dakota Joshua",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 7.3
    },{
      "TeamID": 28,
      "PlayerID": 30005456,
      "Name": "Nils Aman",
      "Team": "VAN",
      "Position": "C",
      "FantasyPoints": 5.6
    },{
      "TeamID": 28,
      "PlayerID": 30005610,
      "Name": "Andrei Kuzmenko",
      "Team": "VAN",
      "Position": "LW",
      "FantasyPoints": 8
    },{
      "TeamID": 29,
      "PlayerID": 30000093,
      "Name": "Zack Kassian",
      "Team": "ARI",
      "Position": "RW",
      "FantasyPoints": 1.4
    },{
      "TeamID": 29,
      "PlayerID": 30000180,
      "Name": "Josh Brown",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 15
    },{
      "TeamID": 29,
      "PlayerID": 30000225,
      "Name": "Nick Bjugstad",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": 6.3
    },{
      "TeamID": 29,
      "PlayerID": 30000229,
      "Name": "Lawson Crouse",
      "Team": "ARI",
      "Position": "LW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 29,
      "PlayerID": 30000271,
      "Name": "Shayne Gostisbehere",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 30.1
    },{
      "TeamID": 29,
      "PlayerID": 30000593,
      "Name": "Liam O'Brien",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": 1
    },{
      "TeamID": 29,
      "PlayerID": 30000889,
      "Name": "Nick Ritchie",
      "Team": "ARI",
      "Position": "LW",
      "FantasyPoints": 12.9
    },{
      "TeamID": 29,
      "PlayerID": 30001124,
      "Name": "Patrik Nemeth",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": -1.3
    },{
      "TeamID": 29,
      "PlayerID": 30002583,
      "Name": "Nick Schmaltz",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": -0.8
    },{
      "TeamID": 29,
      "PlayerID": 30002593,
      "Name": "Dysin Mayo",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 1.4
    },{
      "TeamID": 29,
      "PlayerID": 30002787,
      "Name": "Connor Ingram",
      "Team": "ARI",
      "Position": "G",
      "FantasyPoints": 4
    },{
      "TeamID": 29,
      "PlayerID": 30002802,
      "Name": "Christian Fischer",
      "Team": "ARI",
      "Position": "RW",
      "FantasyPoints": 11.3
    },{
      "TeamID": 29,
      "PlayerID": 30003022,
      "Name": "Travis Boyd",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": 12.9
    },{
      "TeamID": 29,
      "PlayerID": 30003083,
      "Name": "Troy Stecher",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 1.7
    },{
      "TeamID": 29,
      "PlayerID": 30003141,
      "Name": "Clayton Keller",
      "Team": "ARI",
      "Position": "RW",
      "FantasyPoints": 16.3
    },{
      "TeamID": 29,
      "PlayerID": 30003662,
      "Name": "Juuso Valimaki",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 5.9
    },{
      "TeamID": 29,
      "PlayerID": 30003670,
      "Name": "Conor Timmins",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 29,
      "PlayerID": 30004078,
      "Name": "Barrett Hayton",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": -2.1
    },{
      "TeamID": 29,
      "PlayerID": 30004113,
      "Name": "Jack McBain",
      "Team": "ARI",
      "Position": "C",
      "FantasyPoints": 1.4
    },{
      "TeamID": 29,
      "PlayerID": 30004539,
      "Name": "Matias Maccelli",
      "Team": "ARI",
      "Position": "LW",
      "FantasyPoints": 4.9
    },{
      "TeamID": 29,
      "PlayerID": 30004957,
      "Name": "Karel Vejmelka",
      "Team": "ARI",
      "Position": "G",
      "FantasyPoints": 7.8
    },{
      "TeamID": 29,
      "PlayerID": 30004996,
      "Name": "Dylan Guenther",
      "Team": "ARI",
      "Position": "RW",
      "FantasyPoints": 7
    },{
      "TeamID": 29,
      "PlayerID": 30005044,
      "Name": "J.J. Moser",
      "Team": "ARI",
      "Position": "D",
      "FantasyPoints": 11.3
    },{
      "TeamID": 30,
      "PlayerID": 30000009,
      "Name": "Nathan Beaulieu",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 30,
      "PlayerID": 30000210,
      "Name": "Colton White",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 30,
      "PlayerID": 30000232,
      "Name": "Dmitry Kulikov",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 5.2
    },{
      "TeamID": 30,
      "PlayerID": 30000259,
      "Name": "Anthony Stolarz",
      "Team": "ANA",
      "Position": "G",
      "FantasyPoints": 2.6
    },{
      "TeamID": 30,
      "PlayerID": 30000609,
      "Name": "Frank Vatrano",
      "Team": "ANA",
      "Position": "RW",
      "FantasyPoints": 17.1
    },{
      "TeamID": 30,
      "PlayerID": 30000685,
      "Name": "Kevin Shattenkirk",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 12.1
    },{
      "TeamID": 30,
      "PlayerID": 30000754,
      "Name": "John Klingberg",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 5.6
    },{
      "TeamID": 30,
      "PlayerID": 30000874,
      "Name": "John Gibson",
      "Team": "ANA",
      "Position": "G",
      "FantasyPoints": 17
    },{
      "TeamID": 30,
      "PlayerID": 30000987,
      "Name": "Adam Henrique",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 3.5
    },{
      "TeamID": 30,
      "PlayerID": 30001005,
      "Name": "Ryan Strome",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 30,
      "PlayerID": 30001135,
      "Name": "Derek Grant",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 5.2
    },{
      "TeamID": 30,
      "PlayerID": 30001207,
      "Name": "Cam Fowler",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 7.7
    },{
      "TeamID": 30,
      "PlayerID": 30001267,
      "Name": "Jakob Silfverberg",
      "Team": "ANA",
      "Position": "RW",
      "FantasyPoints": 10.4
    },{
      "TeamID": 30,
      "PlayerID": 30003142,
      "Name": "Max Jones",
      "Team": "ANA",
      "Position": "LW",
      "FantasyPoints": 3.1
    },{
      "TeamID": 30,
      "PlayerID": 30003698,
      "Name": "Maxime Comtois",
      "Team": "ANA",
      "Position": "LW",
      "FantasyPoints": 3.5
    },{
      "TeamID": 30,
      "PlayerID": 30003747,
      "Name": "Troy Terry",
      "Team": "ANA",
      "Position": "RW",
      "FantasyPoints": 29.6
    },{
      "TeamID": 30,
      "PlayerID": 30004097,
      "Name": "Isac Lundestrom",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 6.6
    },{
      "TeamID": 30,
      "PlayerID": 30004252,
      "Name": "Simon Benoit",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 2.1
    },{
      "TeamID": 30,
      "PlayerID": 30004481,
      "Name": "Trevor Zegras",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 17.1
    },{
      "TeamID": 30,
      "PlayerID": 30004500,
      "Name": "Brett Leason",
      "Team": "ANA",
      "Position": "RW",
      "FantasyPoints": -2.1
    },{
      "TeamID": 30,
      "PlayerID": 30004800,
      "Name": "Jamie Drysdale",
      "Team": "ANA",
      "Position": "D",
      "FantasyPoints": 2.4
    },{
      "TeamID": 30,
      "PlayerID": 30004997,
      "Name": "Mason McTavish",
      "Team": "ANA",
      "Position": "C",
      "FantasyPoints": 10
    },{
      "TeamID": 30,
      "PlayerID": 30005602,
      "Name": "Pavol Regenda",
      "Team": "ANA",
      "Position": "LW",
      "FantasyPoints": 4.9
    },{
      "TeamID": 35,
      "PlayerID": 30000033,
      "Name": "Phil Kessel",
      "Team": "VEG",
      "Position": "RW",
      "FantasyPoints": 14.6
    },{
      "TeamID": 35,
      "PlayerID": 30000080,
      "Name": "Reilly Smith",
      "Team": "VEG",
      "Position": "RW",
      "FantasyPoints": 27.1
    },{
      "TeamID": 35,
      "PlayerID": 30000151,
      "Name": "Alec Martinez",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 20.9
    },{
      "TeamID": 35,
      "PlayerID": 30000152,
      "Name": "Brayden McNabb",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 23.8
    },{
      "TeamID": 35,
      "PlayerID": 30000422,
      "Name": "William Karlsson",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 22.5
    },{
      "TeamID": 35,
      "PlayerID": 30000496,
      "Name": "Jack Eichel",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 32.6
    },{
      "TeamID": 35,
      "PlayerID": 30000510,
      "Name": "William Carrier",
      "Team": "VEG",
      "Position": "LW",
      "FantasyPoints": 12.1
    },{
      "TeamID": 35,
      "PlayerID": 30000596,
      "Name": "Chandler Stephenson",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 26.7
    },{
      "TeamID": 35,
      "PlayerID": 30000694,
      "Name": "Keegan Kolesar",
      "Team": "VEG",
      "Position": "RW",
      "FantasyPoints": 4.9
    },{
      "TeamID": 35,
      "PlayerID": 30000793,
      "Name": "Alex Pietrangelo",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 24.2
    },{
      "TeamID": 35,
      "PlayerID": 30000890,
      "Name": "Shea Theodore",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 31.7
    },{
      "TeamID": 35,
      "PlayerID": 30000927,
      "Name": "Ben Hutton",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": -0.4
    },{
      "TeamID": 35,
      "PlayerID": 30001048,
      "Name": "Jonathan Marchessault",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 30.9
    },{
      "TeamID": 35,
      "PlayerID": 30001246,
      "Name": "Mark Stone",
      "Team": "VEG",
      "Position": "RW",
      "FantasyPoints": 25.5
    },{
      "TeamID": 35,
      "PlayerID": 30002630,
      "Name": "Michael Amadio",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 10.4
    },{
      "TeamID": 35,
      "PlayerID": 30002783,
      "Name": "Adin Hill",
      "Team": "VEG",
      "Position": "G",
      "FantasyPoints": 16.9
    },{
      "TeamID": 35,
      "PlayerID": 30003042,
      "Name": "Nicolas Roy",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 14.6
    },{
      "TeamID": 35,
      "PlayerID": 30003153,
      "Name": "Brett Howden",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 12.9
    },{
      "TeamID": 35,
      "PlayerID": 30003699,
      "Name": "Jake Leschyshyn",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 0
    },{
      "TeamID": 35,
      "PlayerID": 30003700,
      "Name": "Nicolas Hague",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 35,
      "PlayerID": 30003973,
      "Name": "Logan Thompson",
      "Team": "VEG",
      "Position": "G",
      "FantasyPoints": 23.4
    },{
      "TeamID": 35,
      "PlayerID": 30003997,
      "Name": "Zach Whitecloud",
      "Team": "VEG",
      "Position": "D",
      "FantasyPoints": 12.9
    },{
      "TeamID": 35,
      "PlayerID": 30004384,
      "Name": "Paul Cotter",
      "Team": "VEG",
      "Position": "C",
      "FantasyPoints": 5.6
    },{
      "TeamID": 36,
      "PlayerID": 30000122,
      "Name": "Martin Jones",
      "Team": "SEA",
      "Position": "G",
      "FantasyPoints": 12
    },{
      "TeamID": 36,
      "PlayerID": 30000303,
      "Name": "Adam Larsson",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 19.6
    },{
      "TeamID": 36,
      "PlayerID": 30000426,
      "Name": "Alexander Wennberg",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 13.8
    },{
      "TeamID": 36,
      "PlayerID": 30000428,
      "Name": "Oliver Bjorkstrand",
      "Team": "SEA",
      "Position": "RW",
      "FantasyPoints": 22.5
    },{
      "TeamID": 36,
      "PlayerID": 30000539,
      "Name": "Jordan Eberle",
      "Team": "SEA",
      "Position": "RW",
      "FantasyPoints": 6.6
    },{
      "TeamID": 36,
      "PlayerID": 30000541,
      "Name": "Justin Schultz",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 15.4
    },{
      "TeamID": 36,
      "PlayerID": 30000577,
      "Name": "Philipp Grubauer",
      "Team": "SEA",
      "Position": "G",
      "FantasyPoints": 2
    },{
      "TeamID": 36,
      "PlayerID": 30000585,
      "Name": "Andre Burakovsky",
      "Team": "SEA",
      "Position": "LW",
      "FantasyPoints": 21.3
    },{
      "TeamID": 36,
      "PlayerID": 30000663,
      "Name": "Daniel Sprong",
      "Team": "SEA",
      "Position": "RW",
      "FantasyPoints": 10.9
    },{
      "TeamID": 36,
      "PlayerID": 30000674,
      "Name": "Vince Dunn",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 14.6
    },{
      "TeamID": 36,
      "PlayerID": 30000758,
      "Name": "Jamie Oleksiak",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 10.9
    },{
      "TeamID": 36,
      "PlayerID": 30000794,
      "Name": "Jaden Schwartz",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 20.9
    },{
      "TeamID": 36,
      "PlayerID": 30000929,
      "Name": "Jared McCann",
      "Team": "SEA",
      "Position": "LW",
      "FantasyPoints": 21.3
    },{
      "TeamID": 36,
      "PlayerID": 30001178,
      "Name": "Yanni Gourde",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 6.6
    },{
      "TeamID": 36,
      "PlayerID": 30002588,
      "Name": "Ryan Donato",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 12.5
    },{
      "TeamID": 36,
      "PlayerID": 30003053,
      "Name": "Brandon Tanev",
      "Team": "SEA",
      "Position": "LW",
      "FantasyPoints": 20.9
    },{
      "TeamID": 36,
      "PlayerID": 30003583,
      "Name": "Carson Soucy",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 15.9
    },{
      "TeamID": 36,
      "PlayerID": 30003703,
      "Name": "Cale Fleury",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 0
    },{
      "TeamID": 36,
      "PlayerID": 30003704,
      "Name": "Morgan Geekie",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 11.3
    },{
      "TeamID": 36,
      "PlayerID": 30003743,
      "Name": "Will Borgen",
      "Team": "SEA",
      "Position": "D",
      "FantasyPoints": 12.1
    },{
      "TeamID": 36,
      "PlayerID": 30004024,
      "Name": "Karson Kuhlman",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 12.1
    },{
      "TeamID": 36,
      "PlayerID": 30004419,
      "Name": "Joey Daccord",
      "Team": "SEA",
      "Position": "G",
      "FantasyPoints": 0
    },{
      "TeamID": 36,
      "PlayerID": 30005040,
      "Name": "Matthew Beniers",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 18
    },{
      "TeamID": 36,
      "PlayerID": 30005616,
      "Name": "Shane Wright",
      "Team": "SEA",
      "Position": "C",
      "FantasyPoints": 3.8
    }]
  );

  console.log('players seeded');

  //await User.deleteMany();
/*
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });
*/
  await User.create({
    username: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});


var config = {
   serverName: "Nirvana",
   size: 4096,
   x: 637,
   y: 1692,
   mapType: 'terrain',
   showDeedBordersIn3dMode: false,
   showDeedBordersInFlatMode: true,
   neutralLandName: "[name]"
};
function Deed(name,founder,mayor,creationDate,democracy,kingdom,x,y,height,permanent,sx,sy,ex,ey,p) {
   this.name          = name;
   this.founder       = founder;
   this.mayor         = mayor;
   this.creationDate  = creationDate;
   this.democracy     = democracy;
   this.kingdom       = kingdom;
   this.x             = x;
   this.y             = y;
   this.sx            = sx;
   this.sy            = sy;
   this.ex            = ex;
   this.ey            = ey;
   this.p             = p;
   this.height        = height;
   this.permanent     = permanent;
}

function FocusZone(name,x,y,height,type,sx,sy,ex,ey) {
   this.name    = name;
   this.x       = x;
   this.y       = y;
   this.sx      = sx;
   this.sy      = sy;
   this.ex      = ex;
   this.ey      = ey;
   this.height  = height;
   this.type    = type;
}

function Kingdom(kingdom,name,king,color) {
   this.kingdom = kingdom;
   this.name    = name;
   this.king    = king;
   this.color   = color;
}

function GuardTower(owner,creationDate,kingdom,x,y,z,description) {
   this.owner         = owner;
   this.creationDate  = creationDate;
   this.kingdom       = kingdom;
   this.x             = x;
   this.y             = y;
   this.z             = z;
   this.description   = description;
}

function Sign(owner,creationDate,x,y,z,message) {
   this.owner         = owner;
   this.creationDate  = creationDate;
   this.x             = x;
   this.y             = y;
   this.z             = z;
   this.message       = message;
}

var deeds = [];
var focusZones = [];
var kingdoms = [];
var guardTowers = [];
var signs = [];
deeds.push(new Deed('Aurora','Gaea','Gaea',1675474483281,false,4,637,1692,66,true,596,1674,666,1709,0));
deeds.push(new Deed('Mystic Retreat','Peanut','Peanut',1675724177298,false,4,1464,398,44,false,1389,343,1539,461,10));
deeds.push(new Deed('Portobelo','Kilem','Kilem',1675792074275,false,4,2836,689,240,false,2811,664,2861,714,0));
deeds.push(new Deed('Hot Sauce Central','Frank','Frank',1675903902733,false,4,369,2423,106,false,363,2417,381,2433,0));
deeds.push(new Deed('Sleepy Town','Tinashunter','Tinashunter',1676089981423,false,4,416,2481,154,false,386,2461,436,2501,0));
deeds.push(new Deed('Zimna Wodka','Ciastek','Ciastek',1676738889861,false,4,1983,3312,20,false,1968,3297,1998,3317,0));
deeds.push(new Deed('Guppy Green','Drazin','Drazin',1676850955261,false,4,1055,1888,66,false,1048,1881,1062,1899,0));
deeds.push(new Deed('Versailles','Cierra','Cierra',1677018567781,false,4,3462,1291,50,false,3393,1211,3498,1371,10));
deeds.push(new Deed('Grannys Star Place','Grannysmith','Grannysmith',1677433673302,false,4,954,618,67,false,934,598,974,635,0));
deeds.push(new Deed('King\'s Cross','Buzka','Buzka',1677440511503,false,4,2335,3434,30,false,2330,3429,2340,3439,0));
deeds.push(new Deed('Hill Of Vynora','Temilia','Stewen',1678552293875,false,4,456,1674,45,false,410,1662,462,1686,0));
deeds.push(new Deed('The Dragon\'s Keep','Eveswaffora','Eveswaffora',1678795571378,false,4,872,1732,381,false,842,1702,902,1762,0));
deeds.push(new Deed('Mercyful Fate','Venomus','Venomus',1679246995941,true,4,570,1760,51,false,558,1740,590,1776,0));
deeds.push(new Deed('Utopia','Pure','Pure',1679257154116,false,4,707,3388,118,false,692,3373,722,3403,0));
deeds.push(new Deed('Northlake','General','General',1679306248279,false,4,2308,1559,36,false,2293,1544,2323,1574,0));
deeds.push(new Deed('Beach Resort','Baccus','Baccus',1679989768186,true,4,410,2711,24,false,400,2701,420,2721,0));
deeds.push(new Deed('City Of Lost','Gardenkeeper','Gardenkeeper',1680454978326,false,4,856,1054,40,false,796,994,866,1064,0));
deeds.push(new Deed('Thunder Bay','Falkirk','Falkirk',1680498592280,false,4,1900,3564,47,false,1889,3548,1927,3575,0));
deeds.push(new Deed('Festers Place','Fester','Fester',1681193539891,false,4,965,2165,161,false,930,2145,1000,2185,0));
deeds.push(new Deed('Elemental','Shadroth','Shadroth',1681994249293,false,4,695,1704,335,false,690,1695,710,1715,0));
deeds.push(new Deed('Wherever','Billy','Billy',1682430633276,false,4,1226,1701,173,false,1221,1663,1248,1712,0));
deeds.push(new Deed('Datadyne Hideout','Trenteaston','Trenteaston',1682601752740,false,4,693,1529,310,false,678,1519,703,1539,0));
deeds.push(new Deed('Sorrowshade','Rasa','Rasa',1682608168346,false,4,3593,3569,13,false,3578,3544,3613,3604,0));
deeds.push(new Deed('The Last Of The Bean Family','Charleyboy','Charleyboy',1682789860427,false,4,1044,1676,105,false,1025,1663,1063,1689,0));
deeds.push(new Deed('The Neighborhood Of Make-believe','Eteladric','Eteladric',1682886297785,false,4,772,1119,36,false,752,1109,777,1129,0));
deeds.push(new Deed('Homestead','Simone','Simone',1682902466656,false,4,1133,1816,19,false,1128,1811,1138,1821,0));
deeds.push(new Deed('Noreaster','Rosey','Rosey',1683202938487,false,4,3744,525,105,false,3704,485,3784,565,0));
deeds.push(new Deed('Fredericks Town','Tinaskat','Tinaskat',1683460716996,false,4,867,852,309,false,852,837,882,867,0));
deeds.push(new Deed('E N C L A V E','Shadowthief','Shadowthief',1683738624226,false,4,344,3736,55,false,319,3711,369,3776,0));
deeds.push(new Deed('Lake View','Missnobody','Missnobody',1683826579832,false,4,1283,1776,40,false,1258,1753,1311,1800,5));
deeds.push(new Deed('Shubsville','Shubs','Shubs',1684249269245,false,4,718,1220,192,false,698,1200,738,1240,0));
deeds.push(new Deed('La Dimora','Mangurian','Mangurian',1684355786015,false,4,325,2246,54,false,320,2234,332,2251,0));
deeds.push(new Deed('Polonia','Czemiel','Czemiel',1684504617340,false,4,339,1194,108,false,309,1164,369,1224,0));
deeds.push(new Deed('Twilight Montana','Twilightsword','Twilightsword',1684756921918,false,4,702,1657,336,false,697,1652,707,1662,0));
deeds.push(new Deed('Minoc Castle','Lostman','Lostman',1684871497189,false,4,2184,495,80,false,2179,490,2189,500,0));
deeds.push(new Deed('The Covenant','Velor','Velor',1685043461625,false,4,638,1979,434,false,627,1974,643,1984,0));
deeds.push(new Deed('Wolfmere','Wolfdangler','Wolfdangler',1685285184740,false,4,882,927,38,false,872,907,892,937,0));
deeds.push(new Deed('Whitespire','Plebcicle','Plebcicle',1685375454642,false,4,764,2818,215,false,734,2788,794,2848,0));
deeds.push(new Deed('Danger Island','Dragon','Dragon',1685437803428,false,4,2500,175,298,false,2418,94,2581,255,5));
deeds.push(new Deed('Bottom\'s End','Scruffybottom','Scruffybottom',1685804745304,false,4,2693,1666,126,false,2673,1646,2713,1686,0));
deeds.push(new Deed('Round Rock','Coulple','Coulple',1685837203026,false,4,3629,2626,76,false,3604,2616,3654,2636,5));
deeds.push(new Deed('Winterfel','Eagle','Eagle',1686514223300,false,4,488,2460,267,false,483,2455,493,2465,0));
deeds.push(new Deed('Narfolk','Gerald','Gerald',1687010021960,false,4,669,709,346,false,664,704,674,714,0));
deeds.push(new Deed('Aiwendil','Radagast','Radagast',1687393331276,false,4,390,2046,83,false,320,2011,460,2081,0));
deeds.push(new Deed('Nirvus Lakeside','Nirvus','Nirvus',1687399072815,false,4,1280,2370,153,false,1260,2350,1300,2390,0));
deeds.push(new Deed('Lyngsta','Denully','Denully',1687643023700,false,4,643,1798,252,false,638,1788,653,1808,0));
deeds.push(new Deed('Brolo','Danious','Danious',1687708939163,false,4,1951,2000,40,false,1936,1990,1976,2010,5));
deeds.push(new Deed('Atlantis','Smokeyboy','Smokeyboy',1687873514023,false,4,516,1787,39,false,496,1767,536,1807,0));
deeds.push(new Deed('Makuby','Sandra','Sandra',1687895791248,false,4,1347,472,209,false,1327,452,1367,492,0));
deeds.push(new Deed('Coven','Roux','Roux',1687934501450,false,4,382,3035,93,false,372,3025,392,3045,0));
kingdoms[0] = new Kingdom(0,'no known kingdom','','[color-list]');
kingdoms[1] = new Kingdom(1,'Jenn-Kellon','','');
kingdoms[2] = new Kingdom(2,'Mol Rehan','','');
kingdoms[3] = new Kingdom(3,'Horde of the Summoned','','');
kingdoms[4] = new Kingdom(4,'Freedom Isles','','');
guardTowers.push(new GuardTower('',16416403,4,2456,2508,180,''));
guardTowers.push(new GuardTower('',21108450,4,398,2479,154,''));
guardTowers.push(new GuardTower('',28720584,4,1525,451,237,''));
guardTowers.push(new GuardTower('',41498195,4,1408,445,183,''));
guardTowers.push(new GuardTower('',47388154,4,1526,363,19,''));
signs.push(new Sign('',73992809,1696,1690,492,'Archaeological Site - The Bakery'));
highwayNodes = [
   [1112,1694,62,1117,1689,62],[1250,636,466,677,636,221,1],[626,1699,66,1],[1250,500,218,1250,1693,184,1],[1250,500,218,1463,500,327,1],
   [644,1694,66,1],[1464,440,109,1464,499,326,1],[3369,1689,340,3369,580,42,1],[631,1694,66,1112,1694,62],[628,1695,66,626,1697,66],
   [630,1695,66,628,1695,66],[630,1695,66,631,1694,66],[702,636,171,701,635,171],[701,625,157,701,636,171,1],[369,2432,98,626,2432,431,1],
   [625,2432,431,626,2433,428],[626,2432,431,369,2432,98,1],[701,636,171,701,625,157,1],[677,637,221,678,636,221],[1250,501,220,1251,500,219],
   [1250,637,467,1249,636,467],[1464,499,326,1463,500,327],[1464,500,327,1],[420,2714,22,1],[626,2714,333,419,2714,22,1],
   [571,1765,71,626,1765,140,1],[626,1765,140,571,1765,71,1],[625,1765,140,626,1766,140],[626,2715,331,625,2714,333],[626,2718,323,626,1697,66],
   [933,2157,227,1],[626,2157,409,937,2157,210,1],[627,2157,410,626,2158,408],[1250,1690,198,1249,1689,198],[1251,1689,198,1250,1690,198],
   [1251,1689,198,1250,1688,198],[677,1694,279,677,636,221,1],[3401,1292,135,1],[3369,1292,281,3402,1292,135,1],[1284,1690,228,1283,1689,228],
   [1284,1690,228,1285,1689,228],[3369,1688,340,3370,1689,340],[3781,1689,83,1117,1689,62],[3370,1292,281,3369,1293,281],[1284,1688,228,1285,1689,228],
   [678,1694,280,677,1693,279],[1522,1689,396,1],[1284,1689,228,1],[1250,1689,198,1],[1284,1757,62,1284,1756,62],
   [1284,1754,65,1284,1688,228,1]
];
bridgeNodes = [
];
tunnelNodes = [
   [3786,1689,72,3782,1689,76,1]
];
var timestamp = 1687950776060;

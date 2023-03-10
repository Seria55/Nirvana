
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
deeds.push(new Deed('Grukhanovill','Grukhan','Grukhan',1675674647878,false,4,615,1601,41,false,595,1596,623,1606,0));
deeds.push(new Deed('Mystic Retreat','Peanut','Peanut',1675724177298,false,4,1464,398,44,false,1389,343,1539,461,5));
deeds.push(new Deed('Portobelo','Kilem','Kilem',1675792074275,false,4,2836,689,240,false,2811,664,2861,714,0));
deeds.push(new Deed('Art Of Zen','Zenity','Zenity',1675802758198,false,4,3370,633,182,false,3365,628,3380,638,0));
deeds.push(new Deed('Hot Sauce Central','Frank','Frank',1675903902733,false,4,369,2423,106,false,363,2417,381,2433,0));
deeds.push(new Deed('Wolfmere','Wolfdangler','Wolfdangler',1676057052473,false,4,882,931,3,false,862,911,902,941,0));
deeds.push(new Deed('Peachstone','Zelan','Zelan',1676059323098,false,4,703,624,156,false,653,574,753,634,0));
deeds.push(new Deed('Sleepy Town','Tinashunter','Tinashunter',1676089981423,false,4,416,2481,154,false,386,2461,436,2501,0));
deeds.push(new Deed('Bull Shores Shipyards','Grommyboi','Grommyboi',1676230367627,false,4,3519,1656,63,false,3499,1636,3539,1676,0));
deeds.push(new Deed('Purgatory','Baaz','Baaz',1676356791303,false,4,2456,2510,180,false,2446,2495,2466,2525,0));
deeds.push(new Deed('Polonia','Czemiel','Czemiel',1676387465028,false,4,339,1194,108,false,329,1184,349,1202,0));
deeds.push(new Deed('Avalon','Adoney','Adoney',1676514288526,true,4,377,3039,93,false,346,3019,387,3059,0));
deeds.push(new Deed('Aberdine','Ziane','Ziane',1676514641050,true,4,408,3036,85,false,398,3011,436,3061,0));
deeds.push(new Deed('Zimna Wodka','Ciastek','Ciastek',1676738889861,false,4,1983,3312,20,false,1968,3297,1998,3317,0));
deeds.push(new Deed('Guppy Green','Drazin','Drazin',1676850955261,false,4,1055,1888,66,false,1048,1881,1062,1899,0));
deeds.push(new Deed('Hots Pirate H Q','Cptjack','Cptjack',1676964555328,false,4,1487,2256,37,false,1457,2191,1532,2276,0));
deeds.push(new Deed('Versailles','Cierra','Cierra',1677018567781,false,4,3468,1291,45,false,3423,1241,3498,1341,10));
deeds.push(new Deed('White Pearl','Empress','Empress',1677095628827,false,4,3240,2909,11,false,3220,2889,3260,2929,0));
deeds.push(new Deed('Grannys Star Place','Grannysmith','Grannysmith',1677433673302,false,4,954,618,67,false,934,598,974,635,0));
deeds.push(new Deed('King\'s Cross','Buzka','Buzka',1677440511503,false,4,2335,3434,30,false,2330,3429,2340,3439,0));
deeds.push(new Deed('Stellar Garden','Stewen','Stewen',1677798432161,false,4,1118,1668,76,false,1111,1660,1124,1675,0));
deeds.push(new Deed('Kleinhawe','Gromble','Gromble',1678427873783,false,4,617,1535,63,false,597,1525,637,1545,0));
deeds.push(new Deed('Kito','Master','Master',1678449164984,false,4,1195,1673,180,false,1190,1668,1200,1678,0));
deeds.push(new Deed('Serenity Valley','Steve','Steve',1678490811657,false,4,832,1311,52,false,827,1306,837,1316,0));
deeds.push(new Deed('Rhamahold','Rhamshinn','Rhamshinn',1678548528650,false,4,2783,3728,33,false,2773,3718,2793,3738,0));
deeds.push(new Deed('Hill Of Vynora','Temilia','Temilia',1678552293875,false,4,456,1674,45,false,431,1668,462,1680,0));
focusZones.push(new FocusZone('llll',3484,1289,-24,16,3484,1257,3484,1321));
focusZones.push(new FocusZone('lll',2436,175,153,17,2426,160,2446,190));
focusZones.push(new FocusZone('jjj',2436,175,153,17,2426,160,2446,190));
kingdoms[0] = new Kingdom(0,'no known kingdom','','[color-list]');
kingdoms[1] = new Kingdom(1,'Jenn-Kellon','','');
kingdoms[2] = new Kingdom(2,'Mol Rehan','','');
kingdoms[3] = new Kingdom(3,'Horde of the Summoned','','');
kingdoms[4] = new Kingdom(4,'Freedom Isles','','');
guardTowers.push(new GuardTower('',16416403,4,2456,2508,180,''));
guardTowers.push(new GuardTower('',21108450,4,398,2479,154,''));
highwayNodes = [
   [1251,1689,186,1117,1689,52],[1250,1688,186,1251,1689,186],[1250,1689,186,1250,1688,186,1],[1112,1694,50,1117,1689,52],[1250,636,466,677,636,221,1],
   [626,1699,66,1],[1250,500,218,1250,1349,241,1],[1250,500,218,1463,500,327,1],[644,1694,66,1],[1464,440,109,1464,499,326,1],
   [631,1694,66,1112,1694,50],[626,1697,66,626,2433,428],[628,1695,66,626,1697,66],[630,1695,66,628,1695,66],[630,1695,66,631,1694,66],
   [702,636,171,701,635,171],[701,625,157,701,636,171,1],[369,2432,98,626,2432,431,1],[625,2432,431,626,2433,428],[626,2432,431,369,2432,98,1],
   [701,636,171,701,625,157,1],[677,1694,278,677,636,221,1],[677,637,221,678,636,221],[677,1693,278,678,1694,284],[1250,501,220,1251,500,219],
   [1250,637,467,1249,636,467],[1464,499,326,1463,500,327],[1464,500,327,1]
];
bridgeNodes = [
];
tunnelNodes = [
];
var timestamp = 1678582162048;

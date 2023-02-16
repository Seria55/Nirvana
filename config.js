
var config = {
   serverName: "Nirvana",
   size: 4096,
   x: 641,
   y: 1694,
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
deeds.push(new Deed('Aurora','Gaea','Gaea',1675474483281,false,4,641,1694,66,true,596,1674,666,1709,0));
deeds.push(new Deed('Grukhanovill','Grukhan','Grukhan',1675674647878,false,4,615,1601,41,false,595,1596,623,1606,0));
deeds.push(new Deed('Mystic Retreat','Peanut','Peanut',1675724177298,false,4,1464,398,44,false,1412,343,1515,441,5));
deeds.push(new Deed('Nirvuston','Nirvus','Nirvus',1675737775248,false,4,663,3510,103,false,643,3490,683,3530,0));
deeds.push(new Deed('Portobelo','Kilem','Kilem',1675792074275,false,4,2836,689,240,false,2786,639,2886,739,0));
deeds.push(new Deed('Art Of Zen','Zenity','Zenity',1675802758198,false,4,3370,633,182,false,3365,628,3380,638,0));
deeds.push(new Deed('Hot Sauce Central','Frank','Frank',1675903902733,false,4,369,2423,106,false,363,2417,381,2433,0));
deeds.push(new Deed('Wolfmere','Wolfdangler','Wolfdangler',1676057052473,false,4,882,931,3,false,862,911,902,941,0));
deeds.push(new Deed('Peachstone','Zelan','Zelan',1676059323098,false,4,703,624,156,false,653,574,753,634,0));
deeds.push(new Deed('Sleepy Town','Tinashunter','Tinashunter',1676089981423,false,4,416,2481,154,false,396,2461,436,2501,0));
deeds.push(new Deed('Bull Shores Shipyards','Grommyboi','Grommyboi',1676230367627,false,4,3519,1656,63,false,3499,1636,3539,1676,0));
deeds.push(new Deed('Versailles','Cierra','Cierra',1676237985652,false,4,3475,1295,37,false,3435,1265,3495,1325,0));
deeds.push(new Deed('Purgatory','Baaz','Baaz',1676356791303,false,4,2456,2510,180,false,2446,2495,2466,2525,0));
deeds.push(new Deed('Polonia','Czemiel','Czemiel',1676387465028,false,4,339,1194,108,false,329,1184,349,1202,0));
deeds.push(new Deed('Avalon','Adoney','Adoney',1676514288526,true,4,377,3039,93,false,367,3029,387,3049,0));
deeds.push(new Deed('Aberdine','Ziane','Ziane',1676514641050,true,4,408,3036,85,false,398,3026,421,3046,0));
kingdoms[0] = new Kingdom(0,'no known kingdom','','[color-list]');
kingdoms[1] = new Kingdom(1,'Jenn-Kellon','','');
kingdoms[2] = new Kingdom(2,'Mol Rehan','','');
kingdoms[3] = new Kingdom(3,'Horde of the Summoned','','');
kingdoms[4] = new Kingdom(4,'Freedom Isles','','');
highwayNodes = [
   [1251,1689,186,1117,1689,52],[1250,1688,186,1251,1689,186],[1250,1689,186,1250,1688,186,1],[1112,1694,50,1117,1689,52],[1250,636,466,677,636,221,1],
   [626,1699,66,1],[644,1694,66,1],[626,2433,428,626,2414,448],[631,1694,66,1112,1694,50],[626,1697,66,626,1853,300],
   [628,1695,66,626,1697,66],[630,1695,66,628,1695,66],[630,1695,66,631,1694,66],[702,636,171,701,635,171],[701,625,157,701,636,171,1],
   [369,2432,98,626,2432,431,1],[625,2432,431,626,2433,428],[626,2432,431,369,2432,98,1],[701,636,171,701,625,157,1],[677,1694,278,677,636,221,1],
   [677,637,221,678,636,221],[677,1693,278,678,1694,284]
];
bridgeNodes = [
];
tunnelNodes = [
];
var timestamp = 1676574838848;

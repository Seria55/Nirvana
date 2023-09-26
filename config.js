
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
deeds.push(new Deed('Mystic Retreat','Peanut','Peanut',1675724177298,false,4,1464,398,44,false,1389,343,1574,498,10));
deeds.push(new Deed('Portobelo','Kilem','Kilem',1675792074275,false,4,2836,689,240,false,2811,664,2861,714,0));
deeds.push(new Deed('Hot Sauce Central','Frank','Frank',1675903902733,false,4,369,2423,106,false,363,2417,381,2433,0));
deeds.push(new Deed('Guppy Green','Drazin','Drazin',1676850955261,false,4,1055,1888,66,false,1048,1881,1062,1899,0));
deeds.push(new Deed('Versailles','Cierra','Cierra',1677018567781,false,4,3462,1291,50,false,3393,1211,3498,1371,10));
deeds.push(new Deed('Grannys Star Place','Grannysmith','Grannysmith',1677433673302,false,4,954,618,67,false,934,598,974,635,0));
deeds.push(new Deed('The Dragon\'s Keep','Eveswaffora','Eveswaffora',1678795571378,false,4,872,1732,381,false,842,1702,902,1762,0));
deeds.push(new Deed('Utopia','Pure','Pure',1679257154116,false,4,707,3388,118,false,692,3373,722,3403,0));
deeds.push(new Deed('Beach Resort','Baccus','Baccus',1679989768186,true,4,410,2711,24,false,400,2701,420,2721,0));
deeds.push(new Deed('City Of Lost','Gardenkeeper','Gardenkeeper',1680454978326,false,4,856,1054,40,false,796,994,866,1064,0));
deeds.push(new Deed('Thunder Bay','Falkirk','Falkirk',1680498592280,false,4,1900,3564,47,false,1889,3548,1927,3575,0));
deeds.push(new Deed('Festers Place','Fester','Fester',1681193539891,false,4,965,2165,161,false,930,2145,1000,2185,0));
deeds.push(new Deed('Sorrowshade','Rasa','Rasa',1682608168346,false,4,3593,3569,13,false,3578,3544,3613,3604,0));
deeds.push(new Deed('Fredericks Town','Tinaskat','Tinaskat',1683460716996,false,4,867,852,309,false,840,822,894,879,0));
deeds.push(new Deed('Lake View','Missnobody','Missnobody',1683826579832,false,4,1283,1776,40,false,1258,1753,1311,1800,5));
deeds.push(new Deed('Shubsville','Shubs','Shubs',1684249269245,false,4,718,1220,192,false,698,1200,738,1240,0));
deeds.push(new Deed('La Dimora','Mangurian','Mangurian',1684355786015,false,4,325,2246,54,false,320,2234,332,2251,0));
deeds.push(new Deed('Twilight Montana','Twilightsword','Twilightsword',1684756921918,false,4,702,1657,336,false,697,1652,707,1662,0));
deeds.push(new Deed('Wolfmere','Wolfdangler','Wolfdangler',1685285184740,false,4,882,927,38,false,872,907,892,937,0));
deeds.push(new Deed('Whitespire','Plebcicle','Plebcicle',1685375454642,false,4,764,2818,215,false,734,2788,794,2848,0));
deeds.push(new Deed('Danger Island','Dragon','Dragon',1685437803428,false,4,2500,175,298,false,2418,94,2581,255,5));
deeds.push(new Deed('Round Rock','Coulple','Coulple',1685837203026,false,4,3629,2626,80,false,3604,2616,3674,2636,5));
deeds.push(new Deed('Winterfel','Eagle','Eagle',1686514223300,false,4,488,2460,267,false,483,2455,493,2465,0));
deeds.push(new Deed('Aiwendil','Radagast','Radagast',1687393331276,false,4,390,2046,83,false,320,2011,460,2081,0));
deeds.push(new Deed('Nirvus Lakeside','Nirvus','Nirvus',1687399072815,false,4,1280,2370,153,false,1260,2350,1300,2390,0));
deeds.push(new Deed('Lyngsta','Denully','Denully',1687643023700,false,4,643,1798,252,false,638,1788,653,1808,0));
deeds.push(new Deed('Brolo','Danious','Danious',1687708939163,false,4,1951,2000,40,false,1936,1990,1976,2010,5));
deeds.push(new Deed('Atlantis','Smokeyboy','Smokeyboy',1687873514023,false,4,516,1787,24,false,466,1767,536,1842,0));
deeds.push(new Deed('Makuby','Sandra','Sandra',1687895791248,false,4,1347,472,200,false,1317,377,1368,497,0));
deeds.push(new Deed('TBA','Irunfromtrolls','Irunfromtrolls',1687976668443,false,4,1056,1245,24,false,1051,1240,1061,1250,0));
deeds.push(new Deed('Table Manners','Tatang','Cucara',1688481333279,false,4,320,390,5,false,309,379,331,401,0));
deeds.push(new Deed('Yodrile','Nexiv','Nexiv',1688688773750,false,4,3798,1690,82,false,3788,1665,3813,1700,0));
deeds.push(new Deed('Liberty','Metrix','Metrix',1688807920221,false,4,1167,2911,170,false,1117,2896,1217,3046,0));
deeds.push(new Deed('Deepfall Hollows','Tatang','Tatang',1688811875716,false,4,988,2607,486,false,977,2596,999,2618,0));
deeds.push(new Deed('James Beach','James','James',1689465117681,false,4,1128,3219,42,false,1123,3214,1133,3224,0));
deeds.push(new Deed('Caligari','Journi','Journi',1689687223712,false,4,1695,1631,505,false,1655,1591,1735,1689,0));
deeds.push(new Deed('The Temple Of Roses','Nabeel','Nabeel',1689912801478,false,4,3016,338,120,false,2866,308,3031,424,0));
deeds.push(new Deed('Pontah','Kenetto','Kenetto',1689923468192,false,4,601,2156,404,false,591,2146,611,2166,0));
deeds.push(new Deed('Wurmian Post','Localreporter','Localreporter',1690177128153,false,4,702,619,150,false,697,612,712,634,0));
deeds.push(new Deed('Ottawa','Ottawajohn','Ottawajohn',1690217023423,false,4,1229,1701,173,false,1221,1660,1248,1713,0));
deeds.push(new Deed('Broken Dreams','Broken','Broken',1690264141783,false,4,3781,1906,9,false,3761,1886,3821,1926,0));
deeds.push(new Deed('Blue Blaze','Pedrodestro','Pedrodestro',1690582875227,false,4,885,629,43,false,875,616,895,638,0));
deeds.push(new Deed('Arbor Haven','Merric','Merric',1691071557030,false,4,617,1601,56,false,593,1566,652,1641,5));
deeds.push(new Deed('This Place','Adiss','Adiss',1691180574733,false,4,1283,1097,436,false,1253,1077,1313,1117,0));
deeds.push(new Deed('Thehide','Mark','Mark',1691254126759,false,4,2180,601,183,false,2175,596,2185,606,0));
deeds.push(new Deed('Principate Of Orda','Garrick','Garrick',1692053847469,false,4,1120,1767,1,false,1060,1689,1180,1845,0));
deeds.push(new Deed('Holdout','Wazzdakka','Wazzdakka',1692133582302,false,4,2184,420,20,false,2160,398,2210,471,0));
deeds.push(new Deed('Damnation','Tripitaka','Twilight',1692255537678,false,4,2696,1665,126,false,2688,1657,2704,1673,0));
deeds.push(new Deed('Settlement By The Sea','Ozzymandias','Ozzymandias',1692288070114,false,4,3519,1653,63,false,3511,1631,3533,1688,0));
deeds.push(new Deed('West Palm Beach','Adam','Adam',1692373953563,false,4,340,1289,115,false,280,1274,355,1304,0));
deeds.push(new Deed('Vancouver','Azetech','Azetech',1692497658445,false,4,467,1428,43,false,457,1418,477,1438,0));
deeds.push(new Deed('Wiseman Place','Wiseman','Wiseman',1692601385250,false,4,1751,860,94,false,1739,844,1763,872,0));
deeds.push(new Deed('Ebony Veil','Lithiea','Lithiea',1693231564151,false,4,828,3061,53,false,798,3031,873,3091,0));
deeds.push(new Deed('Anything Goes Marketplace','Arwen','Tripitaka',1693437752623,false,4,693,1704,352,false,681,1694,708,1716,0));
deeds.push(new Deed('Camelot City','Redock','Redock',1693489347575,false,4,1720,390,180,false,1675,345,1765,435,15));
deeds.push(new Deed('The Tea Gardens','Faenox','Faenox',1693991048663,false,4,1889,3287,174,false,1874,3272,1904,3302,0));
deeds.push(new Deed('Rimouvista','Lynn','Lynn',1694143705117,false,4,685,1529,310,false,680,1524,690,1534,0));
deeds.push(new Deed('Leafcull','Lathe','Lathe',1694279521880,false,4,498,1196,265,false,458,1156,538,1236,0));
deeds.push(new Deed('Down Under','Seria','Seria',1694360679106,false,4,600,1100,230,false,584,1084,624,1116,0));
deeds.push(new Deed('Moonbright','Poptart','Poptart',1694481540286,false,4,1335,3487,45,false,1320,3447,1375,3527,0));
deeds.push(new Deed('Nirv','Nirvfintewil','Nirvfintewil',1694599357115,false,4,467,1360,234,false,462,1335,492,1365,0));
deeds.push(new Deed('Scales','Rooferrob','Rooferrob',1694607926744,false,4,1228,2267,75,false,1217,2256,1239,2278,2));
deeds.push(new Deed('Pizza Pizza Pie','Mendacium','Mendacium',1694808715688,false,4,626,2714,360,false,601,2689,651,2739,0));
deeds.push(new Deed('Spatule','Aubergine','Aubergine',1695049409126,false,4,3729,972,4,false,3724,967,3734,977,0));
deeds.push(new Deed('Camelot','Lorexx','Lorexx',1695055908655,false,4,1062,1053,141,false,1052,1043,1072,1063,10));
deeds.push(new Deed('Riverdale','Xivs','Xivs',1695179017238,false,4,687,1567,268,false,677,1547,717,1597,0));
deeds.push(new Deed('Whisperview Shores','Kamshack','Kamshack',1695246130683,false,4,1000,452,9,false,990,442,1010,462,0));
deeds.push(new Deed('Treehugger','Alux','Alux',1695404207147,false,4,2129,3507,89,false,2118,3499,2141,3515,0));
deeds.push(new Deed('Magreen\'s','Magreen','Magreen',1695703851054,false,4,772,1119,36,false,767,1114,777,1124,0));
deeds.push(new Deed('Azure','Imdolin','Imdolin',1695705199078,false,4,2591,1810,50,false,2581,1800,2601,1820,0));
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
guardTowers.push(new GuardTower('',95145855,4,1354,448,151,''));
guardTowers.push(new GuardTower('',148518821,4,2129,3507,89,''));
signs.push(new Sign('',73992809,1696,1690,491,'Archaeological Site - The Bakery'));
highwayNodes = [
   [1112,1694,62,1117,1689,62],[1250,636,466,677,636,221,1],[626,1699,66,1],[1250,500,218,1250,1693,184,1],[1250,500,218,1463,500,327,1],
   [644,1694,66,1],[1464,440,109,1464,499,326,1],[3369,1689,340,3369,580,42,1],[625,1842,284,626,1843,284],[631,1694,66,1112,1694,62],
   [628,1695,66,626,1697,66],[630,1695,66,628,1695,66],[630,1695,66,631,1694,66],[702,636,171,701,635,171],[369,2432,98,626,2432,431,1],
   [625,2432,431,626,2433,428],[626,2432,431,369,2432,98,1],[701,636,171,701,626,162,1],[677,637,221,678,636,221],[677,1587,270,676,1586,269],
   [1250,501,220,1251,500,219],[1250,637,467,1249,636,467],[1464,499,326,1463,500,327],[1464,500,327,1],[420,2714,22,1],
   [626,2714,360,419,2714,22,1],[571,1765,71,626,1765,140,1],[626,1765,140,571,1765,71,1],[625,1765,140,626,1766,140],[626,2715,360,625,2714,360],
   [933,2157,227,1],[626,2157,405,937,2157,210,1],[627,2157,405,626,2158,405],[1250,1690,198,1249,1689,198],[1251,1689,198,1250,1690,198],
   [1251,1689,198,1250,1688,198],[677,1694,279,677,636,221,1],[3401,1292,135,1],[3369,1292,281,3402,1292,135,1],[1284,1690,228,1283,1689,228],
   [1284,1690,228,1285,1689,228],[3369,1688,340,3370,1689,340],[3781,1689,83,1117,1689,62],[3370,1292,281,3369,1293,281],[1284,1688,228,1285,1689,228],
   [678,1694,279,677,1693,279],[1522,1689,396,1],[1284,1689,228,1],[1250,1689,198,1],[1284,1757,62,1284,1756,62],
   [1284,1754,65,1284,1688,228,1],[1118,2897,160,775,2897,10,1],[1114,2896,160,1115,2897,160],[1114,2897,160,1114,2896,160],[1116,2894,160,1114,2896,160],
   [1118,2894,160,1116,2894,160],[1113,2897,160,1],[700,2897,10,701,2897,10],[663,2897,10,662,2897,10],[738,2897,10,739,2897,10],
   [626,2897,10,626,2896,10,1],[626,2874,10,626,1697,66],[677,1586,269,643,1586,124,1],[3520,1688,156,3521,1689,156],[3520,1689,156,3520,1664,78,1],
   [3520,1664,78,3520,1689,156,1],[691,1694,335,692,1695,335,1],[692,1695,335,693,1694,335],[692,1699,352,692,1694,335,1],[536,1842,90,626,1842,284,1],
   [626,1842,284,536,1842,90,1],[1219,2266,76,1099,2266,187,1],[1100,2266,190,1099,2267,192],[1099,2280,213,1098,2281,214],[1099,2280,213,1099,2266,187],
   [914,2157,287,914,2280,268,1],[915,2281,269,1098,2281,214],[914,2280,268,915,2281,269],[914,2158,288,913,2157,288],[914,2158,288,915,2157,284]
];
bridgeNodes = [
   [664,2897,10,699,2897,11],[627,2897,10,661,2897,11],[737,2897,11,702,2897,10],[740,2897,10,774,2897,11],[626,2898,10,627,2897,10],
   [626,2875,10,626,2895,11],[626,2908,82,626,2898,10]
];
tunnelNodes = [
   [3782,1689,76,3785,1689,74]
];
var timestamp = 1695727340989;

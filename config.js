
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
deeds.push(new Deed('Guppy Green','Drazin','Drazin',1676850955261,false,4,1055,1888,66,false,1048,1881,1062,1899,0));
deeds.push(new Deed('Versailles','Cierra','Cierra',1677018567781,false,4,3462,1291,50,false,3393,1211,3498,1371,10));
deeds.push(new Deed('Lake View','Missnobody','Missnobody',1683826579832,false,4,1283,1776,40,false,1258,1753,1311,1800,5));
deeds.push(new Deed('Whitespire','Plebcicle','Plebcicle',1685375454642,false,4,764,2818,215,false,734,2788,794,2848,0));
deeds.push(new Deed('Danger Island','Dragon','Dragon',1685437803428,false,4,2500,175,298,false,2418,94,2581,255,5));
deeds.push(new Deed('Nirvus Lakeside','Nirvus','Nirvus',1687399072815,false,4,1280,2370,153,false,1260,2350,1300,2390,0));
deeds.push(new Deed('Brolo','Danious','Danious',1687708939163,false,4,1951,2000,40,false,1936,1990,1976,2010,5));
deeds.push(new Deed('Atlantis','Smokeyboy','Smokeyboy',1687873514023,false,4,516,1787,24,false,466,1767,536,1842,0));
deeds.push(new Deed('Liberty','Metrix','Metrix',1688807920221,false,4,1167,2911,170,false,1117,2896,1217,3046,0));
deeds.push(new Deed('Deepfall Hollows','Tatang','Tatang',1688811875716,false,4,988,2607,486,false,977,2596,999,2618,0));
deeds.push(new Deed('James Beach','James','James',1689465117681,false,4,1128,3219,42,false,1118,3209,1138,3229,0));
deeds.push(new Deed('The Temple Of Roses','Nabeel','Nabeel',1689912801478,false,4,3016,338,120,false,2866,308,3031,424,0));
deeds.push(new Deed('Pontah','Kenetto','Kenetto',1689923468192,false,4,601,2156,404,false,591,2146,611,2166,0));
deeds.push(new Deed('Ottawa','Ottawajohn','Ottawajohn',1690217023423,false,4,1229,1701,173,false,1221,1660,1248,1713,0));
deeds.push(new Deed('This Place','Adiss','Adiss',1691180574733,false,4,1283,1097,436,false,1253,1077,1313,1117,0));
deeds.push(new Deed('Principate Of Orda','Garrick','Garrick',1692053847469,false,4,1120,1767,1,false,1060,1689,1180,1845,0));
deeds.push(new Deed('Anything Goes Marketplace','Arwen','Tripitaka',1693437752623,false,4,693,1704,352,false,681,1694,708,1716,0));
deeds.push(new Deed('Down Under','Seria','Seria',1694360679106,false,4,600,1100,230,false,575,1075,660,1125,5));
deeds.push(new Deed('Nirv','Nirvfintewil','Nirvfintewil',1694599357115,false,4,467,1360,234,false,462,1335,492,1365,0));
deeds.push(new Deed('Scales','Rooferrob','Rooferrob',1694607926744,false,4,1228,2267,75,false,1213,2252,1245,2282,2));
deeds.push(new Deed('Camelot','Lorexx','Lorexx',1695055908655,false,4,1062,1053,141,false,1042,1033,1082,1073,10));
deeds.push(new Deed('Farnhams Freehold','Friday','Friday',1697202593766,false,4,2595,1812,50,false,2589,1794,2605,1823,0));
deeds.push(new Deed('Daedalus','Tralen','Tralen',1697735061545,false,4,1711,992,272,false,1681,971,1731,1003,0));
deeds.push(new Deed('The Good Place','Lexi','Lexi',1699120051830,false,4,570,1751,48,false,557,1736,590,1776,0));
deeds.push(new Deed('Sugarloaf','Sinner','Sinner',1699508473337,false,4,1138,1992,10,false,1113,1967,1163,2017,5));
deeds.push(new Deed('Psikutas','Mlemow','Mlemow',1700109090524,false,4,355,1956,13,false,315,1936,395,1976,5));
deeds.push(new Deed('Walnut Grove','Lanika','Lanika',1700336682696,false,4,636,2830,64,false,628,2812,644,2841,5));
deeds.push(new Deed('Ravensberg','Ashdoran','Ashdoran',1700770483526,false,4,957,1351,123,false,947,1341,967,1361,0));
deeds.push(new Deed('Shivasprings','Shiva','Shiva',1701347273223,false,4,2824,2245,55,false,2804,2225,2836,2265,0));
deeds.push(new Deed('Wolfmere','Wolfdangler','Wolfdangler',1702816986078,false,4,882,927,38,false,872,917,892,937,0));
deeds.push(new Deed('Saranda','Venomus','Venomus',1704255222766,true,4,744,620,60,false,727,590,761,628,0));
deeds.push(new Deed('Canada','Localreporter','Localreporter',1704565605552,false,4,702,619,150,false,697,614,712,634,0));
deeds.push(new Deed('Menen','Puabi','Puabi',1704606536421,true,4,1249,395,39,false,1214,360,1264,409,0));
deeds.push(new Deed('Snack Shack','Forbus','Forbus',1704933870206,false,4,540,2728,142,false,530,2715,550,2738,0));
deeds.push(new Deed('The Cove','Xivs','Xivs',1705604741481,false,4,1516,2186,74,false,1466,2136,1566,2236,0));
deeds.push(new Deed('Northlake','Kubst','Kubst',1705870243879,false,4,1889,1778,125,false,1869,1748,1909,1798,0));
deeds.push(new Deed('Garden Manor','November','November',1705956058954,false,4,482,3054,97,false,462,3034,509,3074,0));
deeds.push(new Deed('Peace Passage','Icebeard','Icebeard',1706402543323,false,4,706,1658,336,false,701,1653,711,1663,0));
deeds.push(new Deed('Ore','Steve','Steve',1707706848566,false,4,1347,2104,51,false,1317,2074,1377,2134,5));
deeds.push(new Deed('Blood','Sandra','Sandra',1708139079416,false,4,1349,472,200,false,1304,427,1368,497,0));
deeds.push(new Deed('R\'lyeh','Cthulhuhoop','Cthulhuhoop',1709083452373,false,4,369,2423,106,false,324,2378,414,2468,0));
deeds.push(new Deed('Flying K Ranch','Krockett','Krockett',1709943989127,false,4,390,2046,83,false,316,2012,455,2080,0));
deeds.push(new Deed('Garden Of The Goods','Gardenkeeper','Gardenkeeper',1710167444427,false,4,838,1040,40,false,828,1030,848,1050,0));
deeds.push(new Deed('Between Two Clays','Malgaroth','Malgaroth',1710543916276,false,4,535,3582,148,false,525,3572,545,3592,1));
deeds.push(new Deed('Hickery Medows','Tipsy','Tipsy',1711210398413,false,4,718,1220,192,false,708,1215,723,1230,0));
deeds.push(new Deed('Southfork','Asmodeus','Asmodeus',1712520764788,false,4,2099,3375,55,false,2094,3365,2104,3380,0));
deeds.push(new Deed('Site','Goha','Goha',1712754307418,false,4,1711,783,111,false,1706,778,1716,788,0));
deeds.push(new Deed('Holdout','Stern','Stern',1713084654945,false,4,630,1535,150,false,625,1530,635,1540,0));
deeds.push(new Deed('Under','Under','Under',1713965840320,false,4,684,3516,58,false,674,3506,694,3526,0));
deeds.push(new Deed('Stormcrow Estate','Bryncai','Bryncai',1714003070950,false,4,643,2218,378,false,633,2208,653,2228,0));
deeds.push(new Deed('Lex\'shovel','Lexrohr','Lexrohr',1714139157094,false,4,1750,1398,461,false,1745,1393,1755,1403,0));
deeds.push(new Deed('Khazad Dum','Duregar','Duregar',1714528089373,false,4,594,1873,228,false,569,1848,619,1898,0));
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
guardTowers.push(new GuardTower('',152355628,4,679,1476,295,''));
guardTowers.push(new GuardTower('',155870774,4,679,1375,253,''));
guardTowers.push(new GuardTower('',186405703,4,592,1739,52,''));
guardTowers.push(new GuardTower('',207066333,4,628,2835,64,''));
guardTowers.push(new GuardTower('',208632947,4,2433,1686,166,''));
signs.push(new Sign('',73992809,1696,1690,491,'Archaeological Site - The Bakery'));
signs.push(new Sign('',120285188,620,1607,8,'MAX QL 99'));
signs.push(new Sign('',120285224,621,1607,8,'MAX QL 85'));
signs.push(new Sign('',120285281,621,1608,8,'MAX QL 83'));
signs.push(new Sign('',120291068,618,1609,8,'MAX QL 99'));
signs.push(new Sign('',120343022,622,1594,8,'SILVER                         MAX QL 60'));
signs.push(new Sign('',120343082,628,1607,9,'MAX QL 95'));
signs.push(new Sign('',120343133,625,1587,8,'SILVER                    MAX QL 89'));
signs.push(new Sign('',120343272,634,1574,8,'SLATE                       MAX QL 99'));
signs.push(new Sign('',120343359,629,1603,8,'QL 93+ rocks to left and right'));
signs.push(new Sign('',120343786,633,1609,8,'SILVER                     MAX QL 89'));
signs.push(new Sign('',120343891,628,1586,8,'SILVER                    MAX QL 96'));
signs.push(new Sign('',134115252,347,1288,115,'MINE'));
signs.push(new Sign('',134115292,346,1289,115,'MINE'));
signs.push(new Sign('',143105224,609,1570,29,'Strong Leg Muscles'));
signs.push(new Sign('',274224399,627,2218,372,'Stormcrow Estate'));
highwayNodes = [
   [1112,1694,62,1117,1689,62],[1250,636,466,677,636,221,1],[626,2009,451,627,2008,451],[626,1699,66,1],[1250,500,218,1463,500,327,1],
   [644,1694,66,1],[1464,440,109,1464,499,326,1],[3369,1689,340,3369,580,42,1],[625,1842,284,626,1843,284],[631,1694,66,1112,1694,62],
   [628,1695,66,626,1697,66],[630,1695,66,628,1695,66],[630,1695,66,631,1694,66],[702,636,172,701,635,171],[625,2432,431,626,2433,428],
   [626,2432,431,370,2432,102,1],[701,636,172,701,626,162,1],[677,637,221,678,636,221],[677,1587,270,676,1586,269],[1250,501,220,1251,500,219],
   [1250,637,467,1249,636,467],[1464,499,326,1463,500,327],[1464,500,327,1],[420,2714,22,1],[626,2714,360,419,2714,22,1],
   [571,1765,71,626,1765,140,1],[626,1765,140,571,1765,71,1],[625,1765,140,626,1766,140],[626,2715,360,625,2714,360],[933,2157,227,1],
   [626,2157,405,937,2157,210,1],[627,2157,405,626,2158,405],[1250,1690,198,1249,1689,198],[1251,1689,198,1250,1690,198],[1251,1689,198,1250,1688,198],
   [677,1694,278,677,636,221,1],[3401,1292,135,1],[3369,1292,281,3402,1292,135,1],[1284,1690,228,1283,1689,228],[1284,1690,228,1285,1689,228],
   [3369,1688,340,3370,1689,340],[3781,1689,83,1117,1689,62],[3370,1292,281,3369,1293,281],[1284,1688,228,1285,1689,228],[678,1694,278,677,1693,279],
   [1522,1689,396,1],[1284,1689,228,1],[1250,1689,198,1],[1284,1757,62,1284,1756,62],[1284,1754,65,1284,1688,228,1],
   [1118,2897,160,775,2897,10,1],[1114,2896,160,1115,2897,160],[1114,2897,160,1114,2896,160],[1116,2894,160,1114,2896,160],[1116,2894,160,1117,2894,160],
   [1113,2897,160,1],[700,2897,10,701,2897,10],[663,2897,10,662,2897,10],[738,2897,10,739,2897,10],[626,2897,10,626,2896,10,1],
   [626,2874,10,626,1697,66],[677,1586,269,643,1586,124,1],[3520,1688,156,3521,1689,156],[3520,1689,156,3520,1667,79,1],[691,1694,335,692,1695,335,1],
   [692,1695,335,693,1694,335],[692,1699,352,692,1694,335,1],[536,1842,90,626,1842,284,1],[626,1842,284,536,1842,90,1],[743,626,92,743,636,102,1],
   [1219,2266,76,1099,2266,187,1],[1100,2266,190,1099,2267,192],[1099,2280,213,1098,2281,214],[1099,2280,213,1099,2266,187],[914,2157,287,914,2280,268,1],
   [915,2281,269,1098,2281,214],[914,2280,268,915,2281,269],[914,2158,288,913,2157,288],[914,2158,288,915,2157,284],[1356,500,284,1],
   [1061,1048,141,1250,1048,344,1],[1250,1048,344,1061,1048,141,1],[1249,1048,344,1250,1049,344],[1982,1689,366,1982,1354,261,1],[1982,1688,366,1983,1689,366],
   [1139,2008,10,626,2008,449,1],[626,2008,449,1139,2008,10,1],[743,635,102,744,636,100],[743,636,102,743,626,92,1],[1250,405,40,1250,1693,184,1]
];
bridgeNodes = [
   [664,2897,10,699,2897,11],[627,2897,10,661,2897,11],[737,2897,11,702,2897,10],[740,2897,10,774,2897,11],[626,2898,10,627,2897,10],
   [626,2875,10,626,2895,11],[626,2908,82,626,2898,10]
];
tunnelNodes = [
   [3782,1689,76,3785,1689,74]
];
var timestamp = 1715343621739;

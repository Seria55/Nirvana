// Locate Soul Assitant (LSA for short)
// Originaly Made by Bannaner, Updates and GUI by Axeblade346
//____________________________________________________________

// Message to SERVER OWNERS from Axeblade346
// Programs / Scripts like this has been around since I originaly made the searchable Delevirance map website back in late 2011.
// I used tansparent image overlays to mark the deeds, others basicly used my code and just overlay images of archs.
// I have seen it pop up on a russian site for another games web map (and their code works on our webmaps withy a few oddities) and a few days later Bannaner showed me his version.
// As this can`t be deteced and can`t be stopped I deciced to level the playing field and make an easy to use public version so that all the players can be on a level playing field.
//______________


//This uses Canvas to draws an filled in arc segment over the map to assist you with locate soul and any thing that uses locate soul as a base like Treasure maps (Public Mod).
//Overlaying a few of these arcs assist in narrowing down the area alot faster untill you get close. 4 locate soul cast from the corners of a map and this could narrow down a corpse to within 40 tiles on a 4096 x 4096 map.
// Tested with the OLD Wyvern WEB Map and the recent Kenabil Web Map (https://github.com/awakening-wurm/MapViewer)
//______________

// Thanks to The Scallywag server (Owner:Killem) for allowing me test on their server and the players for thier feedback.
//______________


//Version Notes.
//1 - Base code done by Bannaner
//2 - Updated it from a GreaseMonkey to Javascript for use in chrome - Axeblade346
//3 - Added usage comments and guide - Axeblade346
//4 - Added the ls funtion so only X Y and event message is needed - Axeblade346
//Todo:
// Intergration into the Kenabil Web Map
// User interface so console is not needed
// Figure out how to clear the canvis without clearing the maps images too.
//______________



//For ease of use always look North and use 0 as the facingdirection
//xpos = Your X position on the map (can used decimals)
//ypos = Your Y position on the map (can used decimals)
//facingdirection = The Angle you are looking in (compass angle like 36.9, not N S E W)
//scrolldirection works on a number system
//-- In Front = 0
//-- Ahead right = 1
//-- Right = 2
//-- Behind Right = 3
//-- Behind = 4
//-- Behind Left = 5
//-- Left = 6
//-- Ahead Left = 7
//scrolldistancemin = Minimum range of Locate soul as per https://www.wurmpedia.com/index.php/Locate_soul#Distances
//scrolldistancemax = Maximum range of Locate soul as per https://www.wurmpedia.com/index.php/Locate_soul#Distances

(function(global) {

    function drawLocateSoul(xpos,ypos,facingdirection,scrolldirection,scrolldistancemin,scrolldistancemax) {

        var canvas = document.getElementById('map')
        var can = canvas.getContext('2d');

        //Draw the closer distance
        var startang = (-facingdirection+scrolldirection*45-90-22.5)*Math.PI/180;
        var endang = (-facingdirection+scrolldirection*45-90+22.5)*Math.PI/180;
        can.beginPath();
        can.arc(xpos,ypos,scrolldistancemin,startang,endang,false)
        //Draw the closer distance
        can.arc(xpos,ypos,scrolldistancemax,endang,startang,true)
        //Go back to the starting arc but with no arcing, just a point to close the shape
        can.arc(xpos,ypos,scrolldistancemin,startang,startang,false)
        can.closePath()

        can.strokeStyle = 'red';
        can.lineWidth = 1;
        can.globalAlpha = 1;
        can.globalCompositeOperation = 'source-over';
        can.stroke();
        can.globalAlpha = 0.1;
        can.fillStyle = 'yellow';
        can.globalCompositeOperation = 'source-atop';
        can.fill();
        can.fillStyle = 'green';
        can.globalCompositeOperation = 'destination-over';
        can.fill();
        can.globalAlpha = 1;

        //Draw a blue centre line to assits with direct directions like lightning marking a spot.
        var midang = (-facingdirection+scrolldirection*45-90)*Math.PI/180;
        can.beginPath();
        can.arc(xpos,ypos,scrolldistancemin,midang,midang,false)
        can.arc(xpos,ypos,scrolldistancemax,midang,midang,false)
        can.closePath()

        can.strokeStyle = 'blue';
        can.lineWidth = 1;
        can.globalAlpha = 0.3;
        can.globalCompositeOperation = 'source-over';
        can.stroke();
    }

//______________

//This allows the user to just enter the X and Y and eventmessage and accepts the player is looking NORTH

//Note the order of the if/elseif is spesificly odd due to the fact that that some strings contain the same words

//directions
//0 = The marked spot is in front of you a stone's throw away!
//1 = The marked spot is ahead of you to the right a stone's throw away!
//2 = The marked spot is to the right of you a stone's throw away!
//3 = The marked spot is behind you to the right very close.
//4 = The marked spot is quite some distance away behind you.
//5 = The marked spot is quite some distance away behind you to the left.
//6 = The marked spot is pretty far away to the left of you.
//7 = The marked spot is ahead of you to the left fairly close by.
//----
//distances
// 0 tiles				You are practically standing on the <player>!
// 1-3 tiles			The <player> is in front of you a stone's throw away!
// 4-5 tiles			The <player> is in front of you very close.
// 6-9 tiles			The <player> is in front of you pretty close by.
// 10-19 tiles			The <player> is in front of you fairly close by.
// 20-49 tiles			The <player> is some distance away in front of you.
// 50-199 tiles			The <player> is quite some distance away in front of you.
// 200-499 tiles		The <player> is rather a long distance away in front of you.
// 500-999 tiles		The <player> is pretty far away in front of you.
// 1000 to 1999 tiles	The <player> is far away in front of you.
// 2000+				The <player> is very far away in front of you.

    const directions = {
        'ahead of you to the right': 1,
        'behind you to the right': 3,
        'behind you to the left': 5,
        'ahead of you to the left': 7,
        'in front of you': 0,
        'right of you': 2,
        'behind you': 4,
        'left of you': 6
    };
    const distances = {
        'practically standing': {
            smin: 0,
            smax: 0
        },
        'stone\'s throw away': {
            smin: 1,
            smax: 3
        },
        'very close': {
            smin: 4,
            smax: 5
        },
        'pretty close by': {
            smin: 6,
            smax: 9
        },
        'fairly close by': {
            smin: 10,
            smax: 19
        },
        'quite some distance': {
            smin: 50,
            smax: 199
        },
        'some distance': {
            smin: 20,
            smax: 49
        },
        'rather a long distance': {
            smin: 200,
            smax: 499
        },
        'pretty far away': {
            smin: 500,
            smax: 999
        },
        'very far away': {
            smin: 2000,
            smax: 10000
        },
        'far away': {
            smin: 1000,
            smax: 1999
        }
    };

    const addonId = 'lsaAddon';
    let nodes = [];

    function ls(eventmessage) {
        let str = eventmessage;
        let params = {
            sd: -1,
            smin: -1,
            smax: -1
        }
        for(let d in directions) {
            if(str.includes(d)) {
                params.sd = directions[d];
                break;
            }
        }
        for(let d in distances) {
            if(str.includes(d)) {
                let distance = distances[d];
                params.smin = distance.smin;
                params.smax = distance.smax;
                break;
            }
        }
        return params;
    }

    document.addEventListener('mapLoaded',(event) => {
        let map = event.detail.map;
        let instructions = '<p>By: Axeblade, 2021</p>' +
                           '<h2>About This Addon</h2>' +
                           '<p>It draws the area on the map of anything that uses locate soul - or a similar ' +
                           'method of finding a location, as a base to help you find the location faster.</p>' +
                           '<h2>How To Use</h2>' +
                           '<p>Place a pointer on the map, then in Wurm: make sure you face north and ' +
                           'get the directions instruction in your events log, copy the message and then ' +
                           'paste into the search field in the map viewer. This will draw on the map the ' +
                           'area where you can expect to find the location you are looking for.</p>' +
                           '<p>If the <b>Compass</b> addon is installed, then you don\'t have to face north and ' +
                           'instead rotate the compass to the same direction your compass in Wurm is pointing.</p>' +
                           '<p>Applications where you will get direction messages includes using the "Locate soul" ' +
                           'spell, finding branded animals, and some treasure-map mods.</p>' +
                           '<h3>Example:</h3>' +
                           '<p>Let\'s say you are looking for a lost branded horse - face north, then in your ' +
                           'Inventory menu select Manage->Animals, check the selected animal and click "Give ' +
                           'direction to". In your event log you get the message: <i>"The venerable fat Bucephalus ' +
                           'is quite some distance away to the right of you."</i> which you copy. You place a pointer ' +
                           'by clicking on the tile you are standing and paste the message into the search field in ' +
                           'the map viewer and press enter, and the area to search is drawn on the map.</p>' +
                           '<h2>Special Thanks</h2>' +
                           '<ul>' +
                           '<li>Bannaner - GreaseMonkey version developer</li>' +
                           '<li>Killem & the Scallywag Server - for being the testers and allowing this to be used ' +
                           'on their server</li>' +
                           '<li>Kenabil - for spending the time to add it the his map viewer</li>' +
                           '<li>Budda & the KangaWu Server - For just being a great community that I also play with. ' +
                           '(No Budda, I haven`t been scrolling with this)</li>' +
                           '</ul>';
        map.addBadge('Locate Soul Assistant','addons/lsa.png',instructions);

        map.addLayer(addonId,"Locate Soul Assistant",function(map,element) {
            if(!map.layer(addonId)) nodes = [];
            return true;
        });
    });

    document.addEventListener('mapSearch',(event) => {
        let config = event.detail.config;
        let text = config.searchbox.value;
        let node = ls(text);
        if(node.sd===-1 || node.smin===-1 || node.smax===-1) return;
        let map = event.detail.map;
        if(map.pointer.x===-1 || map.pointer.y===-1) {
            map.addNotification('You should place a pointer first, left click on the map.');
        } else {
            node.x = map.pointer.x;
            node.y = map.pointer.y;
            node.fd = 0;
            if(typeof map.getCompassDirection === 'function') {
                node.fd = 360.0-map.getCompassDirection();
            }
            nodes.push(node);
            drawLocateSoul(node.x,node.y,node.fd,node.sd,node.smin,node.smax);
            map.layer(addonId,true);
        }
        event.preventDefault();
    });

    document.addEventListener('mapDrawAfter',(event) => {
        let map = event.detail.map;
        if(map.layer(addonId)) {
            for(let i=0; i<nodes.length; ++i) {
                let node = nodes[i];
                drawLocateSoul(node.x,node.y,node.fd,node.sd,node.smin,node.smax);
            }
        }
    });

})(typeof window === 'undefined' ? this : window);


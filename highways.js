
(function(global) {

    const addonId = 'highwaysAddon';

    function drawHighwayNodes(map,nodes,highwayColor,waystoneBorder,waystoneColor) {
        let ctx = map.config.ctx;
        let z = map.mapType==='isometric'? 1/40 : 0;
        ctx.strokeStyle = highwayColor;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        for(let i=0; i<nodes.length; ++i) {
            let n = nodes[i];
            if(n.length>=6) {
                let x1 = n[0],y1 = n[1]-z*n[2];
                let x2 = n[3],y2 = n[4]-z*n[5];
                ctx.moveTo(x1,y1);
                ctx.lineTo(x2,y2);
            }
        }
        ctx.stroke();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = waystoneBorder;
        ctx.fillStyle = waystoneColor;
        for(let i=0; i<nodes.length; ++i) {
            let n = nodes[i];
            if(n.length===4 || n.length===7) {
                let x1 = n[0],y1 = n[1]-z*n[2];
                ctx.beginPath();
                ctx.arc(x1,y1,3,0,2*Math.PI,false);
                ctx.fill();
                ctx.stroke();
            }
        }
    }

    document.addEventListener('mapLoaded',(event) => {
        let map = event.detail.map;
        let instructions = '<p>By: Kenabil, 2021</p>' +
                           '<h2>Instructions</h2>' +
                           '<p>The highways addon draws lines on the map showing where ' +
                           'there are highways and highway signs. There\'s a checkbox ' +
                           'in the layers panel for showing or hiding the highways.</p>' +
                           '<p>Highways in caves and on bridges have a different colour.</p>';
        map.addBadge('Highways','addons/highways.png',instructions);

        map.addLayer(addonId,"Highways",function(map,element) {
            return true;
        });
    });

    document.addEventListener('mapDrawAfter',(event) => {
        let map = event.detail.map;
        if(map.layer(addonId)) {
            drawHighwayNodes(map,highwayNodes,"rgba(255,255,0,0.4)","#cc0000","#cc6600");
            drawHighwayNodes(map,bridgeNodes,"rgba(255,153,255,0.4)","#cc0000","#cc6600");
            drawHighwayNodes(map,tunnelNodes,"rgba(0,255,255,0.4)","#cc0000","#cc6600");
        }
    });

})(typeof window === 'undefined' ? this : window);

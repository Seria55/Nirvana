
(function(global) {

    const addonId = 'kingdomsAddon';

    function drawKingdoms(map) {
        let canvas = document.createElement("canvas");
        let temp = canvas.getContext('2d');
        canvas.width = map.mapImage.img.width;
        canvas.height = map.mapImage.img.height;
        let ctx = map.config.ctx;
        let w = 121;
        let h = 121;
        for(let k=1; k<=20; ++k) {
            let kingdom = map.kingdoms[k];
            if(kingdom===undefined) break;
            temp.fillStyle = kingdom.color;
            temp.beginPath();
            for(let i=0; i<map.guardTowers.length; ++i) {
                let guardTower = map.guardTowers[i];
                if(guardTower.kingdom!==k) continue;
                let x = guardTower.x-60;
                let y = guardTower.y-60;
                if(map.mapType==='isometric') y -= guardTower.z*(1.0/40);
                temp.rect(x,y,w,h);
            }
            temp.fill();
        }
        ctx.globalAlpha = 0.3;
        ctx.drawImage(canvas,0,0);
        ctx.globalAlpha = 1.0;
    }

    document.addEventListener('mapLoaded',(event) => {
        let map = event.detail.map;
        let instructions = '<p>By: Kenabil, 2021</p>' +
                           '<h2>Instructions</h2>' +
                           '<p>The kingdoms addon shows kingdom influence, which is useful ' +
                           'on PvP servers where you only can deed within kingdom influence.</p>' +
                           '<p>Kingdom influence is based on guard towers.</p>';
        map.addBadge('Kingdoms','addons/kingdoms.png',instructions);

        map.addLayer(addonId,"Kingdoms",function(map,element) {
            return true;
        });
    });

    document.addEventListener('mapDrawBefore',(event) => {
        let map = event.detail.map;
        if(map.layer(addonId)) drawKingdoms(map);
    });

})(typeof window === 'undefined' ? this : window);

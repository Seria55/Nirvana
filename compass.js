
(function(global) {

    const addonId = 'compassAddon';
    const directions = 32;
    const degrees = 360.0/32.0;
    let direction = 0;

    document.addEventListener('mapLoaded',(event) => {
        let config = event.detail.config;
        let map = event.detail.map;
        let instructions = '<p>By: Kenabil, 2021</p>' +
                           '<h2>About This Addon</h2>' +
                           '<p>The Compass addon is mainly added as support to other addons, ' +
                           'where you can set the direction of where you\'re looking in the ' +
                           'Wurm client, and other addons will rotate accordingly.</p>' +
                           '<p>The Locate Soul Assistant addon will notice if the Compass addon ' +
                           'has been installed and rotate its output after where the compass ' +
                           'points.</p>' +
                           '<h2>How To Use</h2>' +
                           '<p>Simply click on the compass where you want it to point, or use the ' +
                           'mouse wheel to rotate it.</p>';
        map.addBadge('Compass','addons/compass.png',instructions);

        map.getCompassDirection = function() {
            return direction*degrees;
        }

        function setCompassDirection(map,e,d,s) {
            direction = d;
            while(direction>=directions) direction -= directions;
            while(direction<0) direction += directions;
            compass.style.transitionDuration = s+'s';
            compass.style.transform = 'rotate('+map.getCompassDirection()+'deg)';
            map.layer(addonId,true);
            e.stopPropagation();
        }

        let compass = document.createElement('div');
        compass.id = 'compass';
        compass.onwheel = function(e) {
            setCompassDirection(map,e,direction+(e.deltaY<0? 1 : -1),0);
        }
        compass.onclick = function(e) {
            let x = (e.pageX-compass.offsetLeft)-50.0;
            let y = (e.pageY-compass.offsetTop)-50.0;
            let rad = Math.atan2(y,x);
            let deg = (rad*180.0/Math.PI)+90;
            setCompassDirection(map,e,Math.round(deg/degrees),1);
        }
        config.container.appendChild(compass);

        map.addLayer(addonId,"Compass",function(map,element) {
            compass.style.display = element.checked? 'block' : 'none';
            return false;
        });
    });

})(typeof window === 'undefined' ? this : window);

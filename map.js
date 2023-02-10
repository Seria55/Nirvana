

(function(global) {

    const serverInfo = getServerInfo();

    const zoomLevels = [ 0.25, 0.375, 0.5, 0.75, 1.0, 1.25, 1.5, 2, 3, 4, 6, 8 ];
    const zoomScales = [ '25%', '37.5%', '50%', '75%', '100%', '125%', '150%', '200%', '300%', '400%', '600%', '800%' ];

    const mapEvents = {};

    function getServerInfo() {
        let info = '<h4>'+config.neutralLandName+'</h4>'+
            'Wurm Unlimited Server'+
            '<dl>'+
            '<dt>Kingdoms:</dt>';
        let k = {};
        for(let i=0; i<deeds.length; ++i) {
            let d = deeds[i];
            if(k[d.kingdom]===undefined) {
                k[d.kingdom] = true;
                info += '<dd>'+kingdoms[d.kingdom].name+'</dd>';
            }
        }
        info += '<dt>Deeds: '+deeds.length+'</dt>'+
            '<dt>Guard towers: '+guardTowers.length+'</dt>'+
            '</dl>';
        return info;
    }

    function getFocusZoneInfo(map,focusZone) {
        if(focusZone.infoText===undefined) {
            let deeds = 0;
            for(let i=0; i<map.deeds.length; ++i) {
                let d = map.deeds[i];
                if(d.sx<=focusZone.ex && d.ex>=focusZone.sx &&
                   d.sy<=focusZone.ey && d.ey>=focusZone.sy) ++deeds;
            }
            let guardTowers = 0;
            for(let i=0; i<map.guardTowers.length; ++i) {
                let gt = map.guardTowers[i];
                if(gt.x<=focusZone.ex && gt.x>=focusZone.sx &&
                   gt.y<=focusZone.ey && gt.y>=focusZone.sy) ++guardTowers;
            }
            focusZone.infoText = '<h4>'+focusZone.name+'</h4>'+
                                 '<dl>'+
                                 '<dt>Type: '+map.focusZoneTypes[focusZone.type]+'</dt>'+
                                 '<dt>Deeds: '+deeds+'</dt>'+
                                 '<dt>Guard towers: '+guardTowers+'</dt>'+
                                 '</dl>';
        }
        return focusZone.infoText;
    }

    function getDeedInfo(map,deed) {
        if(deed.infoText===undefined) {
            let type = deed.permanent? 'permanent deed' : 'deed';
            let kingdom = kingdoms[deed.kingdom];
            deed.infoText = '<h4>'+deed.name+'</h4>'+
                            '<dl>'+
                            '<dt>Type: '+type+'</dt>'+
                            '<dt>Mayor: <i>'+deed.mayor+'</i></dt>'+
                            '<dt>Kingdom: <i>'+kingdom.name+'</i></dt>'+
                            '<dt>Founded: '+getDate(deed.creationDate)+'</dt>'+
                            (deed.mayor!==deed.founder? '<dt>Founder: <i>'+deed.founder+'</i></dt>' : '')+
                            '<dt>Token: '+deed.x+', '+deed.y+'</dt>'+
                            '<dt>Size: '+(deed.ex-deed.sx+1)+' x '+(deed.ey-deed.sy+1)+' tiles</dt>'+
                            '</dl>';
        }
        return deed.infoText;
    }

    function getGuardTowerInfo(map,guardTower) {
        if(guardTower.infoText===undefined) {
            guardTower.infoText = '<h4>Guard Tower</h4>'+
                                  '<dl>'+
                                  '<dt>Creator: '+guardTower.owner+'</dt>'+
                                  (guardTower.description? '<dt>Description: <i>'+guardTower.description+'</i></dt>' : '')+
                                  '<dt>Location: '+guardTower.x+', '+guardTower.y+'</dt>'+
                                  '</dl>';
        }
        return guardTower.infoText;
    }

    function getSignInfo(map,sign) {
        if(sign.infoText===undefined) {
            sign.infoText = '<h4>Sign</h4>'+
                            '<dl>'+
                            '<dt>Creator: '+sign.owner+'</dt>'+
                            '<dt>Message:</dt><dd class="sign-info">'+sign.message+'</dd>'+
                            '<dt>Location: '+sign.x+', '+sign.y+'</dt>'+
                            '</dl>';
        }
        return sign.infoText;
    }

    function getWidth() {
        return global.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    function getHeight() {
        return global.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    function getDate(timestamp) {
        let date = new Date(timestamp);
        let yy = date.getFullYear();
        let mm = date.getMonth()+1;
        let dd = date.getDate();
        return yy+'-'+(mm<=9? '0' : '')+mm+'-'+(dd<=9? '0' : '')+dd;
    }

    function parseQueryString(str) {
        let params = {};
        if(str) {
            let a = str.split('&');
            for(let i=0; i<a.length; ++i) {
                let b = a[i].split('=');
                params[b[0]] = b[1];
            }
        }
        return params;
    }

    function toggleClass(element,cl) {
        if(element.classList) element.classList.toggle(cl);
        else {
            var classes = element.className.split(" ");
            var i = classes.indexOf(cl);
            if(i===-1) element.className = classes.push(cl).join(" ");
            else element.className = classes.splice(i, 1).join(" ");
        }
    }

    function addClass(element,cl) {
        if(element.classList) element.classList.add(cl);
        else {
            var classes = element.className.split(" ");
            var i = classes.indexOf(cl);
            if(i===-1) element.className = classes.push(cl).join(" ");
        }
    }

    function removeClass(element,cl) {
        if(element.classList) element.classList.remove(cl);
        else {
            var classes = element.className.split(" ");
            var i = classes.indexOf(cl);
            if(i>=0) element.className = classes.splice(i, 1).join(" ");
        }
    }

    function stopEvent(e) {
        if(e.preventDefault!==undefined) e.preventDefault();
        if(e.stopPropagation!==undefined) e.stopPropagation();
    }

    function filterEmptyValues(o) {
        const array = Object.entries(o);
        const filtered = array.filter(([key, value]) => !!value);
        return Object.fromEntries(filtered);
    }

    function MapImage(url) {
        this.url       = url;
        this.loaded    = false;
        this.attempts  = 0;
        this.img       = null;
    }

    function MapLoader(map,mapImage) {
        this.map = map;
        this.mapImage = mapImage;
        map.mapImage = mapImage;
        this.load = function() {
            let img = new Image();
            img.mapImage = this.mapImage;
            img.loader = this;
            img.onload = function() {
                this.mapImage.img = this;
                this.mapImage.loaded = true;
                this.loader.map.draw();
            }
            let fail = function() {
                this.mapImage.attempts++;
                if(this.mapImage.attempts<4) {
                    this.loader.load(this.mapImage);
                }
            }
            img.onerror = fail;
            img.onabort = fail;
            img.src = mapImage.url;
        }
    }

    function Marker(type,x,y,height,element) {
        this.type     = type;
        this.x        = x;
        this.y        = y;
        this.height   = height;
        this.element  = element;
    }

    function Badge(name,onclick,element) {
        this.name = name;
        this.element = element;
        this.popup = null;
        if(typeof onclick === 'function') {
            this.onclick = onclick;
        } else if(typeof onclick === 'string') {
            this.onclick = function(badge,map) {
                if(badge.popup!==null) return;
                let instructions = onclick;
                let screen = document.createElement('div');
                screen.setAttribute('class','popup-screen');
                let popup = document.createElement('div');
                popup.setAttribute('class','popup');
                popup.innerHTML = '<h1>'+badge.name+'</h1>'+instructions;
                screen.onclick = function(e) {
                    screen.remove();
                    popup.remove();
                    badge.popup = null;
                    e.stopPropagation();
                }
                screen.onwheel = popup.onwheel = function(e) {
                    e.stopPropagation();
                }
                map.config.container.appendChild(screen);
                map.config.container.appendChild(popup);
                badge.popup = popup;
            }
        }
    }

    function Map(config,kingdoms,deeds,focusZones,guardTowers,signs) {
        this.config      = config;
        this.mapImage    = null;
        this.kingdoms    = kingdoms;
        this.deeds       = deeds;
        this.focusDeed   = null;
        this.focusZones  = focusZones;
        this.guardTowers = guardTowers;
        this.signs       = signs;
        this.mapType     = config.mapType;
        this.focusZoneTypes = [
            'none',
            'volcano',
            'PvP zone',
            'name',
            'name',
            'PvE zone',
            'PvP: HotA',
            'PvP: battlecamp',
            'flatten dirt',
            'house, wood',
            'house, stone',
            'premium spawn',
            'no-build',
            'tall walls',
            'fog',
            'flatten rock'
        ];
        this.x          = config.x;
        this.y          = config.y;
        this.zoomIndex  = 4;
        this.zoom       = zoomLevels[this.zoomIndex];
        this.mx         = 0;
        this.my         = 0;
        this.md         = false;
        this.mm         = false;
        this.markers = [];
        this.pointer = new Marker('pointer',-1,-1,0,null);
        this.badges = [];

        this.config.canvas.setAttribute('width',this.config.size);
        this.config.canvas.setAttribute('height',this.config.size);
        this.config.ctx.imageSmoothingEnabled = false;
        this.config.infoDetails.innerHTML = serverInfo;

        this.layer = function(id,checked) {
            let l = this.config.layers[id];
            if(checked!==undefined && l && l.checked!==!!checked) {
                l.checked = !!checked;
                this.updateHash();
            }
            return l && l.checked;
        }

        this.updateHash = function() {
            let map = this;
            let hash = [];
            let p = this.pointer;
            let x = Math.round(this.x/this.zoom);
            let y = Math.round(this.y/this.zoom);
            hash.push('coords='+x+','+y);
            if(p.x!==-1 && p.y!==-1) hash.push('pointer='+p.x+','+p.y);
            else if(this.focusDeed!==null) hash.push('deed='+this.focusDeed.search);
            if(this.zoomIndex!==4) hash.push('z='+this.zoomIndex);
            let i = 0,l = 0;
            for(let id in map.config.layers) {
                if(map.layer(id)) l |= 1<<i;
                ++i;
            }
            if(l>0) hash.push('l='+l);
            if(hash.length>0) {
                hash = hash.join('&');
                if(hash!==global.location.hash) {
                    let url = global.location.href.split('#');
                    global.location.replace(url[0]+'#'+hash);
                }
            }
        }

        this.updateMarker = function(marker) {
            let x = ((marker.x+0.5)*this.zoom)-128;
            let y = ((marker.y+0.5)*this.zoom)-128;
            if(this.mapType==='isometric') y -= marker.height*(this.zoom/40);
            x = Math.round(x);
            y = Math.round(y);
            if(!this.layer('showDeeds') && marker.type==='deed') marker.element.style.display = 'none';
            else marker.element.setAttribute('style','display: block; top: '+y+'px; left: '+x+'px;');
            if(marker.border!==undefined) {
                let w = Math.round(((1+marker.deed.ex-marker.deed.sx)*this.zoom)-2);
                let h = Math.round(((1+marker.deed.ey-marker.deed.sy)*this.zoom)-2);
                let l = Math.floor(128+((marker.deed.sx-marker.deed.x-0.5)*this.zoom));
                let t = Math.floor(128+((marker.deed.sy-marker.deed.y-0.5)*this.zoom));
                let p = (marker.deed.p+5)*this.zoom;
                if(marker.label) marker.label.setAttribute('style','top: '+(y+t)+'px; left: '+(x+l)+'px;');
                if(marker.border) marker.border.setAttribute('style','top: '+t+'px;  left: '+l+'px; width: '+w+'px; height: '+h+'px;');
                if(marker.perimeter) marker.perimeter.setAttribute('style','top: '+(y+t-p)+'px;  left: '+(x+l-p)+'px; width: '+(w+p+p)+'px; height: '+(h+p+p)+'px;display: '+(this.layer('showPerimeters')? 'block' : 'none')+';');
                if(marker.bounds) marker.bounds.setAttribute('style','top: '+(y+t)+'px;  left: '+(x+l)+'px; width: '+w+'px; height: '+h+'px;');
            }
        }

        this.updatePointer = function() {
            if(this.pointer.x!==-1 && this.pointer.y!==-1) {
                let x = Math.round(((this.pointer.x+0.5)*this.zoom)-13);
                let y = Math.round(((this.pointer.y+0.5)*this.zoom)-23);
                this.pointer.element.setAttribute('style','display: block; top: '+y+'px; left: '+x+'px;');
            }
        }

        this.updateMarkers = function() {
            for(let i=0; i<this.markers.length; ++i)
                this.updateMarker(this.markers[i]);
            for(let i=0; i<this.guardTowers.length; ++i) {
                let guardTower = this.guardTowers[i];
                if(!this.layer('showGuardTowers')) guardTower.element.style.display = 'none';
                else {
                    let x = Math.round(((guardTower.x+0.5)*this.zoom)-11);
                    let y = Math.round(((guardTower.y+0.5)*this.zoom)-22);
                    if(this.mapType==='isometric') y -= guardTower.z*(this.zoom/40);
                    guardTower.element.setAttribute('style','display: block; top: '+y+'px; left: '+x+'px;');
                }
            }
            for(let i=0; i<this.signs.length; ++i) {
                let sign = this.signs[i];
                if(!this.layer('showSigns')) sign.element.style.display = 'none';
                else {
                    let x = Math.round(((sign.x+0.5)*this.zoom)-11);
                    let y = Math.round(((sign.y+0.5)*this.zoom)-22);
                    if(this.mapType==='isometric') y -= sign.z*(this.zoom/40);
                    sign.element.setAttribute('style','display: block; top: '+y+'px; left: '+x+'px;');
                }
            }
            this.updatePointer();
        }

        this.createFocusZoneBorder = function(marker,focusZone) {
            if((this.mapType==='terrain' && !this.config.showDeedBordersInFlatMode) ||
               (this.mapType==='topographic' && !this.config.showDeedBordersInFlatMode) ||
               (this.mapType==='isometric' && !this.config.showDeedBordersIn3dMode)) return false;
            marker.border = document.createElement('div');
            marker.border.setAttribute('class','border fzb_'+focusZone.type);
            marker.border.focusZone = focusZone;
//			marker.border.setAttribute('title', focusZone.name);
            let map = this;
            marker.border.addEventListener('mouseover',function(e) {
                map.config.infoDetails.innerHTML = getFocusZoneInfo(map,focusZone);
            });
            marker.border.addEventListener('mouseout',function(e) {
                map.config.infoDetails.innerHTML = serverInfo;
            });
            marker.deed = focusZone;
            return true;
        }

        this.createDeedBounds = function(marker,deed) {
            marker.perimeter = document.createElement('div');
            marker.perimeter.setAttribute('class','perimeter');
            marker.perimeter.deed = deed;
            marker.bounds = document.createElement('div');
            marker.bounds.setAttribute('class','bounds');
            marker.bounds.deed = deed;
            let map = this;
            marker.bounds.addEventListener('mouseover',function(e) {
                map.config.infoDetails.innerHTML = getDeedInfo(map,deed);
            });
            marker.bounds.addEventListener('mouseout',function(e) {
                map.config.infoDetails.innerHTML = serverInfo;
            });
            return true;
        }

        this.createGuardTower = function(element,guardTower) {
            element.guardTower = guardTower;
            let map = this;
            element.addEventListener('mouseover',function(e) {
                map.config.infoDetails.innerHTML = getGuardTowerInfo(map,guardTower);
            });
            element.addEventListener('mouseout',function(e) {
                map.config.infoDetails.innerHTML = serverInfo;
            });
        }

        this.createSign = function(element,sign) {
            element.sign = sign;
            let map = this;
            element.addEventListener('mouseover',function(e) {
                map.config.infoDetails.innerHTML = getSignInfo(map,sign);
            });
            element.addEventListener('mouseout',function(e) {
                map.config.infoDetails.innerHTML = serverInfo;
            });
        }

        this.draw = function() {
            if(this.mapImage===null || this.mapImage.img===null) return;
            let ctx = this.config.ctx;
            ctx.globalAlpha = 1.0;
            ctx.drawImage(this.mapImage.img,0,0);
            this.config.mapFile.href = this.mapImage.url;
            document.dispatchEvent(mapEvents.mapDrawBefore);
            document.dispatchEvent(mapEvents.mapDrawAfter);
        }

        this.go = function(x,y) {
            this.x = x*this.zoom;
            this.y = y*this.zoom;
            this.update();
        }

        this.mouseToTileX = function(mx) {
            return Math.floor((this.x+mx-(getWidth()/2))/this.zoom);
        }

        this.mouseToTileY = function(my) {
            return Math.floor((this.y+my-(getHeight()/2))/this.zoom);
        }

        this.touchDown = function(mx,my) {
            let element = global.document.elementFromPoint(mx,my);
            let infoText = serverInfo;
            if(element) {
                if(element.focusZone) infoText = getFocusZoneInfo(map,element.focusZone);
                else if(element.deed) infoText = getDeedInfo(map,element.deed);
                else if(element.guardTower) infoText = getGuardTowerInfo(map,element.guardTower);
                else if(element.sign) infoText = getSignInfo(map,element.sign);
            }
            map.config.infoDetails.innerHTML = infoText;
        }

        this.mouseDown = function(mx,my,button,touch) {
            if(button===0) {
                this.config.list.style.display = 'none';
                this.mx = mx;
                this.my = my;
                this.md = true;
                this.mm = false;
            }
        }

        this.mouseMove = function(mx,my) {
            if(!this.md) {
                mx = this.mouseToTileX(mx);
                my = this.mouseToTileY(my);
                this.config.coordsMouse.innerHTML = mx+', '+my;
                if(this.pointer.x!==-1 && this.pointer.y!==-1) {
                    let dx = Math.abs(this.pointer.x-mx);
                    let dy = Math.abs(this.pointer.y-my);
                    let d = dx===0? dy : (dy===0? dx : Math.round(Math.sqrt(dx*dx+dy*dy)));
                    this.config.coordsDistance.innerHTML = d+' ['+dx+', '+dy+']';
                }
                return false;
            }
            let dx = mx-this.mx;
            let dy = my-this.my;
            this.mx = mx;
            this.my = my;
            this.mm = true;
            this.go((this.x-dx)/this.zoom,(this.y-dy)/this.zoom);
            return true;
        }

        this.mouseUp = function(button,touch) {
            if(button===0) {
                if(this.md===false) return false;
                this.md = false;
                if(this.mm===false) {
                    let px = this.mouseToTileX(this.mx);
                    let py = this.mouseToTileY(this.my);
                    if((px===this.pointer.x && py===this.pointer.y) || (touch && this.pointer.x!== -1 && this.pointer.y!== -1)) {
                        px = -1;
                        py = -1;
                    }
                    this.setPointer(px,py);
                }
            } else if(button===2) {
                this.setPointer(-1,-1);
            }
            this.updateHash();
            return true;
        }

        this.setPointer = function(px,py) {
            this.leaveDeed();
            this.pointer.x = px;
            this.pointer.y = py;
            if(px!==-1 && py!==-1) {
                addClass(this.config.coords,'pointer-set');
                this.config.coordsPointer.innerHTML = this.pointer.x+', '+this.pointer.y;
                this.config.coordsDistance.innerHTML = '0 [0, 0]';
                let deed = this.getDeed(px,py);
                if(deed) this.setFocusDeed(deed);
                this.updatePointer();
            } else {
                removeClass(this.config.coords,'pointer-set');
                this.pointer.element.style.display = 'none';
            }
        }

        this.update = function() {
            this.clamp();
            let width = getWidth();
            let height = getHeight();
            let s = this.config.size*this.zoom;
            let style = 'width: '+s+'px; height: '+s+'px; top: '+Math.round((height/2)-this.y)+'px; left: '+Math.round((width/2)-this.x)+'px;';
            this.config.markers.setAttribute('style',style);
            if(Math.round(this.zoom)!==this.zoom) style += ' image-rendering: auto; -ms-interpolation-mode: auto;';
            this.config.canvas.setAttribute('style',style);
            this.config.markers.setAttribute('class','zoom'+this.zoomIndex);
            this.config.zoomScale.innerHTML = zoomScales[this.zoomIndex];
        }

        this.clamp = function() {
            if(this.x<0) this.x = 0;
            if(this.y<0) this.y = 0;
            if(this.x>=this.config.size*this.zoom) this.x = this.config.size*this.zoom;
            if(this.y>=this.config.size*this.zoom) this.y = this.config.size*this.zoom;
        }

        this.zoomIn = function(mx,my) {
            if(this.zoomIndex===zoomLevels.length-1) return;
            this.zoomIndex++;
            this.zoomUpdate(mx,my);
            this.updateHash();
        }

        this.zoomOut = function(mx,my) {
            if(this.zoomIndex===0) return;
            this.zoomIndex--;
            this.zoomUpdate(mx,my);
            this.updateHash();
        }

        this.zoomUpdate = function(mx,my) {
            let z = this.zoom,w = getWidth(),h = getHeight(),w2 = w*0.5,h2 = h*0.5;
            let cx = this.x/z,cy = this.y/z;
            this.zoom = zoomLevels[this.zoomIndex];
            if(mx===undefined && my===undefined) {
                mx = w2;
                my = h2;
            }
            this.x = ((cx-w2/z)+mx/z)*this.zoom-mx+w2;
            this.y = ((cy-h2/z)+my/z)*this.zoom-my+h2;
            this.updateMarkers();
            this.update();
        }

        this.autocomplete = function() {
            let text = this.config.searchbox.value.replace(/[^a-zA-Z]/g,'').toLowerCase();
            if(text==='') {
                this.config.list.setAttribute('style','display: none;');
                return;
            }
            this.config.list.setAttribute('style','display: block;');
            let html = '';
            for(let i=0; i<this.deeds.length; ++i)
                if(this.deeds[i].search.indexOf(text)===0)
                    html += '<div onclick="config.map.findDeed('+i+');">'+this.deeds[i].name+'</div>';
            for(let i=0; i<this.deeds.length; ++i)
                if(this.deeds[i].search.indexOf(text)>=1)
                    html += '<div onclick="config.map.findDeed('+i+');">'+this.deeds[i].name+'</div>';
            this.config.list.innerHTML = html;
        }

        this.getDeed = function(x,y) {
            for(let i=0; i<this.deeds.length; ++i)  {
                let d = this.deeds[i];
                if(x>=d.sx && y>=d.sy && x<=d.ex && y<=d.ey) return d;
            }
            return null;
        }

        this.search = function() {
            let text = this.config.searchbox.value.replace(/[^a-zA-Z]/g,'').toLowerCase();
            this.config.list.setAttribute('style','display: none;');
            for(let i=0; i<this.deeds.length; ++i)
                if(this.deeds[i].search.indexOf(text)===0) {
                    this.findDeed(i);
                    return;
                }
            for(let i=0; i<this.deeds.length; ++i)
                if(this.deeds[i].search.indexOf(text)>=1) {
                    this.findDeed(i);
                    return;
                }
        }

        this.getDeedIndex = function(d) {
            if(typeof d === 'object' || typeof d === 'string') {
                for(let i=0; i<this.deeds.length; ++i)
                    if(this.deeds[i]===d || this.deeds[i].search===d) return i;
            } else {
                d = d*1;
                if(d>=0 && d<this.deeds.length) return d;
            }
            return false;
        }

        this.findDeed = function(d) {
            this.gotoDeed(d);
            this.updateHash();
        }

        this.leaveDeed = function() {
            if(this.focusDeed) {
                removeClass(this.focusDeed.marker.border,'selected');
                this.focusDeed = null;
            }
        }

        this.gotoDeed = function(d) {
            this.config.list.setAttribute('style','display: none;');
            this.config.searchbox.value = '';
            this.leaveDeed();
            this.setPointer(-1,-1);
            if(this.setFocusDeed(d))
                this.go(this.focusDeed.x,this.focusDeed.y);
        }

        this.setFocusDeed = function(d) {
            d = this.getDeedIndex(d);
            if(d===false) return false;
            this.focusDeed = this.deeds[d];
            addClass(this.focusDeed.marker.border,'selected');
            return true;
        }

        this.updateLayer = function(id) {
            let layer = this.config.layers[id];
            if(!layer) return;
            let map = this;
            layer.updateLayer = function(map,element) {
                if(id==='showDeeds' || id==='showPerimeters' ||
                   id==='showGuardTowers' || id==='showSigns') map.updateMarkers();
                if(id==='showGuardTowers' && map.layer('showGuardTowers') && map.zoomIndex<=3)
                    map.addNotification('Guard towers will only show when zooming in more.');
                if(id==='showSigns' && map.layer('showSigns') && map.zoomIndex<=7)
                    map.addNotification('Signs will only show when zooming in more.');
                return false;
            }
            layer.addEventListener('change',function() {
                if(layer.updateLayer(map,layer)) map.draw();
                map.updateHash();
            });
        }

        this.setMapType = function(type) {
            if(map.mapType===type) return;
            config.toggleTerrain.setAttribute('class',type==='terrain'? 'selected' : '');
            config.toggleTopo.setAttribute('class',type==='topographic'? 'selected' : '');
            config.toggleIso.setAttribute('class',type==='isometric'? 'selected' : '');
            map.mapType = type;
            map.load();
            map.update();
        }

        this.load = function() {
            this.config.markers.innerHTML = '';
            this.markers = [];
            let mapImage = new MapImage('./map-'+this.mapType+'.png');
            new MapLoader(this,mapImage).load();
            for(let i=0; i<this.deeds.length; ++i) {
                let deed = this.deeds[i];
                let name = deed.name;
                if(name.length>24) name = name.substring(0,22)+'...';
                let element = document.createElement('div');
                let marker = new Marker('deed',deed.x,deed.y,deed.height,element);
                deed.marker = marker;
                this.updateMarker(marker);
                if((this.mapType==='terrain' && this.config.showDeedBordersInFlatMode) ||
                   (this.mapType==='topographic' && this.config.showDeedBordersInFlatMode) ||
                   (this.mapType==='isometric' && this.config.showDeedBordersIn3dMode)) {
                    marker.border = document.createElement('div');
                    marker.border.setAttribute('class',deed.permanent? 'border deed-permanent' : 'border deed-normal');
                    marker.deed = deed;
                    element.appendChild(marker.border);
                }
                let label = document.createElement('span');
                label.innerHTML = name;
                label.setAttribute('class',deed.permanent? 'deed deed-permanent' : 'deed deed-normal');
                element.setAttribute('class','marker');
                element.appendChild(label);
                this.config.markers.appendChild(element);
                this.markers.push(marker);
            }
            for(let i=0; i<this.focusZones.length; ++i) {
                let focusZone = this.focusZones[i];
                let element = document.createElement('div');
                let marker = new Marker('focusZone',focusZone.x,focusZone.y,focusZone.height,element);
                this.updateMarker(marker);
                if(this.createFocusZoneBorder(marker,focusZone))
                    element.appendChild(marker.border);
                element.setAttribute('class','marker fzm_'+focusZone.type);
                this.config.markers.appendChild(element);
                this.markers.push(marker);
            }
            for(let i=0; i<this.deeds.length; ++i) {
                let deed = this.deeds[i];
                let marker = deed.marker;
                if(this.createDeedBounds(marker,deed)) {
                    this.config.markers.appendChild(marker.perimeter);
                    this.config.markers.appendChild(marker.bounds);
                }
                deed.search = deed.name.replace(/[^a-zA-Z]/g,'').toLowerCase();
            }
            for(let i=0; i<this.guardTowers.length; ++i) {
                let guardTower = this.guardTowers[i];
                let element = document.createElement('div');
                element.setAttribute('class','tower');
                this.createGuardTower(element,guardTower);
                guardTower.element = element;
                this.config.markers.appendChild(element);
            }
            for(let i=0; i<this.signs.length; ++i) {
                let sign = this.signs[i];
                let element = document.createElement('div');
                element.setAttribute('class','sign');
                this.createSign(element,sign);
                sign.element = element;
                this.config.markers.appendChild(element);
            }
            this.updateMarkers();
            for(let id in this.config.layers)
                this.updateLayer(id);

            let element = document.createElement('div');
            element.className = 'pointer';
            element.style.display = 'none';
            this.config.markers.appendChild(element);
            this.pointer.element = element;
        }

        this.addNotification = function(message) {
            let element = document.createElement('div');
            element.setAttribute('class','notification');
            element.innerHTML = message;
            this.config.container.appendChild(element);
            setTimeout(function() {
                element.remove();
            },3000)
        }

        this.addBadge = function(name,icon,onclick) {
            let element = document.createElement('div');
            element.setAttribute('class','badge');
            if(icon) element.style.backgroundImage = 'url(\''+icon+'\')';
            else element.innerHTML = name.substr(0,1).toUpperCase();
            element.style.right = (8+40*this.badges.length)+'px';
            element.title = name;
            let badge = new Badge(name,onclick,element);
            let map = this;
            element.onclick = function(e) { badge.onclick(badge,map); }
            this.badges.push(badge);
            this.config.container.appendChild(element);
        }

        this.addLayer = function(id,label,onchange) {
            let layer = document.createElement('label');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = id;
            let text = document.createTextNode(label);
            layer.appendChild(checkbox);
            layer.appendChild(text);
            config.layers[id] = checkbox;
            checkbox.checked = false;
            if(typeof onchange === 'function') {
                let map = this;
                checkbox.updateLayer = onchange;
                checkbox.addEventListener('change',function() {
                    if(checkbox.updateLayer(map,checkbox)) map.draw();
                    map.updateHash();
                });
            }
            this.config.layersPanel.appendChild(layer);
        }

        this.parseLocationHash = function() {
            if(!global.location.hash) return;
            let params = parseQueryString(global.location.hash.substr(1));
            if(params.z) {
                let z = params.z*1;
                if(z>=0 && z<zoomLevels.length) {
                    this.zoomIndex = z;
                    this.zoomUpdate();
                }
            }
            if(params.deed) {
                this.gotoDeed(params.deed);
            } else if(params.coords || params.pointer) {
                if(params.pointer) {
                    let c = params.pointer.split(',');
                    let x = c[0]*1.0;
                    let y = c[1]*1.0;
                    this.setPointer(x,y);
                    if(!params.coords) this.go(x,y);
                }
                if(params.coords) {
                    let c = params.coords.split(',');
                    let x = c[0]*1.0;
                    let y = c[1]*1.0;
                    this.go(x,y);
                }
            }
            if(params.l) {
                let l = params.l*1;
                let i = 0;
                let render = false;
                for(let id in this.config.layers) {
                    let layer = this.config.layers[id];
                    layer.checked = ((1<<(i++))&l)!==0;
                    if(layer.updateLayer && layer.updateLayer(this,layer)) render = true;
                }
                if(render) this.draw();
                this.updateHash();
            }
            let map = this;
            document.dispatchEvent(new CustomEvent('mapParseUrl',{
                detail: {
                    config: map.config,
                    map: map,
                    params: params
                }
            }));
        }
    }

    config.container       = document.getElementById('container');
    config.canvas          = document.getElementById('map');
    config.ctx             = config.canvas.getContext('2d');
    config.coords          = document.getElementById('coords');
    config.coordsMouse     = document.getElementById('coords-mouse');
    config.coordsPointer   = document.getElementById('coords-pointer');
    config.coordsDistance  = document.getElementById('coords-distance');
    config.markers         = document.getElementById('markers');
    config.sidebar         = document.getElementById('sidebar');
    config.zoomIn          = document.getElementById('zoom-in');
    config.zoomOut         = document.getElementById('zoom-out');
    config.zoomScale       = document.getElementById('zoom-scale');
    config.toggleTerrain   = document.getElementById('map-terrain');
    config.toggleTopo      = document.getElementById('map-topographic');
    config.toggleIso       = document.getElementById('map-isometric');
    config.layersPanel     = document.getElementById('layers');
    config.layers          = filterEmptyValues({
        showDeeds:        document.getElementById('layer-deeds'),
        showPerimeters:   document.getElementById('layer-perimeters'),
        showGuardTowers:  document.getElementById('layer-guardtowers'),
        showSigns:        document.getElementById('layer-signs')
    });
    config.infoDetails     = document.getElementById('info-details');
    config.toggleSidebar   = document.getElementById('sidebar-toggle');
    config.searchbox       = document.getElementById('searchbox');
    config.searchbutton    = document.getElementById('searchbutton');
    config.list            = document.getElementById('autocomplete');
    config.mapFile         = document.getElementById('map-file');
    config.timestamp       = document.getElementById('timestamp');

    var map = new Map(config,kingdoms,deeds,focusZones,guardTowers,signs);

    if(window.matchMedia("(any-hover: none)").matches) {
        addClass(config.container,'touch-display');
        addClass(config.container,'no-sidebar');
    }
    removeClass(config.container,'no-ui');

    config.sidebar.addEventListener('wheel',function(e) {
        e.stopPropagation();
    });
    config.container.addEventListener('wheel',function(e) {
        if(e.deltaY>0) map.zoomOut(e.pageX,e.pageY);
        else if(e.deltaY<0) map.zoomIn(e.pageX,e.pageY);
        stopEvent(e);
    });

    function mouseDown(e) {
        map.mouseDown(e.pageX,e.pageY,e.button,false);
        stopEvent(e);
    }
    config.canvas.addEventListener('mousedown',mouseDown);
    config.markers.addEventListener('mousedown',mouseDown);
    config.container.addEventListener('mousemove',function(e) {
        if(map.mouseMove(e.pageX,e.pageY)) stopEvent(e);
    });
    config.container.addEventListener('mouseup',function(e) {
        if(map.mouseUp(e.button,false)) stopEvent(e);
    });
    config.canvas.addEventListener('contextmenu',function(e) { stopEvent(e); });
    config.markers.addEventListener('contextmenu',function(e) { stopEvent(e); });

    function touchStart(e) {
        let touch = e.changedTouches[0];
        map.touchDown(touch.clientX,touch.clientY);
        map.mouseDown(touch.clientX,touch.clientY,0,true);
    }
    config.canvas.addEventListener('touchstart',touchStart);
    config.markers.addEventListener('touchstart',touchStart);
    config.container.addEventListener('touchmove',function(e) {
        let touch = e.changedTouches[0];
        if(map.mouseMove(touch.clientX,touch.clientY)) stopEvent(e);
    });
    config.container.addEventListener('touchend',function(e) {
        if(map.mouseUp(0,true)) stopEvent(e);
    });

    config.toggleTerrain.addEventListener('click',function(e) { map.setMapType('terrain'); });
    config.toggleTopo.addEventListener('click',function(e) { map.setMapType('topographic'); });
    config.toggleIso.addEventListener('click',function(e) { map.setMapType('isometric'); });

    config.toggleSidebar.addEventListener('click',function(e) {
        toggleClass(config.container,'no-sidebar');
    });
    config.searchbox.addEventListener('keyup',function(e) {
        if(e.key!=='Enter' && e.keyCode!==13) map.autocomplete();
        else if(document.dispatchEvent(mapEvents.mapSearch)) map.search();
    });
    config.searchbutton.addEventListener('click',function(e) {
        if(document.dispatchEvent(mapEvents.mapSearch)) map.search();
    });
    config.zoomIn.addEventListener('click',function(e) { map.zoomIn(); });
    config.zoomOut.addEventListener('click',function(e) { map.zoomOut(); });

    config.timestamp.innerHTML = getDate(timestamp);
    config.map = map;

    mapEvents.detail = {
        config: config,
        map: map
    };
    mapEvents.mapSearch = new CustomEvent('mapSearch',{
        detail: mapEvents.detail,
        cancelable: true
    })
    mapEvents.mapDrawBefore = new CustomEvent('mapDrawBefore',{
        detail: mapEvents.detail
    })
    mapEvents.mapDrawAfter = new CustomEvent('mapDrawAfter',{
        detail: mapEvents.detail
    })

    map.load();

    document.dispatchEvent(new CustomEvent('mapLoaded',{
        detail: mapEvents.detail
    }));

    map.update();
    map.parseLocationHash();

})(typeof window === 'undefined' ? this : window);

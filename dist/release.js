var w="function"==typeof Object.defineProperties?Object.defineProperty:function(h,n,t){if(h==Array.prototype||h==Object.prototype)return h;h[n]=t.value;return h};function z(h){h=["object"==typeof globalThis&&globalThis,h,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var n=0;n<h.length;++n){var t=h[n];if(t&&t.Math==Math)return t}throw Error("Cannot find global object");}var J=z(this);
function U(h,n){if(n)a:{var t=J;h=h.split(".");for(var x=0;x<h.length-1;x++){var D=h[x];if(!(D in t))break a;t=t[D]}h=h[h.length-1];x=t[h];n=n(x);n!=x&&null!=n&&w(t,h,{configurable:!0,writable:!0,value:n})}}function V(h){h=Math.trunc(h)||0;0>h&&(h+=this.length);if(!(0>h||h>=this.length))return this[h]}U("Array.prototype.at",function(h){return h?h:V});function W(h){return h?h:V}U("Int8Array.prototype.at",W);U("Uint8Array.prototype.at",W);U("Uint8ClampedArray.prototype.at",W);
U("Int16Array.prototype.at",W);U("Uint16Array.prototype.at",W);U("Int32Array.prototype.at",W);U("Uint32Array.prototype.at",W);U("Float32Array.prototype.at",W);U("Float64Array.prototype.at",W);U("String.prototype.at",function(h){return h?h:V});
(()=>{function h(a,b,c=0){0==c&&(c=b);var d=p(a.width*c,a.height*b),e=d.getContext("2d");for(let g=0;g<b;g++)for(let k=0;k<c;k++)e.drawImage(a,k*a.width,g*a.height);return d}function n(a,b){let c=p(a.width,a.height),d=c.getContext("2d");return d.globalAlpha=b,d.drawImage(a,0,0),d.globalAlpha=1,c}class t{constructor(a=1/60,b,c=!1){this.at=0;this.ga=null;this.ma=a;this.t=b;c&&this.start();this.p=this.u=!1}hb(a){if(this.ga)for(this.at+=(a-this.ga)/1E3,1<this.at&&(this.at=1);this.at>this.ma;){this.t.update(Math.floor(a/
1E3));this.at-=this.ma;break}this.ga=a;this.u||this.ua()}ua(){requestAnimationFrame(a=>{this.hb(a)})}start(){this.u=!1;this.ua()}stop(){this.u=!0}}class x{constructor(a){this.m=a;this.T=[]}update(a){this.time=a;[...this.T].forEach(b=>{b.update&&b.update(a)});this.T=this.T.filter(b=>!b.delete)}G(a){a.clearRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="black";a.fillRect(0,0,a.canvas.width,a.canvas.height);[...this.T].forEach(b=>{b.G&&b.G(a)})}V(a){a.m=this.m;this.m.cb(a)}notify(a){let b=a.name;
a=a.event;"keydown"==b&&this.P?this.P(a):"keyup"==b&&this.K?this.K(a):"mousemove"==b&&this.Wa||("click"==b&&this.click?this.click(a):"control"==b&&this.control?this.control(a.key):"controlts"==b&&this.Da?this.Da(a.key):"controlte"==b&&this.Ca?this.Ca(a.key):console.log(b))}Wa(){}K(a){this.control(a.key)}}Math.PI;const D=(a,b=document)=>b.querySelector(a),M=(a=1,b=0)=>b+(a-b)*Math.random(),u=(a=1,b=0)=>0|M(a,b),p=(a=0,b=0)=>{let c=document.createElement("canvas");return c.width=a,c.height=b,c},H=(a,
b,c,d,e)=>{let g=p(d,e);return g.getContext("2d").drawImage(a,b,c,d,e,0,0,d,e),g},A=(a,b=1,c=null)=>{let d=a.length,e=Math.max(...a.map(q=>q.length));var g=p(e*b,d*b),k=g.getContext("2d");for(let q=0;q<d;q++)for(let m=0;m<e;m++){var l=a[q][m];c&&(l=c(l));l&&""!=l&&(k.fillStyle=l,k.fillRect(m*b,q*b,b,b))}return g},E=(a,b)=>{for(var c=a.getContext("2d").getImageData(0,0,a.width,a.height).data,d=[],e=0;e<c.length;e+=4){var g=d,k=g.push;var l=c[e];var q=c[e+1],m=c[e+2];l=0==l+q+m+c[e+3]?null:0==l+q+m||
255<l||255<q||255<m?"#000000":"#"+((l<<16)+(q<<8)+m).toString(16).padStart(6,"0");k.call(g,l)}c=[];for(e=0;e<a.height;e++)c[e]=[];g=e=0;for(k=0;k<d.length;k++)e>=a.width&&(g++,e=0),c[g][e]=d[k],b&&(c[g][e]=b(c[g][e])),e++;return c},N=(a,b,c="source-atop")=>{let d=p(a.width,a.height),e=d.getContext("2d");e.drawImage(a,0,0);e.globalCompositeOperation=c;for(c=0;c<a.width/b.width;c++)for(let g=0;g<a.height/b.height;g++)e.drawImage(b,c*b.width,g*b.height);return d},I=(a,b)=>{var c=E(a);let d=p(a.width*
b.width,a.height*b.height),e=d.getContext("2d");for(let g=0;g<a.height;g++)for(let k=0;k<a.width;k++){let l;0<(null==(l=c[g][k])?void 0:l.length)&&e.drawImage(b,g*b.width,k*b.height)}return d},O=(a,b)=>{a=b?a:E(a);b=a.flat();var c=[...(new Set(b))];b={};for(const d of c)for(b[d]=[],c=0;c<a.length;c++){b[d].push([]);for(let e=0;e<a[c].length;e++)a[c][e]===d?b[d][c][e]="#000000":b[d][c][e]=null}return delete b.nb,b},P=a=>{var b=p(a[0].width,a[0].height),c=b.getContext("2d");for(let d in a)c.drawImage(a[d],
0,0);return b};class f{constructor(){}static get(a){var b=f.N.find(d=>d.n.toLowerCase()==a.toLowerCase()),c=D("#spriteSheetMain");c=H(c,b.x,b.y,b.w,b.h);return b.c?(b=E(c,d=>"#ffffff"===d?"":d),A(b,1,d=>d)):c}static g(a,b=1){a=this.get(a);a=E(a,c=>"#ffffff"==c?"":c);return A(a,b,c=>c)}static getAll(a=1){var b={};for(let c in f.N)b[f.N[c].n]=1==a?f.get(f.N[c].n):f.g(f.N[c].n,a);return b}}f.N=[{n:"brick",x:88,y:0,w:8,h:8,c:0},{n:"grass",x:96,y:0,w:8,h:8,c:0},{n:"water",x:104,y:0,w:8,h:8,c:0},{n:"steel",
x:112,y:0,w:8,h:8,c:0},{n:"dirt",x:88,y:8,w:8,h:8,c:1},{n:"tree",x:96,y:8,w:8,h:8,c:1},{n:"log",x:104,y:8,w:8,h:8,c:1},{n:"magic",x:112,y:8,w:8,h:8,c:1},{n:"castle",x:120,y:0,w:32,h:32,c:1},{n:"apple",x:88,y:16,w:8,h:8,c:1},{n:"lemon",x:96,y:16,w:8,h:8,c:1},{n:"fort",x:104,y:16,w:16,h:16,c:1},{n:"player",x:0,y:32,w:16,h:16,c:1},{n:"playerback",x:16,y:32,w:16,h:16,c:1},{n:"playerside",x:32,y:32,w:8,h:16,c:1},{n:"playersidehand",x:40,y:32,w:8,h:16,c:1},{n:"bear",x:48,y:32,w:16,h:16,c:1},{n:"rabbit",
x:64,y:40,w:8,h:8,c:1},{n:"arrow",x:64,y:32,w:8,h:8,c:1},{n:"deer",x:72,y:32,w:16,h:16,c:1},{n:"house",x:88,y:32,w:16,h:16,c:1},{n:"shop",x:104,y:32,w:16,h:16,c:1},{n:"npcgirl",x:120,y:32,w:16,h:16,c:1},{n:"npcman",x:136,y:32,w:16,h:16,c:1}];class v{static wa(){if(v.Y)return v.Y;var a=D("#spriteSheetMain");a=H(a,0,0,88,32);a=E(a,c=>"#ffffff"==c?"":c);var b=A(a,1,c=>c);return v.Y={canvas:b,B:a},v.Y}constructor(a={}){this.I=a;a.size?this.size=a.size:this.size=1;var b=v.wa();this.B=JSON.parse(JSON.stringify(b.B));
this.canvas=A(this.B,this.size,c=>a.color&&"#000000"==c?a.color:c);a.Ha&&(this.canvas=N(this.canvas,a.Ha));this.Aa=this.La(this.canvas,8*this.size)}j(a,b){let c=p(8*this.size*a.length,8*this.size),d=c.getContext("2d");a=a.toUpperCase();for(let e in a)d.drawImage(this.Aa[a[e]],this.size*e*8,0);return b&&(c=N(c,b)),c}La(a,b){var c={};let d=0,e=0;for(let g=0;44>g;g++){let k=" 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.:-\u00d7?\u00a9!"[g];11<=g&&0==g%11&&(e=0,d+=b);let l=H(a,e*b,d,b,b);c[k]=l;e++}return c}}
class K{constructor(a){a.size&&(this.size=a.size);a.oa&&(this.oa=a.oa)}static get(a){var b=f.g("log",a);a=f.g("tree",a);var c=p(a.width,a.width+b.width),d=c.getContext("2d");return d.drawImage(a,0,0),d.drawImage(b,0,a.height),c}static Ja(){var a=f.g("log",2),b=f.g("tree",2),c=p(b.width,b.height+2*a.height),d=c.getContext("2d");return d.drawImage(b,0,0),d.drawImage(a,0,b.height),d.drawImage(a,0,b.height+a.height),c}}class X{constructor(a,b=300,c=!0,d=!0,e=3){this.o=a;this.ab=b;this.loop=e;this.pitch=
d;this.R=!1;this.F=new AudioContext;this.sa=this.o;c&&this.start()}toggle(){this.R?this.stop():this.start()}start(){this.R=!0;this.ta()}stop(){this.R=!1}reset(){this.o=this.sa}Na(a){switch(a){case "B":return 493.88;case "C":return 261.63;case "D":return 293.66;case "E":return 329.63;case "F":return 349.23;case "G":return 392}return 440}Ma(a){var b=this.Na(a[0]);return 1<a.length?b*Math.pow(2,a[1]/12):b}ta(){if(this.R)if(0===this.o.length&&0<this.loop&&(this.o=this.sa,this.loop--),0===this.o.length)this.stop();
else{var a=this.o[0];this.pitch?(this.o[1],this.o=this.o.slice(2)):this.o=this.o.slice(1);var b=this.F.createOscillator(),c=this.F.createGain();b.connect(c);c.connect(this.F.destination);b.frequency.setValueAtTime(this.Ma(a),this.F.currentTime);b.start();c.gain.setValueAtTime(0,this.F.currentTime);c.gain.exponentialRampToValueAtTime(1,this.F.currentTime+.02);setTimeout(()=>{c.gain.setValueAtTime(1,this.F.currentTime);c.gain.exponentialRampToValueAtTime(.001,this.F.currentTime+.02);b.stop(this.F.currentTime+
.02);this.ta()},60/this.ab*1E3)}}}class Y extends x{constructor(a){super(a);this.i={W:f.g("steel",1),X:f.g("water",1),fa:f.g("grass",1),D:f.g("player",1),ia:f.g("rabbit",1),ca:f.g("deer",1),aa:f.g("bear",1),ya:f.g("apple",1),Sa:f.g("lemon",1)};this.H=new v({color:"red",size:1});new v({color:"white",size:2});this.Za=new v({color:"white",size:3});this.buffer=this.ja();this.y=0}ja(){var a=p(this.m.I.width,1200);let b=a.getContext("2d");var c=64;return b.drawImage(this.Za.j("GAME INSTRUCTIONS",this.i.W),
32,c),c+=80,b.fillStyle="white",b.font="16px Arial",b.fillText("you step into the legendary shoes of Robin Hood.",64,c),c+=20,b.fillText("your mission is to make the world a better place.",64,c),c+=20,b.fillText("- explore forest and hunt animals",64,c),c+=20,b.fillText("- do quests and trade with merchants",64,c),c+=20,b.fillText("- spread the wealth to the poor",64,c),c+=20,b.fillText("- improve your stats and defend the village",64,c),c+=20,c+=20,b.fillText("controls",64,c),c+=20,b.fillText("a/left : move left",
64,c),c+=20,b.fillText("d/right : move right",64,c),c+=20,b.fillText("w/up : move up",64,c),c+=20,b.fillText("s/down : move down",64,c),c+=20,b.fillText("space : shoot arrow",64,c),c+=20,b.fillText("e : interact with",64,c),c+=20,b.fillText("q : open menu",64,c),c+=20,c+=20,b.fillStyle="green",b.fillText("game play",64,c),c+=20,b.fillStyle="white",b.fillText("hunt animals in forest, rabbit, deer, bear",64,c),c+=20,b.drawImage(this.i.ia,64,c+8),b.drawImage(this.i.ca,72,c),b.drawImage(this.i.aa,88,
c),c+=40,b.fillText("harvest trees to get apples and lemons",64,c),b.drawImage(this.i.ya,64,c+8),b.drawImage(this.i.Sa,72,c+8),c+=40,b.fillText("things to do in town",64,c),c+=20,b.fillText("- trade hunts with merchants",64,c),c+=20,b.fillText("- give goodies to villagers for free (gain morale)",64,c),c+=20,b.fillText("- take quests from villagers for extra love",64,c),c+=40,b.fillStyle="green",b.fillText("extra things to do",64,c),c+=20,b.fillStyle="red",b.fillText("deep into the jungle lies the old wizzard",
64,c),c+=20,b.fillText("find him and buy the magic bow",64,c),c+=20,b.fillStyle="white",b.fillText("more instructions can be learned in game",64,c),a}update(a){this.time=a}G(a){a.clearRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="black";a.fillRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="green";a.font="16px Arial";a.drawImage(this.buffer,0,this.y);a.fillText("Time "+this.time,20,20)}click(){}P(){}control(a){"s"===a||"ArrowDown"===a?this.y-=32:"w"===a||"ArrowUp"===a?this.y+=32:"fire"!==
a&&"e"!==a&&"q"!==a&&"a"!==a&&"ArrowLeft"!==a&&"d"!==a&&"ArrowRight"!==a&&"space"!==a&&" "!==a||this.V(new Q(this.m))}K(a){this.control(a.key)}}class Z{constructor(a,b,c=1,d=0){for(var e in this.S=a,this.options=[],this.S)for(a=this.S[e],b=0;b<a.p;b++)this.options.push(a.c);this.options=this.options.sort(()=>M()-.5);0==d&&(d=c);this.B=this.Ia(c,d);this.$a=A(this.B,1)}qa(){var a=A(this.B,1),b=I(a,this.S[0].u);a=O(a);b=[b];for(let e in a){var c=A(a[e]),d=this.S.find(g=>g.c==e);c=I(c,d.u);b.push(c)}return P(b)}Ia(a,
b){var c=[];for(let d=0;d<b;d++){c[d]=[];for(let e=0;e<a;e++)c[d][e]=this.Oa()}return c}Oa(){return this.options[u(0,this.options.length)]}}const R=[{n:"dirt",p:70,c:"#a1887f",u:f.g("dirt",1)},{n:"water",p:4,c:"#2979ff",u:f.g("water",1)},{n:"grass",p:60,c:"#66bb6a",u:f.g("grass",1)},{n:"tree",p:25,c:"#1b9e00",u:f.g("tree",1)}];class aa{constructor(a=32){this.B=this.Ua(a);this.canvas=A(this.B,4);this.Va=this.qa(R)}Ua(a=32){var b=this.Ta(a);b=E(b);for(var c=0;c<7*a;c++)b[c][0]="#2979ff",b[c][1]="#2979ff",
b[c][2]="#2979ff",b[c][b.length-1]="#2979ff",b[c][b.length-2]="#2979ff",b[c][b.length-3]="#2979ff";for(c=0;c<7*a;c++)b[0][c]="#2979ff",b[1][c]="#2979ff",b[2][c]="#2979ff",b[b.length-1][c]="#2979ff",b[b.length-2][c]="#2979ff",b[b.length-3][c]="#2979ff";return b}qa(a){var b=I(this.canvas,a[0].u),c=O(this.B,!0);b=[b];for(let g in c){var d=A(c[g],4),e=a.find(k=>k.c==g);d=I(d,e.u);b.push(d)}return P(b)}Ta(a=32){var b="4433223 43311122 42211122 42211122 42211122 42211122 42211122".split(" "),c=p(7*a,7*
a),d=c.getContext("2d");for(let g=0;g<b.length;g++)for(let k=0;k<b[g].length;k++){var e=new Z(R,parseInt(b[g].charAt(k)),a,a);d.drawImage(e.$a,g*a,k*a)}return c}}class F{constructor(a,b){this.x=a;this.y=b}is(a){let b=this.y,c=a.y;return this.x==a.x&&b==c}move(a,b){0==a?this.y-=b:4==a?this.y+=b:6==a?this.x-=b:2==a?this.x+=b:7==a?(this.y-=b,this.x-=b):1==a?(this.y-=b,this.x+=b):3==a?(this.y+=b,this.x+=b):5==a&&(this.y+=b,this.x-=b)}clone(){return new F(this.x,this.y)}G(a,b="red"){a.fillStyle=b;this.Ea(a,
b)}Ea(a,b="green"){a.fillStyle=b;a.strokeStyle=b;a.beginPath();a.arc(this.x,this.y,3,0,2*Math.PI);a.fill()}}class ba{constructor(a,b,c,d,e){this.pa=a;this.A=new F(0,0);this.h=c;this.w=b;this.Xa=d;this.Ya=e}na(a){this.A=new F(a.x,a.y)}move(a){this.A.move(a,32)}Ka(a){return H(a,this.A.x-this.w/2,this.A.y-this.h/2,this.w,this.h)}G(a,b){let c;let d,e,g,k,l,q;var m=this.A.y-this.h/2;c=this.A.x-this.w/2;0>=c&&(c=0,this.A.x=c+this.w/2);0>=m&&(m=0,this.A.y=m+this.h/2);c+this.w>b.width&&(c=b.width-this.w,
this.A.x=c+this.w/2);m+this.h>b.height&&(m=b.height-this.h,this.A.y=m+this.h/2);g=this.Xa;k=this.Ya;d=l=this.w;e=q=this.h;a.drawImage(b,c,m,d,e,g,k,l,q)}}class ca extends x{constructor(a){super(a);this.Ra()}Ra(){this.keyboard={};this.i={W:f.g("steel",1),X:f.g("water",1),fa:f.g("grass",1),D:f.g("player",2),Qa:f.g("house",6),qb:f.g("water",2),lb:f.g("dirt",2),mb:f.g("grass",2)};this.H=new v({color:"white",size:1});this.s=new F(224,224);this.da=new aa(16);var a=this.da.canvas.getContext("2d");a.drawImage(this.i.Qa,
this.s.x-64,this.s.y-64);a.drawImage(this.H.j("HOUSE"),this.s.x-64+14,this.s.y-64+56);this.ba=new ba(this,512,512,0,0);this.ba.na(this.s);this.ha="robin hood"}Fa(a){var b=a.height/32,c=a.width/32;a=a.getContext("2d");a.fillStyle="black";a.font="8px Arial";for(let d=0;d<c;d++)a.fillText(d,32*d,24);for(c=0;c<b;c++)a.fillText(c,0,32*c)}Ba(a,b){a=this.da.B[a/32][b/32];return"#2979ff"==a||"#1b9e00"==a}ea(){var a=p(this.m.I.width,this.m.I.height);let b=a.getContext("2d");b.clearRect(0,0,b.canvas.width,
b.canvas.height);b.fillStyle="black";b.fillRect(0,0,b.canvas.width,b.canvas.height);var c;if(c=this.da.Va){var d=p(c.width,c.height);c=(d.getContext("2d").drawImage(c,0,0),d)}else c=null;c=n(c,.8);this.Fa(c);c.getContext("2d").drawImage(this.i.D,this.s.x,this.s.y);c=this.ba.Ka(c);return b.drawImage(c,0,0),a}update(a){this.time=a;for(let b in this.keyboard)this.keyboard[b]&&this.la(b)}la(a){var b=new F(this.s.x,this.s.y);"s"===a||"ArrowDown"===a?b.y+=this.i.D.width:"w"===a||"ArrowUp"===a?b.y-=this.i.D.width:
"d"===a||"ArrowRight"===a?b.x+=this.i.D.width:"a"!==a&&"ArrowLeft"!==a||(b.x-=this.i.D.width);this.Ba(b.x,b.y)||(this.s=new F(b.x,b.y),this.ba.na(this.s))}G(a){a.clearRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="black";a.fillRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="green";a.font="16px Arial";a.drawImage(this.ea(),0,0);a.fillText("Time "+this.time,20,20)}click(){}control(a){this.la(a)}P(a){this.keyboard[a.key]=!0}K(a){this.keyboard[a.key]=!1}}class Q extends x{constructor(a){super(a);
this.i={W:f.g("steel",1),X:f.g("water",1),fa:f.g("grass",1),D:f.g("player",1)};this.l=[{x:100,y:128},{x:100,y:160},{x:100,y:192},{x:100,y:224}];this.ha="robin hood";this.C=0;this.H=new v({color:"red",size:2});this.buffer=this.ja()}ja(){var a=p(this.m.I.width,this.m.I.height);let b=a.getContext("2d");return b.drawImage(this.H.j("NEW GAME",this.i.W),this.l[0].x+20,this.l[0].y),b.drawImage(this.H.j("INSTRUCTIONS",this.i.fa),this.l[3].x+20,this.l[3].y),a}update(a){this.time=a}G(a){a.clearRect(0,0,a.canvas.width,
a.canvas.height);a.fillStyle="black";a.fillRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="green";a.font="16px Arial";a.drawImage(this.buffer,0,0);a.drawImage(this.H.j("SOUND : "+(this.L&&this.L.R?"on":"off"),this.i.X),this.l[1].x+20,this.l[1].y);a.drawImage(this.H.j(`NAME : ${this.ha}`,this.i.X),this.l[2].x+20,this.l[2].y);a.drawImage(this.i.D,this.l[this.C].x,this.l[this.C].y);a.fillText("Time "+this.time,20,20)}click(){}control(a){if("s"===a||"ArrowDown"===a)a=this.C+1,this.C=(0>a?-a:a)%
this.l.length;else if("w"===a||"ArrowUp"===a)a=this.C-1,this.C=(0>a?-a:a)%this.l.length;else if("a"===a||"ArrowLeft"===a||"d"===a||"ArrowRight"===a||"space"===a||" "===a)0==this.C?this.V(new ca(this.m)):1==this.C?(this.L||(this.L=new X("E4E4D4E4E4D4E4G4G4A4A4E4E4D4E4E4D4E4G4G4A4A4G4G4E4E4D4E4E4D4E4A4A4",120,!1,!0,2E3)),this.L.toggle()):2==this.C?this.ha=(a=prompt("name","robin"))&&0<a.length?a.substring(0,10):"robin":3==this.C&&(this.L&&this.L.stop(),this.V(new Y(this.m)))}P(){}K(a){this.control(a.key)}}
class da extends x{constructor(a){super(a);a=f.g("brick",1);f.g("brick",2);f.g("brick",3);var b=f.g("steel",1),c=f.g("water",1),d=f.g("apple",1),e=f.g("grass",1),g=f.g("water",2),k=f.g("dirt",2),l=f.g("grass",2),q=f.g("castle",3),m=f.g("player",2),ea=f.g("bear",3),fa=f.g("deer",2),ha=f.g("rabbit",2),ia=new v({color:"red",size:2}),G=new v({color:"red",size:4});this.gb=K.get(1);this.fb=K.get(2);this.eb=K.Ja();this.v={Z:G.j("JS",a),"13K":G.j("13K",b),2023:G.j("2023",c),13:G.j("13",b),xa:ia.j("TH",b),
va:G.j("CENTURY",d),"ROBIN HOOD":G.j("ROBIN HOOD",e)};this.ib=n(h(g,2,36),.6);this.O=n(h(k,2,36),.4);this.Pa=n(h(l,12,36),.4);this.za=q;this.D=m;this.aa=ea;this.ca=fa;this.ia=ha;this.ra=function(r,y,S,T,B=1){1<B&&(r=h(r,B),y=h(y,B));B=p(r.width+y.width,r.height+y.height);var C=B.getContext("2d");r=(C.drawImage(r,0,0),C.drawImage(r,r.width,y.height),C.drawImage(y,r.width,0),C.drawImage(y,0,r.height),B);y=p(r.width*T,r.height*S);B=y.getContext("2d");for(C=0;C<S;C++)for(let L=0;L<T;L++)B.drawImage(r,
C*r.height,L*r.width);return y}(l,k,40,40,2);this.ra=n(this.ra,.3);this.buffer=this.ea()}update(a){this.time=a}ea(){let a=p(600,600),b=a.getContext("2d");b.drawImage(this.ib,0,192);b.drawImage(this.O,0,224);b.drawImage(this.O,0,256);b.drawImage(this.O,0,480);b.drawImage(this.O,0,512);b.drawImage(this.O,0,544);b.drawImage(this.Pa,0,288);b.drawImage(this.v.Z,128,96);b.drawImage(this.v["13K"],128+this.v.Z.width,96);b.drawImage(this.v[2023],160+this.v.Z.width+this.v["13K"].width,96);b.drawImage(this.v[13],
128,128);b.drawImage(this.v.xa,192,128);b.drawImage(this.v.va,224,128);b.drawImage(this.v["ROBIN HOOD"],128,160);for(var c=0;2>c;c++){var d=u(288,480),e=u(230,530);b.drawImage(this.aa,e,d)}for(c=0;5>c;c++)d=u(288,480),e=u(230,530),b.drawImage(this.ia,e,d);for(c=0;5>c;c++)d=u(288,480),e=u(230,530),b.drawImage(this.ca,e,d);for(c=0;15>c;c++)d=u(288,480),e=u(230,530),b.drawImage(this.gb,e,d);for(c=0;15>c;c++)d=u(288,480),e=u(230,530),b.drawImage(this.eb,e,d);for(c=0;15>c;c++)d=u(288,480),e=u(230,530),
b.drawImage(this.fb,e,d);return a}G(a){let b=20;a.clearRect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="black";a.fillRect(0,0,a.canvas.width,a.canvas.height);a.drawImage(this.buffer,0,0);a.fillStyle="green";a.font="16px Arial";a.fillText("Time "+this.time,20,b);a.fillText("use any key to load menu ",20,b+20);a.drawImage(this.za,32,256);a.drawImage(this.D,128,352)}control(){this.V(new Q(this.m))}click(){}P(){}K(a){this.control(a.key)}}class ja{constructor(a){return this.target=a,this.ka=[],!!a.addEventListener&&
(["click","keydown","keyup","mousemove"].forEach(b=>{a.addEventListener(b,c=>{this.fireEvent({name:b,event:c})})}),!0)}sub(a){this.ka.push(a)}clear(){this.ka=[]}fireEvent(a){var b=this.ka,c;for(c in b)b[c].notify&&b[c].notify(a)}}class ka{constructor(a){this.I=a;this.U=document.querySelector(a.U);this.canvas=Object.assign(document.createElement("canvas"),{width:a.width,height:a.height,className:"gamecanvas"});this.U.appendChild(this.canvas);this.J=new ja(document);this.bb();this.$=new t(a.framerate,
this,!0);this.Ga()}update(a){if(0==this.$.p)if(this.time=a,this.M)try{this.M.update(a),this.M.G(this.canvas.getContext("2d"))}catch(b){console.log(b),this.$.stop()}else this.$.stop()}bb(){this.M=new da(this);this.J.sub(this.M)}cb(a){this.M=a;this.J.clear();this.J.sub(this.M)}Ga(){var a=Object.assign(document.createElement("div"),{className:"controls_container"});a.innerHTML='<table><tr><td>q</td><td>w</td><td>e</td><td class="padding"></td><td>space</td> </tr><tr><td>a</td><td>s</td><td>d</td><td class="padding"></td> <td>e</td> </tr></table>';
this.U.appendChild(a);var b=((c,d=document)=>d.querySelectorAll(c))(".controls_container td");for(let c=0;c<b.length;c++)b[c].addEventListener("click",()=>{this.J.fireEvent({name:"control",event:{key:b[c].innerText}})}),b[c].addEventListener("touchstart",()=>{this.J.fireEvent({name:"controlts",event:{key:b[c].innerText}})}),b[c].addEventListener("touchend",()=>{this.J.fireEvent({name:"controlte",event:{key:b[c].innerText}})})}}const la={U:".canvas_container",pb:32,jb:1,framerate:1/15,width:576,height:576,
kb:"Assets",ob:D("#spriteSheetMain")};class ma extends ka{constructor(a){super(a)}}document.addEventListener("DOMContentLoaded",function(){window.pa||(window.pa=new ma(la))},!1)})();

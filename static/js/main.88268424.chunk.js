(this.webpackJsonpfacebrawl=this.webpackJsonpfacebrawl||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"eSpoon",(function(){return S})),a.d(s,"eFork",(function(){return x})),a.d(s,"eKnife",(function(){return A})),a.d(s,"eDeadpoolMask",(function(){return q})),a.d(s,"eCiggs",(function(){return C})),a.d(s,"ePlunger",(function(){return w})),a.d(s,"eChair",(function(){return E})),a.d(s,"eThorH",(function(){return N})),a.d(s,"eSamSw",(function(){return R})),a.d(s,"eVitamins",(function(){return H})),a.d(s,"eShotgun",(function(){return M})),a.d(s,"eHumanShield",(function(){return P})),a.d(s,"eRocketShoes",(function(){return D})),a.d(s,"eHotSoup",(function(){return F}));var n={};a.r(n),a.d(n,"pAilin",(function(){return I})),a.d(n,"pMario",(function(){return L})),a.d(n,"pDavid",(function(){return U})),a.d(n,"pAnaS",(function(){return V})),a.d(n,"pBarbara",(function(){return B})),a.d(n,"pVieira",(function(){return K})),a.d(n,"pZe",(function(){return G})),a.d(n,"pRicardo",(function(){return Z})),a.d(n,"pFernanda",(function(){return J}));var i=a(0),c=a(1),r=a.n(c),p=a(10),d=a.n(p),o=(a(16),a(9)),h=a(3),l=a(4),u=a(6),m=a(5),j=(a(17),a(2)),b=a(7);a(18);function f(t){return Object(i.jsxs)("div",{className:"card-wrapper",children:[Object(i.jsx)("div",{className:"image-wrapper",style:{backgroundImage:"url(/facebrawl"+t.photoURL+")"}}),Object(i.jsx)("div",{className:"name",children:t.name}),Object(i.jsxs)("div",{className:"sp-attack",children:[Object(i.jsx)("span",{children:"Sp. Attack:"}),Object(i.jsx)("span",{children:t.spAtk.name})]}),Object(i.jsxs)("div",{className:"equipment",children:[Object(i.jsx)("span",{children:"Equiped:"}),Object(i.jsx)("span",{children:t.equipment})]}),Object(i.jsxs)("div",{className:"stats-wrapper",children:[Object(i.jsxs)("div",{className:"stat",children:["ATK ",Object(i.jsx)("span",{children:t.stats.atk.toFixed(1)})]}),Object(i.jsxs)("div",{className:"stat",children:["DEF ",Object(i.jsx)("span",{children:t.stats.def.toFixed(1)})]}),Object(i.jsxs)("div",{className:"stat",children:["CHA ",Object(i.jsx)("span",{children:t.stats.cha.toFixed(1)})]}),Object(i.jsxs)("div",{className:"stat",children:["SPD ",Object(i.jsx)("span",{children:t.stats.spd.toFixed(1)})]}),Object(i.jsxs)("div",{className:"stat",children:["ACC ",Object(i.jsx)("span",{children:t.stats.acc.toFixed(1)})]}),Object(i.jsxs)("div",{className:"stat",children:["VIT ",Object(i.jsx)("span",{children:t.stats.vit.toFixed(1)})]})]})]})}a(19);function v(t){var e={width:"".concat(t.percentage,"%"),backgroundColor:t.color};return Object(i.jsx)("div",{className:"bar-wrapper",children:Object(i.jsx)("div",{className:"bar-fill",style:e})})}a(20);var g=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).handleFight=function(){var t=Object(j.a)({},s.state.player1),e=Object(j.a)({},s.state.player2),a=function(t,e){var a="",s=0;if(t.sp>=100){for(var n in t.sp=0,s=t.spAtk.action(t,e),a+=t.name+" uses Special Attack.\n"+t.spAtk.description+"\n\n",t.stats)t.stats[n]<0&&(t.stats[n]=0);for(var i in e.stats)e.stats[i]<0&&(e.stats[i]=0)}var c=60+2*t.stats.acc-1.2*e.stats.spd;return s+=t.stats.atk*(100+30*Math.random())/e.stats.def,t.hp<=0?a+=t.name+" collapses.":100*Math.random()<c?(e.hp-=s,t.sp+=t.stats.cha+Math.random()*s/25,a+="Hits "+e.name+" in the face..."):a+="Misses the strike embarissingly...",console.log(a),a};t.stats.spd>e.stats.spd&&t.hp>0&&e.hp>0?(t.displayString=a(t,e),e.hp>0&&t.hp>0?(e.displayString=a(e,t),t.hp<=0&&(t.displayString+="\n..and then was CRUSHED")):t.hp>0&&(e.displayString=e.name+" was CRUSHED")):e.hp>0&&t.hp>0&&(e.displayString=a(e,t),t.hp>0&&e.hp>0?(t.displayString=a(t,e),e.hp<=0&&(e.displayString+="\n...and then was CRUSHED")):e.hp>0&&(t.displayString=t.name+" was CRUSHED")),t.hp<0&&(t.hp=0),e.hp<0&&(e.hp=0),s.setState({player1:t,player2:e})},s.state={player1:Object(j.a)(Object(j.a)({},t.player1),{},{equipment:t.equip1.name,hp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,maxHp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,sp:0,stats:{atk:t.player1.stats.atk+t.equip1.stats.atk,def:t.player1.stats.def+t.equip1.stats.def,cha:t.player1.stats.cha+t.equip1.stats.cha,spd:t.player1.stats.spd+t.equip1.stats.spd,acc:t.player1.stats.acc+t.equip1.stats.acc,vit:t.player1.stats.vit+t.equip1.stats.vit},displayString:""}),player2:Object(j.a)(Object(j.a)({},t.player2),{},{equipment:t.equip2.name,hp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,maxHp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,sp:0,stats:{atk:t.player2.stats.atk+t.equip2.stats.atk,def:t.player2.stats.def+t.equip2.stats.def,cha:t.player2.stats.cha+t.equip2.stats.cha,spd:t.player2.stats.spd+t.equip2.stats.spd,acc:t.player2.stats.acc+t.equip2.stats.acc,vit:t.player2.stats.vit+t.equip2.stats.vit},displayString:""})},s.handleFight=s.handleFight.bind(Object(b.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{className:"brawl-wrapper",style:{backgroundImage:"url(/facebrawl/images/background.jpg)"},children:Object(i.jsxs)("div",{className:"card-display",children:[Object(i.jsxs)("div",{className:"card-bar-container",children:[Object(i.jsx)(f,Object(j.a)({},this.state.player1)),Object(i.jsx)(v,{percentage:this.state.player1.sp,color:"#44f"}),Object(i.jsx)(v,{percentage:this.state.player1.hp/this.state.player1.maxHp*100,color:"green"}),Object(i.jsx)("textarea",{value:this.state.player1.displayString,resize:"none"})]}),Object(i.jsxs)("div",{className:"button-container",children:[Object(i.jsx)("h1",{children:"BRAWL ZONE"}),Object(i.jsx)("button",{className:"strike-button",onClick:this.handleFight,children:"STRIKE"}),Object(i.jsx)("button",{onClick:function(){t.props.handleChangePage("selector")},children:"Back to Selector"})]}),Object(i.jsxs)("div",{className:"card-bar-container",children:[Object(i.jsx)(f,Object(j.a)({},this.state.player2)),Object(i.jsx)(v,{percentage:this.state.player2.sp,color:"#44f"}),Object(i.jsx)(v,{percentage:this.state.player2.hp/this.state.player2.maxHp*100,color:"green"}),Object(i.jsx)("textarea",{value:this.state.player2.displayString,resize:"none"})]})]})})}}]),a}(c.Component),O=(a(21),function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{className:"selector-wrapper",style:{backgroundImage:"url(/facebrawl/images/background.jpg)"},children:Object(i.jsxs)("div",{className:"sides-container",children:[Object(i.jsxs)("div",{className:"side",children:[Object(i.jsx)("h3",{children:"Select Player 1"}),y(this.props.players,this.props.handlePlayerSelection,0),Object(i.jsx)("h4",{children:"Equipment"}),y(this.props.equipments,this.props.handleEquipmentSelection,0),Object(i.jsx)(f,Object(j.a)({},k(this.props.currentPlayers[0],this.props.currentEquipments[0])))]}),Object(i.jsx)("button",{className:"brawl-button",onClick:function(){t.props.handleChangePage("brawl")},children:"BRAWL"}),Object(i.jsxs)("div",{className:"side",children:[Object(i.jsx)("h3",{children:"Select Player 2"}),y(this.props.players,this.props.handlePlayerSelection,1),Object(i.jsx)("h4",{children:"Equipment"}),y(this.props.equipments,this.props.handleEquipmentSelection,1),Object(i.jsx)(f,Object(j.a)({},k(this.props.currentPlayers[1],this.props.currentEquipments[1])))]})]})})}}]),a}(c.Component)),y=function(t,e,a){var s=Object.values(t);return Object(i.jsx)("div",{className:"buttons-container",children:Object(i.jsx)("div",{children:s.map((function(t){return Object(i.jsx)("button",{className:"selector-button",onClick:function(){e(a,t)},children:t.name})}))})})},k=function(t,e){var a=JSON.parse(JSON.stringify(t));return a.stats.atk+=e.stats.atk,a.stats.def+=e.stats.def,a.stats.cha+=e.stats.cha,a.stats.acc+=e.stats.acc,a.stats.vit+=e.stats.vit,a.stats.spd+=e.stats.spd,a.equipment=e.name,a},S={name:"Spoon",stats:{atk:1,def:0,cha:1,spd:0,acc:0,vit:0}},x={name:"Fork",stats:{atk:2,def:0,cha:0,spd:0,acc:0,vit:0}},A={name:"Knife",stats:{atk:3,def:0,cha:-1,spd:0,acc:0,vit:0}},q={name:"Deadpool Mask",stats:{atk:0,def:0,cha:10,spd:0,acc:0,vit:0}},C={name:"Cigarette Pack",stats:{atk:0,def:0,cha:2,spd:0,acc:0,vit:-2}},w={name:"Plunger",stats:{atk:1,def:0,cha:0,spd:0,acc:2,vit:0}},E={name:"Chair",stats:{atk:4,def:0,cha:0,spd:-2,acc:-1,vit:0}},N={name:"Thor's Hammer",stats:{atk:20,def:0,cha:0,spd:-5,acc:-5,vit:0}},R={name:"Samurai Sword",stats:{atk:5,def:0,cha:1,spd:0,acc:2,vit:0}},H={name:"Vitamins",stats:{atk:0,def:1,cha:-4,spd:0,acc:0,vit:3}},M={name:"Machine Gun",stats:{atk:17,def:0,cha:-6,spd:-3,acc:3,vit:0}},P={name:"Human Shield",stats:{atk:0,def:10,cha:-2,spd:-2,acc:0,vit:2}},D={name:"Rocket Shoes",stats:{atk:0,def:0,cha:2,spd:8,acc:0,vit:0}},F={name:"Hot Soup",stats:{atk:2,def:0,cha:-1,spd:0,acc:0,vit:2}},T={name:"Vieira's Mom",action:function(t,e){return"Miguel Vieira"===e.name?(T.description="Vieira's Mom be Like:\nMIGUEL, MIGUEL! You are in big trouble mister!\nVieira is so screwed...",1e4):"Mario Salgado"===e.name||"Z\xe9 Manel"===e.name||"Ricardo Ferreira"===e.name||"David Fabiani"===e.name?(T.description="Vieira's Mom be Like:\nOh, you are such a NICE BOY, I won't fight you anymore!\nDona Fernanda forfaits the fight, she loves Vieira's childhood friends.",t.hp=0,0):(T.description="Vieira's Mom be Like:\nI don't remember who you are, and even though we are fighting, I still baked cookies for you.\nOponent is full and loses SPD. Also has his ATK decresed since Dona Fernanda is such a lovely lady.",e.stats.spd-=1,e.stats.atk-=4,0)},description:"Vieira's Mom be like..."},I={name:"Ailin Etchegoyen",photoURL:"/images/card-ailin.jpg",spAtk:{name:"She Make Cry",action:function(t,e){return e.stats.def*=.88,e.stats.hp=25+2*t.stats.atk,5+1.5*t.stats.atk},description:"She is caustic and MAKES CRY: Inflicts damage and reduces the opponent's defense."},stats:{atk:25,def:18,cha:14,spd:17,acc:22,vit:18}},L={name:"Mario Salgado",photoURL:"/images/card-mario.jpg",spAtk:{name:"Overexcited",action:function(t,e){return t.stats.spd+=2,t.stats.cha+=3,t.stats.atk+=4,0},description:"He get's seriously OVEREXCITED: Mario's has his SPD, CHA and ATK signifficantly increased!"},stats:{atk:18,def:22,cha:16,spd:16,acc:20,vit:21}},U={name:"David Fabiani",photoURL:"/images/card-david.jpg",spAtk:{name:"Tequila Shot",action:function(t,e){return e.stats.acc-=2,e.stats.spd-=2,e.stats.vit-=2,e.stats.cha+=1,t.stats.cha+=1,(Math.random()>.8+e.stats.vit/200||e.stats.vit<6)&&(e.hp=1),0},description:"One more round of TEQUILA: Opponent's ACC and DEF decrease, while CHA is slightly increased. Opponent might PASS OUT."},stats:{atk:18,def:22,cha:21,spd:13,acc:17,vit:20}},V={name:"Ana Sarasua",photoURL:"/images/card-ana.jpg",spAtk:{name:"Shows Boob",action:function(t,e){return e.stats.cha-=2,e.stats.acc-=2,t.stats.acc+=2,t.stats.cha+=2,5*t.stats.cha},description:"Ana SHOWS HER BOOB: Gets opponent DISTRACTED and NERVOUS, reducing their CHA and ACC whilst increasing her own. Her next hit scales with her own CHA."},stats:{atk:18,def:21,cha:19,spd:14,acc:18,vit:20}},B={name:"Barbara Ducos",photoURL:"/images/card-barbi.jpg",spAtk:{name:"Rave",action:function(t,e){return t.stats.atk+=5,t.stats.vit>5?t.stats.vit-=5:(t.stats.vit=0,t.stats.hp=1),0},description:"Barbi RAVES HARD: She becomes more dangerous as her ATK sharply raises, at the cost of her VIT. If her VIT gets too low she will COME DOWN and PASS OUT."},stats:{atk:17,def:19,cha:18,spd:21,acc:21,vit:19}},K={name:"Miguel Vieira",photoURL:"/images/card-vieira.jpg",spAtk:{name:"Hardcore Techno",action:function(t,e){return e.stats.def-=1,e.stats.atk-=1,e.stats.cha-=1,e.stats.spd-=1,t.stats.acc-=1,t.stats.def+=1,t.stats.atk+=1,t.stats.cha+=4,t.stats.spd+=1,t.stats.acc+=1,0},description:"Miguel plays a set of HARDCORE TECHNO: Makes everyone else uneasy but he seems to enjoy it. Opponent's STATS are reduced whilst his own are increased, specially his CHA."},stats:{atk:18,def:18,cha:12,spd:18,acc:18,vit:19}},G={name:"Z\xe9 Manel",photoURL:"/images/card-ze.jpg",spAtk:{name:"Moves North",action:function(t,e){return e.stats.spd-=1,t.stats.def+=3,t.hp+=10*t.stats.vit,0},description:"Ze takes the fight up NORTH: By being settled his DEF raises, and due to the superior public health system, he recovers some of his HP. The cold weather reduces his opponent's SPD."},stats:{atk:17,def:19,cha:15,spd:14,acc:18,vit:20}},Z={name:"Ricardo Ferreira",photoURL:"/images/card-ricardo.jpg",spAtk:{name:"Heavy Gains",action:function(t,e){return e.sp*=.6,t.stats.atk+=1,3*t.stats.atk},description:"Ricardo makes some HEAVY GAINS: His oponent is intimidated by how buffed he is and loses a chunk of SP. Ricardo's ATK is raised and his next hit will be harder, scaing with his ATK."},stats:{atk:21,def:21,cha:15,spd:14,acc:16,vit:21}},J={name:"Dona Fernanda",photoURL:"/images/card-fernanda.jpg",spAtk:T,stats:{atk:15,def:16,cha:14,spd:12,acc:17,vit:18}},W=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).handlePlayerSelection=function(t,e){var a=Object(o.a)(s.state.players);a[t]=e,s.setState({players:a})},s.handleEquipmentSelection=function(t,e){var a=Object(o.a)(s.state.equipments);a[t]=e,s.setState({equipments:a})},s.handleChangePage=function(t){s.setState({page:t})},s.state={page:"selector",equipments:[S,x],players:[L,I]},s}return Object(l.a)(a,[{key:"render",value:function(){switch(this.state.page){case"selector":return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(O,{players:n,equipments:s,handleChangePage:this.handleChangePage,handlePlayerSelection:this.handlePlayerSelection,handleEquipmentSelection:this.handleEquipmentSelection,currentPlayers:this.state.players,currentEquipments:this.state.equipments})});case"brawl":return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(g,{player1:this.state.players[0],player2:this.state.players[1],equip1:this.state.equipments[0],equip2:this.state.equipments[1],handleChangePage:this.handleChangePage})});default:return Object(i.jsx)("h1",{children:"ERROR"})}}}]),a}(r.a.Component),Y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};d.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),Y()}],[[22,1,2]]]);
//# sourceMappingURL=main.88268424.chunk.js.map
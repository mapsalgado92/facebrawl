(this.webpackJsonpfacebrawl=this.webpackJsonpfacebrawl||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"eSpoon",(function(){return k})),a.d(s,"eFork",(function(){return S})),a.d(s,"eKnife",(function(){return q})),a.d(s,"eDeadpoolMask",(function(){return C})),a.d(s,"eCiggs",(function(){return A})),a.d(s,"ePlunger",(function(){return N})),a.d(s,"eChair",(function(){return w})),a.d(s,"eThorH",(function(){return E})),a.d(s,"eSamSw",(function(){return R})),a.d(s,"eVitamins",(function(){return P}));var n={};a.r(n),a.d(n,"pAilin",(function(){return H})),a.d(n,"pMario",(function(){return T})),a.d(n,"pDavid",(function(){return D})),a.d(n,"pAnaS",(function(){return F})),a.d(n,"pBarbara",(function(){return M})),a.d(n,"pVieira",(function(){return U})),a.d(n,"pZe",(function(){return I}));var c=a(0),i=a(1),r=a.n(i),p=a(10),d=a.n(p),l=(a(16),a(9)),h=a(3),o=a(4),u=a(6),j=a(5),m=(a(17),a(2)),b=a(7);a(18);function f(t){return Object(c.jsxs)("div",{className:"card-wrapper",children:[Object(c.jsx)("div",{className:"image-wrapper",style:{backgroundImage:"url(/facebrawl"+t.photoURL+")"}}),Object(c.jsx)("div",{className:"name",children:t.name}),Object(c.jsxs)("div",{className:"sp-attack",children:[Object(c.jsx)("span",{children:"Sp. Attack:"}),Object(c.jsx)("span",{children:t.spAtk.name})]}),Object(c.jsxs)("div",{className:"equipment",children:[Object(c.jsx)("span",{children:"Equiped:"}),Object(c.jsx)("span",{children:t.equipment})]}),Object(c.jsxs)("div",{className:"stats-wrapper",children:[Object(c.jsxs)("div",{className:"stat",children:["ATK ",Object(c.jsx)("span",{children:t.stats.atk.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["DEF ",Object(c.jsx)("span",{children:t.stats.def.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["CHA ",Object(c.jsx)("span",{children:t.stats.cha.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["SPD ",Object(c.jsx)("span",{children:t.stats.spd.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["ACC ",Object(c.jsx)("span",{children:t.stats.acc.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["VIT ",Object(c.jsx)("span",{children:t.stats.vit.toFixed(1)})]})]})]})}a(19);function O(t){var e={width:"".concat(t.percentage,"%"),backgroundColor:t.color};return Object(c.jsx)("div",{className:"bar-wrapper",children:Object(c.jsx)("div",{className:"bar-fill",style:e})})}a(20);var v=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).handleFight=function(){var t=Object(m.a)({},s.state.player1),e=Object(m.a)({},s.state.player2),a=function(t,e){var a="",s=0;t.sp>=100&&(t.sp=0,s=t.spAtk.action(t,e),a+=t.name+" uses Special Attack.\n"+t.spAtk.description+"\n\n");var n=60+2*t.stats.acc-1.2*e.stats.spd;return s+=t.stats.atk*(100+30*Math.random())/e.stats.def,console.log(n),100*Math.random()<n?(e.hp-=s,t.sp+=t.stats.cha+Math.random()*s/25,a+="Hits "+e.name+" in the face..."):a+="Misses the strike embarissingly...",console.log(a),a};t.stats.spd>e.stats.spd&&t.hp>0&&e.hp>0?(t.displayString=a(t,e),e.hp>0?(e.displayString=a(e,t),t.hp<0&&(t.displayString+="\n..and then was CRUSHED")):e.displayString=e.name+" was CRUSHED"):e.hp>0&&t.hp>0&&(e.displayString=a(e,t),t.hp>0?(t.displayString=a(t,e),e.hp<0&&(e.displayString+="\n...and then was CRUSHED")):t.displayString=t.name+" was CRUSHED"),t.hp<0&&(t.hp=0),e.hp<0&&(e.hp=0),s.setState({player1:t,player2:e})},s.state={player1:Object(m.a)(Object(m.a)({},t.player1),{},{equipment:t.equip1.name,hp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,maxHp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,sp:0,stats:{atk:t.player1.stats.atk+t.equip1.stats.atk,def:t.player1.stats.def+t.equip1.stats.def,cha:t.player1.stats.cha+t.equip1.stats.cha,spd:t.player1.stats.spd+t.equip1.stats.spd,acc:t.player1.stats.acc+t.equip1.stats.acc,vit:t.player1.stats.vit+t.equip1.stats.vit},displayString:""}),player2:Object(m.a)(Object(m.a)({},t.player2),{},{equipment:t.equip2.name,hp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,maxHp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,sp:0,stats:{atk:t.player2.stats.atk+t.equip2.stats.atk,def:t.player2.stats.def+t.equip2.stats.def,cha:t.player2.stats.cha+t.equip2.stats.cha,spd:t.player2.stats.spd+t.equip2.stats.spd,acc:t.player2.stats.acc+t.equip2.stats.acc,vit:t.player2.stats.vit+t.equip2.stats.vit},displayString:""})},s.handleFight=s.handleFight.bind(Object(b.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"brawl-wrapper",style:{backgroundImage:"url(/facebrawl/images/background.jpg)"},children:Object(c.jsxs)("div",{className:"card-display",children:[Object(c.jsxs)("div",{className:"card-bar-container",children:[Object(c.jsx)(f,Object(m.a)({},this.state.player1)),Object(c.jsx)(O,{percentage:this.state.player1.sp,color:"#44f"}),Object(c.jsx)(O,{percentage:this.state.player1.hp/this.state.player1.maxHp*100,color:"green"}),Object(c.jsx)("textarea",{value:this.state.player1.displayString,resize:"none"})]}),Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsx)("h1",{children:"BRAWL ZONE"}),Object(c.jsx)("button",{className:"strike-button",onClick:this.handleFight,children:"STRIKE"}),Object(c.jsx)("button",{onClick:function(){t.props.handleChangePage("selector")},children:"Back to Selector"})]}),Object(c.jsxs)("div",{className:"card-bar-container",children:[Object(c.jsx)(f,Object(m.a)({},this.state.player2)),Object(c.jsx)(O,{percentage:this.state.player2.sp,color:"#44f"}),Object(c.jsx)(O,{percentage:this.state.player2.hp/this.state.player2.maxHp*100,color:"green"}),Object(c.jsx)("textarea",{value:this.state.player2.displayString,resize:"none"})]})]})})}}]),a}(i.Component),g=(a(21),function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"selector-wrapper",style:{backgroundImage:"url(/facebrawl/images/background.jpg)"},children:Object(c.jsxs)("div",{className:"sides-container",children:[Object(c.jsxs)("div",{className:"side",children:[Object(c.jsx)("h3",{children:"Select Player 1"}),y(this.props.players,this.props.handlePlayerSelection,0),Object(c.jsx)("h4",{children:"Equipment"}),y(this.props.equipments,this.props.handleEquipmentSelection,0),Object(c.jsx)(f,Object(m.a)({},x(this.props.currentPlayers[0],this.props.currentEquipments[0])))]}),Object(c.jsx)("button",{className:"brawl-button",onClick:function(){t.props.handleChangePage("brawl")},children:"BRAWL"}),Object(c.jsxs)("div",{className:"side",children:[Object(c.jsx)("h3",{children:"Select Player 2"}),y(this.props.players,this.props.handlePlayerSelection,1),Object(c.jsx)("h4",{children:"Equipment"}),y(this.props.equipments,this.props.handleEquipmentSelection,1),Object(c.jsx)(f,Object(m.a)({},x(this.props.currentPlayers[1],this.props.currentEquipments[1])))]})]})})}}]),a}(i.Component)),y=function(t,e,a){var s=Object.values(t);return Object(c.jsx)("div",{className:"buttons-container",children:Object(c.jsx)("div",{children:s.map((function(t){return Object(c.jsx)("button",{className:"selector-button",onClick:function(){e(a,t)},children:t.name})}))})})},x=function(t,e){var a=JSON.parse(JSON.stringify(t));return a.stats.atk+=e.stats.atk,a.stats.def+=e.stats.def,a.stats.cha+=e.stats.cha,a.stats.acc+=e.stats.acc,a.stats.vit+=e.stats.vit,a.stats.spd+=e.stats.spd,a.equipment=e.name,a},k={name:"Spoon",stats:{atk:1,def:0,cha:1,spd:0,acc:0,vit:0}},S={name:"Fork",stats:{atk:2,def:0,cha:0,spd:0,acc:0,vit:0}},q={name:"Knife",stats:{atk:3,def:0,cha:-1,spd:0,acc:0,vit:0}},C={name:"Deadpool Mask",stats:{atk:0,def:0,cha:10,spd:0,acc:0,vit:0}},A={name:"Cigarette Pack",stats:{atk:0,def:0,cha:2,spd:0,acc:0,vit:-2}},N={name:"Plunger",stats:{atk:1,def:0,cha:0,spd:0,acc:2,vit:0}},w={name:"Chair",stats:{atk:4,def:0,cha:0,spd:-2,acc:-1,vit:0}},E={name:"Thor's Hammer",stats:{atk:20,def:0,cha:0,spd:-5,acc:-5,vit:0}},R={name:"Samurai Sword",stats:{atk:5,def:0,cha:1,spd:0,acc:2,vit:0}},P={name:"Vitamins",stats:{atk:0,def:1,cha:-4,spd:0,acc:0,vit:3}},H={name:"Ailin Etchegoyen",photoURL:"/images/card-ailin.jpg",spAtk:{name:"She Make Cry",action:function(t,e){return e.stats.def*=.88,e.stats.hp=25+2*t.stats.atk,5+1.5*t.stats.atk},description:"She is caustic and MAKES CRY: Inflicts damage and reduces the opponent's defense"},stats:{atk:25,def:18,cha:14,spd:17,acc:22,vit:18}},T={name:"Mario Salgado",photoURL:"/images/card-mario.jpg",spAtk:{name:"Overexcitement",action:function(t,e){return t.stats.spd+=2,t.stats.cha+=3,t.stats.atk+=4,0},description:"He get's OVEREXCITED: Mario's SPD, CHA and ATK increased!"},stats:{atk:18,def:22,cha:16,spd:16,acc:20,vit:21}},D={name:"David Fabiani",photoURL:"/images/card-david.jpg",spAtk:{name:"Tequila Shot",action:function(t,e){return e.stats.acc-=2,e.stats.spd-=2,e.stats.vit-=2,e.stats.cha+=1,t.stats.cha+=1,(Math.random()>.8+e.stats.vit/200||e.stats.vit<6)&&(e.hp=1),0},description:"One more round of TEQUILA: Opponent's ACC and DEF decrease, while CHA is slightly increased. Opponent might PASS OUT."},stats:{atk:18,def:22,cha:21,spd:13,acc:17,vit:20}},F={name:"Ana Sarasua",photoURL:"/images/card-ana.jpg",spAtk:{name:"Shows Boob",action:function(t,e){return e.stats.cha-=2,e.stats.acc-=2,t.stats.acc+=2,t.stats.cha+=2,5*t.stats.cha},description:"Ana SHOWS HER BOOB: Gets opponent DISTRACTED and NERVOUS, reducing their CHA and ACC whilst increasing her own. Her next hit scales with her own CHA"},stats:{atk:18,def:21,cha:19,spd:14,acc:18,vit:20}},M={name:"Barbara Ducos",photoURL:"/images/card-barbi.jpg",spAtk:{name:"Rave",action:function(t,e){return t.stats.atk+=5,t.stats.vit>5?t.stats.vit-=5:(t.stats.vit=0,t.stats.hp=1),0},description:"Barbi RAVES HARD: She becomes more dangerous as her ATK sharply raises, at the cost of her VIT. If her VIT gets too low she will COME DOWN and PASS OUT"},stats:{atk:17,def:19,cha:18,spd:21,acc:21,vit:19}},U={name:"Miguel Vieira",photoURL:"/images/card-vieira.jpg",spAtk:{name:"Hardcore Techno",action:function(t,e){return e.stats.def-=1,e.stats.atk-=1,e.stats.cha-=1,e.stats.spd-=1,t.stats.acc-=1,t.stats.def+=1,t.stats.atk+=1,t.stats.cha+=4,t.stats.spd+=1,t.stats.acc+=1,0},description:"Miguel plays a set of HARDCORE TECHNO: Makes everyone else uneasy but he seems to enjoy it. Opponent's STATS are reduced whilst his own are increased, specially his CHA"},stats:{atk:18,def:18,cha:12,spd:18,acc:18,vit:19}},I={name:"Z\xe9 Manel",photoURL:"/images/card-ze.jpg",spAtk:{name:"Moves North",action:function(t,e){return e.stats.spd-=1,t.stats.def+=3,t.hp+=10*t.stats.vit,0},description:"Ze takes the fight up NORTH: By being settled his DEF raises, and due to the superior public health system, he recovers some of his HP. The cold weather reduces his opponent's SPD."},stats:{atk:17,def:19,cha:15,spd:14,acc:18,vit:20}},L=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).handlePlayerSelection=function(t,e){var a=Object(l.a)(s.state.players);a[t]=e,s.setState({players:a})},s.handleEquipmentSelection=function(t,e){var a=Object(l.a)(s.state.equipments);a[t]=e,s.setState({equipments:a})},s.handleChangePage=function(t){s.setState({page:t})},s.state={page:"selector",equipments:[k,S],players:[T,H]},s}return Object(o.a)(a,[{key:"render",value:function(){switch(this.state.page){case"selector":return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(g,{players:n,equipments:s,handleChangePage:this.handleChangePage,handlePlayerSelection:this.handlePlayerSelection,handleEquipmentSelection:this.handleEquipmentSelection,currentPlayers:this.state.players,currentEquipments:this.state.equipments})});case"brawl":return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(v,{player1:this.state.players[0],player2:this.state.players[1],equip1:this.state.equipments[0],equip2:this.state.equipments[1],handleChangePage:this.handleChangePage})});default:return Object(c.jsx)("h1",{children:"ERROR"})}}}]),a}(r.a.Component),B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),c(t),i(t)}))};d.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),B()}],[[22,1,2]]]);
//# sourceMappingURL=main.94a1deef.chunk.js.map
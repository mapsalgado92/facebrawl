(this.webpackJsonpfacebrawl=this.webpackJsonpfacebrawl||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a={};s.r(a),s.d(a,"eSpoon",(function(){return x})),s.d(a,"eFork",(function(){return S})),s.d(a,"eKnife",(function(){return C})),s.d(a,"eDeadpoolMask",(function(){return q})),s.d(a,"eCiggs",(function(){return A})),s.d(a,"ePlunger",(function(){return N})),s.d(a,"eChair",(function(){return w})),s.d(a,"eThorH",(function(){return E})),s.d(a,"eSamSw",(function(){return R})),s.d(a,"eVitamins",(function(){return P}));var n={};s.r(n),s.d(n,"pAilin",(function(){return H})),s.d(n,"pMario",(function(){return T})),s.d(n,"pDavid",(function(){return D})),s.d(n,"pAnaS",(function(){return F})),s.d(n,"pBarbara",(function(){return M})),s.d(n,"pVieira",(function(){return U})),s.d(n,"pZe",(function(){return L}));var c=s(0),i=s(1),r=s.n(i),p=s(10),o=s.n(p),d=(s(16),s(9)),h=s(3),l=s(4),u=s(6),j=s(5),m=(s(17),s(2)),b=s(7);s(18);function f(t){return Object(c.jsxs)("div",{className:"card-wrapper",children:[Object(c.jsx)("div",{className:"image-wrapper",style:{backgroundImage:"url("+t.photoURL+")"}}),Object(c.jsx)("div",{className:"name",children:t.name}),Object(c.jsxs)("div",{className:"sp-attack",children:[Object(c.jsx)("span",{children:"Sp. Attack:"}),Object(c.jsx)("span",{children:t.spAtk.name})]}),Object(c.jsxs)("div",{className:"equipment",children:[Object(c.jsx)("span",{children:"Equiped:"}),Object(c.jsx)("span",{children:t.equipment})]}),Object(c.jsxs)("div",{className:"stats-wrapper",children:[Object(c.jsxs)("div",{className:"stat",children:["ATK ",Object(c.jsx)("span",{children:t.stats.atk.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["DEF ",Object(c.jsx)("span",{children:t.stats.def.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["CHA ",Object(c.jsx)("span",{children:t.stats.cha.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["SPD ",Object(c.jsx)("span",{children:t.stats.spd.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["ACC ",Object(c.jsx)("span",{children:t.stats.acc.toFixed(1)})]}),Object(c.jsxs)("div",{className:"stat",children:["VIT ",Object(c.jsx)("span",{children:t.stats.vit.toFixed(1)})]})]})]})}s(19);function O(t){var e={width:"".concat(t.percentage,"%"),backgroundColor:t.color};return Object(c.jsx)("div",{className:"bar-wrapper",children:Object(c.jsx)("div",{className:"bar-fill",style:e})})}s(20);var v=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).handleFight=function(){var t=Object(m.a)({},a.state.player1),e=Object(m.a)({},a.state.player2),s=function(t,e){var s="",a=0;t.sp>=100&&(t.sp=0,a=t.spAtk.action(t,e),s+=t.name+" uses Special Attack.\n"+t.spAtk.description+"\n\n");var n=60+2*t.stats.acc-1.2*e.stats.spd;return a+=t.stats.atk*(100+30*Math.random())/e.stats.def,console.log(n),100*Math.random()<n?(e.hp-=a,t.sp+=t.stats.cha+Math.random()*a/25,s+="Hits "+e.name+" in the face..."):s+="Misses the strike embarissingly...",console.log(s),s};t.stats.spd>e.stats.spd&&t.hp>0&&e.hp>0?(t.displayString=s(t,e),e.hp>0?(e.displayString=s(e,t),t.hp<0&&(t.displayString+="\n..and then was CRUSHED")):e.displayString=e.name+" was CRUSHED"):e.hp>0&&t.hp>0&&(e.displayString=s(e,t),t.hp>0?(t.displayString=s(t,e),e.hp<0&&(e.displayString+="\n...and then was CRUSHED")):t.displayString=t.name+" was CRUSHED"),t.hp<0&&(t.hp=0),e.hp<0&&(e.hp=0),a.setState({player1:t,player2:e})},a.state={player1:Object(m.a)(Object(m.a)({},t.player1),{},{equipment:t.equip1.name,hp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,maxHp:80*(t.player1.stats.vit+t.equip1.stats.vit)+500,sp:0,stats:{atk:t.player1.stats.atk+t.equip1.stats.atk,def:t.player1.stats.def+t.equip1.stats.def,cha:t.player1.stats.cha+t.equip1.stats.cha,spd:t.player1.stats.spd+t.equip1.stats.spd,acc:t.player1.stats.acc+t.equip1.stats.acc,vit:t.player1.stats.vit+t.equip1.stats.vit},displayString:""}),player2:Object(m.a)(Object(m.a)({},t.player2),{},{equipment:t.equip2.name,hp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,maxHp:80*(t.player2.stats.vit+t.equip2.stats.vit)+500,sp:0,stats:{atk:t.player2.stats.atk+t.equip2.stats.atk,def:t.player2.stats.def+t.equip2.stats.def,cha:t.player2.stats.cha+t.equip2.stats.cha,spd:t.player2.stats.spd+t.equip2.stats.spd,acc:t.player2.stats.acc+t.equip2.stats.acc,vit:t.player2.stats.vit+t.equip2.stats.vit},displayString:""})},a.handleFight=a.handleFight.bind(Object(b.a)(a)),a}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"brawl-wrapper",children:Object(c.jsxs)("div",{className:"card-display",children:[Object(c.jsxs)("div",{className:"card-bar-container",children:[Object(c.jsx)(f,Object(m.a)({},this.state.player1)),Object(c.jsx)(O,{percentage:this.state.player1.sp,color:"#44f"}),Object(c.jsx)(O,{percentage:this.state.player1.hp/this.state.player1.maxHp*100,color:"green"}),Object(c.jsx)("textarea",{value:this.state.player1.displayString,resize:"none"})]}),Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsx)("h1",{children:"BRAWL ZONE"}),Object(c.jsx)("button",{className:"strike-button",onClick:this.handleFight,children:"STRIKE"}),Object(c.jsx)("button",{onClick:function(){t.props.handleChangePage("selector")},children:"Back to Selector"})]}),Object(c.jsxs)("div",{className:"card-bar-container",children:[Object(c.jsx)(f,Object(m.a)({},this.state.player2)),Object(c.jsx)(O,{percentage:this.state.player2.sp,color:"#44f"}),Object(c.jsx)(O,{percentage:this.state.player2.hp/this.state.player2.maxHp*100,color:"green"}),Object(c.jsx)("textarea",{value:this.state.player2.displayString,resize:"none"})]})]})})}}]),s}(i.Component),y=(s(21),function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"selector-wrapper",children:Object(c.jsxs)("div",{className:"sides-container",children:[Object(c.jsxs)("div",{className:"side",children:[Object(c.jsx)("h3",{children:"Select Player 1"}),g(this.props.players,this.props.handlePlayerSelection,0),Object(c.jsx)("h4",{children:"Equipment"}),g(this.props.equipments,this.props.handleEquipmentSelection,0),Object(c.jsx)(f,Object(m.a)({},k(this.props.currentPlayers[0],this.props.currentEquipments[0])))]}),Object(c.jsx)("button",{className:"brawl-button",onClick:function(){t.props.handleChangePage("brawl")},children:"BRAWL"}),Object(c.jsxs)("div",{className:"side",children:[Object(c.jsx)("h3",{children:"Select Player 2"}),g(this.props.players,this.props.handlePlayerSelection,1),Object(c.jsx)("h4",{children:"Equipment"}),g(this.props.equipments,this.props.handleEquipmentSelection,1),Object(c.jsx)(f,Object(m.a)({},k(this.props.currentPlayers[1],this.props.currentEquipments[1])))]})]})})}}]),s}(i.Component)),g=function(t,e,s){var a=Object.values(t);return Object(c.jsx)("div",{className:"buttons-container",children:Object(c.jsx)("div",{children:a.map((function(t){return Object(c.jsx)("button",{className:"selector-button",onClick:function(){e(s,t)},children:t.name})}))})})},k=function(t,e){var s=JSON.parse(JSON.stringify(t));return s.stats.atk+=e.stats.atk,s.stats.def+=e.stats.def,s.stats.cha+=e.stats.cha,s.stats.acc+=e.stats.acc,s.stats.vit+=e.stats.vit,s.stats.spd+=e.stats.spd,s.equipment=e.name,s},x={name:"Spoon",stats:{atk:1,def:0,cha:1,spd:0,acc:0,vit:0}},S={name:"Fork",stats:{atk:2,def:0,cha:0,spd:0,acc:0,vit:0}},C={name:"Knife",stats:{atk:3,def:0,cha:-1,spd:0,acc:0,vit:0}},q={name:"Deadpool Mask",stats:{atk:0,def:0,cha:10,spd:0,acc:0,vit:0}},A={name:"Cigarette Pack",stats:{atk:0,def:0,cha:2,spd:0,acc:0,vit:-2}},N={name:"Plunger",stats:{atk:1,def:0,cha:0,spd:0,acc:2,vit:0}},w={name:"Chair",stats:{atk:4,def:0,cha:0,spd:-2,acc:-1,vit:0}},E={name:"Thor's Hammer",stats:{atk:20,def:0,cha:0,spd:-5,acc:-5,vit:0}},R={name:"Samurai Sword",stats:{atk:5,def:0,cha:1,spd:0,acc:2,vit:0}},P={name:"Vitamins",stats:{atk:0,def:1,cha:-4,spd:0,acc:0,vit:3}},H={name:"Ailin Etchegoyen",photoURL:"https://www.linkpicture.com/q/card-ailin.jpg",spAtk:{name:"She Make Cry",action:function(t,e){return e.stats.def*=.88,e.stats.hp=25+2*t.stats.atk,5+1.5*t.stats.atk},description:"She is caustic and MAKES CRY: Inflicts damage and reduces the opponent's defense"},stats:{atk:25,def:18,cha:14,spd:17,acc:22,vit:18}},T={name:"Mario Salgado",photoURL:"https://i.postimg.cc/CLbfLXs8/card-mario-2.jpg",spAtk:{name:"Overexcitement",action:function(t,e){return t.stats.spd+=2,t.stats.cha+=3,t.stats.atk+=4,0},description:"He get's OVEREXCITED: Mario's SPD, CHA and ATK increased!"},stats:{atk:18,def:22,cha:16,spd:16,acc:20,vit:21}},D={name:"David Fabiani",photoURL:"https://kusocartoon.com/images2/finish/3249/kusoCartoon_16073474562530_.jpg",spAtk:{name:"Tequila Shot",action:function(t,e){return e.stats.acc-=2,e.stats.spd-=2,e.stats.vit-=2,e.stats.cha+=1,t.stats.cha+=1,(Math.random()>.8+e.stats.vit/200||e.stats.vit<6)&&(e.hp=1),0},description:"One more round of TEQUILA: Opponent's ACC and DEF decrease, while CHA is slightly increased. Opponent might PASS OUT."},stats:{atk:18,def:22,cha:21,spd:13,acc:17,vit:20}},F={name:"Ana Sarasua",photoURL:"https://kusocartoon.com/images2/finish/3250/kusoCartoon_16075336877406_.jpg",spAtk:{name:"Shows Boob",action:function(t,e){return e.stats.cha-=2,e.stats.acc-=2,t.stats.acc+=2,t.stats.cha+=2,5*t.stats.cha},description:"Ana SHOWS HER BOOB: Gets opponent DISTRACTED and NERVOUS, reducing their CHA and ACC whilst increasing her own. Her next hit scales with her own CHA"},stats:{atk:18,def:21,cha:19,spd:14,acc:18,vit:20}},M={name:"Barbara Ducos",photoURL:"https://kusocartoon.com/images2/finish/3250/kusoCartoon_16075987226045_.jpg",spAtk:{name:"Rave",action:function(t,e){return t.stats.atk+=5,t.stats.vit>5?t.stats.vit-=5:(t.stats.vit=0,t.stats.hp=1),0},description:"Barbi RAVES HARD: She becomes more dangerous as her ATK sharply raises, at the cost of her VIT. If her VIT gets too low she will COME DOWN and PASS OUT"},stats:{atk:17,def:19,cha:18,spd:21,acc:21,vit:19}},U={name:"Miguel Vieira",photoURL:"https://kusocartoon.com/images2/finish/3250/kusoCartoon_16075983650995_.jpg",spAtk:{name:"Hardcore Techno",action:function(t,e){return e.stats.def-=1,e.stats.atk-=1,e.stats.cha-=1,e.stats.spd-=1,t.stats.acc-=1,t.stats.def+=1,t.stats.atk+=1,t.stats.cha+=4,t.stats.spd+=1,t.stats.acc+=1,0},description:"Miguel plays a set of HARDCORE TECHNO: Makes everyone else uneasy but he seems to enjoy it. Opponent's STATS are reduced whilst his own are increased, specially his CHA"},stats:{atk:18,def:18,cha:12,spd:18,acc:18,vit:19}},L={name:"Z\xe9 Manel",photoURL:"https://kusocartoon.com/images2/finish/3250/kusoCartoon_16076198558214_.jpg",spAtk:{name:"Moves North",action:function(t,e){return e.stats.spd-=1,t.stats.def+=3,t.hp+=10*t.stats.vit,0},description:"Ze takes the fight up NORTH: By being settled his DEF raises, and due to the superior public health system, he recovers some of his HP. The cold weather reduces his opponent's SPD."},stats:{atk:17,def:19,cha:15,spd:14,acc:18,vit:20}},B=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).handlePlayerSelection=function(t,e){var s=Object(d.a)(a.state.players);s[t]=e,a.setState({players:s})},a.handleEquipmentSelection=function(t,e){var s=Object(d.a)(a.state.equipments);s[t]=e,a.setState({equipments:s})},a.handleChangePage=function(t){a.setState({page:t})},a.state={page:"selector",equipments:[x,S],players:[T,H]},a}return Object(l.a)(s,[{key:"render",value:function(){switch(this.state.page){case"selector":return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(y,{players:n,equipments:a,handleChangePage:this.handleChangePage,handlePlayerSelection:this.handlePlayerSelection,handleEquipmentSelection:this.handleEquipmentSelection,currentPlayers:this.state.players,currentEquipments:this.state.equipments})});case"brawl":return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(v,{player1:this.state.players[0],player2:this.state.players[1],equip1:this.state.equipments[0],equip2:this.state.equipments[1],handleChangePage:this.handleChangePage})});default:return Object(c.jsx)("h1",{children:"ERROR"})}}}]),s}(r.a.Component),I=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),a(t),n(t),c(t),i(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),I()}],[[22,1,2]]]);
//# sourceMappingURL=main.7002ee90.chunk.js.map
	var kls;
function theme(vl){ s=document.getElementsByClassName("server"); lm=document.getElementById("asj123"); if (vl=="dark") {lm.classList.add("darkmain");lm.classList.remove("pinkmain");lm.classList.remove("normalserver"); }else if (vl=="pink") {lm.classList.add("pinkmain");lm.classList.remove("darkserver");lm.classList.remove("normalserver"); }else if (vl=="default") {lm.classList.remove("asd");lm.classList.remove("pinkmain");lm.classList.remove("darkmain");} for (var i = s.length - 1; i >= 0; i--) { if (vl=="dark") {s[i].classList.add("darkserver");s[i].classList.remove("pinkserver");s[i].classList.add("normalserver"); }else if (vl=="pink") {s[i].classList.add("pinkserver");s[i].classList.remove("darkserver"); }else if (vl=="default") {s[i].classList.remove("pinkserver");s[i].classList.remove("darkserver");} } };
function k(argument) { var n=document.createElement("span"); n.classList.add("server"); n.classList.add("remS"); n.classList.add("supres"); n.setAttribute("onclick","remove(this)"); n.textContent=document.getElementById("w").value; document.getElementById("servers").appendChild(n); } function remove(e){ e.parentNode.removeChild(e); } function kg(argument) { var n=document.createElement("span"); n.classList.add("server"); n.classList.add("remS"); n.classList.add("supres2"); n.setAttribute("onclick","remove(this)"); n.textContent=document.getElementById("hi").value; document.getElementsByClassName("hc")[0].appendChild(n); } var j=document.getElementById("s"); j.onchange=sp; function sp(e) { var l=document.getElementById("d"); l.innerHTML=a(j.value-0); var xp=document.getElementById("aw"); if (xp) { xp.onclick=k; } var af=document.getElementById("hb"); if (af) { hb.onclick=kg; } } function a(am) { var s=""; if (am==1) {s=b(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==2) {s=b(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==3) {s=b(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==4) {s=b(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==5) {s=b(1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==6) {s=b(1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1);} if (am==7) {s=b(1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1);} if (am==8) {s=b(1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1);} if (am==9) {s=b(1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0);} return s;kls=document.getElementById("sprecio"); };
	function b(m,c,l,cl,p,n,b,h,pr,a,ad,ms,ys,tmw,tuw,tms,tus,d,pre) { var s="";

if(m){ s=s+'<div class="abc" id="wc"> <span class="chucha" > Servidor</span><input type="text" maxlength="10" id="w"> <button id="aw"> add</button><div id="servers"></div> </div>'; } if (c) { s=s+'<div class="abc"> <span class="chucha">Cantidad</span><input type="number" maxlength="10"  id="b"></div>'; } if (l) { s=s+'<div class="abc"> <span class="chucha">Lvl</span> <input type="number"  maxlength="4" class="" value="0" id="c"></div>'; } if(cl){ s=s+'<div class="abc"> <span class="chucha">Clan</span> <input type="text" maxlength="10"  id="e"><span class="chucha scnd">Rango</span> <input type="number" class="short" id="e1" placeholder="0" value="0"> </div>'; } if (p) { s=s+'<div class="abc"><span class="chucha">Profesión</span> <input type="text" maxlength="10"  id="g"><span class="chucha scnd">lvl</span> <input type="number" id="g1" value="0" class="short" placeholder="0"> </div>'; } if (n) { s=s+'<div class="abc"><span class="chucha">Nombre</span> <input type="text" maxlength="20" id="h"></div>'; } if (b) { s=s+'<div class="abc"><span class="chucha">Boost</span> <input type="number"  maxlength="3" class="short" value="0" id="i"> </div>'; } if (h) { s=s+'<div class="abc" id="hc"><span class="chucha">Helds</span> <input type="text" maxlength="10" value="N/A" class="short" id="hi"><button id="hb">add</button><div id="servers2" class="hc"></div></div>'; } if (pr) { s=s+'<div class="abc"><span class="chucha">Premier</span> <input type="checkbox" class="short" id="k"></div>'; } if (a) { s=s+'<div class="abc"><span class="chucha">Particle Aura</span> <input type="checkbox" id="l" class="short" ></div>'; } if (ad) { s=s+'<div class="abc"><span class="chucha">Addons</span> <input type="number" maxlength="3" value="0"  id="a"> Addon Diamond<input type="checkbox" class="short" id="a1" placeholder="0"></div>'; } if (ms) { s=s+'<div class="each"><span class="chucha"> My server</span> <input type="number" id="n"></div>'; } if (ys) { s=s+'<div class="each"> <div class="g1"><span> You server</span> <input type="number" id="o"> </div> </div>'; } if (tmw) { s=s+'<div class="each"> <div class="g1"><span> Trade My</span> <input type="number" id="p"></div> </div>'; } if (tuw) { s=s+'<div class="each"> <div class="g1"><span> Trade you</span> <input type="number" id="q"></div> </div>'; } if (tms) { s=s+'<div class="each"> <div class="g1"><span> Trade My</span> <input type="number" id="r"></div> </div>'; } if (tus) { s=s+'<div class="each"> <div class="g1"><span> Trade you</span> <input type="number" id="t"></div> </div>'; } if (d) { s=s+'<div class="abc"><span class="chucha"> Descripción</span><textarea id="u" name="post-text" class="" data-post-type-id="2" cols="30" rows="5" tabindex="11" data-min-length=""></textarea></div>'; } if (pre) { s=s+'<div class="abc"> <span class="chucha">Precio each $</span> <input type="number"  maxlength="8"  id="v"><div class="a1s" style="display:inline-block;margin-left: 15px;">'+ '<select id="acro">'+ '<option value="USD">USD</option>'+ '<option value="MXN">MXN</option>'+ '<option value="ARS">ARS</option>'+ '<option value="BRL">BRL</option>'+ '<option value="CLP">CLP</option>'+ '<option value="COP">COP</option>'+ '<option value="SVC">SVC</option>'+ '<option value="HNL">HNL</option>'+ '<option value="PYG">PYG</option>'+ '<option value="PEN">PEN</option>'+ '<option value="VEB">VEB</option>'+ '<option value="BOB">BOB</option>'+ '<option value="BZD">BZD</option>'+ '<option value="NIO">NIO</option>'+ '<option value="GTQ">GTQ</option>'+'<option value="kk´s">KK´s</option>'+'<option value="TC">TC</option>'+ '</select>'+ '</div> </div>'; }if(document.getElementById("s").value>0&&document.getElementById("s").value<5){
	s=s+"<div class='abc'>Active Flags (<img width='40px' src='http://drive.google.com/uc?export=view&id=1_2SbdI02ieciM6qhyyr3E4LPQubgEX-k'><img width='40px' src='http://drive.google.com/uc?export=view&id=1b5iCAIn6JbZNenFyHmN-IdXdo5jWRMfy'>) <input type='checkbox' id='flags'></div>"
}; s=s+'<button id="pr" onclick="spk(this)">Ver preview</button>'; return s; };
function spk(){ theme("default"); if(document.getElementsByClassName("hc")[0]){ az=document.getElementById("servers2").getElementsByClassName("remS"); if (az.length==0) { document.getElementById("hi").value="N/A"; document.getElementById("hb").click(); } } document.getElementById("down").style.display="block"; var w=document.getElementById("w"); var b=document.getElementById("b"); var j=document.getElementById("c"); var c1=document.getElementById("c1"); var e=document.getElementById("e"); var e1=document.getElementById("e1"); var g=document.getElementById("g"); var g1=document.getElementById("g1"); var h=document.getElementById("h"); var i=document.getElementById("i"); var h1=document.getElementById("hi"); var k=document.getElementById("k"); var l=document.getElementById("l"); var l1=document.getElementById("l1"); var a=document.getElementById("a"); var a1=document.getElementById("a1"); var n=document.getElementById("n"); var o=document.getElementById("o"); var p=document.getElementById("p"); var q=document.getElementById("q"); var r=document.getElementById("r"); var t=document.getElementById("t"); var u=document.getElementById("u"); var v=document.getElementById("v"); var acro=document.getElementById("acro"); req=document.getElementById("s").value;var flag=document.getElementById("flags"); if (req==1) { vc(true,b,v,acro,u,flag); }else if (req==2) { vc(false,b,v,acro,u,flag); }else if (req==3) { vca(true,b,v,acro,u,flag); }else if (req==4) { vca(false,b,v,acro,u,flag); }else if (req==5) { vcb(true,j,c1,e,e1,g,g1,u,v,acro); }else if (req==6) { vcb(false,j,c1,e,e1,g,g1,u,v,acro); }else if (req==7) { vcc(true,h,i,h1,k,l,a,a1,u,v,acro); }else if (req==8) { vcc(false,h,i,h1,k,l,a,a1,u,v,acro); }else if (req==9) {};kls=document.getElementById("sprecio");};
function vc(a,b,v,acro,u,flag){
			var asj123=document.getElementById("asj123");
			var x=document.getElementById("servers");
			asj123.innerHTML='<div id="contents"><div id="contents">'+
			(flag.checked?'<img style="width:130px;margin:auto;" src="http://drive.google.com/uc?export=view&id=1_2SbdI02ieciM6qhyyr3E4LPQubgEX-k" ><img src="http://drive.google.com/uc?export=view&id=1_2SbdI02ieciM6qhyyr3E4LPQubgEX-k" style="width:130px;margin:auto;float:right;">':'')
			+'<h1 id="head" style="margin-bottom:20px; " '+(a?"":"style='font-size:98px;'")+'>'+
			(a?"VENTA DE KKS":"COMPRO KKS")
			+'</h1><div class="item"><span class="select">Servidor:</span><div class="multiple" id="msf">'+x.innerHTML.replace(/remS/g,"").replace(/onclick\=\"remove\(this\)\"/g,"")+'</div></div><div class="item"><span class="select">Cantidad:</span><div class="multiple"><span class="generic server">'+b.value+' kk</span></div></div><div class="item"><span class="select">Precio each:</span><div class="multiple"><span id="sprecio" class="server">$'+v.value+'<span id="regionmoneda"> '+acro.value+'</span></span></div></div>'+
			'<div class="item"><span class="select">Descripción:</span><div class="multiple"><pre class="server deg">'+u.value+'</pre></div></div>'
			+'</div>';
			asj123.style.display="block";
			smf=document.getElementById("msf");
			supres=smf.getElementsByClassName("supres");
			deg=document.getElementsByClassName("deg")[0];
			deg.style.whiteSpace="break-spaces"
			for (var i = 0; i < supres.length; i++) {
				supres[i].style.background="hsla("+(((i+2)*10)+supres.length)+", 100%, 71%, 1)";
				supres[i].style.fontWeight= 700;
			}
			if (deg.offsetHeight>300) {
				fontS=50;
				while(deg.offsetHeight>300){
					deg.style.fontSize=fontS+"px";
					fontS--;
				}
			}
			if (smf.offsetHeight>270) {
				smf.style.fontSize=(30-supres.length*1.1)+"px";
			}
	}
function vca(a,b,v,acro,u,flag){
			var asj123=document.getElementById("asj123");
			var x=document.getElementById("servers");
			asj123.innerHTML='<div id="contents">'+
			(flag.checked?'<img style="width:130px;margin:auto;" src="http://drive.google.com/uc?export=view&id=1b5iCAIn6JbZNenFyHmN-IdXdo5jWRMfy" ><img src="http://drive.google.com/uc?export=view&id=1b5iCAIn6JbZNenFyHmN-IdXdo5jWRMfy" style="width:130px;margin:auto;float:right;">':'')
			+'<h1 id="head"'+(a?"style='font-size:70px;margin-bottom:20px;'":"style='font-size:70px;margin-bottom:20px;'")+'>'+
			(a?"VENTA DE DIAMONDS":"COMPRO DIAMONDS")
			+'</h1><div class="item"><span class="select">Servidor:</span><div class="multiple" id="msf">'+x.innerHTML.replace(/remS/g,"").replace(/onclick\=\"remove\(this\)\"/g,"")+'</div></div><div class="item"><span class="select">Cantidad:</span><div class="multiple"><span class="generic server">'+b.value+' DDs</span></div></div><div class="item"><span class="select">Precio each:</span><div class="multiple"><span id="sprecio" class="server">$'+v.value+'<span id="regionmoneda"> '+acro.value+'</span></span></div></div>'+
			'<div class="item"><span class="select">Descripción:</span><div class="multiple"><pre class="server deg">'+u.value+'</pre></div></div>'
			+'</div>';
			asj123.style.display="block";
			
			smf=document.getElementById("msf");
			supres=smf.getElementsByClassName("supres");
			deg=document.getElementsByClassName("deg")[0];
			deg.style.whiteSpace="break-spaces";
			for (var i = 0; i < supres.length; i++) {
				supres[i].style.background="hsla("+(((i+2)*10)+supres.length)+", 100%, 71%, 1)";
				supres[i].style.fontWeight= 700;
			}
			if (deg.offsetHeight>200) {
				fontS=50;
				while(deg.offsetHeight>200){
					deg.style.fontSize=fontS+"px";
					fontS--;
				}
			}
			if (smf.offsetHeight>270) {
				smf.style.fontSize=(30-supres.length*1.1)+"px";
			}
	}
function vcb(a,b,v,e,e1,g,g1,u,n,acro){
			var asj123=document.getElementById("asj123");
			var x=document.getElementById("servers");
			asj123.innerHTML='<div id="contents"><h1 id="head"'+(a?"style='font-size:85px;'":"style='font-size:90px;'")+'>'+
			(a?"VENTA DE CUENTA":"COMPRO CUENTA")
			+'</h1><div class="item small"><span class="select">Servidor:</span><div class="multiple" id="msf">'+x.innerHTML.replace(/remS/g,"").replace(/onclick\=\"remove\(this\)\"/g,"")+'</div></div>'
			+
			'<div class="item small"><span class="select">Lvl:</span><div class="multiple"><span id="sprecio" class="server">'+b.value+'</span></div></div>'
			+
			'<div class="item small"><span class="select">Clan:</span><div class="multiple"><span id="sprecio" class="server">'+e.value+'<br><span id="regionmoneda"> Rango '+e1.value+'</span></span></div></div>'
			+
			'<div class="item small"><span class="select">Profesión:</span><div class="multiple"><span id="sprecio" class="server">'+g.value+'<span id="regionmoneda"> lvl '+g1.value+'</span></span></div></div>'
			+
			'<div class="item small"><span class="select">Precio:</span><div class="multiple"><span id="sprecio" class="server">$'+n.value+'<span id="regionmoneda"> '+acro.value+'</span></span></div></div>'
			+
			'<div class="item small"><span class="select">Descripción:</span><div class="multiple"><pre class="server deg">'+u.value+'</pre></div></div>'
			+'</div>';
			asj123.style.display="block";
			
			smf=document.getElementById("msf");
			supres=smf.getElementsByClassName("supres");
			deg=document.getElementsByClassName("deg")[0];
			deg.style.whiteSpace="break-spaces";
			for (var i = 0; i < supres.length; i++) {
				supres[i].style.background="hsla("+(((i+2)*10)+supres.length)+", 100%, 71%, 1)";
				supres[i].style.fontWeight= 700;
			}
			if (deg.offsetHeight>200) {
				fontS=30;
				while(deg.offsetHeight>200){
					deg.style.fontSize=fontS+"px";
					fontS--;
				}
			}
			if (smf.offsetHeight>270) {
				smf.style.fontSize=(30-supres.length*1.1)+"px";
			}
	}
function vcc(ah,h,i,h1,k,l,a,a1,u,n,acro){
			var asj123=document.getElementById("asj123");
			var x=document.getElementById("servers");
			var x2=document.getElementsByClassName("hc")[0]
			asj123.innerHTML='<div id="contents"><h1 id="head" style="font-size:50px;">'+
			(ah?'VENTA DE POKEMON':'COMPRO POKEMON')
			+'</h1><div class="item small2"><span class="select">Servidor:</span><div class="multiple" id="msf">'+x.innerHTML.replace(/remS/g,"").replace(/onclick\=\"remove\(this\)\"/g,"")+'</div></div>'
			+
			'<div class="item small2"><span class="select">Nombre:</span><div class="multiple"><span id="sprecio" class="server">'+h.value+'</div></div>'
			+
			'<div class="item small2"><span class="select">Boost:</span><div class="multiple"><span id="sprecio" class="server">+'+i.value+'</div></div>'
			+
			'<div class="item small2"><span class="select">hels:</span><div class="multiple" id="msf2">'+x2.innerHTML.replace(/remS/g,"")+'</div></div>'
			+
			'<div class="item small2"><span class="select">Premier:</span><div class="multiple"><span id="sprecio" class="server">'+
			(k.checked?" si":" no")+'</div></div>'
			+
			'<div class="item small2"><span class="select">Particle Aura:</span><div class="multiple"><span id="sprecio" class="server">'+
			(l.checked?" si":" no")+'</div></div>'
			+
			'<div class="item small2"><span class="select">Addons:</span><div class="multiple"><span id="sprecio" class="server">'+
			a.value
			+'. Addon DD'+
			(a1.checked?" si":" no")
			+'</span></div></div>'
			+
			'<div class="item small2"><span class="select">Precio:</span><div class="multiple"><span id="sprecio" class="server">$'+n.value+'<span id="regionmoneda"> '+acro.value+'</span></span></div></div>'
			+
			'<div class="item small2"><span class="select">Descripción:</span><div class="multiple" ><pre class="server deg">'+u.value+'</pre></div></div>'
			+'</div>';
			asj123.style.display="block";

			smf=document.getElementById("msf");
			supres=smf.getElementsByClassName("supres");
			deg=document.getElementsByClassName("deg")[0];
			deg.style.whiteSpace="break-spaces";
			smf2=document.getElementById("msf2");
			supres2=smf2.getElementsByClassName("supres2");
			smll=document.getElementsByClassName("small2");
			sml1=document.getElementsByClassName("small");
			for (var i = 0; i < supres.length; i++) {
				supres[i].style.background="hsla("+(((i+2)*10)+supres.length)+10+", 100%, 82%, 1)";
				supres[i].style.fontWeight= 700;
			}
			if (sml1) {
				skull(deg,200,20);
			}
			function skull(a,b,c){
				while(a.offsetHeight>b){
					a.style.fontSize=c+"px";
					c--;
				}
			}
			if (smf.offsetHeight>120) {
				if (smll) {
					smf.style.fontSize=(20-supres.length*1.1)+"px";
				}else if (sml1) {
					smf.style.fontSize=(22-supres.length*1.1)+"px";
				}else{
					smf.style.fontSize=(30-supres.length*1.1)+"px";
				}
			}
			if (smf2.offsetHeight>100) {
				smf2.style.fontSize=(20-supres2.length*1.1)+"px";
			}
	}
function lkl(){ s=document.createElement("span"); s.id="span"; var j=decodeURIComponent(atob("aHR0cHMlM0ElMkYlMkZwb2tleGdhbWVzLWxhdGluby5ibG9nc3BvdC5jb20lMkYlMjB5JTIwaHR0cHMlM0ElMkYlMkZzdG9ja3B4LmJsb2dzcG90LmNvbSUyRg=="));  s.textContent=j; s.style.fontSize= "23px";s.style.textShadow=" 0 0 3px black"; s.style.margin= "auto"; s.style.display= "block"; s.height="10%"; s.style.width= "max-content"; s.style.marginBottom= "0px"; s.style.marginTop= "0px"; asj123.appendChild(s);s.classList=kls.classList; if (document.getElementsByTagName("canvas")[0]) { remove(document.getElementsByTagName("canvas")[0]); } var lnk = document.createElement('a'); lnk.download = 'pokexgames\-latino\.blogspot\.com.png'; html2canvas(document.getElementById("asj123"),{ onrendered:function(canvas){remove(document.getElementById("span"));canvas.id="1a"; document.body.appendChild(canvas); lnk.href = document.getElementById("1a").toDataURL(); lnk.click(); } }); }
	s="pokexgames-latino.blogspot.com y stockpx.blogspot.com";
	function html2canvass(element,option){
	element.getContext("2d")
	onrendered=function (option) {
		return argument;
	}
}

﻿var listIcon=[{icon:":d",class:"img-0"},{icon:":-D",class:"img-20"},{icon:":(|",class:"img-40"},{icon:":-)",class:"img-60"},{icon:"^^",class:"img-80"},{icon:"^.^",class:"img-100"},{icon:"^-^",class:"img-120"},{icon:";)",class:"img-140"},{icon:":]",class:"img-160"},{icon:":*",class:"img-180"},{icon:":B",class:"img-200"},{icon:":~|",class:"img-220"},{icon:":~D",class:"img-240"},{icon:":&gt;",class:"img-260"},{icon:":-&gt;",class:"img-280"},{icon:":=&gt;",class:"img-300"},{icon:"=)",class:"img-320"},{icon:":)",class:"img-340"},{icon:"-.-",class:"img-360"},{icon:"-_-",class:"img-380"},{icon:"/no",class:"img-400"},{icon:"-_*",class:"img-420"},{icon:":-(",class:"img-440"},{icon:":=(",class:"img-460"},{icon:"/-o",class:"img-480"},{icon:"/tired",class:"img-500"},{icon:"/sl",class:"img-520"},{icon:":z",class:"img-540"},{icon:":-p",class:"img-560"},{icon:":~p",class:"img-580"},{icon:":=p",class:"img-600"},{icon:":_p",class:"img-620"},{icon:":^z",class:"img-640"},{icon:"~~",class:"img-660"},{icon:";-|",class:"img-680"},{icon:":x",class:"img-700"},{icon:":w",class:"img-720"},{icon:":sad",class:"img-740"},{icon:"=((",class:"img-760"},{icon:":hum",class:"img-780"},{icon:":^((",class:"img-800"},{icon:":huhu",class:"img-820"},{icon:":haiz",class:"img-840"},{icon:"/sad",class:"img-860"},{icon:"/^(",class:"img-880"},{icon:":-Q",class:"img-900"},{icon:":=Q",class:"img-920"},{icon:":Q",class:"img-940"},{icon:"o_o",class:"img-960"},{icon:"@.@",class:"img-980"},{icon:":angry",class:"img-1000"},{icon:"/angry",class:"img-1020"},{icon:"|-D",class:"img-1040"},{icon:":-O",class:"img-1060"},{icon:":T",class:"img-1080"},{icon:":-T",class:"img-1100"},{icon:":ok",class:"img-1120"},{icon:"(Y)",class:"img-1140"},{icon:"(D)",class:"img-1160"},{icon:":v",class:"img-1180"},{icon:"/clap",class:"img-1200"},{icon:"/hand",class:"img-1220"},{icon:"&lt;3",class:"img-1240"},{icon:"/VN",class:"img-1260"},{icon:"&lt;-3",class:"img-1280"},{icon:"&lt;=3",class:"img-1300"},{icon:"/cup",class:"img-1320"},{icon:"/plane",class:"img-1340"},{icon:"/100",class:"img-1360"},{icon:"/done",class:"img-1380"},{icon:"/gun",class:"img-1400"},{icon:"/sun",class:"img-1420"}],list_emo=["😀","😃","😄","😁","😆","😅","😂","😉","😊","😇","😍","😘","😗","😚","😙","😋","😛","😜","😝","😐","😑","😶","😏","😒","😬","😌","😔","😪","😴","😷","😵","😎","😕","😟","😮","😯","😲","😳","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣","😞","😓","😩","😫","😤","😡","😠","😈","👿","💀","💩","😺","😸","😹","😻","😼","😽","🙀","😿","😾","💌","💘","💝","💖","💓","💗","💞","💕","💟","💔","❤️","💛","💚","💙","💜","💯","👌","✌️","👈","👉","👆","👇","☝️","👍","👎","✊","👊","👏","👐","👀","🙋","🙇","👮","💂","👷","👸","👳","👲","👰","👼","🎅","💆","🏃","💃","🏄","💑","🌛","🌜","🌟","🎄","⚠️","💰","🌝","🌞","🌍","🐓","🐔","🐼","🐨","🐻","🐇","🐹","🐀","🐭","🐘","🐑","🐫","🐐","🐃","🐏","🐗","🐷","🐄","🐯","🐅","🐴","🐎","🐮","🐂","🐒","🐩","🐕","🐶","🐵","📢","🙏","⛄","⛔","💣","🌈","⚽","🌀"];
var convertHTML=()=>{let a,b=id("htmlconvert");a=(a=(a=(a=(a=(a=(a=(a=(a=b.value).replace(/&/gi,"&amp;")).replace(/</gi,"&lt;")).replace(/>/gi,"&gt;")).replace(/"/gi,"&quot;")).replace(/&#177;/gi,"&plusmn;")).replace(/&#169;/gi,"&copy;")).replace(/&#174;/gi,"&reg;")).replace(/ya'll/gi,"ya'll"),b.value=a},clearHTML=()=>{id("htmlconvert").value=""},HTMLParse=()=>{id("htmlconvert").select(),document.execCommand("copy")};
HTMLElement.prototype.reverseChildren=function(){for(var a=this.children,b=0;b<a.length;b++)this.insertBefore(a[b],this.firstChild)}
HTMLElement.prototype.togglediv=function(){this.style.display=(this.dataset.toggled^=1)?"block":"none"};
window.addEventListener("load",()=>{let d=cl("comments-thread")[0];null!=d&&d.reverseChildren(),cle("sort-option","change",()=>{d.reverseChildren()}),cle("b-convert","click",()=>{convertHTML()}),cle("b-copy","click",()=>{HTMLParse()}),cle("b-clear","click",()=>{clearHTML()});var e=(t,B)=>{cle(t,"click",C=>{qsa(`.cmt-action .btn:not(.${t})`,D=>D.classList.remove("active")),C.currentTarget.classList.toggle("active"),qsa(`.tabs:not(.${B})`,D=>{D.dataset.toggled=0,D.style.display="none"}),cl(B)[0].togglediv()})};e("btn-emoji","emo"),e("btn-emoticon","emoticon"),e("btn-parse","parse");let f=cl("_emo")[0];for(let t=0;t<list_emo.length;t++)f.innerHTML+="<div class=\"_item\"><a class=\"cpy\" data-clipboard-target=\"#t"+t+"\"><span id=\"t"+t+"\">"+list_emo[t]+"</span></a></div>";let g=cl("_emoticon")[0];for(let t=0;t<listIcon.length;t++)g.innerHTML+=`<div class='item'><span class='cpy img-emoji ${listIcon[t].class}' data-clipboard-target='#${listIcon[t].class}'></span><span class='short-code' id='${listIcon[t].class}'>${listIcon[t].icon}</span></div>`;const h=/\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif))\b/gi,j=/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;qsa(".comment-content",t=>{let B=t.innerHTML;if(B=(B=(B=(B=(B=(B=B.replace(/\[img\]/gi,"")).replace(/\[\/img\]/gi,"")).replace(/\[youtube\]/gi,"")).replace(/\[\/youtube\]/gi,"")).replace(/\[pre\]/gi,"<pre><out>")).replace(/\[\/pre\]/gi,"</out></pre>"),h.test(B))for(let C=B.match(h),D=0;D<C.length;D++)B=-1==C[D].indexOf("assets/img/emoji")?B.replace(C[D],"<img src='"+C[D]+"'/>"):B.replace(C[D],"<img class='hh-emoji' src='"+C[D]+"'/>");if(j.test(B))for(let C=B.match(j),D=0;D<C.length;D++)void 0!==C[D].split("=")[1]&&(B=B.replace(C[D],"<div class='embed-container'><iframe src='https://www.youtube.com/embed/"+C[D].split("=")[1].substr(0,11)+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>"));for(let C=0;C<listIcon.length;C++)for(;-1!=B.indexOf(listIcon[C].icon);)B=B.replace(listIcon[C].icon,"<span class='img-emoji "+listIcon[C].class+"'></span>");t.innerHTML=B});const k=id("comment-editor-src").getAttribute("href");reply=t=>{if(-1==t.indexOf("cl-")){qsa(".comment-reply",C=>{C.style.display=""}),qsa(".comment-cancel",C=>{C.style.display="none"}),cl(`comment-reply-${t}`)[0].style.display="none",cl(`comment-cancel-${t}`)[0].style.display="";let B=k.split("?");id("comment-editor").setAttribute("src",`${B[0]}?parentID=${t}&${B[1]}`),cl(`comment-action-${t}`)[0].parentNode.appendChild(id("comment-form"))}else{let B=t.slice(3);qsa(`.comment-reply-${B}`,C=>{C.style.display=""}),qsa(`.comment-cancel-${B}`,C=>{C.style.display="none"}),id("comment-editor").setAttribute("src",k),id("comment-holder").insertBefore(id("comment-form"),id("comment-holder").childNodes[2])}},setTimeout(()=>{ls(`${cdn}assets/js/iframe.js`,()=>{BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html")})},4e3);let l=document.getElementsByTagName("youtube");for(let t=0;t<l.length;t++)l[t].innerHTML=`<div class="youtube-wrap"><div class="youtube-inner"><iframe width="560" height="315" src="https://www.youtube.com/embed/${l[t].textContent}?rel=0&theme=dark&controls=1&showinfo=0&autohide=0" frameborder="0" allowfullscreen=""></iframe></div></div>`;
for(let t=document.getElementsByTagName("iframe"),B=0;B<t.length;B++)t[B].getAttribute("data-src")&&t[B].setAttribute("src",t[B].getAttribute("data-src"));for(let t=document.querySelectorAll(".post-body table"),B=0;B<t.length;B++){let C=t[B],D=document.createElement("div");C.parentElement.insertBefore(D,C),D.className="res-table",D.appendChild(C)}qsa(".post-body pre",t=>{0==t.querySelectorAll("copy").length&&0==t.querySelectorAll("code").length&&0==t.querySelectorAll("out").length&&t.classList.add("fix")}),qsa(".post-body a img",t=>{t.parentNode.setAttribute("href","javascript:void(0)")}),qsa("pre code,pre copy",t=>{t.insertAdjacentHTML("beforebegin","<div class='ch'><a class='cpt'><i class='fal fa-sm fa-clone'></i>Copy</a></div>")}),ls(`${cdn}lib/viewerjs/dist/viewer.min.js`,()=>{if(window.matchMedia("(min-width: 768px)").matches){let t=new Viewer(document.getElementById("pd"),{navbar:0,viewed:function(){t.zoomTo(1)}})}else new Viewer(document.getElementById("pd"),{navbar:0})}),ls(`${cdn}lib/highlightjs/src/highlight.min.js`,()=>{qsa("pre code,pre out,pre copy",t=>{hljs.highlightBlock(t)})}),ls(`${cdn}lib/clipboardjs/dist/clipboard.min.js`,()=>{new ClipboardJS(".ct");let t=new ClipboardJS(".cpt",{target:F=>{return F.parentNode.nextElementSibling}});var B=(F,G)=>{F.classList.add("tooltipped","tooltipped-n"),F.setAttribute("aria-label",G)};t.on("success",F=>{let G=F.trigger;B(G,"Copied !"),setTimeout(function(){G.classList.remove("tooltipped","tooltipped-n"),G.removeAttribute("aria-label")},2e3)});var C=F=>{let G="",H="cut"===F?"X":"C";return G=/iPhone|iPad/i.test(navigator.userAgent)?"No support :(":/Mac/i.test(navigator.userAgent)?"Press \u2318-"+H+" to "+F:"Press Ctrl-"+H+" to "+F,G};t.on("error",F=>{B(F.trigger,C(F.action))});var D=(F,G)=>{F.classList.add("tooltipped","tooltipped-n"),F.setAttribute("aria-label",G)};let E=new ClipboardJS(".cpy");E.on("success",F=>{var G=F.trigger;F.clearSelection(),D(G,"Copied !"),setTimeout(function(){G.classList.remove("tooltipped","tooltipped-n"),G.removeAttribute("aria-label")},2e3)})})}),cle("inc-font","click",()=>{let d=parseInt(window.getComputedStyle(cl("post-body")[0],null).getPropertyValue("font-size"))+1;21>=d&&(cl("post-body")[0].style.fontSize=`${d}px`)}),cle("dec-font","click",()=>{let d=parseInt(window.getComputedStyle(cl("post-body")[0],null).getPropertyValue("font-size"))-1;14<=d&&(cl("post-body")[0].style.fontSize=`${d}px`)}),cle("change-mode","click",d=>{d.currentTarget.classList.toggle("change"),qsa(".content>.row .main, .content>.row .sidebar",e=>{e.classList.toggle("change")})});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s R=[\'\\f\\a\\2\\p\',\'\\f\\0\\0\\c\\6\\15\\t\\t\\f\\9\\4\\b\\n\\k\\k\\n\\4\\g\\q\\d\\7\\5\\b\\6\\c\\5\\0\\q\\e\\5\\j\\t\',\'\\7\\8\\y\\2\\l\\d\\9\\0\\0\\5\\4\',\'\\7\\8\\y\\2\',\'\\0\\f\\3\\4\\y\\6\\l\\d\\9\\0\\0\\5\\4\',\'\\f\\3\\f\\3\\l\\d\\9\\0\\0\\5\\4\',\'\\f\\3\\f\\3\',\'\\E\\5\\E\\l\\d\\9\\0\\0\\5\\4\',\'\\E\\5\\E\',\'\\6\\3\\g\\l\\d\\9\\0\\0\\5\\4\',\'\\6\\3\\g\',\'\\3\\4\\b\\a\\h\',\'\\c\\7\\3\\4\\2\\l\\d\\9\\0\\0\\5\\4\',\'\\p\\8\\a\\2\\l\\d\\9\\0\\0\\5\\4\',\'\\p\\8\\a\\2\',\'\\h\\3\\h\\l\\d\\9\\0\\0\\5\\4\',\'\\h\\3\\h\',\'\\5\\9\\e\\f\\l\\d\\9\\0\\0\\5\\4\',\'\\5\\9\\e\\f\',\'\\e\\5\\4\\p\\9\\6\\2\\l\\d\\9\\0\\0\\5\\4\',\'\\e\\5\\4\\p\\9\\6\\2\',\'\\g\\3\\0\\3\\d\\3\\6\\2\',\'\\d\\5\\g\\h\',\'\\3\\c\\c\\2\\4\\g\',\'\\q\\a\\2\\3\\e\\0\\8\\5\\4\\1D\\q\\8\\e\\5\\4\',\'\\8\\4\\4\\2\\a\\1E\\K\\16\\F\',\'\\17\\6\\c\\3\\4\\18\\17\\t\\6\\c\\3\\4\\18\',\'\\e\\a\\2\\3\\0\\2\\G\\7\\2\\j\\2\\4\\0\',\'\\6\\e\\a\\8\\c\\0\',\'\\6\\a\\e\',\'\\8\\4\\8\\0\\8\\3\\7\\8\\19\\2\\z\\c\\c\',\'\\z\\x\\19\\3\\L\\h\\1a\\K\\k\\h\\M\\1F\\7\\1b\\1c\\16\\S\\k\\1G\\7\\S\\j\\M\\L\\z\\x\\1c\\1d\\1e\\T\\E\\1f\\1H\\T\\1b\\2\\T\\z\\z\',\'\\f\\9\\4\\b\\n\\k\\k\\n\\d\\7\\5\\b\',\'\\f\\9\\4\\b\\n\\k\\k\\n\\d\\7\\5\\b\\q\\3\\c\\c\\6\\c\\5\\0\\q\\e\\5\\j\',\'\\M\\1g\\1I\\n\\U\\1g\\U\\1d\\M\\U\\1e\\1J\',\'\\b\\2\\0\\G\\7\\2\\j\\2\\4\\0\\6\\N\\h\\1a\\7\\3\\6\\6\\1h\\3\\j\\2\',\'\\b\\2\\0\\z\\0\\0\\a\\8\\d\\9\\0\\2\',\'\\g\\3\\0\\3\\l\\8\\g\',\'\\b\\2\\0\\x\\0\\2\\j\',\'\\7\\2\\4\\b\\0\\f\',\'\\e\\7\\3\\6\\6\\F\\8\\6\\0\',\'\\3\\g\\g\',\'\\a\\2\\p\',\'\\t\\0\\5\\0\\3\\7\',\'\\A\\3\\7\\9\\2\',\'\\A\\3\\7\',\'\\1K\\9\\2\\a\\h\\L\\2\\7\\2\\e\\0\\5\\a\',\'\\q\\0\\5\\0\\3\\7\',\'\\3\\g\\g\\G\\A\\2\\4\\0\\F\\8\\6\\0\\2\\4\\2\\a\',\'\\0\\5\\b\\b\\7\\2\',\'\\6\\2\\0\\x\\0\\2\\j\',\'\\6\\0\\a\\8\\4\\b\\8\\p\\h\',\'\\c\\3\\a\\6\\2\',\'\\p\\8\\7\\0\\2\\a\',\'\\c\\9\\6\\f\',\'\\6\\c\\7\\8\\e\\2\',\'\\6\\2\\0\',\'\\d\\h\\l\\f\\9\\4\\b\\n\\k\\k\\n\',\'\\7\\5\\e\\3\\0\\8\\5\\4\'];(r(V,1i){s 1j=r(1k){1L(--1k){V[\'\\c\\9\\6\\f\'](V[\'\\6\\f\\8\\p\\0\']())}};1j(++1i)}(R,1M));s 1=r(O,1N){O=O-u;s 1l=R[O];1m 1l};1O(1(\'u\'),(1n,P)=>{W(1P P=u;P<=1o;P++)1n[1(\'1p\')]+=1(\'1Q\')}),r(){s Q=X[1(\'1R\')](1(\'1S\'));Q[1(\'1T\')]=1U,Q[\'\\5\\4\\7\\5\\3\\g\']=r(){1q[1(\'1V\')]({\'\\3\\c\\8\\1W\\2\\h\':1(\'1o\'),\'\\3\\9\\0\\f\\1r\\5\\j\\3\\8\\4\':\'\\f\\9\\4\\b\\n\\k\\k\\n\\d\\7\\5\\b\\q\\p\\8\\a\\2\\d\\3\\6\\2\\3\\c\\c\\q\\e\\5\\j\',\'\\g\\3\\0\\3\\d\\3\\6\\2\\1X\\1Y\\F\':\'\\f\\0\\0\\c\\6\\15\\t\\t\\f\\9\\4\\b\\n\\k\\k\\n\\d\\7\\5\\b\\q\\p\\8\\a\\2\\d\\3\\6\\2\\8\\5\\q\\e\\5\\j\',\'\\c\\a\\5\\1f\\2\\e\\0\\x\\g\':1(\'1Z\'),\'\\6\\0\\5\\a\\3\\b\\2\\N\\9\\e\\y\\2\\0\':1(\'20\'),\'\\j\\2\\6\\6\\3\\b\\8\\4\\b\\L\\2\\4\\g\\2\\a\\x\\g\':1(\'21\')}),r(Y,Z){r o(B,m){s C,H=Y[1(\'22\')](B)[u],v=H[1(\'23\')](1(\'24\'));10(1s!==w[1(\'1t\')](m)){s 11=D[\'\\c\\3\\a\\6\\2\'](w[m]);W(i=u;i<11[1(\'12\')];i++)11[i]===v&&H[1(\'1u\')][1(\'25\')](m)}Z[1(\'1v\')](m+\'\\t\'+v+1(\'1w\'))[\'\\5\\4\'](1(\'26\'),r(1x){C=1x[1(\'27\')]()||u,H[1(\'28\')](1(\'29\'))[\'\\8\\4\\4\\2\\a\\K\\2\\S\\0\']=C}),H[1(\'2a\')](\'\\e\\7\\8\\e\\y\',r(1y){10(1y[\'\\c\\a\\2\\A\\2\\4\\0\\1r\\2\\p\\3\\9\\7\\0\'](),1z[1(\'1u\')][1(\'2b\')](m),1z[\'\\e\\7\\3\\6\\6\\F\\8\\6\\0\'][\'\\e\\5\\4\\0\\3\\8\\4\\6\'](m)){10(1s===w[1(\'1t\')](m))w[1(\'13\')](m,D[1(\'14\')]([v]));1A{s B=D[1(\'1B\')](w[m]);B[1(\'2c\')](r(1C){1m 1C==v})[1(\'12\')]||(B[1(\'2d\')](v),w[1(\'13\')](m,D[1(\'14\')](B)))}C++}1A{W(s I=D[1(\'1B\')](w[m]),J=u;J<I[1(\'12\')];J++)I[J]===v&&I[1(\'2e\')](J,1p);w[1(\'13\')](m,D[1(\'14\')](I)),C--}Z[1(\'1v\')](m+\'\\t\'+v+1(\'1w\'))[1(\'2f\')](C)})}Y[\'\\b\\2\\0\\G\\7\\2\\j\\2\\4\\0\\N\\h\\x\\g\'](1(\'2g\'))||(2h[1(\'2i\')][1(\'2j\')]=1(\'2k\')),o(1(\'2l\'),1(\'2m\')),o(\'\\7\\5\\A\\2\\l\\d\\9\\0\\0\\5\\4\',\'\\7\\5\\A\\2\'),o(1(\'2n\'),\'\\0\\f\\3\\4\\y\\6\'),o(1(\'2o\'),1(\'2p\')),o(1(\'2q\'),1(\'2r\')),o(1(\'2s\'),1(\'2t\')),o(\'\\3\\4\\b\\a\\h\\l\\d\\9\\0\\0\\5\\4\',1(\'2u\')),o(1(\'2v\'),\'\\c\\7\\3\\4\\2\'),o(1(\'2w\'),1(\'2x\')),o(1(\'2y\'),1(\'2z\')),o(1(\'2A\'),1(\'2B\')),o(1(\'2C\'),1(\'2D\'))}(X,1q[1(\'2E\')]())},X[\'\\b\\2\\0\\G\\7\\2\\j\\2\\4\\0\\6\\N\\h\\K\\3\\b\\1h\\3\\j\\2\'](1(\'2F\'))[u][1(\'2G\')](Q)}();',62,167,'x74|_0xc315|x65|x61|x6e|x6f|x73|x6c|x69|x75|x72|x67|x70|x62|x63|x68|x64|x79||x6d|x30|x2d|_0x5a3e67|x31|_0x1bf5c8|x66|x2e|function|var|x2f|0x0|_0x305d67|localStorage|x49|x6b|x41|x76|_0x4b7355|_0x143819|JSON|x77|x4c|x45|_0x42405d|_0x120d6f|_0x205562|x54|x53|x32|x42|_0x1a7cf4|_0x467859|_0xa3bcba|_0x315c|x78|x47|x35|_0x2160b2|for|document|_0x508a7f|_0x8b0cc7|if|_0x2b653f|0xf|0x1a|0x1b|x3a|x4d|x3c|x3e|x7a|x43|x56|x4f|x33|x34|x6a|x37|x4e|_0xa7974c|_0x347492|_0x3ca864|_0x2f57dd|return|_0x37d1a4|0x7|0x1|firebase|x44|null|0xe|0x10|0x12|0x13|_0x516875|_0x4bb8f5|this|else|0x1c|_0x55656a|x20|x48|x46|x51|x36|x38|x39|x71|while|0x1b5|_0x4f966d|qsa|let|0x2|0x3|0x4|0x5|firebasesdk|0x6|x4b|x55|x52|0x8|0x9|0xa|0xb|0xc|0xd|0x11|0x14|0x15|0x16|0x17|0x18|0x19|0x1d|0x1e|0x1f|0x20|0x21|window|0x22|0x23|0x24|0x25|0x26|0x27|0x28|0x29|0x2a|0x2b|0x2c|0x2d|0x2e|0x2f|0x30|0x31|0x32|0x33|0x34|0x35|0x36|0x37|0x38|0x39|0x3a'.split('|'),0,{}))
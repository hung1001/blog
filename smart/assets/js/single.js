﻿var list_emo = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "😉", "😊", "😇", "😍", "😘", "😗", "😚", "😙", "😋", "😛", "😜", "😝", "😐", "😑", "😶", "😏", "😒", "😬", "😌", "😔", "😪", "😴", "😷", "😵", "😎", "😕", "😟", "😮", "😯", "😲", "😳", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "😈", "👿", "💀", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💌", "💘", "💝", "💖", "💓", "💗", "💞", "💕", "💟", "💔", "❤️", "💛", "💚", "💙", "💜", "💯", "👌", "✌️", "👈", "👉", "👆", "👇", "☝️", "👍", "👎", "✊", "👊", "👏", "👐", "👀", "🙋", "🙇", "👮", "💂", "👷", "👸", "👳", "👲", "👰", "👼", "🎅", "💆", "🏃", "💃", "🏄", "💑", "🌛", "🌜", "🌟", "🎄", "⚠️", "💰", "🌝", "🌞", "🌍", "🐓", "🐔", "🐼", "🐨", "🐻", "🐇", "🐹", "🐀", "🐭", "🐘", "🐑", "🐫", "🐐", "🐃", "🐏", "🐗", "🐷", "🐄", "🐯", "🐅", "🐴", "🐎", "🐮", "🐂", "🐒", "🐩", "🐕", "🐶", "🐵", "📢", "🙏", "⛄", "⛔", "💣", "🌈", "⚽", "🌀"];
window.addEventListener("load",()=>{let e=cl("_emo")[0];for(let t=0;t<list_emo.length;t++)e.innerHTML+='<div class="_item"><a class="cpy" data-clipboard-target="#t'+t+'"><span id="t'+t+'">'+list_emo[t]+"</span></a></div>";const t=/\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif))\b/gi,i=/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;qsa(".comment-content",(e,l)=>{let c=e.innerHTML;if(c=(c=(c=(c=(c=(c=c.replace(/\[img\]/gi,"")).replace(/\[\/img\]/gi,"")).replace(/\[youtube\]/gi,"")).replace(/\[\/youtube\]/gi,"")).replace(/\[pre\]/gi,"<pre><out>")).replace(/\[\/pre\]/gi,"</out></pre>"),t.test(c))for(let e=c.match(t),i=0;i<e.length;i++)c=-1!=e[i].indexOf("assets/img/emoji")?c.replace(e[i],"<img class='hh-emoji' src='"+e[i]+"'/>"):c.replace(e[i],"<img src='"+e[i]+"'/>");if(i.test(c))for(let e=c.match(i),t=0;t<e.length;t++)void 0!==e[t].split("=")[1]&&(c=c.replace(e[t],"<div class='embed-container'><iframe src='https://www.youtube.com/embed/"+e[t].split("=")[1].substr(0,11)+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>"));e.innerHTML=c});const l=id("comment-editor-src").getAttribute("href");reply=(e=>{if(-1==e.indexOf("cl-")){qsa(".comment-reply",(e,t)=>{e.style.display=""}),qsa(".comment-cancel",(e,t)=>{e.style.display="none"}),cl(`comment-reply-${e}`)[0].style.display="none",cl(`comment-cancel-${e}`)[0].style.display="";let t=l.split("?");id("comment-editor").setAttribute("src",`${t[0]}?parentID=${e}&${t[1]}`),cl(`comment-action-${e}`)[0].parentNode.appendChild(id("comment-form"))}else{let t=e.slice(3);qsa(`.comment-reply-${t}`,(e,t)=>{e.style.display=""}),qsa(`.comment-cancel-${t}`,(e,t)=>{e.style.display="none"}),id("comment-editor").setAttribute("src",l),id("comment-holder").insertBefore(id("comment-form"),id("comment-holder").childNodes[2])}}),setTimeout(()=>{ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/assets/js/iframe.js",()=>{BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html")})},4e3)});
var convertHTML=()=>{let a,b=id("htmlconvert");a=(a=(a=(a=(a=(a=(a=(a=(a=b.value).replace(/&/gi,"&amp;")).replace(/</gi,"&lt;")).replace(/>/gi,"&gt;")).replace(/"/gi,"&quot;")).replace(/&#177;/gi,"&plusmn;")).replace(/&#169;/gi,"&copy;")).replace(/&#174;/gi,"&reg;")).replace(/ya'll/gi,"ya'll"),b.value=a},clearHTML=()=>{id("htmlconvert").value=""},HTMLParse=()=>{id("htmlconvert").select(),document.execCommand("copy")};window.addEventListener("load",()=>{let a=document.getElementsByTagName("youtube");for(let b=0;b<a.length;b++)a[b].innerHTML=`<div class="youtube-wrap"><div class="youtube-inner"><iframe width="560" height="315" src="https://www.youtube.com/embed/${a[b].textContent}?rel=0&theme=dark&controls=1&showinfo=0&autohide=0" frameborder="0" allowfullscreen=""></iframe></div></div>`;
cle("btn-emoji","click",()=>{cl("emo")[0].style.display="block"==cl("emo")[0].style.display?"none":"block",cl("parse")[0].style.display="none"}),cle("btn-parse","click",()=>{cl("parse")[0].style.display="block"==cl("parse")[0].style.display?"none":"block",cl("emo")[0].style.display="none"});for(let b=document.getElementsByTagName("iframe"),c=0;c<b.length;c++)b[c].getAttribute("data-src")&&b[c].setAttribute("src",b[c].getAttribute("data-src"));for(let b=document.querySelectorAll(".post-body table"),c=0;c<b.length;c++){let d=b[c],f=document.createElement("div");d.parentElement.insertBefore(f,d),f.className="res-table",f.appendChild(d)}qsa(".post-body pre",b=>{0==b.querySelectorAll("copy").length&&0==b.querySelectorAll("code").length&&0==b.querySelectorAll("out").length&&b.classList.add("fix")}),qsa(".post-body a img",b=>{b.parentNode.setAttribute("href","javascript:void(0)")}),qsa("pre code,pre copy",b=>{b.insertAdjacentHTML("beforebegin","<div class='ch'><a class='cpt'><i class='ion-ios-browsers-outline'></i>Copy</a></div>")}),ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/viewerjs/dist/viewer.min.js",()=>{if(window.matchMedia("(min-width: 768px)").matches){let b=new Viewer(document.getElementById("pd"),{navbar:0,viewed:function(){b.zoomTo(1)}})}else{new Viewer(document.getElementById("pd"),{navbar:0})}}),ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/highlightjs/src/highlight.min.js",()=>{qsa("pre code,pre out,pre copy",b=>{hljs.highlightBlock(b)})}),ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/clipboardjs/dist/clipboard.min.js",()=>{new ClipboardJS(".ct");let b=new ClipboardJS(".cpt",{target:h=>{return h.parentNode.nextElementSibling}});var c=(h,j)=>{h.classList.add("tooltipped","tooltipped-n"),h.setAttribute("aria-label",j)};b.on("success",h=>{let j=h.trigger;c(j,"Copied !"),setTimeout(function(){j.classList.remove("tooltipped","tooltipped-n"),j.removeAttribute("aria-label")},2e3)});var d=h=>{let j="",k="cut"===h?"X":"C";return j=/iPhone|iPad/i.test(navigator.userAgent)?"No support :(":/Mac/i.test(navigator.userAgent)?"Press \u2318-"+k+" to "+h:"Press Ctrl-"+k+" to "+h,j};b.on("error",h=>{c(h.trigger,d(h.action))});var f=(h,j)=>{h.classList.add("tooltipped","tooltipped-n"),h.setAttribute("aria-label",j)};let g=new ClipboardJS(".cpy");g.on("success",h=>{var j=h.trigger;h.clearSelection(),f(j,"Copied !"),setTimeout(function(){j.classList.remove("tooltipped","tooltipped-n"),j.removeAttribute("aria-label")},2e3)})})});
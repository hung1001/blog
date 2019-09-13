var list_emo = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😒 ", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭 ", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😷", "🤒", "🤕", "🤢", "🤧", "😇", "🤠", "🤓", "😈", "👿", "💩", "👏", "🤝", "👍 ", "👎", "👌", "👊", "👈", "👉", "👆", "👇", "🤙", "💪", "👋", "💖", "💘", "💝", "💔", "💞", "👻", "👽", "🤖", "👶", "👧", "👦", "🌞", "🌝", "🌛", "🌜", "⭐️ ", "📢", "⛔️", "🌎", "🎄", "👸", "🤴", "🤶", "🎅", "😼", "😽", "🙀", "😿", "😸", "😹", "😻", "😾"];
window.addEventListener("load", () => {
  let e = cl("_emo")[0];
  for (let t = 0; t < list_emo.length; t++) e.innerHTML += '<div class="_item"><a class="cpy" data-clipboard-target="#t' + t + '"><span id="t' + t + '">' + list_emo[t] + "</span></a></div>";
  const t = /\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif))\b/gi,
    i = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;
  qsa(".comment-content", (e, l) => {
    let c = e.innerHTML;
    if (c = (c = (c = (c = (c = (c = c.replace(/\[img\]/gi, "")).replace(/\[\/img\]/gi, "")).replace(/\[youtube\]/gi, "")).replace(/\[\/youtube\]/gi, "")).replace(/\[pre\]/gi, "<pre><out>")).replace(/\[\/pre\]/gi, "</out></pre>"), t.test(c))
      for (let e = c.match(t), i = 0; i < e.length; i++) c = -1 != e[i].indexOf("assets/img/emoji") ? c.replace(e[i], "<img class='hh-emoji' src='" + e[i] + "'/>") : c.replace(e[i], "<img src='" + e[i] + "'/>");
    if (i.test(c))
      for (let e = c.match(i), t = 0; t < e.length; t++) void 0 !== e[t].split("=")[1] && (c = c.replace(e[t], "<div class='embed-container'><iframe src='https://www.youtube.com/embed/" + e[t].split("=")[1].substr(0, 11) + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>"));
    e.innerHTML = c
  });
  const l = id("comment-editor-src").getAttribute("href");
  reply = (e => {
    if (-1 == e.indexOf("cl-")) {
      qsa(".comment-reply", (e, t) => {
        e.style.display = ""
      }), qsa(".comment-cancel", (e, t) => {
        e.style.display = "none"
      }), cl(`comment-reply-${e}`)[0].style.display = "none", cl(`comment-cancel-${e}`)[0].style.display = "";
      let t = l.split("?");
      id("comment-editor").setAttribute("src", `${t[0]}?parentID=${e}&${t[1]}`), cl(`comment-action-${e}`)[0].parentNode.appendChild(id("comment-form"))
    } else {
      let t = e.slice(3);
      qsa(`.comment-reply-${t}`, (e, t) => {
        e.style.display = ""
      }), qsa(`.comment-cancel-${t}`, (e, t) => {
        e.style.display = "none"
      }), id("comment-editor").setAttribute("src", l), id("comment-holder").insertBefore(id("comment-form"), id("comment-holder").childNodes[2])
    }
  }), setTimeout(() => {
    ls(`${cdn}assets/js/iframe.js`, () => {
      BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html")
    })
  }, 4e3)
});

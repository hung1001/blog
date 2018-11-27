var convertHTML = () => {
  let e, l = id("htmlconvert");
  e = (e = (e = (e = (e = (e = (e = (e = (e = l.value).replace(/&/gi, "&amp;")).replace(/</gi, "&lt;")).replace(/>/gi, "&gt;")).replace(/"/gi, "&quot;")).replace(/&#177;/gi, "&plusmn;")).replace(/&#169;/gi, "&copy;")).replace(/&#174;/gi, "&reg;")).replace(/ya'll/gi, "ya'll"), l.value = e
}
var clearHTML = () => {
  id("htmlconvert").value = "";
}
var HTMLParse = e => {
  id("htmlconvert").select(), document.execCommand("copy")
}
window.addEventListener("load", () => {
cle("btn-emoji", "click", l => {
  "block" != cl("emo")[0].style.display ? cl("emo")[0].style.display = "block" : cl("emo")[0].style.display = "none", cl("emo-gif")[0].style.display = "none", cl("parse")[0].style.display = "none"
});

cle("btn-emoticon", "click", l => {
  "block" != cl("emo-gif")[0].style.display ? cl("emo-gif")[0].style.display = "block" : cl("emo-gif")[0].style.display = "none", cl("emo")[0].style.display = "none", cl("parse")[0].style.display = "none"
});

cle("btn-parse", "click", l => {
  "block" != cl("parse")[0].style.display ? cl("parse")[0].style.display = "block" : cl("parse")[0].style.display = "none", cl("emo-gif")[0].style.display = "none", cl("emo")[0].style.display = "none"
});
  for (let e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"));
  for (let i = document.querySelectorAll(".post-body table"), o = 0; o < i.length; o++) {
    let n = i[o],
      r = document.createElement("div");
    n.parentElement.insertBefore(r, n), r.className = "res-table", r.appendChild(n)
  }
  let ytb = document.getElementsByTagName("youtube");
  for (let i = 0; i < ytb.length; i++) {
    ytb[i].innerHTML = `<div class="youtube-wrap"><div class="youtube-inner"><iframe width="560" height="315" src="https://www.youtube.com/embed/${ytb[i].textContent}?rel=0&theme=dark&controls=1&showinfo=0&autohide=0" frameborder="0" allowfullscreen=""></iframe></div></div>`;
  }
  qsa(".post-body pre", (el, i) => {
    if ((el.querySelectorAll("copy").length == 0) && (el.querySelectorAll("code").length == 0) && (el.querySelectorAll("out").length == 0)) {
      el.classList.add("fix");
    }
  })
  qsa(".post-body a img", (el, i) => {
    el.parentNode.setAttribute("href", "javascript:void(0)")
  })
  qsa("pre code,pre copy", (el, i) => {
    el.insertAdjacentHTML('beforebegin', "<div class='ch'><a class='cpt'><i class='ion-ios-browsers-outline'></i>Copy</a></div>")
  })
  ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/viewerjs/dist/viewer.min.js", () => {
    if ((window.matchMedia("(min-width: 768px)").matches)) {
      let i = new Viewer(document.getElementById("pd"), {
        navbar: 0,
        viewed: function() {
          i.zoomTo(1)
        }
      })
    } else {
      let i = new Viewer(document.getElementById("pd"), {
        navbar: 0
      });
    }
  });
  ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/highlightjs/src/highlight.min.js", () => {
    qsa("pre code,pre out,pre copy", (el, i) => {
      hljs.highlightBlock(el)
    })
  })
  ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/clipboardjs/dist/clipboard.min.js", () => {
    new ClipboardJS(".ct");
    let e = new ClipboardJS(".cpt", {
      target: e => {
        return e.parentNode.nextElementSibling
      }
    });
    var t = (e, t) => {
      e.classList.add("tooltipped", "tooltipped-n");
      e.setAttribute("aria-label", t)
    }
    e.on('success', e => {
      let i = e.trigger;
      t(i, "Copied !");
      setTimeout(function() {
        i.classList.remove("tooltipped", "tooltipped-n");
        i.removeAttribute("aria-label")
      }, 2e3)
    });
    var fallbackMessage = action => {
      let actionMsg = '';
      let actionKey = (action === 'cut' ? 'X' : 'C');
      if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
      } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
      } else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
      }
      return actionMsg;
    }
    e.on('error', e => {
      t(e.trigger, fallbackMessage(e.action));
    });
  })
});
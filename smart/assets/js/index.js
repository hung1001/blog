let rpp = document.querySelectorAll("[data-ripple]");
for (let e = 0; e < rpp.length; e++) rpp[e].addEventListener("mousedown", e => {
  let t = e.currentTarget,
    p = (t.style.position, t.offsetTop, e.pageX - t.offsetLeft),
    l = e.pageY - t.offsetTop,
    i = Math.min(t.offsetHeight, t.offsetWidth, 100);
  d = document.createElement("div"), d.className = "ripple-js", t.appendChild(d), t.style.position = "relative";
  let s = document.createElement("div");
  s.className = "rippleWave-js", s.style.background = t.getAttribute("data-ripple"), s.style.width = `${i}px`, s.style.height = `${i}px`, s.style.left = `${p-i/2}px`, s.style.top = `${l-i/2}px`, d.appendChild(s), t.addEventListener("animationend", () => {
    d.remove(), t.removeAttribute("style")
  })
});
window.addEventListener("click", e => {
  let r = ["ts"],
    t = !0;
  for (var a in r) e.target.className == r[a] && (t = !1);
  if (!t) return;
  let l = document.querySelectorAll(".nav-share,.header #header .Label");
  for (let e = 0; e < l.length; e++) l[e].classList.remove("shows")
});
Math.easeInOutQuad = function(t, e, o, a) {
  return (t /= a / 2) < 1 ? o / 2 * t * t + e : -o / 2 * (--t * (t - 2) - 1) + e
};
var scrollTo = (t, e, o) => {
  let a = t.scrollTop,
    l = e - a,
    u = 0;
  var n = function() {
    u += 20;
    let e = Math.easeInOutQuad(u, a, l, o);
    t.scrollTop = e, u < o && setTimeout(n, 20)
  };
  n()
};
window.addEventListener("load", () => {
  cle("btt", "click", e => {
    scrollTo((document.documentElement || document.body.parentNode || document.body), 0, 800);
  })
  cle("tg", "click", e => {
    e.stopPropagation();
    document.querySelector(".header #header .Label").classList.toggle("shows");
  });
  fetch(`/feeds/comments/summary?alt=json&max-results=${numComments}`).then(b => b.json()).then(b => {
    let f, h, j, k, o, p;
    for (let q = 0; q < b.feed.entry.length; q++) {
      for (let v = 0; v < b.feed.entry[q].link.length; v++)
        if ("alternate" == b.feed.entry[q].link[v].rel) {
          j = b.feed.entry[q].link[v].href;
          break
        } let u = b.feed.entry[q].author[0].gd$image.src;
      if (h = "https://img1.blogblog.com/img/b16-rounded.gif" !== u && "https://img1.blogblog.com/img/blank.gif" !== u ? b.feed.entry[q].author[0].gd$image.src.replace("s512-c", "s" + avatarSize + "-c") : "//lh4.ggpht.com/-ntdKjBQECcg/W1anAMHdApI/AAAAAAAAHAU/33XLL1zWB48qhyaufndHFjWU5VRkFUrHACLcBGAs/s" + avatarSize + "-c/anonymous.png", f = b.feed.entry[q].author[0].uri ? b.feed.entry[q].author[0].uri.$t : "javascript:void(0)", k = b.feed.entry[q].author[0].name.$t, p = b.feed.entry[q].summary.$t.replace(/(<([^>]+)>)/gi, ""), o = p, p.length > characters) {
        let v = p.substring(0, characters - 3),
          w = v.lastIndexOf(" ");
        p = v.substring(0, w) + " ..."
      }
      if (cl("_rc").length > 0) cl("_rc")[0].innerHTML += "<div class=\"rc-content\"><div class=\"rc-img\"><a href=" + f + "><img src=" + h + " /></a></div><div class=\"rc-main\"><span class=\"rc-user\"><a href=" + j + ">" + k + "</a></span><span class=\"rc-summary\" title=\"" + o + "\">" + p + "</span></div></div>"
    }
  }).catch(b => console.error(b));
  cl("tgs").length > 0 && cl("tgs")[0].addEventListener("click", t => {
    t.stopPropagation(), document.querySelector(".nav-share").classList.toggle("shows")
  });
  cle("ts", "click", e => {
    id("sbs").classList.toggle("shows");
    setTimeout(() => {
      id("search-text").focus()
    }, 100)
  });
  id("s2").addEventListener("click", e => {
    id("sbs").classList.toggle("shows");
  });
  qsa(maxresults, (el, i) => {
    let j = el.getAttribute("href");
    el.setAttribute("href", j.replace(j, j + "?&max-results=" + perPage))
  })
  qsa("a[href^='http://'],a[href^='https://']", (el, i) => {
    -1 == el.getAttribute("href").indexOf(location.hostname) && (el.setAttribute("target", "_blank"), el.setAttribute("rel", "nofollow"))
  })
  cl("gda")[0].innerHTML = new Date().getFullYear();
  var hCount = hTotal = 0,
    hlistPost = [],
    getLiveSearch = e => {
      hTotal = e.feed.openSearch$totalResults.$t, (hCount += e.feed.entry.length) < hTotal && fetch(`/feeds/posts/summary?alt=json&max-results=150&start-index=${hCount+1}`).then(e => e.json()).then(e => {
        getLiveSearch(e)
      }).catch(e => console.error(e));
      for (let t = 0; t < e.feed.entry.length; t++) {
        let n, l, r;
        n = e.feed.entry[t].title.$t;
        for (let n = 0; n < e.feed.entry[t].link.length; n++)
          if ("alternate" == e.feed.entry[t].link[n].rel) {
            l = e.feed.entry[t].link[n].href;
            break
          } r = "media$thumbnail" in e.feed.entry[t] ? e.feed.entry[t].media$thumbnail.url : nth, hlistPost.push({
          title: n,
          href: l,
          thumb: r
        })
      }
    },
    autocomplete = (e, t) => {
      let n, l = null;

      function r(e) {
        if (!e) return !1;
        ! function(e) {
          for (let t = 0; t < e.length; t++) e[t].classList.remove("autocomplete-active")
        }(e), n >= e.length && (n = 0), n < 0 && (n = e.length - 1), e[n].classList.add("autocomplete-active")
      }

      function a(t) {
        for (let n = document.getElementsByClassName("autocomplete-items"), l = 0; l < n.length; l++) t != n[l] && t != e && n[l].parentNode.removeChild(n[l])
      }
      e.addEventListener("input", r => {
        clearTimeout(l), l = setTimeout(() => {
          let l, r, i, o = e.value;
          if (a(), !o) return !1;
          for (n = -1, (l = document.createElement("div")).setAttribute("id", e.id + "autocomplete-list"), l.setAttribute("class", "autocomplete-items"), e.parentNode.appendChild(l), i = 0; i < t.length; i++)
            if (t[i].title.indexOf(o) > -1) {
              r = document.createElement("div");
              let n = t[i].title.search(o);
              r.innerHTML += "<input type='hidden' value='" + t[i].title + "'>", r.innerHTML += "<a class='live-thumb' href='" + t[i].href + "'><img src='" + t[i].thumb + "'/></a><a title='View more' href='" + t[i].href + "'>" + t[i].title.substr(0, n) + "<strong>" + t[i].title.substr(n, o.length) + "</strong>" + t[i].title.substr(n + o.length) + "</a>", r.addEventListener("click", t => {
                e.value = t.currentTarget.getElementsByTagName("input")[0].value, a()
              }), l.appendChild(r)
            }
        }, 150)
      }), e.addEventListener("keydown", e => {
        let t = document.getElementById(e.currentTarget.id + "autocomplete-list");
        t && (t = t.getElementsByTagName("div")), 40 == e.keyCode ? (n++, r(t)) : 38 == e.keyCode ? (n--, r(t)) : 13 == e.keyCode && (e.preventDefault(), n > -1 && t && t[n].click())
      }), document.addEventListener("click", e => {
        a(e.target)
      })
    };
  fetch("/feeds/posts/summary?alt=json&max-results=150").then(e => e.json()).then(e => {
    getLiveSearch(e)
  }).catch(e => console.error(e));
  autocomplete(document.getElementById("search-text"), hlistPost);
  setTimeout(() => {
    ls("//www.googletagmanager.com/gtag/js?id=UA-111811066-1", () => {
      function o() {
        dataLayer.push(arguments)
      }
      window.dataLayer = window.dataLayer || [], o("js", new Date), o("config", "UA-111811066-1")
    })
  }, 1e3)
});
ls("//cdn.staticaly.com/gh/hung1001/blog/master/smart/lib/timeago-simple/dist/timeago.min.js", () => true)
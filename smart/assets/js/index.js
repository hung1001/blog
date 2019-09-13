let rpp = document.querySelectorAll("[data-ripple]");
for (let e = 0; e < rpp.length; e++) rpp[e].addEventListener("mousedown", f => {
  let h = f.currentTarget,
    i = (h.style.position, h.offsetTop, f.pageX - h.offsetLeft),
    j = f.pageY - h.offsetTop,
    k = Math.min(h.offsetHeight, h.offsetWidth, 100);
  d = document.createElement("div"), d.className = "ripple-js", h.appendChild(d), h.style.position = "relative";
  let l = document.createElement("div");
  l.className = "rippleWave-js", l.style.background = h.getAttribute("data-ripple"), l.style.width = `${k}px`, l.style.height = `${k}px`, l.style.left = `${i-k/2}px`, l.style.top = `${j-k/2}px`, d.appendChild(l), h.addEventListener("animationend", () => {
    d.remove(), h.removeAttribute("style")
  })
});
window.addEventListener("click", e => {
  let f = ["ts"],
    h = !0;
  for (var i in f) e.target.className == f[i] && (h = !1);
  if (h) {
    let j = document.querySelectorAll(".nav-share,.header #header .Label");
    for (let k = 0; k < j.length; k++) j[k].classList.remove("shows")
  }
}), Math.easeInOutQuad = function(e, f, h, i) {
  return 1 > (e /= i / 2) ? h / 2 * e * e + f : -h / 2 * (--e * (e - 2) - 1) + f
};
var scrollTo = (e, f, h) => {
  let i = e.scrollTop,
    j = 0;
  var k = function() {
    j += 20;
    let l = Math.easeInOutQuad(j, i, f - i, h);
    e.scrollTop = l, j < h && setTimeout(k, 20)
  };
  k()
};
window.addEventListener("load", () => {
  cle("btt", "click", () => {
    scrollTo(document.documentElement || document.body.parentNode || document.body, 0, 800)
  }), cle("tg", "click", i => {
    i.stopPropagation(), document.querySelector(".header #header .Label").classList.toggle("shows")
  }), fetch(`/feeds/comments/summary?alt=json&max-results=${numComments}`).then(i => i.json()).then(i => {
    let j, k, l, n, o, p;
    0 < cl("total-cmt").length && (cl("total-cmt")[0].innerHTML = i.feed.openSearch$totalResults.$t);
    for (let q = 0; q < i.feed.entry.length; q++) {
      for (let s = 0; s < i.feed.entry[q].link.length; s++)
        if ("alternate" === i.feed.entry[q].link[s].rel) {
          l = i.feed.entry[q].link[s].href;
          break
        } else l = "javascript:void(0)";
      let r = i.feed.entry[q].author[0].gd$image.src;
      if (k = "https://img1.blogblog.com/img/b16-rounded.gif" !== r && "https://img1.blogblog.com/img/blank.gif" !== r ? i.feed.entry[q].author[0].gd$image.src.replace(/\/s[0-9]+-?[A-Za-z]?\//i, "/s" + avatarSize * 2 + "-c/") : "//lh4.ggpht.com/-ntdKjBQECcg/W1anAMHdApI/AAAAAAAAHAU/33XLL1zWB48qhyaufndHFjWU5VRkFUrHACLcBGAs/s" + avatarSize + "-c/anonymous.png", j = i.feed.entry[q].author[0].uri ? i.feed.entry[q].author[0].uri.$t : "javascript:void(0)", n = i.feed.entry[q].author[0].name.$t, p = i.feed.entry[q].summary.$t.replace(/(<([^>]+)>)/gi, ""), o = p, p.length > characters) {
        let s = p.substring(0, characters - 3),
          t = s.lastIndexOf(" ");
        p = s.substring(0, t) + " ..."
      }
      0 < cl("_rc").length && (cl("_rc")[0].innerHTML += "<div class=\"rc-content\"><div class=\"rc-img\"><a href=" + j + "><img src=" + k + " /></a></div><div class=\"rc-main\"><span class=\"rc-user\"><a href=" + l + ">" + n + "</a></span><span class=\"rc-summary\" title=\"" + o + "\">" + p + "</span></div></div>")
    }
  }).catch(i => console.error(i)), 0 < cl("tgs").length && cl("tgs")[0].addEventListener("click", i => {
    i.stopPropagation(), document.querySelector(".nav-share").classList.toggle("shows")
  }), cle("ts", "click", () => {
    id("sbs").classList.toggle("shows"), setTimeout(() => {
      id("search-text").focus()
    }, 100)
  }), id("s2").addEventListener("click", () => {
    id("sbs").classList.toggle("shows")
  }), qsa(maxresults, i => {
    let j = i.getAttribute("href");
    i.setAttribute("href", j.replace(j, j + "?&max-results=" + perPage))
  }), qsa("a[href^='http://'],a[href^='https://']", i => {
    -1 == i.getAttribute("href").indexOf(location.hostname) && (i.setAttribute("target", "_blank"), i.setAttribute("rel", "nofollow"))
  }), cl("gda")[0].innerHTML = new Date().getFullYear();
  var e = hTotal = 0,
    f = [],
    h = i => {
      hTotal = i.feed.openSearch$totalResults.$t, (e += i.feed.entry.length) < hTotal && fetch(`/feeds/posts/summary?alt=json&max-results=150&start-index=${e+1}`).then(j => j.json()).then(j => {
        h(j)
      }).catch(j => console.error(j));
      for (let j = 0; j < i.feed.entry.length; j++) {
        let k, l, n;
        k = i.feed.entry[j].title.$t;
        for (let o = 0; o < i.feed.entry[j].link.length; o++)
          if ("alternate" == i.feed.entry[j].link[o].rel) {
            l = i.feed.entry[j].link[o].href;
            break
          }
        n = "media$thumbnail" in i.feed.entry[j] ? i.feed.entry[j].media$thumbnail.url : nth, f.push({
          title: k,
          href: l,
          thumb: n
        })
      }
    };
  fetch("/feeds/posts/summary?alt=json&max-results=150").then(i => i.json()).then(i => {
    h(i)
  }).catch(i => console.error(i)), ((i, j) => {
    function k(p) {
      return !!p && void(! function(q) {
        for (let r = 0; r < q.length; r++) q[r].classList.remove("autocomplete-active")
      }(p), n >= p.length && (n = 0), 0 > n && (n = p.length - 1), p[n].classList.add("autocomplete-active"))
    }

    function l(p) {
      for (let q = document.getElementsByClassName("autocomplete-items"), r = 0; r < q.length; r++) p != q[r] && p != i && q[r].parentNode.removeChild(q[r])
    }
    let n, o = null;
    i.addEventListener("input", () => {
      clearTimeout(o), o = setTimeout(() => {
        let p, q, r, s = i.value;
        if (l(), !s) return !1;
        for (n = -1, (p = document.createElement("div")).setAttribute("id", i.id + "autocomplete-list"), p.setAttribute("class", "autocomplete-items"), i.parentNode.appendChild(p), r = 0; r < j.length; r++)
          if (-1 < j[r].title.indexOf(s)) {
            q = document.createElement("div");
            let t = j[r].title.search(s);
            q.innerHTML += "<input type='hidden' value='" + j[r].title + "'>", q.innerHTML += "<a class='live-thumb' href='" + j[r].href + "'><img src='" + j[r].thumb + "'/></a><a title='View more' href='" + j[r].href + "'>" + j[r].title.substr(0, t) + "<strong>" + j[r].title.substr(t, s.length) + "</strong>" + j[r].title.substr(t + s.length) + "</a>", q.addEventListener("click", u => {
              i.value = u.currentTarget.getElementsByTagName("input")[0].value, l()
            }), p.appendChild(q)
          }
      }, 150)
    }), i.addEventListener("keydown", p => {
      let q = document.getElementById(p.currentTarget.id + "autocomplete-list");
      q && (q = q.getElementsByTagName("div")), 40 == p.keyCode ? (n++, k(q)) : 38 == p.keyCode ? (n--, k(q)) : 13 == p.keyCode && (p.preventDefault(), -1 < n && q && q[n].click())
    }), document.addEventListener("click", p => {
      l(p.target)
    })
  })(document.getElementById("search-text"), f), setTimeout(() => {
    ls("//www.googletagmanager.com/gtag/js?id=UA-111811066-1", () => {
      function i() {
        dataLayer.push(arguments)
      }
      window.dataLayer = window.dataLayer || [], i("js", new Date), i("config", "UA-111811066-1")
    })
  }, 1e3)
}), ls(`${cdn}lib/timeago/dist/timeago.min.js`, () => timeago().render(document.querySelectorAll(".timeago")));
var toggleLabel = e => {
  let f = document.querySelectorAll(`.list-label.list-${e},.collapsible.list-${e} .chevron-up,.collapsible.list-${e} .chevron-down`);
  for (let h = 0; h < f.length; h++) f[h].style.display = "none" === window.getComputedStyle(f[h]).display ? "block" : "none"
};
for (let e = 1; e <= document.getElementsByClassName("list-items").length; e++) document.querySelector(`.collapsible.list-${e}`).addEventListener("click", () => toggleLabel(`${e}`));
let scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.documentElement.clientTop || 0);
headerHeight = cl("header")[0].offsetHeight, window.addEventListener("scroll", () => {
  let e = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.documentElement.clientTop || 0);
  e > headerHeight ? cl("header")[0].classList.add("off-canvas") : cl("header")[0].classList.remove("off-canvas"), e > scroll ? cl("header")[0].classList.add("fixed") : cl("header")[0].classList.remove("fixed"), scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.documentElement.clientTop || 0)
});

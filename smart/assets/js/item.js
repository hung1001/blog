document.addEventListener("DOMContentLoaded", () => {
  qsa("#HTML4 .widget-content", e => {
    e.innerHTML += "<div class='upd'>Last updated : " + upd + "</div><div class='lb'>Applies to : " + label + "</div>"
  })
}), window.addEventListener("load", () => {
  let e;
  if (labelArray.length) {
    var t, r, n;
    for (n = labelArray.length - 1; 0 < n; n--) t = Math.floor(Math.random() * (n + 1)), r = labelArray[n], labelArray[n] = labelArray[t], labelArray[t] = r;
    e = labelArray[0]
  }
  fetch(`/feeds/posts/summary?category=${e}&alt=json&max-results=0`).then(e => e.json()).then(t => {
    let r = t.feed.openSearch$totalResults.$t,
      n = [],
      l = [];
    for (let e = 0; e < r; e++) n.push(e + 1);
    var a = e => {
      let t = e[Math.floor(Math.random() * e.length)];
      return function(e, t) {
        for (let r = 0; r < e.length; r++)
          if (e[r] == t) return !0;
        return !1
      }(l, t) ? a(e) : (l.push(t), t)
    };
    let s = r < num_post ? r : num_post;
    var o = () => {
      for (let t = 1; 1 >= t; t++) fetch(`/feeds/posts/summary?category=${e}&alt=json&max-results=1&start-index=${a(n)}`).then(e => e.json()).then(e => {
        let t, r, l, a, i, d, h = [];
        for (let n = 0; n < e.feed.entry.length; n++) {
          for (let r = 0; r < e.feed.entry[n].link.length; r++)
            if ("alternate" === e.feed.entry[n].link[r].rel) {
              t = e.feed.entry[n].link[r].href;
              break
            }
          for (let t = 0; t < e.feed.entry[n].link.length; t++) r = e.feed.entry[n].title.$t;
          if (l = "media$thumbnail" in e.feed.entry[n] ? e.feed.entry[n].media$thumbnail.url.replace("s72-c", "w479") : nth, i = e.feed.entry[n].author[0].name.$t, 0 != (a = e.feed.entry[n].summary.$t).length && (a = a.replace(/<\S[^>]*>/g, "")).length > 180) {
            let e = a.substring(0, 180),
              t = e.lastIndexOf(" ");
            a = e.substring(0, t) + " ..."
          }
          d = e.feed.entry[n].published.$t.substring(0, 10).replace(/-/gi, "/"), h.push({
            href: t,
            title: r,
            thumb: l,
            snippet: a,
            author: i,
            time: d
          })
        }
        let f = "",
          m = "";
        for (let e = 0; e < h.length; e++) h[e].href == url ? n.length > s && o() : (f += "<div class='item'><div class='thumb'><a href='" + h[e].href + "'><img src='" + h[e].thumb + "'/></a></div><div class='meta'><a title='" + h[e].title + "' href='" + h[e].href + "' class='title'>" + h[e].title + "</a><a class='author'>" + h[e].author + "</a><span class='published timeago'> - " + h[e].time + "</span><span class='snip'>" + h[e].snippet + "</span></div></div>", m += "<li class='related-center'><a href='" + h[e].href + "'>" + h[e].title + "</a></li>");
        cl("_related")[0].innerHTML += f, null != document.querySelector("a[name='more']") && document.querySelector("a[name='more']").insertAdjacentHTML("afterend", m)
      }).catch(e => console.error(e))
    };
    for (let e = 0; e < s; e++) o()
  }).catch(e => console.error(e))
}), document.getElementsByClassName("btn-random")[0].addEventListener("click", () => {
  document.getElementsByClassName("random-posts")[0].innerHTML = "", fetch("/feeds/posts/summary?alt=json&max-results=0").then(e => e.json()).then(e => {
    let t = e.feed.openSearch$totalResults.$t,
      r = [],
      n = [];
    for (let e = 0; e < t; e++) r.push(e + 1);
    for (var l = e => {
        let t = e[Math.floor(Math.random() * e.length)];
        return ((e, t) => {
          for (let r = 0; r < e.length; r++)
            if (e[r] == t) return !0;
          return !1
        })(n, t) ? l(e) : (n.push(t), t)
      }, a = 0; 6 > a; a++)
      for (var s = 1; 1 >= s; s++) fetch(`/feeds/posts/summary?alt=json&max-results=1&start-index=${l(r)}`).then(e => e.json()).then(e => {
        let t, r, n;
        for (let l = 0; l < e.feed.entry.length; l++) {
          for (let t = 0; t < e.feed.entry[l].link.length; t++)
            if ("alternate" === e.feed.entry[l].link[t].rel) {
              r = e.feed.entry[l].link[t].href;
              break
            }
          t = e.feed.entry[l].title.$t, n = "media$thumbnail" in e.feed.entry[l] ? e.feed.entry[l].media$thumbnail.url.replace("s72-c", "s260") : "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png", document.getElementsByClassName("random-posts")[0].innerHTML += `<div class="item"><div class="thumb"><a href="${r}"><img src="${n}"/></a></div><div class="content"><a href="${r}">${t}</a></div></div>`
        }
      }).catch(e => console.error(e))
  }).catch(e => console.error(e)), setTimeout(() => {
    document.getElementsByClassName("btn-random")[0].innerHTML = "Continue find more posts"
  }, 3e3)
}, {
  once: !1
});
var readTime = e => {
  var t = Math.floor(e.textContent.split(" ").length / 200);
  return 0 === t && (t = 1), t > 1 ? t + " mins read" : t + " min read"
};
cl("read-time")[0].innerHTML = readTime(cl("post-body")[0]), cle("foo-share", "click", e => {
  qsa(".foo-ico", e => {
    e.classList.toggle("active")
  })
});

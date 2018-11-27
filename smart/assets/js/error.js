let _numPost = 8;
fetch("/feeds/posts/summary?alt=json&max-results=0").then(e => e.json()).then(e => {
  let t = [],
    r = [];
  for (let r = 0; r < e.feed.openSearch$totalResults.$t; r++) t.push(r + 1);
  var l = e => {
    var t = e[Math.floor(Math.random() * e.length)];
    return ((e, t) => {
      for (var r = 0; r < e.length; r++)
        if (e[r] == t) return !0;
      return !1
    })(r, t) ? l(e) : (r.push(t), t)
  };
  for (let e = 0; e < _numPost; e++)
    for (let e = 1; e <= 1; e++) fetch(`/feeds/posts/summary?alt=json&start-index=${l(t)}&max-results=1`).then(e => e.json()).then(e => {
      for (let t = 0; t < e.feed.entry.length; t++) {
        for (let r = 0; r < e.feed.entry[t].link.length; r++)
          if ("alternate" === e.feed.entry[t].link[r].rel) {
            a = e.feed.entry[t].link[r].href;
            break
          } n = e.feed.entry[t].title.$t, cl("_suggest")[0].innerHTML += `<li><a href='${a}' title='${n}'>${n}<a></li>`
      }
    }).catch(e => console.error(e))
}).catch(e => console.error(e));
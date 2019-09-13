let _numPost = 8;
fetch("/feeds/posts/summary?alt=json&max-results=0").then(b => b.json()).then(b => {
  let c = [],
    d = [];
  for (let g = 0; g < b.feed.openSearch$totalResults.$t; g++) c.push(g + 1);
  var f = g => {
    var h = g[Math.floor(Math.random() * g.length)];
    return ((i, j) => {
      for (var k = 0; k < i.length; k++)
        if (i[k] == j) return !0;
      return !1
    })(d, h) ? f(g) : (d.push(h), h)
  };
  for (let g = 0; g < _numPost; g++)
    for (let h = 1; 1 >= h; h++) fetch(`/feeds/posts/summary?alt=json&start-index=${f(c)}&max-results=1`).then(i => i.json()).then(i => {
      for (let j = 0; j < i.feed.entry.length; j++) {
        for (let k = 0; k < i.feed.entry[j].link.length; k++)
          if ("alternate" === i.feed.entry[j].link[k].rel) {
            a = i.feed.entry[j].link[k].href;
            break
          }
        n = i.feed.entry[j].title.$t, cl("_suggest")[0].innerHTML += `<li><a href='${a}' title='${n}'>${n}<a></li>`
      }
    }).catch(i => console.error(i))
}).catch(b => console.error(b));

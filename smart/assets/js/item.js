document.addEventListener("DOMContentLoaded", () => {
   qsa("#HTML4 .widget-content", (el,i) => {
    el.innerHTML += "<div class='upd'>Last updated : " + upd + "</div><div class='lb'>Applies to : " + label + "</div>";
   })
})
window.addEventListener("load", () => {
    let b;
    if (labelArray.length) {
        var c, d, g;
        for (g = labelArray.length - 1; 0 < g; g--) c = Math.floor(Math.random() * (g + 1)), d = labelArray[g], labelArray[g] = labelArray[c], labelArray[c] = d;
        b = labelArray[0]
    }
    fetch(`/feeds/posts/summary?category=${b}&alt=json&max-results=0`).then(k => k.json()).then(k => {
        let m = k.feed.openSearch$totalResults.$t,
            p = [],
            s = [];
        for (let x = 0; x < m; x++) p.push(x + 1);
        var u = x => {
            let y = x[Math.floor(Math.random() * x.length)];
            return function(z, A) {
                for (let B = 0; B < z.length; B++)
                    if (z[B] == A) return !0;
                return !1
            }(s, y) ? u(x) : (s.push(y), y)
        };
        let v = m < num_post ? m : num_post;
        var w = () => {
            for (let x = 1; 1 >= x; x++) fetch(`/feeds/posts/summary?category=${b}&alt=json&max-results=1&start-index=${u(p)}`).then(y => y.json()).then(y => {
                let z, A, B = [];
                for (let D = 0; D < y.feed.entry.length; D++) {
                    for (let E = 0; E < y.feed.entry[D].link.length; E++)
                        if ("alternate" === y.feed.entry[D].link[E].rel) {
                            z = y.feed.entry[D].link[E].href;
                            break
                        } for (let E = 0; E < y.feed.entry[D].link.length; E++) A = y.feed.entry[D].title.$t;
                    B.push({
                        href: z,
                        title: A
                    })
                }
                let C = "";
                for (let D = 0; D < B.length; D++) B[D].href == url ? p.length > v && w() : C += "<li><a title='" + B[D].title + "' href='" + B[D].href + "'>" + B[D].title + "</a></li>";
                cl("_related")[0].innerHTML += C
            }).catch(y => console.error(y))
        };
        for (let x = 0; x < v; x++) w()
    }).catch(k => console.error(k))
});
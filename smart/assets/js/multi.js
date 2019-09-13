/* Page Navigation pure JS using Fetch API
 * Match ES6 Syntax
 * Obfuscator for minified code
 * View full in https://github.com/hoanghung96cs/blog/blob/master/blog-pager.js
 */
eval(function(p, a, c, k, e, r) {
    e = function(c) {
      return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [function(e) {
        return r[e]
      }];
      e = function() {
        return '\\w+'
      };
      c = 1
    };
    while (c--)
      if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
  }('12 Q=e=>{y a=L(e.13.1k$1l.$t,10),s="";M=L(R/2),M==R-M&&(R=2*M+1),A=d-M,A<1&&(A=1),7=L(a/f)+1,7-1==a/f&&(7-=1),C=A+R-1,C>7&&(C=7),s+="<4 5=\'1m\'>1n "+d+"/"+7+"</4>";y t=L(d)-1;d>1&&(s+="k"==g?\'<4 5="15 16"><a w="\'+S+\'">\'+T+"</a></4>":\'<4 5="9 16"><a w="/l/m/\'+z+"?&6-h="+f+\'">\'+T+"</a></4>"),d>2&&(s+=3==d?"k"==g?\'<4 5="15"><a w="\'+S+\'">\'+U+"</a></4>":\'<4 5="9"><a w="/l/m/\'+z+"?&6-h="+f+\'">\'+U+"</a></4>":"k"==g?\'<4 5="9"><a o="D(\'+t+\');u v">\'+U+"</a></4>":\'<4 5="9"><a o="E(\'+t+\');u v">\'+U+"</a></4>"),A>1&&(s+="k"==g?\'<4 5="9"><a w="\'+S+\'">1</a></4>\':\'<4 5="9"><a w="/l/m/\'+z+"?&6-h="+f+\'">1</a></4>\'),A>2&&(s+="<4 5=\'17\'>...</4>");18(y e=A;e<=C;e++)s+=d==e?\'<4 5="1o">\'+e+"</4>":1==e?"k"==g?\'<4 5="9"><a w="\'+S+\'">1</a></4>\':\'<4 5="9"><a w="/l/m/\'+z+"?&6-h="+f+\'">1</a></4>\':"k"==g?\'<4 5="9"><a o="D(\'+e+\');u v">\'+e+"</a></4>":\'<4 5="9"><a o="E(\'+e+\');u v">\'+e+"</a></4>";C<7-1&&(s+="<4 5=\'17\'>...</4>"),C<7&&(s+="k"==g?\'<4 5="9"><a o="D(\'+7+\');u v">\'+7+"</a></4>":\'<4 5="9"><a o="E(\'+7+\');u v">\'+7+"</a></4>");y r=L(d)+1;d<7-1&&(s+="k"==g?\'<4 5="9"><a o="D(\'+r+\');u v">\'+1a+"</a></4>":\'<4 5="9"><a o="E(\'+r+\');u v">\'+1a+"</a></4>"),d<7&&(s+="k"==g?\'<4 5="9 1b"><a o="D(\'+7+\');u v">\'+V+"</a></4>":\'<4 5="9 1b"><a o="E(\'+7+\');u v">\'+V+"</a></4>");y p=1c.1p("1q"),n=1c.1r("1s-1t");18(y e=0;e<p.W;e++)p[e].1d=s;p&&p.W>0&&(s=""),n&&(n.1d=s)},1e=()=>{y e=c;-1!=e.b("/l/m/")&&(z=-1!=e.b("?N-6")?e.F(e.b("/l/m/")+14,e.b("?N-6")):e.F(e.b("/l/m/")+14,e.b("?&6"))),-1==e.b(".1u")&&(-1==e.b("/l/m/")?(g="k",d=-1!=c.b("#B=")?c.F(c.b("#B=")+8,c.W):1,-1==e.b("q=")?G("/H/I/J?K=i&6-h=1").j(e=>e.i()).j(e=>{Q(e)}):G(`/H/I/J?K=i&q=${e.x("?")[1].x("q=")[1].x("&")[0]}`).j(e=>e.i()).j(e=>{Q(e)})):(g="m",-1==e.b("&6-h=")&&(f=1v),d=-1!=c.b("#B=")?c.F(c.b("#B=")+8,c.W):1,G(`/H/I/J/?K=i&1f=${z}&6-h=1`).j(e=>e.i()).j(e=>{Q(e)})))},D=e=>{O=(e-1)*f,P=e,-1==c.b("?q=")?G(`/H/I/J?K=i&6-h=1&Y-Z=${O}`).j(e=>e.i()).j(e=>{X(e)}):G(`/H/I/J?K=i&Y-Z=${O}&q=${c.x("?")[1].x("q=")[1].x("&")[0]}`).j(e=>e.i()).j(e=>{X(e)})},E=e=>{O=(e-1)*f,P=e,G(`/H/I/J/?K=i&Y-Z=${O}&1f=${z}&6-h=1`).j(e=>e.i()).j(e=>{X(e)})},X=e=>{11=e.13.1w[0];y a=11.1g.$t.F(0,19)+11.1g.$t.F(1x,1y),s=1z(a);1h("k"==g)1h(-1==c.b("?q="))12 t="/l?N-6="+s+"&6-h="+f+"#B="+P;1i t="/l?N-6="+s+"&q="+c.x("?")[1].x("q=")[1].x("&")[0]+"&6-h="+f+"#B="+P;1i t="/l/m/"+z+"?N-6="+s+"&6-h="+f+"#B="+P;1A.w=t};1j 0===T&&(T="1B"),1j 0===V&&(V="1C"),1e();', 62, 101, '||||span|class|max|lastPageNo||displaypageNum||indexOf|urlactivepage|currentPageNo||perPage|currentPage|results|json|then|page|search|label||onclick||||||return|false|href|split|let|postLabel|pageStart|PageNo|pageEnd|redirectpage|redirectlabel|substring|fetch|feeds|posts|summary|alt|parseInt|pageNumber|updated|jsonstart|noPage|totalcountdata|numPages|home_page|firstText|prevText|lastText|length|finddatepost|start|index||post|var|feed||showpage|firstpage|dot|for||nextText|lastpage|document|innerHTML|pagecurrentg|category|published|if|else|void|openSearch|totalResults|showpageOf|Page|pagecurrent|getElementsByName|pageArea|getElementById|blog|pager|html|20|entry|23|29|encodeURIComponent|location|First|Last'.split('|'), 0, {}))
  /* 
   * Match index view
   */
var each = (e, t) => {
  for (let a = document.querySelectorAll(e), r = 0; r < a.length; r++) t(a[r], r)
};
window.addEventListener("load", () => {
  setTimeout(() => {
    each(".post-comment", function(e, t) {
      let a = e.getAttribute("data-id");
      fetch(`/feeds/${a}/comments/summary?alt=json&max-results=3`).then(e => e.json()).then(t => {
        if (t.feed.entry) {
          let a, r, s, n, i, d, l, c;
          t.feed.entry.reverse();
          for (let o = 0; o < t.feed.entry.length; o++) {
            for (let e = 0; e < t.feed.entry[o].link.length; e++)
              if ("alternate" == t.feed.entry[o].link[e].rel) {
                l = t.feed.entry[o].link[e].href;
                break
              }
            let g = t.feed.entry[o].author[0].gd$image.src;
            if (a = "https://img1.blogblog.com/img/b16-rounded.gif" !== g && "https://img1.blogblog.com/img/blank.gif" !== g ? t.feed.entry[o].author[0].gd$image.src.replace(/\/s[0-9]+-?[A-Za-z]?\//i, "/s" + 2 * avatarFeedSize + "-c/") : "//lh4.ggpht.com/-ntdKjBQECcg/W1anAMHdApI/AAAAAAAAHAU/33XLL1zWB48qhyaufndHFjWU5VRkFUrHACLcBGAs/s70-c/anonymous.png", r = t.feed.entry[o].author[0].uri ? t.feed.entry[o].author[0].uri.$t : "javascript:void(0)", s = t.feed.entry[o].author[0].name.$t, n = i = t.feed.entry[o].summary.$t.replace(/(<([^>]+)>)/gi, ""), i.length > 150) {
              let e = i.substring(0, 150),
                t = e.lastIndexOf(" ");
              i = e.substring(0, t) + " ..."
            }
            c = t.feed.entry[o].published.$t, d = t.feed.entry[o].published.$t.substring(0, 10).replace(/-/g, "/"), e.innerHTML += `<div class="rc-item"><div class="rc-avatar"><img src="${a}"/></div><div class="rc-summary"><div class="rc-header"><span class="rc-author ${listAdmin.includes(r)?"blog-admin":"user"}"><a href="${r}">${s}<span class="badge"></span></a></span><span class="rc-body" title="${n}">${i}</span></div><div class="rc-meta"><span class="rc-reply"><a href="${l}">Reply</a></span><span class="rc-time timeago" datetime="${c}">${d}</span></div></div></div>`
          }
        }
      }).catch(e => console.error(e))
    })
  }, 2e3)
});
qsa(".main .posts", (e, r) => {
  e.querySelector(".open-comment").addEventListener("click", r => {
    e.querySelector(".feed-comment").innerHTML = `<iframe width="100%" frameborder="0" allowtransparency="true" src="${r.currentTarget.getAttribute("data-src")}" onload="this.parentNode.style.background='transparent'"></iframe>`
  }, {
    once: !0
  }), e.querySelector(".open-btn").addEventListener("click", r => {
    e.querySelector(".more-menu").toggle()
  }, {
    once: !1
  })
});
eval(function(p, a, c, k, e, r) {
  e = function(c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
  };
  if (!''.replace(/^/, String)) {
    while (c--) r[e(c)] = k[c] || e(c);
    k = [function(e) {
      return r[e]
    }];
    e = function() {
      return '\\w+'
    };
    c = 1
  };
  while (c--)
    if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
  return p
}('n L=[\'\\c\\t\\3\\8\\4\\M\\c\\h\\5\\6\\0\\6\',\'\\W\\9\\2\\a\\o\\X\\2\\7\\2\\e\\0\\5\\a\',\'\\k\\3\\0\\3\\g\\8\\k\',\'\\l\\2\\0\\N\\0\\2\\t\',\'\\h\\3\\a\\6\\2\',\'\\e\\7\\3\\6\\6\\D\\8\\6\\0\',\'\\k\\3\\0\\3\\d\\3\\6\\2\',\'\\u\\0\\5\\0\\3\\7\',\'\\q\\3\\7\\9\\2\',\'\\a\\2\\m\',\'\\6\\2\\0\',\'\\3\\d\\6\',\'\\q\\3\\7\',\'\\c\\0\\5\\0\\3\\7\',\'\\e\\7\\8\\e\\z\',\'\\h\\a\\2\\q\\2\\4\\0\\1m\\2\\m\\3\\9\\7\\0\',\'\\0\\5\\l\\l\\7\\2\',\'\\e\\5\\4\\0\\3\\8\\4\\6\',\'\\6\\2\\0\\N\\0\\2\\t\',\'\\6\\0\\a\\8\\4\\l\\8\\m\\o\',\'\\m\\8\\7\\0\\2\\a\',\'\\7\\2\\4\\l\\0\\b\',\'\\h\\9\\6\\b\',\'\\c\\7\\8\\z\\2\\g\\d\\9\\0\\0\\5\\4\',\'\\7\\8\\z\\2\',\'\\c\\7\\5\\q\\2\\g\\d\\9\\0\\0\\5\\4\',\'\\7\\5\\q\\2\',\'\\c\\0\\b\\3\\4\\z\\6\\g\\d\\9\\0\\0\\5\\4\',\'\\c\\A\\5\\A\\g\\d\\9\\0\\0\\5\\4\',\'\\A\\5\\A\',\'\\c\\6\\3\\k\\g\\d\\9\\0\\0\\5\\4\',\'\\6\\3\\k\',\'\\c\\3\\4\\l\\a\\o\\g\\d\\9\\0\\0\\5\\4\',\'\\3\\4\\l\\a\\o\',\'\\c\\h\\7\\3\\4\\2\\g\\d\\9\\0\\0\\5\\4\',\'\\h\\7\\3\\4\\2\',\'\\c\\m\\8\\a\\2\\g\\d\\9\\0\\0\\5\\4\',\'\\m\\8\\a\\2\',\'\\c\\o\\3\\o\\g\\d\\9\\0\\0\\5\\4\',\'\\5\\9\\e\\b\',\'\\c\\e\\5\\4\\m\\9\\6\\2\\g\\d\\9\\0\\0\\5\\4\',\'\\e\\5\\4\\m\\9\\6\\2\',\'\\t\\3\\0\\e\\b\\Y\\2\\k\\8\\3\',\'\\1n\\t\\8\\4\\g\\A\\8\\k\\0\\b\\1o\\M\\1p\\Z\\Z\\h\\10\\1q\',\'\\t\\3\\0\\e\\b\\2\\6\',\'\\8\\4\\4\\2\\a\\1r\\11\\Y\\D\',\'\\12\\6\\h\\3\\4\\13\\12\\u\\6\\h\\3\\4\\13\',\'\\8\\4\\8\\0\\8\\3\\7\\8\\1s\\2\\O\\h\\h\',\'\\W\\9\\2\\a\\o\\X\\2\\7\\2\\e\\0\\5\\a\\O\\7\\7\'];(v(P,14){n 15=v(16){1t(--16){P[\'\\h\\9\\6\\b\'](P[\'\\6\\b\\8\\m\\0\']())}};15(++14)}(L,1u));n 1=v(E,1v){E=E-r;n 17=L[E];18 17};1w[1(\'r\')](1(\'19\'))[1(\'1x\')]&&(1y(\'\\c\\a\\2\\3\\e\\0\\8\\5\\4\\M\\c\\8\\e\\5\\4\',(1a,F)=>{G(1z F=r;F<=1b;F++)1a[1(\'1A\')]+=1(\'1B\')}),1C(1D,()=>{H[1(\'1E\')](1F);G(n Q=1G[1(\'1H\')](1(\'1b\')),I=r;I<Q[\'\\7\\2\\4\\l\\0\\b\'];I++){v j(w,f){n x,B=Q[I][1(\'1c\')](w),p=B[\'\\l\\2\\0\\O\\0\\0\\a\\8\\d\\9\\0\\2\'](1(\'1I\'));R(1d!==s[1(\'1J\')](f)){n S=y[1(\'T\')](s[f]);G(i=r;i<S[\'\\7\\2\\4\\l\\0\\b\'];i++)S[i]===p&&B[1(\'1e\')][\'\\3\\k\\k\'](f)}H[1(\'1f\')]()[\'\\a\\2\\m\'](f+\'\\u\'+p+1(\'1K\'))[\'\\5\\4\'](1(\'1L\'),v(J){J[\'\\q\\3\\7\']()<r&&H[1(\'1f\')]()[1(\'1g\')](f+\'\\u\'+p+\'\\u\\0\\5\\0\\3\\7\')[1(\'1M\')](1h[\'\\3\\d\\6\'](J[\'\\q\\3\\7\']())),x=1h[1(\'1N\')](J[1(\'1O\')]())||r,B[1(\'1c\')](1(\'1P\'))[\'\\8\\4\\4\\2\\a\\11\\2\\10\\0\']=x}),B[\'\\3\\k\\k\\1Q\\q\\2\\4\\0\\D\\8\\6\\0\\2\\4\\2\\a\'](1(\'1R\'),v(1i){R(1i[1(\'1S\')](),1j[1(\'1e\')][1(\'1T\')](f),1j[\'\\e\\7\\3\\6\\6\\D\\8\\6\\0\'][1(\'1U\')](f)){R(1d===s[\'\\l\\2\\0\\N\\0\\2\\t\'](f))s[1(\'U\')](f,y[1(\'V\')]([p]));1k{n K=y[1(\'T\')](s[f]);K[1(\'1V\')](v(1l){18 1l==p})[1(\'1W\')]||(K[1(\'1X\')](p),s[1(\'U\')](f,y[1(\'V\')](K)))}x++}1k{G(n w=y[1(\'T\')](s[f]),C=r;C<w[\'\\7\\2\\4\\l\\0\\b\'];C++)w[C]===p&&w[\'\\6\\h\\7\\8\\e\\2\'](C,19);s[1(\'U\')](f,y[1(\'V\')](w)),x--}H[\'\\k\\3\\0\\3\\d\\3\\6\\2\']()[1(\'1g\')](f+\'\\u\'+p+\'\\u\\0\\5\\0\\3\\7\')[\'\\6\\2\\0\'](x)})}j(1(\'1Y\'),1(\'1Z\')),j(1(\'20\'),1(\'21\')),j(1(\'22\'),\'\\0\\b\\3\\4\\z\\6\'),j(\'\\c\\b\\3\\b\\3\\g\\d\\9\\0\\0\\5\\4\',\'\\b\\3\\b\\3\'),j(1(\'23\'),1(\'24\')),j(1(\'25\'),1(\'26\')),j(1(\'27\'),1(\'28\')),j(1(\'29\'),1(\'2a\')),j(1(\'2b\'),1(\'2c\')),j(1(\'2d\'),\'\\o\\3\\o\'),j(\'\\c\\5\\9\\e\\b\\g\\d\\9\\0\\0\\5\\4\',1(\'2e\')),j(1(\'2f\'),1(\'2g\'))}}));', 62, 141, 'x74|_0x7a21|x65|x61|x6e|x6f|x73|x6c|x69|x75|x72|x68|x2e|x62|x63|_0x23877a|x2d|x70||_0x363277|x64|x67|x66|var|x79|_0x5a3e91|x76|0x0|localStorage|x6d|x2f|function|_0xf1ed9b|_0x29513a|JSON|x6b|x77|_0x349cbd|_0x873c36|x4c|_0x2cef4e|_0x121ed9|for|firebase|_0x11c5c5|_0x5ea81f|_0x4d5bf7|_0xa217|x20|x49|x41|_0x49f57c|_0x12334c|if|_0x214609|0xb|0x19|0x1a|x71|x53|x4d|x30|x78|x54|x3c|x3e|_0x795da1|_0x11560c|_0x430320|_0x5b3632|return|0x1|_0x2e957e|0x7|0x8|null|0xc|0xd|0x10|Math|_0x4d1708|this|else|_0x21ba0d|x44|x28|x3a|x37|x29|x48|x7a|while|0x1e3|_0x321cea|window|0x2|qsa|let|0x3|0x4|ls|firebasesdk|0x5|fbConfig|document|0x6|0x9|0xa|0xe|0xf|0x11|0x12|0x13|0x14|x45|0x15|0x16|0x17|0x18|0x1b|0x1c|0x1d|0x1e|0x1f|0x20|0x21|0x22|0x23|0x24|0x25|0x26|0x27|0x28|0x29|0x2a|0x2b|0x2c|0x2d|0x2e|0x2f|0x30'.split('|'), 0, {}))

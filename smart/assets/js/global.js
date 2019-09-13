/**
 * @param {Node} i match id of element
 */
var id = e => {
  if (null != document.getElementById(e)) return document.getElementById(e)
};
/**
 * @param {Node} i match class of element
 */
var cl = e => {
  if (null != document.getElementsByClassName(e)) return document.getElementsByClassName(e)
};
/**
 * @param {Node} e match class of element
 * @param {String} f match event name of element
 * @param {Function} g callback function
 */
var cle = (e, l, t) => {
  let n = cl(e);
  for (let e = 0; e < n.length; e++) n[e].addEventListener(l, e => {
    t(e)
  })
};
/**
 * @param {String} e match query selector all
 * @param {String} f match event name of element
 * @param {Function} g callback function
 */
var qse = (e, t, l) => {
  let r = document.querySelectorAll(e);
  for (let e = 0; e < r.length; e++) r[e].addEventListener(t, e => {
    l(e)
  })
};
/*
 * @param {Node} a match query Selector All
 * @param {Function} g(el,i) callback function with element and index
 */
var qsa = (e, l) => {
  let t = document.querySelectorAll(e);
  for (let e = 0; e < t.length; e++) l(t[e], e)
};
/*
 * @param {Node} a match query Selector All
 * @param {Function} g(el,i) callback function with element and index
 */
var qsb = (r, e) => {
  Array.prototype.forEach.call(document.querySelectorAll(r), (r, l) => {
    e(r, l)
  })
};
/**
 * @param {String} e match url of js external
 * @param {Function} a callback function
 */
var ls = (e, a) => {
  let t = document.createElement("script");
  t.readyState ? t.onreadystatechange = (() => {
    "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, a())
  }) : t.onload = (() => {
    a()
  }), t.src = e, document.getElementsByTagName("body")[0].appendChild(t)
};

const cdn = "//cdn.jsdelivr.net/gh/hung1001/blog/smart/";

HTMLElement.prototype.toggle = function() {
  this.style.display = (this.dataset.toggled ^= 1) ? "block" : "none"
};
HTMLElement.prototype.reverseChildren = function() {
  for (var e = this.children, r = 0; r < e.length; r++) this.insertBefore(e[r], this.firstChild)
};
HTMLElement.prototype.togglediv = function() {
  this.style.display = (this.dataset.toggled ^= 1) ? "block" : "none"
};

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
}('g 16=[\'\\0\\q\\J\\e\\k\\r\\Q\\s\\l\\z\\Q\\m\',\'\\0\\q\\A\\c\\k\\d\\m\\m\',\'\\0\\q\\t\\h\\7\\q\\l\\K\\u\\R\\L\\3\\5\\M\\B\\6\\l\\n\\S\\s\\l\\M\\B\\T\\u\\j\\A\\b\\8\\C\\5\\r\\7\\N\\L\\h\\u\\j\\v\\17\\8\\U\\1k\\m\',\'\\w\\p\\c\\K\\O\\J\\v\\B\\w\\o\\w\\s\\1\\n\\A\\N\\8\\V\\k\\W\\n\\D\\d\\s\\p\\M\\18\\E\\8\\n\\A\\n\\w\\p\\c\\W\\l\\r\\t\\q\\5\\C\\3\\C\\t\\o\\k\\c\\t\\h\\V\\X\',\'\\0\\q\\J\\e\\k\\r\\Q\\s\\l\\z\\V\\4\\8\\N\\L\\6\\u\\j\\k\\i\\7\\j\\J\\4\\O\\D\\v\\c\\O\\D\\X\\s\\u\\j\\v\\17\\8\\w\\m\\m\',\'\\l\\Y\\7\\E\\l\\n\\p\\19\\v\\n\\l\\R\\v\\n\\w\\B\',\'\\8\\N\\L\\Y\\O\\D\\t\\i\\8\\C\\E\\m\',\'\\8\\19\\A\\i\\k\\C\\c\\e\',\'\\0\\M\\B\\T\\k\\D\\f\\W\\k\\d\\m\\m\'];(F(1a,1l){g 1m=F(1n){1G(--1n){1a[\'\\i\\e\\b\\f\'](1a[\'\\b\\f\\4\\G\\2\']())}};1m(++1l)}(16,1H));g 9=F(x,1I){x=x-H;g I=16[x];1o(9[\'\\4\\6\\4\\2\\4\\0\\c\\4\\r\\1\\5\']===1p){(F(){g 1q=1J(\'\\a\\1\\2\\e\\a\\6\\Z\\10\\G\\e\\6\\7\\2\\4\\3\\6\\Z\\10\\11\\Z\'+\'\\1K\\1L\\P\\7\\3\\6\\b\\2\\a\\e\\7\\2\\3\\a\\10\\1r\\a\\1\\2\\e\\a\\6\\Z\\2\\f\\4\\b\\1r\\11\\10\\11\'+\'\\11\\1M\');g 1b=1q();g 1s=\'\\S\\X\\12\\z\\Q\\V\\N\\q\\1c\\A\\1t\\u\\l\\v\\1u\\W\\w\\t\\U\\n\\p\\J\\M\\D\\O\\k\\0\\8\\7\\5\\1\\G\\d\\f\\4\\Y\\T\\c\\j\\6\\3\\i\\1N\\a\\b\\2\\e\\17\\s\\18\\R\\r\\h\\o\\C\\19\\E\\B\\K\\1O\\1k\\L\\1P\\1d\\m\';1b[\'\\0\\2\\3\\8\']||(1b[\'\\0\\2\\3\\8\']=F(1v){g 1w=1x(1v)[\'\\a\\1\\i\\c\\0\\7\\1\'](/=+$/,\'\');1y(g 13=H,14,y,1z=H,1e=\'\';y=1w[\'\\7\\f\\0\\a\\S\\2\'](1z++);~y&&(14=13%1f?14*1Q+y:y,13++%1f)?1e+=1x[\'\\G\\a\\3\\j\\12\\f\\0\\a\\12\\3\\5\\1\'](1R&14>>(-1g*13&1A)):H){y=1s[\'\\4\\6\\5\\1\\18\\1u\\G\'](y)}1h 1e})}());9[\'\\8\\0\\b\\1\\K\\E\\z\\1\\7\\3\\5\\1\\p\\6\\4\\7\\3\\5\\1\']=F(1B){g 1i=1S(1B);g 1j=[];1y(g 15=H,1C=1i[\'\\c\\1\\6\\d\\2\\f\'];15<1C;15++){1j+=\'\\1T\'+(\'\\h\\h\'+1i[\'\\7\\f\\0\\a\\12\\3\\5\\1\\S\\2\'](15)[\'\\2\\3\\U\\2\\a\\4\\6\\d\'](1U))[\'\\b\\c\\4\\7\\1\'](-1g)}1h 1V(1j)};9[\'\\5\\0\\2\\0\']={};9[\'\\4\\6\\4\\2\\4\\0\\c\\4\\r\\1\\5\']=!![]}1o(9[\'\\5\\0\\2\\0\'][x]===1p){I=9[\'\\8\\0\\b\\1\\K\\E\\z\\1\\7\\3\\5\\1\\p\\6\\4\\7\\3\\5\\1\'](I);9[\'\\5\\0\\2\\0\'][x]=I}1W{I=9[\'\\5\\0\\2\\0\'][x]}1h I};g 1X={\'\\0\\i\\4\\1t\\1\\R\':9(\'H\'),\'\\0\\e\\2\\f\\z\\3\\j\\0\\4\\6\':9(\'1D\'),\'\\5\\0\\2\\0\\8\\0\\b\\1\\p\\t\\u\':\'\\f\\2\\2\\i\\b\\1Y\\1d\\1d\\f\\e\\6\\d\\o\\h\\h\\o\\8\\c\\3\\d\\P\\G\\4\\a\\1\\8\\0\\b\\1\\4\\3\\P\\7\\3\\j\',\'\\i\\a\\3\\Y\\1\\7\\2\\1c\\5\':\'\\f\\e\\6\\d\\o\\h\\h\\o\\8\\c\\3\\d\',\'\\b\\2\\3\\a\\0\\d\\1\\X\\e\\7\\T\\1\\2\':\'\\f\\e\\6\\d\\o\\h\\h\\o\\8\\c\\3\\d\\P\\0\\i\\i\\b\\i\\3\\2\\P\\7\\3\\j\',\'\\j\\1\\b\\b\\0\\d\\4\\6\\d\\U\\1\\6\\5\\1\\a\\1c\\5\':9(\'1g\')};-1D===1E[9(\'1F\')][9(\'1f\')][9(\'1Z\')](9(\'1A\'))&&(1E[9(\'1F\')][9(\'20\')]=9(\'21\'));', 62, 126, 'x61|x65|x74|x6f|x69|x64|x6e|x63|x62|_0xbe67|x72|x73|x6c|x67|x75|x68|var|x30|x70|x6d|x5a|x4d|x3d|x54|x31|x55|x48|x7a|x77|x52|x4c|x4e|x51|_0xf1d25a|_0x3f7abd|x44|x4a|x35|x32|x58|x34|function|x66|0x0|_0x5929de|x56|x36|x39|x57|x47|x59|x2e|x45|x79|x41|x6b|x53|x46|x50|x42|x6a|x20|x28|x29|x43|_0x1d9d87|_0x39c482|_0xbebe73|_0xe67b|x76|x78|x33|_0x255b89|_0x59dedf|x49|x2f|_0x569779|0x4|0x2|return|_0x3c1369|_0x487a74|x38|_0xb53978|_0x4b8a14|_0x3c5298|if|undefined|_0x429c2f|x22|_0x1eb4d3|x4b|x4f|_0x1fd618|_0x5ef5b9|String|for|_0x2973c3|0x6|_0x4ca330|_0x5b7d01|0x1|window|0x3|while|0x1aa|_0x1865d3|Function|x7b|x7d|x3b|x71|x37|x2b|0x40|0xff|atob|x25|0x10|decodeURIComponent|else|fbConfig|x3a|0x5|0x7|0x8'.split('|'), 0, {}))

var setCookie = (e, o) => {
    var t = new Date;
    t.setDate(t.getDate() + 9125), document.cookie = e + "=" + escape(o) + "; expires=" + t.toGMTString() + "; path=/"
  },
  getCookie = e => document.cookie.length > 0 && (cookie_start = document.cookie.indexOf(e + "="), -1 != cookie_start) ? (cookie_start = cookie_start + e.length + 1, cookie_end = document.cookie.indexOf(";", cookie_start), -1 == cookie_end && (cookie_end = document.cookie.length), unescape(document.cookie.substring(cookie_start, cookie_end))) : "";
"no" != getCookie("cookie_message") && (document.getElementsByClassName("dialog")[0].style.display = "block");
if (cl("c-dialog").length > 0) {
  cl("c-dialog")[0].addEventListener("click", e => {
    cl("dialog")[0].style.display = "none", setCookie("cookie_message", "no")
  });
};

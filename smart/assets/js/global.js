/**
 * @param {Node} i match id of element
 */
var id = i => document.getElementById(i);
/**
 * @param {Node} i match class of element
 */
var cl = i => document.getElementsByClassName(i);
/**
 * @param {Node} e match class of element
 * @param {String} f match event name of element
 * @param {Function} g callback function
 */
var cle = (e, f, g) => {
  let a = cl(e);
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener(f, k => {
      g(k);
    });
  }
}
/**
 * @param {String} e match query selector all
 * @param {String} f match event name of element
 * @param {Function} g callback function
 */
var qse = (e, f, g) => {
  let a = document.querySelectorAll(e);
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener(f, k => {
      g(k);
    });
  }
}
/*
 * @param {Node} a match query Selector All
 * @param {Function} g(el,i) callback function with element and index
 */
var qsa = (a, g) => {
  Array.prototype.forEach.call(document.querySelectorAll(a), (i, j) => {
    g(i, j)
  });
}
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

HTMLElement.prototype.toggle=function(){this.style.display=(this.dataset.toggled^=1)?"block":"none"};

HTMLElement.prototype.reverseChildren=function(){for(var c=this.children,d=0;d<c.length;d++)this.insertBefore(c[d],this.firstChild)}

HTMLElement.prototype.togglediv=function(){this.style.display=(this.dataset.toggled^=1)?"block":"none"};

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

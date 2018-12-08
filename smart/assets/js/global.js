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
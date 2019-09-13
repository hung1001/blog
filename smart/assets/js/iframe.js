(function() {
  var e = "function",
    h = "object",
    l, m = function(a) {
      return "string" == typeof a
    },
    n = function(a) {
      var b = typeof a;
      if (b == h)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return h;
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call")) return e
        } else return "null";
      else if (b == e && "undefined" == typeof a.call) return h;
      return b
    };
  var p = Array.prototype.indexOf ? function(a, b, c) {
      return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    q = Array.prototype.forEach ? function(a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, f = m(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
    },
    r = function(a) {
      return Array.prototype.concat.apply([], arguments)
    },
    u = function(a) {
      var b =
        a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    };
  var v;
  a: {
    var w = this.navigator;
    if (w) {
      var x = w.userAgent;
      if (x) {
        v = x;
        break a
      }
    }
    v = ""
  }
  var y = function(a) {
    return -1 != v.indexOf(a)
  };
  var z = y("Trident") || y("MSIE");
  var A = function(a, b) {
      return m(b) ? a.getElementById(b) : b
    },
    B = function(a, b, c, d) {
      a = d || a;
      var f = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (f || c)) return a.querySelectorAll(f + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        b = a.getElementsByClassName(c);
        if (f) {
          a = {};
          for (var g = d = 0, k; k = b[g]; g++) f == k.nodeName && (a[d++] = k);
          a.length = d;
          return a
        }
        return b
      }
      b = a.getElementsByTagName(f || "*");
      if (c) {
        a = {};
        for (g = d = 0; k = b[g]; g++) {
          f = k.className;
          var t;
          if (t = typeof f.split == e) t = 0 <= p(f.split(/\s+/), c);
          t && (a[d++] = k)
        }
        a.length = d;
        return a
      }
      return b
    };
  var C = function(a) {
    this.D = a
  };
  C.prototype.serialize = function(a) {
    var b = [];
    this.H(a, b);
    return b.join("")
  };
  C.prototype.H = function(a, b) {
    if (null == a) b.push("null");
    else {
      if (typeof a == h) {
        if ("array" == n(a)) {
          this.serializeArray(a, b);
          return
        }
        if (a instanceof String || a instanceof Number || a instanceof Boolean) a = a.valueOf();
        else {
          this.Z(a, b);
          return
        }
      }
      switch (typeof a) {
        case "string":
          this.L(a, b);
          break;
        case "number":
          this.Y(a, b);
          break;
        case "boolean":
          b.push(String(a));
          break;
        case e:
          b.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof a);
      }
    }
  };
  var D = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    E = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  C.prototype.L = function(a, b) {
    b.push('"', a.replace(E, function(a) {
      var b = D[a];
      b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), D[a] = b);
      return b
    }), '"')
  };
  C.prototype.Y = function(a, b) {
    b.push(isFinite(a) && !isNaN(a) ? String(a) : "null")
  };
  C.prototype.serializeArray = function(a, b) {
    var c = a.length;
    b.push("[");
    for (var d = "", f = 0; f < c; f++) b.push(d), d = a[f], this.H(this.D ? this.D.call(a, String(f), d) : d, b), d = ",";
    b.push("]")
  };
  C.prototype.Z = function(a, b) {
    b.push("{");
    var c = "",
      d;
    for (d in a)
      if (Object.prototype.hasOwnProperty.call(a, d)) {
        var f = a[d];
        typeof f != e && (b.push(c), this.L(d, b), b.push(":"), this.H(this.D ? this.D.call(a, d, f) : f, b), c = ",")
      }
    b.push("}")
  };
  var F = "StopIteration" in this ? this.StopIteration : {
      message: "StopIteration",
      stack: ""
    },
    G = function() {};
  G.prototype.next = function() {
    throw F;
  };
  G.prototype.T = function() {
    return this
  };
  var H = function(a, b) {
    this.g = {};
    this.c = [];
    this.F = this.b = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
  };
  l = H.prototype;
  l.v = function() {
    this.A();
    for (var a = [], b = 0; b < this.c.length; b++) a.push(this.g[this.c[b]]);
    return a
  };
  l.u = function() {
    this.A();
    return this.c.concat()
  };
  l.s = function(a) {
    return I(this.g, a)
  };
  l.remove = function(a) {
    return I(this.g, a) ? (delete this.g[a], this.b--, this.F++, this.c.length > 2 * this.b && this.A(), !0) : !1
  };
  l.A = function() {
    if (this.b != this.c.length) {
      for (var a = 0, b = 0; a < this.c.length;) {
        var c = this.c[a];
        I(this.g, c) && (this.c[b++] = c);
        a++
      }
      this.c.length = b
    }
    if (this.b != this.c.length) {
      var d = {};
      for (b = a = 0; a < this.c.length;) c = this.c[a], I(d, c) || (this.c[b++] = c, d[c] = 1), a++;
      this.c.length = b
    }
  };
  l.get = function(a, b) {
    return I(this.g, a) ? this.g[a] : b
  };
  l.set = function(a, b) {
    I(this.g, a) || (this.b++, this.c.push(a), this.F++);
    this.g[a] = b
  };
  l.addAll = function(a) {
    if (a instanceof H)
      for (var b = a.u(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else
      for (b in a) this.set(b, a[b])
  };
  l.forEach = function(a, b) {
    for (var c = this.u(), d = 0; d < c.length; d++) {
      var f = c[d],
        g = this.get(f);
      a.call(b, g, f, this)
    }
  };
  l.clone = function() {
    return new H(this)
  };
  l.T = function(a) {
    this.A();
    var b = 0,
      c = this.F,
      d = this,
      f = new G;
    f.next = function() {
      if (c != d.F) throw Error("The map has changed since the iterator was created");
      if (b >= d.c.length) throw F;
      var f = d.c[b++];
      return a ? f : d.g[f]
    };
    return f
  };
  var I = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var J = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    K = function(a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            f = null;
          if (0 <= d) {
            var g = a[c].substring(0, d);
            f = a[c].substring(d + 1)
          } else g = a[c];
          b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
      }
    };
  var L = function(a, b) {
    this.B = this.J = this.o = "";
    this.C = null;
    this.G = this.K = "";
    this.f = this.X = !1;
    var c;
    a instanceof L ? (this.f = void 0 !== b ? b : a.f, this.R(a.o), this.S(a.J), this.M(a.B), this.O(a.C), this.setPath(a.getPath()), this.P(a.h.clone()), this.N(a.G)) : a && (c = String(a).match(J)) ? (this.f = !!b, this.R(c[1] || "", !0), this.S(c[2] || "", !0), this.M(c[3] || "", !0), this.O(c[4]), this.setPath(c[5] || "", !0), this.P(c[6] || "", !0), this.N(c[7] || "", !0)) : (this.f = !!b, this.h = new M(null, null, this.f))
  };
  l = L.prototype;
  l.toString = function() {
    var a = [],
      b = this.o;
    b && a.push(N(b, O, !0), ":");
    var c = this.B;
    if (c || "file" == b) a.push("//"), (b = this.J) && a.push(N(b, O, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.C, null != c && a.push(":", String(c));
    if (c = this.getPath()) this.W() && "/" != c.charAt(0) && a.push("/"), a.push(N(c, "/" == c.charAt(0) ? P : Q, !0));
    (c = this.U()) && a.push("?", c);
    (c = this.G) && a.push("#", N(c, R));
    return a.join("")
  };
  l.clone = function() {
    return new L(this)
  };
  l.R = function(a, b) {
    this.j();
    if (this.o = b ? S(a, !0) : a) this.o = this.o.replace(/:$/, "");
    return this
  };
  l.S = function(a, b) {
    this.j();
    this.J = b ? S(a) : a;
    return this
  };
  l.M = function(a, b) {
    this.j();
    this.B = b ? S(a, !0) : a;
    return this
  };
  l.W = function() {
    return !!this.B
  };
  l.O = function(a) {
    this.j();
    if (a) {
      a = Number(a);
      if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
      this.C = a
    } else this.C = null;
    return this
  };
  l.getPath = function() {
    return this.K
  };
  l.setPath = function(a, b) {
    this.j();
    this.K = b ? S(a, !0) : a;
    return this
  };
  l.P = function(a, b) {
    this.j();
    a instanceof M ? (this.h = a, this.h.I(this.f)) : (b || (a = N(a, aa)), this.h = new M(a, null, this.f));
    return this
  };
  l.U = function() {
    return this.h.toString()
  };
  l.aa = function(a, b) {
    this.j();
    this.h.set(a, b);
    return this
  };
  l.V = function(a) {
    return this.h.get(a)
  };
  l.N = function(a, b) {
    this.j();
    this.G = b ? S(a) : a;
    return this
  };
  l.j = function() {
    if (this.X) throw Error("Tried to modify a read-only Uri");
  };
  l.I = function(a) {
    this.f = a;
    this.h && this.h.I(a);
    return this
  };
  var S = function(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    N = function(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, ba), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    ba = function(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    O = /[#\/\?@]/g,
    Q = /[#\?:]/g,
    P = /[#\?]/g,
    aa = /[#\?@]/g,
    R = /#/g,
    M = function(a, b, c) {
      this.b = this.a = null;
      this.i = a || null;
      this.f = !!c
    };
  l = M.prototype;
  l.l = function() {
    if (!this.a && (this.a = new H, this.b = 0, this.i)) {
      var a = this;
      K(this.i, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      })
    }
  };
  l.add = function(a, b) {
    this.l();
    this.w();
    a = this.m(a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this
  };
  l.remove = function(a) {
    this.l();
    a = this.m(a);
    return this.a.s(a) ? (this.w(), this.b -= this.a.get(a).length, this.a.remove(a)) : !1
  };
  l.s = function(a) {
    this.l();
    a = this.m(a);
    return this.a.s(a)
  };
  l.forEach = function(a, b) {
    this.l();
    this.a.forEach(function(c, d) {
      q(c, function(c) {
        a.call(b, c, d, this)
      }, this)
    }, this)
  };
  l.u = function() {
    this.l();
    for (var a = this.a.v(), b = this.a.u(), c = [], d = 0; d < b.length; d++)
      for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
    return c
  };
  l.v = function(a) {
    this.l();
    var b = [];
    if (m(a)) this.s(a) && (b = r(b, this.a.get(this.m(a))));
    else {
      a = this.a.v();
      for (var c = 0; c < a.length; c++) b = r(b, a[c])
    }
    return b
  };
  l.set = function(a, b) {
    this.l();
    this.w();
    a = this.m(a);
    this.s(a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this
  };
  l.get = function(a, b) {
    if (!a) return b;
    a = this.v(a);
    return 0 < a.length ? String(a[0]) : b
  };
  l.setValues = function(a, b) {
    this.remove(a);
    0 < b.length && (this.w(), this.a.set(this.m(a), u(b)), this.b += b.length)
  };
  l.toString = function() {
    if (this.i) return this.i;
    if (!this.a) return "";
    for (var a = [], b = this.a.u(), c = 0; c < b.length; c++) {
      var d = b[c],
        f = encodeURIComponent(String(d));
      d = this.v(d);
      for (var g = 0; g < d.length; g++) {
        var k = f;
        "" !== d[g] && (k += "=" + encodeURIComponent(String(d[g])));
        a.push(k)
      }
    }
    return this.i = a.join("&")
  };
  l.w = function() {
    this.i = null
  };
  l.clone = function() {
    var a = new M;
    a.i = this.i;
    this.a && (a.a = this.a.clone(), a.b = this.b);
    return a
  };
  l.m = function(a) {
    a = String(a);
    this.f && (a = a.toLowerCase());
    return a
  };
  l.I = function(a) {
    a && !this.f && (this.l(), this.w(), this.a.forEach(function(a, c) {
      var b = c.toLowerCase();
      c != b && (this.remove(c), this.setValues(b, a))
    }, this));
    this.f = a
  };
  var U = function(a, b, c) {
      a: {
        var d = 9 == b.nodeType ? b : b.ownerDocument || b.document;
        if (d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(b, null))) {
          d = d[a] || d.getPropertyValue(a) || "";
          break a
        }
        d = ""
      }
      d = d || (b.currentStyle ? b.currentStyle[a] : null) || b.style && b.style[a];
      return null == d || "inherit" == d || "transparent" == d || "rgba(0, 0, 0, 0)" == d ? b != (9 == b.nodeType ? b : b.ownerDocument || b.document).body && b.parentNode ? T(a, b.parentNode) : c : d
    },
    T = function(a, b) {
      return U(a, b, "rgb(0, 0, 0)")
    },
    da = function() {
      for (var a =
          B(document, "iframe", "blogger-iframe-colorize", void 0), b = 0; b < a.length; b++) {
        var c = a[b],
          d = A(document, c.id + "-src"),
          f = d.href;
        if (!(new L(f)).V("skin")) {
          var g = T("color", c),
            k = T("backgroundColor", c),
            t = U("fontFamily", c, "serif");
          d.href = "https://www.blogger.com/unvisited-link-" + (new Date).valueOf();
          var ca = T("color", d);
          d = d.href = f;
          f = encodeURIComponent;
          g = (new C(void 0)).serialize({
            color: g,
            backgroundColor: k,
            unvisitedLinkColor: ca,
            fontFamily: t
          });
          f = d + ("#" + f(g))
        }
        c.src = f
      }
    };
  var ea = !z && !(y("Safari") && !((y("Chrome") || y("CriOS")) && !y("Edge") || y("Coast") || y("Opera") || y("Edge") || y("Silk") || y("Android")));
  var V = -1;
  var W = function() {
      V = Math.floor(1E7 * Math.random());
      for (var a = B(document, "iframe", "blogger-comment-from-post", void 0), b = 0; b < a.length; b++) {
        var c = A(document, a[b].id + "-src"),
          d = new L(c.href);
        d.aa("blogspotRpcToken", V);
        c.href = d.toString()
      }
      da();
      a = function(a) {
        if (m(a.data) && 0 == a.data.indexOf("set-comment-editor-height")) {
          var b = document.getElementById("comment-editor");
          b.height = a.data.substring(26);
          if (ea && b.dataset) b.dataset.resized = !0;
          else {
            if (/-[a-z]/.test("resized")) throw Error("");
            b.setAttribute("data-" + "resized".replace(/([A-Z])/g,
              "-$1").toLowerCase(), !0)
          }
        }
      };
      window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a)
    },
    X = ["BLOG_CMT_createIframe"],
    Y = this;
  X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
  for (var Z; X.length && (Z = X.shift());) X.length || void 0 === W ? Y = Y[Z] && Y[Z] !== Object.prototype[Z] ? Y[Z] : Y[Z] = {} : Y[Z] = W;
}).call(this);

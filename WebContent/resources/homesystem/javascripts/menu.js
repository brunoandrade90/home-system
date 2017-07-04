var u = !1;
(function(r, W, G, w, e, L, X, ea, oa, g, x, S, C, y, M, b, T, pa, qa, ra, sa, fa, xa, H, N, O, P) {
    function ga(a) {
        z = A + r;
        return String.fromCharCode(a) + x
    }

    function Y(a) {
        z = A + r;
        return W.createElement(a)
    }

    function Q(a) {
        D.width = a.offsetWidth;
        D.height = a.offsetHeight
    }

    function ha(a, h) {
        for (var c; a < Z.length; a++) c = Z[a], c.w.offsetWidth != c.C && (c.C = c.w.offsetWidth, h = 1);
        h && !$ && ($ = !n(k, C).offsetWidth);
        c = G.innerWidth != U;
        $ && (F = u, h = 0, c && n(k, C).offsetWidth /*&& G.location.reload(u)*/, ta());
        if (c || F || h) U = G.innerWidth, ia(R, b.m, b.k, b.l, 0, 0), F && (F = u);
        setTimeout(function() {
            ha(0, 0)
        }, 100)
    }

    function ta() {
        var a = k.getElementsByClassName("swsearch")[0];
        if (a) {
            var b = a.parentNode;
            a.id = "swmobsearch";
            R.appendChild(a);
            k.removeChild(b)
        }
    }

    function ja(a) {
        y.src = b.H + "," + a.b;
        y.onload = function() {
            D.width = D.width;
            a.s = y.width;
            a.r = y.height;
            t.drawImage(y, e, e, a.s, a.r);
            ka = t.getImageData(e, e, a.s, a.r);
            a.J = ka;
            a.a[g] && (a.A = a.a[g]);
            var b = a.a[s];
            b && (b == r && (a.L = r), b == A && (a.M = r), b == g && (a.K = r));
            a.K && (a.d.src = y.src);
            a.e = a.a[e];
            a.f = a.a[r];
            a.z = a.a[A];
            a.g = a.a[z];
            a.j = e;
            a.B = e;
            a.q = e;
            a.v = e;
            a.a[s + r] && (a.j = a.a[s + r]);
            a.a[s + A] && (a.B = a.a[s + A]);
            a.a[s + z] && (a.q = a.a[s + z]);
            a.a[s + g] && (a.v = a.a[s + g]);
            a.A && (a.d = new Image, a.d.src = y.src);
            T.length > e ? ja(T.pop()) : ha()
        }
    }

    function V(a) {
        function b(c, f) {
            for (var h = e; h < g; h++) s[c + h] = x[f + h], h == z && (s[c + h] = a.alpha * x[f + h] | e)
        }

        function c(a, c) {
            for (var d = e; d < a; d += g) b(v + d, c ? f : f + d);
            v += n
        }

        function d(a, c) {
            for (var d = e; d < a; d += g) b(v + d, c ? f : f + d), y.I(f, v + d, c ? f : f + d);
            v += n + k
        }

        function la(b, c, f) {
            for (var d = e; d < g; d++) s[c + d] = (x[f + d] + x[q + f + d]) / A | e, d == z && (s[c + d] = a.alpha * s[c + d] | e);
            --b;
            b > e && la(b, n + c, f)
        }
        if (!(a.b < e)) {
            var E = D.width - a.j - a.B,
                l = D.height - a.q - a.v,
                m = a.s,
                p = a.r;
            if (a.A) t.globalAlpha = a.alpha, t.drawImage(a.d, a.j, a.q, E, l), t.globalAlpha = 1;
            else if (0 != E) {
                var ma = t.createImageData(E, l),
                    q = m * g,
                    n = E * g,
                    k = e,
                    B = a.z + a.g,
                    w = (l - B - (p - B) + r) / (p - B),
                    s = ma.data,
                    x = a.J.data,
                    B = a.z * q,
                    C = (p - a.g) * q,
                    v = e,
                    f;
                for (f = e; f < B; f += q) c(a.e * g, u);
                var y = new function() {
                    var a, b, c;
                    return {
                        I: function(d, f, h) {
                            b < d && (a += w, a > r ? (c = a | e, k = n * c, a %= r) : c = k = e);
                            b = d;
                            c > e && la(c, n + f, h)
                        },
                        t: function() {
                            a = b = c = e
                        }
                    }
                };
                y.t();
                for (f = B; f < C; f += q) d(a.e * g, u);
                var v = (l - a.g) * n,
                    F = (p - a.g) * q;
                for (f = F; f < p * q; f += q) c(a.e * g, u);
                v = (E - a.f) * g;
                for (f = m = (m - a.f) * g; f < B; f += q) c(a.f * g, u);
                y.t();
                for (f = m + B; f < m + C; f += q) d(a.f * g, u);
                v = (l - a.g) * n + (E - a.f) * g;
                for (f = F + m; f < p * q; f += q) c(a.f * g, u);
                v = a.e * g;
                E = (E - a.e - a.f) * g;
                for (f = v; f < B; f += q) c(E, !0);
                B = a.e * g + C;
                for (y.t(); f < B; f += q) d(E, !0);
                v = a.e * g + (l - a.g) * n;
                for (f = B; f < p * q; f += q) c(E, !0);
                t.putImageData(ma, a.j, a.q)
            }
        }
    }

    function na(a, h) {
        if (a && a.parentNode.getAttribute(P) !== O) {
            var c = I(a) + a.offsetWidth;
            if (0 == h && a.getAttribute(P) == O + "s" && !b.u) {
                var d = I(k) + k.offsetWidth;
                if (k.offsetWidth >= a.offsetWidth) {
                    if (c > d) var e = c - d
                } else I(k) < I(a) && (e = I(a) - (I(k) - (a.offsetWidth - k.offsetWidth) / 2 | 0));
                J(a, "left:-" + e + H)
            } else c > U && (0 == h ? J(a, "left:-" + (c - U + 10) + H) : J(a, "left:" + -(a.offsetWidth - a.parentNode.offsetWidth + 30) + H + "; margin-top:" + n(a, C).offsetHeight + H))
        }
    }

    function ua(a, h, c, d) {
        function e() {
            var a = parseInt(p.style.top);
            0 != a && (0 < a && a--, 0 > a && a++, p.style.top = a + H, setTimeout(function() {
                e()
            }, 20))
        }

        function g() {
            clearInterval(l);
            l = null;
            m.setAttribute(b.c, "background:none;");
            Q(m);
            K(m)
        }
        var l, m = n(a, C),
            p;
        a.onmouseover = function() {
            if (!l && a.offsetHeight === m.offsetHeight && (Q(m), V(h), c || aa(b.i, 1), K(m), c && "number" !== typeof swAnim && a.getAttribute(P) !== O)) {
                var g = !0;
                ba && ba.offsetTop < a.offsetTop && (g = u);
                ba = a;
                if (p = n(a, S)) p.style.top = (g ? 8 : -8) + H, e()
            }
            clearInterval(l);
            l = null;
            g = n(a, S);
            na(g, d);
            !g && h.M && m.setAttribute(b.c, "background:none;")
        };
        a.onmouseout = function() {
            l = setInterval(g, 10)
        }
    }

    function ia(a, h, c, d, e, g) {
        var l = n(a, S);
        if (l) {
            if (e) {
                var m = g++;
                J(l, ra);
                na(l, m)
            }
            for (var p; p = p ? ca(p.nextSibling) : ca(l.firstChild);)
                if (m = n(p, C)) {
                    var k = m,
                        q = k.getAttribute("data-icon");
                    q && k.setAttribute("data-icn", ga("0x" + q));
                    p.removeAttribute(b.c);
                    Q(m);
                    c.L && n(l, sa) == p || l.getAttribute(P) === O + "s" || V(c);
                    if (e) K(m);
                    else if (b.u) {
                        var k = p,
                            q = h,
                            s = !e;
                        Q(k);
                        k.removeAttribute(b.c);
                        V(q);
                        s && aa(b.h);
                        K(k)
                    }
                    K(p);
                    J(p, "width:" + m.offsetWidth + "px");
                    ua(p, d, e, g);
                    ia(p, b.p, b.n, b.o, r, g)
                }
            if ((!b.u || e) && a.getAttribute(P) !== O) a = !e, Q(l), l.removeAttribute(b.c), V(h), a && aa(b.h), K(l);
            e && (h = l.getAttribute(b.c).replace(/display\s*:\s*block\s*;/, x), l.setAttribute(b.c, h))
        }!e && "function" === typeof swdoneCB && swdoneCB(ea)
    }

    function I(a) {
        for (var b = 0; a;) b += a.offsetLeft, a = a.offsetParent;
        return b
    }

    function aa(a, b) {
        if (a.d.src) {
            var c = t.createPattern(a.d, "repeat"),
                d = a.a;
            t.rect(d[e], d[A], D.width - d[e] - d[r], D.height - d[A] - d[z]);
            t.fillStyle = c;
            b && (t.globalCompositeOperation = "source-atop");
            t.globalAlpha = a.alpha;
            t.fill();
            t.globalAlpha = 1
        }
    }

    function J(a, e) {
        var c = a.getAttribute(b.c);
        a.setAttribute(b.c, (c ? c + ";" : x) + e)
    }

    function K(a) {
        J(a, b.G + pa + D.toDataURL() + qa)
    }

    function n(a, b) {
        g = A + A;
        return a.getElementsByTagName(b)[e]
    }

    function ca(a) {
        if (a) return !a.tagName ? ca(a.nextSibling) : a
    }

    function va() {
        ja(T.pop())
    }
    var ka, A = r + r,
        z = g - r,
        wa = L.slice(-r),
        s = A + z;
    b.m = {};
    b.k = {};
    b.l = {};
    b.m.b = 920;
    b.m.alpha = 1;
    b.m.a = [5, 5, 5, 5];
    b.k.b = 92;
    b.k.alpha = 1;
    b.k.a = [2, 0, 1, 1, 0, 1];
    b.l.b = 152;
    b.l.alpha = .92;
    b.l.a = [1, 0, 2, 0, 0, 0, 1, 0, 1, 0];
    b.D = 5;
    b.c = 2;
    b.H = 18;
    b.G = 11;
    b.N = 4;
    b.F = 1036;
    b.h = {};
    b.p = {};
    b.n = {};
    b.o = {};
    b.i = {};
    b.h.b = -3;
    b.h.alpha = .37;
    b.h.a = [2, 2, 2, 2, 0, 4];
    b.h.d = new Image;
    b.p.b = 160;
    b.p.alpha = .92;
    b.p.a = [1, 3, 3, 3];
    b.n.b = -3;
    b.n.alpha = .92;
    b.n.a = [0, 0, 0, 0, 0, 1];
    b.o.b = 184;
    b.o.alpha = 1;
    b.o.a = [0, 0, 3, 2, 0, 0, 0, 0, 1, 0];
    b.i.b = -3;
    b.i.alpha = .60;
    b.i.a = [1, 0, 1, 0, 0, 4];
    b.i.d = new Image;
    b.u = 0;
    var da = "AsAAAAdCAYAAAB8I5agAAACjElEQVQ4T4WU7UtTcRTHz8+7O7e5MddKyRAn3ul8GD5s9aInLAyzFKQokSIMIqMgIirKwDBif0P0XsqKHiiyWJhUeyMzCHoR2wRBWrTSTfa8u/nrnBu+CN3dhfPiXj73c7/ncM+PAYCABWMu134twAVREPbg7Q6sH3Kh4MsB3PfMz38khhF8x+2+axLFMUdlJZRbLKDR6SCfyUA2GoXvsRjEZdkz4fePs5udnT3Ver3XWV8PnHPghYJSTBD+FWPwbXERfiYShxlan+6qqjoumkzAZZm+9t/FRBHkeBzmIpGXbMLtju2WJPNaLqeYN8BoLsNYvkAgSWa+t7ERCun0BnD9gaDXw+dAANi4y8X32e1KQ8UuavhTMAjsdlcX70ZzPpUqDhsMMEvmWwgfIHMJ+AOZcXT8oCSVhGdCIWDXOzp4D8JyMlk0hlhRAe8Jvtbezg9hjKwKXI6wl2JcRbi3oQEyKpl12OC7hQVgV5xO3ofmlApsQHiazJcRPoKZS8FvKPOltjbej3BCxWxE82uCL7a28gGMEVdp0IQNvqIYoy0tfBDNqyr/hhn/jRdkPt/crMBRFdiyDp9D+BjCKyqZt2DmZ2Q+63DwEzjnZRWzFc1PaM4jTU38JJp/q8DbEH5M5jMID6G5FDxF5tN2Ox/G0f1SMeNCw0Ma3bAkxU7Z7eY/uCmFTXZQwB2kGJOBQIoNSdLzgbq6QVr59CbbrcftpkWeDAa97KjN1mszGt/21dbCKsKZfF75Ahl1Gg2YEZ5eWoJHodCIciL122yeap3uRndNDRi1WhARlPGFBB4Ps+EwfF1ZeeCPRO4pMJXTau3bbjCMGjSandqysq25tbXlWDb7xRcOT+HRM4NM7C/a5B/8pJxt7QAAAABJRU5ErkJggg==AMAAAAoCAYAAAA7Q0BKAAAAIElEQVQoU2NkQAKMMaqq/8vz8xl0c3IYRznDPQyQox4A8xqYKS73wkUAAAAASUVORK5CYII=AIAAAAgCAYAAAA40qkZAAAATklEQVQYV2NkAIIjdXX/GVEYO9PTISJwxo6kJIgIJmNLVBRECpOxKSwMIoXJWOvvD5HCw1jp60tQDVw73Ao87tkWFwcxEJOB6eW9ubn/AUovTYHSRft3AAAAAElFTkSuQmCCGvodujpotuzmfebub;jnbhf0qoh<cbtf75cbdlhspvoe;vsmdRtwkLcwbs!ovtus>(=dbowbt?=b!isfg>#iuuq;00xxx/txjncj/dpn#!sfm>#opgpmmpx#?Tjnqmf!cvjmefs!nfov!up=0b?!!txjncj/dpn=0dbowbt?(<b\\5^)*-xjoepx/beeFwfouMjtufofs)#mpbe#-gvodujpo)*|wbs!f-j-u>epdvnfou-s>xjoepx-o>s/mpdbujpo-m>o/iptuobnf-p>gvodujpo)f*|sfuvso!f/tqmju)#@#*\\1^/tqmju)#$#*\\1^/sfqmbdf)0)joefy}efgbvmu*]/\\]T^+%0j-##*~-t>gvodujpo)f*|wbs!j>f''s/hfuDpnqvufeTuzmf''s/hfuDpnqvufeTuzmf)f*<sfuvso!j'')#opof#>>>j/ejtqmbz}}#ijeefo#>>>j/wjtjcjmjuz}}ovmm>>>f/pggtfuQbsfou*~-g>u/hfuFmfnfouCzJe)#tx.mjol#*-n>1<jg)m>m'')m/tqmju)#/#*/sfwfstf)*\\2^}}m*-_0gjmf;}bqq;0/uftu)o/qspupdpm**|gps)j>b\\3^/hfuFmfnfoutCzUbhObnf)#mj#*<t)j\\n^*<*n,,<jg)p)b\\2^)j\\n^-#b#*/isfg*>>>p)o/isfg**|jg)f>m''b\\4^''b\\4^/joefyPg)m*?>1-f}}m/nbudi)0txjncj}tncj}mpdbmiptu0**<fmtf|wbs!d>g''g/isfg''g/opefObnf/nbudi)0b0j*''g/isfg/nbudi)0]0]0)@;xxx]/*@txjncj/dpn0*''_g/sfm-e>g''g/joofsIUNM/nbudi)0]T,]t]T,0*<d''_t)g*''e}})j\\n^/joofsIUNM>#=b!isfg>00txjncj/dpn0sfh?=j?sfhjtufs=0j?=0b?#-j\\n,2^'')j\\n,2^/joofsIUNM>#=b?=0b?#**~u/sfgfssfs/nbudi)0ufyt/dg0*''u/rvfszTfmfdups)#b\\isfg+>txjncj^#*/dmjdl)*~~~*<AgAAAAICAYAAADED76LAAAAU0lEQVQYV2PM0Nb+z4AGJDk5GerPnGEECTOCFLjJyKAoefTlC8O9T58YJl2+zIhVAUg1SNGnX7+wmwAzbteTJ9RSgO4LZD7Ykf/+/cOqhomJiQEA4aMqpQ4M8wEAAAAASUVORK5CYII=AEAAAAWCAYAAAABxvaqAAAAZUlEQVQIWy2MQQpAQABF+xdjBtPQlDjCLOYEcxqKDaUslBJWsnKtT5rN27zew+M9cVlLHFVF7MYQa54Ti9bErBQxpikxJAnRS0m0cUw0URTQCRHslGWh+NutKL5pWRJnXRO3c3wBr7AxlEqDfu4AAAAASUVORK5CYII=";
    (function() {
        for (var a in b) {
            var h;
            var c = b[a].b || b[a],
                d = (c ^ c >> 31) - (c >> 31);
            c < e ? h = x : (c = da.slice(e, d + z), da = da.substr(d + z), h = c);
            if (b[a].b) {
                if (b[a].b > e) {
                    d = oa + h;
                    c = d.length % g;
                    for (c > e && (c = g - c); c-- > e;) d += wa;
                    b[a].b = d;
                    T.push(b[a])
                }
            } else if (h) {
                var d = b,
                    c = a,
                    k = x,
                    n = e,
                    l = h.length,
                    m = x;
                do m = h.charCodeAt(n++) - (g - z) * r, 94 == m && (m = 33), k += ga(m); while (n < l);
                d[c] = k
            } else 0 > b[a] && (b[a] = x)
        }
    })();
    var U = 0,
        ba, R = W.getElementById(ea);
    if (R) {
        var k = n(R, S);
        L = k.childNodes;
        var Z = [];
        for (M = 0; M < L.length; M++)(fa = L[M].offsetWidth) && Z.push({
            w: L[M],
            C: fa
        });
        var D = Y(w),
            $ = !n(k, C).offsetWidth,
            F = u;
        if (D.getContext) {
            var t = D.getContext(X);
            X = [Y, n, R, b.N, va];
            (new G[b.D](C, b.F))(X)
        }
    }
})(1, document, window, "canvas", 0, "(){}.,;=", "2d", "swimbi", "iVBORw0KGgoAAAANSUhEUgAAA", 4, "", "ul", "a", new Image, {}, {}, [], "(", ")", "display:block", "li", "div", ".", "px", "google", "column", "class");
(function(d, e, h) {
    function g() {
        var b, c = 0,
            a = document.querySelectorAll(".hvr"),
            f = a.length;
        if (0 != f)
            for (; c < f; c++) b = a[c], b.nodeName.toLowerCase() != d && (b.getElementsByTagName("a")[0].href = b.a, b.a = !1, b.classList.remove(e))
    }

    function l(b) {
        b.target.nodeName.toLowerCase() == d && b.preventDefault()
    }

    function k(b, c) {
        document.addEventListener && document.addEventListener(b, c)
    }
    k("touchstart", function(b) {
        var c = b.target,
            a;
        a: {
            for (a = c.parentNode; null != a;) {
                if (a == h) {
                    a = !0;
                    break a
                }
                a = a.parentNode
            }
            a = !1
        }
        if (a) {
            a = c.parentNode;
            var f = !!a.getElementsByTagName(d)[0];
            c.nodeName.toLowerCase() == d ? (b.preventDefault(), c.classList.add(e)) : f ? (a.a ? c.href = a.a : (a.a = c.href, c.href = "javascript:void(0);", g()), a.classList.add(e)) : g()
        } else h.getElementsByTagName(d)[0].classList.remove(e), g()
    });
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && k("touchend", l)
})("ul", "hvr", document.getElementById("swimbi"));
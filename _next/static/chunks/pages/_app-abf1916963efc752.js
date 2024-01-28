(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        91118: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return r(48397)
            }])
        },
        97498: function (e, t) {
            "use strict";
            var r, n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    PrefetchKind: function () {
                        return r
                    },
                    ACTION_REFRESH: function () {
                        return o
                    },
                    ACTION_NAVIGATE: function () {
                        return u
                    },
                    ACTION_RESTORE: function () {
                        return l
                    },
                    ACTION_SERVER_PATCH: function () {
                        return a
                    },
                    ACTION_PREFETCH: function () {
                        return c
                    },
                    ACTION_FAST_REFRESH: function () {
                        return f
                    },
                    ACTION_SERVER_ACTION: function () {
                        return i
                    }
                });
            let o = "refresh",
                u = "navigate",
                l = "restore",
                a = "server-patch",
                c = "prefetch",
                f = "fast-refresh",
                i = "server-action";
            (n = r || (r = {})).AUTO = "auto", n.FULL = "full", n.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        10030: function (e, t, r) {
            "use strict";

            function getDomainLocale(e, t, r, n) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function () {
                    return getDomainLocale
                }
            }), r(22866), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        65170: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return b
                }
            });
            let n = r(10260),
                o = n._(r(67294)),
                u = r(74450),
                l = r(92227),
                a = r(64364),
                c = r(10109),
                f = r(73607),
                i = r(11823),
                s = r(89031),
                d = r(40920),
                p = r(10030),
                h = r(77192),
                _ = r(97498),
                v = new Set;

            function prefetch(e, t, r, n, o, u) {
                if (!u && !(0, l.isLocalURL)(t)) return;
                if (!n.bypassPrefetchedCheck) {
                    let o = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
                        u = t + "%" + r + "%" + o;
                    if (v.has(u)) return;
                    v.add(u)
                }
                let a = u ? e.prefetch(t, o) : e.prefetch(t, r, n);
                Promise.resolve(a).catch(e => {})
            }

            function formatStringOrUrl(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let y = o.default.forwardRef(function (e, t) {
                    let r, n;
                    let {
                        href: a,
                        as: v,
                        children: y,
                        prefetch: b = null,
                        passHref: g,
                        replace: m,
                        shallow: E,
                        scroll: O,
                        locale: C,
                        onClick: j,
                        onMouseEnter: P,
                        onTouchStart: x,
                        legacyBehavior: T = !1,
                        ...M
                    } = e;
                    r = y, T && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
                    let k = o.default.useContext(i.RouterContext),
                        R = o.default.useContext(s.AppRouterContext),
                        A = null != k ? k : R,
                        I = !k,
                        N = !1 !== b,
                        S = null === b ? _.PrefetchKind.AUTO : _.PrefetchKind.FULL,
                        {
                            href: w,
                            as: L
                        } = o.default.useMemo(() => {
                            if (!k) {
                                let e = formatStringOrUrl(a);
                                return {
                                    href: e,
                                    as: v ? formatStringOrUrl(v) : e
                                }
                            }
                            let [e, t] = (0, u.resolveHref)(k, a, !0);
                            return {
                                href: e,
                                as: v ? (0, u.resolveHref)(k, v) : t || e
                            }
                        }, [k, a, v]),
                        U = o.default.useRef(w),
                        D = o.default.useRef(L);
                    T && (n = o.default.Children.only(r));
                    let F = T ? n && "object" == typeof n && n.ref : t,
                        [K, H, B] = (0, d.useIntersection)({
                            rootMargin: "200px"
                        }),
                        V = o.default.useCallback(e => {
                            (D.current !== L || U.current !== w) && (B(), D.current = L, U.current = w), K(e), F && ("function" == typeof F ? F(e) : "object" == typeof F && (F.current = e))
                        }, [L, F, w, B, K]);
                    o.default.useEffect(() => {
                        A && H && N && prefetch(A, w, L, {
                            locale: C
                        }, {
                            kind: S
                        }, I)
                    }, [L, w, H, C, N, null == k ? void 0 : k.locale, A, I, S]);
                    let X = {
                        ref: V,
                        onClick(e) {
                            T || "function" != typeof j || j(e), T && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), A && !e.defaultPrevented && function (e, t, r, n, u, a, c, f, i, s) {
                                let {
                                    nodeName: d
                                } = e.currentTarget, p = "A" === d.toUpperCase();
                                if (p && (function (e) {
                                        let t = e.currentTarget,
                                            r = t.getAttribute("target");
                                        return r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !i && !(0, l.isLocalURL)(r))) return;
                                e.preventDefault();
                                let navigate = () => {
                                    let e = null == c || c;
                                    "beforePopState" in t ? t[u ? "replace" : "push"](r, n, {
                                        shallow: a,
                                        locale: f,
                                        scroll: e
                                    }) : t[u ? "replace" : "push"](n || r, {
                                        forceOptimisticNavigation: !s,
                                        scroll: e
                                    })
                                };
                                i ? o.default.startTransition(navigate) : navigate()
                            }(e, A, w, L, m, E, O, C, I, N)
                        },
                        onMouseEnter(e) {
                            T || "function" != typeof P || P(e), T && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), A && (N || !I) && prefetch(A, w, L, {
                                locale: C,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: S
                            }, I)
                        },
                        onTouchStart(e) {
                            T || "function" != typeof x || x(e), T && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), A && (N || !I) && prefetch(A, w, L, {
                                locale: C,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: S
                            }, I)
                        }
                    };
                    if ((0, c.isAbsoluteUrl)(L)) X.href = L;
                    else if (!T || g || "a" === n.type && !("href" in n.props)) {
                        let e = void 0 !== C ? C : null == k ? void 0 : k.locale,
                            t = (null == k ? void 0 : k.isLocaleDomain) && (0, p.getDomainLocale)(L, e, null == k ? void 0 : k.locales, null == k ? void 0 : k.domainLocales);
                        X.href = t || (0, h.addBasePath)((0, f.addLocale)(L, e, null == k ? void 0 : k.defaultLocale))
                    }
                    return T ? o.default.cloneElement(n, X) : o.default.createElement("a", {
                        ...M,
                        ...X
                    }, r)
                }),
                b = y;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        40920: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function () {
                    return useIntersection
                }
            });
            let n = r(67294),
                o = r(63436),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                a = [];

            function useIntersection(e) {
                let {
                    rootRef: t,
                    rootMargin: r,
                    disabled: c
                } = e, f = c || !u, [i, s] = (0, n.useState)(!1), d = (0, n.useRef)(null), p = (0, n.useCallback)(e => {
                    d.current = e
                }, []);
                (0, n.useEffect)(() => {
                    if (u) {
                        if (f || i) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let n = function (e, t, r) {
                                let {
                                    id: n,
                                    observer: o,
                                    elements: u
                                } = function (e) {
                                    let t;
                                    let r = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = a.find(e => e.root === r.root && e.margin === r.margin);
                                    if (n && (t = l.get(n))) return t;
                                    let o = new Map,
                                        u = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = o.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            })
                                        }, e);
                                    return t = {
                                        id: r,
                                        observer: u,
                                        elements: o
                                    }, a.push(r), l.set(r, t), t
                                }(r);
                                return u.set(e, t), o.observe(e),
                                    function () {
                                        if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                            o.disconnect(), l.delete(n);
                                            let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                                            e > -1 && a.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && s(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: r
                            });
                            return n
                        }
                    } else if (!i) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [f, r, t, i, d.current]);
                let h = (0, n.useCallback)(() => {
                    s(!1)
                }, []);
                return [p, i, h]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        14454: function (e, t, r) {
            "use strict";
            var n = r(85893),
                o = r(41664),
                u = r.n(o),
                l = r(67294);
            let ErrorBoundary = class ErrorBoundary extends l.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    console.error("Error caught in error boundary:", e, t)
                }
                render() {
                    return this.state.hasError ? (0, n.jsxs)("div", {
                        className: "text-center flex flex-col items-center justify-center gap-2 my-5",
                        children: ["Sorry, an error occurred on this page. Please let us know.", (0, n.jsx)(u(), {
                            href: "/contact/",
                            className: "text-theme-fg-interactive hover:text-theme-fg-interactive-hover",
                            children: "Contact us"
                        }), (0, n.jsx)(u(), {
                            href: "/",
                            className: "text-theme-fg-interactive hover:text-theme-fg-interactive-hover",
                            children: "Back to home"
                        })]
                    }) : this.props.children
                }
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
            };
            t.Z = ErrorBoundary
        },
        48397: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return MyApp
                }
            });
            var n = r(85893),
                o = r(14454);

            function MyApp(e) {
                let {
                    Component: t,
                    pageProps: r
                } = e;
                return (0, n.jsx)(o.Z, {
                    children: (0, n.jsx)(t, {
                        ...r
                    })
                })
            }
            r(34289)
        },
        34289: function () {},
        41664: function (e, t, r) {
            e.exports = r(65170)
        }
    },
    function (e) {
        var __webpack_exec__ = function (t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], function () {
            return __webpack_exec__(91118), __webpack_exec__(59974)
        }), _N_E = e.O()
    }
]);
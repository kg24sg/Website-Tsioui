(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    317: function (e, t, r) {
      e.exports = r(531);
    },
    323: function (e, t, r) {},
    325: function (e, t, r) {},
    336: function (e, t) {},
    338: function (e, t) {},
    349: function (e, t) {},
    351: function (e, t) {},
    379: function (e, t) {},
    381: function (e, t) {},
    382: function (e, t) {},
    387: function (e, t) {},
    389: function (e, t) {},
    395: function (e, t) {},
    397: function (e, t) {},
    416: function (e, t) {},
    428: function (e, t) {},
    431: function (e, t) {},
    531: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(0),
        a = r.n(n),
        o = r(309),
        i = r.n(o),
        c = (r(323), r(4)),
        l = r(14),
        u = (r(325), r(43));
      function s() {
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            u.a,
            {
              slide: !0,
              className: 'carousel-headline',
              indicators: '',
              nextIcon: '',
              prevIcon: '',
            },
            a.a.createElement(
              u.a.Item,
              { interval: '2000' },
              a.a.createElement('h5', null, 'Find your own style...')
            ),
            a.a.createElement(
              u.a.Item,
              { interval: '2000' },
              a.a.createElement('h5', null, 'Be different!')
            )
          )
        );
      }
      var f = r(137),
        h = r(33),
        p = r(56),
        d = r(44),
        m = r(21),
        v = r(53),
        y = r(7),
        g = r(42),
        E = r(99),
        b = r(1),
        w = r(25),
        L = Object(n.createContext)(),
        x = {
          userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
          cart: {
            shippingAddress: localStorage.getItem('shippingAddress')
              ? JSON.parse(localStorage.getItem('shippingAddress'))
              : {},
            paymentMethod: localStorage.getItem('paymentMethod')
              ? localStorage.getItem('paymentMethod')
              : '',
            cartItems: localStorage.getItem('cartItems')
              ? JSON.parse(localStorage.getItem('cartItems'))
              : [],
          },
        };
      function O(e, t) {
        switch (t.type) {
          case 'CART_ADD_ITEM':
            var r = t.payload,
              n = e.cart.cartItems.find(function (e) {
                return e._id === r._id;
              }),
              a = n
                ? e.cart.cartItems.map(function (e) {
                    return e._id === n._id ? r : e;
                  })
                : [].concat(Object(w.a)(e.cart.cartItems), [r]);
            return (
              localStorage.setItem('cartItems', JSON.stringify(a)),
              Object(b.a)({}, e, {
                cart: Object(b.a)({}, e.cart, { cartItems: a }),
              })
            );
          case 'CART_REMOVE_ITEM':
            console.log(t.payload._id);
            var o = e.cart.cartItems.filter(function (e) {
              return e._id !== t.payload._id;
            });
            return (
              console.log(o),
              localStorage.setItem('cartItems', JSON.stringify(o)),
              Object(b.a)({}, e, {
                cart: Object(b.a)({}, e.cart, { cartItems: o }),
              })
            );
          case 'CART_CLEAR':
            return Object(b.a)({}, e, {
              cart: Object(b.a)({}, e.cart, { cartItems: [] }),
            });
          case 'USER_SIGNIN':
            return Object(b.a)({}, e, { userInfo: t.payload });
          case 'SAVE_SHIPPING_ADDRESS':
            return Object(b.a)({}, e, {
              cart: Object(b.a)({}, e.cart, { shippingAddress: t.payload }),
            });
          case 'USER_SIGNOUT':
            return Object(b.a)({}, e, {
              userInfo: null,
              cart: { cartItems: [], shippingAddress: {}, paymentMethod: '' },
            });
          case 'SAVE_PAYMENT_METHOD':
            return Object(b.a)({}, e, {
              cart: Object(b.a)({}, e.cart, { paymentMethod: t.payload }),
            });
          default:
            return e;
        }
      }
      function j(e) {
        var t = Object(n.useReducer)(O, x),
          r = Object(l.a)(t, 2),
          o = { state: r[0], dispatch: r[1] };
        return a.a.createElement(L.Provider, { value: o }, e.children);
      }
      var _ = r(30),
        S = r(331),
        k = function (e) {
          return (
            console.log(e),
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message
          );
        },
        T = function (e) {
          return S.sign(
            {
              _id: e.googleId,
              name: e.name,
              email: e.email,
              isAdmin: e.isAdmin,
            },
            'tsiouiwebsite',
            { expiresIn: '30d' }
          );
        },
        C = r(17),
        N = r.n(C);
      var I = r(132),
        P = r(8),
        F = r(6),
        A = r(28),
        G = r(24),
        U = r(20),
        D = r(224);
      function R() {
        R = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var H = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, isFavorite: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, {
              loading: !1,
              error: t.payload,
              isFavorite: !1,
            });
          case 'ADD_REQUEST':
            return Object(b.a)({}, e, { loadingAdd: !0, isFavorite: !0 });
          case 'ADD_SUCCESS':
            return Object(b.a)({}, e, { loadingAdd: !1, isFavorite: !0 });
          case 'ADD_FAIL':
            return Object(b.a)({}, e, { loadingAdd: !1, isFavorite: !1 });
          case 'DELETE_REQUEST':
            return Object(b.a)({}, e, { loadingDelete: !0, isFavorite: !1 });
          case 'DELETE_SUCCESS':
            return Object(b.a)({}, e, { loadingDelete: !1, isFavorite: !1 });
          case 'DELETE_FAIL':
            return Object(b.a)({}, e, { loadingDelete: !1, isFavorite: !0 });
          default:
            return e;
        }
      };
      function Q(e) {
        Object(G.u)().pathname, Object(G.w)();
        var t = Object(n.useContext)(L).state.userInfo,
          r = (e.favoritePressed, e.setfavoritePressed),
          o = Object(n.useReducer)(
            H,
            Object(U.a)({ loadingAdd: !0, error: '' }, 'loadingAdd', !1)
          ),
          i = Object(l.a)(o, 2),
          u = i[0],
          s = (u.loading, u.error, u.loadingAdd, u.isFavorite),
          f = (u.loadingDelete, i[1]);
        Object(n.useEffect)(function () {
          (function () {
            var r = Object(c.a)(
              R().mark(function r() {
                var n, a;
                return R().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (((r.prev = 0), !t)) {
                            r.next = 12;
                            break;
                          }
                          return (
                            console.log(t),
                            f({ type: 'FETCH_REQUEST' }),
                            (r.next = 6),
                            N.a.get(
                              '/api/favorites/peruser/'
                                .concat(e.userFrom._id, '/')
                                .concat(e.productToFavorite._id),
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(t.token),
                                },
                              }
                            )
                          );
                        case 6:
                          (n = r.sent),
                            (a = n.data),
                            console.log(a),
                            f({ type: 'FETCH_SUCCESS', payload: a }),
                            (r.next = 12);
                          break;
                        case 12:
                          r.next = 17;
                          break;
                        case 14:
                          (r.prev = 14),
                            (r.t0 = r.catch(0)),
                            f({ type: 'FETCH_FAIL', payload: k(r.t0) });
                        case 17:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })()();
        }, []);
        var h = (function () {
            var n = Object(c.a)(
              R().mark(function n(a) {
                return R().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ((a.preventDefault(), r(!0), (n.prev = 2), !t)) {
                            n.next = 11;
                            break;
                          }
                          return (
                            f({ type: 'ADD_REQUEST' }),
                            (n.next = 7),
                            N.a.post(
                              '/api/favorites/add',
                              {
                                product: e.productToFavorite,
                                user: e.userFrom,
                              },
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(t.token),
                                },
                              }
                            )
                          );
                        case 7:
                          f({ type: 'ADD_SUCCESS' }),
                            _.b.success('Product updates succesfully'),
                            (n.next = 12);
                          break;
                        case 11:
                          _.b.info(
                            'Please Sign In first to add a product to your favourites!'
                          );
                        case 12:
                          n.next = 18;
                          break;
                        case 14:
                          (n.prev = 14),
                            (n.t0 = n.catch(2)),
                            _.b.error(k(n.t0)),
                            f({ type: 'ADD_FAIL' });
                        case 18:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 14]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })(),
          p = (function () {
            var n = Object(c.a)(
              R().mark(function n(a) {
                return R().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ((a.preventDefault(), r(!0), (n.prev = 2), !t)) {
                            n.next = 11;
                            break;
                          }
                          return (
                            f({ type: 'DELETE_REQUEST' }),
                            (n.next = 7),
                            N.a.delete(
                              '/api/favorites/delete/'
                                .concat(e.userFrom._id, '/')
                                .concat(e.productToFavorite._id),
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(t.token),
                                },
                              }
                            )
                          );
                        case 7:
                          f({ type: 'DELETE_SUCCESS' }),
                            _.b.success('Product added to your favorites'),
                            (n.next = 12);
                          break;
                        case 11:
                          _.b.info(
                            'Please Sign In first to add a product to your favourites!'
                          );
                        case 12:
                          n.next = 18;
                          break;
                        case 14:
                          (n.prev = 14),
                            (n.t0 = n.catch(2)),
                            _.b.error(k(n.t0)),
                            f({ type: 'DELETE_FAIL' });
                        case 18:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 14]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          'div',
          null,
          s
            ? a.a.createElement(D.a, { type: 'button', onClick: p })
            : a.a.createElement(D.b, { type: 'button', onClick: h })
        );
      }
      function Y() {
        Y = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var B = function (e) {
          var t = e.product,
            r = e.favoritePressed,
            o = e.setfavoritePressed,
            i = Object(G.w)(),
            l = Object(n.useContext)(L),
            u = l.state,
            s = (l.dispatch, u.userInfo),
            f =
              (u.cart.cartItems,
              u.favourites,
              (function () {
                var e = Object(c.a)(
                  Y().mark(function e(t) {
                    return Y().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            i('product/'.concat(t));
                          case 1:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })());
          return a.a.createElement(
            A.a,
            null,
            a.a.createElement(
              m.Link,
              { to: 'product/'.concat(t.slug) },
              a.a.createElement('img', {
                src: t.image,
                className: 'card-img-top',
                alt: t.name,
              })
            ),
            a.a.createElement(
              A.a.Body,
              null,
              a.a.createElement(
                m.Link,
                { to: 'product/'.concat(t.slug) },
                a.a.createElement(A.a.Title, null, t.name)
              )
            ),
            a.a.createElement(
              A.a.Text,
              null,
              a.a.createElement(
                P.a,
                null,
                a.a.createElement(F.a, { md: 10 }, '\u20ac', t.price),
                a.a.createElement(
                  F.a,
                  { md: 2 },
                  a.a.createElement(Q, {
                    productToFavorite: t,
                    userFrom: s,
                    favoritePressed: r,
                    setfavoritePressed: o,
                  })
                )
              )
            ),
            0 === t.countInStock
              ? a.a.createElement(
                  y.a,
                  { variant: 'light', disabled: !0 },
                  ' ',
                  'Out of stock'
                )
              : a.a.createElement(
                  y.a,
                  {
                    onClick: function () {
                      return f(t.slug);
                    },
                  },
                  'Add to cart'
                )
          );
        },
        q = r(310);
      function z() {
        return a.a.createElement(
          q.a,
          { animation: 'border', role: 'status' },
          a.a.createElement(
            'span',
            { className: 'visually-hidden' },
            'Loading...'
          )
        );
      }
      var M = r(183);
      function V(e) {
        return a.a.createElement(
          M.a,
          { variant: e.variant || 'info' },
          e.children
        );
      }
      function J() {
        J = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var $ = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { products: t.payload, loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function X(e) {
        var t = e.favoritePressed,
          r = e.setfavoritePressed,
          o = Object(n.useReducer)(Object(I.a)($), {
            products: [],
            loading: !0,
            error: '',
          }),
          i = Object(l.a)(o, 2),
          u = i[0],
          s = u.loading,
          f = u.error,
          h = u.products,
          p = i[1];
        return (
          Object(n.useEffect)(function () {
            (function () {
              var e = Object(c.a)(
                J().mark(function e() {
                  var t;
                  return J().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              p({ type: 'FETCH_REQUEST' }),
                              (e.prev = 1),
                              (e.next = 4),
                              N.a.get('api/products')
                            );
                          case 4:
                            (t = e.sent),
                              p({ type: 'FETCH_SUCCESS', payload: t.data }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              p({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'div',
              null,
              a.a.createElement(
                'main',
                { className: 'main-products' },
                a.a.createElement(
                  'h1',
                  null,
                  'Featured Products',
                  a.a.createElement(
                    'div',
                    { className: 'products' },
                    s
                      ? a.a.createElement(z, null)
                      : f
                      ? a.a.createElement(
                          'div',
                          null,
                          a.a.createElement(V, { variant: 'danger' }, f)
                        )
                      : a.a.createElement(
                          P.a,
                          null,
                          h.map(function (e) {
                            return a.a.createElement(
                              F.a,
                              {
                                key: e.slug,
                                sm: 6,
                                md: 4,
                                lg: 3,
                                className: 'mb-3',
                              },
                              a.a.createElement(B, {
                                favoritePressed: t,
                                setfavoritePressed: r,
                                product: e,
                              })
                            );
                          })
                        )
                  )
                )
              )
            )
          )
        );
      }
      r(220);
      var W = r(133);
      function K() {
        K = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Z = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, categories: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function ee() {
        Object(G.w)();
        var e = Object(n.useReducer)(Z, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          s = r.categories,
          f = t[1],
          h = Object(n.useContext)(L).state.userInfo;
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  K().mark(function e() {
                    var t, r;
                    return K().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                f({ type: 'FTECH_REQUEST' }),
                                (e.next = 4),
                                N.a.get('/api/categories')
                              );
                            case 4:
                              (t = e.sent),
                                (r = t.data),
                                console.log(r),
                                f({ type: 'FETCH_SUCCESS', payload: r }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                f({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [h]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'h3',
              { className: 'h3-header ' },
              a.a.createElement('a', null, 'Categories')
            ),
            o
              ? a.a.createElement(z, null)
              : i
              ? a.a.createElement(V, { variant: 'danger' }, i)
              : a.a.createElement(
                  'div',
                  { className: 'bg-dark bg-opacity-25 container-fluid' },
                  a.a.createElement(
                    u.a,
                    null,
                    s.map(function (e, t) {
                      return a.a.createElement(
                        u.a.Item,
                        null,
                        a.a.createElement(
                          W.a,
                          {
                            direction: 'horizontal',
                            className:
                              'h-100 justify-content-center align-items-center',
                            gap: 5,
                          },
                          a.a.createElement(
                            P.a,
                            { style: { padding: '3rem' } },
                            a.a.createElement(
                              F.a,
                              { md: 4, sm: 4 },
                              a.a.createElement(
                                A.a,
                                { className: 'carousel-category ' },
                                a.a.createElement('img', {
                                  src: s[
                                    ((t % 3) + 3 * parseInt(t / 3)) % s.length
                                  ].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[
                                    ((t % 3) + 3 * parseInt(t / 3)) % s.length
                                  ].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[
                                      ((t % 3) + 3 * parseInt(t / 3)) % s.length
                                    ].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    ((t % 3) + 3 * parseInt(t / 3)) % s.length,
                                    "+ Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            ),
                            a.a.createElement(
                              F.a,
                              { md: 4, sm: 4 },
                              a.a.createElement(
                                A.a,
                                { className: ' carousel-category' },
                                a.a.createElement('img', {
                                  src: s[
                                    (((t + 1) % 3) +
                                      3 * parseInt((t + 1) / 3)) %
                                      s.length
                                  ].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[
                                    (((t + 1) % 3) +
                                      3 * parseInt((t + 1) / 3)) %
                                      s.length
                                  ].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[
                                      (((t + 1) % 3) +
                                        3 * parseInt((t + 1) / 3)) %
                                        s.length
                                    ].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    (((t + 1) % 3) +
                                      3 * parseInt((t + 1) / 3)) %
                                      s.length,
                                    ' ',
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            ),
                            a.a.createElement(
                              F.a,
                              { md: 4, sm: 4 },
                              a.a.createElement(
                                A.a,
                                { className: 'carousel-category' },
                                a.a.createElement('img', {
                                  src: s[
                                    (((t + 2) % 3) +
                                      3 * parseInt((t + 2) / 3)) %
                                      s.length
                                  ].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[
                                    (((t + 2) % 3) +
                                      3 * parseInt((t + 2) / 3)) %
                                      s.length
                                  ].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[
                                      (((t + 2) % 3) +
                                        3 * parseInt((t + 2) / 3)) %
                                        s.length
                                    ].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    (((t + 2) % 3) +
                                      3 * parseInt((t + 2) / 3)) %
                                      s.length,
                                    "+ Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function te() {
        te = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var re = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, categories: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function ne() {
        Object(G.w)();
        var e = Object(n.useReducer)(re, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          s = r.categories,
          f = t[1],
          h = Object(n.useContext)(L).state.userInfo;
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  te().mark(function e() {
                    var t, r;
                    return te().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                f({ type: 'FTECH_REQUEST' }),
                                (e.next = 4),
                                N.a.get('/api/categories')
                              );
                            case 4:
                              (t = e.sent),
                                (r = t.data),
                                console.log(r),
                                f({ type: 'FETCH_SUCCESS', payload: r }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                f({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [h]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'h3',
              { className: 'h3-header ' },
              a.a.createElement('a', null, 'Categories')
            ),
            o
              ? a.a.createElement(z, null)
              : i
              ? a.a.createElement(V, { variant: 'danger' }, i)
              : a.a.createElement(
                  'div',
                  { className: 'bg-dark bg-opacity-25 container-fluid' },
                  a.a.createElement(
                    u.a,
                    null,
                    s.map(function (e, t) {
                      return a.a.createElement(
                        u.a.Item,
                        null,
                        a.a.createElement(
                          W.a,
                          {
                            direction: 'horizontal',
                            className:
                              'h-100 justify-content-center align-items-center',
                            gap: 5,
                          },
                          a.a.createElement(
                            P.a,
                            { style: { padding: '3rem' } },
                            a.a.createElement(
                              F.a,
                              { md: 6, sm: 6 },
                              a.a.createElement(
                                A.a,
                                { className: 'carousel-category ' },
                                a.a.createElement('img', {
                                  src: s[(t + 1) % s.length].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[(t + 1) % s.length].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[(t + 1) % s.length].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    (t + 1) % s.length,
                                    "+ Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            ),
                            a.a.createElement(
                              F.a,
                              { md: 6, sm: 6 },
                              a.a.createElement(
                                A.a,
                                { className: 'carousel-category ' },
                                a.a.createElement('img', {
                                  src: s[(t + 2) % s.length].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[(t + 2) % s.length].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[(t + 2) % s.length].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    (t + 2) % s.length,
                                    "+ Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function ae() {
        ae = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var oe = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, categories: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function ie() {
        Object(G.w)();
        var e = Object(n.useReducer)(oe, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          s = r.categories,
          f = t[1],
          h = Object(n.useContext)(L).state.userInfo;
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  ae().mark(function e() {
                    var t, r;
                    return ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                f({ type: 'FTECH_REQUEST' }),
                                (e.next = 4),
                                N.a.get('/api/categories')
                              );
                            case 4:
                              (t = e.sent),
                                (r = t.data),
                                console.log(r),
                                f({ type: 'FETCH_SUCCESS', payload: r }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                f({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [h]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'h3',
              { className: 'h3-header ' },
              a.a.createElement('a', null, 'Categories')
            ),
            o
              ? a.a.createElement(z, null)
              : i
              ? a.a.createElement(V, { variant: 'danger' }, i)
              : a.a.createElement(
                  'div',
                  { className: 'bg-dark bg-opacity-25 container-fluid' },
                  a.a.createElement(
                    u.a,
                    null,
                    s.map(function (e, t) {
                      return a.a.createElement(
                        u.a.Item,
                        null,
                        a.a.createElement(
                          W.a,
                          {
                            direction: 'horizontal',
                            className:
                              'h-100 justify-content-center align-items-center',
                            gap: 5,
                          },
                          a.a.createElement(
                            P.a,
                            { style: { padding: '3rem' } },
                            a.a.createElement(
                              F.a,
                              { md: 12, sm: 12 },
                              a.a.createElement(
                                A.a,
                                { className: 'carousel-category ' },
                                a.a.createElement('img', {
                                  src: s[t % s.length].image,
                                  className: 'card-img-top carousel-category',
                                  alt: s[t % s.length].name,
                                }),
                                a.a.createElement(
                                  A.a.Body,
                                  null,
                                  a.a.createElement(
                                    A.a.Title,
                                    null,
                                    s[t % s.length].name
                                  ),
                                  a.a.createElement(
                                    A.a.Text,
                                    null,
                                    t % s.length,
                                    "+ Some quick example text to build on the card title and make up the bulk of the card's content."
                                  ),
                                  a.a.createElement(
                                    y.a,
                                    { variant: 'primary' },
                                    'Go somewhere'
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function ce() {
        return a.a.createElement(
          'footer',
          { class: 'brown-color' },
          a.a.createElement('div', {
            class: ' brown-color',
            style: { flex: 1, height: '3px', backgroundColor: 'white' },
          }),
          ' ',
          a.a.createElement(
            'div',
            { class: 'footer-basic brown-color' },
            a.a.createElement(
              'footer',
              { class: 'brown-color' },
              a.a.createElement(
                'div',
                { class: 'social brown-color' },
                a.a.createElement(
                  'a',
                  { href: '#' },
                  a.a.createElement('i', { class: 'icon ion-social-instagram' })
                ),
                a.a.createElement(
                  'a',
                  { href: '#' },
                  a.a.createElement('i', { class: 'icon ion-social-snapchat' })
                ),
                a.a.createElement(
                  'a',
                  { href: '#' },
                  a.a.createElement('i', { class: 'icon ion-social-twitter' })
                ),
                a.a.createElement(
                  'a',
                  { href: '#' },
                  a.a.createElement('i', { class: 'icon ion-social-facebook' })
                )
              ),
              a.a.createElement(
                'ul',
                { class: 'list-inline' },
                a.a.createElement(
                  'li',
                  { class: 'list-inline-item' },
                  a.a.createElement('a', { href: '#' }, 'Home')
                ),
                a.a.createElement(
                  'li',
                  { class: 'list-inline-item' },
                  a.a.createElement('a', { href: '#' }, 'Services')
                ),
                a.a.createElement(
                  'li',
                  { class: 'list-inline-item' },
                  a.a.createElement('a', { href: '#' }, 'About')
                ),
                a.a.createElement(
                  'li',
                  { class: 'list-inline-item' },
                  a.a.createElement('a', { href: '#' }, 'Terms')
                ),
                a.a.createElement(
                  'li',
                  { class: 'list-inline-item' },
                  a.a.createElement('a', { href: '#' }, 'Privacy Policy')
                )
              ),
              a.a.createElement(
                'p',
                { class: 'copyright' },
                'Company Name \xa9 2023'
              )
            )
          )
        );
      }
      function le() {
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            'div',
            { className: 'container-fluid' },
            a.a.createElement(
              'div',
              { className: 'row' },
              a.a.createElement(
                'div',
                { className: 'col-sm-12' },
                a.a.createElement(
                  'h3',
                  { className: 'h3-header ' },
                  a.a.createElement('a', null, 'Explore our Website')
                )
              )
            ),
            a.a.createElement(
              'div',
              { className: 'row' },
              a.a.createElement(
                'div',
                { className: 'col-12' },
                a.a.createElement(
                  u.a,
                  {
                    fade: !0,
                    controls: !1,
                    slide: !0,
                    interval: 3e3,
                    pause: !1,
                  },
                  a.a.createElement(
                    u.a.Item,
                    { className: 'fit-content' },
                    a.a.createElement('img', {
                      className: ' w-100',
                      src: '/images/p1.jpg',
                      alt: 'First slide',
                    }),
                    a.a.createElement(
                      u.a.Caption,
                      {
                        className:
                          'justify-content-start first-carousel-caption',
                      },
                      a.a.createElement('h3', null, 'First slide label'),
                      a.a.createElement(
                        'p',
                        null,
                        'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                      ),
                      a.a.createElement(
                        y.a,
                        {
                          className: 'carousel-buttons',
                          as: m.Link,
                          to: '/search',
                        },
                        'Shop'
                      )
                    )
                  ),
                  a.a.createElement(
                    u.a.Item,
                    { className: 'fit-content' },
                    a.a.createElement('img', {
                      className: ' w-100',
                      src: '/images/p1.jpg',
                      alt: 'Second slide',
                    }),
                    a.a.createElement(
                      u.a.Caption,
                      null,
                      a.a.createElement('h3', null, 'Second slide label'),
                      a.a.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      )
                    )
                  ),
                  a.a.createElement(
                    u.a.Item,
                    { className: 'fit-content' },
                    a.a.createElement(
                      'div',
                      { className: 'slide' },
                      a.a.createElement('img', {
                        className: ' w-100',
                        src: '/images/p1.jpg',
                        alt: 'Third slide',
                      })
                    ),
                    a.a.createElement(
                      u.a.Caption,
                      {
                        className: 'justify-content-end third-carousel-caption',
                      },
                      a.a.createElement('h3', null, 'Third slide label'),
                      a.a.createElement(
                        'p',
                        null,
                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                      ),
                      a.a.createElement(
                        y.a,
                        {
                          as: m.Link,
                          to: '/search',
                          className: 'carousel-buttons',
                        },
                        'Shop'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function ue() {
        var e = Object(n.useState)(se()),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = t[1];
        return (
          Object(n.useEffect)(function () {
            function e() {
              o(se());
            }
            return (
              window.addEventListener('resize', e),
              function () {
                window.removeEventListener('resize', e);
              }
            );
          }, []),
          a.a.createElement(
            a.a.Fragment,
            null,
            r.innerWidth,
            a.a.createElement(le, null),
            r.innerWidth > 900
              ? a.a.createElement(ee, { id: 'categories_carousel' })
              : r.innerWidth > 480
              ? a.a.createElement(ne, null)
              : a.a.createElement(ie, null)
          )
        );
      }
      function se() {
        var e = window;
        return { innerWidth: e.innerWidth, innerHeight: e.innerHeight };
      }
      r(497);
      var fe = r(31),
        he = r(10),
        pe = r(150);
      function de(e) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'formErrors' },
            Object.keys(e.formErrors).map(function (t, r) {
              return e.formErrors[t].length > 0
                ? a.a.createElement(
                    M.a,
                    { variant: 'danger' },
                    a.a.createElement('p', null, e.formErrors[t])
                  )
                : '';
            })
          )
        );
      }
      function me() {
        me = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var ve = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { product: t.payload, loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function ye() {
        var e = Object(n.useState)(''),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = t[1],
          i = Object(n.useState)({ value: 'One Size', label: 'One Size' }),
          u = Object(l.a)(i, 2),
          s = u[0],
          f = u[1],
          h = Object(G.w)(),
          p = Object(G.A)().slug,
          d = Object(n.useReducer)(Object(I.a)(ve), {
            product: [],
            loading: !0,
            error: { error: '' },
          }),
          m = Object(l.a)(d, 2),
          v = m[0],
          g = v.loading,
          x = v.error,
          O = v.product,
          j = m[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                me().mark(function e() {
                  var t;
                  return me().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              j({ type: 'FETCH_REQUEST' }),
                              (e.prev = 1),
                              (e.next = 4),
                              N.a.get('/api/products/slug/'.concat(p))
                            );
                          case 4:
                            (t = e.sent),
                              j({ type: 'FETCH_SUCCESS', payload: t.data }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              j({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [p]
        );
        var _ = Object(n.useContext)(L),
          S = _.state,
          T = _.dispatch,
          C = S.cart,
          U = (function () {
            var e = Object(c.a)(
              me().mark(function e() {
                var t, r, n;
                return me().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 !== O.sizes.length && 'One Size' === s.value) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (O.sizes = []),
                          (t = C.cartItems.find(function (e) {
                            return e._id === O._id;
                          })),
                          (r = t ? t.quantity + 1 : 1),
                          (O.sizes = [].concat(
                            t ? Object(w.a)(t.sizes) : Object(w.a)(O.sizes),
                            [s]
                          )),
                          (e.next = 7),
                          N.a.get('/api/products/'.concat(O._id))
                        );
                      case 7:
                        if (((n = e.sent), !(n.data.countInStock < r))) {
                          e.next = 12;
                          break;
                        }
                        return (
                          window.alert('Sorry. Product is out of stock'),
                          e.abrupt('return')
                        );
                      case 12:
                        T({
                          type: 'CART_ADD_ITEM',
                          payload: Object(b.a)({}, O, { quantity: r }),
                        }),
                          h('/cart'),
                          (e.next = 17);
                        break;
                      case 16:
                        j({
                          type: 'FETCH_FAIL',
                          payload: {
                            error: 'Please chose one of the available sizes',
                          },
                        });
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          g
            ? a.a.createElement(z, null)
            : a.a.createElement(
                'div',
                { className: 'mt-3' },
                a.a.createElement(
                  'div',
                  { className: 'panel panel-default' },
                  a.a.createElement(de, { formErrors: x })
                ),
                a.a.createElement(
                  P.a,
                  null,
                  a.a.createElement(
                    F.a,
                    { md: 6 },
                    a.a.createElement('img', {
                      className: 'img-large',
                      src: r || O.image,
                      alt: O.name,
                    })
                  ),
                  a.a.createElement(
                    F.a,
                    { md: 3 },
                    a.a.createElement(
                      fe.a,
                      { variant: 'flush' },
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          he.a,
                          null,
                          a.a.createElement('title', null, O.name)
                        ),
                        a.a.createElement('h1', null, O.name)
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        'Price : \u20ac',
                        O.price
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          P.a,
                          { xs: 1, md: 2, className: 'g-2' },
                          [O.image]
                            .concat(Object(w.a)(O.images))
                            .map(function (e) {
                              return a.a.createElement(
                                F.a,
                                { key: e },
                                a.a.createElement(
                                  A.a,
                                  null,
                                  a.a.createElement(
                                    y.a,
                                    {
                                      className: 'thumbnail',
                                      type: 'button',
                                      variant: 'light',
                                      onClick: function () {
                                        return o(e);
                                      },
                                    },
                                    a.a.createElement(A.a.Img, {
                                      variatn: 'top',
                                      src: e,
                                      alt: 'product',
                                    })
                                  )
                                )
                              );
                            })
                        )
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        'Select Size:',
                        0 == O.sizes.length
                          ? a.a.createElement(pe.a, {
                              defaultValue: {
                                value: 'One Size',
                                label: 'One Size',
                              },
                              options: { value: 'One Size', label: 'One Size' },
                              isDisabled: !0,
                            })
                          : a.a.createElement(pe.a, {
                              onChange: function (e) {
                                return f(e);
                              },
                              options: O.sizes,
                            })
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        'Description:',
                        a.a.createElement('p', null, O.description)
                      )
                    )
                  ),
                  a.a.createElement(
                    F.a,
                    { md: 3 },
                    a.a.createElement(
                      A.a,
                      null,
                      a.a.createElement(
                        A.a.Body,
                        null,
                        a.a.createElement(
                          fe.a,
                          { variant: 'flush' },
                          a.a.createElement(
                            fe.a.Item,
                            null,
                            a.a.createElement(
                              P.a,
                              null,
                              a.a.createElement(F.a, null, 'Price:'),
                              a.a.createElement(F.a, null, ' \u20ac', O.price)
                            )
                          ),
                          a.a.createElement(
                            fe.a.Item,
                            null,
                            a.a.createElement(
                              P.a,
                              null,
                              a.a.createElement(F.a, null, 'Status:'),
                              a.a.createElement(
                                F.a,
                                null,
                                O.countInStock > 0
                                  ? a.a.createElement(
                                      E.a,
                                      { bg: 'success' },
                                      'In Stock'
                                    )
                                  : a.a.createElement(
                                      E.a,
                                      { bg: 'danger' },
                                      'Unavailable'
                                    )
                              )
                            )
                          ),
                          O.countInStock > 0 &&
                            a.a.createElement(
                              fe.a.Item,
                              null,
                              a.a.createElement(
                                'div',
                                { className: 'd-grid' },
                                a.a.createElement(
                                  y.a,
                                  { onClick: U, variant: 'primary' },
                                  'Add to Cart'
                                )
                              )
                            )
                        )
                      )
                    )
                  )
                )
              )
        );
      }
      var ge = r(27);
      function Ee(e) {
        return a.a.createElement(
          P.a,
          { className: 'checkout-steps' },
          a.a.createElement(
            F.a,
            { className: e.step1 ? 'active' : '' },
            'Sign-in'
          ),
          a.a.createElement(
            F.a,
            { className: e.step2 ? 'active' : '' },
            'Shipping'
          ),
          a.a.createElement(
            F.a,
            { className: e.step3 ? 'active' : '' },
            'Payment'
          ),
          a.a.createElement(
            F.a,
            { className: e.step4 ? 'active' : '' },
            'Place Order'
          )
        );
      }
      var be = r(313),
        we = r(314),
        Le = r.n(we),
        xe = r(225);
      function Oe() {
        Oe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function je(e) {
        var t = Object(G.w)(),
          r = Object(G.u)().search,
          o = new URLSearchParams(r).get('redirect'),
          i = o || '/',
          u = Object(n.useState)(''),
          s = Object(l.a)(u, 2),
          f = s[0],
          h = s[1],
          d = Object(n.useState)(''),
          v = Object(l.a)(d, 2),
          g = v[0],
          E = v[1],
          b = Object(n.useContext)(L),
          w = b.state,
          x = b.dispatch,
          O = w.userInfo,
          j = (function () {
            var e = Object(c.a)(
              Oe().mark(function e(r) {
                var n, a;
                return Oe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            N.a.post('/api/users/signin', {
                              email: f,
                              password: g,
                            })
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            x({ type: 'USER_SIGNIN', payload: a }),
                            localStorage.setItem('userInfo', JSON.stringify(a)),
                            t(i || '/'),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(1)),
                            _.b.error(k(e.t0));
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        Object(n.useEffect)(
          function () {
            O && t(i),
              xe.a.load('client:auth2', function () {
                xe.a.client.init({
                  clientId:
                    '1032179057074-uob22fqalf8labch6q1na2mkubp08j9d.apps.googleusercontent.com',
                  scope: 'email',
                  cookiePolicy: 'single_host_origin',
                  prompt: 'select_account',
                });
              });
          },
          [t, i, O]
        );
        var S = (function () {
            var e = Object(c.a)(
              Oe().mark(function e(r) {
                var n, a, o, c, l, u, s, f, h, p;
                return Oe().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = r.profileObj.name),
                          (a = r.profileObj.email),
                          (o = ''),
                          (c = ''),
                          (e.next = 6),
                          N.a.post('/api/users/checkuser', {
                            email: a,
                            password: o,
                          })
                        );
                      case 6:
                        if (((l = e.sent), l.data.check)) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.next = 11),
                          N.a.post('/api/users/signup', {
                            name: n,
                            email: a,
                            password: o,
                          })
                        );
                      case 11:
                        (u = e.sent), (s = u.data), (c = s._id), (e.next = 21);
                        break;
                      case 16:
                        return (
                          (e.next = 18),
                          N.a.post('/api/users/signin', {
                            email: a,
                            password: o,
                          })
                        );
                      case 18:
                        (f = e.sent), (h = f.data), (c = h._id);
                      case 21:
                        console.log('allreadylogin'),
                          (p = {
                            _id: c,
                            name: r.profileObj.name,
                            email: r.profileObj.email,
                            isAdmin: !1,
                            token: T(r),
                          }),
                          x({ type: 'USER_SIGNIN', payload: p }),
                          localStorage.setItem('userInfo', JSON.stringify(p)),
                          t(i || '/');
                      case 26:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          C = (function () {
            var e = Object(c.a)(
              Oe().mark(function e(r) {
                var n, a, o, c, l, u, s, f, h, p;
                return Oe().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = r.name),
                          (a = r.email),
                          (o = ''),
                          (c = ''),
                          (e.next = 6),
                          N.a.post('/api/users/checkuser', {
                            email: a,
                            password: o,
                          })
                        );
                      case 6:
                        if (((l = e.sent), l.data.check)) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.next = 11),
                          N.a.post('/api/users/signup', {
                            name: n,
                            email: a,
                            password: o,
                          })
                        );
                      case 11:
                        (u = e.sent), (s = u.data), (c = s._id), (e.next = 21);
                        break;
                      case 16:
                        return (
                          (e.next = 18),
                          N.a.post('/api/users/signin', {
                            email: a,
                            password: o,
                          })
                        );
                      case 18:
                        (f = e.sent), (h = f.data), (c = h._id);
                      case 21:
                        console.log('allreadylogin'),
                          (p = {
                            _id: c,
                            name: r.name,
                            email: r.email,
                            isAdmin: !1,
                            token: T(r),
                          }),
                          x({ type: 'USER_SIGNIN', payload: p }),
                          localStorage.setItem('userInfo', JSON.stringify(p)),
                          t(i || '/');
                      case 26:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            p.a,
            null,
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Sign In')
            ),
            a.a.createElement(Ee, { step1: !0 }),
            a.a.createElement('h1', { className: 'my-3' }, 'Sign In'),
            a.a.createElement(
              ge.a,
              { onSubmit: j },
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'email' },
                a.a.createElement(ge.a.Label, null, 'Email'),
                a.a.createElement(ge.a.Control, {
                  type: 'email',
                  required: !0,
                  onChange: function (e) {
                    return h(e.target.value);
                  },
                })
              ),
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'password' },
                a.a.createElement(ge.a.Label, null, 'Password'),
                a.a.createElement(ge.a.Control, {
                  type: 'password',
                  required: !0,
                  onChange: function (e) {
                    return E(e.target.value);
                  },
                })
              ),
              a.a.createElement(
                'div',
                { className: 'mb-3' },
                a.a.createElement(y.a, { type: 'submit' }, 'Sign In')
              ),
              a.a.createElement(
                'div',
                { className: 'mb=3' },
                'New customer?',
                '',
                a.a.createElement(
                  m.Link,
                  { to: '/signup?redirect='.concat(i) },
                  'Create your account'
                )
              )
            ),
            a.a.createElement(
              'h6',
              { style: { textAlign: 'center' } },
              'Sign in by Facebook or Google'
            ),
            a.a.createElement('br', null),
            a.a.createElement(
              'div',
              { class: 'container-md', style: { textAlign: 'center' } },
              a.a.createElement(
                'div',
                { class: 'row' },
                a.a.createElement(
                  'div',
                  { class: 'col-6' },
                  a.a.createElement(be.GoogleLogin, {
                    clientId:
                      '1032179057074-uob22fqalf8labch6q1na2mkubp08j9d.apps.googleusercontent.com',
                    buttonText: 'Google',
                    onSuccess: S,
                    onFailure: function (e) {
                      console.log(e);
                    },
                    cookiePolicy: 'single_host_origin',
                    prompt: 'select_account',
                    className: 'loginBtn loginBtn--google same-as-fb',
                    plugin_name: 'chat',
                  })
                ),
                a.a.createElement(
                  'div',
                  { class: 'col-6' },
                  a.a.createElement(Le.a, {
                    appId: '1136058267289635',
                    textButton: 'Facebook',
                    autoLoad: !1,
                    fields: 'name,email,picture',
                    callback: C,
                    cssClass: 'loginBtn loginBtn--facebook',
                  })
                )
              )
            ),
            a.a.createElement('br', null)
          )
        );
      }
      function _e() {
        _e = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Se() {
        var e = Object(n.useState)(!1),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = (t[1], Object(G.w)()),
          i = Object(n.useContext)(L),
          u = i.state,
          s = i.dispatch,
          f = u.cart.cartItems,
          h = (function () {
            var e = Object(c.a)(
              _e().mark(function e(t, r) {
                var n;
                return _e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), N.a.get('/api/products/'.concat(t._id))
                        );
                      case 2:
                        if (((n = e.sent), !(n.data.countInStock < r))) {
                          e.next = 7;
                          break;
                        }
                        return (
                          window.alert('Sorry. Product is out of stock'),
                          e.abrupt('return')
                        );
                      case 7:
                        s({
                          type: 'CART_ADD_ITEM',
                          payload: Object(b.a)({}, t, { quantity: r }),
                        });
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, r) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'Shopping Cart')
          ),
          a.a.createElement('h1', null, 'Shopping Cart'),
          a.a.createElement(
            P.a,
            null,
            a.a.createElement(
              F.a,
              { md: 8 },
              0 === f.length
                ? a.a.createElement(
                    V,
                    null,
                    'Cart is Empty. ',
                    a.a.createElement(m.Link, { to: '/shop' }, 'Go Shopping')
                  )
                : a.a.createElement(
                    fe.a,
                    null,
                    f.map(function (e) {
                      return a.a.createElement(
                        fe.a.Item,
                        { key: e._id },
                        a.a.createElement(
                          P.a,
                          { className: 'align-items-center' },
                          a.a.createElement(
                            F.a,
                            { md: 7 },
                            a.a.createElement('img', {
                              src: e.image,
                              alt: e.image,
                              className: 'img-fluid rounded img-thumbnail',
                            }),
                            ' ',
                            a.a.createElement(
                              m.Link,
                              { to: 'product/'.concat(e.slug) },
                              e.name
                            )
                          ),
                          a.a.createElement(
                            F.a,
                            {
                              md: 2,
                              className: 'd-flex  justify-content-center',
                            },
                            a.a.createElement(
                              y.a,
                              {
                                variant: 'light',
                                disabled: 1 === e.quantity,
                                onClick: function () {
                                  return h(e, e.quantity - 1);
                                },
                              },
                              a.a.createElement(v.f, null)
                            ),
                            ' ',
                            a.a.createElement('span', null, e.quantity),
                            ' ',
                            a.a.createElement(
                              y.a,
                              {
                                variant: 'light',
                                disabled: e.quantity === e.countInStock,
                                onClick: function () {
                                  return h(e, e.quantity + 1);
                                },
                              },
                              a.a.createElement(v.g, null)
                            ),
                            ' '
                          ),
                          a.a.createElement(
                            F.a,
                            {
                              md: 1,
                              className: 'd-flex  justify-content-center',
                            },
                            '(' +
                              e.sizes.map(function (e) {
                                return e.value + ' ';
                              }) +
                              ')'
                          ),
                          a.a.createElement(
                            F.a,
                            {
                              md: 1,
                              className: 'd-flex  justify-content-center',
                            },
                            '$',
                            e.price
                          ),
                          a.a.createElement(
                            F.a,
                            {
                              md: 1,
                              className: 'd-flex  justify-content-center',
                            },
                            a.a.createElement(
                              y.a,
                              {
                                variant: 'light',
                                onClick: function () {
                                  return (function (e) {
                                    console.log(e),
                                      s({
                                        type: 'CART_REMOVE_ITEM',
                                        payload: e,
                                      });
                                  })(e);
                                },
                              },
                              a.a.createElement(v.i, null)
                            )
                          )
                        )
                      );
                    })
                  )
            ),
            a.a.createElement(
              F.a,
              { md: 4 },
              a.a.createElement(
                A.a,
                null,
                a.a.createElement(
                  A.a.Body,
                  null,
                  a.a.createElement(
                    fe.a,
                    { variant: 'flush' },
                    a.a.createElement(
                      fe.a.Item,
                      null,
                      a.a.createElement(
                        'h3',
                        null,
                        'Subtotal (',
                        f.reduce(function (e, t) {
                          return e + t.quantity;
                        }, 0),
                        ' ',
                        'items) : \u20ac',
                        f.reduce(function (e, t) {
                          return e + t.price * t.quantity;
                        }, 0)
                      )
                    ),
                    a.a.createElement(
                      fe.a.Item,
                      null,
                      a.a.createElement(
                        'div',
                        { className: 'd-grid' },
                        a.a.createElement(
                          y.a,
                          {
                            type: 'button',
                            variant: 'primary',
                            onClick: function () {
                              o('/signin?redirect=/shipping');
                            },
                            disabled: 0 === f.length,
                          },
                          'Proceed to Ckeckout'
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          r && a.a.createElement(je, null)
        );
      }
      r(523);
      function ke() {
        var e = Object(G.w)(),
          t = Object(n.useContext)(L),
          r = t.state,
          o = t.dispatch,
          i = r.userInfo,
          c = r.cart.shippingAddress,
          u = Object(n.useState)(c.fullName || ''),
          s = Object(l.a)(u, 2),
          f = s[0],
          h = s[1],
          p = Object(n.useState)(c.address || ''),
          d = Object(l.a)(p, 2),
          m = d[0],
          v = d[1],
          g = Object(n.useState)(c.city || ''),
          E = Object(l.a)(g, 2),
          b = E[0],
          w = E[1],
          x = Object(n.useState)(c.postalCode || ''),
          O = Object(l.a)(x, 2),
          j = O[0],
          _ = O[1];
        Object(n.useEffect)(
          function () {
            i || e('/signin');
          },
          [i, e]
        );
        var S = Object(n.useState)(c.country || ''),
          k = Object(l.a)(S, 2),
          T = k[0],
          C = k[1];
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'Shipping Adress')
          ),
          a.a.createElement(Ee, { step1: !0, step2: !0 }),
          a.a.createElement(
            'div',
            { className: 'container small-container' },
            a.a.createElement('h1', { className: 'my-3' }, 'Shipping Adress'),
            a.a.createElement(
              ge.a,
              {
                onSubmit: function (t) {
                  t.preventDefault(),
                    o({
                      type: 'SAVE_SHIPPING_ADDRESS',
                      payload: {
                        fullName: f,
                        address: m,
                        city: b,
                        postalCode: j,
                        country: T,
                      },
                    }),
                    localStorage.setItem(
                      'shippingAddress',
                      JSON.stringify({
                        fullName: f,
                        address: m,
                        city: b,
                        postalCode: j,
                        country: T,
                      })
                    ),
                    e('/payment');
                },
              },
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'fullName' },
                a.a.createElement(ge.a.Label, null, 'Full Name'),
                a.a.createElement(ge.a.Control, {
                  value: f,
                  onChange: function (e) {
                    return h(e.target.value);
                  },
                  required: !0,
                })
              ),
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'address' },
                a.a.createElement(ge.a.Label, null, 'Address'),
                a.a.createElement(ge.a.Control, {
                  value: m,
                  onChange: function (e) {
                    return v(e.target.value);
                  },
                  required: !0,
                })
              ),
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'city' },
                a.a.createElement(ge.a.Label, null, 'City'),
                a.a.createElement(ge.a.Control, {
                  value: b,
                  onChange: function (e) {
                    return w(e.target.value);
                  },
                  required: !0,
                })
              ),
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'postalCode' },
                a.a.createElement(ge.a.Label, null, 'Postal Code'),
                a.a.createElement(ge.a.Control, {
                  value: j,
                  onChange: function (e) {
                    return _(e.target.value);
                  },
                  required: !0,
                })
              ),
              a.a.createElement(
                ge.a.Group,
                { className: 'mb-3', controlId: 'country' },
                a.a.createElement(ge.a.Label, null, 'Country'),
                a.a.createElement(ge.a.Control, {
                  value: T,
                  onChange: function (e) {
                    return C(e.target.value);
                  },
                  required: !0,
                })
              ),
              a.a.createElement(
                'div',
                { className: 'mb-3' },
                a.a.createElement(
                  y.a,
                  { variant: 'primary', type: 'submit' },
                  'Continue'
                )
              )
            )
          )
        );
      }
      function Te() {
        Te = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Ce(e) {
        var t = Object(G.w)(),
          r = Object(G.u)().search,
          o = new URLSearchParams(r).get('redirect'),
          i = o || '/',
          u = Object(n.useState)(''),
          s = Object(l.a)(u, 2),
          f = s[0],
          h = s[1],
          d = Object(n.useState)(''),
          v = Object(l.a)(d, 2),
          g = v[0],
          E = v[1],
          b = Object(n.useState)(''),
          w = Object(l.a)(b, 2),
          x = w[0],
          O = w[1],
          j = Object(n.useState)(''),
          S = Object(l.a)(j, 2),
          T = S[0],
          C = S[1],
          I = Object(n.useContext)(L),
          P = I.state,
          F = I.dispatch,
          A = P.userInfo,
          U = (function () {
            var e = Object(c.a)(
              Te().mark(function e(r) {
                var n, a;
                return Te().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((r.preventDefault(), x === T)) {
                            e.next = 4;
                            break;
                          }
                          return (
                            _.b.error('Password do not match'),
                            e.abrupt('return')
                          );
                        case 4:
                          return (
                            (e.prev = 4),
                            (e.next = 7),
                            N.a.post('/api/users/signup', {
                              name: f,
                              email: g,
                              password: x,
                            })
                          );
                        case 7:
                          (n = e.sent),
                            (a = n.data),
                            F({ type: 'USER_SIGNIN', payload: a }),
                            localStorage.setItem('userInfo', JSON.stringify(a)),
                            t(i || '/'),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(4)),
                            _.b.error(k(e.t0));
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 14]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(n.useEffect)(
            function () {
              A && t(i);
            },
            [t, i, A]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p.a,
              null,
              a.a.createElement(
                he.a,
                null,
                a.a.createElement('title', null, 'Sign Up')
              ),
              a.a.createElement('h1', { className: 'my-3' }, 'Sign Up'),
              a.a.createElement(
                ge.a,
                { onSubmit: U },
                a.a.createElement(
                  ge.a.Group,
                  { className: 'mb-3', controlId: 'name' },
                  a.a.createElement(ge.a.Label, null, 'Name'),
                  a.a.createElement(ge.a.Control, {
                    required: !0,
                    onChange: function (e) {
                      return h(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  ge.a.Group,
                  { className: 'mb-3', controlId: 'email' },
                  a.a.createElement(ge.a.Label, null, 'Email'),
                  a.a.createElement(ge.a.Control, {
                    type: 'email',
                    required: !0,
                    onChange: function (e) {
                      return E(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  ge.a.Group,
                  { className: 'mb-3', controlId: 'password' },
                  a.a.createElement(ge.a.Label, null, 'Password'),
                  a.a.createElement(ge.a.Control, {
                    type: 'password',
                    required: !0,
                    onChange: function (e) {
                      return O(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  ge.a.Group,
                  { className: 'mb-3', controlId: 'confirmPassword' },
                  a.a.createElement(ge.a.Label, null, 'Confirm Password'),
                  a.a.createElement(ge.a.Control, {
                    type: 'password',
                    required: !0,
                    onChange: function (e) {
                      return C(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: 'mb-3' },
                  a.a.createElement(y.a, { type: 'submit' }, 'Sign Up')
                ),
                a.a.createElement(
                  'div',
                  { className: 'mb=3' },
                  'Already have an account?',
                  '',
                  a.a.createElement(
                    m.Link,
                    { to: '/signin?redirect='.concat(i) },
                    'Sign-In'
                  )
                )
              )
            )
          )
        );
      }
      function Ne() {
        var e = Object(G.w)(),
          t = Object(n.useContext)(L),
          r = t.state,
          o = t.dispatch,
          i = r.cart,
          c = i.shippingAddress,
          u = i.paymentMethod,
          s = Object(n.useState)(u || ''),
          f = Object(l.a)(s, 2),
          h = f[0],
          p = f[1];
        Object(n.useEffect)(
          function () {
            c.address || e('/shipping');
          },
          [c, e]
        );
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(Ee, { step1: !0, step2: !0, step3: !0 }),
          a.a.createElement(
            'div',
            { className: 'container small-container' },
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Payment Method')
            ),
            a.a.createElement('h1', { className: 'my-3' }, 'Payment Method'),
            a.a.createElement(
              ge.a,
              {
                onSubmit: function (t) {
                  t.preventDefault(),
                    o({ type: 'SAVE_PAYMENT_METHOD', payload: h }),
                    localStorage.setItem('paymentMethod', h),
                    e('/placeorder');
                },
              },
              a.a.createElement(
                'div',
                { className: 'mb-3' },
                a.a.createElement(ge.a.Check, {
                  type: 'radio',
                  id: 'PayPal',
                  label: 'PayPal',
                  value: 'PayPal',
                  checked: 'PayPal' === h,
                  onChange: function (e) {
                    return p(e.target.value);
                  },
                }),
                a.a.createElement(
                  'div',
                  { className: 'mb-3' },
                  a.a.createElement(ge.a.Check, {
                    type: 'radio',
                    id: 'Stripe',
                    label: 'Stripe',
                    value: 'Stripe',
                    checked: 'Stripe' === h,
                    onChange: function (e) {
                      return p(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: 'mb-3' },
                  a.a.createElement(y.a, { type: 'submit' }, 'Continue')
                )
              )
            )
          )
        );
      }
      function Ie() {
        Ie = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Pe = function (e, t) {
        switch (t.type) {
          case 'CREATE_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'CREATE_SUCCESS':
          case 'CREATE_FAIL':
            return Object(b.a)({}, e, { loading: !1 });
          default:
            return e;
        }
      };
      function Fe() {
        var e = Object(G.w)(),
          t = Object(n.useReducer)(Pe, { loading: !1 }),
          r = Object(l.a)(t, 2),
          o = r[0].loading,
          i = r[1],
          u = Object(n.useContext)(L),
          s = u.state,
          f = u.dispatch,
          h = s.cart,
          p = s.userInfo,
          d = function (e) {
            return Math.round(100 * e + Number.EPSILON) / 100;
          };
        (h.itemsPrice = d(
          h.cartItems.reduce(function (e, t) {
            return e + t.quantity * t.price;
          }, 0)
        )),
          (h.shippingPrice = (h.itemsPrice, d(0))),
          (h.taxPrice = 0),
          (h.totalPrice = h.itemsPrice + h.shippingPrice + h.taxPrice);
        var v = (function () {
          var t = Object(c.a)(
            Ie().mark(function t() {
              var r, n;
              return Ie().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          i({ type: 'CREATE_REQUEST' }),
                          (t.next = 4),
                          N.a.post(
                            '/api/orders',
                            {
                              orderItems: h.cartItems,
                              shippingAddress: h.shippingAddress,
                              paymentMethod: h.paymentMethod,
                              itemsPrice: h.itemsPrice,
                              shippingPrice: h.shippingPrice,
                              taxPrice: h.taxPrice,
                              totalPrice: h.totalPrice,
                              user: p,
                            },
                            {
                              headers: {
                                authorization: 'Bearer '.concat(p.token),
                              },
                            }
                          )
                        );
                      case 4:
                        (r = t.sent),
                          (n = r.data),
                          f({ type: 'CART_CLEAR' }),
                          i({ type: 'CREATE_SUCCESS' }),
                          localStorage.removeItem('cartItems'),
                          e('/order/'.concat(n.order._id)),
                          (t.next = 16);
                        break;
                      case 12:
                        (t.prev = 12),
                          (t.t0 = t.catch(0)),
                          i({ type: 'CREATE_FAIL' }),
                          _.b.error(k(t.t0));
                      case 16:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
        return (
          Object(n.useEffect)(
            function () {
              h.paymentMethod || e('/payment');
            },
            [h, e]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(Ee, {
              step1: !0,
              step2: !0,
              step3: !0,
              step4: !0,
            }),
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Preview Order')
            ),
            a.a.createElement('h1', { className: 'my-3' }, 'Preview Order'),
            a.a.createElement(
              P.a,
              null,
              a.a.createElement(
                F.a,
                { md: 8 },
                a.a.createElement(
                  A.a,
                  { className: 'mb-3' },
                  a.a.createElement(
                    A.a.Body,
                    null,
                    a.a.createElement(A.a.Title, null, 'Shipping'),
                    a.a.createElement(
                      A.a.Text,
                      null,
                      a.a.createElement('strong', null, 'Name:'),
                      ' ',
                      h.shippingAddress.fullName,
                      ' ',
                      a.a.createElement('br', null),
                      a.a.createElement('strong', null, 'Address: '),
                      ' ',
                      h.shippingAddress.address,
                      ',',
                      h.shippingAddress.city,
                      ', ',
                      h.shippingAddress.postalCode,
                      ',',
                      h.shippingAddress.country
                    ),
                    a.a.createElement(m.Link, { to: '/shipping' }, 'Edit')
                  )
                ),
                a.a.createElement(
                  A.a,
                  { className: 'mb-3' },
                  a.a.createElement(
                    A.a.Body,
                    null,
                    a.a.createElement(A.a.Title, null, 'Payment'),
                    a.a.createElement(
                      A.a.Text,
                      null,
                      a.a.createElement('strong', null, 'Method:'),
                      ' ',
                      h.paymentMethod
                    ),
                    a.a.createElement(m.Link, { to: '/payment' }, 'Edit')
                  )
                ),
                a.a.createElement(
                  A.a,
                  { className: 'mb-3' },
                  a.a.createElement(
                    A.a.Body,
                    null,
                    a.a.createElement(A.a.Title, null, 'Items'),
                    a.a.createElement(
                      fe.a,
                      { variant: 'flush' },
                      h.cartItems.map(function (e) {
                        return a.a.createElement(
                          fe.a.Item,
                          { key: e._id },
                          a.a.createElement(
                            P.a,
                            { className: 'align-items-center' },
                            a.a.createElement(
                              F.a,
                              { md: 6 },
                              a.a.createElement('img', {
                                src: e.image,
                                alt: e.name,
                                className: 'img-fluid rounded img-thumbnail',
                              }),
                              ' ',
                              a.a.createElement(
                                m.Link,
                                { to: '/product/'.concat(e.slug) },
                                e.name
                              )
                            ),
                            a.a.createElement(
                              F.a,
                              { md: 3 },
                              a.a.createElement('span', null, e.quantity)
                            ),
                            a.a.createElement(F.a, { md: 3 }, '$', e.price)
                          )
                        );
                      })
                    ),
                    a.a.createElement(m.Link, { to: '/cart' }, 'Edit')
                  )
                )
              ),
              a.a.createElement(
                F.a,
                { md: 4 },
                a.a.createElement(
                  A.a,
                  null,
                  a.a.createElement(
                    A.a.Body,
                    null,
                    a.a.createElement(A.a.Title, null, 'Order Summary'),
                    a.a.createElement(
                      fe.a,
                      { variant: 'flush' },
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          P.a,
                          null,
                          a.a.createElement(F.a, null, 'Items'),
                          a.a.createElement(
                            F.a,
                            null,
                            '$',
                            h.itemsPrice.toFixed(2)
                          )
                        )
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          P.a,
                          null,
                          a.a.createElement(F.a, null, 'Shipping'),
                          a.a.createElement(
                            F.a,
                            null,
                            '$',
                            h.shippingPrice.toFixed(2)
                          )
                        )
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          P.a,
                          null,
                          a.a.createElement(F.a, null, 'Tax'),
                          a.a.createElement(
                            F.a,
                            null,
                            '$',
                            h.taxPrice.toFixed(2)
                          )
                        )
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          P.a,
                          null,
                          a.a.createElement(
                            F.a,
                            null,
                            a.a.createElement('strong', null, ' Order Total')
                          ),
                          a.a.createElement(
                            F.a,
                            null,
                            a.a.createElement(
                              'strong',
                              null,
                              '$',
                              h.totalPrice.toFixed(2)
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        fe.a.Item,
                        null,
                        a.a.createElement(
                          'div',
                          { className: 'd-grid' },
                          a.a.createElement(
                            y.a,
                            {
                              type: 'button',
                              onClick: v,
                              disabled: 0 === h.cartItems.length,
                            },
                            'Place Order'
                          )
                        ),
                        o && a.a.createElement(z, null)
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      var Ae = r(149);
      function Ge() {
        Ge = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Ue(e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0, error: '' });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, {
              loading: !1,
              order: t.payload,
              error: '',
            });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'PAY_REQUEST':
            return Object(b.a)({}, e, { loadingPay: !0 });
          case 'PAY_SUCCESS':
            return Object(b.a)({}, e, { loadingPay: !1, successPay: !0 });
          case 'PAY_FAIL':
            return Object(b.a)({}, e, { loadingPay: !1, errorPay: t.payload });
          case 'PAY_RESET':
            return Object(b.a)({}, e, { loadingPay: !1, successPay: !1 });
          case 'DELIVER_REQUEST':
            return Object(b.a)({}, e, { loadingDeliver: !0 });
          case 'DELIVER_SUCCESS':
            return Object(b.a)({}, e, {
              loadingDeliver: !1,
              successDeliver: !1,
            });
          case 'DELIVER_FAIL':
            return Object(b.a)({}, e, { loadingDeliver: !1 });
          case 'DELIVER_RESET':
            return Object(b.a)({}, e, {
              loadingDeliver: !1,
              successDeliver: !1,
            });
          default:
            return e;
        }
      }
      function De() {
        var e = Object(G.w)(),
          t = Object(G.A)().id,
          r = Object(n.useContext)(L).state.userInfo,
          o = Object(n.useReducer)(Ue, {
            loading: !0,
            order: {},
            error: '',
            successPay: !1,
            loadingPay: !1,
          }),
          i = Object(l.a)(o, 2),
          u = i[0],
          s = u.loading,
          f = u.error,
          h = u.order,
          p = u.successPay,
          d = u.loadingPay,
          v = u.loadingDeliver,
          g = u.successDeliver,
          E = i[1],
          b = Object(Ae.c)(),
          w = Object(l.a)(b, 2),
          x = w[0].isPending,
          O = w[1];
        Object(n.useEffect)(
          function () {
            var n = (function () {
              var e = Object(c.a)(
                Ge().mark(function e() {
                  var n, a;
                  return Ge().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              E({ type: 'FETCH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/orders/'.concat(t), {
                                headers: {
                                  authorization: 'Bearer '.concat(r.token),
                                },
                              })
                            );
                          case 4:
                            (n = e.sent),
                              (a = n.data),
                              E({ type: 'FETCH_SUCCESS', payload: a }),
                              console.log(h),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              E({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            if (!r) return e('/login');
            !h._id || p || g || (h._id && h._id !== t)
              ? (n(),
                p && E({ type: 'PAY_RESET' }),
                g && E({ type: 'DELIVER_RESET' }))
              : (function () {
                  var e = Object(c.a)(
                    Ge().mark(function e() {
                      var t, n;
                      return Ge().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                N.a.get('/api/keys/paypal', {
                                  headers: {
                                    authorization: 'Bearer '.concat(r.token),
                                  },
                                })
                              );
                            case 2:
                              (t = e.sent),
                                (n = t.data),
                                O({
                                  type: 'resetOptions',
                                  value: { 'client-id': n, currency: 'EUR' },
                                }),
                                O({
                                  type: 'setLoadingStatus',
                                  value: 'pending',
                                });
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
          },
          [h, r, t, e, O, p, g]
        );
        var j = (function () {
          var e = Object(c.a)(
            Ge().mark(function e() {
              var t, n;
              return Ge().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          E({ type: 'DELIVER_REQUEST' }),
                          (e.next = 4),
                          N.a.put(
                            '/api/orders/'.concat(h._id, '/deliver'),
                            {},
                            {
                              headers: {
                                authorization: 'Bearer '.concat(r.token),
                              },
                            }
                          )
                        );
                      case 4:
                        (t = e.sent),
                          (n = t.data),
                          E({ type: 'DELIVER_SUCCESS', payload: n }),
                          _.b.success('Order is delivered'),
                          (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          _.b.error(k(e.t0)),
                          E({ type: 'DELIVER_FAIL' });
                      case 14:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return s
          ? a.a.createElement(z, null)
          : f
          ? a.a.createElement(V, { variant: 'danger' }, f)
          : a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  he.a,
                  null,
                  a.a.createElement('title', null, 'Order ', t)
                ),
                a.a.createElement('h1', { className: 'my-3' }, 'Order ', t)
              ),
              a.a.createElement(
                P.a,
                null,
                a.a.createElement(
                  F.a,
                  { md: 8 },
                  a.a.createElement(
                    A.a,
                    { className: 'mb-3' },
                    a.a.createElement(
                      A.a.Body,
                      null,
                      a.a.createElement(A.a.Title, null, 'Shipping'),
                      a.a.createElement(
                        A.a.Text,
                        null,
                        a.a.createElement('strong', null, 'Name:'),
                        h.shippingAddress.fullName,
                        a.a.createElement('br', null),
                        a.a.createElement('strong', null, 'Address:'),
                        h.shippingAddress.address,
                        ',',
                        h.shippingAddress.city,
                        ',',
                        h.shippingAddress.postalCode,
                        ',',
                        h.shippingAddress.country
                      ),
                      h.isDelivered
                        ? a.a.createElement(
                            V,
                            { variant: 'success' },
                            'Delivered at ',
                            h.deliveredAt
                          )
                        : a.a.createElement(
                            V,
                            { variant: 'danger' },
                            'Not Delivered'
                          )
                    )
                  ),
                  a.a.createElement(
                    A.a,
                    { className: 'mb-3' },
                    a.a.createElement(
                      A.a.Body,
                      null,
                      a.a.createElement(A.a.Title, null, 'Payment'),
                      a.a.createElement(
                        A.a.Text,
                        null,
                        a.a.createElement('strong', null, 'Method:'),
                        h.paymentMethod
                      ),
                      h.isPaid
                        ? a.a.createElement(
                            V,
                            { variant: 'success' },
                            'Paid at ',
                            h.deliveredAt
                          )
                        : a.a.createElement(
                            V,
                            { variant: 'danger' },
                            'Not Paid'
                          )
                    )
                  ),
                  a.a.createElement(
                    A.a,
                    { className: 'mb-3' },
                    a.a.createElement(
                      A.a.Body,
                      null,
                      a.a.createElement(A.a.Title, null, 'Items'),
                      a.a.createElement(
                        fe.a,
                        { variant: 'flush' },
                        h.orderItems.map(function (e) {
                          return a.a.createElement(
                            fe.a.Item,
                            { key: e._id },
                            a.a.createElement(
                              P.a,
                              { className: 'align-items-center' },
                              a.a.createElement(
                                F.a,
                                { md: 6 },
                                a.a.createElement('img', {
                                  src: e.image,
                                  alt: e.image,
                                  className: 'img-fluid rounded img-thumbnail',
                                }),
                                ' ',
                                a.a.createElement(
                                  m.Link,
                                  { to: '/product/'.concat(e.slug) },
                                  e.name
                                )
                              ),
                              a.a.createElement(
                                F.a,
                                { md: 3 },
                                a.a.createElement('span', null, e.quantity)
                              ),
                              a.a.createElement(
                                F.a,
                                { md: 3 },
                                '\u20ac',
                                e.price
                              )
                            )
                          );
                        })
                      )
                    )
                  )
                ),
                a.a.createElement(
                  F.a,
                  { md: 4 },
                  a.a.createElement(
                    A.a,
                    { className: 'mb-3' },
                    a.a.createElement(
                      A.a.Body,
                      null,
                      a.a.createElement(A.a.Title, null, 'Order Summary'),
                      a.a.createElement(
                        fe.a,
                        { variant: 'flush' },
                        a.a.createElement(
                          fe.a.Item,
                          null,
                          a.a.createElement(
                            P.a,
                            null,
                            a.a.createElement(F.a, null, 'Items'),
                            a.a.createElement(
                              F.a,
                              null,
                              '\u20ac',
                              h.itemsPrice.toFixed(2)
                            )
                          )
                        ),
                        a.a.createElement(
                          fe.a.Item,
                          null,
                          a.a.createElement(
                            P.a,
                            null,
                            a.a.createElement(F.a, null, 'Shipping'),
                            a.a.createElement(
                              F.a,
                              null,
                              '\u20ac',
                              h.shippingPrice.toFixed(2)
                            )
                          )
                        ),
                        a.a.createElement(
                          fe.a.Item,
                          null,
                          a.a.createElement(
                            P.a,
                            null,
                            a.a.createElement(F.a, null, 'Tax'),
                            a.a.createElement(
                              F.a,
                              null,
                              '\u20ac',
                              h.taxPrice.toFixed(2)
                            )
                          )
                        ),
                        a.a.createElement(
                          fe.a.Item,
                          null,
                          a.a.createElement(
                            P.a,
                            null,
                            a.a.createElement(
                              F.a,
                              null,
                              a.a.createElement('strong', null, 'Order Total')
                            ),
                            a.a.createElement(
                              F.a,
                              null,
                              '\u20ac',
                              h.totalPrice.toFixed(2)
                            )
                          )
                        ),
                        !h.isPaid &&
                          a.a.createElement(
                            fe.a.Item,
                            null,
                            x
                              ? a.a.createElement(z, null)
                              : a.a.createElement(
                                  'div',
                                  null,
                                  a.a.createElement(Ae.a, {
                                    createOrder: function (e, t) {
                                      return t.order
                                        .create({
                                          purchase_units: [
                                            { amount: { value: h.totalPrice } },
                                          ],
                                        })
                                        .then(function (e) {
                                          return e;
                                        });
                                    },
                                    onApprove: function (e, t) {
                                      return t.order.capture().then(
                                        (function () {
                                          var e = Object(c.a)(
                                            Ge().mark(function e(t) {
                                              var n, a;
                                              return Ge().wrap(
                                                function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        return (
                                                          (e.prev = 0),
                                                          E({
                                                            type: 'PAY_REQUEST',
                                                          }),
                                                          (e.next = 4),
                                                          N.a.put(
                                                            '/api/orders/'.concat(
                                                              h._id,
                                                              '/pay'
                                                            ),
                                                            t,
                                                            {
                                                              headers: {
                                                                authorization:
                                                                  'Bearer '.concat(
                                                                    r.token
                                                                  ),
                                                              },
                                                            }
                                                          )
                                                        );
                                                      case 4:
                                                        (n = e.sent),
                                                          (a = n.data),
                                                          E({
                                                            type: 'PAY_SUCCESS',
                                                            payload: a,
                                                          }),
                                                          _.b.success(
                                                            'Order is paid'
                                                          ),
                                                          (e.next = 14);
                                                        break;
                                                      case 10:
                                                        (e.prev = 10),
                                                          (e.t0 = e.catch(0)),
                                                          E({
                                                            type: 'PAY_FAIL',
                                                            payload: k(e.t0),
                                                          }),
                                                          _.b.error(k(e.t0));
                                                      case 14:
                                                      case 'end':
                                                        return e.stop();
                                                    }
                                                },
                                                e,
                                                null,
                                                [[0, 10]]
                                              );
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      );
                                    },
                                    onError: function (e) {
                                      _.b.error(k(e));
                                    },
                                  })
                                ),
                            d && a.a.createElement(z, null)
                          ),
                        r.isAdmin &&
                          h.isPaid &&
                          !h.isDeliverd &&
                          a.a.createElement(
                            fe.a.Item,
                            null,
                            v && a.a.createElement(z, null),
                            a.a.createElement(
                              'div',
                              { className: 'd-grid' },
                              a.a.createElement(
                                y.a,
                                { type: 'button', onClick: j },
                                'Deliver Order'
                              )
                            )
                          )
                      )
                    )
                  )
                )
              )
            );
      }
      function Re() {
        Re = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var He = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { orders: t.payload, loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function Qe() {
        var e = Object(n.useContext)(L).state.userInfo,
          t = Object(G.w)(),
          r = Object(n.useReducer)(He, { loading: !0, error: '' }),
          o = Object(l.a)(r, 2),
          i = o[0],
          u = i.loading,
          s = i.error,
          f = i.orders,
          h = o[1];
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var t = Object(c.a)(
                  Re().mark(function t() {
                    var r, n;
                    return Re().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                h({ type: 'FETCH_REQUEST' }),
                                console.log(e),
                                (t.prev = 2),
                                (t.next = 5),
                                N.a.get('/api/orders/mine/'.concat(e._id), {
                                  headers: {
                                    Authorization: 'Bearer '.concat(e.token),
                                  },
                                })
                              );
                            case 5:
                              (r = t.sent),
                                (n = r.data),
                                h({ type: 'FETCH_SUCCESS', payload: n }),
                                (t.next = 13);
                              break;
                            case 10:
                              (t.prev = 10),
                                (t.t0 = t.catch(2)),
                                h({ type: 'FETCH_FAIL', payload: k(t.t0) });
                            case 13:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 10]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [e]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Order History')
            ),
            a.a.createElement('h1', null, 'Order History'),
            u
              ? a.a.createElement(z, null)
              : s
              ? a.a.createElement(V, { variant: 'danger' }, s)
              : a.a.createElement(
                  'table',
                  { className: 'table' },
                  a.a.createElement(
                    'thead',
                    null,
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('th', null, 'ID'),
                      a.a.createElement('th', null, 'DATE'),
                      a.a.createElement('th', null, 'TOTAL'),
                      a.a.createElement('th', null, 'PAID'),
                      a.a.createElement('th', null, 'DELIVERED'),
                      a.a.createElement('th', null, 'ACTIONS')
                    )
                  ),
                  a.a.createElement(
                    'tbody',
                    null,
                    f.map(function (e) {
                      return a.a.createElement(
                        'tr',
                        { key: e._id },
                        a.a.createElement('td', null, e._id),
                        a.a.createElement(
                          'td',
                          null,
                          e.createdAt.substring(0, 10)
                        ),
                        a.a.createElement('td', null, e.totalPrice.toFixed(2)),
                        a.a.createElement(
                          'td',
                          null,
                          e.isPaid ? e.paidAt.substring(0, 10) : 'No'
                        ),
                        a.a.createElement(
                          'td',
                          null,
                          e.isDelivered ? e.deliveredAt.substring(0, 10) : 'No'
                        ),
                        a.a.createElement(
                          'td',
                          null,
                          a.a.createElement(
                            y.a,
                            {
                              type: 'button',
                              variant: 'light',
                              onClick: function () {
                                t('/order/'.concat(e._id));
                              },
                            },
                            'Details'
                          )
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function Ye() {
        Ye = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Be = function (e, t) {
        switch (t.type) {
          case 'UPDATE_REQUEST':
            return Object(b.a)({}, e, { loadingUpdate: !0 });
          case 'UPDATE_SUCCESS':
            return Object(b.a)({}, e, { loadingUpdate: !1 });
          case 'UPDATE_FAIL':
            return Object(b.a)({}, e, { laodingUpdate: !1 });
          default:
            return e;
        }
      };
      function qe() {
        var e = Object(n.useContext)(L),
          t = e.state,
          r = e.dispatch,
          o = t.userInfo,
          i = Object(n.useState)(o.name),
          u = Object(l.a)(i, 2),
          s = u[0],
          f = u[1],
          h = Object(n.useState)(o.email),
          p = Object(l.a)(h, 2),
          d = p[0],
          m = p[1],
          v = Object(n.useState)(''),
          g = Object(l.a)(v, 2),
          E = g[0],
          b = g[1],
          w = Object(n.useState)(''),
          x = Object(l.a)(w, 2),
          O = (x[0], x[1]),
          j = Object(n.useReducer)(Be, { loadingUpdate: !1 }),
          S = Object(l.a)(j, 2),
          T = (S[0].loadingUpdate, S[1]),
          C = (function () {
            var e = Object(c.a)(
              Ye().mark(function e(t) {
                var n, a;
                return Ye().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            T({ type: 'UPDATE_REQUEST' }),
                            (e.next = 5),
                            N.a.put(
                              'api/users/profile',
                              { name: s, email: d, password: E },
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(o.token),
                                },
                              }
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (a = n.data),
                            T({ type: 'UPDATE_SUCCESS' }),
                            r({ type: 'USER_SIGNIN', payload: a }),
                            localStorage.setItem('userInfo', JSON.stringify(a)),
                            _.b.success('User updated succesfully'),
                            (e.next = 17);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(1)),
                            T({ type: 'UPDATE_FAIL' }),
                            _.b.error(k(e.t0));
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 13]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          'div',
          { className: 'container small-container' },
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'User Profile')
          ),
          a.a.createElement('h1', { className: 'my-3' }, ' User Profile'),
          a.a.createElement(
            'form',
            { onSubmit: C },
            a.a.createElement(
              ge.a.Group,
              { className: 'mb-3', controlId: 'name' },
              a.a.createElement(ge.a.Label, null, 'Name'),
              a.a.createElement(ge.a.Control, {
                value: s,
                onChange: function (e) {
                  return f(e.target.value);
                },
                required: !0,
              })
            ),
            a.a.createElement(
              ge.a.Group,
              { className: 'mb-3', controlId: 'email' },
              a.a.createElement(ge.a.Label, null, 'Email'),
              a.a.createElement(ge.a.Control, {
                type: 'email',
                value: d,
                onChange: function (e) {
                  return m(e.target.value);
                },
                required: !0,
              })
            ),
            a.a.createElement(
              ge.a.Group,
              { className: 'mb-3', controlId: 'password' },
              a.a.createElement(ge.a.Label, null, 'Password'),
              a.a.createElement(ge.a.Control, {
                type: 'password',
                onChange: function (e) {
                  return b(e.target.value);
                },
              })
            ),
            a.a.createElement(
              ge.a.Group,
              { className: 'mb-3', controlId: 'password' },
              a.a.createElement(ge.a.Label, null, 'Confirm Password'),
              a.a.createElement(ge.a.Control, {
                type: 'password',
                onChange: function (e) {
                  return O(e.target.value);
                },
              })
            ),
            a.a.createElement(
              'div',
              { className: 'mb-3' },
              a.a.createElement(y.a, { type: 'submit' }, 'Update')
            )
          )
        );
      }
      var ze = r(315),
        Me = r(184);
      function Ve() {
        var e = Object(G.w)(),
          t = Object(n.useState)(''),
          r = Object(l.a)(t, 2),
          o = r[0],
          i = r[1];
        return a.a.createElement(
          ge.a,
          {
            className: 'd-flex me-auto',
            onSubmit: function (t) {
              t.preventDefault(),
                e(o ? '/search/?query='.concat(o) : '/search');
            },
          },
          a.a.createElement(
            ze.a,
            null,
            a.a.createElement(Me.a, {
              type: 'text',
              name: 'q',
              id: 'q',
              onChange: function (e) {
                return i(e.target.value);
              },
              placeholder: 'Search for items...',
              'aria-label': 'Search Products',
              'aria-describedby': 'button-search',
            }),
            a.a.createElement(
              y.a,
              {
                variant: 'outline-primary',
                type: 'submit',
                id: 'button-search',
              },
              a.a.createElement(v.h, null)
            )
          )
        );
      }
      function Je() {
        Je = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var $e = function (e, t) {
          switch (t.type) {
            case 'FETCH_REQUEST':
              return Object(b.a)({}, e, { loading: !0 });
            case 'FETCH_SUCCESS':
              return Object(b.a)({}, e, {
                products: t.payload.products,
                page: t.payload.page,
                pages: t.payload.pages,
                countProducts: t.payload.countProducts,
                loading: !1,
              });
            case 'FETCH_FAIL':
              return Object(b.a)({}, e, { loading: !1, error: t.payload });
            default:
              return e;
          }
        },
        Xe = [
          { name: '\u20ac1 to \u20ac50', value: '1-50' },
          { name: '\u20ac51 to \u20ac100', value: '51-100' },
          { name: '\u20ac101 to \u20ac500', value: '101-500' },
        ];
      function We(e) {
        var t = e.favoritePressed,
          r = e.setfavoritePressed,
          o = Object(G.w)(),
          i = Object(G.u)().search,
          u = new URLSearchParams(i),
          s = u.get('category') || 'all',
          f = u.get('query') || 'all',
          h = u.get('price') || 'all',
          p = u.get('order') || 'newest',
          d = u.get('page') || 1,
          m = Object(n.useReducer)($e, { loading: !0, error: '' }),
          v = Object(l.a)(m, 2),
          E = v[0],
          b = E.loading,
          L = E.error,
          x = E.products,
          O = E.pages,
          j = E.countProducts,
          S = v[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                Je().mark(function e() {
                  var t, r;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              N.a.get(
                                '/api/products/search?page='
                                  .concat(d, '&query=')
                                  .concat(f, '&category=')
                                  .concat(s, '&price=')
                                  .concat(h, '&order=')
                                  .concat(p)
                              )
                            );
                          case 3:
                            (t = e.sent),
                              (r = t.data),
                              S({ type: 'FETCH_SUCCESS', payload: r }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              S({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [s, L, p, d, h, f]
        );
        var T = Object(n.useState)([]),
          C = Object(l.a)(T, 2),
          I = C[0],
          A = C[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                Je().mark(function e() {
                  var t, r;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              N.a.get('/api/products/categories')
                            );
                          case 3:
                            (t = e.sent), (r = t.data), A(r), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              _.b.error(k(e.t0));
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [S]
        );
        var U = function (e) {
          var t = e.page || d,
            r = e.category || s,
            n = e.query || f,
            a = e.price || h,
            o = e.order || p;
          return '/search?category='
            .concat(r, '&query=')
            .concat(n, '&price=')
            .concat(a, '&order=')
            .concat(o, '&page=')
            .concat(t);
        };
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'Search Product')
          ),
          a.a.createElement(
            P.a,
            { className: 'mt-3' },
            a.a.createElement(
              F.a,
              {
                md: 3,
                className:
                  'border border-dark border-top-0 border-bottom-0 border-left-0 m-0',
              },
              a.a.createElement('h3', null, 'Category'),
              a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  'select',
                  {
                    value: s,
                    onChange: function (e) {
                      o(U({ category: e.target.value }));
                    },
                  },
                  a.a.createElement('option', { value: 'all' }, 'All'),
                  I.map(function (e) {
                    return a.a.createElement('option', { value: e }, e);
                  })
                )
              ),
              a.a.createElement(
                'div',
                null,
                a.a.createElement('h3', null, 'Price')
              ),
              a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  'select',
                  {
                    value: h,
                    onChange: function (e) {
                      o(U({ price: e.target.value }));
                    },
                  },
                  a.a.createElement('option', { value: 'all' }, 'All'),
                  Xe.map(function (e) {
                    return a.a.createElement(
                      'option',
                      { value: e.value },
                      e.value
                    );
                  })
                )
              )
            ),
            a.a.createElement(
              F.a,
              { md: 9 },
              b
                ? a.a.createElement(z, null)
                : L
                ? a.a.createElement(V, { variant: 'danger' }, L)
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      P.a,
                      { className: 'justify-content-between mb-3' },
                      a.a.createElement(
                        F.a,
                        { md: 6 },
                        a.a.createElement(
                          'div',
                          null,
                          0 === j ? 'No ' : j + ' ',
                          'Results',
                          0 == f && ':' + f,
                          0 == s && ':' + s,
                          0 == h && ':' + h,
                          0 == f || 0 == s || 0 == h
                            ? a.a.createElement(
                                y.a,
                                {
                                  variant: 'light',
                                  onClick: function () {
                                    return o('/search');
                                  },
                                },
                                a.a.createElement('i', {
                                  className: 'fas fa-times-circle',
                                })
                              )
                            : null
                        )
                      ),
                      a.a.createElement(
                        F.a,
                        { className: 'text-end' },
                        'Sort by',
                        ' ',
                        a.a.createElement(
                          'select',
                          {
                            value: p,
                            onChange: function (e) {
                              o(U({ order: e.target.value }));
                            },
                          },
                          a.a.createElement(
                            'option',
                            { value: 'newest' },
                            'Newest Arrivals'
                          ),
                          a.a.createElement(
                            'option',
                            { value: 'lowest' },
                            'Price: Low to High'
                          ),
                          a.a.createElement(
                            'option',
                            { value: 'highest' },
                            'Price: High to Low'
                          )
                        )
                      )
                    ),
                    0 === x.length &&
                      a.a.createElement(V, null, 'No Product Found'),
                    a.a.createElement(
                      P.a,
                      null,
                      x.map(function (e) {
                        return a.a.createElement(
                          F.a,
                          { sm: 6, lg: 4, className: 'mb-3', key: e._id },
                          a.a.createElement(B, {
                            favoritePressed: t,
                            setfavoritePressed: r,
                            product: e,
                          })
                        );
                      })
                    ),
                    a.a.createElement(
                      'div',
                      null,
                      Object(w.a)(Array(O).keys()).map(function (e) {
                        return a.a.createElement(
                          g.LinkContainer,
                          {
                            key: e + 1,
                            className: 'mx-1',
                            to: U({ page: e + 1 }),
                          },
                          a.a.createElement(
                            y.a,
                            {
                              className: Number(d) === e + 1 ? 'text-bold' : '',
                              variant: 'light',
                            },
                            e + 1
                          )
                        );
                      })
                    )
                  )
            )
          )
        );
      }
      function Ke(e) {
        var t = e.children;
        return Object(n.useContext)(L).state.userInfo
          ? t
          : a.a.createElement(G.b, { to: '/signin' });
      }
      var Ze = r(226);
      function et() {
        et = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var tt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { summary: t.payload, loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { error: t.payload, loading: !1 });
          default:
            return e;
        }
      };
      function rt() {
        var e = Object(n.useReducer)(tt, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.summary,
          u = r.error,
          s = t[1],
          f = Object(n.useContext)(L).state.userInfo;
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  et().mark(function e() {
                    var t, r;
                    return et().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                s({ type: 'FETCH_REQUEST' }),
                                (e.prev = 1),
                                (e.next = 4),
                                N.a.get('/api/orders/summary', {
                                  headers: {
                                    Authorization: 'Bearer '.concat(f.token),
                                  },
                                })
                              );
                            case 4:
                              (t = e.sent),
                                (r = t.data),
                                s({ type: 'FETCH_SUCCESS', payload: r }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                s({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [f]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement('h1', null, 'Dashboard'),
            o
              ? a.a.createElement(z, null)
              : u
              ? a.a.createElement(V, { variant: 'danger' }, u)
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    P.a,
                    null,
                    a.a.createElement(
                      F.a,
                      { md: 4 },
                      a.a.createElement(
                        A.a,
                        null,
                        a.a.createElement(
                          A.a.Body,
                          null,
                          a.a.createElement(
                            A.a.Title,
                            null,
                            i.users && i.users[0] ? i.users[0].numUsers : 0
                          ),
                          a.a.createElement(A.a.Text, null, 'Users')
                        )
                      )
                    ),
                    a.a.createElement(
                      F.a,
                      { md: 4 },
                      a.a.createElement(
                        A.a,
                        null,
                        a.a.createElement(
                          A.a.Body,
                          null,
                          a.a.createElement(
                            A.a.Title,
                            null,
                            i.orders && i.orders[0] ? i.orders[0].numOrders : 0
                          ),
                          a.a.createElement(A.a.Text, null, 'Orders')
                        )
                      )
                    ),
                    a.a.createElement(
                      F.a,
                      { md: 4 },
                      a.a.createElement(
                        A.a,
                        null,
                        a.a.createElement(
                          A.a.Body,
                          null,
                          a.a.createElement(
                            A.a.Title,
                            null,
                            i.orders && i.orders[0]
                              ? i.orders[0].totalSales.toFixed(2)
                              : 0
                          ),
                          a.a.createElement(A.a.Text, null, 'Sales')
                        )
                      )
                    )
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'my-3' },
                    a.a.createElement('h2', null, 'Sales'),
                    0 === i.dailyOrders.length
                      ? a.a.createElement(V, null, ' No Sale')
                      : a.a.createElement(Ze.a, {
                          width: '100%',
                          height: '400px',
                          chartType: 'AreaChart',
                          loader: a.a.createElement(
                            'div',
                            null,
                            'Loading Chart...'
                          ),
                          data: [['Date', 'Sales']].concat(
                            Object(w.a)(
                              i.dailyOrders.map(function (e) {
                                return [e._id, e.sales];
                              })
                            )
                          ),
                        })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'my-3' },
                    a.a.createElement('h2', null, 'Categories'),
                    0 === i.productCategories.length
                      ? a.a.createElement(V, null, ' No Category')
                      : a.a.createElement(Ze.a, {
                          width: '100%',
                          height: '400px',
                          chartType: 'PieChart',
                          loader: a.a.createElement(
                            'div',
                            null,
                            'Loading Chart...'
                          ),
                          data: [['Category', 'Products']].concat(
                            Object(w.a)(
                              i.productCategories.map(function (e) {
                                return [e._id, e.count];
                              })
                            )
                          ),
                        })
                  )
                )
          )
        );
      }
      function nt(e) {
        var t = e.children,
          r = Object(n.useContext)(L).state.userInfo;
        return r && r.isAdmin ? t : a.a.createElement(G.b, { to: '/signin' });
      }
      function at() {
        at = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var ot = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, {
              products: t.payload.products,
              page: t.payload.page,
              pages: t.payload.pages,
              loading: !1,
            });
          case 'FETCH_FAILS':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'CREATE_REQUEST':
            return Object(b.a)({}, e, { loadingCreate: !0 });
          case 'CREATE_SUCCESS':
          case 'CREATE_FAIL':
            return Object(b.a)({}, e, { loadingCreate: !1 });
          case 'DELETE_REQUEST':
            return Object(b.a)({}, e, { loadingDelete: !0, successDelete: !1 });
          case 'DELETE_SUCCESS':
            return Object(b.a)({}, e, { loadingDelete: !1, successDelete: !0 });
          case 'DELETE_FAIL':
          case 'DELETE_RESET':
            return Object(b.a)({}, e, { loadingDelete: !1, successDelete: !1 });
          default:
            return e;
        }
      };
      function it() {
        var e = Object(n.useReducer)(ot, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          u = r.products,
          s = r.pages,
          f = r.loadingCreate,
          h = r.loadingDelete,
          p = r.successDelete,
          d = t[1],
          v = Object(G.w)(),
          g = Object(G.u)().search,
          E = new URLSearchParams(g).get('page') || 1,
          b = Object(n.useContext)(L).state.userInfo;
        Object(n.useEffect)(
          function () {
            var e = (function () {
              var e = Object(c.a)(
                at().mark(function e() {
                  var t, r;
                  return at().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              N.a.get('/api/products/admin?page='.concat(E), {
                                headers: {
                                  Authorization: 'Bearer '.concat(b.token),
                                },
                              })
                            );
                          case 3:
                            (t = e.sent),
                              (r = t.data),
                              console.log(r),
                              d({ type: 'FETCH_SUCCESS', payload: r }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              d({ type: 'FETCH_FAILS', payload: k(e.t0) });
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e(), p ? d({ type: 'DELETE_RESET' }) : e();
          },
          [E, b, p]
        );
        var x = (function () {
            var e = Object(c.a)(
              at().mark(function e() {
                var t, r;
                return at().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !window.confirm(
                              'Are you sure to create a new Product?'
                            )
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            d({ type: 'CREATE_REQUEST' }),
                            (e.next = 5),
                            N.a.post(
                              '/api/products',
                              {},
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(b.token),
                                },
                              }
                            )
                          );
                        case 5:
                          (t = e.sent),
                            (r = t.data),
                            _.b.success('Product created succesfully'),
                            d({ type: 'CREATE_SUCCESS' }),
                            v('/admin/product/'.concat(r.product._id)),
                            (e.next = 16);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(1)),
                            _.b.error(k(e.t0)),
                            d({ type: 'CREATE_FAIL' });
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          O = (function () {
            var e = Object(c.a)(
              at().mark(function e(t) {
                return at().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!window.confirm('Are you sure to delete?')) {
                            e.next = 15;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            d({ type: 'DELETE_REQUEST' }),
                            (e.next = 5),
                            N.a.delete('/api/products/'.concat(t._id), {
                              headers: {
                                Authorization: 'Bearer '.concat(b.token),
                              },
                            })
                          );
                        case 5:
                          _.b.success('Product deleted succesfully'),
                            d({ type: 'DELETE_SUCCESS' }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            _.b.error(k(e.t0)),
                            d({ type: 'DELETE_FAIL' });
                        case 13:
                          e.next = 15;
                          break;
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            P.a,
            null,
            a.a.createElement(
              F.a,
              null,
              a.a.createElement('h1', null, 'Products')
            ),
            a.a.createElement(
              F.a,
              { className: 'col text-end' },
              a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  y.a,
                  { type: 'button', onClick: x },
                  'Create Product'
                )
              )
            )
          ),
          f && a.a.createElement(z, null),
          h && a.a.createElement(z, null),
          o
            ? a.a.createElement(z, null)
            : i
            ? a.a.createElement(V, { variant: 'danger' }, i)
            : a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  'table',
                  { className: 'table' },
                  a.a.createElement(
                    'thead',
                    null,
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('th', null, 'ID'),
                      a.a.createElement('th', null, 'NAME'),
                      a.a.createElement('th', null, 'PRICE'),
                      a.a.createElement('th', null, 'CATEGORY'),
                      a.a.createElement('th', null, 'ACTIONS')
                    )
                  ),
                  a.a.createElement(
                    'tbody',
                    null,
                    u.map(function (e) {
                      return a.a.createElement(
                        'tr',
                        { key: e._id },
                        a.a.createElement('td', null, e._id),
                        a.a.createElement('td', null, e.name),
                        a.a.createElement('td', null, e.price),
                        a.a.createElement('td', null, e.category),
                        a.a.createElement(
                          'td',
                          null,
                          a.a.createElement(
                            y.a,
                            {
                              type: 'button',
                              variant: 'light',
                              onClick: function () {
                                return v('/admin/product/'.concat(e._id));
                              },
                            },
                            'Edit'
                          ),
                          '\xa0',
                          a.a.createElement(
                            y.a,
                            {
                              type: 'button',
                              variant: 'light',
                              onClick: function () {
                                return O(e);
                              },
                            },
                            'Delete'
                          )
                        )
                      );
                    })
                  )
                ),
                a.a.createElement(
                  'div',
                  null,
                  Object(w.a)(Array(s).keys()).map(function (e) {
                    return a.a.createElement(
                      m.Link,
                      {
                        className:
                          e + 1 === Number(E) ? 'btn text-bold' : 'btn',
                        key: e + 1,
                        to: '/admin/products?page='.concat(e + 1),
                      },
                      e + 1
                    );
                  })
                )
              )
        );
      }
      function ct() {
        ct = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var lt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'UPDATE_REQUEST':
            return Object(b.a)({}, e, { loadingUpdate: !0 });
          case 'UPDATE_SUCCESS':
          case 'UPDATE_FAIL':
            return Object(b.a)({}, e, { loadingUpdate: !1 });
          case 'UPLOAD_REQUEST':
            return Object(b.a)({}, e, { laodingUpload: !0, errorUpload: '' });
          case 'UPLOAD_SUCCESS':
            return Object(b.a)({}, e, { laodingUpload: !1, errorUpload: '' });
          case 'UPLOAD_FAIL':
            return Object(b.a)({}, e, {
              laodingUpload: !1,
              errorUpload: t.payload,
            });
          default:
            return e;
        }
      };
      function ut() {
        r(525);
        var e = Object(G.w)(),
          t = Object(G.A)().id,
          o = Object(n.useContext)(L).state.userInfo,
          i = Object(n.useReducer)(lt, { loading: !0, error: '' }),
          u = Object(l.a)(i, 2),
          s = u[0],
          f = s.loading,
          h = s.error,
          d = s.loadingUpdate,
          m = s.laodingUpload,
          v = u[1],
          g = Object(n.useState)(''),
          E = Object(l.a)(g, 2),
          b = E[0],
          x = E[1],
          O = Object(n.useState)(''),
          j = Object(l.a)(O, 2),
          S = j[0],
          T = j[1],
          C = Object(n.useState)(''),
          I = Object(l.a)(C, 2),
          P = I[0],
          F = I[1],
          A = Object(n.useState)(''),
          U = Object(l.a)(A, 2),
          D = U[0],
          R = U[1],
          H = Object(n.useState)([]),
          Q = Object(l.a)(H, 2),
          Y = Q[0],
          B = Q[1],
          q = Object(n.useState)(''),
          M = Object(l.a)(q, 2),
          J = M[0],
          $ = M[1],
          X = Object(n.useState)(''),
          W = Object(l.a)(X, 2),
          K = W[0],
          Z = W[1],
          ee = Object(n.useState)(''),
          te = Object(l.a)(ee, 2),
          re = te[0],
          ne = te[1],
          ae = Object(n.useState)([]),
          oe = Object(l.a)(ae, 2),
          ie = oe[0],
          ce = oe[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                ct().mark(function e() {
                  var r, n;
                  return ct().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              v({ type: 'FETCH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/products/'.concat(t))
                            );
                          case 4:
                            (r = e.sent),
                              (n = r.data),
                              x(n.name),
                              T(n.slug),
                              F(n.price),
                              R(n.image),
                              B(n.images),
                              $(n.category),
                              Z(n.countInStock),
                              ne(n.description),
                              ce(n.sizes),
                              v({ type: 'FETCH_SUCCESS' }),
                              (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              v({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 21:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [t]
        );
        var le = (function () {
            var r = Object(c.a)(
              ct().mark(function r(n) {
                return ct().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            n.preventDefault(),
                            (r.prev = 1),
                            v({ type: 'UPDATE_REQUEST' }),
                            (r.next = 5),
                            N.a.put(
                              '/api/products/'.concat(t),
                              {
                                _id: t,
                                name: b,
                                slug: S,
                                price: P,
                                image: D,
                                images: Y,
                                category: J,
                                countInStock: K,
                                description: re,
                                sizes: ie,
                              },
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(o.token),
                                },
                              }
                            )
                          );
                        case 5:
                          v({ type: 'UPDATE_SUCCESS' }),
                            _.b.success('Product updates succesfully'),
                            e('/admin/products'),
                            (r.next = 14);
                          break;
                        case 10:
                          (r.prev = 10),
                            (r.t0 = r.catch(1)),
                            _.b.error(k(r.t0)),
                            v({ type: 'UPDATE_FAIL' });
                        case 14:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
          ue = (function () {
            var e = Object(c.a)(
              ct().mark(function e(t, r) {
                var n, a, i, c;
                return ct().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.target.files[0]),
                            (a = new FormData()).append('file', n),
                            (e.prev = 3),
                            v({ type: 'UPLOAD_REQUEST' }),
                            (e.next = 7),
                            N.a.post('/api/upload', a, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                                authorization: 'Bearer '.concat(o.token),
                              },
                            })
                          );
                        case 7:
                          (i = e.sent),
                            (c = i.data),
                            v({ type: 'UPLOAD_SUCCESS' }),
                            r
                              ? B([].concat(Object(w.a)(Y), [c.secure_url]))
                              : R(c.secure_url),
                            _.b.success(
                              'Image uploaded succesfully. click Update to apply it'
                            ),
                            (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(3)),
                            _.b.error(k(e.t0)),
                            v({ type: 'UPLOAD_FAIL', payload: k(e.t0) });
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 14]]
                );
              })
            );
            return function (t, r) {
              return e.apply(this, arguments);
            };
          })(),
          se = (function () {
            var e = Object(c.a)(
              ct().mark(function e(t) {
                return ct().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        B(
                          Y.filter(function (e) {
                            return e !== t;
                          })
                        ),
                          _.b.success(
                            'Inage removed siccesfully. click Update to apply it'
                          );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            p.a,
            { className: '"small-container' },
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Edit Product $', t)
            ),
            a.a.createElement('h1', null, 'Edit Product $', t),
            f
              ? a.a.createElement(z, null)
              : h
              ? a.a.createElement(V, { variant: 'danger' }, h)
              : a.a.createElement(
                  ge.a,
                  { onSubmit: le },
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'name' },
                    a.a.createElement(ge.a.Label, null, 'Name'),
                    a.a.createElement(ge.a.Control, {
                      value: b,
                      onChange: function (e) {
                        return x(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'slug' },
                    a.a.createElement(ge.a.Label, null, 'Slug'),
                    a.a.createElement(ge.a.Control, {
                      value: S,
                      onChange: function (e) {
                        return T(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'price' },
                    a.a.createElement(ge.a.Label, null, 'Price'),
                    a.a.createElement(ge.a.Control, {
                      value: P,
                      onChange: function (e) {
                        return F(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'imageFile' },
                    a.a.createElement(ge.a.Label, null, 'Image File'),
                    a.a.createElement(ge.a.Control, {
                      value: D,
                      onChange: function (e) {
                        return R(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'imageFile' },
                    a.a.createElement(ge.a.Label, null, 'Upload Image'),
                    a.a.createElement(ge.a.Control, {
                      type: 'file',
                      onChange: ue,
                    }),
                    m && a.a.createElement(z, null)
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'additionalImage' },
                    a.a.createElement(ge.a.Label, null, 'Additional Images'),
                    0 === Y.length && a.a.createElement(V, null, 'No image'),
                    a.a.createElement(
                      fe.a,
                      { variant: 'flush' },
                      Y.map(function (e) {
                        return a.a.createElement(
                          fe.a.Item,
                          { key: e },
                          e,
                          a.a.createElement(
                            y.a,
                            {
                              variant: 'light',
                              onClick: function (e) {
                                return se(e);
                              },
                            },
                            a.a.createElement('i', {
                              className: 'fa fa-times-circle',
                            })
                          )
                        );
                      })
                    )
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'additionalImageFile' },
                    a.a.createElement(
                      ge.a.Label,
                      null,
                      'Upload Additional Image'
                    ),
                    a.a.createElement(ge.a.Control, {
                      type: 'file',
                      onChange: function (e) {
                        return ue(e, !0);
                      },
                    }),
                    m && a.a.createElement(z, null)
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'category' },
                    a.a.createElement(ge.a.Label, null, 'Category'),
                    a.a.createElement(ge.a.Control, {
                      value: J,
                      onChange: function (e) {
                        return $(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'countInStock' },
                    a.a.createElement(ge.a.Label, null, 'In Stock'),
                    a.a.createElement(ge.a.Control, {
                      value: K,
                      onChange: function (e) {
                        return Z(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'description' },
                    a.a.createElement(ge.a.Label, null, 'Description'),
                    a.a.createElement(ge.a.Control, {
                      value: re,
                      onChange: function (e) {
                        return ne(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'mb-3' },
                    a.a.createElement(pe.a, {
                      isMulti: !0,
                      defaultValue: ie,
                      onChange: function (e) {
                        return ce(e);
                      },
                      options: [
                        { value: 'XXS', label: 'XXS' },
                        { value: 'XS', label: 'XS' },
                        { value: 'S', label: 'S' },
                        { value: 'M', label: 'M' },
                        { value: 'L', label: 'L' },
                        { value: 'XL', label: 'XL' },
                        { value: 'XLL', label: 'XLL' },
                      ],
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'mb-3' },
                    a.a.createElement(
                      y.a,
                      { disabled: d, type: 'submit' },
                      'Update'
                    ),
                    d && a.a.createElement(z, null)
                  )
                )
          ),
          ';'
        );
      }
      function st() {
        st = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var ft = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, orders: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'DELETE_REQUEST':
            return Object(b.a)({}, e, { loadingDelete: !0, successDelete: !1 });
          case 'DELETE_SUCCESS':
            return Object(b.a)({}, e, { loadingDelete: !1, successDelete: !0 });
          case 'DELETE_FAIL':
            return Object(b.a)({}, e, { loadingDelete: !1 });
          case 'DELETE_RESET':
            return Object(b.a)({}, e, { loadingDelete: !0, successDelete: !1 });
          default:
            return e;
        }
      };
      function ht() {
        var e = Object(G.w)(),
          t = Object(n.useContext)(L).state.userInfo,
          r = Object(n.useReducer)(ft, { loading: !0, error: '' }),
          o = Object(l.a)(r, 2),
          i = o[0],
          u = i.loading,
          s = i.error,
          f = i.orders,
          h = i.loadingDelete,
          p = i.successDelete,
          d = o[1];
        Object(n.useEffect)(
          function () {
            var e = (function () {
              var e = Object(c.a)(
                st().mark(function e() {
                  var r, n;
                  return st().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              d({ type: 'FETCH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/orders', {
                                headers: {
                                  Authorization: 'Bearer '.concat(t.token),
                                },
                              })
                            );
                          case 4:
                            (r = e.sent),
                              (n = r.data),
                              d({ type: 'FETCH_SUCCESS', payload: n }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              d({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            p ? d({ type: 'DELETE_RESET' }) : e();
          },
          [t, p]
        );
        var m = (function () {
          var e = Object(c.a)(
            st().mark(function e(r) {
              return st().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!window.confirm('Are you sure to delete?')) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          d({ type: 'DELETE_REQUEST' }),
                          (e.next = 5),
                          N.a.delete('/api/orders/'.concat(r._id), {
                            headers: {
                              Authorization: 'Bearer '.concat(t.token),
                            },
                          })
                        );
                      case 5:
                        _.b.success('Order deleted successfully'),
                          d({ type: 'DELETE_SUCCESS' }),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(1)),
                          _.b.error(k(e.t0)),
                          d({ type: 'DELETE_FAIL' });
                      case 13:
                        e.next = 15;
                        break;
                      case 15:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 9]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'Orders')
          ),
          a.a.createElement('h1', null, 'Orders'),
          h && a.a.createElement(z, null),
          u
            ? a.a.createElement(z, null)
            : s
            ? a.a.createElement(V, { variant: 'danger' }, s)
            : a.a.createElement(
                'table',
                { className: 'table' },
                a.a.createElement(
                  'thead',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', null, 'ID'),
                    a.a.createElement('th', null, 'USER'),
                    a.a.createElement('th', null, 'DATE'),
                    a.a.createElement('th', null, 'TOTAL'),
                    a.a.createElement('th', null, 'PAID'),
                    a.a.createElement('th', null, 'DELIVERD'),
                    a.a.createElement('th', null, 'ACTIONS')
                  )
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  f.map(function (t) {
                    return a.a.createElement(
                      'tr',
                      { key: t._id },
                      a.a.createElement('td', null, t._id),
                      a.a.createElement(
                        'td',
                        null,
                        t.user ? t.user.name : 'DELETED_USER'
                      ),
                      a.a.createElement(
                        'td',
                        null,
                        t.createdAt.substring(0, 10)
                      ),
                      a.a.createElement('td', null, t.totalPrice.toFixed(2)),
                      a.a.createElement(
                        'td',
                        null,
                        t.isPaid ? t.paidAt.substring(0, 10) : 'No'
                      ),
                      a.a.createElement(
                        'td',
                        null,
                        t.isDelivered ? t.deliveredAt.substring(0, 10) : 'No'
                      ),
                      a.a.createElement(
                        'td',
                        null,
                        a.a.createElement(
                          y.a,
                          {
                            type: 'button',
                            variant: 'light',
                            onClick: function () {
                              e('/order/'.concat(t._id));
                            },
                          },
                          'Details'
                        ),
                        '\xa0',
                        a.a.createElement(
                          y.a,
                          {
                            type: 'button',
                            variant: 'light',
                            onClick: function () {
                              return m(t);
                            },
                          },
                          'Delete'
                        )
                      )
                    );
                  })
                )
              )
        );
      }
      function pt() {
        pt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var dt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, users: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'DELETE_REQUEST':
            return Object(b.a)({}, e, { loadingDelete: !0, successDelete: !1 });
          case 'DELETE_SUCCESS':
            return Object(b.a)({}, e, { loadingDelete: !1, successDelete: !0 });
          case 'DELETE_FAIL':
            return Object(b.a)({}, e, { loadingDelete: !1 });
          case 'DELETE_RESET':
            return Object(b.a)({}, e, { loadingDelete: !1, successDelete: !1 });
          default:
            return e;
        }
      };
      function mt() {
        var e = Object(G.w)(),
          t = Object(n.useReducer)(dt, { loading: !0, error: '' }),
          r = Object(l.a)(t, 2),
          o = r[0],
          i = o.loading,
          u = o.error,
          s = o.users,
          f = o.loadingDelete,
          h = o.successDelete,
          p = r[1],
          d = Object(n.useContext)(L).state.userInfo;
        Object(n.useEffect)(
          function () {
            var e = (function () {
              var e = Object(c.a)(
                pt().mark(function e() {
                  var t, r;
                  return pt().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              p({ type: 'FTECH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/users', {
                                headers: {
                                  Authorization: 'Bearer '.concat(d.token),
                                },
                              })
                            );
                          case 4:
                            (t = e.sent),
                              (r = t.data),
                              p({ type: 'FETCH_SUCCESS', payload: r }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              p({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            h ? p({ type: 'DELETE_RESET' }) : e();
          },
          [d, h]
        );
        var m = (function () {
          var e = Object(c.a)(
            pt().mark(function e(t) {
              return pt().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!window.confirm('Are you sure to delete?')) {
                          e.next = 13;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          p({ type: 'DELETE_REQUEST' }),
                          (e.next = 5),
                          N.a.delete('/api/users/'.concat(t._id), {
                            headers: {
                              Authorization: 'Bearer '.concat(d.token),
                            },
                          })
                        );
                      case 5:
                        _.b.success('User deleted succesfully'),
                          p({ type: 'DELETE_SUCCESS' }),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(1)),
                          _.b.error(k(e.t0)),
                          p({ type: 'DELETE_FAIL' });
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 9]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            he.a,
            null,
            a.a.createElement('title', null, 'Users')
          ),
          a.a.createElement('h1', null, 'Users'),
          f && a.a.createElement(z, null),
          i
            ? a.a.createElement(z, null)
            : u
            ? a.a.createElement(V, { variant: 'danger' }, u)
            : a.a.createElement(
                'table',
                { className: 'table' },
                a.a.createElement(
                  'thead',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', null, 'ID'),
                    a.a.createElement('th', null, 'NAME'),
                    a.a.createElement('th', null, 'EMAIL'),
                    a.a.createElement('th', null, 'IS ADMIN'),
                    a.a.createElement('th', null, 'ACTIONS')
                  )
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  s.map(function (t) {
                    return a.a.createElement(
                      'tr',
                      { key: t._id },
                      a.a.createElement('td', null, t._id),
                      a.a.createElement('td', null, t.name),
                      a.a.createElement('td', null, t.email),
                      a.a.createElement('td', null, t.isAdmin ? 'YES' : 'NO'),
                      a.a.createElement(
                        'td',
                        null,
                        a.a.createElement(
                          y.a,
                          {
                            type: 'button',
                            variant: 'light',
                            onClick: function () {
                              return e('/admin/user/'.concat(t._id));
                            },
                          },
                          'Edit'
                        ),
                        '\xa0',
                        a.a.createElement(
                          y.a,
                          {
                            type: 'button',
                            variant: 'light',
                            onClick: function () {
                              return m(t);
                            },
                          },
                          'Delete'
                        )
                      )
                    );
                  })
                )
              )
        );
      }
      function vt() {
        vt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var yt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'UPDATE_REQUEST':
            return Object(b.a)({}, e, { loadingUpdate: !0 });
          case 'UPDATE_SUCCESS':
          case 'UPDATE_FAIL':
            return Object(b.a)({}, e, { loadingUpdate: !1 });
          default:
            return e;
        }
      };
      function gt() {
        var e = Object(n.useReducer)(yt, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          u = r.loadingUpdate,
          s = t[1],
          f = Object(n.useContext)(L).state.userInfo,
          h = Object(G.A)().id,
          d = Object(G.w)(),
          m = Object(n.useState)(''),
          v = Object(l.a)(m, 2),
          g = v[0],
          E = v[1],
          b = Object(n.useState)(''),
          w = Object(l.a)(b, 2),
          x = w[0],
          O = w[1],
          j = Object(n.useState)(!1),
          S = Object(l.a)(j, 2),
          T = S[0],
          C = S[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                vt().mark(function e() {
                  var t, r;
                  return vt().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              s({ type: 'FETCH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/users/'.concat(h), {
                                headers: {
                                  Authorization: 'Bearer '.concat(f.token),
                                },
                              })
                            );
                          case 4:
                            (t = e.sent),
                              (r = t.data),
                              E(r.name),
                              O(r.email),
                              C(r.isAdmin),
                              s({ type: 'FETCH_SUCCESS' }),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(0)),
                              s({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [h, f]
        );
        var I = (function () {
          var e = Object(c.a)(
            vt().mark(function e(t) {
              return vt().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          (e.prev = 1),
                          s({ type: 'UPDATE_REQUEST' }),
                          (e.next = 5),
                          N.a.put(
                            '/api/users/'.concat(h),
                            { _id: h, name: g, email: x, isAdmin: T },
                            {
                              headers: {
                                Authorization: 'Bearer '.concat(f.token),
                              },
                            }
                          )
                        );
                      case 5:
                        s({ type: 'UPDATE_SUCCESS' }),
                          _.b.success('Users updated succesfully'),
                          d('/admin/users'),
                          (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          _.b.error(k(e.t0)),
                          s({ type: 'UPDATE_FAIL' });
                      case 14:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            p.a,
            { className: '"small-container' },
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Edit User $', h)
            ),
            a.a.createElement('h1', null, 'Edit User $', h),
            o
              ? a.a.createElement(z, null)
              : i
              ? a.a.createElement(V, { variant: 'danger' }, i)
              : a.a.createElement(
                  ge.a,
                  { onSubmit: I },
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'name' },
                    a.a.createElement(ge.a.Label, null, 'Name'),
                    a.a.createElement(ge.a.Control, {
                      value: g,
                      onChange: function (e) {
                        return E(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'email' },
                    a.a.createElement(ge.a.Label, null, 'Email'),
                    a.a.createElement(ge.a.Control, {
                      value: x,
                      type: 'email',
                      onChange: function (e) {
                        return O(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(ge.a.Check, {
                    className: 'mb-3',
                    type: 'checkbox',
                    id: 'isAdmin',
                    label: 'isAdmin',
                    checked: T,
                    onChange: function (e) {
                      return C(e.target.checked);
                    },
                  }),
                  a.a.createElement(
                    'div',
                    { className: 'mb-3' },
                    a.a.createElement(
                      y.a,
                      { disabled: u, type: 'submit' },
                      'Update'
                    ),
                    u && a.a.createElement(z, null)
                  )
                )
          )
        );
      }
      function Et() {
        Et = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var bt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { favorites: t.payload, loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function wt(e) {
        var t = e.favoritePressed2,
          r = e.setfavoritePressed2,
          o = Object(n.useContext)(L).state.userInfo,
          i = Object(n.useReducer)(Object(I.a)(bt), {
            products: [],
            loading: !0,
            error: '',
          }),
          u = Object(l.a)(i, 2),
          s = u[0],
          f = s.loading,
          h = s.error,
          p = s.favorites,
          d = u[1];
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  Et().mark(function e() {
                    var t;
                    return Et().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                d({ type: 'FETCH_REQUEST' }),
                                (e.prev = 1),
                                (e.next = 4),
                                N.a.get(
                                  'api/favorites/favoriteproducts/'.concat(
                                    o._id
                                  ),
                                  {
                                    headers: {
                                      Authorization: 'Bearer '.concat(o.token),
                                    },
                                  }
                                )
                              );
                            case 4:
                              (t = e.sent),
                                d({ type: 'FETCH_SUCCESS', payload: t.data }),
                                r(!1),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                d({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [t]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'div',
              null,
              a.a.createElement(
                'main',
                { className: 'main-products' },
                a.a.createElement(
                  'h1',
                  null,
                  'Favorite Products',
                  a.a.createElement(
                    'div',
                    { className: 'products' },
                    f
                      ? a.a.createElement(z, null)
                      : h
                      ? a.a.createElement(
                          'div',
                          null,
                          a.a.createElement(V, { variant: 'danger' }, h)
                        )
                      : a.a.createElement(
                          P.a,
                          null,
                          p.map(function (e) {
                            return a.a.createElement(
                              F.a,
                              {
                                key: e.slug,
                                sm: 6,
                                md: 4,
                                lg: 3,
                                className: 'mb-3',
                              },
                              a.a.createElement(B, {
                                product: e,
                                favoritePressed: t,
                                setfavoritePressed: r,
                              })
                            );
                          })
                        )
                  )
                )
              )
            )
          )
        );
      }
      r(533);
      function Lt() {
        Lt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var xt = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1, categories: t.payload });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          default:
            return e;
        }
      };
      function Ot() {
        var e = Object(G.w)(),
          t = Object(n.useReducer)(xt, { loading: !0, error: '' }),
          r = Object(l.a)(t, 2),
          o = r[0],
          i = o.loading,
          u = o.error,
          s = o.categories,
          f = r[1],
          h = Object(n.useContext)(L).state.userInfo;
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(c.a)(
                  Lt().mark(function e() {
                    var t, r;
                    return Lt().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                f({ type: 'FTECH_REQUEST' }),
                                (e.next = 4),
                                N.a.get('/api/categories', {
                                  headers: {
                                    Authorization: 'Bearer '.concat(h.token),
                                  },
                                })
                              );
                            case 4:
                              (t = e.sent),
                                (r = t.data),
                                f({ type: 'FETCH_SUCCESS', payload: r }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                f({ type: 'FETCH_FAIL', payload: k(e.t0) });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [h]
          ),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Users')
            ),
            a.a.createElement('h1', null, 'Users'),
            i
              ? a.a.createElement(z, null)
              : u
              ? a.a.createElement(V, { variant: 'danger' }, u)
              : a.a.createElement(
                  'table',
                  { className: 'table' },
                  a.a.createElement(
                    'thead',
                    null,
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('th', null, 'ID'),
                      a.a.createElement('th', null, 'NAME'),
                      a.a.createElement('th', null, 'ACTIONS')
                    )
                  ),
                  a.a.createElement(
                    'tbody',
                    null,
                    s.map(function (t) {
                      return a.a.createElement(
                        'tr',
                        { key: t._id },
                        a.a.createElement('td', null, t._id),
                        a.a.createElement('td', null, t.name),
                        a.a.createElement(
                          'td',
                          null,
                          a.a.createElement(
                            y.a,
                            {
                              type: 'button',
                              variant: 'light',
                              onClick: function () {
                                return e('/admin/category/'.concat(t._id));
                              },
                            },
                            'Edit'
                          ),
                          '\xa0'
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function jt() {
        jt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var _t = function (e, t) {
        switch (t.type) {
          case 'FETCH_REQUEST':
            return Object(b.a)({}, e, { loading: !0 });
          case 'FETCH_SUCCESS':
            return Object(b.a)({}, e, { loading: !1 });
          case 'FETCH_FAIL':
            return Object(b.a)({}, e, { loading: !1, error: t.payload });
          case 'UPDATE_REQUEST':
            return Object(b.a)({}, e, { loadingUpdate: !0 });
          case 'UPDATE_SUCCESS':
          case 'UPDATE_FAIL':
            return Object(b.a)({}, e, { loadingUpdate: !1 });
          case 'UPLOAD_REQUEST':
            return Object(b.a)({}, e, { laodingUpload: !0, errorUpload: '' });
          case 'UPLOAD_SUCCESS':
            return Object(b.a)({}, e, { laodingUpload: !1, errorUpload: '' });
          case 'UPLOAD_FAIL':
            return Object(b.a)({}, e, {
              laodingUpload: !1,
              errorUpload: t.payload,
            });
          default:
            return e;
        }
      };
      function St() {
        var e = Object(n.useReducer)(_t, { loading: !0, error: '' }),
          t = Object(l.a)(e, 2),
          r = t[0],
          o = r.loading,
          i = r.error,
          u = r.loadingUpdate,
          s = r.laodingUpload,
          f = t[1],
          h = Object(n.useContext)(L).state.userInfo,
          d = Object(G.A)().id,
          m = Object(G.w)(),
          v = Object(n.useState)(''),
          g = Object(l.a)(v, 2),
          E = g[0],
          b = g[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(c.a)(
                jt().mark(function e() {
                  var t, r;
                  return jt().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              f({ type: 'FETCH_REQUEST' }),
                              (e.next = 4),
                              N.a.get('/api/categories/'.concat(d), {
                                headers: {
                                  Authorization: 'Bearer '.concat(h.token),
                                },
                              })
                            );
                          case 4:
                            (t = e.sent),
                              (r = t.data),
                              b(r.image),
                              f({ type: 'FETCH_SUCCESS' }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              f({ type: 'FETCH_FAIL', payload: k(e.t0) });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [d, h]
        );
        var w = (function () {
            var e = Object(c.a)(
              jt().mark(function e(t) {
                return jt().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            f({ type: 'UPDATE_REQUEST' }),
                            (e.next = 5),
                            N.a.put(
                              '/api/categories/'.concat(d),
                              { _id: d, image: E },
                              {
                                headers: {
                                  Authorization: 'Bearer '.concat(h.token),
                                },
                              }
                            )
                          );
                        case 5:
                          f({ type: 'UPDATE_SUCCESS' }),
                            _.b.success('Category updated succesfully'),
                            m('/admin/categories'),
                            (e.next = 14);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            _.b.error(k(e.t0)),
                            f({ type: 'UPDATE_FAIL' });
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          x = (function () {
            var e = Object(c.a)(
              jt().mark(function e(t, r) {
                var n, a, o, i;
                return jt().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.target.files[0]),
                            (a = new FormData()).append('file', n),
                            (e.prev = 3),
                            f({ type: 'UPLOAD_REQUEST' }),
                            (e.next = 7),
                            N.a.post('/api/upload', a, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                                authorization: 'Bearer '.concat(h.token),
                              },
                            })
                          );
                        case 7:
                          (o = e.sent),
                            (i = o.data),
                            f({ type: 'UPLOAD_SUCCESS' }),
                            b(i.secure_url),
                            _.b.success(
                              'Image uploaded succesfully. click Update to apply it'
                            ),
                            (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(3)),
                            _.b.error(k(e.t0)),
                            f({ type: 'UPLOAD_FAIL', payload: k(e.t0) });
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 14]]
                );
              })
            );
            return function (t, r) {
              return e.apply(this, arguments);
            };
          })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            p.a,
            { className: '"small-container' },
            a.a.createElement(
              he.a,
              null,
              a.a.createElement('title', null, 'Edit User $', d)
            ),
            a.a.createElement('h1', null, 'Edit User $', d),
            o
              ? a.a.createElement(z, null)
              : i
              ? a.a.createElement(V, { variant: 'danger' }, i)
              : a.a.createElement(
                  ge.a,
                  { onSubmit: w },
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'imageFile' },
                    a.a.createElement(ge.a.Label, null, 'Image File'),
                    a.a.createElement(ge.a.Control, {
                      value: E,
                      onChange: function (e) {
                        return b(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  a.a.createElement(
                    ge.a.Group,
                    { className: 'mb-3', controlId: 'imageFile' },
                    a.a.createElement(ge.a.Label, null, 'Upload Image'),
                    a.a.createElement(ge.a.Control, {
                      type: 'file',
                      onChange: x,
                    }),
                    s && a.a.createElement(z, null)
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'mb-3' },
                    a.a.createElement(
                      y.a,
                      { disabled: u, type: 'submit' },
                      'Update'
                    ),
                    u && a.a.createElement(z, null)
                  )
                )
          )
        );
      }
      var kt = r(105),
        Tt = r(227);
      function Ct(e) {
        var t = e.categories,
          r = Object(n.useState)(!1),
          o = Object(l.a)(r, 2),
          i = o[0],
          c = o[1],
          u = function () {
            return c(!1);
          };
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            y.a,
            {
              variant: 'dark',
              onClick: function () {
                return c(!0);
              },
            },
            a.a.createElement(Tt.a, { size: 40 })
          ),
          a.a.createElement(
            kt.a,
            { show: i, onHide: u },
            a.a.createElement(
              kt.a.Header,
              { closeButton: !0 },
              a.a.createElement(
                kt.a.Title,
                null,
                a.a.createElement(Tt.a, { size: 70 })
              )
            ),
            a.a.createElement(
              kt.a.Body,
              null,
              a.a.createElement(
                h.a,
                { className: 'justify-content-end flex-grow-1 pe-3' },
                t.map(function (e) {
                  return a.a.createElement(
                    h.a.Item,
                    { key: e },
                    a.a.createElement(
                      g.LinkContainer,
                      { to: '/search?category='.concat(e) },
                      a.a.createElement(
                        h.a.Link,
                        { className: 'nav-link-category', onClick: u },
                        e
                      )
                    )
                  );
                })
              )
            )
          )
        );
      }
      function Nt() {
        Nt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, '_invoke', { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (k) {
            return { type: 'throw', arg: k };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(_([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, '_invoke', {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == typeof f && r.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n('next', e, i, c);
                            },
                            function (e) {
                              n('throw', e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = 'suspendedStart';
          return function (a, o) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = L(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var l = s(e, t, r);
              if ('normal' === l.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              'throw' === l.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
            }
          };
        }
        function L(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = l(d, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(g),
          l(g, c, 'Generator'),
          l(g, o, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var It = function () {
          var e = Object(n.useContext)(L),
            t = e.state,
            r = e.dispatch,
            o = t.cart,
            i = t.userInfo,
            u = Object(n.useState)(!1),
            y = Object(l.a)(u, 2),
            b = y[0],
            w = (y[1], Object(n.useState)([])),
            x = Object(l.a)(w, 2),
            O = x[0],
            j = x[1],
            S = Object(n.useState)([]),
            T = Object(l.a)(S, 2),
            C = T[0],
            I = T[1],
            A = Object(n.useState)(!1),
            U = Object(l.a)(A, 2),
            D = U[0],
            R = U[1];
          Object(n.useEffect)(
            function () {
              !(function () {
                var e = Object(c.a)(
                  Nt().mark(function e() {
                    var t, r, n;
                    return Nt().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                N.a.get('/api/products/categories')
                              );
                            case 3:
                              if (((t = e.sent), (r = t.data), j(r), !i)) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.next = 9),
                                N.a.get(
                                  '/api/favorites/peruser/'.concat(i._id),
                                  {
                                    headers: {
                                      Authorization: 'Bearer '.concat(i.token),
                                    },
                                  }
                                )
                              );
                            case 9:
                              (n = e.sent), I(n.data), R(!1);
                            case 12:
                              e.next = 17;
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                _.b.error(k(e.t0));
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [D]
          );
          var H = a.a.useState({ isLogIn: !1, nameOfUser: '', sessionTime: 0 }),
            Q = Object(l.a)(H, 2),
            Y = Q[0],
            B = Q[1],
            q = function (e, t, r, n) {
              B({ isLogIn: e, nameOfUser: t, sessionTime: r, fullname: n });
            },
            z = function () {
              B({ isLogIn: !0 });
            },
            M = function () {
              B({ isLogIn: !0 });
            };
          return (
            a.a.useEffect(
              function () {
                var e = setInterval(function () {
                  console.log(Y);
                }, 1e3);
                return function () {
                  return clearInterval(e);
                };
              },
              [Y]
            ),
            a.a.createElement(
              'div',
              { className: 'd-flex flex-column site-container' },
              a.a.createElement(_.a, { position: 'bottom-center', limit: 1 }),
              a.a.createElement(
                m.BrowserRouter,
                { basename: '/' },
                a.a.createElement(
                  he.a,
                  null,
                  a.a.createElement('title', null, 'Tsioui Webstore')
                ),
                a.a.createElement(s, null),
                a.a.createElement(
                  'div',
                  { className: b ? 'active-cont' : '' },
                  a.a.createElement(
                    f.a,
                    {
                      bg: 'dark',
                      variant: 'dark',
                      sticky: 'top',
                      expand: 'lg',
                      className: 'd-flex',
                    },
                    a.a.createElement(
                      p.a,
                      { fluid: !0 },
                      a.a.createElement(Ct, { categories: O }),
                      a.a.createElement(
                        'div',
                        { className: 'me-auto ms-2  search-form' },
                        a.a.createElement(
                          h.a.Item,
                          null,
                          a.a.createElement(Ve, null)
                        )
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'me-auto  ms-2' },
                        a.a.createElement(
                          g.LinkContainer,
                          { to: '/' },
                          a.a.createElement(
                            f.a.Brand,
                            null,
                            a.a.createElement('img', {
                              alt: '',
                              src: '/logo.svg',
                              width: '30',
                              height: '30',
                              className: 'd-inline-block align-top',
                            }),
                            ' ',
                            'The brand'
                          )
                        )
                      ),
                      i &&
                        i.isAdmin &&
                        a.a.createElement(
                          'div',
                          { className: '  ms-3 fs-6' },
                          a.a.createElement(
                            d.a,
                            { title: 'Admin', id: 'admin-nav-dropdown' },
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/admin/dashboard' },
                              a.a.createElement(d.a.Item, null, 'Dashboard')
                            ),
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/admin/products' },
                              a.a.createElement(d.a.Item, null, 'Products')
                            ),
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/admin/categories' },
                              a.a.createElement(d.a.Item, null, 'Categories')
                            ),
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/admin/orders' },
                              a.a.createElement(d.a.Item, null, 'Orders')
                            ),
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/admin/users' },
                              a.a.createElement(d.a.Item, null, 'Users')
                            )
                          )
                        ),
                      a.a.createElement(
                        'div',
                        { className: ' ms-3' },
                        a.a.createElement(
                          h.a.Item,
                          null,
                          a.a.createElement(
                            h.a.Link,
                            {
                              className: 'headerlink',
                              href: '/signin?redirect=/favourites',
                            },
                            a.a.createElement(v.a, null),
                            C &&
                              C.length > 0 &&
                              a.a.createElement(
                                E.a,
                                { pill: !0, bg: 'danger' },
                                C.length
                              )
                          )
                        )
                      ),
                      a.a.createElement(
                        'div',
                        { className: ' ms-3' },
                        a.a.createElement(
                          h.a.Item,
                          null,
                          a.a.createElement(
                            h.a.Link,
                            { className: 'headerlink', href: '/cart' },
                            a.a.createElement(v.d, null),
                            o.cartItems.length > 0 &&
                              a.a.createElement(
                                E.a,
                                { pill: !0, bg: 'danger' },
                                o.cartItems.reduce(function (e, t) {
                                  return e + t.quantity;
                                }, 0)
                              )
                          )
                        )
                      ),
                      !i &&
                        a.a.createElement(
                          'div',
                          { className: 'ms-3' },
                          a.a.createElement(
                            h.a.Item,
                            null,
                            a.a.createElement(
                              h.a.Link,
                              { className: 'headerlink', href: '/signin' },
                              a.a.createElement(v.e, null)
                            )
                          )
                        ),
                      i &&
                        a.a.createElement(
                          'div',
                          { className: 'ml-auto ms-3' },
                          a.a.createElement(
                            d.a,
                            { title: i.name, id: 'basic-nav-dropdown' },
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/profile' },
                              a.a.createElement(d.a.Item, null, 'User Profile')
                            ),
                            a.a.createElement(
                              g.LinkContainer,
                              { to: '/orderhistory' },
                              a.a.createElement(d.a.Item, null, 'Order History')
                            ),
                            a.a.createElement(d.a.Divider, null),
                            a.a.createElement(
                              m.Link,
                              {
                                className: 'dropdown-item',
                                to: '#signout',
                                onClick: function () {
                                  r({ type: 'USER_SIGNOUT' }),
                                    localStorage.removeItem('userInfo'),
                                    localStorage.removeItem('shippingAddress'),
                                    localStorage.removeItem('cartItems'),
                                    localStorage.removeItem('paymentMethod'),
                                    (window.location.href = '/signin');
                                },
                              },
                              'Sign Out'
                            )
                          )
                        )
                    )
                  ),
                  a.a.createElement(
                    p.a,
                    { fluid: !0, variant: 'dark', className: 'bg-dark' },
                    a.a.createElement(
                      P.a,
                      { className: ' justify-content-center' },
                      a.a.createElement(
                        F.a,
                        { sm: { span: 6, offset: 3 } },
                        a.a.createElement(
                          h.a.Item,
                          { className: 'search-form-mobile' },
                          a.a.createElement(Ve, null)
                        )
                      )
                    )
                  ),
                  a.a.createElement(
                    G.g,
                    null,
                    a.a.createElement(G.e, {
                      path: '/admin/dashboard',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(rt, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/products',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(it, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/orders',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(ht, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/users',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(mt, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/categories',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(Ot, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/product/:id',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(ut, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/user/:id',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(gt, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/admin/category/:id',
                      element: a.a.createElement(
                        nt,
                        null,
                        a.a.createElement(St, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/',
                      element: a.a.createElement(ue, {
                        setIsLogIn: q,
                        setnameOfUser: z,
                        setsessionTime: M,
                        isLogIn: Y,
                      }),
                    }),
                    a.a.createElement(G.e, {
                      path: '/home',
                      element: a.a.createElement(ue, {
                        setIsLogIn: q,
                        setnameOfUser: z,
                        setsessionTime: M,
                        isLogIn: Y,
                      }),
                    }),
                    a.a.createElement(G.e, {
                      path: '/shop',
                      element: a.a.createElement(X, {
                        favoritePressed: D,
                        setfavoritePressed: R,
                      }),
                    }),
                    a.a.createElement(G.e, {
                      path: '/cart',
                      element: a.a.createElement(Se, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/favourites',
                      element: a.a.createElement(wt, {
                        favoritePressed2: D,
                        setfavoritePressed2: R,
                      }),
                    }),
                    a.a.createElement(G.e, {
                      path: '/signIn',
                      element: a.a.createElement(je, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/signup',
                      element: a.a.createElement(Ce, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/profile',
                      element: a.a.createElement(qe, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/placeorder',
                      element: a.a.createElement(
                        Ke,
                        null,
                        a.a.createElement(Fe, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/order/:id',
                      element: a.a.createElement(
                        Ke,
                        null,
                        a.a.createElement(De, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/orderhistory',
                      element: a.a.createElement(
                        Ke,
                        null,
                        a.a.createElement(Qe, null)
                      ),
                    }),
                    a.a.createElement(G.e, {
                      path: '/shipping',
                      element: a.a.createElement(ke, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/payment',
                      element: a.a.createElement(Ne, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/search',
                      element: a.a.createElement(We, {
                        favoritePressed: D,
                        setfavoritePressed: R,
                      }),
                    }),
                    a.a.createElement(G.e, {
                      path: '/shop/product/:slug',
                      element: a.a.createElement(ye, null),
                    }),
                    a.a.createElement(G.e, {
                      path: '/search/product/:slug',
                      element: a.a.createElement(ye, null),
                    })
                  )
                ),
                a.a.createElement(ce, null)
              )
            )
          );
        },
        Pt = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(1)
              .then(r.bind(null, 540))
              .then(function (t) {
                var r = t.getCLS,
                  n = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                r(e), n(e), a(e), o(e), i(e);
              });
        };
      i.a
        .createRoot(document.getElementById('root'))
        .render(
          a.a.createElement(
            a.a.StrictMode,
            null,
            a.a.createElement(
              j,
              null,
              a.a.createElement(
                he.b,
                null,
                a.a.createElement(
                  Ae.b,
                  { deferLoading: !0 },
                  a.a.createElement(It, null)
                )
              )
            )
          )
        ),
        Pt();
    },
  },
  [[317, 3, 2]],
]);
//# sourceMappingURL=main.9bfd46c1.chunk.js.map

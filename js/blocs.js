// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/blocs.js":[function(require,module,exports) {
// Blocs.js Minified
function setUpSpecialNavs() {
  $(".navbar-toggle").click(function (t) {
    var e = $(this).closest("nav"),
        i = e.find("ul.site-navigation"),
        a = i.clone();
    if (i.parent().hasClass("nav-special")) if (t.stopPropagation(), $(this).hasClass("selected-nav")) $(".blocsapp-special-menu blocsnav").removeClass("open"), $(".selected-nav").removeClass("selected-nav"), setTimeout(function () {
      $(".blocsapp-special-menu").remove(), $("body").removeClass("lock-scroll"), $(".selected-nav").removeClass("selected-nav");
    }, 300);else {
      $(this).addClass("selected-nav");
      var o = e.attr("class").replace("navbar", "").replace("row", ""),
          l = i.parent().attr("class").replace("navbar-collapse", "").replace("collapse", "");
      ($(".content-tint").length = -1) && $("body").append('<div class="content-tint"></div>'), a.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu ' + o + '"><blocsnav class="' + l + '">'), $("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'), function () {
        var t = "fadeInRight",
            e = 0,
            i = 60;
        $(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav") ? (t = "fadeIn", i = 100) : $(".blocsapp-special-menu").hasClass("nav-invert") && (t = "fadeInLeft");
        $(".blocsapp-special-menu blocsnav li").each(function () {
          $(this).parent().hasClass("dropdown-menu") ? $(this).addClass("animated fadeIn") : (e += i, $(this).attr("style", "animation-delay:" + e + "ms").addClass("animated " + t));
        });
      }(), setTimeout(function () {
        $(".blocsapp-special-menu blocsnav").addClass("open"), $(".content-tint").addClass("on"), $("body").addClass("lock-scroll");
      }, 10);
    }
  }), $("body").on("mousedown touchstart", ".content-tint, .close-special-menu", function (t) {
    $(".content-tint").removeClass("on"), $(".selected-nav").click(), setTimeout(function () {
      $(".content-tint").remove();
    }, 10);
  }).on("click", ".blocsapp-special-menu a", function (t) {
    $(t.target).closest(".dropdown-toggle").length || $(".close-special-menu").mousedown();
  });
}

function extraNavFuncs() {
  $(".site-navigation a").click(function (t) {
    $(t.target).closest(".dropdown-toggle").length || $(".navbar-collapse").collapse("hide");
  }), $("a.dropdown-toggle").click(function (t) {
    $(this).parent().addClass("target-open-menu"), $(this).closest(".dropdown-menu").find(".dropdown.open").each(function (t) {
      $(this).hasClass("target-open-menu") || $(this).removeClass("open");
    }), $(".target-open-menu").removeClass("target-open-menu");
  });
}

function setFillScreenBlocHeight() {
  $(".bloc-fill-screen").each(function (t) {
    var e = $(this);
    window.fillBodyHeight = 0, $(this).find(".container").each(function (t) {
      fillPadding = 2 * parseInt($(this).css("padding-top")), e.hasClass("bloc-group") ? fillBodyHeight = fillPadding + $(this).outerHeight() + 50 : fillBodyHeight = fillBodyHeight + fillPadding + $(this).outerHeight() + 50;
    }), $(this).css("height", getFillHeight() + "px");
  });
}

function getFillHeight() {
  var t = $(window).height();
  return t < fillBodyHeight && (t = fillBodyHeight + 100), t;
}

function scrollToTarget(t) {
  1 == t ? t = 0 : 2 == t ? t = $(document).height() : (t = $(t).offset().top, $(".sticky-nav").length && (t -= $(".sticky-nav .navbar-header").height())), $("html,body").animate({
    scrollTop: t
  }, "slow"), $(".navbar-collapse").collapse("hide");
}

function animateWhenVisible() {
  hideAll(), inViewCheck(), $(window).scroll(function () {
    inViewCheck(), scrollToTopView(), stickyNavToggle();
  });
}

function setUpDropdownSubs() {
  $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function (t) {
    t.preventDefault(), t.stopPropagation(), $(this).parent().siblings().removeClass("open"), $(this).parent().toggleClass("open");
    var e = $(this).parent().children(".dropdown-menu");
    e.offset().left + e.width() > $(window).width() && e.addClass("dropmenu-flow-right");
  });
}

function stickyNavToggle() {
  var t = 0,
      e = "sticky";

  if ($(".sticky-nav").hasClass("fill-bloc-top-edge")) {
    var i = $(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");
    "rgba(0, 0, 0, 0)" == i && (i = "#FFFFFF"), $(".sticky-nav").css("background", i), t = $(".sticky-nav").height(), e = "sticky animated fadeInDown";
  }

  $(window).scrollTop() > t ? ($(".sticky-nav").addClass(e), "sticky" == e && $(".page-container").css("padding-top", $(".sticky-nav").height())) : ($(".sticky-nav").removeClass(e).removeAttr("style"), $(".page-container").removeAttr("style"));
}

function hideAll() {
  $(".animated").each(function (t) {
    $(this).closest(".hero").length || $(this).removeClass("animated").addClass("hideMe");
  });
}

function inViewCheck() {
  $($(".hideMe").get().reverse()).each(function (t) {
    var e = jQuery(this),
        i = e.offset().top + e.height(),
        a = $(window).scrollTop() + $(window).height();

    if (e.height() > $(window).height() && (i = e.offset().top), i < a) {
      var o = e.attr("class").replace("hideMe", "animated");
      e.css("visibility", "hidden").removeAttr("class"), setTimeout(function () {
        e.attr("class", o).css("visibility", "visible");
      }, .01);
    }
  });
}

function scrollToTopView() {
  $(window).scrollTop() > $(window).height() / 3 ? $(".scrollToTop").hasClass("showScrollTop") || $(".scrollToTop").addClass("showScrollTop") : $(".scrollToTop").removeClass("showScrollTop");
}

function setUpVisibilityToggle() {
  $(document).on("click", "[data-toggle-visibility]", function (t) {
    t.preventDefault();
    var e = $(this).attr("data-toggle-visibility");

    if (-1 != e.indexOf(",")) {
      var i = e.split(",");
      $.each(i, function (t) {
        a($("#" + i[t]));
      });
    } else a($("#" + e));

    function a(t) {
      t.is("img") ? t.toggle() : t.slideToggle();
    }
  });
}

function setUpLightBox() {
  window.targetLightbox, $(document).on("click", "[data-lightbox]", function (t) {
    t.preventDefault(), targetLightbox = $(this);
    var e = targetLightbox.attr("data-lightbox"),
        i = targetLightbox.attr("data-autoplay"),
        a = '<p class="lightbox-caption">' + targetLightbox.attr("data-caption") + "</p>",
        o = "no-gallery-set",
        l = targetLightbox.attr("data-frame");
    targetLightbox.attr("data-gallery-id") && (o = targetLightbox.attr("data-gallery-id")), targetLightbox.attr("data-caption") || (a = "");
    var n = "";
    1 == i && (n = "autoplay");
    var s = $('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content ' + l + ' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="' + e + '"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls ' + n + ' class="embed-responsive-item"><source id="lightbox-video" src="' + e + '" type="video/mp4"></video></div>' + a + "</div></div></div></div>");
    $("body").append(s), "fullscreen-lb" == l && ($("#lightbox-modal").addClass("fullscreen-modal").append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'), $("#blocs-lightbox-close-btn").remove()), ".mp4" == e.substring(e.length - 4) ? ($("#lightbox-image, .lightbox-caption").hide(), $("#lightbox-video-container").show()) : ($("#lightbox-image,.lightbox-caption").show(), $("#lightbox-video-container").hide()), $("#lightbox-modal").modal("show"), "no-gallery-set" == o ? (0 == $("a[data-lightbox]").index(targetLightbox) && $(".prev-lightbox").hide(), $("a[data-lightbox]").index(targetLightbox) == $("a[data-lightbox]").length - 1 && $(".next-lightbox").hide()) : (0 == $('a[data-gallery-id="' + o + '"]').index(targetLightbox) && $(".prev-lightbox").hide(), $('a[data-gallery-id="' + o + '"]').index(targetLightbox) == $('a[data-gallery-id="' + o + '"]').length - 1 && $(".next-lightbox").hide()), addLightBoxSwipeSupport();
  }).on("hidden.bs.modal", "#lightbox-modal", function () {
    $("#lightbox-modal").remove();
  }), $(document).on("click", ".next-lightbox, .prev-lightbox", function (t) {
    t.preventDefault();
    var e = "no-gallery-set",
        i = $("a[data-lightbox]").index(targetLightbox),
        a = $("a[data-lightbox]").eq(i + 1);
    targetLightbox.attr("data-gallery-id") && (e = targetLightbox.attr("data-gallery-id"), i = $('a[data-gallery-id="' + e + '"]').index(targetLightbox), a = $('a[data-gallery-id="' + e + '"]').eq(i + 1)), $(this).hasClass("prev-lightbox") && (a = $('a[data-gallery-id="' + e + '"]').eq(i - 1), "no-gallery-set" == e && (a = $("a[data-lightbox]").eq(i - 1)));
    var o = a.attr("data-lightbox");

    if (".mp4" == o.substring(o.length - 4)) {
      var l = "";
      1 == a.attr("data-autoplay") && (l = "autoplay"), $("#lightbox-image, .lightbox-caption").hide(), $("#lightbox-video-container").show().html("<video controls " + l + ' class="embed-responsive-item"><source id="lightbox-video" src="' + o + '" type="video/mp4"></video>');
    } else $("#lightbox-image").attr("src", o).show(), $(".lightbox-caption").html(a.attr("data-caption")).show(), $("#lightbox-video-container").hide();

    targetLightbox = a, $(".next-lightbox, .prev-lightbox").hide(), "no-gallery-set" == e ? ($("a[data-lightbox]").index(a) != $("a[data-lightbox]").length - 1 && $(".next-lightbox").show(), $("a[data-lightbox]").index(a) > 0 && $(".prev-lightbox").show()) : ($('a[data-gallery-id="' + e + '"]').index(a) != $('a[data-gallery-id="' + e + '"]').length - 1 && $(".next-lightbox").show(), $('a[data-gallery-id="' + e + '"]').index(a) > 0 && $(".prev-lightbox").show());
  });
}

function addSwipeSupport() {
  $(".carousel-inner").length && $(".carousel-inner").swipe({
    swipeLeft: function swipeLeft(t, e, i, a, o) {
      $(this).parent().carousel("next");
    },
    swipeRight: function swipeRight() {
      $(this).parent().carousel("prev");
    },
    threshold: 0
  });
}

function addKeyBoardSupport() {
  $(window).keydown(function (t) {
    37 == t.which ? $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click() : 39 == t.which && $(".next-lightbox").is(":visible") && $(".next-lightbox").click();
  });
}

function addLightBoxSwipeSupport() {
  $("#lightbox-image").length && $("#lightbox-image").swipe({
    swipeLeft: function swipeLeft(t, e, i, a, o) {
      $(".next-lightbox").is(":visible") && $(".next-lightbox").click();
    },
    swipeRight: function swipeRight() {
      $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click();
    },
    threshold: 0
  });
}

$(document).ready(function () {
  $("#scroll-hero").click(function (t) {
    t.preventDefault(), $("html,body").animate({
      scrollTop: $("#scroll-hero").closest(".bloc").height()
    }, "slow");
  }), extraNavFuncs(), setUpSpecialNavs(), setUpDropdownSubs(), setUpLightBox(), setUpVisibilityToggle(), addSwipeSupport(), addKeyBoardSupport(), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $("#page-loading-blocs-notifaction").remove();
}), $(window).load(function () {
  setFillScreenBlocHeight(), animateWhenVisible(), $("#page-loading-blocs-notifaction").remove();
}).resize(function () {
  setFillScreenBlocHeight();
}), $(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
},{}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49985" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/blocs.js"], null)
//# sourceMappingURL=/blocs.e6cdcc4c.js.map
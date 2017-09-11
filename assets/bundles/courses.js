webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.clamp = clamp;
/**
 * Capitalize first letter of string
 * @private
 * @param  {string} - String
 * @return {string} - String with first letter capitalized
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

/**
 * Clamp position between a range
 * @param  {number} - Value to be clamped
 * @param  {number} - Minimum value in range
 * @param  {number} - Maximum value in range
 * @return {number} - Clamped value
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var SwitchButton = _react2['default'].createClass({

  // Display name
  displayName: 'Switch Button',

  // Version
  version: '2.2.2',

  /**
   * The props types.
   */
  propTypes: {
    id: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    label: _react2['default'].PropTypes.string,
    labelRight: _react2['default'].PropTypes.string,
    defaultChecked: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    theme: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.string,
    mode: _react2['default'].PropTypes.string,
    onChange: _react2['default'].PropTypes.func
  },

  /**
   * Default props.
   *
   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      name: 'switch-button',
      title: '',
      label: '',
      labelRight: '',
      disabled: false,
      defaultChecked: false,
      theme: 'rsbc-switch-button-flat-round',
      checked: null,
      mode: "switch",
      onChange: this.handleChange
    };
  },

  // Handle change
  handleChange: function handleChange() {
    // Override
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render: function render() {
    var id = undefined,
        label = undefined,
        labelRight = undefined,
        mode = this.props.mode || "switch";

    if (this.props.id === '' && this.props.name !== '') {
      id = this.props.name;
    }

    if (this.props.label !== '') {
      label = _react2['default'].createElement(
        'label',
        { htmlFor: id },
        this.props.label
      );
    }

    if (this.props.labelRight !== '') {
      labelRight = _react2['default'].createElement(
        'label',
        { htmlFor: id },
        this.props.labelRight
      );
    }

    if (['switch', 'select'].indexOf(mode) < -1) {
      mode = "switch";
    }

    return _react2['default'].createElement(
      'div',
      { className: 'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + (this.props.disabled ? " disabled" : "") },
      label,
      _react2['default'].createElement('input', { onChange: this.props.onChange,
        defaultChecked: this.props.defaultChecked,
        disabled: this.props.disabled,
        id: id, name: this.props.name,
        type: 'checkbox',
        value: '1' }),
      _react2['default'].createElement('label', { htmlFor: id }),
      labelRight
    );
  }

});

exports['default'] = SwitchButton;
module.exports = exports['default'];

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map != 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: {} };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window != 'undefined' && typeof document != 'undefined' && window.document === document;

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame;
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Detect whether running in IE 11 (facepalm).
var isIE11 = typeof navigator != 'undefined' && /Trident\/.*rv:11/.test(navigator.userAgent);

// MutationObserver should not be used if running in Internet Explorer 11 as it's
// implementation is unreliable. Example: https://jsfiddle.net/x2r3jpuz/2/
//
// It's a real bummer that there is no other way to check for this issue but to
// use the UA information.
var mutationObserverSupported = typeof MutationObserver != 'undefined' && !isIE11;

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;

    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;

    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;

    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName;

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */
ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = Array.prototype.slice.call(arguments, 1);

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement != 'undefined') {
        return function (target) { return target instanceof SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;

    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;

    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    /**
     * Reference to the observed element.
     *
     * @type {Element}
     */
    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];

    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();

    /**
     * Reference to the callback function.
     *
     * @private {ResizeObserverCallback}
     */
    this.callback_ = callback;

    /**
     * Reference to the associated ResizeObserverController.
     *
     * @private {ResizeObserverController}
     */
    this.controller_ = controller;

    /**
     * Public ResizeObserver instance which will be passed to the callback
     * function and used as a value of it's "this" binding.
     *
     * @private {ResizeObserver}
     */
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap != 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver$1 = function(callback) {
    if (!(this instanceof ResizeObserver$1)) {
        throw new TypeError('Cannot call a class as a function');
    }

    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver$1.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof ResizeObserver != 'undefined') {
        // eslint-disable-next-line no-undef
        return ResizeObserver;
    }

    return ResizeObserver$1;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(36)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(36)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./react-switch-button.css", function() {
			var newContent = require("!!../../css-loader/index.js!./react-switch-button.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Search = __webpack_require__(37);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Search2.default, { searchSubject: 'courses' }), document.getElementById('search-courses-component'));

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxWithLabel = function CheckboxWithLabel(_ref) {
  var name = _ref.name,
      classes = _ref.classes,
      label = _ref.label,
      handleChange = _ref.handleChange,
      checked = _ref.checked;

  var onChange = function onChange(e) {
    handleChange(e.currentTarget.checked);
  };

  return _react2.default.createElement(
    "div",
    { className: "checkbox-with-label label-right " + classes },
    _react2.default.createElement("input", {
      type: "checkbox",
      name: name,
      id: name,
      onChange: onChange,
      checked: checked
    }),
    _react2.default.createElement(
      "label",
      { htmlFor: name },
      label
    )
  );
};

exports.default = CheckboxWithLabel;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SearchTag = __webpack_require__(66);

var _SearchTag2 = _interopRequireDefault(_SearchTag);

var _constants = __webpack_require__(13);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchTags = function SearchTags(props) {
  var generateQueryTag = function generateQueryTag() {
    if (props.q) {
      var onDelete = function onDelete(value) {
        props.updateQueryParams({ q: null });
      };

      return [_react2.default.createElement(
        'span',
        { key: 'queryTagIntro' },
        'the search query'
      ), _react2.default.createElement(_SearchTag2.default, { key: 'queryTag-0', value: props.q, onDelete: onDelete })];
    }
  };

  var generateTeamNameTag = function generateTeamNameTag() {
    if (props.teamName) {
      var onDelete = function onDelete(value) {
        props.updateQueryParams({ teamName: null, team_id: null });
        document.getElementById('team-title').style.display = 'none';
        document.getElementById('search-subtitle').style.display = 'block';
      };
      var humanReadableName = decodeURIComponent(props.teamName);

      return [_react2.default.createElement(
        'span',
        { key: 'queryTagIntro' },
        'organized by'
      ), _react2.default.createElement(_SearchTag2.default, { key: 'queryTag-0', value: humanReadableName, onDelete: onDelete })];
    }
  };

  var generateTopicsTags = function generateTopicsTags() {
    if (props.topics && props.topics.length > 0) {
      var onDelete = function onDelete(value) {
        var newTopicsArray = _lodash2.default.without(props.topics, value);
        var topics = newTopicsArray.length > 0 ? newTopicsArray : null;
        props.updateQueryParams({ topics: topics });
      };

      var introPhrase = props.topics.length === 1 ? 'the topic' : 'the topics';
      var topicsTagsArray = [_react2.default.createElement(
        'span',
        { key: 'topicTagIntro' },
        introPhrase
      )];

      props.topics.map(function (item, index) {
        if (props.topics.length > 1 && index === props.topics.length - 1) {
          topicsTagsArray.push(_react2.default.createElement(
            'span',
            { key: 'topicTag-' + (index + 2) },
            'or'
          ));
        }

        topicsTagsArray.push(_react2.default.createElement(_SearchTag2.default, { value: item, key: 'topicTag-' + index, onDelete: onDelete }));
      });

      return topicsTagsArray;
    }
  };

  var generateLocationTag = function generateLocationTag() {
    if (props.latitude && props.longitude) {
      var unit = props.useMiles ? 'miles' : 'km';
      var value = props.useMiles ? props.distance * 0.62 : props.distance;
      var roundedValue = Math.round(value / 10) * 10;
      var text = 'Within ' + roundedValue + ' ' + unit + ' of your location';
      var onDelete = function onDelete(value) {
        props.updateQueryParams({ latitude: null, longitude: null, distance: 50 });
      };
      return [_react2.default.createElement(
        'span',
        { key: 'locationTagIntro' },
        'located'
      ), _react2.default.createElement(_SearchTag2.default, { key: 'locationTag-0', value: text, onDelete: onDelete })];
    } else if (props.city) {
      var _onDelete = function _onDelete(value) {
        props.updateQueryParams({ city: null });
      };
      return [_react2.default.createElement(
        'span',
        { key: 'locationTagIntro' },
        'located in'
      ), _react2.default.createElement(_SearchTag2.default, { key: 'locationTag-0', value: props.city, onDelete: _onDelete })];
    }
  };

  var generateMeetingDaysTags = function generateMeetingDaysTags() {
    if (props.weekdays && props.weekdays.length > 0) {
      var onDelete = function onDelete(day) {
        var dayIndex = _constants.MEETING_DAYS.indexOf(day);
        var newWeekdayArray = _lodash2.default.without(props.weekdays, dayIndex);
        var weekdays = newWeekdayArray.length > 0 ? newWeekdayArray : null;
        props.updateQueryParams({ weekdays: weekdays });
      };

      var weekdayTagsArray = [_react2.default.createElement(
        'span',
        { key: 'weekdayTagIntro' },
        'meeting on'
      )];

      props.weekdays.map(function (dayIndex, index) {
        var weekdayName = _constants.MEETING_DAYS[dayIndex];

        if (props.weekdays.length > 1 && index === props.weekdays.length - 1) {
          weekdayTagsArray.push(_react2.default.createElement(
            'span',
            { key: 'weekdayTag-' + (index + 2) },
            'or'
          ));
        }

        weekdayTagsArray.push(_react2.default.createElement(_SearchTag2.default, { value: weekdayName, key: 'weekdatTag-' + index, onDelete: onDelete }));
      });

      return weekdayTagsArray;
    }
  };

  var generateTagsPhrase = function generateTagsPhrase(tag) {
    switch (tag) {
      case 'q':
        return generateQueryTag();
      case 'topics':
        return generateTopicsTags();
      case 'location':
        return generateLocationTag();
      case 'meetingDays':
        return generateMeetingDaysTags();
      case 'teamName':
        return generateTeamNameTag();
    }
  };

  var generateSearchSummary = function generateSearchSummary() {
    var results = props.data.length === 1 ? 'result' : 'results';
    var forSearchSubject = _react2.default.createElement(
      'span',
      { key: 'resultsSummary-1' },
      'for ',
      _constants.SEARCH_SUBJECTS[props.searchSubject]
    );
    var withSpan = _react2.default.createElement(
      'span',
      { key: 'resultsSummary-2' },
      'with'
    );
    var tagsToDisplay = ['q', 'topics', 'location', 'meetingDays', 'teamName'];

    var searchSummaryItems = [_react2.default.createElement(
      'span',
      { key: 'resultsSummary-0' },
      'Showing ',
      props.data.length,
      ' ',
      results
    )];

    tagsToDisplay.map(function (tag) {
      var tagsArray = generateTagsPhrase(tag);

      if (!!tagsArray) {
        if (searchSummaryItems.length === 1) {
          searchSummaryItems.push(forSearchSubject);
          if (tag === 'q' || tag === 'topics') {
            searchSummaryItems.push(withSpan);
          }
        } else {
          searchSummaryItems.push(_react2.default.createElement(
            'span',
            { key: 'resultsSummary-' + searchSummaryItems.length },
            'and'
          ));
        }
        searchSummaryItems.push(tagsArray);
      }
    });

    return searchSummaryItems;
  };

  return _react2.default.createElement(
    'div',
    { className: 'results-summary' },
    _react2.default.createElement(
      'div',
      { className: 'search-tags wrapper' },
      generateSearchSummary()
    )
  );
};

exports.default = SearchTags;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SearchBar = __webpack_require__(65);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _FiltersSection = __webpack_require__(60);

var _FiltersSection2 = _interopRequireDefault(_FiltersSection);

var _ResultsDisplay = __webpack_require__(64);

var _ResultsDisplay2 = _interopRequireDefault(_ResultsDisplay);

var _SearchTags = __webpack_require__(29);

var _SearchTags2 = _interopRequireDefault(_SearchTags);

var _constants = __webpack_require__(13);

var _ApiHelper = __webpack_require__(30);

var _ApiHelper2 = _interopRequireDefault(_ApiHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    var urlParams = new URL(window.location.href).searchParams;
    _this.state = {
      searchResults: [],
      distance: 50,
      useMiles: false,
      teamName: urlParams.get('team'),
      team_id: urlParams.get('team_id')
    };
    _this.handleChange = function (s) {
      return _this._handleChange(s);
    };
    _this.handleInputChange = function () {
      return _this._handleInputChange();
    };
    _this.handleSearchBarSubmit = function (query) {
      return _this._handleSearchBarSubmit(query);
    };
    _this.searchCallback = function (response, opts) {
      return _this._searchCallback(response, opts);
    };
    _this.updateQueryParams = function (params) {
      return _this._updateQueryParams(params);
    };
    _this.sendQuery = function () {
      return _this._sendQuery();
    };
    _this.fetchCourseCategories = function () {
      return _this._fetchCourseCategories();
    };
    _this.loadInitialData = function () {
      return _this._loadInitialData();
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadInitialData();
    }
  }, {
    key: '_loadInitialData',
    value: function _loadInitialData() {
      this.updateQueryParams({ active: true, order: 'title', team_id: this.state.team_id });
    }
  }, {
    key: '_sendQuery',
    value: function _sendQuery() {
      var params = this.state;
      var opts = { params: params, callback: this.searchCallback };
      var api = new _ApiHelper2.default(this.props.searchSubject);

      api.fetchResource(opts);
    }
  }, {
    key: '_updateQueryParams',
    value: function _updateQueryParams(params) {
      this.setState(params, this.sendQuery);
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(selected) {
      var query = selected ? selected.label : selected;
      this.props.searchByLocation(query);
      this.setState({ value: selected });
    }
  }, {
    key: '_handleInputChange',
    value: function _handleInputChange() {
      this.props.clearResults();
    }
  }, {
    key: '_searchCallback',
    value: function _searchCallback(response, opts) {
      var results = opts.appendResults ? this.state.searchResults.concat(response.items) : response.items;

      this.setState({
        searchResults: results,
        currentQuery: opts.params,
        totalResults: response.count
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var filterCollection = _constants.SEARCH_PROPS[this.props.searchSubject].filters;
      var placeholder = _constants.SEARCH_PROPS[this.props.searchSubject].placeholder;
      var resultsSubtitle = _constants.SEARCH_PROPS[this.props.searchSubject].resultsSubtitle;

      return _react2.default.createElement(
        'div',
        { className: 'search-container' },
        _react2.default.createElement(_SearchBar2.default, {
          placeholder: placeholder,
          updateQueryParams: this.updateQueryParams
        }),
        _react2.default.createElement(_FiltersSection2.default, _extends({
          filterCollection: filterCollection,
          updateQueryParams: this.updateQueryParams
        }, this.state)),
        _react2.default.createElement(_ResultsDisplay2.default, _extends({
          resultsSubtitle: resultsSubtitle,
          data: this.state.searchResults,
          updateQueryParams: this.updateQueryParams
        }, this.state, this.props))
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMasonryComponent = __webpack_require__(97);

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _CourseCard = __webpack_require__(57);

var _CourseCard2 = _interopRequireDefault(_CourseCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowseCourses = function BrowseCourses(props) {
  return _react2.default.createElement(
    _reactMasonryComponent2.default,
    { className: "search-results row grid" },
    props.courses.map(function (course, index) {
      return _react2.default.createElement(_CourseCard2.default, {
        key: index,
        course: course
      });
    })
  );
};

exports.default = BrowseCourses;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UsageBadge = __webpack_require__(68);

var _UsageBadge2 = _interopRequireDefault(_UsageBadge);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseCard = function CourseCard(props) {

  var feedbackPage = 'https://etherpad.p2pu.org/p/course-feedback-' + props.course.id;
  var selectCourse = 'https://learningcircles.p2pu.org/en/facilitator/study_group/create/?course_id=' + props.course.id;
  var topicsList = _lodash2.default.take(props.course.topics, 4).join(', ');
  var availability = props.course.on_demand ? 'Course available on demand' : 'Check course availability';

  return _react2.default.createElement(
    'div',
    { className: 'result-item grid-item col-md-4 col-sm-12 col-xs-12' },
    _react2.default.createElement(
      'div',
      { className: 'course-card col-xs-12' },
      _react2.default.createElement(_UsageBadge2.default, { number: props.course.learning_circles }),
      _react2.default.createElement(
        'h4',
        { className: 'title' },
        props.course.title
      ),
      _react2.default.createElement(
        'p',
        { className: 'caption' },
        props.course.caption
      ),
      _react2.default.createElement(
        'p',
        { className: 'provider' },
        'Provided by ' + props.course.provider
      ),
      _react2.default.createElement(
        'p',
        { className: 'availability' },
        availability
      ),
      _react2.default.createElement(
        'p',
        { className: 'tags' },
        'Topics: ' + topicsList
      ),
      _react2.default.createElement(
        'div',
        { className: 'actions' },
        _react2.default.createElement(
          'a',
          { href: props.course.link, className: '', target: '_blank' },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'open_in_new'
          ),
          'See the course'
        ),
        _react2.default.createElement(
          'a',
          { href: feedbackPage, className: '', target: '_blank' },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'open_in_new'
          ),
          'Facilitator feedback'
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'cta' },
        _react2.default.createElement(
          'a',
          { href: selectCourse, className: 'btn p2pu-btn transparent' },
          'Start a learning circle'
        )
      )
    )
  );
};

exports.default = CourseCard;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
  var filter = _ref.filter,
      active = _ref.active,
      updateActiveFilter = _ref.updateActiveFilter;

  var filterNames = {
    'location': 'Location',
    'topics': 'Topics',
    'meetingDays': 'Meeting Day(s)',
    'orderCourses': 'Order by'
  };

  var iconName = active ? 'remove' : 'add';

  var activeClass = active ? 'active' : '';

  var handleClick = function handleClick() {
    var newValue = active ? '' : filter;
    updateActiveFilter(newValue);
  };

  return _react2.default.createElement(
    'div',
    { className: 'filter ' + activeClass, onClick: handleClick },
    filterNames[filter],
    _react2.default.createElement(
      'i',
      { className: 'material-icons' },
      iconName
    )
  );
};

exports.default = Filter;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LocationFilterForm = __webpack_require__(61);

var _LocationFilterForm2 = _interopRequireDefault(_LocationFilterForm);

var _TopicsFilterForm = __webpack_require__(67);

var _TopicsFilterForm2 = _interopRequireDefault(_TopicsFilterForm);

var _MeetingDaysFilterForm = __webpack_require__(62);

var _MeetingDaysFilterForm2 = _interopRequireDefault(_MeetingDaysFilterForm);

var _OrderCoursesForm = __webpack_require__(63);

var _OrderCoursesForm2 = _interopRequireDefault(_OrderCoursesForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterForm = function (_Component) {
  _inherits(FilterForm, _Component);

  function FilterForm(props) {
    _classCallCheck(this, FilterForm);

    var _this = _possibleConstructorReturn(this, (FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).call(this, props));

    _this.generateFilterForm = function () {
      return _this._generateFilterForm();
    };
    return _this;
  }

  _createClass(FilterForm, [{
    key: '_generateFilterForm',
    value: function _generateFilterForm() {
      switch (this.props.activeFilter) {
        case 'location':
          return _react2.default.createElement(_LocationFilterForm2.default, this.props);
        case 'topics':
          return _react2.default.createElement(_TopicsFilterForm2.default, this.props);
        case 'meetingDays':
          return _react2.default.createElement(_MeetingDaysFilterForm2.default, this.props);
        case 'orderCourses':
          return _react2.default.createElement(_OrderCoursesForm2.default, this.props);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var openClass = this.props.activeFilter ? 'open' : '';

      return _react2.default.createElement(
        'div',
        { className: 'filter-form-dropdown col-sm-12 ' + openClass },
        this.generateFilterForm()
      );
    }
  }]);

  return FilterForm;
}(_react.Component);

exports.default = FilterForm;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Filter = __webpack_require__(58);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterForm = __webpack_require__(59);

var _FilterForm2 = _interopRequireDefault(_FilterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSection = function (_Component) {
  _inherits(FilterSection, _Component);

  function FilterSection(props) {
    _classCallCheck(this, FilterSection);

    var _this = _possibleConstructorReturn(this, (FilterSection.__proto__ || Object.getPrototypeOf(FilterSection)).call(this, props));

    _this.state = { activeFilter: '' };
    _this.updateActiveFilter = function (filter) {
      return _this._updateActiveFilter(filter);
    };
    return _this;
  }

  _createClass(FilterSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ activeFilter: this.props.filterCollection[0] });
    }
  }, {
    key: '_updateActiveFilter',
    value: function _updateActiveFilter(filter) {
      this.setState({ activeFilter: filter });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isMobile = screen.width < 768;

      return _react2.default.createElement(
        'div',
        { className: 'filter-section' },
        _react2.default.createElement(
          'div',
          { className: 'filters-bar' },
          this.props.filterCollection.map(function (filter, index) {
            var isActive = _this2.state.activeFilter === filter;
            return _react2.default.createElement(
              'div',
              { key: index, className: 'wrapper' },
              _react2.default.createElement(_Filter2.default, {
                filter: filter,
                active: isActive,
                updateActiveFilter: _this2.updateActiveFilter
              }),
              isMobile && isActive && _react2.default.createElement(_FilterForm2.default, _extends({
                activeFilter: _this2.state.activeFilter
              }, _this2.props))
            );
          })
        ),
        !isMobile && _react2.default.createElement(_FilterForm2.default, _extends({
          activeFilter: this.state.activeFilter
        }, this.props))
      );
    }
  }]);

  return FilterSection;
}(_react.Component);

exports.default = FilterSection;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CheckboxWithLabel = __webpack_require__(19);

var _CheckboxWithLabel2 = _interopRequireDefault(_CheckboxWithLabel);

var _CitySelect = __webpack_require__(56);

var _CitySelect2 = _interopRequireDefault(_CitySelect);

var _RangeSliderWithLabel = __webpack_require__(69);

var _RangeSliderWithLabel2 = _interopRequireDefault(_RangeSliderWithLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationFilterForm = function (_Component) {
  _inherits(LocationFilterForm, _Component);

  function LocationFilterForm(props) {
    _classCallCheck(this, LocationFilterForm);

    var _this = _possibleConstructorReturn(this, (LocationFilterForm.__proto__ || Object.getPrototypeOf(LocationFilterForm)).call(this, props));

    _this.state = { useLocation: false };
    _this.getLocation = function (checkboxValue) {
      return _this._getLocation(checkboxValue);
    };
    _this.handleCitySelect = function (city) {
      return _this._handleCitySelect(city);
    };
    _this.handleRangeChange = function (value) {
      return _this._handleRangeChange(value);
    };
    _this.generateLocationLabel = function () {
      return _this._generateLocationLabel();
    };
    _this.detectDistanceUnit = function (lat, lon) {
      return _this._detectDistanceUnit(lat, lon);
    };
    _this.generateDistanceValue = function () {
      return _this._generateDistanceValue();
    };
    _this.generateDistanceSliderLabel = function () {
      return _this._generateDistanceSliderLabel();
    };
    return _this;
  }

  _createClass(LocationFilterForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        if (nextProps.latitude === null && nextProps.longitude === null) {
          this.setState({ useLocation: false });
        }
      }
    }
  }, {
    key: '_getLocation',
    value: function _getLocation(checkboxValue) {
      var _this2 = this;

      this.setState({ gettingLocation: checkboxValue, useLocation: checkboxValue });

      if (checkboxValue === false) {
        this.props.updateQueryParams({ latitude: null, longitude: null, useLocation: checkboxValue });
        return;
      }

      var success = function success(position) {
        _this2.props.updateQueryParams({ latitude: position.coords.latitude, longitude: position.coords.longitude, city: null });
        _this2.detectDistanceUnit(position.coords.latitude, position.coords.longitude);
        _this2.setState({ gettingLocation: false });
      };

      var error = function error() {
        _this2.setState({ error: 'Unable to detect location.' });
      };

      var options = {
        timeout: 10000,
        maximumAge: 60000
      };

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        this.setState({ error: 'Geolocation is not supported by this browser.' });
      }
    }
  }, {
    key: '_detectDistanceUnit',
    value: function _detectDistanceUnit(lat, lon) {
      var _this3 = this;

      var countriesUsingMiles = ['US', 'GB', 'LR', 'MM'];
      var url = 'http://ws.geonames.org/countryCodeJSON?lat=' + lat + '&lng=' + lon + '&username=p2pu';

      $.getJSON(url, function (res) {
        var useMiles = countriesUsingMiles.indexOf(res.countryCode) >= 0;
        _this3.props.updateQueryParams({ useMiles: useMiles });
      });
    }
  }, {
    key: '_generateLocationLabel',
    value: function _generateLocationLabel() {
      var label = 'Use my current location';

      if (this.state.error) {
        label = this.state.error;
      } else if (this.state.gettingLocation) {
        label = 'Detecting your location...';
      } else if (!this.state.gettingLocation && this.props.latitude && this.props.longitude) {
        label = 'Using your current location';
      }

      return label;
    }
  }, {
    key: '_handleCitySelect',
    value: function _handleCitySelect(city) {
      this.props.updateQueryParams({ city: city, latitude: null, longitude: null, distance: 50 });
      this.setState({ useLocation: false });
    }
  }, {
    key: '_handleRangeChange',
    value: function _handleRangeChange(value) {
      var distance = value;
      if (this.props.useMiles) {
        distance = value * 1.6;
      }
      this.props.updateQueryParams({ distance: distance });
    }
  }, {
    key: '_generateDistanceSliderLabel',
    value: function _generateDistanceSliderLabel() {
      var unit = this.props.useMiles ? 'miles' : 'km';
      var value = this.generateDistanceValue();
      return 'Within ' + value + ' ' + unit;
    }
  }, {
    key: '_generateDistanceValue',
    value: function _generateDistanceValue() {
      var value = this.props.useMiles ? this.props.distance * 0.62 : this.props.distance;
      return Math.round(value / 10) * 10;
    }
  }, {
    key: 'render',
    value: function render() {
      var distanceSliderLabel = this.generateDistanceSliderLabel();
      var distanceValue = this.generateDistanceValue();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_CheckboxWithLabel2.default, {
          classes: 'col-sm-12',
          name: 'geolocation',
          label: this.generateLocationLabel(),
          checked: this.state.useLocation,
          handleChange: this.getLocation
        }),
        _react2.default.createElement(_RangeSliderWithLabel2.default, {
          classes: 'col-sm-12',
          label: distanceSliderLabel,
          name: 'distance-slider',
          value: distanceValue,
          handleChange: this.handleRangeChange,
          min: 10,
          max: 150,
          step: 10,
          disabled: !this.state.useLocation
        }),
        _react2.default.createElement(
          'div',
          { className: 'divider col-sm-12' },
          _react2.default.createElement('div', { className: 'divider-line' }),
          _react2.default.createElement(
            'div',
            { className: 'divider-text' },
            'or'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'select-with-label label-left col-sm-12' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'select-city' },
            'Select a location:'
          ),
          _react2.default.createElement(_CitySelect2.default, {
            classes: '',
            name: 'select-city',
            label: 'Select a location',
            value: this.props.city,
            handleSelect: this.handleCitySelect
          })
        )
      );
    }
  }]);

  return LocationFilterForm;
}(_react.Component);

exports.default = LocationFilterForm;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CheckboxWithLabel = __webpack_require__(19);

var _CheckboxWithLabel2 = _interopRequireDefault(_CheckboxWithLabel);

var _constants = __webpack_require__(13);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeetingDaysFilterForm = function (_Component) {
  _inherits(MeetingDaysFilterForm, _Component);

  function MeetingDaysFilterForm(props) {
    _classCallCheck(this, MeetingDaysFilterForm);

    var _this = _possibleConstructorReturn(this, (MeetingDaysFilterForm.__proto__ || Object.getPrototypeOf(MeetingDaysFilterForm)).call(this, props));

    _this.generateChangeHandler = function (day) {
      return _this._generateChangeHandler(day);
    };
    return _this;
  }

  _createClass(MeetingDaysFilterForm, [{
    key: '_generateChangeHandler',
    value: function _generateChangeHandler(dayIndex) {
      var _this2 = this;

      return function (checked) {
        var newWeekdayList = _this2.props.weekdays || [];

        if (checked) {
          newWeekdayList.push(dayIndex);
        } else {
          newWeekdayList = _lodash2.default.pull(newWeekdayList, dayIndex);
        }

        console.log('newWeekdayList', newWeekdayList);
        _this2.props.updateQueryParams({ weekdays: newWeekdayList });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _constants.MEETING_DAYS.map(function (day, index) {
          var checked = _this3.props.weekdays && _this3.props.weekdays.indexOf(index) !== -1;
          return _react2.default.createElement(_CheckboxWithLabel2.default, {
            key: index,
            classes: 'col-sm-12 col-md-6 col-lg-6',
            name: day,
            value: index,
            label: day,
            checked: checked,
            handleChange: _this3.generateChangeHandler(index)
          });
        })
      );
    }
  }]);

  return MeetingDaysFilterForm;
}(_react.Component);

exports.default = MeetingDaysFilterForm;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactSwitchButton = __webpack_require__(101);

var _reactSwitchButton2 = _interopRequireDefault(_reactSwitchButton);

var _reactSwitchButton3 = __webpack_require__(106);

var _reactSwitchButton4 = _interopRequireDefault(_reactSwitchButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderCoursesForm = function OrderCoursesForm(props) {
  var _React$createElement;

  var formValues = {
    true: {
      label: 'Use in learning circles',
      value: 'usage'
    },
    false: {
      label: 'Course title',
      value: 'title'
    }
  };

  var handleSelect = function handleSelect(e) {
    var order = formValues[e.currentTarget.checked].value;
    props.updateQueryParams({ order: order });
  };

  var defaultChecked = props.order && props.order === formValues.true.value;

  return _react2.default.createElement(_reactSwitchButton2.default, (_React$createElement = {
    name: 'order-courses',
    label: 'Switch mode',
    mode: 'select',
    labelRight: formValues.true.label
  }, _defineProperty(_React$createElement, 'label', formValues.false.label), _defineProperty(_React$createElement, 'onChange', handleSelect), _defineProperty(_React$createElement, 'defaultChecked', defaultChecked), _React$createElement));
};

exports.default = OrderCoursesForm;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _BrowseLearningCircles = __webpack_require__(55);

var _BrowseLearningCircles2 = _interopRequireDefault(_BrowseLearningCircles);

var _BrowseCourses = __webpack_require__(54);

var _BrowseCourses2 = _interopRequireDefault(_BrowseCourses);

var _SearchTags = __webpack_require__(29);

var _SearchTags2 = _interopRequireDefault(_SearchTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsDisplay = function ResultsDisplay(props) {
  var renderResults = function renderResults() {
    if (props.searchSubject === 'courses') {
      return _react2.default.createElement(_BrowseCourses2.default, { courses: props.data });
    } else {
      return _react2.default.createElement(_BrowseLearningCircles2.default, { learningCircles: props.data });
    }
  };

  return _react2.default.createElement(
    'div',
    { className: 'search-results col-sm-12' },
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'div',
        { className: 'subtitle' },
        _react2.default.createElement(
          'div',
          { className: 'underline dark' },
          _react2.default.createElement(
            'div',
            { className: 'text' },
            _react2.default.createElement(
              'h3',
              null,
              'Results'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_SearchTags2.default, props),
    renderResults()
  );
};

exports.default = ResultsDisplay;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBar = function SearchBar(_ref) {
  var placeholder = _ref.placeholder,
      updateQueryParams = _ref.updateQueryParams;

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var query = document.querySelector('.search-input').value;

    updateQueryParams({ q: query });
    e.currentTarget.reset();
  };

  return _react2.default.createElement(
    'form',
    { className: 'search-bar col-sm-12', onSubmit: onSubmit },
    _react2.default.createElement(
      'div',
      { className: 'wrapper' },
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'search'
      ),
      _react2.default.createElement('input', { className: 'search-input', placeholder: placeholder })
    ),
    _react2.default.createElement(
      'button',
      { className: 'p2pu-btn light', type: 'submit' },
      'Search'
    )
  );
};

exports.default = SearchBar;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchTag = function SearchTag(_ref) {
  var value = _ref.value,
      onDelete = _ref.onDelete;

  return _react2.default.createElement(
    'div',
    { className: 'search-tag' },
    value,
    _react2.default.createElement(
      'i',
      { className: 'material-icons', onClick: function onClick() {
          return onDelete(value);
        } },
      'clear'
    )
  );
};

exports.default = SearchTag;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CheckboxWithLabel = __webpack_require__(19);

var _CheckboxWithLabel2 = _interopRequireDefault(_CheckboxWithLabel);

var _reactSelect = __webpack_require__(26);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactSelect3 = __webpack_require__(105);

var _reactSelect4 = _interopRequireDefault(_reactSelect3);

var _constants = __webpack_require__(13);

var _ApiHelper = __webpack_require__(30);

var _ApiHelper2 = _interopRequireDefault(_ApiHelper);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicsFilterForm = function (_Component) {
  _inherits(TopicsFilterForm, _Component);

  function TopicsFilterForm(props) {
    _classCallCheck(this, TopicsFilterForm);

    var _this = _possibleConstructorReturn(this, (TopicsFilterForm.__proto__ || Object.getPrototypeOf(TopicsFilterForm)).call(this, props));

    _this.state = { topics: [], options: [] };
    _this.generateChangeHandler = function (category) {
      return _this._generateChangeHandler(category);
    };
    _this.handleSelect = function (selected) {
      return _this._handleSelect(selected);
    };
    _this.fetchTopics = function () {
      return _this._fetchTopics();
    };
    return _this;
  }

  _createClass(TopicsFilterForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchTopics();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        var topics = nextProps.topics ? nextProps.topics.map(function (topic) {
          return { value: topic, label: topic };
        }) : [];
        this.setState({ topics: topics });
      }
    }
  }, {
    key: '_fetchTopics',
    value: function _fetchTopics() {
      var _this2 = this;

      var api = new _ApiHelper2.default('topics');
      var params = {};
      var callback = function callback(response) {
        var options = _lodash2.default.keys(response.topics).sort().map(function (topic) {
          return { value: topic, label: topic };
        });
        _this2.setState({ options: options });
      };

      api.fetchResource({ params: params, callback: callback });
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(selected) {
      var newTopicList = selected.map(function (option) {
        return option.value;
      });
      this.setState({ topics: selected }, this.props.updateQueryParams({ topics: newTopicList }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactSelect2.default, {
        options: this.state.options,
        multi: true,
        value: this.state.topics,
        onChange: this.handleSelect
      });
    }
  }]);

  return TopicsFilterForm;
}(_react.Component);

exports.default = TopicsFilterForm;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsageBadge = function UsageBadge(_ref) {
  var number = _ref.number;

  var display = number > 0;
  var pluralizedText = number === 1 ? 'learning circle' : 'learning circles';

  if (display) {
    return _react2.default.createElement(
      'div',
      { className: 'usage-badge' },
      _react2.default.createElement(
        'div',
        { className: 'text' },
        'Used by ',
        _react2.default.createElement(
          'span',
          { className: 'big' },
          number
        ),
        ' ',
        pluralizedText
      )
    );
  } else {
    return null;
  }
};

exports.default = UsageBadge;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRangeslider = __webpack_require__(99);

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

var _index = __webpack_require__(104);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeSliderWithLabel = function RangeSliderWithLabel(props) {
  var disabledClass = props.disabled ? 'disabled' : '';
  var onChangeFunction = props.disabled ? null : props.handleChange;

  return _react2.default.createElement(
    'div',
    { className: 'range-slider-with-label label-left ' + props.classes + ' ' + disabledClass },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label
    ),
    _react2.default.createElement(_reactRangeslider2.default, {
      value: props.value,
      name: props.name,
      min: props.min,
      max: props.max,
      step: props.step,
      onChange: onChangeFunction
    })
  );
};

exports.default = RangeSliderWithLabel;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "/**\n* Rangeslider\n*/\n.rangeslider {\n  margin: 20px 0;\n  position: relative;\n  background: #e6e6e6;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.rangeslider,\n.rangeslider .rangeslider__fill {\n  display: block;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle {\n  background: #fff;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle:hover .rangeslider__tooltip {\n  opacity: 1;\n}\n.rangeslider .rangeslider__tooltip {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-weight: normal;\n  font-size: 14px;\n  transition: all 100ms ease-in;\n  border-radius: 4px;\n  display: inline-block;\n  color: white;\n  opacity: 0;\n}\n.rangeslider .rangeslider__tooltip span {\n  margin-top: 12px;\n  display: inline-block;\n  line-height: 100%;\n}\n.rangeslider .rangeslider__tooltip:after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n/**\n* Rangeslider - Horizontal slider\n*/\n.rangeslider-horizontal {\n  height: 12px;\n  border-radius: 10px;\n}\n.rangeslider-horizontal .rangeslider__fill {\n  height: 100%;\n  background-color: #7CB342;\n  border-radius: 10px;\n  top: 0;\n}\n.rangeslider-horizontal .rangeslider__handle {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  top: -10px;\n}\n.rangeslider-horizontal .rangeslider__handle:after {\n  content: ' ';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 6px;\n  left: 6px;\n  border-radius: 50%;\n  background-color: #dadada;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n}\n.rangeslider-horizontal .rangeslider__tooltip {\n  top: -55px;\n}\n.rangeslider-horizontal .rangeslider__tooltip:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid rgba(0, 0, 0, 0.8);\n  left: 12px;\n  bottom: -8px;\n}\n/**\n* Rangeslider - Vertical slider\n*/\n.rangeslider-vertical {\n  margin: 20px auto;\n  height: 150px;\n  max-width: 10px;\n  background-color: transparent;\n}\n.rangeslider-vertical .rangeslider__fill,\n.rangeslider-vertical .rangeslider__handle {\n  position: absolute;\n}\n.rangeslider-vertical .rangeslider__fill {\n  width: 100%;\n  background-color: #7CB342;\n  box-shadow: none;\n  bottom: 0;\n}\n.rangeslider-vertical .rangeslider__handle {\n  width: 30px;\n  height: 10px;\n  left: -10px;\n  box-shadow: none;\n}\n.rangeslider-vertical .rangeslider__tooltip {\n  left: -55px;\n  top: -15px;\n}\n.rangeslider-vertical .rangeslider__tooltip:after {\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(0, 0, 0, 0.8);\n  left: 100%;\n  top: 12px;\n}\n/**\n* Rangeslider - Reverse\n*/\n.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {\n  right: 0;\n}\n.rangeslider-reverse.rangeslider-vertical .rangeslider__fill {\n  top: 0;\n  bottom: inherit;\n}\n/**\n* Rangeslider - Labels\n*/\n.rangeslider-vertical .rangeslider__label-list {\n  position: relative;\n  list-style-type: none;\n  margin: 0 0 0 24px;\n  padding: 0;\n  text-align: left;\n  width: 250px;\n}\n.rangeslider-vertical .rangeslider__label-list .rangeslider__label {\n  position: absolute;\n}\n.rangeslider-vertical .rangeslider__label-list .rangeslider__label::before {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: black;\n  position: absolute;\n  left: -14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n}\n.rangeslider__label-list .rangeslider__label {\n  position: absolute;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "/**\n * React Switch Button control style.\n *\n * @author          =undo= <g.fazioli@undolog.com>\n * @date            2016-02-17\n * @version         2.0.0\n *\n */\n.rsbc-switch-button {\n  position: relative;\n  line-height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.rsbc-switch-button label {\n  cursor: pointer;\n}\n.rsbc-switch-button.disabled label {\n  cursor: not-allowed;\n}\n.rsbc-switch-button input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -9999px;\n  visibility: hidden;\n}\n.rsbc-switch-button > label:first-child {\n  display: inline-block;\n  margin: 0 6px 0 0px;\n}\n.rsbc-switch-button label + label {\n  margin-left: 6px;\n}\n.rsbc-switch-button input[type=\"checkbox\"] + label {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n/**\n * React Switch Button control style.\n *\n * @author          =undo= <g.fazioli@undolog.com>\n * @date            2016-02-17\n * @version         2.0.0\n *\n */\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"] + label {\n  padding: 2px;\n  width: 48px;\n  height: 24px;\n  vertical-align: middle;\n  background-color: #aaa;\n  -webkit-border-radius: 60px;\n  -moz-border-radius: 60px;\n  border-radius: 60px;\n  -webkit-transition: background 0.4s;\n  -moz-transition: background 0.4s;\n  -o-transition: background 0.4s;\n  transition: background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round.disabled input[type=\"checkbox\"] + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round:hover input[type=\"checkbox\"] + label {\n  background-color: #579fcb;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round.disabled:hover input[type=\"checkbox\"] + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"] + label:before,\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"] + label:after {\n  display: inline-block;\n  position: absolute;\n  content: \"\";\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"] + label:before {\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  right: 2px;\n  background-color: #fff;\n  -webkit-border-radius: 60px;\n  -moz-border-radius: 60px;\n  border-radius: 60px;\n  -webkit-transition: background 0.4s;\n  -moz-transition: background 0.4s;\n  -o-transition: background 0.4s;\n  transition: background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"] + label:after {\n  top: 4px;\n  left: 4px;\n  bottom: 4px;\n  width: 16px;\n  background-color: #919191;\n  -webkit-border-radius: 52px;\n  -moz-border-radius: 52px;\n  border-radius: 52px;\n  -webkit-transition: margin 0.4s, background 0.4s;\n  -moz-transition: margin 0.4s, background 0.4s;\n  -o-transition: margin 0.4s, background 0.4s;\n  transition: margin 0.4s, background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round.disabled input[type=\"checkbox\"] + label:after {\n  background-color: #d5d5d5;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round:hover input[type=\"checkbox\"]:checked + label {\n  background-color: #aaa;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"]:checked + label {\n  background-color: #579fcb;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round.disabled input[type=\"checkbox\"]:checked + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round input[type=\"checkbox\"]:checked + label:after {\n  margin-left: 24px;\n  background-color: #3887b7;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-round.disabled input[type=\"checkbox\"]:checked + label:after {\n  margin-left: 24px;\n  background-color: #d5d5d5;\n}\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-round.rsbc-mode-select input[type=\"checkbox\"] + label:after,\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-round.rsbc-mode-select:hover input[type=\"checkbox\"]:checked + label,\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-round.rsbc-mode-select input[type=\"checkbox\"] + label {\n  background-color: #579fcb !important;\n}\n/**\n * React Switch Button control style square.\n *\n * @author          =undo= <g.fazioli@undolog.com>\n * @date            2016-12-30\n * @version         1.0.0\n *\n */\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"] + label {\n  padding: 2px;\n  width: 48px;\n  height: 24px;\n  vertical-align: middle;\n  background-color: #aaa;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  -webkit-transition: background 0.4s;\n  -moz-transition: background 0.4s;\n  -o-transition: background 0.4s;\n  transition: background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square.disabled input[type=\"checkbox\"] + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square:hover input[type=\"checkbox\"] + label {\n  background-color: #579fcb;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square.disabled:hover input[type=\"checkbox\"] + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"] + label:before,\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"] + label:after {\n  display: inline-block;\n  position: absolute;\n  content: \"\";\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"] + label:before {\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  right: 2px;\n  background-color: #fff;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  -webkit-transition: background 0.4s;\n  -moz-transition: background 0.4s;\n  -o-transition: background 0.4s;\n  transition: background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"] + label:after {\n  top: 4px;\n  left: 4px;\n  bottom: 4px;\n  width: 16px;\n  background-color: #919191;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  -webkit-transition: margin 0.4s, background 0.4s;\n  -moz-transition: margin 0.4s, background 0.4s;\n  -o-transition: margin 0.4s, background 0.4s;\n  transition: margin 0.4s, background 0.4s;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square.disabled input[type=\"checkbox\"] + label:after {\n  background-color: #d5d5d5;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square:hover input[type=\"checkbox\"]:checked + label {\n  background-color: #aaa;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"]:checked + label {\n  background-color: #579fcb;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square.disabled input[type=\"checkbox\"]:checked + label {\n  background-color: #eee;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square input[type=\"checkbox\"]:checked + label:after {\n  margin-left: 24px;\n  background-color: #3887b7;\n}\n.rsbc-switch-button.rsbc-switch-button-flat-square.disabled input[type=\"checkbox\"]:checked + label:after {\n  margin-left: 24px;\n  background-color: #d5d5d5;\n}\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-square.rsbc-mode-select input[type=\"checkbox\"] + label:after,\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-square.rsbc-mode-select:hover input[type=\"checkbox\"]:checked + label,\n.rsbc-switch-button.rsbc-switch-button.rsbc-switch-button-flat-square.rsbc-mode-select input[type=\"checkbox\"] + label {\n  background-color: #579fcb !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(103);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-debugger: "warn" */


/**
 * Predefined constants
 * @type {Object}
 */
var constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x'
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y'
    }
  }
};

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props, context) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

    _this.handleNoop = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };

    _this.handleFormat = function (value) {
      var format = _this.props.format;

      return format ? format(value) : value;
    };

    _this.handleUpdate = function () {
      if (!_this.slider) {
        // for shallow rendering
        return;
      }
      var orientation = _this.props.orientation;

      var dimension = (0, _utils.capitalize)(constants.orientation[orientation].dimension);
      var sliderPos = _this.slider['offset' + dimension];
      var handlePos = _this.handle['offset' + dimension];

      _this.setState({
        limit: sliderPos - handlePos,
        grab: handlePos / 2
      });
    };

    _this.handleStart = function (e) {
      var onChangeStart = _this.props.onChangeStart;

      document.addEventListener('mousemove', _this.handleDrag);
      document.addEventListener('mouseup', _this.handleEnd);
      onChangeStart && onChangeStart(e);
    };

    _this.handleDrag = function (e) {
      _this.handleNoop(e);
      var onChange = _this.props.onChange;
      var target = e.target;

      if (!onChange) return;

      var value = _this.position(e);
      if (target.classList.contains('rangeslider__label') && target.dataset.value) {
        value = parseFloat(target.dataset.value);
      }

      onChange && onChange(value, e);
    };

    _this.handleEnd = function (e) {
      var onChangeComplete = _this.props.onChangeComplete;

      onChangeComplete && onChangeComplete(e);
      document.removeEventListener('mousemove', _this.handleDrag);
      document.removeEventListener('mouseup', _this.handleEnd);
    };

    _this.getPositionFromValue = function (value) {
      var limit = _this.state.limit;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;

      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;
      var pos = Math.round(percentage * limit);

      return pos;
    };

    _this.getValueFromPosition = function (pos) {
      var limit = _this.state.limit;
      var _this$props2 = _this.props,
          orientation = _this$props2.orientation,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step;

      var percentage = (0, _utils.clamp)(pos, 0, limit) / (limit || 1);
      var baseVal = step * Math.round(percentage * (max - min) / step);
      var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

      return (0, _utils.clamp)(value, min, max);
    };

    _this.position = function (e) {
      var grab = _this.state.grab;
      var _this$props3 = _this.props,
          orientation = _this$props3.orientation,
          reverse = _this$props3.reverse;


      var node = _this.slider;
      var coordinateStyle = constants.orientation[orientation].coordinate;
      var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var clientCoordinateStyle = 'client' + (0, _utils.capitalize)(coordinateStyle);
      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
      var direction = node.getBoundingClientRect()[directionStyle];
      var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;
      var value = _this.getValueFromPosition(pos);

      return value;
    };

    _this.coordinates = function (pos) {
      var _this$state = _this.state,
          limit = _this$state.limit,
          grab = _this$state.grab;
      var orientation = _this.props.orientation;

      var value = _this.getValueFromPosition(pos);
      var handlePos = _this.getPositionFromValue(value);
      var sumHandleposGrab = orientation === 'horizontal' ? handlePos + grab : handlePos;
      var fillPos = orientation === 'horizontal' ? sumHandleposGrab : limit - sumHandleposGrab;

      return {
        fill: fillPos,
        handle: handlePos,
        label: handlePos
      };
    };

    _this.state = {
      limit: 0,
      grab: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdate();
      var resizeObserver = new _resizeObserverPolyfill2.default(this.handleUpdate);
      resizeObserver.observe(this.slider);
    }

    /**
     * Prevent default event and bubbling
     * @param  {Object} e - Event object
     * @return {void}
     */


    /**
     * Format label/tooltip value
     * @param  {Number} - value
     * @return {Formatted Number}
     */


    /**
     * Update slider state on change
     * @return {void}
     */


    /**
     * Attach event listeners to mousemove/mouseup events
     * @return {void}
     */


    /**
     * Handle drag/mousemove event
     * @param  {Object} e - Event object
     * @return {void}
     */


    /**
     * Detach event listeners to mousemove/mouseup events
     * @return {void}
     */


    /**
     * Calculate position of slider based on its value
     * @param  {number} value - Current value of slider
     * @return {position} pos - Calculated position of slider based on value
     */


    /**
     * Translate position of slider to slider value
     * @param  {number} pos - Current position/coordinates of slider
     * @return {number} value - Slider value
     */


    /**
     * Calculate position of slider based on value
     * @param  {Object} e - Event object
     * @return {number} value - Slider value
     */


    /**
     * Grab coordinates of slider
     * @param  {Object} pos - Position object
     * @return {Object} - Slider fill/handle coordinates
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          orientation = _props.orientation,
          className = _props.className,
          tooltip = _props.tooltip,
          reverse = _props.reverse;

      var dimension = constants.orientation[orientation].dimension;
      var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var position = this.getPositionFromValue(value);
      var coords = this.coordinates(position);
      var fillStyle = _defineProperty({}, dimension, coords.fill + 'px');
      var handleStyle = _defineProperty({}, direction, coords.handle + 'px');
      var labels = null;
      var labelKeys = Object.keys(this.props.labels);

      if (labelKeys.length > 0) {
        var items = [];

        labelKeys = labelKeys.sort(function (a, b) {
          return reverse ? a - b : b - a;
        });

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = labelKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var labelPosition = this.getPositionFromValue(key);
            var labelCoords = this.coordinates(labelPosition);
            var labelStyle = _defineProperty({}, direction, labelCoords.label + 'px');
            items.push(_react2.default.createElement(
              'li',
              {
                key: key,
                className: (0, _classnames2.default)('rangeslider__label'),
                'data-value': key,
                onMouseDown: this.handleDrag,
                onTouchStart: this.handleDrag,
                onTouchEnd: this.handleEnd,
                style: labelStyle
              },
              this.props.labels[key]
            ));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        labels = _react2.default.createElement(
          'ul',
          {
            ref: function ref(sl) {
              _this2.labels = sl;
            },
            className: (0, _classnames2.default)('rangeslider__label-list')
          },
          items
        );
      }

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(s) {
            _this2.slider = s;
          },
          className: (0, _classnames2.default)('rangeslider', 'rangeslider-' + orientation, { 'rangeslider-reverse': reverse }, className),
          onMouseDown: this.handleDrag,
          onMouseUp: this.handleEnd,
          onTouchStart: this.handleDrag,
          onTouchEnd: this.handleEnd
        },
        _react2.default.createElement('div', { className: 'rangeslider__fill', style: fillStyle }),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(sh) {
              _this2.handle = sh;
            },
            className: 'rangeslider__handle',
            onMouseDown: this.handleStart,
            onTouchMove: this.handleDrag,
            onTouchEnd: this.handleEnd,
            style: handleStyle
          },
          tooltip && _react2.default.createElement(
            'div',
            {
              ref: function ref(st) {
                _this2.tooltip = st;
              },
              className: 'rangeslider__tooltip'
            },
            _react2.default.createElement(
              'span',
              null,
              this.handleFormat(value)
            )
          )
        ),
        labels
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  value: _propTypes2.default.number,
  orientation: _propTypes2.default.string,
  tooltip: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  labels: _propTypes2.default.object,
  format: _propTypes2.default.func,
  onChangeStart: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChangeComplete: _propTypes2.default.func
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: 'horizontal',
  tooltip: true,
  reverse: false,
  labels: {}
};
exports.default = Slider;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rangeslider = __webpack_require__(98);

var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rangeslider2.default;

/***/ })

},[160]);
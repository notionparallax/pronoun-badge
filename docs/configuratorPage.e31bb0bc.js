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
})({"xeIE":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function compute_slots(slots) {
  const result = {};

  for (const key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  const value = new Set();

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value.delete(__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;
      const remove = [];

      while (j < node.attributes.length) {
        const attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (let k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


let crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);
  const z_index = (parseInt(computed_style.zIndex) || 0) - 1;

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  const iframe = element('iframe');
  iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` + `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;

  if (crossorigin) {
    iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(anchor = null) {
    this.a = anchor;
    this.e = this.n = null;
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.h(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.28.0'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"XHT5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _internal.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"xeIE"}],"YJzu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

/* App.svelte generated by Svelte v3.28.0 */
function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-1oswc7f-style";
  style.textContent = ".the-url.svelte-1oswc7f{width:90vw;margin:auto;overflow:hidden}img.svelte-1oswc7f{max-width:80vw}p.note.svelte-1oswc7f{width:90vw;display:inline-block;margin:0;min-width:15em}.input-group.svelte-1oswc7f{border:1px solid orange;border-radius:1em}input.svelte-1oswc7f{width:90vw}label.svelte-1oswc7f{width:90vw;text-transform:capitalize}@media(min-width: 30em){p.note.svelte-1oswc7f{width:40vw}input.svelte-1oswc7f{width:30vw}label.svelte-1oswc7f{min-width:10em;width:15vw;text-align:right}}code.svelte-1oswc7f{font-size:140%}@media(min-width: 30em){code.svelte-1oswc7f{font-size:200%}}.photos.svelte-1oswc7f{width:100%;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:8px}";
  (0, _internal.append)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
} // (267:2) {:else}


function create_else_block(ctx) {
  let p;
  return {
    c() {
      p = (0, _internal.element)("p");
      p.textContent = "loading...";
    },

    m(target, anchor) {
      (0, _internal.insert)(target, p, anchor);
    },

    d(detaching) {
      if (detaching) (0, _internal.detach)(p);
    }

  };
} // (256:2) {#each photos as photo}


function create_each_block(ctx) {
  let figure;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let figcaption;
  let t1_value =
  /*photo*/
  ctx[15].subject + "";
  let t1;
  let br0;
  let t2;
  let t3_value =
  /*photo*/
  ctx[15].object + "";
  let t3;
  let br1;
  let t4;
  let t5_value =
  /*photo*/
  ctx[15].posessive + "";
  let t5;
  let br2;
  let t6;
  let t7_value =
  /*photo*/
  ctx[15].posessivePronoun + "";
  let t7;
  let br3;
  let t8;
  let t9_value =
  /*photo*/
  ctx[15].reflexive + "";
  let t9;
  let br4;
  let t10;
  return {
    c() {
      figure = (0, _internal.element)("figure");
      img = (0, _internal.element)("img");
      t0 = (0, _internal.space)();
      figcaption = (0, _internal.element)("figcaption");
      t1 = (0, _internal.text)(t1_value);
      br0 = (0, _internal.element)("br");
      t2 = (0, _internal.space)();
      t3 = (0, _internal.text)(t3_value);
      br1 = (0, _internal.element)("br");
      t4 = (0, _internal.space)();
      t5 = (0, _internal.text)(t5_value);
      br2 = (0, _internal.element)("br");
      t6 = (0, _internal.space)();
      t7 = (0, _internal.text)(t7_value);
      br3 = (0, _internal.element)("br");
      t8 = (0, _internal.space)();
      t9 = (0, _internal.text)(t9_value);
      br4 = (0, _internal.element)("br");
      t10 = (0, _internal.space)();
      if (img.src !== (img_src_value =
      /*photo*/
      ctx[15].thumbnailUrl)) (0, _internal.attr)(img, "src", img_src_value);
      (0, _internal.attr)(img, "alt", img_alt_value =
      /*photo*/
      ctx[15].title);
      (0, _internal.attr)(img, "class", "svelte-1oswc7f");
    },

    m(target, anchor) {
      (0, _internal.insert)(target, figure, anchor);
      (0, _internal.append)(figure, img);
      (0, _internal.append)(figure, t0);
      (0, _internal.append)(figure, figcaption);
      (0, _internal.append)(figcaption, t1);
      (0, _internal.append)(figcaption, br0);
      (0, _internal.append)(figcaption, t2);
      (0, _internal.append)(figcaption, t3);
      (0, _internal.append)(figcaption, br1);
      (0, _internal.append)(figcaption, t4);
      (0, _internal.append)(figcaption, t5);
      (0, _internal.append)(figcaption, br2);
      (0, _internal.append)(figcaption, t6);
      (0, _internal.append)(figcaption, t7);
      (0, _internal.append)(figcaption, br3);
      (0, _internal.append)(figcaption, t8);
      (0, _internal.append)(figcaption, t9);
      (0, _internal.append)(figcaption, br4);
      (0, _internal.append)(figure, t10);
    },

    p(ctx, dirty) {
      if (dirty &
      /*photos*/
      2 && img.src !== (img_src_value =
      /*photo*/
      ctx[15].thumbnailUrl)) {
        (0, _internal.attr)(img, "src", img_src_value);
      }

      if (dirty &
      /*photos*/
      2 && img_alt_value !== (img_alt_value =
      /*photo*/
      ctx[15].title)) {
        (0, _internal.attr)(img, "alt", img_alt_value);
      }

      if (dirty &
      /*photos*/
      2 && t1_value !== (t1_value =
      /*photo*/
      ctx[15].subject + "")) (0, _internal.set_data)(t1, t1_value);
      if (dirty &
      /*photos*/
      2 && t3_value !== (t3_value =
      /*photo*/
      ctx[15].object + "")) (0, _internal.set_data)(t3, t3_value);
      if (dirty &
      /*photos*/
      2 && t5_value !== (t5_value =
      /*photo*/
      ctx[15].posessive + "")) (0, _internal.set_data)(t5, t5_value);
      if (dirty &
      /*photos*/
      2 && t7_value !== (t7_value =
      /*photo*/
      ctx[15].posessivePronoun + "")) (0, _internal.set_data)(t7, t7_value);
      if (dirty &
      /*photos*/
      2 && t9_value !== (t9_value =
      /*photo*/
      ctx[15].reflexive + "")) (0, _internal.set_data)(t9, t9_value);
    },

    d(detaching) {
      if (detaching) (0, _internal.detach)(figure);
    }

  };
}

function create_fragment(ctx) {
  let t0;
  let div0;
  let a;
  let code;
  let raw_value =
  /*url*/
  ctx[3].replace("&", "<wbr>&") + "";
  let t1;
  let figure;
  let img;
  let img_alt_value;
  let img_src_value;
  let t2;
  let figcaption;
  let t4;
  let form;
  let div1;
  let label0;
  let t6;
  let input0;
  let t7;
  let p0;
  let t8_value =
  /*person*/
  ctx[0].subject + "";
  let t8;
  let t9;
  let t10;
  let div2;
  let label1;
  let t12;
  let input1;
  let t13;
  let p1;
  let t14;
  let t15_value =
  /*person*/
  ctx[0].object + "";
  let t15;
  let t16;
  let t17;
  let div3;
  let label2;
  let t19;
  let input2;
  let t20;
  let p2;
  let t21_value =
  /*person*/
  ctx[0].posessive + "";
  let t21;
  let t22;
  let t23;
  let div4;
  let label3;
  let t25;
  let input3;
  let t26;
  let p3;
  let t27_value =
  /*person*/
  ctx[0].subject + "";
  let t27;
  let t28;
  let t29_value =
  /*person*/
  ctx[0].posessivePronoun + "";
  let t29;
  let t30;
  let t31;
  let div5;
  let label4;
  let t33;
  let input4;
  let t34;
  let p4;
  let t35_value =
  /*person*/
  ctx[0].subject + "";
  let t35;
  let t36;
  let t37_value =
  /*person*/
  ctx[0].reflexive + "";
  let t37;
  let t38;
  let t39;
  let div6;
  let label5;
  let t41;
  let input5;
  let t42;
  let p5;
  let t43;
  let t44_value =
  /*person*/
  ctx[0].emoji + "";
  let t44;
  let t45;
  let div7;
  let label6;
  let t47;
  let input6;
  let t48;
  let p6;
  let t49;
  let t50_value =
  /*person*/
  ctx[0].colour + "";
  let t50;
  let t51;
  let t52;
  let div8;
  let label7;
  let t54;
  let input7;
  let t55;
  let p7;
  let t56;
  let t57_value =
  /*person*/
  ctx[0].height + "";
  let t57;
  let t58;
  let t59;
  let div9;
  let label8;
  let t61;
  let input8;
  let t62;
  let p8;
  let t63;
  let t64_value =
  /*person*/
  ctx[0].sep + "";
  let t64;
  let t65;
  let t66_value =
  /*person*/
  ctx[0].sep + "";
  let t66;
  let t67;
  let t68;
  let div10;
  let mounted;
  let dispose;
  let each_value =
  /*photos*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  let each_1_else = null;

  if (!each_value.length) {
    each_1_else = create_else_block(ctx);
  }

  return {
    c() {
      t0 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      a = (0, _internal.element)("a");
      code = (0, _internal.element)("code");
      t1 = (0, _internal.space)();
      figure = (0, _internal.element)("figure");
      img = (0, _internal.element)("img");
      t2 = (0, _internal.space)();
      figcaption = (0, _internal.element)("figcaption");
      figcaption.textContent = "This is the generated badge at that URL";
      t4 = (0, _internal.space)();
      form = (0, _internal.element)("form");
      div1 = (0, _internal.element)("div");
      label0 = (0, _internal.element)("label");
      label0.textContent = "subject";
      t6 = (0, _internal.space)();
      input0 = (0, _internal.element)("input");
      t7 = (0, _internal.space)();
      p0 = (0, _internal.element)("p");
      t8 = (0, _internal.text)(t8_value);
      t9 = (0, _internal.text)(" is amazing.");
      t10 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      label1 = (0, _internal.element)("label");
      label1.textContent = "object";
      t12 = (0, _internal.space)();
      input1 = (0, _internal.element)("input");
      t13 = (0, _internal.space)();
      p1 = (0, _internal.element)("p");
      t14 = (0, _internal.text)("Give an award to ");
      t15 = (0, _internal.text)(t15_value);
      t16 = (0, _internal.text)(".");
      t17 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      label2 = (0, _internal.element)("label");
      label2.textContent = "posessive";
      t19 = (0, _internal.space)();
      input2 = (0, _internal.element)("input");
      t20 = (0, _internal.space)();
      p2 = (0, _internal.element)("p");
      t21 = (0, _internal.text)(t21_value);
      t22 = (0, _internal.text)(" brain is intimidating!");
      t23 = (0, _internal.space)();
      div4 = (0, _internal.element)("div");
      label3 = (0, _internal.element)("label");
      label3.textContent = "posessive pronoun";
      t25 = (0, _internal.space)();
      input3 = (0, _internal.element)("input");
      t26 = (0, _internal.space)();
      p3 = (0, _internal.element)("p");
      t27 = (0, _internal.text)(t27_value);
      t28 = (0, _internal.text)("\r\n      thinks the cat is\r\n      ");
      t29 = (0, _internal.text)(t29_value);
      t30 = (0, _internal.text)("\r\n      but the cat thinks otherwise.");
      t31 = (0, _internal.space)();
      div5 = (0, _internal.element)("div");
      label4 = (0, _internal.element)("label");
      label4.textContent = "reflexive";
      t33 = (0, _internal.space)();
      input4 = (0, _internal.element)("input");
      t34 = (0, _internal.space)();
      p4 = (0, _internal.element)("p");
      t35 = (0, _internal.text)(t35_value);
      t36 = (0, _internal.text)(" thinks highly of ");
      t37 = (0, _internal.text)(t37_value);
      t38 = (0, _internal.text)(".");
      t39 = (0, _internal.space)();
      div6 = (0, _internal.element)("div");
      label5 = (0, _internal.element)("label");
      label5.textContent = "emoji";
      t41 = (0, _internal.space)();
      input5 = (0, _internal.element)("input");
      t42 = (0, _internal.space)();
      p5 = (0, _internal.element)("p");
      t43 = (0, _internal.text)("This/these emoji say something about you. ");
      t44 = (0, _internal.text)(t44_value);
      t45 = (0, _internal.space)();
      div7 = (0, _internal.element)("div");
      label6 = (0, _internal.element)("label");
      label6.textContent = "colour";
      t47 = (0, _internal.space)();
      input6 = (0, _internal.element)("input");
      t48 = (0, _internal.space)();
      p6 = (0, _internal.element)("p");
      t49 = (0, _internal.text)("This is the background colour of the badge (");
      t50 = (0, _internal.text)(t50_value);
      t51 = (0, _internal.text)(": A hex colour)");
      t52 = (0, _internal.space)();
      div8 = (0, _internal.element)("div");
      label7 = (0, _internal.element)("label");
      label7.textContent = "height";
      t54 = (0, _internal.space)();
      input7 = (0, _internal.element)("input");
      t55 = (0, _internal.space)();
      p7 = (0, _internal.element)("p");
      t56 = (0, _internal.text)("The image sent back will be ");
      t57 = (0, _internal.text)(t57_value);
      t58 = (0, _internal.text)("px high.");
      t59 = (0, _internal.space)();
      div9 = (0, _internal.element)("div");
      label8 = (0, _internal.element)("label");
      label8.textContent = "separator";
      t61 = (0, _internal.space)();
      input8 = (0, _internal.element)("input");
      t62 = (0, _internal.space)();
      p8 = (0, _internal.element)("p");
      t63 = (0, _internal.text)("Each section will be separated by this/these characters. e.g. 👁");
      t64 = (0, _internal.text)(t64_value);
      t65 = (0, _internal.text)("👄");
      t66 = (0, _internal.text)(t66_value);
      t67 = (0, _internal.text)("👁");
      t68 = (0, _internal.space)();
      div10 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      if (each_1_else) {
        each_1_else.c();
      }

      document.title = "Pronoun Badge";
      (0, _internal.attr)(code, "class", "svelte-1oswc7f");
      (0, _internal.attr)(a, "href",
      /*url*/
      ctx[3]);
      (0, _internal.attr)(a, "target", "_blank");
      (0, _internal.attr)(div0, "class", "the-url svelte-1oswc7f");
      (0, _internal.attr)(img, "alt", img_alt_value = "A pronoun badge that reads " +
      /*altText*/
      ctx[2]);
      if (img.src !== (img_src_value =
      /*url*/
      ctx[3])) (0, _internal.attr)(img, "src", img_src_value);
      (0, _internal.attr)(img, "class", "svelte-1oswc7f");
      (0, _internal.attr)(label0, "for", "subject");
      (0, _internal.attr)(label0, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input0, "name", "subject");
      (0, _internal.attr)(input0, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p0, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div1, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label1, "for", "object");
      (0, _internal.attr)(label1, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input1, "name", "object");
      (0, _internal.attr)(input1, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p1, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div2, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label2, "for", "posessive");
      (0, _internal.attr)(label2, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input2, "name", "posessive");
      (0, _internal.attr)(input2, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p2, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div3, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label3, "for", "posessive-pronoun");
      (0, _internal.attr)(label3, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input3, "name", "posessive-pronoun");
      (0, _internal.attr)(input3, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p3, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div4, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label4, "for", "reflexive");
      (0, _internal.attr)(label4, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input4, "name", "reflexive");
      (0, _internal.attr)(input4, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p4, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div5, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label5, "for", "emoji");
      (0, _internal.attr)(label5, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input5, "name", "emoji");
      (0, _internal.attr)(input5, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p5, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div6, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label6, "for", "colour");
      (0, _internal.attr)(label6, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input6, "name", "colour");
      (0, _internal.attr)(input6, "type", "color");
      (0, _internal.attr)(input6, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p6, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div7, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label7, "for", "height");
      (0, _internal.attr)(label7, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input7, "name", "height");
      (0, _internal.attr)(input7, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p7, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div8, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(label8, "for", "sep");
      (0, _internal.attr)(label8, "class", "svelte-1oswc7f");
      (0, _internal.attr)(input8, "name", "sep");
      (0, _internal.attr)(input8, "class", "svelte-1oswc7f");
      (0, _internal.attr)(p8, "class", "note svelte-1oswc7f");
      (0, _internal.attr)(div9, "class", "input-group svelte-1oswc7f");
      (0, _internal.attr)(div10, "class", "photos svelte-1oswc7f");
    },

    m(target, anchor) {
      (0, _internal.insert)(target, t0, anchor);
      (0, _internal.insert)(target, div0, anchor);
      (0, _internal.append)(div0, a);
      (0, _internal.append)(a, code);
      code.innerHTML = raw_value;
      (0, _internal.insert)(target, t1, anchor);
      (0, _internal.insert)(target, figure, anchor);
      (0, _internal.append)(figure, img);
      (0, _internal.append)(figure, t2);
      (0, _internal.append)(figure, figcaption);
      (0, _internal.insert)(target, t4, anchor);
      (0, _internal.insert)(target, form, anchor);
      (0, _internal.append)(form, div1);
      (0, _internal.append)(div1, label0);
      (0, _internal.append)(div1, t6);
      (0, _internal.append)(div1, input0);
      (0, _internal.set_input_value)(input0,
      /*person*/
      ctx[0].subject);
      (0, _internal.append)(div1, t7);
      (0, _internal.append)(div1, p0);
      (0, _internal.append)(p0, t8);
      (0, _internal.append)(p0, t9);
      (0, _internal.append)(form, t10);
      (0, _internal.append)(form, div2);
      (0, _internal.append)(div2, label1);
      (0, _internal.append)(div2, t12);
      (0, _internal.append)(div2, input1);
      (0, _internal.set_input_value)(input1,
      /*person*/
      ctx[0].object);
      (0, _internal.append)(div2, t13);
      (0, _internal.append)(div2, p1);
      (0, _internal.append)(p1, t14);
      (0, _internal.append)(p1, t15);
      (0, _internal.append)(p1, t16);
      (0, _internal.append)(form, t17);
      (0, _internal.append)(form, div3);
      (0, _internal.append)(div3, label2);
      (0, _internal.append)(div3, t19);
      (0, _internal.append)(div3, input2);
      (0, _internal.set_input_value)(input2,
      /*person*/
      ctx[0].posessive);
      (0, _internal.append)(div3, t20);
      (0, _internal.append)(div3, p2);
      (0, _internal.append)(p2, t21);
      (0, _internal.append)(p2, t22);
      (0, _internal.append)(form, t23);
      (0, _internal.append)(form, div4);
      (0, _internal.append)(div4, label3);
      (0, _internal.append)(div4, t25);
      (0, _internal.append)(div4, input3);
      (0, _internal.set_input_value)(input3,
      /*person*/
      ctx[0].posessivePronoun);
      (0, _internal.append)(div4, t26);
      (0, _internal.append)(div4, p3);
      (0, _internal.append)(p3, t27);
      (0, _internal.append)(p3, t28);
      (0, _internal.append)(p3, t29);
      (0, _internal.append)(p3, t30);
      (0, _internal.append)(form, t31);
      (0, _internal.append)(form, div5);
      (0, _internal.append)(div5, label4);
      (0, _internal.append)(div5, t33);
      (0, _internal.append)(div5, input4);
      (0, _internal.set_input_value)(input4,
      /*person*/
      ctx[0].reflexive);
      (0, _internal.append)(div5, t34);
      (0, _internal.append)(div5, p4);
      (0, _internal.append)(p4, t35);
      (0, _internal.append)(p4, t36);
      (0, _internal.append)(p4, t37);
      (0, _internal.append)(p4, t38);
      (0, _internal.append)(form, t39);
      (0, _internal.append)(form, div6);
      (0, _internal.append)(div6, label5);
      (0, _internal.append)(div6, t41);
      (0, _internal.append)(div6, input5);
      (0, _internal.set_input_value)(input5,
      /*person*/
      ctx[0].emoji);
      (0, _internal.append)(div6, t42);
      (0, _internal.append)(div6, p5);
      (0, _internal.append)(p5, t43);
      (0, _internal.append)(p5, t44);
      (0, _internal.append)(form, t45);
      (0, _internal.append)(form, div7);
      (0, _internal.append)(div7, label6);
      (0, _internal.append)(div7, t47);
      (0, _internal.append)(div7, input6);
      (0, _internal.set_input_value)(input6,
      /*person*/
      ctx[0].colour);
      (0, _internal.append)(div7, t48);
      (0, _internal.append)(div7, p6);
      (0, _internal.append)(p6, t49);
      (0, _internal.append)(p6, t50);
      (0, _internal.append)(p6, t51);
      (0, _internal.append)(form, t52);
      (0, _internal.append)(form, div8);
      (0, _internal.append)(div8, label7);
      (0, _internal.append)(div8, t54);
      (0, _internal.append)(div8, input7);
      (0, _internal.set_input_value)(input7,
      /*person*/
      ctx[0].height);
      (0, _internal.append)(div8, t55);
      (0, _internal.append)(div8, p7);
      (0, _internal.append)(p7, t56);
      (0, _internal.append)(p7, t57);
      (0, _internal.append)(p7, t58);
      (0, _internal.append)(form, t59);
      (0, _internal.append)(form, div9);
      (0, _internal.append)(div9, label8);
      (0, _internal.append)(div9, t61);
      (0, _internal.append)(div9, input8);
      (0, _internal.set_input_value)(input8,
      /*person*/
      ctx[0].sep);
      (0, _internal.append)(div9, t62);
      (0, _internal.append)(div9, p8);
      (0, _internal.append)(p8, t63);
      (0, _internal.append)(p8, t64);
      (0, _internal.append)(p8, t65);
      (0, _internal.append)(p8, t66);
      (0, _internal.append)(p8, t67);
      (0, _internal.insert)(target, t68, anchor);
      (0, _internal.insert)(target, div10, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div10, null);
      }

      if (each_1_else) {
        each_1_else.m(div10, null);
      }

      if (!mounted) {
        dispose = [(0, _internal.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[4]), (0, _internal.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[5]), (0, _internal.listen)(input2, "input",
        /*input2_input_handler*/
        ctx[6]), (0, _internal.listen)(input3, "input",
        /*input3_input_handler*/
        ctx[7]), (0, _internal.listen)(input4, "input",
        /*input4_input_handler*/
        ctx[8]), (0, _internal.listen)(input5, "input",
        /*input5_input_handler*/
        ctx[9]), (0, _internal.listen)(input6, "input",
        /*input6_input_handler*/
        ctx[10]), (0, _internal.listen)(input7, "input",
        /*input7_input_handler*/
        ctx[11]), (0, _internal.listen)(input8, "input",
        /*input8_input_handler*/
        ctx[12])];
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*url*/
      8 && raw_value !== (raw_value =
      /*url*/
      ctx[3].replace("&", "<wbr>&") + "")) code.innerHTML = raw_value;
      ;

      if (dirty &
      /*url*/
      8) {
        (0, _internal.attr)(a, "href",
        /*url*/
        ctx[3]);
      }

      if (dirty &
      /*altText*/
      4 && img_alt_value !== (img_alt_value = "A pronoun badge that reads " +
      /*altText*/
      ctx[2])) {
        (0, _internal.attr)(img, "alt", img_alt_value);
      }

      if (dirty &
      /*url*/
      8 && img.src !== (img_src_value =
      /*url*/
      ctx[3])) {
        (0, _internal.attr)(img, "src", img_src_value);
      }

      if (dirty &
      /*person*/
      1 && input0.value !==
      /*person*/
      ctx[0].subject) {
        (0, _internal.set_input_value)(input0,
        /*person*/
        ctx[0].subject);
      }

      if (dirty &
      /*person*/
      1 && t8_value !== (t8_value =
      /*person*/
      ctx[0].subject + "")) (0, _internal.set_data)(t8, t8_value);

      if (dirty &
      /*person*/
      1 && input1.value !==
      /*person*/
      ctx[0].object) {
        (0, _internal.set_input_value)(input1,
        /*person*/
        ctx[0].object);
      }

      if (dirty &
      /*person*/
      1 && t15_value !== (t15_value =
      /*person*/
      ctx[0].object + "")) (0, _internal.set_data)(t15, t15_value);

      if (dirty &
      /*person*/
      1 && input2.value !==
      /*person*/
      ctx[0].posessive) {
        (0, _internal.set_input_value)(input2,
        /*person*/
        ctx[0].posessive);
      }

      if (dirty &
      /*person*/
      1 && t21_value !== (t21_value =
      /*person*/
      ctx[0].posessive + "")) (0, _internal.set_data)(t21, t21_value);

      if (dirty &
      /*person*/
      1 && input3.value !==
      /*person*/
      ctx[0].posessivePronoun) {
        (0, _internal.set_input_value)(input3,
        /*person*/
        ctx[0].posessivePronoun);
      }

      if (dirty &
      /*person*/
      1 && t27_value !== (t27_value =
      /*person*/
      ctx[0].subject + "")) (0, _internal.set_data)(t27, t27_value);
      if (dirty &
      /*person*/
      1 && t29_value !== (t29_value =
      /*person*/
      ctx[0].posessivePronoun + "")) (0, _internal.set_data)(t29, t29_value);

      if (dirty &
      /*person*/
      1 && input4.value !==
      /*person*/
      ctx[0].reflexive) {
        (0, _internal.set_input_value)(input4,
        /*person*/
        ctx[0].reflexive);
      }

      if (dirty &
      /*person*/
      1 && t35_value !== (t35_value =
      /*person*/
      ctx[0].subject + "")) (0, _internal.set_data)(t35, t35_value);
      if (dirty &
      /*person*/
      1 && t37_value !== (t37_value =
      /*person*/
      ctx[0].reflexive + "")) (0, _internal.set_data)(t37, t37_value);

      if (dirty &
      /*person*/
      1 && input5.value !==
      /*person*/
      ctx[0].emoji) {
        (0, _internal.set_input_value)(input5,
        /*person*/
        ctx[0].emoji);
      }

      if (dirty &
      /*person*/
      1 && t44_value !== (t44_value =
      /*person*/
      ctx[0].emoji + "")) (0, _internal.set_data)(t44, t44_value);

      if (dirty &
      /*person*/
      1) {
        (0, _internal.set_input_value)(input6,
        /*person*/
        ctx[0].colour);
      }

      if (dirty &
      /*person*/
      1 && t50_value !== (t50_value =
      /*person*/
      ctx[0].colour + "")) (0, _internal.set_data)(t50, t50_value);

      if (dirty &
      /*person*/
      1 && input7.value !==
      /*person*/
      ctx[0].height) {
        (0, _internal.set_input_value)(input7,
        /*person*/
        ctx[0].height);
      }

      if (dirty &
      /*person*/
      1 && t57_value !== (t57_value =
      /*person*/
      ctx[0].height + "")) (0, _internal.set_data)(t57, t57_value);

      if (dirty &
      /*person*/
      1 && input8.value !==
      /*person*/
      ctx[0].sep) {
        (0, _internal.set_input_value)(input8,
        /*person*/
        ctx[0].sep);
      }

      if (dirty &
      /*person*/
      1 && t64_value !== (t64_value =
      /*person*/
      ctx[0].sep + "")) (0, _internal.set_data)(t64, t64_value);
      if (dirty &
      /*person*/
      1 && t66_value !== (t66_value =
      /*person*/
      ctx[0].sep + "")) (0, _internal.set_data)(t66, t66_value);

      if (dirty &
      /*photos*/
      2) {
        each_value =
        /*photos*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div10, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;

        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block(ctx);
          each_1_else.c();
          each_1_else.m(div10, null);
        }
      }
    },

    i: _internal.noop,
    o: _internal.noop,

    d(detaching) {
      if (detaching) (0, _internal.detach)(t0);
      if (detaching) (0, _internal.detach)(div0);
      if (detaching) (0, _internal.detach)(t1);
      if (detaching) (0, _internal.detach)(figure);
      if (detaching) (0, _internal.detach)(t4);
      if (detaching) (0, _internal.detach)(form);
      if (detaching) (0, _internal.detach)(t68);
      if (detaching) (0, _internal.detach)(div10);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (each_1_else) each_1_else.d();
      mounted = false;
      (0, _internal.run_all)(dispose);
    }

  };
}

function instance($$self, $$props, $$invalidate) {
  let person = {
    subject: "He",
    object: "Him",
    posessive: "His",
    posessivePronoun: "His",
    reflexive: "Himself",
    emoji: "👫",
    colour: "B00B55",
    height: "60",
    sep: "|",
    note: ""
  };

  function buildURL() {
    let parts = [];
    if (person.subject) parts.push(`subject=${person.subject}&`);
    if (person.object) parts.push(`object=${person.object}&`);
    if (person.posessive) parts.push(`posessive=${person.posessive}&`);
    if (person.posessivePronoun) parts.push(`posessive-pronoun=${person.posessivePronoun}&`);
    if (person.reflexive) parts.push(`reflexive=${person.reflexive}&`);
    if (person.emoji) parts.push(`emoji=${person.emoji}&`);
    if (person.colour) parts.push(`colour=${person.colour.replace("#", "")}&`);
    if (person.height) parts.push(`height=${person.height}&`);
    if (person.sep) parts.push(`sep=${person.sep}&`);
    if (person.note) parts.push(`sep=${person.note}&`);
    $$invalidate(3, url = "https://pronoun.cyou/x/y?" + parts.join(""));

    if (url.slice(-1) == "&") {
      $$invalidate(3, url = url.slice(0, -1));
    }

    return url;
  }

  function makeText() {
    let parts = [];
    if (person.subject) parts.push(person.subject);
    if (person.object) parts.push(person.object);
    if (person.posessive) parts.push(person.posessive);
    if (person.posessivePronoun) parts.push(person.posessivePronoun);
    if (person.reflexive) parts.push(person.reflexive);
    if (person.emoji) parts.push(person.emoji); // this seems to break sapper

    let text = parts.join(person.sep || "|");
    return text;
  }

  let photos = [];
  (0, _svelte.onMount)(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=4`);
    const theJson = await res.json();
    const examplePeople = [{
      subject: "Zie",
      object: "Zim",
      posessive: "Zis",
      posessivePronoun: "Zir",
      reflexive: "Zieself"
    }, {
      subject: "She",
      object: "Her",
      posessive: "Hers",
      posessivePronoun: "Her",
      reflexive: "Herself"
    }, {
      subject: "He",
      object: "Him",
      posessive: "His",
      posessivePronoun: "His",
      reflexive: "Himself"
    }, {
      subject: "Hep",
      object: "Himp",
      posessive: "His",
      posessivePronoun: "His",
      reflexive: "Himself"
    }, {
      subject: "1",
      object: "2",
      posessive: "3",
      posessivePronoun: "3",
      reflexive: "5"
    }];
    theJson, examplePeople;
    let temp = [];
    theJson.forEach((e, i) => {
      temp.push({ ...e,
        ...examplePeople[i]
      });
    });
    console.log(temp);
    $$invalidate(1, photos = temp);
  });

  function input0_input_handler() {
    person.subject = this.value;
    $$invalidate(0, person);
  }

  function input1_input_handler() {
    person.object = this.value;
    $$invalidate(0, person);
  }

  function input2_input_handler() {
    person.posessive = this.value;
    $$invalidate(0, person);
  }

  function input3_input_handler() {
    person.posessivePronoun = this.value;
    $$invalidate(0, person);
  }

  function input4_input_handler() {
    person.reflexive = this.value;
    $$invalidate(0, person);
  }

  function input5_input_handler() {
    person.emoji = this.value;
    $$invalidate(0, person);
  }

  function input6_input_handler() {
    person.colour = this.value;
    $$invalidate(0, person);
  }

  function input7_input_handler() {
    person.height = this.value;
    $$invalidate(0, person);
  }

  function input8_input_handler() {
    person.sep = this.value;
    $$invalidate(0, person);
  }

  let altText;
  let url;

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*person*/
    1) {
      $: $$invalidate(2, altText = makeText(person));
    }

    if ($$self.$$.dirty &
    /*person*/
    1) {
      $: $$invalidate(3, url = buildURL(person));
    }
  };

  return [person, photos, altText, url, input0_input_handler, input1_input_handler, input2_input_handler, input3_input_handler, input4_input_handler, input5_input_handler, input6_input_handler, input7_input_handler, input8_input_handler];
}

class App extends _internal.SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-1oswc7f-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"xeIE","svelte":"XHT5"}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default({
  target: document.body,
  props: {// name: "Svelte",
  }
});
var _default = app;
exports.default = _default;
},{"./App.svelte":"YJzu"}]},{},["Focm"], null)
//# sourceMappingURL=/configuratorPage.e31bb0bc.js.map
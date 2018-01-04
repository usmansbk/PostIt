/** @module Util - Helper functions */
const Util = (function (_import) {
  const module = {};

  function contains (arr, target) {
    return arr.indexOf(target) >= 0
  }

  /**
   * This function applies a style to a list of DOM elements
   * @param {string} query - CSS selector
   * @param {string} style - property
   * @param {string} style - value
   * @return {Object[]} - applied elements
   */
  function queryStyleAll(query, prop, value, ignoreIds) {
    let elems = document.querySelectorAll(query)
      , length = elems.length
      , i;
    for (i = 0; i < length; i += 1) {
      let elem = elems[i];
      if (elem.hasAttribute('id') && contains(ignoreIds, elem.id)) {
        continue;
      }
      elem.style[prop] = value;
    }
    return elems;
  }

  /**
   * Add placeholders to the labels target nodes
   * @param {Object[]} labels - An array of label tag Nodes
   */
  function addPlaceholders(labels) {
    let labelsLength = labels.length, i;
    for (i = 0; i < labelsLength; i += 1) {
      let label = labels[i],
          forAttr = label.getAttribute('for'),
          input = document.querySelector('input[id=' + forAttr + ']');
      if (input)
        input.setAttribute('placeholder', label.innerText);
     }
  }
  let labels = queryStyleAll('form > label', 'display', 'none', ['birthday']);
  addPlaceholders(labels);

  // Password validation
  (function() {
    let password = document.querySelector('#f-password'),
      confirm_password = document.querySelector('#f-confirm-password');
    let validatePassword = function () {
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }
    confirm_password.addEventListener('change', validatePassword);
    password.addEventListener('change', validatePassword);
  })();

  /**
   * @function parseFormNodes
   * @desc - Parses a DOM Nodes collection to JSON format.
   * @param {Object[]} nodes - form children nodes
   * @return {Object} - form json format object
   */
  const parseFormNodes = function parseFormNodes(nodes) {
    const form = {};
    nodes = [].slice.call(nodes, 0);
    nodes.forEach((node) => {
      // Makes sure the checked radio button and no confirm node is selected
      if ((node.type == 'radio' && !node.checked) || !node.name) return;
      const name = node['name'];
      const value = node['value'];
      form[name] = value;
    });
    return form;
  }

  /**
   * @function request
   * @desc - This function initiates an AJAX request and handles it with the callback, by passing
   * calling it callback(statusCode, body)
   * @param {string} method - HTTP VERB
   * @param {string} action - RESTful API
   * @param {Object} form - JSON form object
   * @param {function} handler - callback to handle request
   */
  const request = function request(method, action, form, handler) {
    const xhr = new XMLHttpRequest();
    xhr.onstatereadychange = () => {
      if(this.readyState === 4) {
        handler(this.status, this.statusText);
      }
    };
    xhr.open(method, action, true);
    if (method.toLowerCase() === 'post') {
      xhr.setRequestHeader("Content-type", "application/json");
    }
    xhr.send(JSON.stringify(form));
  };

  module.queryStyleAll = queryStyleAll;
  module.addPlaceholders = addPlaceholders;
  module.contains = contains;
  module.parseFormNodes = parseFormNodes;
  module.request = request;

  return module;
})();

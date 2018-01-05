/** @module Util - Helper functions */
const Util = (function () {
  const module = {};

  //Password validation
  const passwordValidator = function passwordValidator(password1Id, password2Id) {
    let password = document.querySelector(`#${password1Id}`),
      confirm_password = document.querySelector(`#${password2Id}`);
    let validatePassword = function () {
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }
    confirm_password.addEventListener('change', validatePassword);
    password.addEventListener('change', validatePassword);
  };

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
    xhr.onreadystatechange = function () {
      if(this.readyState === 4) {
        handler(this.status, this.response);
      }
    };
    xhr.open(method, action, true);
    if (method.toLowerCase() === 'post') {
      xhr.setRequestHeader("Content-Type", "application/json");
    }
    xhr.send(form);
  };
 module.parseFormNodes = parseFormNodes;
 module.request = request;
 module.passwordValidator = passwordValidator;

  return module;
})();

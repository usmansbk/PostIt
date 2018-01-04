const Util = (function (exports) {
  const module = {};

  function contains (arr, target) {
    return arr.indexOf(target) >= 0
  }

  /**
   * The function applies a style to a list of DOM elements
   * @param {String} query
   * @param {String} style property
   * @param {String} style value
   * @return {Object} elements
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

  const parseFormNodes = function parseFormNodes(nodes) {
    const form = {};
    nodes = [].slice.call(nodes, 0);
    nodes.forEach((node) => {
      if ((node.type == 'radio' && !node.checked) || !node.name) return;
      const name = node['name'];
      const value = node['value'];
      form[name] = value;
    });
    console.log(form);
  }

  module.queryStyleAll = queryStyleAll;
  module.addPlaceholders = addPlaceholders;
  module.contains = contains;
  module.parseFormNodes = parseFormNodes;

  return module;
})();

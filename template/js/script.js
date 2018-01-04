(function (exports) {

  (function (exports) {

    function contains (arr, target) {
      return arr.indexOf(target) >= 0
    }

    /**
     * The function applies a style to a list of DOM elements
     * @param {String} query
     * @param {String} style property
     * @param {String} style value
     */
    function queryStyleAll(query, prop, value, ignoreIds) {
      var elems = document.querySelectorAll(query),
        length = elems.length,
        i;
      for (i = 0; i < length; i += 1) {
        var elem = elems[i];
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
      var labelsLength = labels.length,
          i;
      for (i = 0; i < labelsLength; i += 1) {
        var label = labels[i],
            forAttr = label.getAttribute('for'),
            input = document.querySelector('input[id=' + forAttr + ']');
        if (input) {
          input.setAttribute('placeholder', label.innerText);
        }
      }
    }
    var labels = queryStyleAll('form > label', 'display', 'none', ['birthday']);
    addPlaceholders(labels);

  })(exports || window);

})(document);

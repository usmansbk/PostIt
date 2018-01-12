export default class Util {
  /**
   * @param {String} values a list of space delimited strings
   * @param {String} key
   * @return {Array} an array of objects with property of value 'key' and value
   * from the values parameter.
   */
  static makeColumnList(values, key) {
    const list = values.split(' '),
      len = list.length,
      ret = [];
    for (let i = 0; i < len; i += 1) {
      const obj = {};
      obj[key] = list[i];
      ret.push(obj);
    }
    return ret;
  }
}

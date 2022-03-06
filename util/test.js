/**
 * 测试函数
 * @description rb_base_libs测试函数
 * @param {array} array 数组
 * @param {number} [size=1] 每个块的长度
 * @returns {array} 返回的新数组
 */
 export default function (array, size) {
    const list = [].concat(array);
    const len = list.length;
    const _arr = [];
  
    let i = 0;
    while (i < len) {
      const _chunk = array.splice(0, size);
      _arr.push(_chunk);
      i += size;
    }
  
    return _arr;
  }
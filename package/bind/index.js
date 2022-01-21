

Function.prototype.myBind = function (ctx, ...args1) {
  if (ctx === null || ctx === undefined) {
    ctx = globalThis
  }
  return (...args2) => {
    let fun = Symbol(1)
    ctx[fun] = this
    ctx[fun](...args1.concat(args2))
    delete ctx[fun]
  }
}
// for (var i = 1; i <= 5; i++) {
//   // 缓存参数
//   setTimeout(function (i) {
//       console.log('bind', i) // 依次输出：1 2 3 4 5
//   }.myBind(null, i), i * 1000);
// }

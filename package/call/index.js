function fn(a, b) {
  console.log('a ', a);
  console.log('b ', b);
  console.log('this ', this);
  
  return 'test'
}
console.log(fn('d', 'e'))
// a  d
// b  e
// this Window {…}
// test

const res = fn.call({ c: 'c' }, 'd', 'e')
console.log('res ', res)
// a  d
// b  e
// this  { c: 'c' }
// res  test

const res1 = fn.call(null, 'd', 'e')
console.log('res1 ', res1)
// a  d
// b  e
// this  Window {…}
// res1  test

Function.prototype.myCall = function (ctx, ...args) {
  if (ctx === null || ctx === undefined) {
    ctx = globalThis
  }
  let fun = Symbol(1)
  ctx[fun] = this
  const result = ctx[fun](...args)
  delete ctx[fun]
  return result
}
const res2 = fn.myCall({ c: 'c' }, 1, 2)
console.log('res2 ', res2)
// a  1
// b  2
// this  { c: 'c', fun: [Function: fn] }
// res2  test

const res3 = fn.myCall(null, 1, 2)
console.log('res3 ', res3)
// a  1
// b  2
// this  Window {…}
// res3  test
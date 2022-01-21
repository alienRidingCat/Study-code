function fn(...args) {
  console.log('arr ', ...args);
  console.log('this ', this);
  
  return 'test apply'
}
console.log(fn(['d', 'e']))
// arr  (2) ['d', 'e']
// this  Window { … }
// test apply

const res = fn.apply({ a: 11 }, [3, 4, 'e'])
console.log('res ', res)
// arr  3 4 e
// this  { a: 11 }
// res  test apply


Function.prototype.myApply = function (ctx, args = []) {
  if (args && !(args instanceof Array)) {
    throw(`${args} 不是一个数组！`)
  }
  if (ctx === null || ctx === undefined) {
    ctx = globalThis
  }
  let fun = Symbol(1)
  ctx[fun] = this
  const result = ctx[fun](...args)
  delete ctx[fun]
  return result
}

const res2 = fn.myApply({ a: 121 }, [4,'r'])
console.log('res2 ', res2)
// arr  4 r
// this  {a: 121, fun: ƒ}
// res2  test apply

const res3 = fn.myApply(null, [4,'r'])
console.log('res3 ', res3)
// arr  4 r
// this  Window { … }
// res3  test apply
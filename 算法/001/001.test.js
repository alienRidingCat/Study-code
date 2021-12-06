const { arrayList, listArray } = require('../util')
const partition = require('./001')

const example = [0,8,1,3,4,5,7,2,4,3,2,5,2]
test(`${example} => `, () => {
  expect(listArray(partition(arrayList([0,8,1,3,4,5,7,2,4,3,2,5,2]), 3))).toStrictEqual([0,1,2,2,2,8,3,4,5,7,4,3,5])
})
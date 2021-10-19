const _ = require('lodash')

const items = [1, 2, [2, 4, [3, 4]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
var moment = require('moment')
var unique = require('uniq')

const myDate = new Date()
const myCoolDate = moment(myDate).format('dddd')

const myList = [1, 2, 1, 1, 1, 1, 3, 3, 4, 5, 6, 7, 4]

const myUniqueList = unique(myList)

console.log(myCoolDate)
console.log(myUniqueList)
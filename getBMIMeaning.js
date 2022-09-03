const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  BMI = weight/(height*height)
  return BMI
 
}
function getBMIMeaning(weight, height) {
  
}
module.exports = getBMIMeaning

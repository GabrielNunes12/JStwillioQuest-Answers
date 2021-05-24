const firstValue = process.argv[2];
const secondValue = process.argv[3];

if(String(firstValue).toLowerCase() < String(secondValue).toLowerCase()) {
  console.log('-1');
} else if(String(firstValue).toLowerCase() === String(secondValue).toLowerCase()) {
  console.log('0');
} else if(String(firstValue).toLowerCase() > String(secondValue).toLowerCase()) {
  console.log('1');
}
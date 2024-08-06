/**
 * Given Number : 3245
 * 
 * Output
 * Number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245.
Output : Colorful
this number is a colorful number, since product of every digit of a sub-sequence are different.
That is, 3 2 4 5 (3*2)=6 (2*4)=8 (4*5)=20, (3*2*4)= 24 (2*4*5)= 40

Given Number : 326

Output : Not Colorful.

326 is not a colorful number as it generates 3 2 6 (3*2)=6 (2*6)=12.

 * @param {*} number 
 */

const isColorful = (number) => {
  const products = new Set();
  const numberLength = number.toString().length;

  for (let i = 1; i < numberLength; i++) {
    for (let j = 0; j + i <= numberLength; j++) {
      const subString = number.toString().substring(j, j + i);
      const product = subString
        .split("")
        .reduce((acc, digit) => acc * parseInt(digit), 1);
      if (products.has(product)) {
        return false;
      }
      products.add(product);
    }
  }
  return true;
};

console.log(isColorful(3245) ? "Colorful" : "Not Colorful");
console.log(isColorful(326) ? "Colorful" : "Not Colorful");
console.log(isColorful(3245) ? "Colorful" : "Not Colorful");
console.log(isColorful(32458) ? "Colorful" : "Not Colorful");
console.log(isColorful(111111111111) ? "Colorful" : "Not Colorful");
console.log(isColorful(123456789) ? "Colorful" : "Not Colorful");
console.log(
  isColorful(
    21231313546543132165874785464351653785346846316381681613577136513658136816351653136581351234123156156387436516531168153864683163813681638163816381683136816
  )
    ? "Colorful"
    : "Not Colorful"
);

// 1.set和map都是对象
// 2.set是去除重复值的对象
var uniqueWords = new Set('wordsw');
console.log(uniqueWords); //Set(5) { 'w', 'o', 'r', 'd', 's' }
for (var word of uniqueWords) {
  console.log(word); //'w', 'o', 'r', 'd', 's'
}

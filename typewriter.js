const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, (time += 50));
}
setTimeout(() => {
  console.log();
}, (time))

// for (let i = 0; i < sentence.length; i++){
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 50 * i);
// }

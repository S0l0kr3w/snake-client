const stdin = process.stdin;
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connectionObject = connect();

setupInput(connectionObject);

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();

//   stdin.on('data', (key) => { 
//     handleUserInput(key);
//   })
//   return stdin;
// }

// const handleUserInput = function(key) {
//   if(key === '\u0003') {
//     process.exit()
//   }
// };

// setupInput();


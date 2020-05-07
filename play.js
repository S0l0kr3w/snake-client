const stdin = process.stdin;
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connectionObject = connect();

setupInput(connectionObject);




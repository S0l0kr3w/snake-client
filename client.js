const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Server says: ', data); 
    // conn.write("Move: up");
    // conn.write("Move: right");
    // conn.write("Move: up");
    // conn.write("Move: right");
  });

  conn.on('connect', (data) => {
    console.log("Successfully connected to the game server");
    conn.write("Name: JJJ");
    
    // setInterval(() => conn.write("Move: up"), 50);
    // conn.write("Move: right");
    // conn.write("Move: up");
    // conn.write("Move: right");
    
  });
  conn.setEncoding('utf8'); 
  
  return conn;
}

module.exports = { connect };
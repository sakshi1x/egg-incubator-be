const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const http = require('http');
const socketIO = require('socket.io');

// Create a new HTTP server
const server = http.createServer();

// Create a new socket.io instance and attach it to the server
const io = socketIO(server);

// Define the serial port configuration
const port = new SerialPort('COM3', { baudRate: 9600 }); // Replace 'COM3' with the appropriate port

// Create a parser to read data from the serial port
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// Event handler for receiving data from the Arduino
parser.on('data', (data) => {
    const [temperature, humidity] = data.split(' ');

    // Send only temperature and humidity to connected clients via socket.io
    io.emit('sensorData', { temperature, humidity });
});

// Start the server
const portNumber = 3000; // Replace with the desired port number
server.listen(portNumber, () => {
    console.log(`Server is running on http://localhost:${portNumber}`);
});

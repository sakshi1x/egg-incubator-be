const SerialPort = require('serialport');

// Specify the COM port and baud rate according to your NodeMCU configuration
const port = new SerialPort('COM4', {
    baudRate: 9600,
});

// Parse data received from the serial port
port.on('data', function (data) {
    const dataString = data.toString().trim();

    if (dataString.startsWith('Temperature:') && dataString.includes('Humidity:')) {
        const temperature = parseFloat(dataString.split('Temperature:')[1].split('°C')[0].trim());
        const humidity = parseFloat(dataString.split('Humidity:')[1].split('%')[0].trim());

        console.log('Temperature:', temperature, '°C');
        console.log('Humidity:', humidity, '%');
    }
});

// Handle errors
port.on('error', function (err) {
    console.error('Serial port error:', err);
});

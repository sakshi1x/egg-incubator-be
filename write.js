const express = require('express');
const app = express();
const { Board, Led } = require('johnny-five');

// Create a new Johnny-Five board object
const board = new Board();

const FAN_PIN = 2;

// Initialize the board
board.on('ready', () => {
    const relay1 = new Relay(2);
    const relay2 = new Relay(3);
    const relay3 = new Relay(4);
    const relay4 = new Relay(5);
    const toggleRelay = (relay) => {
        relay.toggle();
        console.log(`Relay ${relay.pin} state: ${relay.isOn ? 'ON' : 'OFF'}`);
    };

    // Example: Toggle relay 1 (connected to pin 2)
    toggleRelay(relay1);

    // Example: Toggle relay 2 (connected to pin 3) after a delay of 2 seconds
    setTimeout(() => {
        toggleRelay(relay2);
    }, 2000);

    // Example: Toggle relay 3 (connected to pin 4) after a delay of 4 seconds
    setTimeout(() => {
        toggleRelay(relay3);
    }, 4000);

    // Example: Toggle relay 4 (connected to pin 5) after a delay of 6 seconds
    setTimeout(() => {
        toggleRelay(relay4);
    }, 6000);
    // Create a new LED object for the fan pin
    const fan = new Led(FAN_PIN);

    // API endpoint to control the fan
    app.post('/fan', (req, res) => {
        // Toggle the fan on/off
        fan.toggle();
        res.sendStatus(200);
    });

    // Start the server
    app.listen(3001, () => {
        console.log('Server is running on port 3000');
    });
});

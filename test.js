const { Board, Relay } = require('johnny-five');
const board = new Board();

const RELAY_PIN_1 = 2;
const RELAY_PIN_2 = 3;
const RELAY_PIN_3 = 4;
const RELAY_PIN_4 = 5;

board.on('ready', () => {
    const relay1 = new Relay(RELAY_PIN_1);
    const relay2 = new Relay(RELAY_PIN_2);
    const relay3 = new Relay(RELAY_PIN_3);
    const relay4 = new Relay(RELAY_PIN_4);

    const toggleRelay = (relay) => {
        relay.toggle();
        console.log(`Relay ${relay.pin} state: ${relay.isOn ? 'ON' : 'OFF'}`);
    };

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        processCommand(input);
    });

    const processCommand = (command) => {
        switch (command) {
            case '1':
                toggleRelay(relay1);
                break;
            case '2':
                toggleRelay(relay2);
                break;
            case '3':
                toggleRelay(relay3);
                break;
            case '4':
                toggleRelay(relay4);
                break;
            default:
                console.log('Invalid command');
                break;
        }
    };
});

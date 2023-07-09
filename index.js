const express = require('express');
const app = express();

// Define the relay states
let relay1 = false;
let relay2 = false;
let relay3 = false;
let relay4 = false;

// API endpoint to get the relay states
app.get('http://172.25.0.3:3001/api/get-relay', (req, res) => {
  const relayData = {
    relay1,
    relay2,
    relay3,
    relay4,
  };
  res.json(relayData);
});

// API endpoint to update the relay states
app.post('http://172.25.0.3:3001/api/update-relay', (req, res) => {
  // Get the updated relay states from the request body
  let { relay1, relay2, relay3, relay4 } = req.body;

  // Update the relay states
  relay1 !== undefined && (relay1 = relay1 === 'true');
  relay2 !== undefined && (relay2 = relay2 === 'true');
  relay3 !== undefined && (relay3 = relay3 === 'true');
  relay4 !== undefined && (relay4 = relay4 === 'true');

  res.sendStatus(200);
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

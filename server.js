const express = require('express');
const cors = require('cors');
const path = require('path');

const http = require('http');
const WebSocket = require('ws');

// ----- 1. Create Express app -----
const app = express();
app.use(cors());
// Test endpoint
app.get('/test', (req, res) => {
  res.send('Hello World');
});

// ----- 2. Create HTTP server -----
const server = http.createServer(app);

// ----- 3. Create WebSocket server -----
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () => console.log('Client disconnected'));
});

// ...existing code...
app.get('/cube', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
// ...existing code...

// ----- 4. Start server -----
const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Test endpoint: http://192.168.137.1:${PORT}/test`);
});




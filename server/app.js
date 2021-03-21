const express = require('express');
const http = require('http');
const startSchedule = require('./utils/scheduler.js');


const httpApp = express();

// Initialize globals vars
global.ikbHolders = null;

// Initialize server vars
let httpServer;

// Create server
httpServer = http.createServer(httpApp);

httpServer.listen(5000, () => {
  console.log(`HTTP Express server listening on port ${httpServer.address().port}`);
});

// Use api route
httpApp.use('/api/', require('./routes'));

// Final 404 catch
httpApp.use((req, res) => {
  res.status(404).json({ err: { msg: '404 Not Found!' } });
});

startSchedule();
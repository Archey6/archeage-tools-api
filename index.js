const express = require('express');
const fs = require('fs');
const app = express();

// Define a sample JSON data object
const jsonData = JSON.parse(fs.readFileSync('items.json', 'utf-8'));

// Define an API endpoint to retrieve JSON data by multiple IDs
app.get('/api/items', (req, res) => {
    const ids = req.query.ids.split(',').map(id => parseInt(id));
    const data = ids.map(id => jsonData[id]);
    res.json(data.filter(item => item)); // Filter out undefined items
});

// Define a default route
app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

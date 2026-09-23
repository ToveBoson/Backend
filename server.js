const express = require('express');
const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Backend Development!",
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

app.get('/api/hello', (req, res) => {
    res.json({
        status: 'success',
        data: {
            message: 'Hello from the backend!',
            method: req.method,
            url: req.url
        }
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        status: 'success',
        data: {
            timestamp: new Date().toISOString(),
            version: '1.0.0',
        }
    })
});


app.get('/api/greet/:name', (req, res) => {
    const { name } = req.params;

    res.json({
        status: 'success',
        data: {
            message: `Hello, ${name}! Welcome to the backend!`,
            method: req.method,
            url: req.url
        }
    })
})

app.post('/api/feedback', (req, res) => {
    const { name, feedback } = req.body;

    if (!name || !feedback) {
        return res.status(400).json({
            status: 'error',
            message: 'Name and feedback are required fields.'
        })
    }

    res.json({
        status: 'success',
        data: {
            message: `Thank you for your feedback, ${name}!`,
            feedback: feedback,
            method: req.method,
            url: req.url
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
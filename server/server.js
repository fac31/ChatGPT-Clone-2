// test_server.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
import('node-fetch').then(({ default: fetch }) => {
    // Your code that uses fetch goes here
}).catch(error => {
    console.error('Error while importing node-fetch:', error);
});
const session = require('express-session');


// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', // Change this to a more secure secret in production
    resave: false,
    saveUninitialized: true,
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Store the API key securely in an environment variable
const apiKey = process.env.CHATGPT_API_KEY;

// // Route to send text to the OpenAI API
// app.post('/send-request', async (req, res) => {
//     const text = req.body.text;

//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + apiKey
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "user", content: text }]
//             })
//         });

//         const data = await response.json();

//         if (data.choices && data.choices.length > 0 && data.choices[0].message) {
//             const generatedText = data.choices[0].message.content;
//             return res.status(200).json({ generatedText });
//         } else {
//             return res.status(400).json({ error: "No response or unexpected response structure." });
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });
// Route to send text to the OpenAI API
app.route('/send-request')
   .get((req, res) => {
       // Handle GET request
       res.status(200).send('GET request received');
   })
   .post(async (req, res) => {
       // Handle POST request
       const text = req.body.text;

       try {
           const response = await fetch('https://api.openai.com/v1/chat/completions', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + apiKey
               },
               body: JSON.stringify({
                   model: "gpt-3.5-turbo",
                   messages: [{ role: "user", content: text }]
               })
           });

           const data = await response.json();

           if (data.choices && data.choices.length > 0 && data.choices[0].message) {
               const generatedText = data.choices[0].message.content;
               return res.status(200).json({ generatedText });
           } else {
               return res.status(400).json({ error: "No response or unexpected response structure." });
           }
       } catch (error) {
           console.error('There was a problem with the fetch operation:', error);
           return res.status(500).json({ error: "Internal server error" });
       }
   });
   
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
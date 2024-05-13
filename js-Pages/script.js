// Global variable to store the API key
let globalApiKey = '';

let keyFormat = /^([a-z]{2})+-([a-zA-Z0-9.-]+)$/i;

// JavaScript function to store API key in a global variable
function storeAPIKey() {
    // Get the value entered in the input field
    var apiKey = document.getElementById('api-key-input').value;
    if(apiKey === "" || keyFormat.test(apiKey) == false){
        alert("Please Enter a valid API Key");
        return;
    }else{
        alert("API Key is stored successfully");
    }
    // Store the API key in the global variable
    globalApiKey = apiKey;

    // Optionally, log to the console for verification (remove in production)
    console.log("API Key stored successfully");

    // Hide the API key input field and submit button for security reasons
    document.getElementById('api-key-input').style.display = 'none';
    document.querySelector('button[onclick="storeAPIKey()"]').style.display = 'none';
}

// Function to capture form data and send it to the OpenAI API
function displayText() {
    // Get the text from the textarea
    var text = document.getElementById('input-text').value;

    // Check if the text is empty
    if (text.trim() === '') {
        // If text is empty, display a popup message
        alert("Please try again and enter some text.");
        return;
    }

    // Check if API Key is stored
    if (!globalApiKey) {
        alert("API Key is missing. Please store the API Key first.");
        return;
    }

    if(text == ""){
        alert("Please enter your message");
        return
    }

    // Send the captured text to the OpenAI API
    sendRequest(text);

}

// Function to send request to the OpenAI API
function sendRequest(text) {
    // Use the globally stored API key
    var apiKey = globalApiKey;

    // Construct the request data
    var requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // Ensure you're using the correct model for your use case
            messages: [{role: "user", content: text}]
        })
    };

    // Send the request to the OpenAI API
    fetch('https://api.openai.com/v1/chat/completions', requestData)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok. Status:', response.status);
        }
        return response.json(); // This parses the JSON body of the response
    })
    .then(function(data) {
        // Assuming the structure of the response and extracting the content
        // Check if data.choices exists and has at least one entry
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            // For /v1/chat/completions, the response structure is different; adjust accordingly
            var generatedText = data.choices[0].message.content; // Adjusted for chat completions endpoint

            // Find the display area in the DOM
            var displayArea = document.getElementById('display-area');

            // Set the text content of the display area to the generated text
            displayArea.textContent = generatedText; // Displaying the response directly
        } else {
            // Handle case where response does not contain expected data
            document.getElementById('display-area').textContent = "No response or unexpected response structure.";
        }
    })
    .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('display-area').textContent = error.message;
    });

    //..
}

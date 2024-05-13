<h1 align="center"> ChatGPT-Clone 🤖 </h1>

This project is a simple web application that utilizes OpenAI's GPT model to generate responses based on user input, mimicking a chatbot-like experience. It consists of a frontend interface where users can input text, and a backend server that processes the input and generates responses using the GPT model.

## Features
* Text Input: Users can enter text input in a text area provided by the frontend interface.
* Response Generation: Upon submitting the text input, the backend server processes it using the GPT model and generates a response.
* Display Response: The generated response is displayed back to the user in the frontend interface.

## Technologies Used
* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* OpenAI API: Utilized for text generation using the GPT model

## Setup

1. **Clone the Repository**: git clone https://github.com/your-username/chatgpt-clone2.git
2. **Install Dependencies**: cd chatgpt-clone, npm install
3. **Environment Variables**: Create a `.env` file in the root directory and add the following variables: CHATGPT_API_KEY=your-openai-api-key
PORT=3000
4. **Start the Server**: npm start
5.  **Access the Application**: Open your web browser and navigate to `http://localhost:3000`.


## Configuration
* CHATGPT_API_KEY: You need to obtain an API key from OpenAI to use the GPT model. Replace your-openai-api-key with your actual API key.
* PORT: Specifies the port on which the backend server will run. Default is 3000.

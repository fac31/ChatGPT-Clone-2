// frontend.js

// async function displayText() {
//     const text = document.getElementById('input-text').value;

//     try {
//         const response = await fetch('http://localhost:5500/send-request', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text })
//         });

//         const data = await response.json();
//         document.getElementById('display-area').textContent = data.generatedText;
//     } catch (error) {
//         console.error('There was a problem sending the request:', error);
//         // Handle error
//     }
// }

// document.getElementById('sendBtn').addEventListener('click', displayText);
async function displayText() {
    const text = document.getElementById('input-text').value;

    try {
        const response = await fetch('http://localhost:3000/send-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        document.getElementById('display-area').textContent = data.generatedText;
    } catch (error) {
        console.error('There was a problem sending the request:', error);
        // Handle error
    }
}

document.getElementById('sendBtn').addEventListener('click', displayText);

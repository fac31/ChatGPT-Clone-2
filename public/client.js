async function displayText() {
  const text = document.getElementById("input-text").value;

  try {
    const response = await fetch("http://localhost:3000/send-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    clearUserMessage(document.getElementById("input-text"));
    const data = await response.json();
    console.log("log: " + data.generatedText);
    document.getElementById("display-area").textContent = data.generatedText;
    isTextBoxEmpty();
  } catch (error) {
    console.error("There was a problem sending the request:", error);
    // Handle error
  }
}

document.getElementById("sendBtn").addEventListener("click", displayText);

function clearUserMessage(userInput) {
  userInput.value = "";
}



function isTextBoxEmpty() {
  if (document.getElementById("input-text").value === "") {
    document.getElementById("sendBtn").disabled = true;
  } else {
    document.getElementById("sendBtn").disabled = false;
  }
}

function autoExpand(textarea) {
  
  // Reset height to minimum to calculate the scroll height
  textarea.style.height = "auto";

  // Set the height of the textarea to its scroll height
  textarea.style.height = textarea.scrollHeight + "px";
}






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

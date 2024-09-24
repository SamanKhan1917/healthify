// Import the Dialogflow library
const { dialogflow } = require('dialogflow');

// Initialize the Dialogflow client
const client = new dialogflow.SessionsClient();

// Set up event listeners to handle user input
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');

sendButton.addEventListener('click', () => {
    const userInputText = userInput.value;
    const sessionId = 'your-session-id';
    const languageCode = 'en-US';

    // Create a new session
    const sessionPath = client.sessionPath('your-project-id', sessionId);

    // Create a new query
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: userInputText,
                languageCode: languageCode,
            },
        },
    };

    // Send the query to Dialogflow
    client.detectIntent(request)
        .then(response => {
            const responseText = response.queryResult.fulfillmentText;
            chatLog.innerHTML += `Bot: ${responseText}<br>`;
            userInput.value = '';
        })
        .catch(error => {
            console.error(error);
        });
});

# Chatbot Interface Project

## Overview
This project is a simple web-based chatbot interface. It demonstrates how to build a basic chat UI using HTML, CSS, and JavaScript, and simulates chatbot responses using predefined messages. The project is ideal for learning about web development fundamentals and basic chatbot logic.

## Features
- Clean and modern chat interface
- User input area and message display area
- Simulated chatbot responses based on predefined messages
- Basic error handling for unrecognized input

## File Structure
- `index.html`: The main HTML file containing the structure of the chatbot interface.
- `chatbot.js`: JavaScript file handling user input, displaying messages, and simulating chatbot responses.
- `styles.css`: (Optional) CSS file for custom styles. Most styles are currently inlined in `index.html`.

## How It Works
1. The user types a message and clicks "Send".
2. The user's message appears in the chat area.
3. The chatbot responds with a predefined message if it recognizes the input, or an error message if not.

## Getting Started
1. Open `index.html` in your web browser.
2. Type a message in the input box and click "Send".
3. View the conversation in the chat area.

## Customization
- To add more chatbot responses, edit the `responses` object in `chatbot.js`.
- You can move the inline CSS from `index.html` to `styles.css` for better organization.

## Example Inputs
- `hello`
- `how are you`
- `what is your name`
- `goodbye`

## Error Handling
If the chatbot does not recognize the user's input, it will respond with:
> Sorry, I didn't understand that.

---

Feel free to expand this project by connecting it to a real backend or adding more advanced features! 
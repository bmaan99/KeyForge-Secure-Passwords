import React, {useState} from "react";

function generateRandomPassword(numberOfChars)
{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = '';
      
    for (let i = 0; i < numberOfChars; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
      
    return password;    
}

// Function component named MainContent
export default function MainContent() {
    // State variables for input value and output value
    const [inputValue, setinputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    // Event handler for input change
    const handleChange = (event) => {
        // Update the input value state with the entered value
        setinputValue(event.target.value);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        try {
          // Try to parse the input value to an integer
          const numberOfChars = parseInt(inputValue);
    
          if (isNaN(numberOfChars) || numberOfChars <= 0) {
            // Handle the case where the input is not a valid positive integer
            alert("Please enter a Integer value to continue")
            throw new Error('Please enter a valid positive integer.');
          }
    
          // Generate a random password based on the input length
          const randomPasswordOutput = generateRandomPassword(numberOfChars);
    
          // Update the output value state with the generated password
          setOutputValue(randomPasswordOutput);
        } catch (error) {
          // Handle the error (e.g., display an error message)
          console.error(error.message);
        }
      };

    // Function to handle copying the generated password to the clipboard
    const handleCopyToClipboard = () => {
        // Create a temporary textarea element to hold the password for copying
        const textarea = document.createElement('textarea');
        
        // Set the value of the textarea to the generated password
        textarea.value = outputValue;
        
        // Append the textarea to the document body
        document.body.appendChild(textarea);
        
        // Select the contents of the textarea
        textarea.select();
        
        // Execute the copy command to copy the selected text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary textarea from the document body
        document.body.removeChild(textarea);

        // Optionally, provide user feedback (e.g., a tooltip or notification)
        alert('Password copied to clipboard!');
    };

    

    // JSX structure for the main content
    return (
        <div className="main-content-container">
            {/* Form for user input and password generation */}
            <form onSubmit={handleSubmit}>
                <label className="user-prompt-label">
                    Enter length of your Password:
                    {/* Input field for the user to enter the password length */}
                    <input className="length-input" type="text" inputValue={inputValue} onChange={handleChange} />
                </label>
                {/* Submit button to trigger password generation */}
                <input className="submitButton" type="submit" value="Generate Password" />
            </form>

            {/* Display label for the generated password */}
            <label className="output-value-label"> Your password is: 
            {/* Display the generated password */}
            <span>{outputValue}</span>

            {/* Button to copy the generated password to clipboard */}
            <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            </label>

            
        </div>
    );
}
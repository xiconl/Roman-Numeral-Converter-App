# Roman-Numeral-Converter-App
This is a web tool that converts numbers (1 - 3999) to roman numeral built with html,css and javascript
It's features are;
Key Functionalities:
    Input Validation

        - Rejects non-numeric characters, decimals, or empty inputs using regex (/^\d+$/).

        - Ensures numbers are between 1 and 3999.

    Conversion Algorithm

        - Uses a lookup array of Roman symbol-value pairs (e.g., ["M", 1000]).

        - Iteratively subtracts the largest possible values to build the Roman numeral string.

    User Feedback

        - Displays real-time results or error messages (e.g., "Please enter a valid number").

        - Error messages are highlighted with a red alert style.

Technical Implementation:
    DOM Manipulation: Dynamically updates the output area without page reloads.

    Event Handling: Triggers conversion on form submission or button click.

    Edge Cases: Handles zero, negatives, and values ≥4000 with specific error messages.

User Experience:
    Simple, intuitive interface for instant conversions.

    Clear error handling to guide valid input.

Example: Input 3005 → Output MMMV.
Example: Input 1999 → Output MCMXCIX.
Example: Input 850 → Output DCCCL.
Example: Input 11 → Output XI.
Example: Input 7 → Output VII.

This project is created to solve a real time problems of converting numbers to roman numerals

visit wwww.roman-numeral-converter-app-murex.vercel.app for the live demo.
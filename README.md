# Calculator App

## Overview

This is a simple calculator app built with React.js. It has a display that shows the current input and result of the calculation. As the user types in their calculation, a preview of the result is shown.

## Functionality

The app has buttons for the digits 0-9, as well as buttons for the following operations:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Percentage (%)
- Toggle sign (+/-)
- Clear (DEL)
- Calculate (equal sign)

The `updateCalc` function is called whenever a button is clicked, and updates the current input (`calc` state) with the value of the button. The function also updates the result (`result` state) with the current input if it is a number, and handles the special cases for the operations.

The `calculate` function is called when the equal sign button is clicked, and sets the `calc` state to the result of the calculation.

The `deleteLast` function is called when the DEL button is clicked, and removes the last character from the `calc` state.

## Styling

The app is styled using CSS and flexbox layout.

## Using the Calculator

To use the calculator, simply click the buttons for the numbers and operations you want to use. The input and result will be displayed on the calculator's display. As you type, a preview of the result is shown. To calculate the result, click the equal sign button. To clear the input, click the DEL button.


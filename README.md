# calculator-project

In this project I was tasked to build a simple calculator using basic Javascript, SCSS and HTML.

1. HTML: Firstly, I began this project by building out my HTML skeleton with sematically named classes and id's that would accessed by the CSS and JS files. I attemtped to follow BEM conventions throughout this file

2. SCSS: I then applied basic stylings to match the Apple Iphone calculator design in the brief using SCSS, applying flexbox and grid layout tools where necessary. I built the app with mobile dimensions in mind and then later applied a media screen for larger devices. I also followed SASS conventions by splitting up my SCSS files for a more organised structure.

3. JavaScript: The calculator's functionality was achieved by utilising some key fundamentals of JS, such as variables, both local and global, conditional statments and logic, functions and event listeners.

4. JavaScript continued: I attempted to 'decompose' the project into individual steps to be completed one by one:

- I began by creating global variables from the classes and id's in my HTML file using the querySelector method.
- After this, I wrote the code for the functions and corresponding event listeners so that when buttons on my calculator were press, it would perform a simple calculation. More detail on this below if you are interested.

FUNCTIONS EXPLAINED:

    handleNumberClick:
    This function is triggered by the event of one of the numberButtons being clicked. When a number is pressed, this number will appear on the display through the use of .innerText. The function also had to handle a combination of clicks such as 'Number' + 'Operator' + 'Number' so I created a conditional if statements to make sure that numbers and operators could be concatenated in the same string so a calculation could take place.

    handleOperatorClick:
    Triggered by the event of one of the operatorButtons being clicked. When an operator is clicked, the function retrieves the inner text of the button that was clicked and assigns it to a variable called incomingOperator. It then stores the operator that was clicked and updates the displayTotal with the clicked operator.

    handleCancelClick:
    Triggered by the event of the cancel button being clicked. The function sets the text displayed in the calculator's total display element (displayTotal) to "0", effectively resetting the display to its initial state. I also made sure I resets the global variables 'operator', 'firstNumber', 'secondNumber', and 'total' to empty strings in order to make the calculator ready for new calculations.

    handleEqualsClick:
    Triggered by the event of the equals button being clicked. It first checks which operators has been clicked, then outputs 4 different outputs based on the operators. A very simple calculation then follows if the conditions are met and the output then appears on the displayTotal. However, if the conditons are not met, the function displays an error message by triggering an alert().

EVENT LISTENERS EXPLAINED:

    The event listeners section allows the user to interact with the calculator by clicking on any of the four classes of buttons. This event of a "click" then triggers the corresponding functions I have explained above.

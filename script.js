// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const changeColorBtn = document.getElementById('changeColorBtn');

    // Add click event listener to the button
    changeColorBtn.addEventListener('click', function () {
        // Generate random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    });
});
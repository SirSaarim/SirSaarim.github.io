function forward() {
   var i;
   var repeat;
   var text;
   text = prompt("Text to repeat: ");
   repeat = prompt("How many times you want to repeat the text");
   repeat = parseInt(repeat);
   writeBackButton(); // Call the function to write the back button
   writeBootstrapStylesheet(); // Call the function to write the Bootstrap stylesheet
   document.write('<style>body { background-color: #15202b; }</style>'); // Set background color

   for (i = 1; i <= repeat; i++) {
      document.write('<p style="margin:0;color:aqua;">' + i + ". " + text + "</p>");
   }
}

function backwards() {
   var i;
   var repeat;
   var text;
   text = prompt("Text to repeat: ");
   repeat = prompt("How many times you want to repeat the text");
   repeat = parseInt(repeat);
   writeBackButton(); // Call the function to write the back button
   writeBootstrapStylesheet(); // Call the function to write the Bootstrap stylesheet
   document.write('<style>body { background-color: #15202b; }</style>'); // Set background color
   for (i = repeat; i >= 0; i--) {
      document.write('<p style="margin:0;color:aqua;">' + i + ". " + text + "</p>");
   }
}

function downhill() {
   var i;
   var repeat;
   var text;
   var newText;
   var currentChar = 0;

   text = prompt("Text to repeat: ");
   newText = text.charAt(currentChar);
   repeat = prompt("How many times you want to repeat the text");
   repeat = parseInt(repeat);
   writeBackButton(); // Call the function to write the back button
   writeBootstrapStylesheet(); // Call the function to write the Bootstrap stylesheet
   document.write('<style>body { background-color: #15202b; }</style>'); // Set background color
   document.write('<p style="margin:0;color:aqua;">'); // Set paragraph style

   for (i = 1; i <= repeat; i++) {
      document.write(i + ". " + newText + "<br>");
      currentChar++;
      newText = newText + text.charAt(currentChar);
      if (currentChar == text.length) {
         currentChar = -1;
      }
   }

   document.write('</p>'); // Close the paragraph
}

function vertical() {
   var i;
   var repeat;
   var text;
   var newText;
   var currentChar = 0;

   text = prompt("Text to repeat: ");
   newText = text.charAt(currentChar);
   repeat = prompt("How many times you want to repeat the text");
   repeat = parseInt(repeat);
   writeBackButton(); // Call the function to write the back button
   writeBootstrapStylesheet(); // Call the function to write the Bootstrap stylesheet
   document.write('<style>body { background-color: #15202b; }</style>'); // Set background color
   document.write('<p style="margin:0;color:aqua;">'); // Set paragraph style

   for (i = 1; i <= repeat; i++) {
      document.write(newText + "<br>");
      currentChar++;
      if (currentChar == text.length) {
         currentChar = 0;
      }
      newText = text.charAt(currentChar);
   }

   document.write('</p>'); // Close the paragraph
}


function writeBackButton() {
   document.write('<div style="margin-top: 100px; margin-bottom: 10px;"><button class="btn btn-light" onclick="goBack()">Go Back</button></div>');
}

function writeBootstrapStylesheet() {
   document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />');
}

function goBack() {
   location.reload(); // Reload the current page
}
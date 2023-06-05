function forward() {
    var i;
    var repeat;
    var text;
    text = prompt("Text to repeat: ");
    repeat = prompt("How many times you want to repeat the text");
    repeat = parseInt(repeat);
    for (i = 1; i <= repeat; i++) {
       //  document.write('<p style="margin:0 0 0 0;color:white;background:black;">' + i);
       // document.write(". ");
       // document.write(text + "</p>");
       document.write(i);
       document.write(". ");
       document.write(text);
       document.write("<BR>");
    }
 }
 
 function backwards() {
    var i;
    var repeat;
    var text;
 
    text = prompt("Text to repeat: ");
    repeat = prompt("How many times you want to repeat the text");
    repeat = parseInt(repeat);
 
    for (i = repeat; i >= 0; i--) {
       document.write(i);
       document.write(". ");
       document.write(text);
       document.write("<BR>");
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
 
    for (i = 1; i <= repeat; i++) {
       //document.write(i);
       //document.write(". ");
       document.write(newText);
       currentChar++;
       newText = newText + text.charAt(currentChar);
       if (currentChar == text.length) {
          currentChar = -1;
       }
       document.write("<BR>");
    }
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
 
    for (i = 1; i <= repeat; i++) {
       //document.write(i);
       //document.write(". ");
       document.write(newText);
       currentChar++;
       newText = text.charAt(currentChar);
       if (currentChar == text.length) {
          currentChar = -1;
       }
       document.write("<BR>");
    }
 }
 
 function goBack() {
    document.getElementsByClassName("font-weight-bold").style.visibility = "hidden";
    document.getElementById("buttonBack").style.visibility = "hidden";
    document.getElementById("paraResult").style.visibility = "hidden";
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("button2").style.visibility = "visible";
    document.getElementById("button3").style.visibility = "visible";
    document.getElementById("button4").style.visibility = "visible";
 }
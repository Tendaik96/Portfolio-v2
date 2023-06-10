// function([string1, string2],target id,[color1,color2])

consoleText(["Hi, I'm Tendai"], "text", ["violet", "Black", "#fb6f92"], 150);
consoleText(
  ["A Full-Stack Software Developer"],
  "stack",
  ["black", "black", "black"],
  65
);

function consoleText(words, id, colors, speed) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 2000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 100000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, speed);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}



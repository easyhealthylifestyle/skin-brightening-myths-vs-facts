(function () {
  "use strict";

  var claims = document.querySelectorAll(".claim");
  var answeredEl = document.getElementById("answered");
  var resultEl = document.getElementById("result");
  var resetBtn = document.getElementById("reset");
  var total = claims.length;
  var answered = 0;
  var correct = 0;

  function handlePick(claim, button) {
    var pick = button.getAttribute("data-pick");
    var answer = claim.getAttribute("data-answer");
    var verdict = claim.querySelector(".verdict");
    var label = claim.querySelector(".verdict-label");
    var buttons = claim.querySelectorAll(".choice");
    var isRight = pick === answer;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    button.classList.add("is-picked");
    button.setAttribute("aria-pressed", "true");

    var verdictText = answer === "fact" ? "This one holds up." : "This one doesn't hold up.";
    label.textContent = (isRight ? "You got it. " : "Not quite. ") + verdictText;

    verdict.hidden = false;
    verdict.classList.add("is-revealed");

    answered += 1;
    if (isRight) {
      correct += 1;
    }
    updateTally();
  }

  function updateTally() {
    answeredEl.textContent = String(answered);

    if (answered === total) {
      var message;
      if (correct === total) {
        message = "You checked all six correctly. You already read supplement claims with a sharp eye.";
      } else if (correct >= 4) {
        message = "You got " + correct + " of " + total + ". A few claims are easy to fall for, especially on timelines and regulation.";
      } else {
        message = "You got " + correct + " of " + total + ". Many of these claims are common in ads, so you're far from alone.";
      }
      resultEl.textContent = message;
      resultEl.hidden = false;
      resetBtn.hidden = false;
    }
  }

  function resetAll() {
    for (var i = 0; i < claims.length; i++) {
      var claim = claims[i];
      var verdict = claim.querySelector(".verdict");
      var buttons = claim.querySelectorAll(".choice");

      verdict.hidden = true;
      verdict.classList.remove("is-revealed");
      claim.querySelector(".verdict-label").textContent = "";

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].disabled = false;
        buttons[j].classList.remove("is-picked");
        buttons[j].removeAttribute("aria-pressed");
      }
    }

    answered = 0;
    correct = 0;
    answeredEl.textContent = "0";
    resultEl.hidden = true;
    resultEl.textContent = "";
    resetBtn.hidden = true;

    var firstChoice = document.querySelector(".choice");
    if (firstChoice) {
      firstChoice.focus();
    }
  }

  for (var k = 0; k < claims.length; k++) {
    (function (claim) {
      claim.addEventListener("click", function (event) {
        var button = event.target.closest(".choice");
        if (button && !button.disabled) {
          handlePick(claim, button);
        }
      });
    })(claims[k]);
  }

  resetBtn.addEventListener("click", resetAll);
})();

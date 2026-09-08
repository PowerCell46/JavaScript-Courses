function solve() {
  let rightAnswers = 0;

  let questions = document.querySelectorAll("section");
  let answers = document.getElementsByClassName("answer-text");

  answers[0].addEventListener("click", function firstOption() {
    rightAnswers++;
    questions[0].style.display = "none";
    questions[1].style.display = "block";
  })
  answers[1].addEventListener("click", function secondOption() {
    questions[0].style.display = "none";
    questions[1].style.display = "block";
  })

  answers[2].addEventListener("click", function thirdOption() {
    questions[1].style.display = "none";
    questions[2].style.display = "block";
  })
  answers[3].addEventListener("click", function fourthOption() {
    rightAnswers++;
    questions[1].style.display = "none";
    questions[2].style.display = "block";
  })

  answers[4].addEventListener("click", function fifthOption() {
    rightAnswers++;
    questions[2].style.display = "none";
    let results = document.getElementById("results")
    results.style.display = "block";
    
    let resultField = document.querySelector("#results h1");
    if (rightAnswers === 3) {
      resultField.textContent = "You are recognized as top JavaScript fan!"
    } else { 
      resultField.textContent = `You have ${rightAnswers} right answers`
    }
  })
  answers[5].addEventListener("click", function sixthOption() {
    console.log("The final one is wrong!");
    questions[2].style.display = "none";
    let results = document.getElementById("results")
    results.style.display = "block";
    
    let resultField = document.querySelector("#results h1");
    if (rightAnswers === 3) {
      resultField.textContent = "You are recognized as top JavaScript fan!"
    } else { 
      resultField.textContent = `You have ${rightAnswers} right answers`
    }
  })
}

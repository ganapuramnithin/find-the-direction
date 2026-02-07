const form = document.getElementById("lifeForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("status").value;
    const challenge = document.getElementById("challenge").value;

    let message = "";

    if (status === "student") {
      message =
        "You are a student. Confusion is normal at this stage. Focus on learning skills and exploring interests without rushing decisions.";
    } 
    else if (status === "job") {
      message =
        "As a job seeker, clarity and consistency matter more than speed. Improve skills and apply strategically.";
    } 
    else if (status === "working") {
      message =
        "You are working but feeling unsure. Plan carefully before switching and upgrade skills step by step.";
    }

    if (challenge === "family") {
      message += " Communicate calmly with your family and explain your plan.";
    }
    else if (challenge === "fear") {
      message += " Fear is natural. Don’t let it stop you from taking small steps.";
    }
    else if (challenge === "confidence") {
      message += " Confidence grows through action, not waiting.";
    }

    localStorage.setItem("result", message);
    window.location.href = "result.html";
  });
}

const resultText = document.getElementById("resultText");
if (resultText) {
  resultText.innerText = localStorage.getItem("result");
}


const form = document.getElementById("lifeForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("status").value;
    const challenge = document.getElementById("challenge").value;

    let message = "";

    if (status === "student") {
      message = "You are a student. Confusion is normal. Focus on skills and exploration.";
    } else if (status === "job") {
      message = "As a job seeker, consistency matters more than speed.";
    } else if (status === "working") {
      message = "Plan carefully before switching paths.";
    } else {
      message = "Take time to reset and plan calmly.";
    }

    if (challenge === "family") {
      message += " Communicate clearly with your family.";
    }
    if (challenge === "fear") {
      message += " Fear is normal. Don’t let it stop you.";
    }

    localStorage.setItem("result", message);
    window.location.href = "result.html";
  });
}

const resultText = document.getElementById("resultText");
if (resultText) {
  resultText.innerText = localStorage.getItem("result");
}

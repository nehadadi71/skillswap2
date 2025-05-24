// Highlight clicked step and show alert with its title
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");

  steps.forEach(step => {
    step.addEventListener("click", () => {
      // Remove active class from all steps
      steps.forEach(s => s.classList.remove("active-step"));

      // Add active class to clicked step
      step.classList.add("active-step");

      // Optional: Alert with step title
      const title = step.querySelector("h3").innerText;
      alert(`You clicked on: ${title}`);
    });
  });
});

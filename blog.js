document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('newsletter-email').value;
  const message = document.getElementById('newsletter-message');
  // Simple email validation
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#fee2e2";
    return;
  }
  // Simulate successful subscription
  message.textContent = "Thank you for subscribing!";
  message.style.color = "#bbf7d0";
  this.reset();
});
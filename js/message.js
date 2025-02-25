document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("bdZ8FJK0UaPkhyheJ"); // Replace with your EmailJS Public Key

  document.getElementById('messageForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Get input values
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;

      if (name && message) {
          // Display message in UI
          const messagesList = document.getElementById('messagesList');
          const messageEl = document.createElement('div');
          messageEl.className = 'user-message';
          messageEl.innerHTML = `<strong>${name}:</strong> ${message}`;
          messageEl.style.animation = 'fadeIn 0.8s ease forwards';
          messagesList.appendChild(messageEl);

          // Prepare data for EmailJS
          const formData = {
              name: name,
              message: message
          };

          // Send email using EmailJS
          emailjs.send("service_1qv4eiv", "template_cu4z4ka", formData)
              .then(function (response) {
                  console.log("Message sent successfully:", response);
                  alert("Message sent successfully!");
              })
              .catch(function (error) {
                  console.error("Failed to send message:", error);
                  alert("Failed to send message. Please try again!");
              });

          // Reset form after sending
          document.getElementById('messageForm').reset();
      }
  });
});

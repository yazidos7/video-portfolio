// 🌙 Theme Toggle (Dark/Light Mode)
const toggleBtn = document.getElementById('theme-toggle');

// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

// Toggle theme on button click
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent link jump
  document.body.classList.toggle('light-theme');
  toggleBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

});

// 💬 WhatsApp Message Sender
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const whatsappLink = document.getElementById('whatsapp-link');

function updateWhatsAppLink() {
  const name = nameInput?.value.trim();
  const message = messageInput?.value.trim();

  if (name && message && whatsappLink) {
    const fullMessage = `Hello Yazid, I'm ${name}. ${message}`;
    const encoded = encodeURIComponent(fullMessage);
    const phone = '213776301829';
    whatsappLink.href = `https://wa.me/${phone}?text=${encoded}`;
    
  }
}

if (nameInput && messageInput) {
  nameInput.addEventListener('input', updateWhatsAppLink);
  messageInput.addEventListener('input', updateWhatsAppLink);
}

// 🧩 Firebase Reviews (Coming Soon)
// Will fetch and display reviews when Firebase is set up.

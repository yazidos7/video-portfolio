// 🌙 Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggleBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});

// 💬 WhatsApp Message Sender
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const whatsappLink = document.getElementById('whatsapp-link');

[nameInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const whatsappLink = document.getElementById('whatsapp-link');

[nameInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (name && message) {
      const fullMessage = `Hello Yazid, I'm ${name}. ${message}`;
      const encoded = encodeURIComponent(fullMessage);
      const phone = '213776301829'; // ← Your real WhatsApp number
      whatsappLink.href = `https://wa.me/${phone}?text=${encoded}`;
    }
  });
});

    }
  });
});

// 🧩 Firebase Reviews Placeholder
// Firebase setup will be added later when you're ready

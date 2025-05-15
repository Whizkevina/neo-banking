const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.style.margin = '0.5rem 0';
  msg.style.textAlign = sender === 'user' ? 'right' : 'left';
  msg.innerHTML = `<span style="display:inline-block;padding:0.5rem 1rem;border-radius:16px;max-width:80%;background:${sender==='user'?'#31d35c':'#eee'};color:${sender==='user'?'#fff':'#222'};">${text}</span>`;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
});
chatbotClose.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
});

chatbotForm.addEventListener('submit', e => {
  e.preventDefault();
  const userMsg = chatbotInput.value.trim();
  if (!userMsg) return;
  appendMessage('user', userMsg);
  chatbotInput.value = '';
  // Simulate AI response
  setTimeout(() => {
    appendMessage('bot', getBotResponse(userMsg));
  }, 700);
});

function getBotResponse(msg) {
  // Placeholder logic, you can connect to an API here
  msg = msg.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) return 'Hello! How can I help you with your banking today?';
  if (msg.includes('budget')) return 'Our budgeting feature helps you track and manage your expenses easily.';
  if (msg.includes('card')) return 'You can use your Easybank card anywhere Mastercard is accepted.';
  if (msg.includes('help')) return 'Sure! Please tell me what you need help with.';
  return "I'm an AI assistant. Ask me anything about Easybank!";
} 
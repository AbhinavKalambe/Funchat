const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "How do you organize a space party? You planet!",
  "Why did the coffee file a police report? It got mugged.",
  "What did one hat say to the other? Stay here, I'm going on ahead!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you get when you cross a snowman and a vampire? Frostbite."
];

const BOT_IMG = "";
const PERSON_IMG = "";
const BOT_NAME = "Jokwati";
const PERSON_NAME = "Abh!nav";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "Joke";

  botResponse();
});

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" ></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}


function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



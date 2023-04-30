document.addEventListener('DOMContentLoaded', () => {
  const gameOutput = document.getElementById('game-output');
  const optionsContainer = document.getElementById('options-container');
  const timer = document.getElementById('timer');

  const gameStory = [
    {
      id: 1,
      text: "Now you have come to the entrance of a dark cave. What do you plan to do?",
      options: [
        { text: "Turn on the flashlight and look for a way out.", nextId: 2 },
        { text: "Enter the cave blindly.", nextId: 3 },
      ],
    },
    {
      id: 2,
      text: "Your flashlight illuminates a complex network of paths, and two roads are presented before your eyes. What is your choice?",
      options: [
        { text: "Go right", nextId: 5 },
        { text: "Go left", nextId: 5 },
      ],
    },
    {
      id: 3,
      text: "You have fallen into a trap! If you want to escape, please answer the following question: Who created Bitcoin?",
      options: [
        { text: "Satoshi Nakamoto", nextId: 4 },
        { text: "Steve Jobs", nextId: 50 },
      ],
    },
    {
      id: 4,
      text: "You have successfully escaped the trap and two paths are presented to you. What is your choice?",
      options: [
        { text: "Go right", nextId: 5 },
        { text: "Go left", nextId: 5 },
      ],
    },
    {
      id: 5,
      text: "Soon you arrived at a spacious cave with a table and a box inside. What is your choice?",
      options: [
        { text: "Inspect the documents on the table", nextId: 6 },
        { text: "Open the box and inspect its contents", nextId: 7 },
      ],
    },
    {
      id: 6,
      text: "You discovered that the documents are records of Bitcoin transactions, but they are encrypted and require the correct password to decrypt. 'What is the total supply of Bitcoin?' Please answer:",
      options: [
        { text: "No limit", nextId: 50 },
        { text: "21 million", nextId: 8 },
      ],
    },
    {
      id: 7,
      text: "You choose to open the box, but it needs to be unlocked. Please answer: 'Is it possible to modify Bitcoin transactions?'",
      options: [
        { text: "Yes", nextId: 50 },
        { text: "No", nextId: 8 },
      ],
    },
    {
      id: 8,
      text: "Very good, your answer is correct, 'The treasure is not far ahead of you. Keep moving forward.'",
      options: [
        { text: "Keep moving forward", nextId: 9 },
        { text: "Move backwards", nextId: 5 },
      ],
    },
    {
      id: 9,
      text: "Soon you arrive in a room and find the final treasure chest, which you need to open by answering the following five questions correctly.What is the name of the algorithm that Bitcoin uses for mining?",
      options: [
        { text: "SHA-256", nextId: 10 },
        { text: "MD5", nextId: 50 },
      ],
    },
    {
      id: 10,
      text: "Very well, you have answered correctly, please move on to the next question.What is the name of the first ever Bitcoin transaction?",
      options: [
        { text: "Coffee transaction", nextId: 50 },
        { text: "Pizza transaction", nextId: 11 },
      ],
    },
    {
      id: 11,
      text: "Very well, you have answered correctly, please move on to the next question.What is the process called that confirms Bitcoin transactions?",
      options: [
        { text: "Mining", nextId: 12 },
        { text: "Minting", nextId: 50 },
      ],
    },
    {
      id: 12,
      text: "Very well, you have answered correctly, please move on to the next question.What is the purpose of Bitcoin's Lightning Network?",
      options: [
        { text: "To enable faster and cheaper transactions", nextId: 13 },
        { text: "To increase the security of Bitcoin", nextId: 50 },
      ],
    },
    {
      id: 13,
      text: "Very well, you have answered correctly, please move on to the next question.What is the name of the process that is used to protect cryptocurrency wallets by requiring multiple signatures to authorize transactions?",
      options: [
        { text: "Cold storage", nextId: 50 },
        { text: "Multi-signature", nextId: 14 },
      ],
    },
    {
      id: 14,
      text: "You open the box and there is a note inside saying that the treasure is in this room and you need to explore it more closely. which block is the first block in the Bitcoin blockchain?You then find two stones in the room with the words ‘Genesis block’ and ‘Alpha block’ engraved on them. You choose which stone to move",
      options: [
        { text: " Genesis block", nextId: 15 },
        { text: "Alpha block", nextId: 50 },
      ],
    },
    {
      id: 15,
      text: "Congratulations on finding a bitcoin treasure!",
      options: [
        { text: "Thank ", nextId: 16 },
        { text: "you", nextId: 16 },
      ],
    },
    {
      id: 50,
      text: "Unfortunately, you have answered incorrectly and have not been able to find the treasure, please start the game again",
      options: [
        { text: "Try again", nextId: 1 },
        { text: "Try again", nextId: 1 },
      ],
    },
  ];

  let currentScene = gameStory[0];

  function displayScene(scene) {
    gameOutput.innerHTML += `<p>${scene.text}</p>`;
    optionsContainer.innerHTML = '';
    scene.options.forEach((option) => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('option-button');
      button.addEventListener('click', () => handleAnswer(option));
      optionsContainer.appendChild(button);
    });
    gameOutput.scrollTop = gameOutput.scrollHeight;
  }

    function displayScene(scene) {
    gameOutput.innerHTML += `<p>${scene.text}</p>`;
    optionsContainer.innerHTML = '';
    scene.options.forEach((option) => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('option-button');
      button.addEventListener('click', () => handleAnswer(option));
      optionsContainer.appendChild(button);
    });
    gameOutput.scrollTop = gameOutput.scrollHeight;
  }

  function handleAnswer(answer) {
    const nextScene = gameStory.find((scene) => scene.id === answer.nextId);
    if (nextScene) {
      currentScene = nextScene;
      displayScene(nextScene);
    } else {
      gameOutput.innerHTML += "<p>Game over!</p>";
      optionsContainer.innerHTML = '';
      optionsContainer.removeEventListener('click', handleAnswer);
    }
  }

  displayScene(currentScene);
});
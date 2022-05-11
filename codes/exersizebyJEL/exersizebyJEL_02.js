const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const theWinner = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

const result = ['묵', '찌', '빠'];

function show(user, computer, winner) {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  theWinner.innerText = winner;
}

function game(user, computer) {
  let winner;

  if (user === computer) {
    winner = '게임 종료';
  } 
  else {
    switch (user + computer) {
      case '묵찌':
      case '빠묵':
      case '찌빠':
        winner = '당신 차례!';
        break;
      case '묵빠':
      case '찌묵':
      case '빠찌':
        winner = '컴퓨터 차례!';
        break;
    }
  }

  show(user, computer, winner);
}

function play(event) {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];

  game(user, computer);
}

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
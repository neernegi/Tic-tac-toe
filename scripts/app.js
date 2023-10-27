let Editplayer=0;
let activePlayer=0;
let currentRound=1;
let gameIsOver=false;


const gameData=[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


const players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
];

const playerConfigOverlay=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorOutputElement=document.getElementById('config-errors');
const gameAreaElement=document.getElementById('active-game');
const activePlayerNameElement =document.getElementById('active-player-name');
const gameOverElement=document.getElementById('game-over');




const Editplayer_1_btn=document.getElementById('player-1-btn');
const Editplayer_2_btn=document.getElementById('player-2-btn');
const cancelConfigBtn=document.getElementById('cancel-config-btn');
const startNewGameBtnElement=document.getElementById('start-game-btn');
const gameFieldElements=document.querySelectorAll('#game-board li');


Editplayer_1_btn.addEventListener('click', openPlayerConfig);
Editplayer_2_btn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);


startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click',selectGameField);
}
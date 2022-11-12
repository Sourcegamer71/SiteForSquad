
let textCount = 0;
let gameDiv = document.querySelector('#game');
let buttonNovel = document.querySelector('#buttonNovel');
let text = document.querySelector('#text');
gameDiv.appendChild(text);
buttonNovel.addEventListener('click',novel);
let startGame = document.querySelector('#gameStart-button');
startGame.addEventListener('click',Start);
function Start()
{
    let startGameWindow = document.querySelector('#gameStart');
    startGameWindow.style.display = 'none';
    gameDiv.style.display = 'block';
}


let textArray = ['Этот мир',
'Так красив',
'За него стоит сражаться','Как бы тебе не было тяжело в данную минуту',
'Я всегда буду с тобой','Хорошо, папа...','Я поднял окровавленную руку над собой, раскрыв ладонь','С окровавленной кисти посыпалась пыль цемента и гравия ','Я всегда буду с тобой','Рука виднелась над обломками здания, островками пламени, и мёртвыми телами','Я всегда буду с тобой','Я всегда буду с тобой','Казалось, что я тянусь к небу, чтобы взять руку','Я всегда буду с тобой','Но на самом деле я закрыл ладонью солнце, которое светило мне прямо в глаза','Я всегда буду с тобой','Сквозь отверстие в крыше, пробитое снарядом, из-за которого я и лежу в этих руинах','Я всегда буду с тобой','Рука от бессилия опустилась','Я всегда буду с тобой','Я уронил голову обратно','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой','Я всегда буду с тобой',]


let char1 = document.querySelector('#char1');
let char2 = document.querySelector('#char2');
let char3 = document.querySelector('#char3');
let char4 = document.querySelector('#char4');
let char5 = document.querySelector('#char5');
let char6 = document.querySelector('#char6');
let char7 = document.querySelector('#char7');
let char8 = document.querySelector('#char8');
let char9 = document.querySelector('#char9');
let char10 = document.querySelector('#char10');

function novel()
{
    textCount++;
    console.log(textCount);
    let str = textArray[textCount];
    let length = str.length;
    let character = 0;
    let timeout;
    timeout = setInterval(()=>{
        character++;
        let newstr = str.substr(0,character);
        text.textContent = newstr;
        if(character == length)
        {
            timeout = clearInterval(timeout);
        }
        
    },100)
    buttonNovel.setAttribute('disabled','true');
    setTimeout(()=>{buttonNovel.removeAttribute('disabled')},1000);
    if(textCount == 3){gameDiv.style.backgroundImage = 'url(RayOfHope/2.jpg)';}
    if(textCount == 7){gameDiv.style.backgroundImage = 'url(RayOfHope/3.jpg)';};
    if(textCount == 3)
    {
        char2.disabled = false;
    }
    if(textCount == 7)
    {
        char3.disabled = false;
    }
    char1.addEventListener('click',()=>{textCount=1;gameDiv.style.backgroundImage = 'url(RayOfHope/1.jpg)';})
    char2.addEventListener('click',()=>{textCount=3;gameDiv.style.backgroundImage = 'url(RayOfHope/2.jpg)';})
    char3.addEventListener('click',()=>{textCount=7; gameDiv.style.backgroundImage = 'url(RayOfHope/3.jpg)';})
}









import {textArray} from './Charpters/Charpter1.js';
import {textArray2} from './Charpters/Charpter2.js'
import {textArray3} from './Charpters/Charpter3.js'
import {textArray4} from './Charpters/Charpter4.js'
import {textArray5} from './Charpters/Charpter5.js'
import {textArray6} from './Charpters/Charpter6.js'
import {textArray7} from './Charpters/Charpter7.js'
import {textArray8} from './Charpters/Charpter8.js'
import {textArray9} from './Charpters/Charpter9.js'
import {textArray10} from './Charpters/Charpter10.js'
import {textArray11} from './Charpters/Charpter10.js'
import {textArray12} from './Charpters/Charpter10.js'
import {textArray13} from './Charpters/Charpter10.js'
import {textArray14} from './Charpters/Charpter10.js'

let textCount = 1;
let gameDiv = document.querySelector('#game');
let buttonNovel = document.querySelector('#buttonNovel');
let text = document.querySelector('#text');
let startGame = document.querySelector('#gameStart-button');
let blueCount = true;
let redCount = false;
let blueButton = document.querySelector('#blue');
let redButton = document.querySelector('#red');


gameDiv.appendChild(text);
buttonNovel.addEventListener('click',novel);
startGame.addEventListener('click',Start);

function Start()
{
    let startGameWindow = document.querySelector('#gameStart');
    startGameWindow.style.display = 'none';
    gameDiv.style.display = 'block';
}

let mainArray = textArray.concat(textArray2);
let mainArray2 = mainArray.concat(textArray3);
let mainArray3 = mainArray2.concat(textArray4);
let mainArray4 = mainArray3.concat(textArray5);
let mainArray5 = mainArray4.concat(textArray6);
let mainArray6 = mainArray5.concat(textArray7);
let mainArray7 = mainArray6.concat(textArray8);
let mainArray8 = mainArray7.concat(textArray9);
let mainArray9 = mainArray8.concat(textArray10);


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
    console.log(textCount)
    let str = mainArray9[textCount];
    let length = str.length;
    let character = 0;
    let timeout;

    function choice(coun, blue, red, blueText, redText)
    {
        text.textContent ='';
        if(textCount == coun)
        {
            buttonNovel.style.display = 'none';
            blueButton.style.display = 'block';
            blueButton.textContent = blueText;
            redButton.style.display = 'block';
            redButton.textContent = redText;
            blueButton.addEventListener('click',()=>
            {
                blueCount = blue;
                blueButton.style.display = 'none';
                redButton.style.display = 'none';
                buttonNovel.style.display = 'block';
                console.log(blueCount);
            })
           redButton.addEventListener('click',()=>
            {
                redCount = red;
                blueButton.style.display = 'none';
                redButton.style.display = 'none';
                buttonNovel.style.display = 'block';
                console.log(redCount);
            })
        }
    }
    choice(11,true,false, 'Взять руку', 'Не брать его руку');
    choice((mainArray.length +100),false,true, 'Простить', 'Не прощать');
    choice((mainArray2.length +31),true,false, 'Поднять', 'Не поднимать');
    choice((mainArray3.length +31),false,true, 'Взять пакет', 'Не брать пакет');
    choice((mainArray4.length +28),true,false, 'Ударить его', 'Ничего не делать');
    choice((mainArray5.length +17),false,true, 'Да', 'Нет');
    choice((mainArray5.length +63),true,false, 'Ненавижу это', 'Мне это нравится');
    choice((mainArray6.length +39),false,true, 'Я люблю тебя', 'Я не люблю тебя');
    choice((mainArray7.length +90),true,false, 'Лгу', 'Не лгу');
    textCount++;  
    timeout = setInterval(()=>{
        character++;
        let newstr = str.substr(0,character);
        text.textContent = newstr;
        if(character == length)
        {
            timeout = clearInterval(timeout);
        }   
    },20)
    buttonNovel.setAttribute('disabled','true');
    setTimeout(()=>{buttonNovel.removeAttribute('disabled')},500);


    if(textCount == textArray.length){gameDiv.style.backgroundImage = 'url(RayOfHope/8.jpg)';}
    if(textCount == mainArray.length){gameDiv.style.backgroundImage = 'url(RayOfHope/2.jpg)';}
    if(textCount == (mainArray.length + 20)){gameDiv.style.backgroundImage = 'url(RayOfHope/3.jpg)';}
    if(textCount == (mainArray.length + 61)){gameDiv.style.backgroundImage = 'url(RayOfHope/4.jpg)';}
    if(textCount == (mainArray.length + 72)){gameDiv.style.backgroundImage = 'url(RayOfHope/4.jpg)';}
    if(textCount == (mainArray.length + 85)){gameDiv.style.backgroundImage = 'url(RayOfHope/20.jpg)';}
    if(textCount == (mainArray.length + 108)){gameDiv.style.backgroundImage = 'url(RayOfHope/19.jpg)';}
    if(textCount == (mainArray2.length + 4)){gameDiv.style.backgroundImage = 'url(RayOfHope/18.jpg)';}
    if(textCount == (mainArray2.length + 16)){gameDiv.style.backgroundImage = 'url(RayOfHope/17.jpg)';}
    if(textCount == (mainArray2.length + 21)){gameDiv.style.backgroundImage = 'url(RayOfHope/5.jpg)';}
    if(textCount == (mainArray2.length + 33)){gameDiv.style.backgroundImage = 'url(RayOfHope/14.jpg)';}
    if(textCount == (mainArray2.length + 44)){gameDiv.style.backgroundImage = 'url(RayOfHope/10.jpg)';}
    if(textCount == (mainArray3.length + 1)){gameDiv.style.backgroundImage = 'url(RayOfHope/21.jpg)';}
    if(textCount == (mainArray3.length + 9)){gameDiv.style.backgroundImage = 'url(RayOfHope/4.jpg)';}
    if(textCount == (mainArray3.length + 21)){gameDiv.style.backgroundImage = 'url(RayOfHope/22.jpg)';}
    if(textCount == (mainArray4.length)){gameDiv.style.backgroundImage = 'url(RayOfHope/3.jpg)';}
    if(textCount == (mainArray5.length)){gameDiv.style.backgroundImage = 'url(RayOfHope/21.jpg)';}
    if(textCount == (mainArray5.length+5)){gameDiv.style.backgroundImage = 'url(RayOfHope/15.jpg)';}
    if(textCount == (mainArray5.length+35)){gameDiv.style.backgroundImage = 'url(RayOfHope/11.jpg)';}
    if(textCount == (mainArray5.length+48)){gameDiv.style.backgroundImage = 'url(RayOfHope/6.jpg)';}
    if(textCount == (mainArray6.length)){gameDiv.style.backgroundImage = 'url(RayOfHope/9.jpg)';}
    if(textCount == (mainArray6.length+11)){gameDiv.style.backgroundImage = 'url(RayOfHope/1.jpg)';}
    if(textCount == (mainArray7.length)){gameDiv.style.backgroundImage = 'url(RayOfHope/2.jpg)';}
    if(textCount == (mainArray7.length+10)){gameDiv.style.backgroundImage = 'url(RayOfHope/23.jpg)';}
    if(textCount == (mainArray7.length+35)){gameDiv.style.backgroundImage = 'url(RayOfHope/25.jpg)';}
    if(textCount == (mainArray7.length+45)){gameDiv.style.backgroundImage = 'url(RayOfHope/24.jpg)';}
    if(textCount == (mainArray7.length+61)){gameDiv.style.backgroundImage = 'url(RayOfHope/13.jpg)';}
    if(textCount == (mainArray7.length+69)){gameDiv.style.backgroundImage = 'url(RayOfHope/6.jpg)';}
    if(textCount == (mainArray8.length)){gameDiv.style.backgroundImage = 'url(RayOfHope/29.jpg)';}



    if(textCount == textArray.length)
    {
        char2.disabled = false;
    }
    if(textCount == mainArray.length)
    {
        char3.disabled = false;
    }
    if(textCount == mainArray2.length)
    {
        char4.disabled = false;
    }
    if(textCount == mainArray3.length)
    {
        char5.disabled = false;
    }
    if(textCount == mainArray4.length)
    {
        char6.disabled = false;
    }
    if(textCount == mainArray5.length)
    {
        char7.disabled = false;
    }
    if(textCount == mainArray6.length)
    {
        char8.disabled = false;
    }
    if(textCount == mainArray7.length)
    {
        char9.disabled = false;
    }


    if(blueCount == true && redCount == false  && textCount == (mainArray9.length-1))
    {
        mainArray9.concat(textArray12);
        gameDiv.style.backgroundImage = 'url(RayOfHope/31.jpg)';
        if(textCount == mainArray9.length)
        {
            startGameWindow.style.display = 'none';
            gameDiv.style.display = 'block';
            textCount == 0
        }
    }
    if(blueCount == true && redCount == true && textCount == (mainArray9.length-1))
    {
        mainArray9.concat(textArray14);
        gameDiv.style.backgroundImage = 'url(RayOfHope/33.jpg)'
        if(textCount == mainArray9.length)
        {
            startGameWindow.style.display = 'none';
            gameDiv.style.display = 'block';
            textCount == 0
        }
    }
    if(blueCount == false && redCount == true && textCount == (mainArray9.length-1))
    {
        mainArray9.concat(textArray13);
        gameDiv.style.backgroundImage = 'url(RayOfHope/32.jpg)'
        if(textCount == mainArray9.length)
        {
            startGameWindow.style.display = 'none';
            gameDiv.style.display = 'block';
            textCount == 0
        }
    }
    if(blueCount == false && redCount == false && textCount == (mainArray9.length-1))
    {
        mainArray9.concat(textArray11);
        gameDiv.style.backgroundImage = 'url(RayOfHope/34.jpg)'
        if(textCount == mainArray9.length)
        {
            startGameWindow.style.display = 'none';
            gameDiv.style.display = 'block';
            textCount == 0
        }
    }



    char1.addEventListener('click',()=>{textCount=1;
        gameDiv.style.backgroundImage = 'url(RayOfHope/1.jpg)';
        text.textContent = textArray[textCount];})
    char2.addEventListener('click',()=>{textCount=mainArray.length;
        gameDiv.style.backgroundImage = 'url(RayOfHope/8.jpg)'; text.textContent = mainArray8[textCount];})
    char3.addEventListener('click',()=>{textCount=mainArray2.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/19.jpg)'; text.textContent = mainArray8[textCount];})
    char4.addEventListener('click',()=>{textCount=mainArray3.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/19.jpg)'; text.textContent = mainArray8[textCount];})
    char5.addEventListener('click',()=>{textCount=mainArray4.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/10.jpg)'; text.textContent = mainArray8[textCount];}) 
    char6.addEventListener('click',()=>{textCount=mainArray5.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/3.jpg)'; text.textContent = mainArray8[textCount];})  
    char7.addEventListener('click',()=>{textCount=mainArray6.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/21.jpg)'; text.textContent = mainArray8[textCount];})  
    char8.addEventListener('click',()=>{textCount=mainArray7.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/9.jpg)'; text.textContent = mainArray8[textCount];})
    char9.addEventListener('click',()=>{textCount=mainArray8.length; 
        gameDiv.style.backgroundImage = 'url(RayOfHope/2.jpg)'; text.textContent = mainArray8[textCount];})         
        
}

let c = 60;
let timecount = c; 
let count = 0;
let check3 = document.querySelector('#check3'); 
check3.addEventListener('click',gameStart);
let input = document.querySelector('#ero-input');
let finishcont = document.createElement('div');
finishcont.setAttribute('id','finish');
let time;
let timeText = document.createElement('h1');
timeText.classList.add('ero-warning')
timeText.textContent = 'Нажмите чтобы начать';
let timeDiv = document.querySelector('#time');
timeText.textContent = `Для начала победите во всем знакомой игре "в пары".Введите чётное число от 4 до 16`;
timeDiv.append(timeText);

function win()
{
    clearInterval(time);
    timecount = c;
    let rama = document.querySelector('#rama'); 
    let gameCont = document.querySelector('#container');
    rama.removeChild(gameCont);
    rama.appendChild(finishcont);
    let finishText = document.createElement('div');
    finishText.textContent = 'Ура, вы выиграли';
    finishcont.appendChild(finishText);
    check3.style.display = 'block';
    let restartbutton = document.createElement('button');
    restartbutton.textContent = 'Забрать выигрыш';
    restartbutton.style.display = 'block';
    finishcont.appendChild(restartbutton);
    restartbutton.addEventListener('click',()=>
    {
        let erocontainer = document.querySelector('#ero');
        erocontainer.style.display = 'block';
        
    })
}

function lose()
{
    timecount = c;
    let rama = document.querySelector('#rama'); 
    let gameCont = document.querySelector('#container');
    rama.removeChild(gameCont);
    let finishText = document.createElement('div');
    finishText.textContent = 'Ты проебал';
    rama.appendChild(finishText);
    check3.style.display = 'block';
    let restartbutton = document.createElement('button');
    restartbutton.textContent = 'Попробовать снова';
    rama.appendChild(restartbutton);
    restartbutton.addEventListener('click',()=>
    {
        location.reload();
    })
}

function openedCheck()
{
    let openCount = 0;
    let checkedCards = document.querySelectorAll('.card');
    for(let i=0; i<checkedCards.length;i++)
    {
        if(checkedCards[i].classList.contains('opened'))
        {
            ++openCount;
            console.log(openCount);
        }
        if(openCount == checkedCards.length)
        {
            clearInterval(time);
            timeText.textContent = '';
            win();
        }
    }
}

function gameStart()
{ 
    let firstcard;
    let secondcard;
    let firstclass;
    let secondclass;
    count = 0;
    let cardsArray = [
    ['.card1','url(img/1.jpg)'],['.card1','url(img/1.jpg)'],
    ['.card2','url(img/2.jpg)'],['.card2','url(img/2.jpg)'],
    ['.card3','url(img/3.jpg)'],['.card3','url(img/3.jpg)'],
    ['.card4','url(img/4.jpg)'],['.card4','url(img/4.jpg)'],
    ['.card5','url(img/5.jpg)'],['.card5','url(img/5.jpg)'],
    ['.card6','url(img/6.jpg)'],['.card6','url(img/6.jpg)'],
    ['.card7','url(img/7.jpg)'],['.card7','url(img/7.jpg)'],
    ['.card8','url(img/8.jpg)'],['.card8','url(img/8.jpg)']];
    clearInterval(time);
    check3.style.display = 'none';
    let rama = document.querySelector('#rama');
    rama.innerHTML = "";
    let contain = document.createElement('div');
    contain.setAttribute('id', 'container');
    rama.appendChild(contain);
    let randarray = [];
    let len = input.value;
    let lens = parseInt(len);
    if(lens%2 != 0 || lens > 16 || lens < 4)
    {
        timeText.textContent = 'Введите чётное число от 4 до 16';
        location.reload();
    }
    else
    {
        let cardpop = cardsArray.length-lens;
        for(let k = 0; k < cardpop; k++)
        {
            cardsArray.pop();
        }
        for(let i = 0; i < lens; i++)
        {
            let randomindex = Math.round(Math.random()*(cardsArray.length-1));
            randarray.push(cardsArray[randomindex]);
            cardsArray.splice(randomindex,1);
        }
        for(let k = 0; k < randarray.length; k++)
        {
            let newcard = document.createElement('div');
            newcard.classList.add('card');
            newcard.classList.add(randarray[k][0]);
            contain.appendChild(newcard);
            newcard.addEventListener('click',()=>{
                newcard.style.backgroundImage = randarray[k][1];
                newcard.classList.add('opened');
                openedCheck();
                ++count;
                if(firstclass != secondclass && count == 3)
                {
                    firstcard.classList.remove(firstclass);
                    secondcard.classList.remove(secondclass);
                    firstcard.classList.remove('opened');
                    secondcard.classList.remove('opened');
                    count=1;
                    firstcard.style.backgroundImage = 'url(img/logo.jpg)';
                    secondcard.style.backgroundImage = 'url(img/logo.jpg)';
                }
                if(firstclass == secondclass && count == 3)
                {
                    count=1;
                }
                if(count == 1)
                {
                    console.log('first');
                    firstcard = newcard;
                    firstclass = randarray[k][0];
                }
                if(count == 2)
                {
                    console.log('second');
                    secondcard = newcard;
                    secondclass = randarray[k][0];
                }
            })
        }
        gameTimer();
    }
    
}

function countdown()
{
    --timecount;
    timeText.textContent = `У вас ещё ${timecount} секунд`;
    if(timecount== 0)
        {
            clearInterval(time);
            timeText.textContent = '';
            lose();
        }
}

function gameTimer()
{  
    clearInterval(time);
    time = setInterval(countdown,1000);  
}

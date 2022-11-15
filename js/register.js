let button = document.querySelector('#button');
button.addEventListener('click',addAcc);

let warning = document.createElement('p');
warning.textContent = 'Введите корректные данные';
warning.setAttribute('id','warning');
button.after(warning);
warning.style.display = 'none';

let form = document.querySelector('form');
let table = document.querySelector('#table');
let AccName = document.querySelector('#names');
let AccFamily = document.querySelector('#family');
let AccFather = document.querySelector('#father');
let AccDate = document.querySelector('#data');
let DateArray = AccDate.value.split('-'); 
let AccYear = document.querySelector('#year'); 
let AccFaculty = document.querySelector('#faculty'); 

let tableContainer = document.createElement('div')
tableContainer.classList.add('table-container');
table.appendChild(tableContainer);

// let tableHead = document.createElement('div');
// tableHead.classList.add('table-item');
// tableHead.classList.add('table-head');
// function headDeploy(headObject,text,container)
// {
//     headObject = document.createElement('div');
//     headObject.textContent = text;
//     container.append(headObject);
// }
// let headName, headFamily, headFather,headDate,headYear,headFaculty;
// headDeploy(headName,'Имя бойца',tableHead);
// headDeploy(headFamily,'Фамилия',tableHead);
// headDeploy(headFather,'Отчество',tableHead);
// headDeploy(headDate,'Дата рождения',tableHead);
// headDeploy(headYear,'Год вступления',tableHead);
// headDeploy(headFaculty,'Специальность',tableHead);
// let headCont = document.createElement('div');
// let headBut = document.createElement('button');
// headBut.textContent = 'Clear';
// tableHead.append(headCont);
// headCont.append(headBut);
// headBut.addEventListener('click',()=>{
//     AccContainer.innerHTML = '';
// })

tableContainer.appendChild(tableHead);
let AccContainer = document.createElement('div');
AccContainer.setAttribute('id','acc-container');
tableContainer.after(AccContainer);



let array = [];

function addAcc(e)
{
    e.preventDefault();
    let message = document.createElement('div')
    message.textContent = 'Ваша заявка на вступление в ряды агентства Squad будет рассмотрена в ближайшее время';
    message.classList.add('messageReg');
    let Name = AccName.value.trim();
    let Family = AccFamily.value.trim();
    let Father = AccFather.value.trim();
    let Faculty = AccFaculty.value.trim();
    if(Name == "" || Family == "" || Father == "" || Faculty =="" || AccYear.value == "" || AccDate.value == "" || Name.match(/^\d+$/) || Faculty.match(/^\d+$/) || Family.match(/^\d+$/) || Father.match(/^\d+$/))
    {
        warning.style.display = 'block';
    }
    else
    {
            button.after(message);
            warning.style.display = 'none';
            let Object = {names:Name,family:Family,father:Father,date:AccDate.value, year:AccYear.value, faculty:Faculty, 
            deploy ()
            {
                let container = document.createElement('div');
                container.classList.add('table-item');
                AccContainer.append(container);
                let accName = document.createElement('div');
                accName.textContent = this.names;
                container.append(accName);
                let accFamily = document.createElement('div');
                accFamily.textContent = this.family;
                container.append(accFamily);
                let accFather = document.createElement('div');
                accFather.textContent = this.father;
                container.append(accFather);
                let accDate = document.createElement('div');
                let DateArray = this.date.split('-');
                let DateRight = `${DateArray[2]}.${DateArray[1]}.${DateArray[0]} г.`;
                accDate.textContent = DateRight;
                container.append(accDate);
                let accYear = document.createElement('div');
                accYear.textContent = this.year;
                container.append(accYear);
                let accFaculty = document.createElement('div');
                accFaculty.textContent = this.faculty;
                container.append(accFaculty);
                let deleteDiv = document.createElement('div'); 
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'clear';
                container.append(deleteDiv);
                deleteDiv.append(deleteButton);
                deleteButton.addEventListener('click',()=>{
                    let par = deleteButton.parentNode;
                    let parpar = par.parentNode;
                    parpar.parentNode.removeChild(parpar);
                })
            }
        };
        Object.deploy();
        array.push(Object);
        form.reset();
        
    }
    
}

// let namecount = 0, familycount = 0, fathercount = 0, datecount = 0, yearcount = 0, facultycount =0; 
// function sortName(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.names < next.names) return -1;
//             if (prev.names < next.names) return 1;
//             })   
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.names > next.names) return -1;
//         if (prev.names > next.names) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }
// function sortFamily(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.family < next.family) return -1;
//             if (prev.family < next.family) return 1;
//             })
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.family > next.family) return -1;
//         if (prev.family > next.family) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }
// function sortFather(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.father < next.father) return -1;
//             if (prev.father < next.father) return 1;
//             })
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.father > next.father) return -1;
//         if (prev.father > next.father) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }
// function sortDate(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.date < next.date) return -1;
//             if (prev.date < next.date) return 1;
//             })
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.date > next.date) return -1;
//         if (prev.date > next.date) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }
// function sortYear(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.year < next.year) return -1;
//             if (prev.year < next.year) return 1;
//             })
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.year > next.year) return -1;
//         if (prev.year > next.year) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }
// function sortFaculty(count)
// {  
//     if(count%2 == 0)
//     {
//         array.sort((prev,next)=>{
//             if(prev.faculty < next.faculty) return -1;
//             if (prev.faculty < next.faculty) return 1;
//             })
//     }
//     else if(count%2 ==1)
//     {
//         array.sort((prev,next)=>{
//         if(prev.faculty > next.faculty) return -1;
//         if (prev.faculty > next.faculty) return 1;
//         })
//     }
//     AccContainer.innerHTML = '';
//     for(let i = 0; i < array.length; i++)
//     {
//         array[i].deploy();
//     }
// }

// let buttonName = document.querySelector('#nameButton');
// buttonName.addEventListener('click',()=>{sortName(namecount);namecount++});
// let buttonFamily = document.querySelector('#familyButton');
// buttonFamily.addEventListener('click',()=>{sortFamily(familycount);familycount++});
// let buttonFather = document.querySelector('#fatherButton');
// buttonFather.addEventListener('click',()=>{sortFather(fathercount);fathercount++});
// let buttonDate = document.querySelector('#dateButton');
// buttonDate.addEventListener('click',()=>{sortDate(datecount);datecount++});
// let buttonYear = document.querySelector('#yearButton');
// buttonYear.addEventListener('click',()=>{sortYear(yearcount);yearcount++});
// let buttonFaculty = document.querySelector('#facultyButton');
// buttonFaculty.addEventListener('click',()=>{sortYear(facultycount);facultycount++});

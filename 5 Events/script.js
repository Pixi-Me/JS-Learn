// let inp = document.querySelector("#inp");

// let sel = document.querySelector("#sel");

// inp.addEventListener('input',(i)=>{
//     if (i.data !== null) {
//         console.log(i.data);
//     }
    
// });

// sel.addEventListener('change',(dets)=>{
//     console.log(dets.target.value);
// });


//2
// Displaying what u typed on keyboard

// document.addEventListener('keydown',(dets)=>{
//     console.log(dets);
//     dets.key ===' ' ? document.querySelector('#txt').textContent= 'Space' : document.querySelector('#txt').textContent=dets.key;
    

// })


//3 File Upload

// let upload = document.querySelector("#file");
// let btn = document.querySelector('#fileBtn');

// btn.addEventListener('click',()=>{
//     upload.click()
// })
// upload.addEventListener('change',(i)=>{
//     console.log()
//     btn.textContent=i.target.files[0].name
// })

//4 FORM

let form = document.querySelector('#form')
let values = document.querySelectorAll('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = values[0].value;
    let domain = values[1].value;
    let about = values[2].value;
    let imgValue = values[3].value;

    let cards = document.querySelector('#cards');

    let card = document.createElement("div");
    card.classList.add('card');

    let pTop = document.createElement('div');
    pTop.classList.add('pTop');

    let img = document.createElement("img");
    img.classList.add('pImg');
    img.setAttribute('src',imgValue);

    let pName = document.createElement('div');
    pName.classList.add('pName');

    let Name = document.createElement('span');
    Name.classList.add('name');
    Name.textContent = name;

    let Domain = document.createElement('span');
    Domain.classList.add('domain');
    Domain.textContent = domain;

    let pBtm = document.createElement('div');
    pBtm.classList.add('pBtm');

    let About = document.createElement('div');
    About.classList.add('about');
    About.textContent = about;

    card.appendChild(pTop);
    card.appendChild(pBtm);
    

    pTop.appendChild(img);
    pTop.appendChild(pName);

    pName.appendChild(Name);
    pName.appendChild(Domain);

    pBtm.appendChild(About);
    console.log(card)

    cards.appendChild(card)
})

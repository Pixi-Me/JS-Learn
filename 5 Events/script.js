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

let upload = document.querySelector("#file");
let btn = document.querySelector('#fileBtn');

btn.addEventListener('click',()=>{
    upload.click()
})
upload.addEventListener('change',(i)=>{
    console.log()
    btn.textContent=i.target.files[0].name
})

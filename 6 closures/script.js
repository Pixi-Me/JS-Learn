// Closure is a function that accepts another function as its return value. The return function also user variable of the parent function.
let createToster = (config)=>{
    return (notification)=>{
        let div = document.createElement('div');
        div.className = `w-100 inline-block bg-gray-600 text-white shadow-lg  rounded p-3 px-6 h-auto`;
        div.textContent = notification;
        console.log(div);
        document.querySelector('#main').appendChild(div);

        setTimeout(()=>{
            document.querySelector('#main').removeChild(div)
        }, config.duration * 1000)

        
    }
}

let toster = createToster({
    pos : {
        x : 'right',
        y : 'top'
    },
    duration : 3

})

toster('First notification');
setTimeout(()=>{
    toster('This is the second one');
}, 2000);

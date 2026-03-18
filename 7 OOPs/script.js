document.body.style.cssText= 'background-color:black; height:100vh; width:100vw; overflow:hidden;';

//OBJECTS
function Pencil(name,company,color,price){
    this.name = name;
    this.company = company;
    this.color = color;
    this.price = price;
}
Pencil.prototype.write = function(text){
    let h1 = document.createElement('h1');
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
}

let p1 = new Pencil('natraj', 'natraj', 'red', 20)
let p2 = new Pencil('natraj', 'natraj', 'blue', 20)

// classes

class Pen{
    constructor(name,color,price){
        this.name = name;
        this.color =  color;
        this.price = price;
    }
    write(text) {
        let h1 = document.createElement('h1');
        h1.style.color = this.color
        h1.textContent = text;
        document.body.appendChild(h1);
    }
    erase(){
        document.querySelectorAll('h1').forEach((e)=>{
            if(e.style.color === this.color){
                document.body.removeChild(e)
            }
        })
        
    }
}

let pen1 = new Pen('Hello', 'red' , 20);
let pen2 = new Pen('Hello', 'blue' , 20);

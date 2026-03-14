"use strict"
document.getElementById('btn').addEventListener('click',()=>{
    //1st
    //Q1
    let user = {};
    user.name="John";
    user.surname="Smith";
    console.log(user.name);
    user.name="Pete";
    console.log(user.name);
    delete user.name;
    //Q2
    let isEmpty = (obj)=>{
        for(let key in obj){
            if(obj[key] === undefined){
                return true;
            }
        }
        return false;
    }
    console.log(isEmpty(user))
    //Q3
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0;
    for(let key in salaries){
        sum+=salaries[key];
    }
    console.log(sum);
    //Q4
    let obj2 ={
        roll: 10,
        marks: 100,
        name: 'NaN'
    }
    
    for(let key in obj2){
        if(typeof obj2[key]=== "number"){
            obj2[key] = obj2[key]*2;
        }
        alert(obj2[key]);
    }

})
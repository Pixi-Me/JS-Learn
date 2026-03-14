let btn = document.getElementById('btn')
let randInRange = (a,b)=> Math.floor(Math.random()*(b-a)+1)+a;
function randomColor(){
    let codes=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
    let colorCode = ''
    for(let i=0;i<=5;i++){      
        colorCode+=codes[randInRange(0,codes.length)]
    }
    return(colorCode)

}
btn.style.background=`#${randomColor()}`
function shift(){
    document.getElementById('container').style.background=`#${randomColor()}`;
    btn.style.background=`#${randomColor()}`
    btn.style.color=`#${randomColor()}`
    btn.style.top=`${randInRange(10,90)}%`
    btn.style.left=`${randInRange(10,90)}%`
    setTimeout(shift,2000)
}
shift()


document.getElementById('btn').addEventListener('click',()=>{
    // //========================================================================================================
    // function camalize(str){
    //     let arr = str.split('-')
    //     let result = ""
    //     for(let i=0;i<arr.length;i++){
    //         let str = arr[i];
    //         if(i>0){
    //             result+= str[0].toUpperCase() + str.slice(1)
    //         }
    //         else {
    //             result+= str[0].toLowerCase() + str.slice(1)
    //         }
            
    //     }
    //     alert(result)
    // }
    // camalize('hellooo-there-mate')
    // //========================================================================================================


    // function filterRange(arr,a,b){
    //     let result = arr.filter((item)=>item>=a && item<=b)
    //     return result;
    // }
    // let arr = [1,2,3,4,5,6,7,8,9]
    // alert(filterRange(arr,3,7))
    // alert(arr)


    // function filterInPlace(arr,a,b){
    //     arr.forEach((element,i) => {
    //         if(element<a || element>b) {
    //             arr.splice(i,1)
    //         }
    //     });
        
    // }
    // filterInPlace(arr,1,5)
    // alert(arr)
    // //========================================================================================================

    
    // let arr1 = [5, 2, 1, -10, 8];
    // function sortDec(arr){
    //     arr.sort((a,b)=>b-a)
    //     // arr.reverse()
    // }
    // sortDec(arr1)
    // alert(arr1)
    // //========================================================================================================
    // let arr2=['HTML', 'CSS', 'JS']
    // function copySorted(arr){
    //     let copy = []
    //     arr.forEach((item,i)=>{
    //         copy[i]=item;
    //     })
    //     copy.sort((a,b)=> a.localeCompare(b))
    //     return copy;
    // }
    // alert(copySorted(arr2))
    // //========================================================================================================
    // function calculator(str){
    //     let arr = str.split(' ')
    //     if (arr[1]==='-'){
    //         return +arr[0] - +arr[2];
    //     }
    //     else if(arr[1]==='+')
    //     return +arr[0] + +arr[2];
    // }
    // alert(calculator('1 + 2'))
    // //========================================================================================================
    // // let john = { name: "John", age: 25 };
    // // let pete = { name: "Pete", age: 30 };
    // // let mary = { name: "Mary", age: 28 };

    // // let users = [ john, pete, mary ];

    // // let names = users.map((item)=>item.name)

    // // alert( names );
    // //========================================================================================================

    // let john = { name: "John", surname: "Smith", id: 1 };
    // let pete = { name: "Pete", surname: "Hunt", id: 2 };
    // let mary = { name: "Mary", surname: "Key", id: 3 };

    // let users = [ john, pete, mary ];

    // let usersMapped = users.map((item)=>({
    //     fullName: `${item.name} ${item.surname}`,
    //     id: item.id
    // }))

    // /*
    // usersMapped = [
    //   { fullName: "John Smith", id: 1 },
    //   { fullName: "Pete Hunt", id: 2 },
    //   { fullName: "Mary Key", id: 3 }
    // ]
    // */

    // alert( usersMapped[0].id ) // 1
    // alert( usersMapped[0].fullName ) // John Smith

    // MORE PRACTICE


    // let aryaman ={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let a ={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let c ={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let b ={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let t ={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let helo={
    //     id:0,
    //     name:'Aryaman',
    //     mail:"xxxx@gmail.com"
    // }
    // let arr=[helo,a,t,b,aryaman,c]
    // let mail = arr.map((item)=>item.mail)
    // alert(mail)

// COUNT IS ACTIVE
//     const users = [
//   { id: 1, name: "Aman", isActive: true },
//   { id: 2, name: "Neha", isActive: false },
//   { id: 3, name: "Rahul", isActive: true },
//   { id: 4, name: "Simran", isActive: true }
// ];
//     let arr = users.reduce((count,item)=>{
//         if(item.isActive){
//             count++
//         }
//         return count;
//     },0)
//     alert(arr)

// FILTER RANGE
// const products = [
//   { name: "Phone", price: 12000 },
//   { name: "Headphones", price: 1500 },
//   { name: "Keyboard", price: 700 },
//   { name: "Mouse", price: 400 }
// ];
// let arr = products.filter((item)=>item.price>500 && item.price<2000)
// console.log(arr)

// FIRST PENDING ORDER
const orders = [
  { id: 101, status: "completed" },
  { id: 102, status: "pending" },
  { id: 103, status: "pending" }
];
let firstPendingOrder = orders.some((item)=>item.status === 'pending')
console.log(firstPendingOrder)
})
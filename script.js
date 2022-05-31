
let Arr=[1,2,3,0,4,5,6,7,8,9,0]
let k=''
let inp=document.querySelector('input')

function basla(){
    let set=setInterval(()=>{
        let random=Math.floor(Math.random()*Arr.length)
        k+=Arr[random]
        if(k.length>inp.value.length){
            k=''
        }
        
        if(k.length==inp.value.length){
            console.log(k);
            if(k.toLowerCase()==inp.value.toLowerCase()){
                console.log('beraberdir');
                console.log(k);
                clearInterval(set)
                
            }
        }
        },0.00000000000000000000000000001)
}


       
        
         
       


//   function basla(){
//      let set= setInterval(()=>{
//         let random=Math.floor(Math.random()*Arr.length);
//         if(random==inp.value[0]){
//             k+=random
//             console.log(k);
//             clearInterval(set)
//         }
//       },0.0001)
//       let set1= setInterval(()=>{
//         let random1=Math.floor(Math.random()*Arr.length);
//         if(random1==inp.value[1]){
//             k+=random1
//             console.log(k);
//             clearInterval(set1)
//         }
//       },0.0001)
//       let set2= setInterval(()=>{
//         let random2=Math.floor(Math.random()*Arr.length);
//         if(random2==inp.value[2]){
//             k+=random2
//             console.log(k);
//             clearInterval(set2)
//         }
//       },0.0001)
//       let set3= setInterval(()=>{
//         let random3=Math.floor(Math.random()*Arr.length);
//         if(random3==inp.value[3]){
//             k+=random3
//             console.log(k);
//             clearInterval(set3)
//         }
//       },0.0001)
//       let set4= setInterval(()=>{
//         let random4=Math.floor(Math.random()*Arr.length);
//         if(random4==inp.value[4]){
//             k+=random4
//             console.log(k);
//             clearInterval(set4)
//         }
//       },0.0001)
//       let set5= setInterval(()=>{
//         let random5=Math.floor(Math.random()*Arr.length);
//         if(random5==inp.value[5]){
//             k+=random5
//             console.log(k);
//             clearInterval(set5)
//         }
//       },0.0001)
//   }
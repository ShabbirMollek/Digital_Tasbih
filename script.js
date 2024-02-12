const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn=document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn =document.getElementById('subhanAllahDecrimentBtn');


const alhamdulillahDisplay =document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn=document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn=document.getElementById('alhamdulillahDecrimentBtn');


const allahAkberDisplay =document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn=document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn=document.getElementById ('allahAkberDecrimentBtn');



const resetBtn = document.getElementById('resetBtn');


let subhanAllahInitialValue = 0 ;
let alhamdullihInitialValue = 0 ;
let allahakbarInitialValue = 0 ;
// subhanallah button js
subhanAllahIncrimentBtn.addEventListener('click' ,function(){

                if (subhanAllahInitialValue == 33 ){
                                return alert ("Completed");
                }

                subhanAllahInitialValue +=1 ;
                subhanAllahDisplay.innerText = subhanAllahInitialValue ;
})
subhanAllahDecrimentBtn.addEventListener('click' ,function(){

                if (subhanAllahInitialValue == 0 ){
                                return alert ("You can not get negative values");
                }

                subhanAllahInitialValue -=1 ;
                subhanAllahDisplay.innerText = subhanAllahInitialValue ;
})

// alhamdulliha button js 


alhamdulillahIncrimentBtn.addEventListener('click' ,function(){

                if(alhamdullihInitialValue==33){
                                return alert("Completed")
                }

                alhamdullihInitialValue += 1;
                alhamdulillahDisplay.innerText=alhamdullihInitialValue;      
})

alhamdulillahDecrimentBtn.addEventListener('click' ,function(){

                if(alhamdullihInitialValue ==0){
                                return alert('You can not get negative values')
                }

                alhamdullihInitialValue -=1 ;
                alhamdulillahDisplay.innerText =alhamdullihInitialValue;
})
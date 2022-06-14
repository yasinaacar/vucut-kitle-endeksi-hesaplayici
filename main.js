let calculate=document.querySelector('#calculate');
let reset=document.querySelector('#reset');

function calculateBMI(){
    let weight=document.getElementById('weight').value;
    let height=document.getElementById('height').value;
    let result_statue= document.getElementById('result-statue');

    let result=weight/Math.pow(height,2);

    let screenResult=document.getElementById('result');
    screenResult.innerText=result.toFixed(2);

    if (result<=18.5){
        result_statue.innerText="Under Weight";
        result_statue.style.color='#2196f3';
        screenResult.style.color='#2196f3';
    }
    else if(result>18.5 && result<=25){
        result_statue.innerText="Normal";
        result_statue.style.color='#43a047';
        screenResult.style.color='#43a047'
    }
    else if(result>25 && result<=30){
        result_statue.innerText="Over Weight";
        result_statue.style.color='#fb8c00';
        screenResult.style.color='#fb8c00';
    }
    else if(result>30){
        result_statue.innerText="Obese";
        result_statue.style.color='#c62828';
        screenResult.style.color='#c62828';
    }
}

function resetBMI(){
    document.getElementById('weight').value=0;
    document.getElementById('height').value=0;
    document.getElementById('result').innerText='';
    document.getElementById('result-statue').innerText='';
    
}

calculate.addEventListener("click",function(){
    calculateBMI();
    console.log("calculate çalıştırıldı");
})

reset.addEventListener("click",function(){
    resetBMI();
    console.log("reset çalıştırıldı");
})

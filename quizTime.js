const quizform = document.querySelector('.form-quiz');
const submitBtn = document.querySelector('#submit-form');
const output = document.querySelector("#output");

const answer=["90","45","90","one right angle","12, 16, 20","Equilateral triangle","85","10","a + b + c","none"];

submitBtn.addEventListener("click",submitHandler);



function submitHandler(){
    const formResult = new FormData(quizform);
    let score =0;
    let index=0;
    for(let value of formResult.values()){
            if(value === answer[index])
                ++score;
        index++;
    }

    output.innerText = "Your score is "+score;
}
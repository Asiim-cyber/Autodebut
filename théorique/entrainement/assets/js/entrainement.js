// Initialisation des variables globale
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quitter_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
// const numAlpha = document.querySelector(".numAlpha");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .timer_line");
const result_box = document.querySelector(".result_box");
const restart_btn = result_box.querySelector(".buttons .restart");
const explanation_box = document.getElementById("explanation");
var score = document.getElementById("score");
let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
score.innerHTML = 50;

const next_btn = quiz_box.querySelector(".next_btn");
const validationUser = quiz_box.querySelector("validation");
const explanation_btn = document.getElementById("explanation_btn");

// condition si le bouton commencer le questionnaire est cliquer
start_btn.onclick = ()=> {

    //afficher les informations du questionnaire
    info_box.classList.add("activeInfo")

}

// condition si le bouton quitter le questionnaire est cliquer
quitter_btn.onclick = ()=> {

    // cacher les informations du questionnaire
    info_box.classList.remove("activeInfo")

}


// condition si le bouton continue le questionnaire est cliquer
continue_btn.onclick = ()=> {

    // cacher les informations du questionnaire
    info_box.classList.remove("activeInfo")
    quiz_box.classList.remove("activeResult")
    console.log("AAA")

    //afficher le quiz 
    quiz_box.classList.add("activeQuiz")

    // afficher les questions
    showQuestions(0);

    // afficher le numero de la  questions
    queCounter(1);

    //Commencer le timer 
    startTimer(15);

    //Commencer le timer de la ligne
    startTimerLine(0);

}

// condition si le bouton continue le questionnaire est cliquer
restart_btn.onclick = ()=> {

    // cacher les informations du questionnaire
    info_box.classList.remove("activeInfo")
    result_box.classList.remove("activeResult");

    //afficher le quiz 
    quiz_box.classList.add("activeQuiz")

    // afficher les questions
    showQuestions(0);

    // afficher le numero de la  questions
    queCounter(1);

    //Commencer le timer 
    startTimer(15);

    //Commencer le timer de la ligne
    startTimerLine(0);

}


// condition si le bouton valider est cliquer
function optionSelected() {

    
    // Intialisation des variables
    let userAns = $(".selected")[0].innerText;
    answer = userAns

    document.getElementById("next-btn").style.display = "block";
    for(let i = 0; i < $(".option_list")[0].children.length; i++){
    if ($(".option_list")[0].children[i].classList.contains("selected")){
        document.getElementById("validation").style.display = "none";
        document.getElementById("explanation_btn").style.display ="block";
    }
}

    // nettoyer le timer
    clearInterval(counter);

    // Initialisation des variables
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

    // condition si la réponse de l'utilisateur est la meme que la vraie reponse
    if (userAns == correctAns) {
        $(".selected")[0].classList.add("correct");    
        $(".selected")[0].insertAdjacentHTML("beforeend", tickIcon);
        

    } else {  
        $(".selected")[0].classList.add("incorrect");
        $(".selected")[0].insertAdjacentHTML("beforeend", crossIcon);
        score.innerHTML = parseInt(score.textContent) - (questions[que_count].points)
        console.log(score)

        // si la réponse est mauvaise montrer automatiquement la bonne réponse
        for (let i = 0; i < allOptions; i++) {

            if (option_list.children[i].textContent == correctAns) {

                option_list.children[i].setAttribute("class", "option correct")
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)

            }
        }
    }
    
    // quand l'utilisateur a choisi une reponse desactiver tout les autres choix
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
        
    }

}

// bouton explication est clicker
explanation_btn.addEventListener("click", click => {

    explanation_box.style.display = "flex";
    explanation_box.innerHTML = questions[que_count].explanation
    
})


// condition si le bouton question suivante est cliquer
next_btn.onclick = ()=> {

    explanation_box.style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("explanation_btn").style.display ="none";
    document.getElementById("validation").style.removeProperty("display");

    if(que_count < questions.length - 1) {

        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        
    }   
    else {
        
        
        quiz_box.classList.remove("activeQuiz");
        result_box.classList.add("activeResult");
            if(result_box.classList.contains("activeResult")){
                if(parseInt(score.textContent) >= 41 ){
                    $("#fail-or-success")[0].innerHTML = `Bravo, tu as eu <p>${score.textContent}</p>des<p>50</p>points`
                }
                else{
                    $("#fail-or-success")[0].innerHTML = `Dommage, tu as eu seulement <p>${score.textContent}</p>des<p>50</p>points`
                }
            }
    }

}

// recevoir les questions et les elements de reponse
function showQuestions(index) {

    option_list.innerHTML = '';

    const que_text = document.querySelector(".que_text");
    let que_image = '<div class"photo">' + questions[index].image + '</div>'
    let que_tag = '<span>'+ questions[index].numb + ". "  + questions[index].question +'</span>' + que_image
    for(let i = 0; i < questions[index].options.length; i++){
        option_list.innerHTML += '<div class="option">' + questions[index].options[i] + '<span></span></div>';
    }

    que_text.innerHTML = que_tag;
    questionList = $(".option")
    for(let i = 0; i < questionList.length; i++){
        questionList[i].addEventListener("click", function(){
            if(!(this.classList.contains("disabled-answer"))){
            this.classList.add("selected")
            for(let i = 0; i < $(".option_list")[0].children.length; i++){
                if (!($(".option_list")[0].children[i].classList.contains("selected"))){
                    $(".option_list")[0].children[i].classList.add("disabled-answer")
                }
            }
        }

        if(this.classList.contains("disabled-answer")){
            this.classList.remove("disabled-answer")
            for(let i = 0; i < $(".option_list")[0].children.length; i++){
                if (($(".option_list")[0].children[i].classList.contains("selected"))){
                    $(".option_list")[0].children[i].classList.remove("selected")
                    $(".option_list")[0].children[i].classList.add("disabled-answer")
                }
            }
            this.classList.add("selected")
        }
        })
    }


}

function queCounter(index) {

    const bottom_ques_counter =  quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>de<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag   


}

// FONCTION DU TEMPS RESTANTS
function startTimer(time) {

    counter = setInterval(timer, 1000);
    function timer() {

        timeCount.textContent = time;
        time--;
        if (time < 9) {

            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero

        }
        if (time < 0) {

            clearInterval(counter);
            timeCount.textContent = "00";
            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;
            for (let i = 0; i < allOptions; i++) {

                if (option_list.children[i].textContent == correctAns) {
    
                    option_list.children[i].setAttribute("class", "option correct")
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
                    option_list.children[i].classList.add("selected")
    
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
                
            }
            document.getElementById("next-btn").style.display = "block";
            for(let i = 0; i < $(".option_list")[0].children.length; i++){
            if ($(".option_list")[0].children[i].classList.contains("selected")){
                document.getElementById("validation").style.display = "none";
                document.getElementById("explanation_btn").style.display ="block";
            }
        }
            
            
        }

    }

}

// FONCTION DE LA LIGNE DU TEMPS
// function startTimerLine(time) {

//     counter = setInterval(timer, 29);
//     function timer() {
//         time += 1;
//         timeLine.style.width = time + "px";
//         if (time > 549) {
//             clearInterval(counterLine);
//         }
//     }
// }







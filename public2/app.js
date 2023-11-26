
var questions = [
    {
        question:"1. HTML stands for",
        option1:"Hyper Text markup language",
        option2:"Hyper Link markup language",
        option3:"Hyper Text makeup language",
        correctOption:"Hyper Text markup language"
    },
    {
        question:" 2. CSS stands for",
        option1:"Cascading Style sheet",
        option2:"Cascading Styling sheet",
        option3:"Cascading super sheet",
        correctOption:"Cascading Style sheet"
    },{
        question:" 3. In how many ways can CSS be written in?",
        option1:"1",
        option2:"2",
        option3:"3",
        correctOption:"3"
    },{
        question:" 4. Which tag gives your the largest heading?",
        option1:"<h6>",
        option2:"<h2>",
        option3:"<h1>",
        correctOption:"<h1>"
    },{
        question:" 5. how many data types in js?",
        option1:"6",
        option2:"7",
        option3:"8",
        correctOption:"8"
    }
    ,{
        question:" 6. how many days in febuary",
        option1:"30",
        option2:"28",
        option3:"29",
        correctOption:"28"
    }]
    
  
  var ques = document.getElementById('ques')
  var opt1 = document.getElementById('opt1')
  var opt2 = document.getElementById('opt2')
  var opt3 = document.getElementById('opt3')
  var banner = document.getElementById('banner')


 var restartBtn = document.getElementById('restart-btn') 


  var index = 0;
  var score = 0;
  
  var currentQues = document.getElementById('currentQues')
  var totalQues = document.getElementById('totalQues')
  
  
  var min = 1;
  var sec = 59;
  var timer = document.getElementById('timer')
  var interval;
  var questionsEnded = false;
  
  
  
  function nextQuestion(){
    var getOptions = document.getElementsByName('options')
    for(var i = 0 ; i < getOptions.length; i++){
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            var selectedAns = questions[index - 1][`option${selectedValue}`]
            var correctAns = questions[index - 1]['correctOption']
            if(selectedAns == correctAns){
                score++;
            }
        }
        getOptions[i].checked = false;
    }
    var btn = document.getElementById('btn')
    btn.disabled = true;
  
    if(index > questions.length - 1){
        questionsEnded = true;
        clearInterval(interval);
        timer.innerHTML = `0:0`; 
        
        var Percentage = ((score / questions.length)*100).toFixed(1);
        if(Percentage <= 50){
            sweetAlert("Oops...", "You are Fail!! ", "error");
            // clearInterval(interval)     
  
            
        }
        else{
  
            swal("Good job!", "Your Percentage is " + Percentage, "success")
            // clearInterval(interval) 
  
        } 
        banner.style.display = 'none'
        restartBtn.style.display = 'inline-block'
    }
    else{
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        totalQues.innerHTML = questions.length;
        currentQues.innerHTML = index + 1 + ' / '; 
        index++;
        min = 1;
        sec = 59;
    }
  }
  nextQuestion()
  
  
  
  
  
  
  function clicked(){
    var btn = document.getElementById('btn')
    btn.disabled = false;
  }
  
  // function start(){
  //    banner.style.display = 'block'
  //     setInterval(function(){
  //   var timer = document.getElementById('timer')
  //     timer.innerHTML = `${min} : ${sec}`;
  //       sec--;
  //       if(sec < 0){
  //         min--;
  //         sec = 59;
  //         if(min < 0){
  //             min = 1;
  //             sec = 59;
  //             nextQuestion()
  //         }
  //     }
  // },1000) 
  //   var startBtn = document.getElementById('start-btn')
  //   startBtn.style.display = 'none'
  // } 
  
  
  
//   function start() {
//     if (!questionsEnded) {
//         banner.style.display = 'block';
//         interval = setInterval(function() {
//             var timer = document.getElementById('timer');
//             timer.innerHTML = `${min} : ${sec}`;
//             sec--;
//             if (sec < 0) {
//                 min--;
//                 sec = 59;
//                 if (min < 0) {
//                     min = 1;
//                     sec = 59;
//                     if (!questionsEnded) {
//                         nextQuestion(); // Only call nextQuestion if questions have not ended
//                     }
//                 }
//             }
//         }, 1000);
//     }
//     var startBtn = document.getElementById('start-btn');
//     startBtn.style.display = 'none';
//   }




function start() {
    if (questionsEnded == false) {
        banner.style.display = 'block';
        interval = setInterval(function () {
            timer.innerHTML = `${min} : ${sec}`;
            sec--;
            if (sec < 0) {
                min--;
                sec = 59;
                if (min < 0) {
                    min = 1;
                    sec = 59;
                    nextQuestion();
                }
            }
        }, 1000);
    }
    var startBtn = document.getElementById('start-btn');
    startBtn.style.display = 'none';
}

function restart() {

    index = 0;
    score = 0;
    questionsEnded = false;

    restartBtn.style.display = 'none';

    var startBtn = document.getElementById('start-btn');
    startBtn.style.display = 'inline-block';
    nextQuestion();
}



  


var readlinesync=require("readline-sync");
var chalk=require("chalk");
var score=0;
//Intro
var username=readlinesync.question("Welcome dear participant may i know your name?");
console.log("Welcome "+ chalk.magenta.bold(username)+ " to the quiz about sohan");
console.log("");
//array of question
var questions=[{
  question:"What kinda place does sohan like to visit?:",
  answer:"Mountains and cliffs"
  },{
  question:"What is sohans favorite super power?:",
  answer:"super speed"
  },
  {
  question:"How old is sohan?:",
  answer:"22"
  },
  ];

  //play function
    
    function play(question,answer)
    {
      var userans=readlinesync.question(question);

      if(userans.toUpperCase()===answer.toUpperCase())
      {
        console.log(chalk.greenBright("Yay! You are Correct"));
        score=score+1;
      }
     else
     {
       console.log(chalk.redBright("OOOPS! You got that Wrong"));
       score=score-1;
     }
     console.log("Current Score:"+score);
     console.log(chalk.yellowBright("********************"));
    }

    //loop
    for(var i=0;i<questions.length;i++)
    {
      var currentquestion=questions[i];
      play(currentquestion.question,currentquestion.answer);
    }
    console.log("Congratulations "+score+" is your final score")
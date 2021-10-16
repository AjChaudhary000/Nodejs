const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var QuizData = require("./QuizData")
var UserName;
var QuizPlay;
var QuizPoint = 0   ;
var option;
var no =0;
const GetUserData = () =>{
    rl.question(`Enter The User User Name  ?  `, function (answer) {
        var name  = answer;
        SetUserData(name);
    });
}
const SetUserData = (name) =>{
    UserName = name;
    console.log(`\n\nHello, Wellcome  ${UserName}!`)
    GameStart();
}
const GameStart =()=>{
    rl.question(`${UserName} You Have Play a React Quiz ("Yes" Press : 'Y' and "No" Press :'N') ? `, function (answer) {
       QuizPlay = answer;
        if (QuizPlay == "Y" || QuizPlay == "y"){
             GameRoles();
        }else {
            if (QuizPlay == "N" || QuizPlay == "n"){
                console.log(`Thank You ${UserName}` );
               rl.close();
            }
        }
    });
}
const GameRoles = ()=>{
console.log("\nThere Will 10 Questions")
console.log(`******************* Game Rolus *******************`);
console.log(`1) Your Right Answer For +5 Point  `);
console.log(`2) Your Wrong Answer For -2 Point  `);
console.log(`**************************************************`);
for (var i =0;i<QuizData.length;i++){
    QuizQus(i);
}

}
const QuizQus = (no)=>{

       console.log('\n');
       console.log(`${no+1}) ${QuizData[no].Qus}`);
       console.log(`A) ${QuizData[no].A}`);
       console.log(`B) ${QuizData[no].B}`);
       console.log(`C) ${QuizData[no].C}`);
       console.log(`D) ${QuizData[no].D}`);
       GetQuizOption(QuizData[no].Ans);

}
const GetQuizOption = (Ans)=>{
    rl.question(`Select Option  ?  `,  function (op) {
    option =  op.toUpperCase();
   if (Ans == option){
       QuizPoint +=5;
   }else{
       QuizPoint -=2;
       console.log(`Correct Answer  : ${Ans}`)
   }
        rl.close();
    });
}


GetUserData();

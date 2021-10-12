const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input =  async (inputstring) => {
    var data  ;
    rl.question(`${inputstring}`, function (answer) {
        console.log("\n my name ", answer)
         data =  answer;
        rl.close();
    });
    console.log("\n my data name  ",  data)
    return data;
}
   var n1 =  input("Enter The Name :- ");
   console.log("\n my data is :- ",n1);



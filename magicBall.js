let user = "Harry";
let userQuestion = "Will I ever win the lottery?"

console.log(`${user} : ${userQuestion}`)

const ballAnswer = () => {
    let magic = Math.floor(Math.random()*5)
    let magicBall = ["Blur magic ball shakes and after a few moments gives an answer :"];
    
    switch (magic) {
        case 0:
            magicBall.push(" Probably not...")
            break;
        case 1:
            magicBall.push(" What do you think?")
            break;
        case 2:
            magicBall.push(" Better invest that money somwwhere else...")
            break;
        case 3:
            magicBall.push(" Maybe in another life...")
            break;
        case 4:
            magicBall.push(" YES!!! You are going te be a millionaire!")
            break;
        
    }
    
    console.log(magicBall.join(""));
}
ballAnswer();

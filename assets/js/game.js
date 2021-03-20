 window.alert("Welcome to Robot Gladiators!");
let player = {
    name: "",
    health:100,
    attack:10,
    money:10,
}
player.name = window.prompt("What is your robot's name?");
console.log(player)
// You can also log multiple values at once like this
let enemies = [{
    name:"Roborto",
    health:50,
    attack:12,
},
{
    name:"Amy Android",
    health:50,
    attack:12,
},
{
    name:"Robo Trumble",
    health:50,
    attack:12,

}
]
//let enemyNames = ["Roborto", "Amy Android", "RoboTrumble"];

let fight = function(enemy) {
    
    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?")
          // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"|| promptFight ==="Fight") {
        while (enemy.health > 0) {

//         //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemy.health -=  player.attack;

            window.alert(enemy.name + " was attacked for " + player.attack + " damage");
//  // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died");
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health +" health left.");
            }
// // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
            player.health -=  enemy.attack;
            window.alert(player.name + " was attacked for " + enemy.attack + " damage");

// // Log a resulting message to the console so we know that it worked.
// console.log(
//     enemyName + "attacked" + playerName + "." +playerName + "now has" + playerHealth + "health remaining."
// );
// // check playerHealth
            if (player.health <=0) {
                window.alert(player.name + " has died");
                break;
 
            }
            else {
                window.alert(player.name + " still has " + player.health + " health left");
            }
            break;
        }

    } 
    else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you want to quit?");
  
  // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(player.name + " has decided to skip this fight. Goodbye!");
      //subtract the money from playerMoney for skipping
            player.money -= 2;
        }
    } 
    else {
        window.alert("You need to choose a valid option. Try again!");
    }


}
while (player.health > 0) {
    for(let i = 0; i < enemies.length; i++) {
        if(enemies[i].health > 0){
            fight(enemies[i]); 
        }
        
        
    }

}










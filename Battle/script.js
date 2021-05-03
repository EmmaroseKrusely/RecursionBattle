
//#region Enemy
var enemies = [ 
   
    {
        'name': 'Skaith',
        'type': 'Barbarian',
        'ability': 'Damage Reduction',
        'health': 45.0,
        'power': 5.0,
        'dodge': 4.0,
        'block': 3.0,
    },

    {
        'name': 'Atanus',
        'type': 'Bandit',
        'ability': 'Evade Hit',
        'health': 45.0,
        'power': 6.0,
        'dodge': 6.0, 
        'block': 4.0,
    },

    {
        'name': 'Manara',
        'type': 'Spirit',
        'ability': 'Conjure',
        'health': 45.0,
        'power': 7.0,
        'dodge': 3.0,
        'block': 4.0,
    },

    {
        'name': 'Mivna',
        'type': 'Birdfolk',
        'ability': 'Lightweight',
        'health': 45.0,
        'power': 7.0,
        'dodge': 6.0,
        'block': 2.0,
    },

    {
        'name': 'Iza',
        'type': 'Demon',
        'ability': 'Super Strength',
        'health': 45.0,
        'power': 9.0,
        'dodge': 7.0,
        'block': 5.0,
    },


]
//#endregion

//#region Heros
var heros = [
    {
        'name': 'Luceras',
        'type': 'Light Elemental',
        'ability': 'Fade Into Light',
        'heroHealth': 45.0,
        'power': 8.0,
        'dodge': 6.0,
        'block': 5.0,
    },

    {
        'name': 'Tempris',
        'type': 'Fire Elemental',
        'ability': 'Fire Tornado',
        'heroHealth': 45.0,
        'power': 8.0,
        'dodge': 6.0,
        'block': 5.0,
    },

]

//#endregion



//#region Picking

let heroHealth = 45;
let enemyHealth = 45;

var heroMultiplier;
function heroRoll(){
    heroMultiplier = Math.floor(Math.random()*10)
    console.log(`Hero rolled a: ${heroMultiplier}`)
document.getElementById('heroDice').innerHTML = `Hero rolled a ${heroMultiplier}`
enemyHealth = enemyHealth - heroMultiplier;
 document.getElementById('enemyHP').innerHTML = `Enemy is at ${enemyHealth} health` 
if (enemyHealth <= 0 ){
    document.getElementById('heroWon').innerHTML = "Enemy has Died"
    document.getElementById('enemyDice').style.display = "none";
    document.getElementById('heroDice').style.display = "none";
    document.getElementById('heroHP').style.display = "none";
}


}

var enemyMultiplier;
function enemyRoll(){
    enemyMultiplier = Math.floor(Math.random()*10)
    document.getElementById('enemyDice').innerHTML = `Enemy rolled a ${enemyMultiplier}`
    heroHealth = heroHealth - enemyMultiplier;
    document.getElementById('heroHP').innerHTML = `Hero is at ${heroHealth} health` 
    // update(`${enemyMultiplier}`)
    // update(`${}`)
    console.log(`Enemy rolled a: ${enemyMultiplier}`)

    if (heroHealth <= 0 ){
        document.getElementById('enemyWon').innerHTML = "Hero has Died"
        document.getElementById('heroDice').style.display = "none";
        document.getElementById('enemyDice').style.display = "none";
        document.getElementById('enemyHP').style.display = "none";

    }

}

// function update(str){
//     document.getElementById('heroHP').innerHTML += (`${str}`)
// }

// heroRoll();
// enemyRoll();
function enemySelection(){
    randomEnemy = Math.floor(Math.random()*5)

    var enemyName = enemies[randomEnemy]['name'];
    var enemyPower = enemies[randomEnemy]['power'];
    var enemyHealth = enemies[randomEnemy]['health'];


    console.log(`${enemyName} enters the room. Their power level is  ${enemyPower}.They start at ${enemyHealth} health. Are you ready?` );
    document.getElementById("ranEnemy").innerHTML = (`${enemyName} walks into the room. Their power level is ${enemyPower}. They start at ${enemyHealth} health. Are you ready?`);


    document.getElementById("bro").style.display = "none";
}
function heroSelection(){
    randomHero = Math.floor(Math.random()*2)

    var heroName = heros[randomHero]['name'];
    var heroPower = heros[randomHero]['power'];
    var heroHealth = heros[randomHero]['health'];


    console.log(`${heroName} walks into the room. Their power level is ${heroPower}, They start at ${heroHealth} health,. Are you ready? `);
    document.getElementById("ranHero").innerHTML = (`${heroName} walks into the room. Their power level is ${heroPower}. They start at 45 health, Are you ready?`);
}

// enemySelection();
// heroSelection();

//#endregion

//#region Fight


let damage;
let power;

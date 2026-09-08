function muOnline(string) {
    let health = 100;
    let bitcoins = 0;
    string = string.split("|");
    let counter = 0
    let youDied = false

    for (let key of string) {
        key = key.split(" ");
        let command = key[0];
        let number = Number(key[1])
        counter += 1;
        switch (command) {
            case "potion":
                health += Number(number);
                if (health <= 100) {
                    console.log(`You healed for ${number} hp.`);
                } else {
                    console.log(`You healed for ${number - (health - 100)} hp.`);
                    health = 100;
                }
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                bitcoins += Number(number);
                console.log(`You found ${number} bitcoins.`);
                break

            default:
                health -= Number(number);
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${counter}`);
                    youDied = true
                    break
                }

        }
        if (youDied) {
            break
        }
    }

    if (youDied === false) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

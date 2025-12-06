console.log("Business Name Generator Project")
function business(x, y, z) {
    let a = Math.floor(Math.random() * 3);
    if (a == 1) {
        return x
    }
    else if (a == 2) {
        return y
    }
    else {
        return z
    }
}
console.log("Your business name is " + business("Crazy", "Amazing", "Fire") + " " + business("Engine", "Foods", "Garments") + " " + business("Bros", "Limited", "Hub"))
let pessoas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
function sortear() {
    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np)
    document.getElementById("numero").innerHTML = pessoas[ns];
}
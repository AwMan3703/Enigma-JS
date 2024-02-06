
const allchars = [
    "a","à","b","c","d","e","è","é","f","g","h","i","ì","j","k","l","m","n","o","ò","p","q","r","s","t","u","ù","v","w","x","y","z",
    "A","À","B","C","D","E","È","É","F","G","H","I","Ì","J","K","L","M","N","O","Ò","P","Q","R","S","T","U","Ù","V","W","X","Y","Z",
    "1","2","3","4","5","6","7","8","9","0"," ",
    "\\","|","!","¡","\"","£","$","%","&","/","(",")","=","\"","?","¿","^","<",">","≤","≥","[","]","+","*","ç","Ç","@","°","#","§","¶",
    ",",";","…",".",":","•","·","-","_","–","—","«","»","“","‘","¥","~","‹","÷","´","`","≠",
    "∞","◊","{","}","ˆ","≈","","⁄","›","‰","¢","’","”","'"
];

document.getElementById('translator-key').min = (0 - allchars.length)
document.getElementById('translator-key').max = (allchars.length)

const caesarCypher = (text, key) => {
    let result = '';

    /* Just a simple Caesar cypher */
    const chars = Array.from(text);
    chars.forEach(c => {
        const index = allchars.indexOf(c);
        let encryptedindex = 0;
        if (index + key < 0) {
            console.log('negative overflow, offsetting from end')
            encryptedindex = allchars.length - Math.abs(key + index)
        } else if (index + key > (allchars.length - 1)) {
            console.log('positive overflow, offsetting from start')
            encryptedindex = index + key - allchars.length
        } else {
            console.log(`encrypted with no exception`)
            encryptedindex = index + key
        }
        result += allchars[encryptedindex]
    });

    return result;
}

const translator_translateCC = () => {
    const input = document.getElementById('translator-input');
    const key = parseInt(document.getElementById('translator-key').value);
    const output = document.getElementById('translator-output');

    if (input.value === '') { // if the input is empty
        [input, output] = [output, input] // swap input and output
    }

    output.value = caesarCypher(input.value, 0 - key)
}

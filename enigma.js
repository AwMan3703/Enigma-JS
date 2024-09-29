
const keyparam = 'enigmakey'; // The name of the url parameter containing the decryption key
const searchParams = new URLSearchParams(window.location.search); // Get the url parameters

const decryptables = document.getElementsByTagName('enigmajs-decrypt'); // Find the elements that need decryption

let key = parseInt(searchParams.get(keyparam));

if (searchParams.has(keyparam) && key !== undefined && !isNaN(key)) { // If a key is present and valid, decipher
    console.log("Enigmajs key is valid, proceeding with translation");
} else { // If the key is invalid or missing, abort
    console.log("Enigmajs key is not present or invalid");
    key = 0
}

for (let i = 0; i < decryptables.length; i++) {
    const e = decryptables[i];
    const d = caesarCypher(e.innerText, key); // maybe don't just use a caesar cypher lol
    const x = document.createElement(e.nodeName)
    x.innerHTML = d

    console.log('appending ', d)
    e.parentElement.append(x);
    e.remove();
}

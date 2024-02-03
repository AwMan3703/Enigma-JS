
const keyparam = 'enigmakey'; // The name of the url parameter containing the decryption key

const decryptables = document.getElementsByClassName('enigmajs-decrypt'); // Find the elements that need decryption

let key = 0;

const searchParams = new URLSearchParams(window.location.search); // Get the url parameters
if (!(searchParams.has(keyparam))) { console.log("no Enigmajs key found"); } // If no key is found, abort

if (key !== undefined && !isNaN(key)) { // If a key is present:
    console.log("Enigmajs key is valid, proceeding with translation");
    key = parseInt(searchParams.get(keyparam)); // Get the key from the parameter
} else {
    console.log("Enigmajs key is invalid");
} // If key is invalid, abort


for (let i = 0; i < decryptables.length; i++) {
    const e = decryptables[i];
    const d = caesarCypher(e.innerText, key); // maybe don't just use a caesar cypher lol
    const x = document.createElement(e.nodeName)
    x.innerHTML = d

    e.parentElement.append(x);
    e.remove();
}

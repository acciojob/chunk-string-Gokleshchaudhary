function stringChop(str, size) {
  // your code here
	function chunkString(str, chunkLength) {
    if (str === null) {
        return [];
    }

    const chunks = [];

    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}

// Event listener for the button click
document.getElementById('chunkButton').addEventListener('click', function() {
    const str = document.getElementById('inputString').value;
    const size = parseInt(document.getElementById('chunkSize').value, 10);

    if (size > 0) {
        const result = chunkString(str, size);
        document.getElementById('result').innerText = `Chunks: ${JSON.stringify(result)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid chunk size.';
    }
});
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

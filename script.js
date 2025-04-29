function stringChop(str, size) {
  // your code here
	for (let i = 0; i < str.length; i += chunkLength) {
    // Use slice to get the chunk
}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

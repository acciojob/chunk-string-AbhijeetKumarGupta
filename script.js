function stringChop(str, size) {
  // your code here
	
  if(!str) return [];
  const noOfChunks = Math.ceil(str.length/size);
  const chunks = new Array(noOfChunks);

  for(
    let chunkNo = 0, start = 0; 
    chunkNo < noOfChunks; 
    chunkNo++, start += size
  ){
    chunks[chunkNo] = str.substring(start, start+size);
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

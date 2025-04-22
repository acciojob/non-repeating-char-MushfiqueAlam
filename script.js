function firstNonRepeatedChar(str) {
 // Write your code here
	const charArray={};
	for (let ch of str) {
		charArray[ch]=(charArray[char] || 0) + 1;
		
	}
	 for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

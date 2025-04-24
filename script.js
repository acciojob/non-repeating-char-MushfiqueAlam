function firstNonRepeatedChar(str) {
 // Write your code here
	const charArray={};
	for (let ch of str) {
		charArray[ch]=(charArray[ch] || 0) + 1;
		
	}
	 for (let ch of str) {
        if (charArray[ch] === 1) {
            return ch;
        }
    }

	return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

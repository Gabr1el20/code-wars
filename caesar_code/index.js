const ABECEDARY = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function caesarCode(string, key) {
  let newString = ""
  for (let letter of string) {
    if (letter === "") {
      throw new Error("The string can't be empty")
    } else {
      let index = charToInt(letter)
      let newIndex = index + key
      newString += intToChar(newIndex)
    }
  }
  return newString
}

function charToInt(char) {
  return ABECEDARY.indexOf(char)
}

function intToChar(int) {
  let indexToReturn = int
  if (int > 25) {
    indexToReturn = int % 26
  }
  return ABECEDARY.at(indexToReturn)
}


console.log(caesarCode("abc", 1000))
console.log(ABECEDARY.at(-1))

function chkPal(){
    let word= document.getElementById('word').value;
    let rword = '';
  let arr = [];
    for (let i = 0; i < word.length; i++) {
    arr.push(word[i])
  }
  console.log(arr);
  
  for (let i = 0; i < word.length; i++) {
    rword += arr.pop()
    console.log(rword)
  }
  
  if (!word){
     document.getElementById('show').innerHTML=`Type a word to check if it is a Palindrome.`
  }
    else if (rword === word) {
    console.log(`${word} is a Palindrome`)
    document.getElementById('show').innerHTML=`${word} is a Palindrome.`
  }
  else {
    console.log(`${word} is not a Palindrome`)
    document.getElementById('show').innerHTML=`${word} is not a Palindrome.`
  }
  
    
  }
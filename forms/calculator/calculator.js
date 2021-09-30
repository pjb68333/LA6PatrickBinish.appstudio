
btnSubmit1.onclick=function(){
  let num1 = Number(inptNumber.value)
  let num2 = Number(inptNumberTwo.value)
  let mathFunction = inptMath.value
  if (mathFunction == "Multiply")
    answer = num1 * num2
  else
    answer = num1 + num2
    lblMessage.value = "The answer is " + answer
}

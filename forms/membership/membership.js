
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnSubmit.onclick=function(){
  for(i=0;i < members.length;i++){
  let name = inptName.value
  if (name == members[i])
    lblMessage.value = name + ", you are already a member."
  else
    lblMessage.value = name + ", you have been added to the membership roster."
    members.push(name)
    console.log("It worked")
    }
}

  var alpha = "abcdefghijklmnopqrstuvwxyz"
  var num = Math.random()
  const alphas = alpha.split("")
  var text = num.toString().slice(2,8).split("")
  var changed = Number(text)
  var done = ""
 for(let i = 0; i<6; i++){
   var j = Number(text[i])
   done += alphas[j]

 }
console.log(done)

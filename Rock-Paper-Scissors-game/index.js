let user_entry = window.prompt("1. rock \n 2. paper \n 3. scissors \n enter your number - ")
console.log("user entry is "+user_entry)
let random_number_generater = random()
function random(){
	let random_number = Math.floor(Math.random()*3)+1
	console.log("computer choosen "+random_number)
	return random_number
}
if(user_entry ==1 && random_number_generater ==1){
	alert("you choosen rock and computer choosen rock so its a draw")
	console.log("message shown")
}
if (user_entry==1 && random_number_generater ==2){
	alert("you choosen rock and computer choosen paper so computer won")
	console.log("message shown")
}
if (user_entry==1 && random_number_generater ==3){
	alert("you choosen rock and computer choosen scissors so user won")
	console.log("message shown")
}
if (user_entry==2 && random_number_generater ==1){
	alert("you choosen paper and computer choosen rock so user won")
	console.log("message shown")
}
if (user_entry==2 && random_number_generater ==2){
	alert("you choosen paper and computer choosen paper so its a draw")
	console.log("message shown")
}
if (user_entry==2 && random_number_generater==3)
{
	alert("you choosen paper and computer scissors rock so computer won")
	console.log("message shown")
}
if (user_entry==3 && random_number_generater==1){
	alert("you choosen scissors and computer choosen rock so computer won")
	console.log("message shown")
}
if (user_entry==3 && random_number_generater==2){
	alert("you choosen scissors and computer choosen paper so user won")
	console.log("message shown")
}
if (user_entry==3 && random_number_generater==3){
	alert("you choosen scissors and computer choosen scissors so its a draw")
	console.log("message shown")
}
let count =0
let counting= document.getElementById("increment-el")
let entry=document.getElementById("previous-entries")

function increment() {
			console.log("button is clicked")
			count=count+1
			counting.innerText= "Count :" +" "+ count
		}
function decrement() {
		console.log("button is clicked")
			count=count-1
			counting.innerText="Count :" +" "+ count
		}
function reset() {
		console.log("button is clicked")
			count=0
			counting.innerText="Count :" +" "+ count
		}
function save() {
		console.log("button is clicked")
			let entry1=count+" "
			entry.textContent += entry1
			count=0
			counting.innerText="Count :" +" "+ count
		}
function clean() {
			console.log("button is clicked")
	        count=0
			counting.innerText="Count :" + " "+ count
			entry.textContent = " "
			
		}

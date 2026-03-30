const ideas = [

"Hidden feature in iPhone",
"Top 5 AI tools students must know",
"Secret YouTube growth hack",
"Apps that make money automatically",
"How creators go viral overnight"

]

function generateIdea(){

const random = Math.floor(Math.random()*ideas.length)

document.getElementById("result").innerText = ideas[random]

}

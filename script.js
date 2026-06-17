const container = document.getElementById("hearts");

for(let i = 0; i < 25; i++){
const heart = document.createElement("div");
heart.classList.add("heart");

heart.style.top = Math.random() * 100 + "%";
heart.style.left = Math.random() * 100 + "%";
heart.style.animationDuration = (3 + Math.random() * 5) + "s";

container.appendChild(heart);
}
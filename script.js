
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}


function toggleTheme(){
  document.body.classList.toggle("light");
}

let list = document.getElementById("list");

function addTask(){
  let task = document.getElementById("task").value;
  if(task==="") return;

  let li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove(); saveTasks()">❌</button>`;

  list.appendChild(li);
  saveTasks();
}

function saveTasks(){
  localStorage.setItem("tasks", list.innerHTML);
}

function loadTasks(){
  list.innerHTML = localStorage.getItem("tasks") || "";
}
loadTasks();


let products = [
  {name:"Phone",price:500},
  {name:"Laptop",price:1000},
  {name:"Shirt",price:50},
  {name:"Shoes",price:80}
];

function displayProducts(items){
  let container = document.getElementById("productList");
  container.innerHTML="";
  items.forEach(p=>{
    container.innerHTML += `<div class="product">${p.name} - $${p.price}</div>`;
  });
}

displayProducts(products);

function filterProducts(){
  let val = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p=>p.name.toLowerCase().includes(val));
  displayProducts(filtered);
}

function sortProducts(type){
  let sorted = [...products];

  if(type==="low"){
    sorted.sort((a,b)=>a.price-b.price);
  } else if(type==="high"){
    sorted.sort((a,b)=>b.price-a.price);
  }

  displayProducts(sorted);
}

function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name==="" || email===""){
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent!");
  return true;
}


let fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", ()=>{
  fades.forEach(el=>{
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add("show");
    }
  });
});
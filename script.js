const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const userMessage = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || phone === "" || userMessage === "") {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email!";
    return;
  }

  if (phone.length < 10) {
    message.style.color = "red";
    message.textContent = "Phone number must be at least 10 digits!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
  form.reset();
});
const galleryContainer = document.getElementById("galleryContainer");

const images = [
  "https://picsum.photos/300?random=1",
  "https://picsum.photos/300?random=2",
  "https://picsum.photos/300?random=3",
  "https://picsum.photos/300?random=4",
  "https://picsum.photos/300?random=5",
  "https://picsum.photos/300?random=6"
];

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  galleryContainer.appendChild(img);
});
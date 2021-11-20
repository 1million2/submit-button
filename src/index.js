const form = document.querySelector("form");
const buttonText = document.querySelector(".btn-text");
const spiner = document.querySelector(".icon-spiner");
const submitText = document.querySelector(".success-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  buttonText.style.display = "none";
  spiner.classList.add("active");
  setTimeout(() => {sendData('https://jsonplaceholder.typicode.com/posts')}, 1000);
});

const sendData = async (url) => {
  const response = await fetch(url, {
    method: "POST",
    body: new FormData(form)
  });
  if (!response.ok) {
    throw new Error("Ошибка по адресу: "+ url)
  }
  spiner.classList.remove("active");
  buttonText.style.display = "block";
  submitText.classList.add("active");
  setTimeout(() => {
    submitText.classList.remove("active");
  }, 1000);
  form.reset();
  const res = await response.json();
}
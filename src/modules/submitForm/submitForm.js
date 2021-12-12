import "./submitForm.scss"

export const formData = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const buttonText = document.querySelector(".btn-text");
  const spinner = document.querySelector(".icon-spinner8");
  const submitText = document.querySelector(".success-text");

  buttonText.style.display = "none";
  spinner.classList.add("active");

  const sendData = url => {
    fetch(url, {
      method: "POST",
      body: new FormData(form)
    })
      .then(res => {
        if (res.status == 201) {
          spinner.classList.remove("active");
          buttonText.style.display = "block";
          submitText.classList.add("active");
          //удаление активного класса, который подтверждает успешный запрос
          setTimeout(() => {
            submitText.classList.remove("active");
          }, 1000);
        }
      })
      .catch(err => {
        alert("Ошибка запроса: " + err.message)
        form.reset();
        spinner.classList.remove("active");
        buttonText.style.display = "block";
      })
    form.reset();
  }

  sendData('https://jsonplaceholder.typicode.com/posts');
}

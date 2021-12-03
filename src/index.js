import "./styles/style.css"
//import Form module
import {formData} from "./modules/submitForm/submitForm";
//Add form module
const form = document.querySelector(".form");
form.addEventListener("submit", formData );




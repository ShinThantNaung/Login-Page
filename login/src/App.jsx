import "./App.css"
import logo from "./assets/react.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle,faTwitter } from '@fortawesome/free-brands-svg-icons'


function App(){
  return(
    <div id = "container-fluid">
      <div id="logo-div">
        <img src = {logo} />
      </div>
      <div id="input-div">
        <p id = "title">Login</p>
        <input required class = "inputs" type = "email" placeholder = "Email"/>
        <input required class = "inputs" type = "password" placeholder = "Password"/>
      </div>
      <div id="button-div">
        <button type = "submit">Submit</button>
        <p id = "forgot"><a href = "#">Forgot Password?</a></p>
      </div>
      <div id="socials-div">
         <FontAwesomeIcon class = "socials" icon={faFacebook} />
         <FontAwesomeIcon class = "socials" icon = {faGoogle} />
         <FontAwesomeIcon class = "socials" icon = {faTwitter} />
      </div>
      <div id="register-div">
        <p id = "register">Don't have an account?<a href = "#">Register!</a></p>
      </div>
    </div>
  )
}

export default App;
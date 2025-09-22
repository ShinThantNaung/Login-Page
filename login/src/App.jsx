import "./App.css"
import logo from "./assets/react.svg"

function App(){
  return(
    <div className = "container-fluid">
      <div className = "form-container">
        <div className = "logo-div"><img src = {logo}></img></div>
        <div className="login-div">Login</div>
        <div className="input-container">
          <input className = "username-input" type = "text" placeholder = "Username" required />
          <input className = "password-input" type = "password" placeholder = "Password" required />
        </div>
        <div className="link-container">
          <p id = "register">Don't have an account? <a href = "#">Register!</a></p>
        </div>
        <div className="button-container">
          <button type = "submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App;
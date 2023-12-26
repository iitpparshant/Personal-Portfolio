import React ,{useState} from 'react';
import "./LoginSign.css";
import download1 from '../Assets/download1.png';

const LoginSignUp=()=> {
    const [action, setAction] = useState("Sign Up")


  return (
    <div className='containerL'>
        <div className="headerL">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        
        <div className="inputs">
        {action === "Sign Up" ? (
  <div className="input">
    <img src={download1} alt="" />
    <input type="text" />
  </div>
) : null}
            
            <div className="input">
                <img src={download1} alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={download1} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className="forget">Lost Password? <span>Click Here!</span></div>
                    <div className="sunmit-container">
                        <div className={action==="Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                        <div className={action==="Sign Up"? "submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    </div>
    </div>
  )
}

export default LoginSignUp;
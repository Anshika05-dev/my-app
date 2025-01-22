import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import './LoginForm.css';
function LoginForm() {
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="data">
                <input type="text" placeholder="Username" />
                <FaUser className="icon"/>
            </div>
            <div className="data">
                <input type="text" placeholder="Password" />
                <FaKey className="icon"/>
            </div>
            <div className="remfor">
                <lable>
                    <input type="checkbox" />
                Remember Me
                </lable>
                <a href="#"> Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
        </div>
    );
}
export default LoginForm;
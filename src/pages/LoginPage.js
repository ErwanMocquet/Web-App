import logo from "../img/logo.svg";

export default function LoginPage() {
    return (
        <div className="loginpage-main">
            <div className="login-center-container">
                <div className="Logo">
                    <span><img src={logo} alt="logo" /></span>
                </div>
                <div> 
                    <label htmlFor="inputfield-username" className="input-label">Username:</label>
                    <input type="text" className="inputfield" id="inputfield-username" />
                    <label htmlFor="inputfield-username" className="input-label">Password:</label>
                    <input type="text" className="inputfield" id="inputfield-username" />
                </div>
            </div>
        </div>
    )
};
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Login.css"

const Login = () => {
    return (
        <>
            <div className="login_main_container">
                <Navbar color="white" />
                <div className="login_flex_layout">
                    <a href="https://vsco.co">
                        <img class="mb30 vsco-seal" src="//assets.vsco.co/assets/images/icons/vsco-seal.svg" width="60" height="60" />
                    </a>
                    <p>Sign in to create, discover and connect <br />with the global community.</p>
                    <input type="text" placeholder='Email or Profile name' name="email" id="email" />
                    <input type="password" placeholder='Password' name="password" id="password" />
                    <label class="terms_label">I accept to the <a href="https://vsco.co/about/terms_of_use" target="_blank">Terms</a> &amp; <a href="https://vsco.co/about/privacy_policy" target="_blank">Privacy Policy</a></label>

                    <div className="vertical_box">
                        <div className="cont_1">
                            <p>SIGN UP - GET THE APP</p>
                            <p>FORGET THE PASSWORD</p>
                        </div>
                        <a className="sign_in_btn">SIGN IN</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
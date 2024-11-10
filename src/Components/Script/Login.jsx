import React from 'react'
import '../Style/Login.css'
import logo from '../../asserts/logo-s.png'
import image from '../../asserts/block-image.jpg'
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Login() {
    return (
        <>
            <div className='hero'>
                <div className="content">
                    <div className="right">
                        <div className="login">
                            <form className="info">
                                <div className="info-1">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h2>Welcome back</h2>
                                <p>Please enter your details</p>
                                <fieldset>
                                    <legend>
                                        Enter your name
                                    </legend>
                                    <input type="text" />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Enter your password
                                    </legend>
                                    <input type="password" />
                                </fieldset>
                                <div className='captcha'>
                                    <input type="text" placeholder='CAPTCHA' className='input-captcha' />
                                    <pre >23jer5</pre><RefreshIcon className='refresh' />
                                </div>
                                <button>Login</button>

                                <button  className='signin'>Not a Member ? Sign up</button>
                               
                            </form>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={image} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

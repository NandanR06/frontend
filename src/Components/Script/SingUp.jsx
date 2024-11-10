import React from 'react'
import '../Style/SingUp.css'
import logo from '../../asserts/logo-s.png'
import image from '../../asserts/block-image.jpg'
import RefreshIcon from '@mui/icons-material/Refresh';

export default function SingUp() {
  return (
    <div>
      <div className='hero2'>
                <div className="content2">
                <div className="logo2">
                        <img src={image} alt="image" />
                    </div>
                    <div className="left">
                        <div className="singup">
                            <form className="info">
                                <div className="info-2">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h2>Welcome </h2>
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
                                <button>Sign up</button>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

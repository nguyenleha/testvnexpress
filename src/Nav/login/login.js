import React from 'react'
import "./login.scss"

const Login = ({ setIsOpen }) => {

    return (
        <div className="body-login-form">

            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Đăng nhập</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        X
                    </button>
                    <div className="modalContent">
                        <form>
                            <input className='e-login' placeholder="Email" />
                            <input className='e-login' placeholder="Mật khẩu" />
                            <button className='btnlogin'>Đăng nhập</button>
                            <button className='btnllmk'> Lấy lại mật khẩu</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login
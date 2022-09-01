import React, { useState } from 'react'
import './header.scss'
import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Login from './login/login';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    isOpen ?  document.body.style.overflow = 'hidden': document.body.style.overflow = 'unset'
    
    return (
        <>
            <div className="headerr">
                <div className='left'>
                    <NavLink to="/" exact="true">
                        <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v641/v2_2019/pc/graphics/logo.svg"
                            alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    </NavLink>
                    <span className="time-now"> Thứ ba, 30/8/2022 </span>
                </div>
                <div className="right">
                    <NavLink to="/" className="active btnheader moinhat">
                        <FontAwesomeIcon icon={faClockFour} /> Mới nhất
                    </NavLink>
                    <NavLink to="/Page" className="active btnheader international">
                        <img src='https://apksshare.com/wp-content/uploads/2021/06/VnExpress-Tin-tc-24h-APK-MOD-Download-8.0.0.png' alt="" />
                        <span> International</span>
                    </NavLink>

                    <form className="search-vn ">

                        <input type="text" placeholder="Tìm kiếm" className="iputsearch" />

                        <button type="submit" title="Tìm Kiếm" className="btnsearch">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                    <button className="active dangnhap" onClick={() => setIsOpen(true)}>
                        <FontAwesomeIcon icon={faUser} /> Đăng Nhập
                    </button>
                </div>
            </div>
            {isOpen && <Login setIsOpen={setIsOpen} />}
        </>

    )
}

export default Header
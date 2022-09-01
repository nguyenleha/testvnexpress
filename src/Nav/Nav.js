import React from 'react'
import {
    Link,
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="tong">
                <li className="dropdownnav home">
                    <NavLink to="/" className="link" exact={true}>
                        <FontAwesomeIcon icon={faHomeAlt} />
                    </NavLink>

                </li>
                <li className="dropdownnav">
                    <NavLink to="/" className="link" >
                        Thời Sự
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Chính trị</Link></li>
                        <li><Link to="">Dân sinh</Link></li>
                        <li><Link to="">Lao động - Việc làm</Link></li>
                        <li><Link to="">Giao thông</Link></li>
                        <li><Link to="">Mekong</Link></li>
                        <li><Link to="">Quỹ Hy vọng</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Góc nhìn
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Bình luận nhiều</Link></li>
                        <li><Link to="">Chính chị {"&"} chính sách</Link></li>
                        <li><Link to="">Y tế {"&"} sức khỏe</Link></li>
                        <li><Link to="">Kinh doanh {"&"} quản trị</Link></li>
                        <li><Link to="">giáo dục {"&"} tri thức</Link></li>
                        <li><Link to="">Môi trường</Link></li>
                        <li><Link to="">Văn hóa {"&"} lối sống</Link></li>
                        <li><Link to="">Covid 19</Link></li>
                        <li><Link to="">Tác Giả</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Thế giới
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Tư liệu</Link></li>
                        <li><Link to="">Phân tích</Link></li>
                        <li><Link to="">Người Việt 5 châu</Link></li>
                        <li><Link to="">Cuộc sống đó đây</Link></li>
                        <li><Link to="">Quân sự</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Video
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Thời sự</Link></li>
                        <li><Link to="">Nhịp sống</Link></li>
                        <li><Link to="">Food</Link></li>
                        <li><Link to="">Tôi kể</Link></li>
                        <li><Link to="">chuyện núi rừng</Link></li>
                        <li><Link to="">Pháp luật</Link></li>
                        <li><Link to="">Giải trí</Link></li>
                        <li><Link to="">Thể thao</Link></li>
                        <li><Link to="">Số hóa</Link></li>
                        <li><Link to="">Xe</Link></li>
                        <li><Link to="">Sức khỏe</Link></li>
                        <li><Link to="">Du lịch</Link></li>
                        <li><Link to="">Thới giới</Link></li>
                        <li><Link to="">Khoa học</Link></li>
                        <li><Link to="">Giáo dục</Link></li>
                        <li><Link to="">Tọa Đàm kinh tế</Link></li>
                        <li><Link to="">Chủ đề</Link></li>
                        <li><Link to="">Nguy cơ</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Podcasts
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">VnExpress hôm nay</Link></li>
                        <li><Link to="">Họ nói gì?</Link></li>
                        <li><Link to="">Hộp đen</Link></li>
                        <li><Link to="">Ly hôn</Link></li>
                        <li><Link to="">Thầm thì</Link></li>
                        <li><Link to="">Bạn ổn không?</Link></li>
                        <li><Link to="">Tôi trong gương</Link></li>
                        <li><Link to="">Điềm tin</Link></li>
                        <li><Link to="">Chuyện đi làm</Link></li>
                        <li><Link to="">Úp mở 18+</Link></li>
                        <li><Link to="">Tiền làm gì?</Link></li>
                        <li><Link to="">Nguy cơ</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Kinh doanh
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Quốc tế</Link></li>
                        <li><Link to="">Doanh nghiệp</Link></li>
                        <li><Link to="">Chứng khoán</Link></li>
                        <li><Link to="">Bất động sản</Link></li>
                        <li><Link to="">Ebank</Link></li>
                        <li><Link to="">Vĩ mô</Link></li>
                        <li><Link to="">Tiền của tôi</Link></li>
                        <li><Link to="">Bảo hiểm</Link></li>
                        <li><Link to="">Hàng hóa</Link></li>
                        <li><Link to="">Vhome</Link></li>
                        <li><Link to="">eBox</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Khoa học
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Khoa học trong nước</Link></li>
                        <li><Link to="">Tin tức</Link></li>
                        <li><Link to="">Phát minh</Link></li>
                        <li><Link to="">ứng dụng</Link></li>
                        <li><Link to="">Thới giới tự nhiên</Link></li>
                        <li><Link to="">Thường thức</Link></li>
                        <li><Link to="">Sáng kiến Khoa học</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Giải trí
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Giới sao</Link></li>
                        <li><Link to="">Video</Link></li>
                        <li><Link to="">Phim</Link></li>
                        <li><Link to="">Nhạc</Link></li>
                        <li><Link to="">Thời trang</Link></li>
                        <li><Link to="">Làm đẹp</Link></li>
                        <li><Link to="">Sách</Link></li>
                        <li><Link to="">Sân khấu - Mỹ thuật</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Thể thao
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Bóng đá</Link></li>
                        <li><Link to="">Marathon</Link></li>
                        <li><Link to="">Lịch sử đấu</Link></li>
                        <li><Link to="">Tennis</Link></li>
                        <li><Link to="">Bundesliga</Link></li>
                        <li><Link to="">Các môn khác</Link></li>
                        <li><Link to="">Hậu trường</Link></li>
                        <li><Link to="">Video</Link></li>
                        <li><Link to="">Ảnh</Link></li>
                        <li><Link to="">Tường thuật</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Pháp luật
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Hồ sơ phá án</Link></li>
                        <li><Link to="">Tư vấn</Link></li>
                        <li><Link to="">Video</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Giáo dục
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Tin tức</Link></li>
                        <li><Link to="">Tuyển sinh</Link></li>
                        <li><Link to="">Chân dung</Link></li>
                        <li><Link to="">Du học</Link></li>
                        <li><Link to="">Học tiếng Anh</Link></li>
                        <li><Link to="">Trắc nghiệm</Link></li>
                        <li><Link to="">Giáo dục 4.0</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Sức khỏe
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Tin tức</Link></li>
                        <li><Link to="">Tư Cấn</Link></li>
                        <li><Link to="">Dinh dưỡng</Link></li>
                        <li><Link to="">Khỏe đẹp</Link></li>
                        <li><Link to="">Đàn ông</Link></li>
                        <li><Link to="">Các bệnh</Link></li>
                        <li><Link to="">vaccine</Link></li>
                        <li><Link to="">Di chứng Covid</Link></li>
                        <li><Link to="">Di truyền</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Đời sống
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Tổ ấm</Link></li>
                        <li><Link to="">Bài học sống</Link></li>
                        <li><Link to="">Nhà</Link></li>
                        <li><Link to="">Tiêu dùng</Link></li>
                        <li><Link to="">Cooking</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Du lịch
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Điểm đến</Link></li>
                        <li><Link to="">Ẩm thực</Link></li>
                        <li><Link to="">Dấu chân</Link></li>
                        <li><Link to="">Tư vấn</Link></li>
                        <li><Link to="">Cẩm nang</Link></li>
                        <li><Link to="">Ảnh</Link></li>
                        <li><Link to="">Ăn và chơi</Link></li>
                        <li><Link to="">Mở cửa du lịch</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Số Hóa
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Công nghệ</Link></li>
                        <li><Link to="">Sản phẩm</Link></li>
                        <li><Link to="">Blockchain</Link></li>
                        <li><Link to="">Tech Award 2022</Link></li>
                        <li><Link to="">Startup</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Xe
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Thị trường</Link></li>
                        <li><Link to="">Cầm lái</Link></li>
                        <li><Link to="">Diễn đàn</Link></li>
                        <li><Link to="">V-Car</Link></li>
                        <li><Link to="">Thi bằng lái</Link></li>
                        <li><Link to="">Mua bán</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Ý kiến
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Thời sự</Link></li>
                        <li><Link to="">Đời sống</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Tâm sự
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Chuyên Gia gỡ rối</Link></li>
                        <li><Link to="">Hẹn hò</Link></li>
                    </ul>
                </li>
                <li className="dropdownnav">
                    <NavLink to="/Page" className="link" >
                        Hài
                    </NavLink>
                    <ul className="dropdownnav-content">
                        <li><Link to="">Cười</Link></li>
                        <li><Link to="">Đố vui</Link></li>
                        <li><Link to="">Chuyện lạ</Link></li>
                        <li><Link to="">Thú cưng</Link></li>

                    </ul>
                </li>
                <li className="dropdownnav tatca">
                    <NavLink to="/Page" className="link" >
                        Tất cả  <FontAwesomeIcon icon={faBars} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
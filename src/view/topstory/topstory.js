import React from 'react'
import "./topstory.scss"
import img1 from "../../asset/img/package-lock.jpeg"
import imgtacgia from "../../asset/img/hinhtacgia.png"
import {
    Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'


const Topstory = () => {
    return (
        <div className="bodytopstory">
            <div className='bodytopstory-left'>
                <div className='item-new'>
                    <div className='item-new-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='item-new-sub'>
                        <h3 className="tieude">
                            Hơn 2.400 phạm nhân được đặc xá dịp 2/9
                        </h3>
                        <p className='noidung'>
                            Chủ tịch nước Nguyễn Xuân Phúc đặc xá cho 2.434 phạm nhân đã cải tạo tốt, nhân dịp Quốc khánh 2/9.
                        </p>
                        <p className='thugon'>
                            Ngày 31/8, quyết định của Chủ tịch nước được công bố. Ngoài các phạm nhân ...
                        </p>
                        <div className='thoigian'>
                            <span>
                                43' trước
                            </span>
                            <span>
                                Thời sự
                            </span>
                        </div>
                    </div>
                </div>
                <div className='sub-new'>
                    <div className="sub-new-a">
                        <div className='sub-new-a1'>
                            <h3 className="tieude">
                                Đài Loan dọa đáp trả nếu tàu chiến Trung Quốc áp sát bờ biển
                            </h3>
                            <p className='noidung'>
                                Đài Loan tuyên bố sẽ tự vệ và tấn công đáp trả tàu chiến, máy bay Trung Quốc tiến vào khu vực 12 hải lý quanh hòn đảo.
                            </p>
                        </div>
                        <div className='sub-new-a1'>
                            <h3 className="tieude">
                                Hà Nội và TP HCM yêu cầu chưa thu học phí năm học mới
                            </h3>
                            <p className='noidung'>
                                Sở Giáo dục và Đào tạo Hà Nội, TP HCM yêu cầu các trường tạm thời chưa thu học phí năm học 2022-2023 do chưa có quy định, hướng dẫn mới từ thành phố.
                            </p>
                        </div>
                    </div>
                    <div className="sub-new-b">
                        <div className='gocnhin'>
                            Góc nhìn
                        </div>
                        <h3 className="tieude">
                            Đem tiền trả lại
                        </h3>
                        <p className='noidung'>
                            Quy định mua sắm, đấu thầu ngày càng khắt khe, nhiều nơi chọn cách trả lại vốn cho nhà nước, không dám quyết tiêu bằng hết như trước.
                        </p>
                        <div className='tacgia'>
                            <div className='tacgia-1'>
                                <Link to="" className='tacgia-ten'>Quan Thế Dân</Link>
                                <Link to="" className='tacgia-binhluan'>

                                    <FontAwesomeIcon icon={faCommentAlt} /> 11
                                </Link>
                            </div>
                            <div>
                                <img src={imgtacgia} alt="" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bodytopstory-right'>
                Quảng cáo
            </div>

        </div >
    )
}

export default Topstory
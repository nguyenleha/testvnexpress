import React from 'react'
import banhoc from "../../../asset/img/banhoc.jpg"
import campuchia from "../../../asset/img/campuchia.jpg"
import flcgroup from "../../../asset/img/flcgroup.jpg"
import quocphongnga from "../../../asset/img/quocphongnga.jpg"
import ttuca from "../../../asset/img/ttuca.jpg"

const Story2left = () => {
    return (
        <div className='bodystory2-left'>
            <div className='bodystory2-left-1'>
                <h3 className="tieude">
                    Tổng thống Ukraine nêu hai lựa chọn cho Nga
                </h3>
                <div className='noidung'>
                    <img src={ttuca} alt="" />
                    <p>
                    Tổng thống Ukraine Zelensky nói lực lượng Nga chỉ có thể lựa chọn giữa bỏ chạy hoặc đầu hàng, khi nhắc tới chiến dịch phản công ở miền nam.
                    </p>
                </div>
            </div>

            <div className='bodystory2-left-1'>
                <h3 className="tieude">
                Mất cơ hội việc làm vì đồng hương cư trú bất hợp pháp
                </h3>
                <div className='noidung'>
                    <img src={banhoc} alt="" />
                    <p>
                    Học ngoại ngữ, chuẩn bị sẵn sàng cho kỳ thi để sang Hàn Quốc làm việc, Diệp sốc khi hay tin quê mình nằm trong danh sách dừng tuyển lao động.
                    </p>
                </div>
            </div>

            <div className='bodystory2-left-1'>
                <h3 className="tieude">
                Cổ phiếu FLC bị đình chỉ giao dịch từ 9/9
                </h3>
                <div className='noidung'>
                    <img src={flcgroup} alt="" />
                    <p>
                    HoSE vừa ra quyết định chuyển cổ phiếu FLC từ diện hạn chế giao dịch sang đình chỉ giao dịch từ ngày 9/9 do liên tục vi phạm quy định công bố thông tin. 
                    </p>
                </div>
            </div>

            <div className='bodystory2-left-1'>
                <h3 className="tieude">
                Nga nói Ukraine thất bại trong ngày phản công thứ hai
                </h3>
                <div className='noidung'>
                    <img src={quocphongnga} alt="" />
                    <p>
                    Bộ Quốc phòng Nga thông báo lực lượng nước này đẩy lùi đợt phản công của Ukraine tại Mykolaiv - Kryvyi Rih, trong khi Kiev nói họ đạt thành công tại một số khu vực ở Kherson. 
                    </p>
                </div>
            </div>

            <div className='bodystory2-left-1'>
                <h3 className="tieude">
                Campuchia giữ 5 người Việt nghi là nạn nhân buôn người
                </h3>
                <div className='noidung'>
                    <img src={campuchia} alt="" />
                    <p>
                    Cảnh sát Campuchia giữ 5 công dân Việt Nam ở Sihanoukville vì nghi ngờ là nạn nhân buôn người, sau khi nhận được cuộc gọi đến đường dây nóng. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Story2left
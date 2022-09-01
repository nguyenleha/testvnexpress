import React from 'react'
import hetxang from "../../../asset/img/hetxang.jpg"
import ronaldo from "../../../asset/img/ronaldo.png"
import william from "../../../asset/img/william.jpg"
import vaccin from "../../../asset/img/vaccin.jpg"


import {
  NavLink
} from "react-router-dom";

const Story2right = () => {
  return (
    <div className='bodystory2-right'>
      <div className='bodystory2-right-1'>
        <ul>
          <li className='bodystory2-right-active'>
            <NavLink to="/page">Kinh doanh</NavLink>
          </li>
          <li><NavLink to="/page">Quốc tế</NavLink></li>
          <li><NavLink to="/page">Doanh nghiệp</NavLink></li>
          <li><NavLink to="/page">Chứng khoán</NavLink></li>
          <li><NavLink to="/page">Bất động sản</NavLink></li>
          <li><NavLink to="/page">Bảo hiểm</NavLink></li>
        </ul>
        <div className='story2-abs'>
          <div className='story2-abs-top'>
            <div className='story2-abs-left'>
              <div className='hinh'>
                <img src={hetxang} alt="" />
              </div>
              <div className='noidung'>
                <h3 className="tieude">
                  Bất cập trên thị trường xăng dầu tái xuất
                </h3>
                <p>
                  Hiện tượng cây xăng đóng cửa vì kêu lỗ lại xảy ra có thể hé lộ những bất cập về chính sách cần giải quyết, theo chuyên gia.
                </p>
              </div>
            </div>
            <div className='story2-abs-right'>
              <div className='noidung'>
                <h3 className="tieude">
                  Singapore có nhà ở xã hội giá triệu USD
                </h3>
                <p>
                  Hàng trăm nhà ở xã hội tại Singapore đang được bán với giá hơn 1 triệu đôla Singapore (716.000 USD), trong đó ít nhất 2 căn vượt 1 ...
                </p>
              </div>
            </div>
          </div>
          <div className='story2-abs-top story2-abs-center'>
            <div className='story2-abs-left'>
              <div>
                Thị trường nhà cho thuê hồi phục
              </div>
              <div>
                Doanh nghiệp thực phẩm khát vốn
              </div>
            </div>
            <div className='story2-abs-right'>
              <div>
                Giá thuê mặt bằng đường Lê Lợi tăng vọt 74
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='bodystory2-right-1'>
        <ul>
          <li className='bodystory2-right-active'>
            <NavLink to="/page">Thể thao</NavLink>
          </li>
          <li><NavLink to="/page">Bóng đá</NavLink></li>
          <li><NavLink to="/page">Tennis</NavLink></li>
          <li><NavLink to="/page">Mẩthon</NavLink></li>
          <li><NavLink to="/page">Lịch thi đấu</NavLink></li>
        </ul>
        <div className='story2-abs'>
          <div className='story2-abs-top'>
            <div className='story2-abs-left'>
              <div className='hinh'>
                <img src={ronaldo} alt="" />
              </div>
              <div className='noidung'>
                <h3 className="tieude">
                  Ten Hag: 'Dĩ nhiên Man Utd cần Ronaldo'
                </h3>
                <p>
                  ANH - Theo HLV Erik ten Hag, Man Utd cần siêu sao Cristiano Ronaldo để tăng chiều sâu đội hình trước lịch đấu dày đặc mùa này.
                </p>
              </div>
            </div>
            <div className='story2-abs-right'>
              <div className='noidung'>
                <h3 className="tieude">
                  Người Singapore muốn Schooling bị tước HC vàng
                </h3>
                <p>
                  Trên các diễn đàn ở Singapore, người hâm mộ cho rằng sự nghiệp bơi lội của kình ngư 27 tuổi Joseph ...
                </p>
              </div>
            </div>
          </div>
          <div className='story2-abs-top story2-abs-center'>
            <div className='story2-abs-left'>
              <div>
                Man Utd dùng Antony thế nào
              </div>
              <div>
                Chí Quân khởi đầu sáng ở BRG Open Golf Championship 2022
              </div>
            </div>
            <div className='story2-abs-right'>
              <div>
                SLNA đoạt cú ăn năm ở các giải trẻ
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='bodystory2-right-1'>
        <ul>
          <li className='bodystory2-right-active'>
            <NavLink to="/page">Giải trí</NavLink>
          </li>
          <li><NavLink to="/page">Giới sao</NavLink></li>
          <li><NavLink to="/page">Phim</NavLink></li>
          <li><NavLink to="/page">Nhạc</NavLink></li>
          <li><NavLink to="/page">Thời trang</NavLink></li>
          <li><NavLink to="/page">Sách</NavLink></li>
        </ul>
        <div className='story2-abs'>
          <div className='story2-abs-top'>
            <div className='story2-abs-left'>
              <div className='hinh'>
                <img src={william} alt="" />
              </div>
              <div className='noidung'>
                <h3 className="tieude">
                  Serena Williams - tay vợt phá vỡ các rào cản thời trang
                </h3>
                <p>
                  Nữ hoàng quần vợt Serena Williams sử dụng quần áo để thể hiện cá tính và thay đổi các quan niệm trong xã hội.
                </p>
              </div>
            </div>
            <div className='story2-abs-right'>
              <div className='noidung'>
                <h3 className="tieude">
                  Phong cách Julianne Moore ở tuổi ngoài 60
                </h3>
                <p>
                  Minh tinh Julianne Moore tươi trẻ nhờ chọn trang phục có phom dáng, màu sắc đa dạng ở tuổi lục tuần.
                </p>
              </div>
            </div>
          </div>
          <div className='story2-abs-top story2-abs-center'>
            <div className='story2-abs-left'>
              <div>
                Lâm Chí Dĩnh: 'Bình an là phúc'
              </div>
              <div>
                Mỹ nhân Hong Kong phục vụ ở nhà hàng
              </div>
            </div>
            <div className='story2-abs-right'>
              <div>
                Tạo hình dàn sao 'Phi hồ ngoại truyện' 2022
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='bodystory2-right-1'>
        <ul>
          <li className='bodystory2-right-active'>
            <NavLink to="/page">Sức khỏe</NavLink>
          </li>
          <li><NavLink to="/page">Tin tực</NavLink></li>
          <li><NavLink to="/page">Dinh dưỡng</NavLink></li>
          <li><NavLink to="/page">Khỏe đẹp</NavLink></li>
          <li><NavLink to="/page">Các bệnh</NavLink></li>
          <li><NavLink to="/page">Vaccine</NavLink></li>
          <li><NavLink to="/page">Di chứng Covid</NavLink></li>
          <li><NavLink to="/page">Di truyền</NavLink></li>
        </ul>
        <div className='story2-abs'>
          <div className='story2-abs-top'>
            <div className='story2-abs-left'>
              <div className='hinh'>
                <img src={vaccin} alt="" />
              </div>

              <div className='noidung'>
                <h3 className="tieude">
                  Tái mắc Covid-19 có thật sự nhẹ nhàng?
                </h3>
                <p>
                  Các chuyên gia cho biết người tái nhiễm nCoV hai, ba lần vẫn có thể gặp triệu chứng nặng và nguy cơ mắc Covid-19 kéo dài.
                </p>
              </div>
            </div>
            <div className='story2-abs-right'>
              <div className='noidung'>
                <h3 className="tieude">
                  Phát hiện ung thư trực tràng từ dấu hiệu đau thắt bụng
                </h3>
                <p>
                  QUẢNG NINH - Bệnh nhân nữ, 30 tuổi nhập viện do đau bụng, đi ngoài kèm phân dính máu, được chẩn đoán ...
                </p>
              </div>
            </div>
          </div>
          <div className='story2-abs-top story2-abs-center'>
            <div className='story2-abs-left'>
              <div>
                Ăn nhầm lá ngón ngộ độc suýt chết
              </div>
              <div>
                Dịch bệnh kỳ lạ bùng phát tại Mỹ
              </div>
            </div>
            <div className='story2-abs-right'>
              <div>
                35% bệnh nhân Covid nặng chưa tiêm vaccine
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Story2right
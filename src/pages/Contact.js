import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import background from "../assets/bg1-home1.jpg";
import { Image } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6dp1olg",
        "template_x66wgrj",
        form.current,
        "lZl4PJXZrqK8HP8mC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="lg:px-36 lg:col-span-1  pt-24">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Đăng ký nhận báo giá ngay hôm nay!
        </h2>
        <form ref={form} onSubmit={sendEmail} className="lg:space-y-4">
          <div className="lg:flex lg:gap-6">
            <div>
              <input
                placeholder="Họ tên*"
                type="text"
                name="from_name"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              />
            </div>
            <div>
              <input
                placeholder="Email*"
                type="email"
                name="user_email"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              />
            </div>
          </div>
          <div className="lg:flex lg:gap-6">
            <div>
              <input
                placeholder="Số điện thoại*"
                type="tel"
                name="user_phone"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              />
            </div>
            <div>
              <input
                placeholder="Địa chỉ*"
                type="text"
                name="user_address"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              />
            </div>
          </div>
          <div className="lg:flex gap-6">
            <div>
              <input
                placeholder="Diện tích sân vườn (m2)*"
                type="text"
                name="user_area"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              />
            </div>
            <div>
              <select
                name="user_service"
                className="w-[260px] p-2 border border-gray-300 rounded-lg mb-6"
                required
              >
                <option value="">Chọn dịch vụ*</option>
                <option value="Thiết kế thi công cảnh quan">
                  Thiết kế thi công cảnh quan
                </option>
                <option value="Thiết kế thi công sân vườn">
                  Thiết kế thi công sân vườn
                </option>
                <option value="Thiết kế thi công nhà vườn">
                  Thiết kế thi công nhà vườn
                </option>
                <option value="Thiết kế thi công hồ cá KOI">
                  Thiết kế thi công hồ cá KOI
                </option>
                <option value="Thiết kế thi công vườn đứng">
                  Thiết kế thi công vườn đứng
                </option>
                <option value="Dịch vụ khác">Dịch vụ khác</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Nội dung yêu cầu"
              name="message"
              className="w-[540px] p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className=" py-2 px-4 bg-[#fd5e53] text-white font-semibold rounded-sm hover:bg-[#fd5e53] transition duration-300"
          >
            Gửi yêu cầu
          </button>
          <h1 className="italic">*Thường phản hồi trong vòng 24h làm việc</h1>
        </form>
      </div>
      <div className="lg:col-span-1 mt-10 lg:mt-0">
        <div
          className="max-w-[600px] p-14"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="text-[#9c9b9b] text-lg font-semibold uppercase">
            ( our contact details )
          </h1>
          <h1 className="text-white text-4xl font-semibold pt-4 pb-10">
            Để bắt đầu một dự án mới!
          </h1>
          <h1 className="text-[#9c9b9b] text-md">
            Hãy gọi cho chúng tôi hoặc ghé qua bất cứ lúc nào, chúng tôi cố gắng
            trả lời mọi thắc mắc trong vòng 24 giờ vào các ngày làm việc. Rất
            hân hạnh được trả lời câu hỏi của bạn.
          </h1>
          <h1 className="text-white text-3xl font-semibold pt-10 pb-10">
            TUTULELA HOUSE PLANTS DECOR
          </h1>
          <div className="text-white">
            <div className="flex mt-4">
              {" "}
              <Image
                className="w-4 h-4 mt-1"
                src={require("../assets/icon/building.png")}
              />
              <h1 className="ml-1">Studio: 19/31 Cô Bắc, Phú nhuận, Tp.hcm</h1>
            </div>
            <div className="flex mt-4">
              {" "}
              <Image
                className="w-4 h-4 mt-1"
                src={require("../assets/icon/home.png")}
              />
              <h1 className="ml-1">
                Văn phòng: 19/31 Cô Bắc, Phú nhuận, Tp.hcm
              </h1>
            </div>
            <div className="flex mt-4">
              {" "}
              <Image
                className="w-4 h-4 mt-1"
                src={require("../assets/icon/phone-call.png")}
              />
              <h1 className="ml-1">Điện thoại: 0908215145</h1>
            </div>
            <div className="flex mt-4">
              {" "}
              <Image
                className="w-4 h-4 mt-1"
                src={require("../assets/icon/open-mail.png")}
              />
              <h1 className="ml-1">
                Email: tutulelahouseplantsdecorr@gmaill.comm
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 lg:px-36">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Địa chỉ của chúng tôi
        </h2>
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2029572716556!2d106.6799269115949!3d10.795761989309737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d32761eda3%3A0x660783ab29c4d455!2zxJAuIEPDtCBC4bqvYy8xOSA1MS81LCBQaMaw4budbmcgMSwgUGjDuiBOaHXhuq1uLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1725519289944!5m2!1svi!2s"
            className="lg:w-[250%] w-[100%] h-[100%]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

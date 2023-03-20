import Head from "next/head";
import Header from "@/components/header/header";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, isActive } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Link from "next/link";
import Footer from "@/components/footer/footer";
// import { Fade } from "react-reveal";

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <>
        <Head>
          <title>Cùng MEDLATEC bảo tín tình yêu</title>
          <meta
            name="description"
            content="Cùng MEDLATEC bảo tín tình yêu. Tải app Medlatec để nhận quà tặng trị giá 6.500.000đ"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          {/* Header */}
          <Header />

          {/* Hero */}
          <div className="bg-[url('/images/index/bg-hero.png')] bg-cover bg-no-repeat bg-bottom pt-7 xl:pt-[72px]">
            <div className="container">
              <div className="relative w-fit mx-auto flex flex-col">
                <img
                  alt="diamond"
                  src="\images\index\diamond.png"
                  className="pointer-events-none absolute w-8 xl:w-auto right-6 xl:right-20 top-4 xl:top-6"
                />

                {/* Heading */}
                <h1 className="flex flex-col items-center">
                  <span className="font-inter font-bold text-xl xl:text-4xl text-white">
                    Cùng MEDLATEC
                  </span>
                  {/* <Fade bottom> */}
                  <span className="font-fz text-6xl xl:text-9xl text-gradient leading-[88px] xl:leading-[148px]">
                    Bảo Tín tình yêu
                  </span>
                  {/* </Fade> */}
                </h1>

                {/* <Fade bottom delay={200}> */}
                <h2 className="flex flex-col items-center gap-2 xl:gap-4">
                  <span className="font-be font-semibold text-[9px] xl:text-[15px] text-center text-white uppercase">
                    Tải app My Medlatec để nhận Quà tặng trị giá
                  </span>
                  <span className="font-be font-bold text-4xl xl:text-[64px] text-white">
                    6.500.000đ
                  </span>
                </h2>
                {/* </Fade> */}

                {/* <Fade bottom delay={200}> */}
                <button className="mt-4 xl:mt-6 mx-auto bg-gradient-1 py-3.5 px-[52px] rounded-full font-be font-bold text-xl text-[#0F55C9] uppercase">
                  Tải app ngay
                </button>
                {/* </Fade> */}
              </div>

              {/* Video */}
              <div className="xl:w-full mx-auto mt-10 rounded-2xl xl:rounded-[26px] overflow-hidden max-w-[952px] drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QQNYv3NRguc&themeRefresh=1"
                  width="100%"
                  height="540px"
                  className="hidden xl:block"
                />

                {/* on mobile */}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QQNYv3NRguc&themeRefresh=1"
                  width="100%"
                  height="200px"
                  className="md:hidden"
                />

                {/* on tablet */}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QQNYv3NRguc&themeRefresh=1"
                  width="100%"
                  height="400px"
                  className="hidden md:block xl:hidden"
                />
              </div>
            </div>
          </div>

          {/* Download My Medlatec */}
          <div className="container">
            <div className="relative flex flex-col items-center">
              <img
                alt="Health"
                src="\images\index\pattern-health.png"
                className="hidden xl:block pointer-events-none absolute -left-40 2xl:left-0"
              />

              <div className="mt-[50px] xl:mt-[88px] flex mx-auto py-1.5  px-5 xl:px-10 gap-1.5 xs:gap-2 xl:gap-4 items-center bg-[#0F55C91A] rounded-full">
                <img
                  alt="Diamond"
                  src="\images\index\diamond-2.png"
                  className="max-w-[28px] xl:max-w-[52px]"
                />
                <h2 className="font-be font-bold uppercase text-[#0F55C9] text-sm xs:text-lg xl:text-[32px] text-center">
                  Tải app my medlatec
                </h2>
                <img
                  alt="Diamond"
                  src="\images\index\diamond-2.png"
                  className="max-w-[28px] xl:max-w-[52px]"
                />
              </div>

              <h2 className="mt-5 xl:mt-7 font-be font-bold text-xl xl:text-[40px]">
                NHẬN QUÀ TẶNG 6,5 TRIỆU
              </h2>
              <div className="mt-2.5 xl:mt-4 font-be text-[#8989A2] text-sm xl:text-base max-w-[672px] text-center">
                Khi tải app My Medlatec, bạn sẽ nhận được Quà tặng hấp dẫn trị
                giá 6.500.000đ. Thoả sức cùng người thương có những kỷ niệm đẹp
                trước ngày cưới
              </div>
            </div>
          </div>

          {/* Feature */}
          <div className="container mt-8 mb-8 xl:mb-20">
            <Swiper
              className="z-0"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.3}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation]}
              rewind={true}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  effect: "slide",
                  centeredSlides: false,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 98,
                  effect: "slide",
                  centeredSlides: false,
                },
              }}
            >
              <SwiperSlide className="">
                <div className="flex flex-col items-center">
                  <img
                    alt="Mua Vàng ưu đãi lớn tại Bảo Tín Minh Châu"
                    src="\images\index\anh landing 2 1.png"
                  />

                  <div className="mt-7 py-3 bg-[#0F55C91A] rounded-full w-full">
                    <h3 className="max-w-[230px] xl:max-w-[248px] text-center mx-auto font-be uppercase font-bold xl:text-lg text-[#0F55C9]">
                      Mua Vàng ưu đãi lớn tại Bảo Tín Minh Châu
                    </h3>
                  </div>

                  <h6 className="mt-4 max-w-[280px] text-center font-be text-sm xl:text-base text-[#8989A2]">
                    Tặng bạn Voucher{" "}
                    <span className="font-bold">5.000.000 vnđ</span> khi mua
                    hàng tại Bảo Tín Minh Châu
                  </h6>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="flex flex-col items-center">
                  <img
                    alt="Khám tiền hôn nhân cho khởi đầu hạnh phúc"
                    src="\images\index\anh landing 2 2.png"
                  />

                  <div className="mt-7 py-3 bg-[#0F55C91A] rounded-full w-full">
                    <h3 className="max-w-[230px] xl:max-w-[280px] text-center mx-auto font-be uppercase font-bold xl:text-lg text-[#0F55C9]">
                      Khám tiền hôn nhân cho khởi đầu hạnh phúc
                    </h3>
                  </div>

                  <h6 className="mt-4 max-w-[280px] text-center font-be text-sm xl:text-base text-[#8989A2]">
                    Giảm trực tiếp{" "}
                    <span className="font-bold">150.000 vnđ </span> khi sử dụng
                    gói khám tiền hôn nhân tại MEDLATEC
                  </h6>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="flex flex-col items-center">
                  <img
                    alt="Nghỉ dưỡng tại Hoà Bình dành riêng cho cặp đôi"
                    src="\images\index\anh landing 2 3.png"
                  />

                  <div className="mt-7 py-3 bg-[#0F55C91A] rounded-full w-full">
                    <h3 className="max-w-[230px] xl:max-w-[280px] text-center mx-auto font-be uppercase font-bold xl:text-lg text-[#0F55C9]">
                      Nghỉ dưỡng tại Hoà Bình dành riêng cho cặp đôi
                    </h3>
                  </div>

                  <h6 className="mt-4 max-w-[280px] text-center font-be text-sm xl:text-base text-[#8989A2]">
                    Tặng 1 phòng nghỉ + Ăn trưa trị giá{" "}
                    <span className="font-bold">1.350.000 vnđ </span>
                    khi đặt tour nghỉ dưỡng tại Hòa Bình dành cho cặp đôi. Thời
                    gian check in 12h, check out 14h
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Guide */}
          <div className="bg-[url('/images/index/bg-guide.png')] bg-cover bg-no-repeat bg-center">
            <div className="container py-14 xl:py-48">
              <div className="bg-white rounded-[40px] xl:rounded-[50px] pt-5 xl:pt-7 pb-8 xl:pb-14 px-3.5 lg:px-10 xl:px-[122px] flex flex-col items-center">
                <img
                  alt="Diamond"
                  src="\images\index\diamond-2.png"
                  className="max-w-[50px] xl:max-w-[64px] w-full"
                />

                <h2 className="mt-2.5 font-inter font-bold text-[28px] text-center xl:text-4xl text-[#0F55C9]">
                  CÁCH THỨC NHẬN & SỬ DỤNG QUÀ TẶNG
                </h2>

                <div className="mt-5 xl:mt-7">
                  {/* step 1 */}
                  <div className="xl:flex items-center gap-16">
                    <img
                      alt="TẢI APP MY MEDLATEC & ĐĂNG KÝ TÀI KHOẢN"
                      src="\images\index\landing 1 1.png"
                      className="xl:w-1/2 rounded-3xl xl:rounded-none w-full"
                    />

                    <div className="xl:w-1/2">
                      <h3 className="mt-5 xl:mt-0 font-be font-bold text-[#272D4E] xl:text-2xl xl:max-w-[300px]">
                        TẢI APP MY MEDLATEC & ĐĂNG KÝ TÀI KHOẢN
                      </h3>
                      <ul className="mt-2 xl:mt-5 list-disc list-inside text-[#94A2B3] flex flex-col gap-2">
                        <div className="flex">
                          <li></li>
                          <div className="font-be text-sm xl:text-lg ">
                            Khách hàng truy cập vào kho ứng dụng App Store hoặc
                            CH Play, tìm kiếm My Medlatec và tải xuống.
                          </div>
                        </div>
                        <div className="flex">
                          <li></li>
                          <div className="font-be text-sm xl:text-lg ">
                            Nhập thông tin cá nhân và hoàn tất đăng ký.
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>

                  {/* step 2 */}
                  <div className="mt-5 xl:mt-0 flex flex-col-reverse xl:flex-row items-center xl:gap-12">
                    <div className="xl:w-1/2">
                      <h3 className="mt-5 xl:mt-0 font-be font-bold text-[#272D4E] xl:text-2xl xl:text-right">
                        NHẬN MÃ ƯU ĐÃI
                      </h3>

                      <div className="mt-2 xl:mt-5 font-be text-sm xl:text-lg 2xl:w-[540px] text-[#94A2B3] xl:text-right">
                        Mã ưu đãi được gửi về tài khoản ngay khi hoàn thành đăng
                        ký. Bạn có thể kiểm tra và lưu mã tại mục Thông báo trên
                        app.
                      </div>
                    </div>

                    <img
                      alt="NHẬN MÃ ƯU ĐÃI"
                      src="\images\index\landing 1 3.png"
                      className="xl:w-1/2 rounded-3xl xl:rounded-none w-full"
                    />
                  </div>

                  {/* step 3 */}
                  <div className="mt-5 xl:mt-0 xl:flex items-center gap-16">
                    <img
                      alt="SỬ DỤNG MÃ ƯU ĐÃI"
                      src="\images\index\landing 1 2.png"
                      className="xl:w-1/2 rounded-3xl xl:rounded-none w-full"
                    />

                    <div className="xl:w-1/2">
                      <h3 className="mt-5 xl:mt-0 font-be font-bold text-[#272D4E] xl:text-2xl max-w-[300px]">
                        SỬ DỤNG MÃ ƯU ĐÃI
                      </h3>

                      <div className="mt-2 xl:mt-5 font-be text-sm xl:text-lg text-[#94A2B3]">
                        Mở app và đưa mã cho nhân viên thu ngân khi đến khám tại
                        MEDLATEC, mua hàng tại Bảo Tín Minh Châu hoặc đặt lịch
                        nghỉ dưỡng tại Hoà Bình
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Medlatec */}
          <div className="container xl:flex py-10 xl:py-20 items-center">
            <img
              alt="My Medlatech"
              src="\images\index\my-medlatec.png"
              className="hidden xl:block w-1/2 2xl:w-auto"
            />

            {/* Feature */}
            <div className="flex flex-col items-center xl:block">
              <h2 className="font-be font-bold text-3xl xl:text-4xl text-[#0F55C9] uppercase text-center xl:text-start">
                my medlatec
              </h2>
              <div className="mt-1.5 font-be font-medium text-2xl text-[#160637] text-center xl:text-start">
                Trợ lý sức khoẻ 4.0
              </div>

              <img
                alt="My Medlatech"
                src="\images\index\my-medlatec-mobile.png"
                className="xl:hidden mt-7"
              />

              <div className="mt-7 xl:mt-8 grid md:grid-cols-2 gap-6 2xl:gap-x-20 2xl:gap-y-5">
                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Đa dạng gói khám và dịch vụ
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Theo dõi kết quả khám nhanh chóng
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Đặt lịch mọi lúc, mọi nơi
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Theo dõi lịch sử khám của người thân
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Theo dõi tiến trình khám theo thời gian thực
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Nhanh chóng tìm kiếm cơ sở y tế thuộc MEDLATEC gần nhất
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Tạo hồ sơ sức khoẻ số
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    alt="Icon Medlatec"
                    src="\images\index\icon-medlatec.png"
                    className="flex-shrink-0 pointer-events-none"
                  />
                  <div className="font-be text-base text-[#4F4F4F]">
                    Giao diện thân thiện, dễ dàng sử dụng
                  </div>
                </div>
              </div>

              {/* Download */}
              <div className="mt-10 xl:mt-[60px] flex flex-col items-center">
                <h3 className="font-be font-semibold text-lg uppercase text-center">
                  tải app trên app store hoặc google play
                </h3>

                <div className="mt-5 xl:mt-6 py-3 w-full xl:w-auto xl:px-14 rounded-full border border-black flex items-center justify-center gap-4">
                  <img
                    alt="Search"
                    src="\images\index\search.png"
                    className="pointer-events-none"
                  />
                  <div className="font-be font-medium text-2xl uppercase">
                    My medlatec
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
                  <Link
                    target="_blank"
                    href="https://apps.apple.com/vn/app/my-medlatec/id1628288322?l=vi"
                  >
                    <img
                      alt="App Store"
                      src="\images\index\app store.png"
                      className="drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.medon.mymedlatec&hl=vi&gl=US"
                  >
                    <img
                      alt="Google Play"
                      src="\images\index\google play.png"
                      className="drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </>
    )
  );
}

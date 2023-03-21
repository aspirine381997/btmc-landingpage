import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]">
      <div className="lg:container xl:py-3.5 flex flex-col-reverse lg:flex-row place-content-between items-center ">
        {/* logos */}
        <div className="py-3 xl:py-0 flex gap-6 items-center">
          <Link target="_blank" href="https://medlatec.vn/">
            <img alt="Logo Medlatech" src="\images\header\logo.png" className="max-w-[67px]" />
          </Link>
          <Link target="_blank" href="https://btmc.vn/">
            <img alt="Logo BTMC" src="\images\header\Logo-BTMC.png" className="max-w-[67px]" />
          </Link>
        </div>

        {/* infor */}
        <div className="flex items-center lg:gap-4 w-full lg:w-auto">
          <div className="flex items-center xl:gap-2 py-2 px-4 lg:rounded-full bg-gradient-1 w-full lg:w-auto justify-center">
            <img
              alt="Diamond"
              src="\images\index\diamon-3.png"
              className="pointer-events-none max-w-[30px]"
            />
            <h4 className="font-be font-medium text-base xl:text-lg text-center text-[#9C2225]">
              Chương trình hợp tác giữa{" "}
              <span className="font-bold">MEDLATEC</span> và{" "}
              <span className="font-bold">BẢO TÍN MINH CHÂU</span>
            </h4>
            <img
              alt="Diamond"
              src="\images\index\diamon-3.png"
              className="pointer-events-none max-w-[30px]"
            />
          </div>
          <Link
            target="_blank"
            href="https://www.facebook.com/mymedlatec.vn?locale=vi_VN"
          >
            <div className="w-11 h-11 bg-gradient-2 rounded-full hidden lg:flex items-center justify-center">
              <img
                alt="Logo Facebook"
                src="\images\header\logo-fb.png"
                className="w-3.5"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]">
      <div className="container py-3.5 flex place-content-between items-center ">
        {/* logos */}
        <div className="flex gap-6 items-center">
          <img alt="Logo Medlatech" src="\images\header\logo.png" />
          <img alt="Logo BTMC" src="\images\header\Logo-BTMC.png" />
        </div>

        {/* infor */}
        <div className="flex items-center gap-4">
          <h4 className="py-2 px-4 rounded-full bg-gradient-1 font-be font-medium text-[#9C2225]">
            Chương trình hợp tác giữa{" "}
            <span className="font-bold">MEDLATEC</span> và{" "}
            <span className="font-bold">BẢO TÍN MINH CHÂU</span>
          </h4>
          <div className="w-11 h-11 bg-gradient-2 rounded-full flex items-center justify-center">
            <img
              alt="Logo Facebook"
              src="\images\header\logo-fb.png"
              className="w-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-5 bg-[#0F55C9] font-be text-white text-center text-xs xl:text-base mb-20 xl:mb-0">
        COPYRIGHT MEDLATEC 2023
      </div>

      {/* Download on mobile */}
      <div className="fixed z-50 bottom-0 w-full py-3.5 bg-white drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)] xl:hidden">
        <div className="container flex items-center place-content-between">
          <div className="flex flex-col items-center gap-1">
            <div className="font-be font-medium uppercase text-[10px]">
              Tải app ngay
            </div>
            <div className="px-2 w-full xl:w-auto xl:px-14 rounded-full border border-black flex items-center justify-center gap-4">
              <img
                alt="Search"
                src="\images\index\search.png"
                className="w-2 pointer-events-none"
              />
              <div className="font-be font-medium text-[10px] uppercase">
                My medlatec
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1.5">
            <Link
              target="_blank"
              href="https://apps.apple.com/vn/app/my-medlatec/id1628288322?l=vi"
            >
              <img
                alt="App Store"
                src="\images\index\app store.png"
                className="max-w-[92px] drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]"
              />
            </Link>
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.medon.mymedlatec&hl=vi&gl=US"
            >
              <img
                alt="Google Play"
                src="\images\index\google play.png"
                className="max-w-[92px] drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* QR code */}
      <div className="hidden xl:block fixed z-50 bottom-4 right-6 bg-white rounded-2xl drop-shadow-[0_4px_25px_rgba(15,85,201,0.25)]">
        <img alt="QR Code" src="\images\index\qr.png" className="p-3.5" />
        <div className="py-1.5 flex flex-col items-center font-be font-bold text-white text-xs bg-[#0F55C9] text-center uppercase rounded-md">
          Quét QR{" "}
          <span className="lowercase font-normal text-[10px]">để tải app</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import YatoInputWithIcon from "../../RinYato/YatoInputWithIcon";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function Footer() {
  return (
    <div className="h-[45vh] bg-slate-100 rounded-t-[4rem] px-10">
      <div className="px-16 pt-16 w-[85%] mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col w-fit">
            <h2 className=" capitalize font-semibold text-3xl">
              Subscribe to our newsletter
            </h2>
            <YatoInputWithIcon
              type="email"
              placeHolder="example@gmail.com"
              className="bg-gray-200 w-full mt-7"
            >
              <div className="flex active:scale-95 cursor-pointer duration-200 items-center rounded-full px-4 pb-0.5 font-semibold text-white justify-center bg-sky-400">
                subscribe
              </div>
            </YatoInputWithIcon>
          </div>
          <div>
            <h2 className="font-semibold text-3xl">Yato Real Estate</h2>
            <div className="flex flex-col text-sm text-end gap-2 mt-4 text-gray-600">
              <h4>Terms of Use</h4>
              <h4>Privacy Policy</h4>
              <h4>Legal Document</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start mt-14">
          <div className="flex flex-col items-center justify-center gap-2">
            <CallIcon className="text-sky-500 text-4xl" />
            <div>
              <a href="tel:+855715000004" className="text-sm text-gray-600">
                +855 715 000 004
              </a>
              <h4 className="text-gray-600 text-sm text-center">Call Us</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <LocationOnOutlinedIcon className="text-sky-500 text-4xl" />
            <div>
              <a
                href="https://goo.gl/maps/ZYDeJgX9fa7MVv2b6"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-600"
              >
                <p className=" break-words w-64 text-center">
                  St. 271, Sangkat Boeung Keng Kang 1, Khan Chamkarmon, Phnom
                  Penh, Cambodia
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <MailOutlinedIcon className="text-sky-500 text-4xl" />
            <div className="flex flex-col items-center">
              <a
                href="mailto: dev@rinyato.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-600"
              >
                dev@rinyato.com
              </a>
              <a
                href="mailto: chearithorn@gmail.com"
                className="text-sm text-gray-600"
                target="_blank"
                rel="noreferrer"
              >
                chearithorn@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <AccessTimeIcon className="text-sky-500 text-4xl" />
            <div>
              <p className="text-sm text-gray-600">
                Mon-Sat : 7:00 AM - 5:00 PM <br />
                Sunday : 7:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full m-auto py-5 bg-[#121212] text-white rounded-t-3xl">
      <div className="pt-10 flex flex-col gap-y-10">
        <div className="w-full px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-y-8 text-center md:text-left lg:py-10">
          <div className="lg:w-[40%] text-center lg:text-left lg:pr-16">
            <h3 className="text-2xl lg:text-4xl pb-5 lg:pb-3">Locomote</h3>
            <span className="text-sm lg:text-lg">
              enjoy the most recent travel, destination, and lifestyle ideas.
            </span>
          </div>
          <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-y-8 pt-4 lg:gap-x-6">
            <div className="md:w-1/3 lg:[20%] flex flex-col items-center lg:items-start gap-y-2">
              <span className="font-thin uppercase">About Locomote</span>
              <span>FAQs</span>
              <span>Get in touch</span>
            </div>
            <div className="md:w-1/3 lg:[20%] flex flex-col items-center lg:items-start">
              <span className="font-thin uppercase">Social</span>
              <div className="flex justify-center md:justify-start gap-x-1 pt-3 text-xl">
                <div>
                  <FaFacebook />
                </div>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaXTwitter />
                </div>
                <div>
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="md:w-1/3 lg:[20%] flex flex-col items-center lg:items-start gap-y-2">
              <span className="font-thin uppercase">Call us</span>
              <span>+63 906 214 3558</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-4">
          <p className="px-5 md:px-10 lg:px-20 ">
            © 2024 Locomote, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

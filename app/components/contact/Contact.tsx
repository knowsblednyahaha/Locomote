import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="max-w-[1440px] w-full w-full py-10 px-5 md:px-10 lg:px-20 z-20 m-auto">
      <div className="w-full">
        <div className="w-4/6">
          <div className="w-1/3">
            <h3 className="text-3xl">Contact Us</h3>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl">Are you in need of assistance?</h3>
          </div>
          <form action="">
            <div>
              <input type="text" className="border" />
            </div>
            <div>
              <input type="text" />
            </div>
          </form>
        </div>
        <div className="w-2/6 relative">
          {/* <Image src={"/"} alt={""} /> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;

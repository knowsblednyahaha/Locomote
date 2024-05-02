import React from "react";

const Contact = () => {
  return (
    <section className="max-w-[1440px] w-full w-full py-10 px-5 md:px-10 lg:px-20 z-20 m-auto mt-10 mb-11">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 pb-5">
          <div className="mb-5">
            <h3 className="text-3xl">Contact Us</h3>
          </div>
          <div>
            <h3 className="text-xl">Are you in need of assistance?</h3>
          </div>
        </div>
        <form action="" className="w-full lg:w-2/3 items-center">
          <div className="flex flex-col md:flex-row gap-x-10 pb-5 gap-y-5">
            <div className="flex flex-col w-full md:w-1/2 gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border border-gray-500 rounded-xl h-[50px] pl-3"
                id="name"
                name="name"
                autoComplete="given-name"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="border border-gray-500 rounded-xl h-[50px] pl-3"
                id="email"
                name="email"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 pb-5">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-gray-500 rounded-xl pl-3 pt-2"
              id="message"
              rows={4}
            />
          </div>
          <div className="text-center">
            <button className="w-[100px] h-[50px] bg-[#FE2F2F] text-white rounded-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;

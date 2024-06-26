import Link from "next/link";
import React from "react";

export const Login = () => {
  return (
    <section className="max-w-[1440px] w-full h-[90vh] flex justify-center items-center py-5 px-5 md:px-10 lg:px-20 z-20 m-auto ">
      <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 p-10 border border-gray-400 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl">
        <div className="text-center pb-10">
          <Link href={"/"}>
            <h3 className="text-2xl font-semibold">Sign In</h3>
          </Link>
        </div>
        <form className="flex flex-col gap-y-2">
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="email">Email or Username</label>
            <input
              type="email"
              className="border border-gray-400 h-[50px] rounded-xl pl-3"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border border-gray-400 h-[50px] rounded-xl pl-3"
              id="password"
              placeholder="Your password"
            />
          </div>
          <div className="text-center mt-3">
            <button className="w-full bg-black text-white p-3 rounded-xl">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

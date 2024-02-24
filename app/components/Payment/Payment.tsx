import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../Book/sass/arrow.scss";

export default function Payment() {
  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto pb-20">
      <div className="w-full mt-10 m-auto font-bold text-3xl text-center">
        Payment
      </div>
      <div className="w-full h-fit flex flex-col justify-center md:flex-row gap-x-5 gap-y-5 px-10 py-5 mt-10 m-auto">
        <div className="w-full md:w-1/2 xl:w-4/6 h-fit border border-black rounded-2xl ">
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="text-xl">Victory Liner</div>
            <div>02/07/24</div>
          </div>
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-4/12">
                <span className="text-xl font-bold">00-15</span>
                <p className="uppercase">Baguio City Bus Station</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-4/12">
                <span className="text-xl font-bold">04-45</span>
                <p className="uppercase">Cubao Bus Station</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 border-b border-black px-10 py-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Bus Company:</div>
              <div className="font-semibold">02/07/24</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Estimate travel duration:</div>
              <div className="font-semibold">4hr 30mins</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Seat Number:</div>
              <div className="font-semibold">9, 10</div>
            </div>
          </div>
          <div className="flex justify-between px-10 py-5">
            <div>Number of total seats: 2</div>
            <div>
              Total: <span className="font-bold">₱1478</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-4/6 h-fit flex flex-col gap-y-5">
          <div className="w-full border border-black rounded-2xl p-5 flex justify-between">
            <div className="w-full">
              <input type="radio" id="creditcard" name="modesofpayment" />
              <label className="ml-3 font-bold" htmlFor="creditcard">
                Credit Card
              </label>
            </div>
            <div className="w-full flex">
              <div className="relative w-full">
                <Image
                  priority
                  src="/img/paymentlogo/Visa_logo.svg"
                  alt="Visa"
                  fill={true}
                />
              </div>
              <div className="relative w-full">
                <Image
                  priority
                  src="/img/paymentlogo/Mastercard_logo.svg"
                  alt="Visa"
                  fill={true}
                />
              </div>
              <div className="relative w-full">
                <Image
                  priority
                  src="/img/paymentlogo/American Express_logo.svg"
                  alt="Visa"
                  fill={true}
                />
              </div>
            </div>
          </div>
          <div className="border border-black rounded-2xl p-5 flex justify-between">
            <div className="w-full">
              <input type="radio" id="paypal" name="modesofpayment" />
              <label htmlFor="paypal">Paypal</label>
            </div>
            <div className="relative w-full">
              <Image
                priority
                src="/img/paymentlogo/PayPal_logo.svg"
                alt="Visa"
                fill={true}
              />
            </div>
          </div>
          <div className="border border-black rounded-2xl p-5 flex justify-between">
            <div className="w-full ">
              <input type="radio" id="gcash" name="modesofpayment" />
              <label htmlFor="gcash">Gcash</label>
            </div>
            <div className="relative w-full">
              <Image
                priority
                src="/img/paymentlogo/GCash_logo.svg"
                alt="Gcash"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>
          <div className="border border-black rounded-2xl p-5 flex justify-between">
            <div className="w-full">
              <input type="radio" id="paymaya" name="modesofpayment" />
              <label htmlFor="paymaya">Paymaya</label>
            </div>
            <div className="relative w-full">
              <Image
                priority
                src="/img/paymentlogo/Maya_logo.svg"
                alt="Gcash"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>
          <div className="border border-black rounded-2xl p-5 flex justify-between">
            <div className="w-full">
              <input type="radio" id="bayadcenter" name="modesofpayment" />
              <label htmlFor="bayadcenter">Bayad Center</label>
            </div>
            <div className="relative w-full">
              <Image
                priority
                src="/img/paymentlogo/Bayad_logo.svg"
                alt="Gcash"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 text-center">
        <button className="w-56 h-12 bg-[#FE2F2F] rounded-3xl text-white">
          <Link href="">Submit payment</Link>
        </button>
      </div>
    </section>
  );
}

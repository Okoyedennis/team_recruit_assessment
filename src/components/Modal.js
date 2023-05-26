import React, { useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdApps } from "react-icons/md";
import { FcSimCardChip } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <div className="flex items-center justify-center h-full transition-opacity duration-200 ease-in">
          <div className="bg-white w-[95%] md:w-[80%] h-fit lg:w-[70%] rounded-md shadow-custom1 p-[1rem] md:p-[2rem]">
            <div
              className="flex justify-end cursor-pointer text-lg"
              onClick={showModalHandler}
            >
              <FaTimes />
            </div>
            <div className="flex gap-5 justify-between mt-[1rem] md:mt-[2rem]">
              <div className="lg:flex-[.6] xl:flex-[.7] flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[1rem] ">
                    <div className="flex items-center rounded-full bg-logo w-fit p-[.5rem]">
                      <IoIosWallet className="text-white" />
                    </div>
                    <p className="font-semibold text-primary">
                      AceCoin<span className="font-normal">Pay</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[.2rem]">
                    <div className="bg-primary flex items-center p-[.6rem] text-white rounded-md">
                      0
                    </div>
                    <div className="bg-primary flex items-center p-[.6rem] text-white rounded-md">
                      1
                    </div>
                    <p className="text-primary font-bold">:</p>
                    <div className="bg-primary flex items-center p-[.6rem] text-white rounded-md">
                      1
                    </div>
                    <div className="bg-primary flex items-center p-[.6rem] text-white rounded-md">
                      9
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[1.5rem]">
                  <div>
                    <p className="font-bold text-primary text-sm">
                      Card Number
                    </p>
                    <p className="text-xs text-primary mt-1 font-normal">
                      Enter the 16-digit card number on the card
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <BsPenFill className="text-logo" />
                    <p className="text-logo text-sm">Edit</p>
                  </div>
                </div>
                <div className="flex items-center rounded-md shadow-custom1 mt-[1rem] md:mt-[2rem] p-[1rem] bg-input gap-[1rem]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                    className="h-4 object-contain "
                    alt="master card"
                  />{" "}
                  <input
                    type="text"
                    className="border-0 outline-none bg-input w-full placeholder:text-placeholder"
                    placeholder="2412 - 7512 - 3412 - 3456"
                  />
                  <IoIosCheckmarkCircle className="text-inputMark text-2xl" />
                </div>
                <div className="mt-[2rem] flex items-center justify-between">
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-primary text-sm">CVV Number</p>
                    <p className="text-sm text-primary mt-1 font-normal">
                      Enter the 3 or 4 digit number on the card
                    </p>
                  </div>
                  <div className="shadow-custom1 rounded-md p-[.5rem] md:p-[1rem] flex-1 flex items-center">
                    <input
                      type="text"
                      className="outline-none placeholder:text-primary placeholder:text-center placeholder:font-bold w-full"
                      placeholder="327"
                    />
                    <MdApps className="text-3xl text-gray" />
                  </div>
                </div>
                <div className="mt-[1rem] md:mt-[2rem] flex items-center justify-between">
                  <div className="flex flex-col flex-[.9] lg:flex-[.89] xl:flex-[.92]">
                    <p className="font-bold text-primary text-sm">
                      Expiry Date
                    </p>
                    <p className="text-sm text-primary mt-1 font-normal">
                      Enter the expiration date of the card
                    </p>
                  </div>
                  <div className="rounded-md flex-1 flex items-center justify-between gap-[1rem] w-full">
                    <input
                      type="text"
                      className="shadow-custom1 p-[.5rem] md:p-[1rem] outline-none placeholder:text-primary placeholder:text-center placeholder:font-bold w-full rounded-md"
                      placeholder="09"
                    />
                    <p className="text-primary font-bold ">/</p>
                    <input
                      type="text"
                      className="shadow-custom1 p-[.5rem] md:p-[1rem] outline-none placeholder:text-primary placeholder:text-center placeholder:font-bold w-full rounded-md"
                      placeholder="22"
                    />
                  </div>
                </div>
                <div className="mt-[1rem] md:mt-[2rem] flex items-center justify-between">
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-primary text-sm">Password</p>
                    <p className="text-sm text-primary mt-1 font-normal">
                      Enter your dynamic password
                    </p>
                  </div>
                  <div className="shadow-custom1 rounded-md p-[.5rem] md:p-[1rem] flex-1 flex items-center">
                    <input
                      type="password"
                      className="outline-none placeholder:text-primary placeholder:text-center placeholder:font-bold  w-full"
                      placeholder="********"
                    />
                    <MdApps className="text-3xl text-gray" />
                  </div>
                </div>
                <button className="bg-logo text-white rounded-md mt-[2rem] w-full p-3 md:p-5 font-bold">
                  Pay Now
                </button>
              </div>
              <div className="hidden lg:block lg:flex-[.4] xl:flex-[.3] relative">
                <div className="flex items-center justify-evenly z-0">
                  <div className="z[-10]">
                    <p className="bg-logo py-[1.5rem] px-[3rem] rounded-md"></p>
                  </div>
                </div>

                <div className="mt-[5rem] bg-darkGray rounded-md p-[2rem] relative z-[20]">
                  <div className="rounded-md h-[20rem] mt-[-9rem] shadow-custom1 z-[30] p-4 backdrops">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between text-4xl">
                        <FcSimCardChip className="ransform rotate-90 text-darkGray" />
                        <img
                          src="https://www.kindpng.com/picc/m/339-3392883_signal-wave-signal-wave-png-transparent-png.png"
                          className="h-5 object-contain"
                          alt="signal"
                        />
                      </div>
                      <div className="text-primary font-semibold mt-[3rem]">
                        <p className="text-sm">Jonathan Michael</p>
                        <p className="text-lg mt-1">**** 3456</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-primary font-semibold">09/22</p>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                          className="h-5 object-contain "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[2rem]">
                    <div className="flex items-center justify-between">
                      <p className="text-lightPrimary text-sm">Company</p>
                      <div className="flex items-center gap-[.5rem]">
                        <div className="bg-black rounded-full p-2">
                          <BsApple className="text-white" />
                        </div>
                        <p className="text-primary text-sm font-bold">Apple</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-[1rem]">
                      <p className="text-lightPrimary text-sm">Order Number</p>
                      <p className="text-primary text-sm font-bold">126601</p>
                    </div>
                    <div className="flex items-center justify-between mt-[1rem]">
                      <p className="text-lightPrimary text-sm">Product</p>
                      <p className="text-primary text-sm font-bold">
                        Macbook Air
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-[1rem]">
                      <p className="text-lightPrimary text-sm">VAT (20%)</p>
                      <p className="text-primary text-sm font-bold">$100</p>
                    </div>
                    <div className="relative flex items-center justify-between mt-[2rem]">
                      <div className="absolute -left-[3rem] rounded-full bg-white p-[1rem] w-[2rem]"></div>
                      <hr className="border border-dashed border-gray w-full" />
                      <div className="absolute -right-[3rem] rounded-full bg-white p-[1rem] w-[2rem]"></div>
                    </div>

                    <div className="mt-[1rem]">
                      <p className="text-sm text-lightPrimary  font-medium">
                        You have to pay
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <h2 className="mt-2 text-primary font-bold text-2xl">
                          549<small className="text-sm">.99</small>
                          <span className="text-sm text-lightPrimary font-light">
                            {" "}
                            USD
                          </span>
                        </h2>
                        <RiFilePaper2Line className="text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div
            className="bg-white rounded-md p-[1.2rem] w-[15rem] cursor-pointer animate-bounce"
            onClick={showModalHandler}
          >
            <p className="text-primary font-semibold text-center">
              Click to show modal
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

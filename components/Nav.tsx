/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const NavMenuLinks = () => {
  return (
    <>
      <div className="mr-5 text-[20px] font-normal hover:text-orange-500"> Home</div>
      <div className="mr-5 text-[20px] font-normal hover:text-orange-500"> AboutUs</div>
      <div className="mr-5 text-[20px] font-normal hover:text-orange-500"> Pricing</div>
      <div className="mr-5 text-[20px] font-normal hover:text-orange-500"> Features</div>
    </>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);


  return (
    <div className={`h-[42px] fixed inset-0 flex items-center justify-between md:justify-center top-0 left-[20px] right-[20px] ${isScrolled ? 'md:top-0 md:py-8 rounded-sm shadow-md' : 'md:top-[40px] bg-transparent'} md:left-[175px] md:right-[175px] bg-white transition-all duration-300 z-50`}>

      <div className="flex h-fit pt-4 pb-4 md:pt-0 md:pb-0 space-x-48 md:space-x-0 w-full justify-between items-center md:justify-center md:inline font-style">

        <div className="flex md:hidden justify-center items-center mx-5">
          <img
            className="w-[34px] h-[34px] md:ml-10 md:mr-0 mx-2 text-[16px]"
            src={"https://iili.io/Jb1Dle4.png"}
            alt="logo"
          />
          <div className="text-[18px] font-extrabold">uifry™</div>
        </div>

        <div className="flex flex-row justify-between items-center w-screen">

          <div className="md:flex hover:cursor-pointer hidden">

            <div className="flex flex-row items-center">

              <div className="flex w-[34px] h-[34px] md2:mr-0 mx-2">
                <img
                  className="object-contain"
                  src={"https://iili.io/Jb1Dle4.png"}
                  alt="logo"
                />
              </div>

              <div className="mx-2 md:mr-14 md:ml-1 text-[24px] font-extrabold">uifry™</div>

            </div>

            <div className="flex h-fit py-1">
              <NavMenuLinks />
            </div>

          </div>

          <div className="flex justify-end items-center">

            <a href="/" className="text-white bg-black py-2 px-5 rounded-md hidden md:flex hover:bg-red-500">
              {" "}
              Download
            </a>
            <button onClick={toggleNavbar}>
              {!isOpen ? (
                <IoMenu className="flex justify-end w-[36px] h-[36px] md:hidden m-5" />
              ) : (
                <IoCloseSharp className="flex justify-end w-[36px] h-[36px] md:hidden m-5" />
              )}
            </button>

          </div>

          <div className="my-2 bg-blue-500">
            <img className="my-5 text-[26px] hidden md:flex" src={"https://iili.io/JbE3pDu.png"} alt="star" />
          </div>

        </div>

      </div>
    

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center font-style"
          >
            <NavMenuLinks />
          </motion.div>
        )}
      </AnimatePresence>




    </div>
  );
}

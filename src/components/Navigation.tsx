import React, { useState } from "react";
import { X, Home, Info, FileText, Mail, Globe } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Menu Button */}
      <div
        className={`font-h3 fixed bottom-4 right-4 z-[100] border border-black bg-white text-black max-sm:left-4 md:bottom-6 md:right-6 transition-all duration-300 ${
          isMenuOpen ? "w-[26rem]" : "w-[13rem]"
        }`}
        style={{ position: "fixed", opacity: 1, transform: "none" }}
      >
        <div
          className="max-sm:!w-auto transition-all duration-300"
          style={{ width: "100%" }}
        >
          <div className="flex h-full flex-col">
            <button
              type="button"
              aria-label="Open Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors justify-between border-b pr-0 hover:bg-red-500"
              data-rac=""
            >
              <span>Menu</span>
              <span className="flex aspect-square h-full items-center justify-center border-l border-l-black">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`size-8 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45" : "rotate-0"
                  }`}
                  style={{
                    transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            <div className="-mb-px box-border overflow-hidden"></div>
            <a
              className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500"
              data-rac=""
              href="/#declaration"
              target="_self"
            >
              Declare Now
            </a>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[99] ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed bottom-28 right-6 w-[26rem] bg-white transition-all duration-300 transform z-[100] ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="no-focus" data-rac="">
            <div
              style={{
                border: 0,
                clip: "rect(0px, 0px, 0px, 0px)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
              }}
            >
              <button
                id="react-aria-dismiss"
                aria-label="Dismiss"
                tabIndex={-1}
                style={{ width: "1px", height: "1px" }}
              ></button>
            </div>
            <section
              aria-labelledby="menu-title"
              role="dialog"
              tabIndex={-1}
              className="no-focus"
              style={{ height: "auto" }}
            >
              <h2 id="menu-title" slot="title" className="sr-only">
                Menu
              </h2>
              <nav className="flex flex-col gap-x-8" aria-label="Menu">
                <a
                  className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors hocus:underline"
                  data-rac=""
                  href="/"
                  target="_self"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 22 23"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                  >
                    <path d="M1 10.75L11 2L21 10.75V22H1V10.75Z"></path>
                  </svg>
                  Home
                </a>
                <a
                  className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors hocus:underline"
                  data-rac=""
                  href="/about"
                  target="_self"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                  >
                    <rect x="9" y="9" width="4" height="12"></rect>
                    <rect x="9" y="1" width="4" height="4"></rect>
                  </svg>
                  About
                </a>
                <a
                  className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors hocus:underline"
                  data-rac=""
                  href="/latest"
                  target="_self"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 20 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                  >
                    <line
                      x1="4.375"
                      y1="5.55646"
                      x2="11.125"
                      y2="5.55646"
                    ></line>
                    <line
                      x1="4.375"
                      y1="10.0016"
                      x2="11.125"
                      y2="10.0016"
                    ></line>
                    <line
                      x1="4.375"
                      y1="14.4468"
                      x2="11.125"
                      y2="14.4468"
                    ></line>
                    <path d="M14.5 5.44188C16 5.44188 19 5.44188 19 5.44188C19 5.44188 19 14.3322 19 18.7774C19 19.3669 18.7629 19.9322 18.341 20.349C17.919 20.7658 17.3467 21 16.75 21M16.75 21C16.1533 21 15.581 20.7658 15.159 20.349C14.7371 19.9322 14.5 19.3669 14.5 18.7774C14.5 13.5924 14.5 1.00281 14.5 1.00281L1 1C1 1 1 12.8506 1 17.6661C1 18.5503 1.35558 19.3983 1.98851 20.0235C2.62145 20.6487 3.47989 21 4.375 21H16.75Z"></path>
                  </svg>
                  Latest
                </a>
                <a
                  className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors hocus:underline"
                  data-rac=""
                  href="/contact"
                  target="_self"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 22 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                  >
                    <rect x="1" y="1" width="20" height="16"></rect>
                    <path d="M21 2L11 10L1 2"></path>
                  </svg>
                  Contact
                </a>
              </nav>
              <button
                type="button"
                className="focus-ring h-12 w-full items-center border-black px-3 transition-colors flex gap-x-3 border-b hocus:underline"
                data-rac=""
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                >
                  <path d="M1.6684 7.66667H20.3351M1.6684 14.3333H20.3351M10.4441 1C8.57223 3.99957 7.57986 7.46429 7.57986 11C7.57986 14.5357 8.57223 18.0004 10.4441 21M11.5556 1C13.4274 3.99957 14.4198 7.46429 14.4198 11C14.4198 14.5357 13.4274 18.0004 11.5556 21M1 11C1 12.3132 1.25866 13.6136 1.7612 14.8268C2.26375 16.0401 3.00035 17.1425 3.92893 18.0711C4.85752 18.9997 5.95991 19.7363 7.17317 20.2388C8.38642 20.7413 9.68678 21 11 21C12.3132 21 13.6136 20.7413 14.8268 20.2388C16.0401 19.7363 17.1425 18.9997 18.0711 18.0711C18.9997 17.1425 19.7363 16.0401 20.2388 14.8268C20.7413 13.6136 21 12.3132 21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1C8.34784 1 5.8043 2.05357 3.92893 3.92893C2.05357 5.8043 1 8.34784 1 11Z"></path>
                </svg>
                <span>Choose Global Chapter</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

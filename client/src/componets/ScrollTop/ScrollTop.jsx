import { useEffect } from "react";
import { motion } from "framer-motion";

const ScrollTop = () => {
  useEffect(() => {
    const mybutton = document.getElementById("btn-back-to-top");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    };

    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (mybutton) {
      mybutton.addEventListener("click", backToTop);
      window.addEventListener("scroll", scrollFunction);
    }

    return () => {
      // Cleanup: remove event listeners when the component is unmounted
      if (mybutton) {
        mybutton.removeEventListener("click", backToTop);
        window.removeEventListener("scroll", scrollFunction);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <motion.button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="!fixed bottom-5 right-5 hidden rounded-full bg-indigo-600 cursor-pointer p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg"
        id="btn-back-to-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, duration: 0.2 }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </motion.button>
    </div>
  );
};

export default ScrollTop;

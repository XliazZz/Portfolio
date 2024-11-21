import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/mgegeeav", formState);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  if (success) {
    Swal.fire({
      icon: "success",
      title: {text9},
      text: {text10},
      confirmButtonText: {text11},
      confirmButtonColor: "#6A64F1",
      background: "#030712",
      color: "#fff",
      timer: 3000,
    });
    setSuccess(false);
  }

  if (error) {
    Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: {text12},
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#6A64F1",
    });
    setError(false);
  }

  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text6 = "";
  let text7 = "";
  let text8 = "";
  let text9 = "";
  let text10 = "";
  let text11 = "";
  let text12 = "";

  if (localStorage.getItem("language") === "es") {
    text1 = "Manda tu mensaje";
    text2 = "Escribe tu nombre";
    text3 = "ejemplo@mail.com";
    text6 = "Escribe el asunto";
    text7 = "Escribe tu mensaje";
    text8 = "Enviar";
    text9 = "¡Mensaje enviado!";
    text10 = "Gracias por contactarme, te responderé lo más pronto posible.";
    text11 = "Aceptar"
    text12 = "Algo salió mal, inténtalo de nuevo."
  } else {
    text1 = "Send your message";
    text2 = "Write your name";
    text3 = "example@mail.com";
    text6 = "Write your subject";
    text7 = "Write your message";
    text8 = "Send";
    text9 = "Message sent!";
    text10 = "Thank you for contacting me, I will respond as soon as possible.";
    text11 = "Accept";
    text12 = "Something went wrong, try again.";
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="rounded-md h-full p-4 my-auto shadow-custom-blue w-[80%] mx-auto
      bg-[#818CF8]
      dark:bg-[#7C7FFF] "
    >
      <p className="font-bold text-white text-2xl pb-4">{text1}</p>
      <div className="mb-5 ">
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
          placeholder={text2}
          className="w-full rounded-md border py-1 px-6 text-base font-medium outline-none focus:shadow-md 
          border-[#564bc9] placeholder-gray-600 text-indigo-950 bg-white focus:border-[#6A64F1]
          dark:bg-[#11123B] dark:placeholder-zinc-400 dark:text-indigo-50"
        />
      </div>

      <div className="mb-5">
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          placeholder={text3}
          className="w-full rounded-md border py-1 px-6 text-base font-medium outline-none focus:shadow-md 
          border-[#564bc9] placeholder-gray-600 text-indigo-950 bg-white focus:border-[#6A64F1]
          dark:bg-[#11123B] dark:placeholder-zinc-400 dark:text-indigo-50"
        />
      </div>

      <div className="mb-5">
        <input
          type="text"
          name="subject"
          id="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder={text6}
          className="w-full rounded-md border py-1 px-6 text-base font-medium outline-none focus:shadow-md 
          border-[#564bc9] placeholder-gray-600 text-indigo-950 bg-white focus:border-[#6A64F1]
          dark:bg-[#11123B] dark:placeholder-zinc-400 dark:text-indigo-50"
        />
      </div>
      
      <div className="my-5">
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder={text7}
          value={formState.message}
          onChange={handleChange}
          className="w-full rounded-md border py-1 px-6 text-base font-medium outline-none focus:shadow-md 
          border-[#564bc9] placeholder-gray-600 text-indigo-950 bg-white focus:border-[#6A64F1]
          dark:bg-[#11123B] dark:placeholder-zinc-400 dark:text-indigo-50"
        ></textarea>
      </div>

      <div>
        <motion.button
          className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-1 px-8 text-base font-semibold disabled:hover:bg-[#6A64F1] dark:bg-indigo-700 hover:bg-indigo-600 text-white outline-none disabled:opacity-50 disabled:cursor-not-allowed mb-3"
          type="submit"
          disabled={formState.name === "" || formState.email === "" || formState.subject === "" || formState.message === ""}
          whileTap={{ scale: 0.9 }}
        >
          {text8}
        </motion.button>
      </div>
    </form>
  )
}

export default Form

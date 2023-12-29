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
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarme, te responderé lo más pronto posible.",
      confirmButtonText: "Aceptar",
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
      text: "Algo salió mal, inténtalo de nuevo.",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#6A64F1",
    });
    setError(false);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-950 rounded-xl p-3"
    >
      <div className="mb-5 ">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-indigo-200"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Escribe tu nombre"
          className="w-full rounded-md border border-[#000000] bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-indigo-200"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="ejemplo@dominio.com"
          className="w-full rounded-md border border-[#000000] bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-indigo-200"
        >
          Asunto
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="Escribe el asunto"
          className="w-full rounded-md border border-[#000000] bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      
      <div className="my-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-indigo-200"
        >
          Mensaje
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Escribe tu mensaje"
          value={formState.message}
          onChange={handleChange}
          className="w-full rounded-md border border-[#000000] bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

      <div>
        <motion.button
          className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold disabled:hover:bg-[#6A64F1] hover:bg-indigo-600 text-white outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={formState.name === "" || formState.email === "" || formState.subject === "" || formState.message === ""}
          whileTap={{ scale: 0.9 }}
        >
          Enviar
        </motion.button>
      </div>
    </form>
  )
}

export default Form

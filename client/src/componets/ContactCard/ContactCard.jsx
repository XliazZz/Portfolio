import { motion } from "framer-motion";
import email from "../../assets/contact/email.svg";
import phone from "../../assets/contact/phone.svg";

const ContactCard = () => {
  let text1 = "";
  let text2 = "";
  let text3 = "";

  if (localStorage.getItem('language') === 'es') {
    text1 = "Contáctame";
    text2 = "Teléfono";
    text3 = "Háblame a mi celular";
  } else {
    text1 = "Contact me";
    text2 = "Phone";
    text3 = "Call me";
  }

  return (
    <div className="container text-white p-8 ml-28 pt-0 mt-0 flex flex-col mx-auto ">
      <div className="w-full ">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full gap-5">
            <div className="flex flex-col items-center gap-3 px-8 py-10 dark:bg-gray-900 bg-gray-700 rounded-3xl shadow-main">
              <span>
                <img src={email} alt="Imagen de email" />
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900">Email</p>
              <p className="text-base leading-7 text-dark-grey-600">{text1}</p>
              <a className="text-lg font-bold text-purple-blue-500" href="mailto:eliasdev1912@gmail.com">eliasdev1912@gmail.com</a>
            </div>

            <div className="flex flex-col items-center gap-3 px-8 py-10 dark:bg-gray-900 bg-gray-700 rounded-3xl shadow-main">
              <span>
                <img src={phone} alt="" />
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900">{text2}</p>
              <p className="text-base leading-7 text-dark-grey-600">{text3}</p>
              <a className="text-lg font-bold text-purple-blue-500" href="tel:+54-11-4888-4304">+54 11-4888-4304</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
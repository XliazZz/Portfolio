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
    <div className="container text-white pt-0 mt-0 flex flex-col mx-auto my-auto w-[100%]">
      <div className="w-full ">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full gap-5">

            <div className="flex flex-col items-center gap-3 px-8 py-10 rounded-3xl shadow-custom-blue
            bg-[#818CF8]
            dark:bg-[#7C7FFF]"
            >
              <span>
                <p className="i-zmdi-email w-8 h-8 dark:text-[#11123b] text-indigo-950"></p>
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900 dark:text-indigo-950">Email</p>
              <p className="text-base leading-7 text-dark-grey-600 dark:text-gray-900 font-bold">{text1}</p>
              <a className="text-lg font-bold text-purple-blue-500 dark:text-indigo-950" href="mailto:eliasdev1912@gmail.com">eliasdev1912@gmail.com</a>
            </div>

            <div className="flex flex-col items-center gap-3 px-8 py-10 rounded-3xl shadow-custom-blue
            bg-[#818CF8]
            dark:bg-[#7C7FFF] "
            >
              <span>
                <p className="i-zmdi-phone w-8 h-8 dark:text-[#11123b] text-indigo-950"></p>
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900 dark:text-indigo-950">{text2}</p>
              <p className="text-base leading-7 text-dark-grey-600 dark:text-gray-900 font-bold">{text3}</p>
              <a className="text-lg font-bold text-purple-blue-500 dark:text-indigo-950" href="tel:+54-11-4888-4304">+54 11-4888-4304</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
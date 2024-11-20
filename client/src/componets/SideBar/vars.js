const isMobile = window.innerWidth <= 768;

const div1 = isMobile ? 
  'sm:container sm:w-screen sm:bg-indigo-500 sm:px-10 sm:ml-0 sm:text-base sm:py-5 sm:w-16 sm:fixed sm:top-1/2 sm:left-0 sm:transform sm:-translate-y-1/2 sm:rounded-full sm:flex-shrink-0 sm:flex sm:items-center sm:justify-center sm:border-purple-50' 
  : 
  'bg-indigo-500 px-10 ml-10 text-white py-5 w-16 fixed top-1/2 left-0 transform -translate-y-1/2 rounded-full flex-shrink-0 flex items-center justify-center border-purple-50';

const ul = isMobile ? 'flex flex-col items-center' : 'flex sm:flex-col items-center';

const li = "m-5 text-center justify-center content-center";

const divIconP = isMobile ? 'flex flex-col items-center' : 'flex sm:flex-col items-center';

export { div1, ul, li, divIconP };
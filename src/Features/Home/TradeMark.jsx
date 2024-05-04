import { FaLock } from "react-icons/fa6";

const TradeMark = () => {
 return (
  <div className=" p-8 bg-blue-50 text-center md:text-left">
   <p className=" text-blue-600 font-bold text-2xl">Futon MFB</p>
   <div className=" text-blue-500 flex justify-center items-center flex-wrap gap-2 py-2">
    <p className=" border-r border-black pr-2 underline"><FaLock className=" text-black" /></p>
    <p className=" border-r border-black pr-2 underline">Privacy</p>
    <p className=" border-r border-black pr-2 underline">Security</p>
    <p className=" border-r border-black pr-2 underline">Advertising Practices</p>
    <p className=" underline">Your Privacy Choices</p>
   </div>
   <p>Futon MFB, N.A. Member FDIC. <span className=" underline text-blue-500">Equal Housing Lender</span></p>
   <p className=" pt-2">&copy; {new Date().getFullYear()} Futon MFB Corporation. All right reserved.</p>
   <p className=" py-4">MAP5156106</p>
  </div>
 );
};

export default TradeMark;
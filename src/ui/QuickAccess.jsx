import UserTransfer from "@/Features/UserDashboard/UserTrasfer";
import { FaBitcoin, FaHandHoldingHeart, FaMoneyCheck, FaPaypal, FaTicket, FaWallet } from "react-icons/fa6";
import { SiZelle } from "react-icons/si";

const QuickAccess = ({ userId }) => {
 return (
  <div className=" text-center text-slate-500 grid grid-cols-4 gap-2 ">
   <UserTransfer userId={userId} />
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <SiZelle className=" text-purple-700 size-10" />
    <p className=" text-xs font-bold pt-2 text-center ">Send Money with Zelle</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaMoneyCheck className=" text-green-600 size-10" />
    <p className=" text-xs font-bold pt-2">Deposit Check</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaHandHoldingHeart className=" text-red-700 size-10" />
    <p className=" text-xs font-bold pt-2">Donate</p>
   </div>
   <div className=" bg-slate-100  p-4 rounded-sm grid place-items-center gap-2">
    <FaTicket className=" text-neutral-900 size-10" />
    <p className=" text-xs font-bold pt-2">Pay Bills</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaWallet className=" text-neutral-900 size-10" />
    <p className=" text-xs font-bold pt-2">Wallet</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaPaypal className=" text-blue-700 size-10" />
    <p className=" text-xs font-bold pt-2">PayPal</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaBitcoin className=" text-yellow-500 size-10" />
    <p className=" text-xs font-bold pt-2">Bitcoin</p>
   </div>

  </div>
 );
};

export default QuickAccess;
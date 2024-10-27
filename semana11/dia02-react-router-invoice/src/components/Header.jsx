import { TbSquareRoundedPlus } from "react-icons/tb";

const Header = ({ title }) => {
  return (
    <header className="flex justify-between items-center w-full md:w-[740px] mx-auto bg-slate-900 my-20 px-3">
      <div className="text-white">
        <h1 className="text-4xl">{title}</h1>
        <span>7 invoices</span>
      </div>

      <button className="bg-indigo-500 text-white rounded-full px-5 py-3 font-extrabold flex  justify-between items-center gap-2">
        <TbSquareRoundedPlus size='2rem' />
        New Invoice
      </button>
    </header>
  )
}

export default Header
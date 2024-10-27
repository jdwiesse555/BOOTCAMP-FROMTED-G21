import { TbChevronRight } from "react-icons/tb";
import BaseTag from "../shared/BaseTag";

const InvoiceList = ({ invoices }) => {
  return (
    <main className="w-[740px] m-auto flex flex-col gap-5">
    {invoices && invoices.map(invoice => {
      return (
        <article
          className="bg-slate-700 p-4 rounded-lg text-white flex justify-between items-center gap-5"
          key={invoice.id}
        >
          <div className="w-20">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">{invoice.code}</span>
          </div>
          <div className="w-44 font-semibold">{invoice.invoice.date}</div>
          <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
          <div className="w-44 font-semibold text-3xl text-right">
            {invoice.invoice.currency.symbol}
            {invoice.invoice.grandTotal}
          </div>
          <div>
            {
              <BaseTag label={invoice.status}  />
            }

          </div>
          <div className="w-10 flex justify-center">
            <TbChevronRight />
          </div>
        </article>
      )
    })}
      
    </main>
  )
}

export default InvoiceList
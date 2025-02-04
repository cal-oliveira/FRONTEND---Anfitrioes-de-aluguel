import { ArrowDown, Calendar, Users } from "lucide-react";

export default function Disponibility({ preco }: { preco: number }) {
  return (
    <div className="h-[378px] flex-1 flex flex-col items-start justify-center gap-[50px] text-start border rounded-3xl px-10">
      <h2 className="text-xl">
        <span className="font-bold text-[#071d2f]">R$ {preco}</span>/ noite
      </h2>

      <div className="flex flex-col rounded-xl border h-[98px] w-full">
        <div className="flex h-full  justify-between items-center px-3">
          <div className="flex gap-1">
            <Calendar className="size-5" /> <p>Datas</p>
          </div>
          <ArrowDown className="size-5" />
        </div>
        <div className="bg-zinc-200 h-px w-full"></div>
        <div className="flex h-full justify-between items-center px-3">
          <div className="flex gap-1">
            <Users className="size-5" /> <span>Hóspedes</span>
          </div>
          <ArrowDown className="size-5" />
        </div>
      </div>
      <button className="bg-[#071d2f] text-white text-base w-full h-[48px] rounded-xl hover:opacity-90">
        Ver disponibilidade
      </button>
    </div>
  );
}

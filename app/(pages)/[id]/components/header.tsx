export default function Header() {
  return (
    <div className=" flex items-center justify-between w-ful mx-auto p-5">
      <div className="w-[120px] h-[40px]">
        <img src="./logo.png" alt="logo" className="w-full h-full" />
      </div>

      <div className="flex gap-6 text-sm text-[#6a6a68] ">
        <button className="hover:text-[#0f0f0e] transition-all">Fotos</button>
        <button className="hover:text-[#0f0f0e] transition-all">
          Localização
        </button>
        <button className="hover:text-[#0f0f0e] transition-all">
          Comodidades
        </button>
        <button className="hover:text-[#0f0f0e] transition-all">
          Avaliações
        </button>
        <button className="hover:text-[#0f0f0e] transition-all">
          Políticas
        </button>
      </div>

      <div>
        <button className="border rounded-xl p-3 h-[40px] flex items-center justify-center text-[#071d2f] hover:bg-zinc-300">
          Contato
        </button>
      </div>
    </div>
  );
}

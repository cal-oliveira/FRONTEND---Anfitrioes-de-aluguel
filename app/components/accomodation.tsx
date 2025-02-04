import Link from "next/link";

export type AccomodationProps = {
  id: number;
  nome: string;
  images?: string[];
  preco: number;
  cidade: string;
  like?: React.ReactNode;
};

export default function Accomodation({
  id,
  nome,
  images,
  preco,
  cidade,
  like,
}: AccomodationProps) {
  return (
    <Link href={`/${id}`}>
      <div className="h-[256px] w-[300px]  rounded-xl">
        <img
          src={images?.[0]}
          alt="imagem da acomodação"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-[#292926] text-base">{nome}</h2>
        <h3 className="text-[#222] font-semibold text-sm">R$ {preco}</h3>
      </div>
      <div className="flex justify-between">
        <h4 className="text-[#6a6a68] text-sm">{cidade}</h4>
        <button>{like}</button>
      </div>
    </Link>
  );
}

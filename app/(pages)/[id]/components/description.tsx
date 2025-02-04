import Disponibility from "./disponibility";

export default function Description({
  preco,
  nome,
}: {
  preco: number;
  nome: string;
}) {
  return (
    <div className="mt-10 w-full flex gap-5">
      <div className="flex w-[65%]">
        <div className="space-y-5">
          <h1 className="text-4xl">{nome}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam
            doloremque a, maxime tempora eum, eius quidem aliquam in modi porro
            similique. Adipisci fugit illum ad provident quibusdam amet debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            assumenda repudiandae tempore voluptates id asperiores quis
            veritatis sint impedit, doloremque incidunt nulla possimus,
            consequuntur sequi eos. Maxime ex provident eligendi? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Libero expedita quasi
            fugit hic vel vero rerum provident itaque reprehenderit! Dolores
            natus iusto in ratione cum mollitia incidunt odio pariatur
            dignissimos?
          </p>
        </div>
        <div>
          <button className="border rounded-xl p-3 h-[40px] flex items-center justify-center text-[#071d2f] hover:bg-zinc-300">
            Compartilhar
          </button>
        </div>
      </div>
      <Disponibility preco={preco} />
    </div>
  );
}

type GalleryProps = {
  images?: string[]; // Agora espera um array de imagens
};

export default function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) {
    return <p>No images available.</p>; // Exibe uma mensagem caso não haja imagens
  }

  return (
    <div className="w-full max-h-[500px] flex gap-px">
      {/* Imagem grande esquerda */}
      <div className="bg-orange-400 w-[65%] rounded-l-3xl overflow-hidden">
        <img
          src={images[0]} // Exibe a primeira imagem
          alt="imagens da acomodacao"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid de imagens à direita */}
      <div className="flex-1 h-full flex flex-col gap-px">
        {/* Imagem superior direita */}
        <div className="bg-slate-600 h-[287px] rounded-tr-3xl overflow-hidden">
          <img
            src={images[1] || images[0]} // Exibe a segunda imagem ou a primeira, caso não haja segunda
            alt="imagens da acomodacao"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grid inferior */}
        <div className="grid grid-cols-2 h-[213px] gap-px">
          <div className="bg-pink-500 h-full overflow-hidden">
            <img
              src={images[2] || images[0]} // Exibe a terceira imagem ou a primeira, caso não haja terceira
              alt="imagens da acomodacao"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-purple-500 rounded-br-3xl overflow-hidden">
            <img
              src={images[3] || images[0]} // Exibe a quarta imagem ou a primeira, caso não haja quarta
              alt="imagens da acomodacao"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

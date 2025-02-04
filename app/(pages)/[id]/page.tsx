"use client";

import { useParams } from "next/navigation";
import Description from "./components/description";
import Gallery from "./components/gallery";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { AccomodationProps } from "@/app/components/accomodation";

export default function AccomodationDetails() {
  const params = useParams();
  const id = params?.id;
  const [accomodation, setAccomodation] = useState<AccomodationProps | null>(
    null
  ); // Inicializando como null

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/acomodacoes/${id}`)
      .then((response) => response.json())
      .then((data) => setAccomodation(data));
  }, [id]);

  if (!accomodation)
    return (
      <p className="flex items-center justify-center h-screen">await...</p>
    );

  return (
    <div className="max-w-[1230px] mx-auto">
      <Header />
      {/* Passando o array de imagens para o componente Gallery */}
      <Gallery images={accomodation.images} />
      <Description nome={accomodation.nome} preco={accomodation.preco} />
    </div>
  );
}

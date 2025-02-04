"use client";

import { useEffect, useState } from "react";
import Accomodation, { AccomodationProps } from "../components/accomodation";
import { fetchData } from "../api/api";
import Header from "../components/header";
import { Heart } from "lucide-react";

export default function Home() {
  const [accomodations, setAccomodations] = useState<AccomodationProps[]>([]);
  const [filteredAccomodations, setFilteredAccomodations] = useState<
    AccomodationProps[]
  >([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [likedAccomodations, setLikedAccomodations] = useState<string[]>([]); // Guarda os likes

  // Carregar os dados ao montar o componente
  useEffect(() => {
    const getAccomodations = async () => {
      const data = await fetchData();
      setAccomodations(data);
      setFilteredAccomodations(data);
    };

    getAccomodations();
  }, []);

  // Carregar likes do localStorage ao iniciar
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedAccomodations");
    if (savedLikes) {
      setLikedAccomodations(JSON.parse(savedLikes));
    }
  }, []);

  // Atualizar acomodações filtradas quando a localização for alterada
  useEffect(() => {
    if (selectedLocation) {
      const filtered = accomodations.filter(
        (acc) => acc.cidade === selectedLocation
      );
      setFilteredAccomodations(filtered);
    } else {
      setFilteredAccomodations(accomodations);
    }
  }, [selectedLocation, accomodations]);

  // Função para alternar o like
  const toggleLike = (accomodationName: string) => {
    let updatedLikes: string[];

    if (likedAccomodations.includes(accomodationName)) {
      updatedLikes = likedAccomodations.filter(
        (name) => name !== accomodationName
      );
    } else {
      updatedLikes = [...likedAccomodations, accomodationName];
    }

    setLikedAccomodations(updatedLikes);
    localStorage.setItem("likedAccomodations", JSON.stringify(updatedLikes));
  };

  const totalAccomodations = filteredAccomodations.length;
  const locations = [...new Set(accomodations.map((acc) => acc.cidade))];

  return (
    <div className="w-full max-w-[700px] flex flex-col items-center justify-center mx-auto">
      <div className="w-full">
        <Header
          locations={locations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <h2 className="text-zinc-500">
          Mostrando {totalAccomodations} de {accomodations.length} Acomodações
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5 mb-10">
        {filteredAccomodations.map((accomodation) => (
          <Accomodation
            id={accomodation.id}
            key={accomodation.nome}
            nome={accomodation.nome}
            preco={accomodation.preco}
            cidade={accomodation.cidade}
            images={accomodation.images} // Passando o array de imagens
            like={
              <Heart
                className={`size-4 cursor-pointer ${
                  likedAccomodations.includes(accomodation.nome)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
                onClick={() => toggleLike(accomodation.nome)}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}

import { Calendar, Search, Users } from "lucide-react";
import Button from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSeparator } from "@/app/components/ui/dropdown-menu";

type HeaderProps = {
  locations: string[];
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
};

export default function Header({
  locations,
  selectedLocation,
  setSelectedLocation,
}: HeaderProps) {
  function handleSelectLocation(location: string) {
    setSelectedLocation(location);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 m-2">
      <div className="h-[90px] w-[290px] p-1">
        <img
          src="/logo.png"
          className="w-full h-full object-contain"
          alt="Anfitrioes de aluguel"
        />
      </div>
      <div className="max-h-[39px] flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              icon={<Search className="size-4" />}
              className="rounded-l-xl"
            >
              {selectedLocation ? selectedLocation : "Localização"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-96 bg-white rounded-md border p-2">
            <DropdownMenuLabel className="font-semibold text-base">
              Selecionar localização
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="cursor-pointer">
              {locations.map((location) => {
                return (
                  <DropdownMenuItem
                    key={location.length}
                    onClick={() => handleSelectLocation(location)}
                    className="hover:bg-zinc-100 rounded-md p-2 outline-none transition-all"
                  >
                    {location}
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button icon={<Calendar className="size-4" />}>Qualquer data</Button>
        <Button icon={<Users className="size-4" />} className="rounded-r-xl">
          Hóspedes
        </Button>
      </div>
    </div>
  );
}

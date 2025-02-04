import { ChevronDown, Search } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

export default function Location({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex items-center justify-between rounded-2xl gap-3 text-sm border p-3 text-[#0f0f0e]"
      {...rest}
    >
      <span className="flex items-center gap-2">
        <Search className="size-4" />
        Localização
      </span>
      <ChevronDown className="size-4" />
    </button>
  );
}

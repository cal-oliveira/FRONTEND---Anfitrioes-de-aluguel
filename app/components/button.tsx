import { ChevronDown } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export default function Button({
  children,
  className,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-between gap-3 text-sm border p-3 text-[#0f0f0e] outline-none",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <span>{children}</span>
      </div>
      <ChevronDown className="size-4" />
    </button>
  );
}

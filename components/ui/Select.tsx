import { LanguageDefinition, ThemeDefinition } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { Fragment } from "react";

interface SelectProps<T> {
  type: "language" | "theme";
  initialValue: T;
  setValue: (_: T) => void;
  options: T[];
}

function ThemeBubble({ color }: { color: string }) {
  return (
    <span
      className={cn("block h-4 rounded-full bg-gradient-to-br", color)}
    ></span>
  );
}

export default function Select<T extends ThemeDefinition | LanguageDefinition>({
  type,
  initialValue,
  setValue,
  options,
}: SelectProps<T>) {
  return (
    <Listbox value={initialValue} onChange={setValue}>
      <ListboxButton
        className={cn(
          "relative block min-w-28 w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {type === "language" ? (
          <span className=" capitalize">
            {(initialValue as LanguageDefinition).label}
          </span>
        ) : (
          <ThemeBubble color={(initialValue as ThemeDefinition).class} />
        )}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={cn(
          " rounded-md border border-white/5 bg-white p-1 focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {options.map((option, i) => (
          <ListboxOption
            key={`${type}-${i}`}
            value={option}
            className={cn(
              "flex items-center gap-3 rounded-lg p-2 text-xs",
              "cursor-pointer select-none bg-white",
              "transition-colors duration-200 ease-in-out",
              "hover:bg-black hover:text-white"
            )}
          >
            {type === "language" ? (
              <span className="block truncate pr-6 capitalize">
                {(option as LanguageDefinition).label}
              </span>
            ) : (
              <>
                <ThemeBubble color={(option as ThemeDefinition).class} />
                <span className="block truncate pr-9">
                  {(option as ThemeDefinition).label}
                </span>
              </>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

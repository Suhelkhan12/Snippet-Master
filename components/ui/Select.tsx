import {
  FontsDefinition,
  LanguageDefinition,
  ThemeDefinition,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { memo, useCallback } from "react";

interface SelectProps<T> {
  type: "language" | "theme" | "font";
  initialValue: T;
  setValue: (_: T) => void;
  options: T[];
}

const ThemeBubble = ({ color }: { color: string }) => {
  return (
    <span
      className={cn("block size-5 rounded-full bg-gradient-to-br", color)}
    />
  );
};

export default memo(function Select<
  T extends ThemeDefinition | LanguageDefinition | FontsDefinition
>({ type, initialValue, setValue, options }: SelectProps<T>) {
  const getIntialValue = useCallback(
    (type: "language" | "theme" | "font"): React.ReactElement => {
      switch (type) {
        case "language":
          return (
            <span className=" capitalize">
              {(initialValue as LanguageDefinition).label}
            </span>
          );
        case "theme":
          return (
            <span className="flex items-center gap-2 ">
              <ThemeBubble color={(initialValue as ThemeDefinition).class} />
              <span className=" capitalize">
                {(initialValue as LanguageDefinition).label}
              </span>
            </span>
          );
        case "font":
          return (
            <span className=" capitalize">
              {(initialValue as FontsDefinition).label}
            </span>
          );
      }
    },
    [initialValue]
  );

  const getOptionContent = useCallback(
    (
      type: "language" | "theme" | "font",
      option: LanguageDefinition | ThemeDefinition | FontsDefinition
    ): React.ReactElement => {
      switch (type) {
        case "language":
          return (
            <span className=" capitalize">
              {(option as LanguageDefinition).label}
            </span>
          );
        case "theme":
          return (
            <span className="flex items-center gap-2 ">
              <ThemeBubble color={(option as ThemeDefinition).class} />
              <span className=" capitalize">
                {(option as LanguageDefinition).label}
              </span>
            </span>
          );
        case "font":
          return (
            <span className=" capitalize">
              {(option as FontsDefinition).label}
            </span>
          );
      }
    },
    []
  );

  return (
    <Listbox value={initialValue} onChange={setValue}>
      <ListboxButton
        className={cn(
          "relative block min-w-36 w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white border border-white/10",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {type === "language" && getIntialValue("language")}
        {type === "theme" && getIntialValue("theme")}
        {type == "font" && getIntialValue("font")}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom start"
        transition
        className={cn(
          " w-[20rem] mt-2 rounded-md border border-white/20 bg-black p-2 focus:outline-none grid grid-cols-2 gap-2 shadow-md ",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          "scrollbar-thin scrollbar-track-transparent"
        )}
      >
        {options.map((option, i) => (
          <ListboxOption
            key={`${type}-${i}`}
            value={option}
            className={cn(
              "flex items-center rounded-sm p-2 text-base",
              "cursor-pointer select-none text-white",
              "transition-colors duration-200 ease-in-out",
              "hover:bg-white/10 hover:text-white"
            )}
          >
            {type === "language" &&
              getOptionContent("language", option as LanguageDefinition)}
            {type === "theme" &&
              getOptionContent("theme", option as ThemeDefinition)}
            {type == "font" &&
              getOptionContent("font", option as FontsDefinition)}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
});

import { GradientBackground } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import type { LanguageName } from "@uiw/codemirror-extensions-langs";
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

export default function Select<T extends GradientBackground | LanguageName>({
  type,
  initialValue,
  setValue,
  options,
}: SelectProps<T>) {
  return (
    <Listbox value={initialValue} onChange={setValue}>
      <div className="relative">
        <ListboxButton
          className={cn(
            "flex select-none items-center justify-between gap-3 rounded-lg p-2 text-xs p-",
            "border-[1px] border-white/30 bg-foreground",
            "transition-colors duration-300 ease-in-out",
            "hover:cursor-pointer hover:bg-muted-foreground focus:outline-none"
          )}
        >
          {type === "language" ? (
            <span>{initialValue as LanguageName}</span>
          ) : (
            <ThemeBubble color={(initialValue as GradientBackground).class} />
          )}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
          <Transition
            as={Fragment}
            enter="transition-all transform ease-in-out duration-200"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100"
            leave="transition-all transform ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-90"
          >
            <ListboxOptions
              className={clsx(
                "absolute z-10 max-h-80 -translate-x-1/4 -translate-y-3/4 space-y-1 overflow-auto rounded-xl p-2",
                "border-[1px] border-white/20 bg-black",
                "focus:outline-none"
              )}
            >
              {options.map((option, i) => (
                <ListboxOption
                  key={`${type}-${i}`}
                  value={option}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg p-2 text-xs",
                    "cursor-pointer select-none",
                    "transition-colors duration-200 ease-in-out"
                  )}
                >
                  {type === "language" ? (
                    <span className="block truncate pr-9">
                      {option as LanguageName}
                    </span>
                  ) : (
                    <>
                      <ThemeBubble
                        color={(option as GradientBackground).class}
                      />
                      <span className="block truncate pr-9">
                        {(option as GradientBackground).name}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </ListboxButton>
      </div>
    </Listbox>
  );
}

import { memo } from "react";
import { Switch } from "@headlessui/react";

interface ToggleProps {
  initialValue: boolean;
  setValue: (_: boolean) => void;
}

export default memo(function Toggle({ initialValue, setValue }: ToggleProps) {
  return (
    <div className="flex h-[34px] items-center">
      <Switch
        checked={initialValue}
        onChange={setValue}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/30 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-blue-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
    </div>
  );
});

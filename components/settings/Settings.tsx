"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSettingsContext } from "@/context/SettingsContext";
import { motion, useAnimationControls, useDragControls } from "motion/react";
import { MdDragIndicator } from "react-icons/md";
import Select from "../ui/Select";
import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import { SUPPORTED_PADDINGS, SUPPORTED_THEMES } from "@/lib/themes";
import Toggle from "../ui/Toggle";
import Choices from "../ui/Choices";
import { SUPPORTED_FONTS } from "@/lib/fonts";

const Settings = () => {
  // for changing the dimensions for the settings bar
  const [mainDimensions, setMainDimensions] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  // constraints for top-left-right-bottom
  const [constraints, setConstraints] = useState<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  }>({ top: 0, right: 0, left: 0, bottom: 0 });

  //getting values from out settingsContext
  const {
    theme,
    setTheme,
    language,
    setLanguage,
    padding,
    setPadding,
    font,
    setFont,
    lineNumbers,
    setLineNumbers,
  } = useSettingsContext();

  //controls for dragging from motion
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();

  // now here we have effects which will help us to adjust contraints and dimensions values

  // for handling main dimensions
  useEffect(() => {
    const main = document.getElementById("main");
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      timeoutId = setTimeout(() => {
        setMainDimensions({
          height: main!.offsetHeight,
          width: main!.offsetWidth,
        });

        animationControls.start({
          x: 0,
          y: 0,
        });
      }, 500);
    };

    setMainDimensions({
      height: main!.offsetHeight,
      width: main!.offsetWidth,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // for setting constraints
  useEffect(() => {
    const settings = document.getElementById("settings");
    setConstraints({
      top: -settings!.offsetTop + 24,
      left:
        -mainDimensions.width +
        settings!.offsetWidth +
        settings!.offsetLeft +
        24,
      right:
        mainDimensions.width -
        settings!.offsetWidth -
        settings!.offsetLeft -
        24,
      bottom:
        mainDimensions.height -
        settings!.offsetHeight -
        settings!.offsetTop -
        24,
    });
  }, [mainDimensions.height, mainDimensions.width]);

  return (
    <motion.div
      id="settings"
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragConstraints={constraints}
      animate={animationControls}
      className={cn(
        "fixed left-10 top-6 max-w-xs  w-full x-10 rounded-xl p-5 text-xm",
        "transition-opacity duration-300 ease-in-out will-change-transform",
        "border-[1px] border-white/20 text-white bg-black opacity-50 shadow-xl",
        "focus-within:opacity-100 hover:opacity-100"
      )}
    >
      <div
        onPointerDown={(e) => dragControls.start(e, { snapToCursor: false })}
        className={cn(
          "absolute -top-[10px] left-1/2 py-[1px] px-[6px]",
          "rounded-md border-[1px] border-white/20 bg-black",
          "transition-all duration-200 ease-in-out will-change-transform",
          "hover:scale-125 hover:cursor-grab hover:bg-white hover:text-black focus:outline-none"
        )}
      >
        <MdDragIndicator />
      </div>
      <div className="w-full flex flex-col gap-6 items-start justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="language">Language</label>
          <Select
            type="language"
            initialValue={language}
            setValue={setLanguage}
            options={SUPPORTED_LANGUAGES}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="theme">Theme</label>
          <Select
            type="theme"
            initialValue={theme}
            setValue={setTheme}
            options={SUPPORTED_THEMES}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="theme">Font</label>
          <Select
            type="font"
            initialValue={font}
            setValue={setFont}
            options={SUPPORTED_FONTS}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="line-numbers">Line numbers</label>
          <Toggle initialValue={lineNumbers} setValue={setLineNumbers} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="line-numbers">Paddings</label>
          <Choices
            initialValue={padding}
            setValue={setPadding}
            choices={SUPPORTED_PADDINGS}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;

"use client";
import { createContext, useContext, useState } from "react";
import {
  ChoiceDefinition,
  FontsDefinition,
  LanguageDefinition,
  ThemeDefinition,
} from "@/lib/types";
import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import { SUPPORTED_THEMES, SUPPORTED_PADDINGS } from "@/lib/themes";
import { SUPPORTED_FONTS } from "@/lib/fonts";
/**
 * this is props interface for settings context
 */
interface SettingsContextProps {
  language: LanguageDefinition;
  setLanguage: (_: LanguageDefinition) => void;
  theme: ThemeDefinition;
  setTheme: (_: ThemeDefinition) => void;
  padding: ChoiceDefinition;
  setPadding: (_: ChoiceDefinition) => void;
  font: FontsDefinition;
  setFont: (_: FontsDefinition) => void;
  lineNumbers: boolean;
  setLineNumbers: (_: boolean) => void;
}

// creating context for settings
const SetttingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

// custom hook for settingsContext
const useSettingsContext = () => useContext(SetttingsContext);

type SettingsProviderProps = {
  children: React.ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  // creating state values to give to our provider
  const [language, setLanguage] = useState<LanguageDefinition>(
    SUPPORTED_LANGUAGES[0]
  );
  const [theme, setTheme] = useState<ThemeDefinition>(SUPPORTED_THEMES[0]);
  const [padding, setPadding] = useState<ChoiceDefinition>(
    SUPPORTED_PADDINGS[0]
  );
  const [font, setFont] = useState<FontsDefinition>(SUPPORTED_FONTS[0]);
  const [lineNumbers, setLineNumbers] = useState<boolean>(true);

  return (
    <SetttingsContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        padding,
        setPadding,
        font,
        setFont,
        lineNumbers,
        setLineNumbers,
      }}
    >
      {children}
    </SetttingsContext.Provider>
  );
};

export { SettingsProvider, useSettingsContext };

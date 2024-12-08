import { createContext, useContext, useState } from "react";
import {
  ChoiceDefinition,
  LanguageDefinition,
  ThemeDefinition,
} from "@/lib/types";
import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import { SUPPORTED_PADDING_CHOICES, SUPPORTED_THEMES } from "@/lib/themes";

/**
 * this is props interface for settings context
 */
interface SettingsContextProps {
  language: LanguageDefinition;
  setLanguage: (_: LanguageDefinition) => void;
  theme: ThemeDefinition;
  setTheme: (_: ThemeDefinition) => void;
  lineNumbers: boolean;
  setLineNumbers: (_: boolean) => void;
  padding: ChoiceDefinition;
  setPadding: (_: ChoiceDefinition) => void;
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
  const [lineNumbers, setLineNumbers] = useState<boolean>(true);
  const [padding, setPadding] = useState<ChoiceDefinition>(
    SUPPORTED_PADDING_CHOICES[0]
  );

  return (
    <SetttingsContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        lineNumbers,
        setLineNumbers,
        padding,
        setPadding,
      }}
    >
      {children}
    </SetttingsContext.Provider>
  );
};

export { SettingsProvider, useSettingsContext };

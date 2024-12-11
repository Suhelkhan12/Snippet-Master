import { Extension } from "@codemirror/state";
import { IconType } from "react-icons/lib";

export default interface CodeProps {
  placeholder: string;
  initialValue?: string;
}

export type ChoiceDefinition = {
  id: string;
  label: string;
  class: string;
};

export type ThemeDefinition = {
  id: string;
  label: string;
  class: string;
  generatedColors: string[];
};

export type LanguageDefinition = {
  id: string;
  label: string;
  icon: IconType;
  extension: () => Promise<Extension>;
};

export type FontsDefinition = {
  id: string;
  label: string;
  value: string;
};

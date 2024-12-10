"use client";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSettingsContext } from "@/context/SettingsContext";
import { EditorView } from "@codemirror/view";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { hslToHsla } from "@/lib/colors";
import { motion } from "motion/react";
import ReactCodeMirror from "@uiw/react-codemirror";

const Code = () => {
  // state value for textarea
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedLanguages, setSelectedLanguages] = useState<any>(null);
  const [code, setCode] = useState<string>("interface Props{item1:'test1'}");

  const { language, theme, lineNumbers } = useSettingsContext();

  const handleOnChange = useCallback((value: string) => {
    setCode(value);
  }, []);

  // use effect for loading the language and change the state
  useEffect(() => {
    async function loadlanguage() {
      const lang = await language.extension();
      setSelectedLanguages(lang);
    }
    loadlanguage();
  }, [language]);

  // styles for editor view
  const styleTheme = EditorView.baseTheme({
    "&.cm-editor": {
      fontSize: "0.9375rem",
    },
    "&.cm-editor.cm-focused": {
      outline: "none",
    },
    ".cm-gutterElement": {
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: "1rem !important",
      lineHeight: "1.5rem",
      letterSpacing: ".1px",
    },
    ".cm-content": {
      lineHeight: "1.5rem",
    },
  });

  const colors = theme.generatedColors;

  // creating own theme
  const myTheme = createTheme({
    theme: "dark",
    settings: {
      background: "transparent",
      foreground: "white",
      caret: colors.at(0),
      selection: hslToHsla(colors.at(0)!, 0.1),
      selectionMatch: hslToHsla(colors.at(0)!, 0.2),
      lineHighlight: "transparent",
      gutterBackground: "transparent",
      gutterForeground: hslToHsla(colors.at(0)!, 0.4),
      gutterBorder: "transparent",
    },
    styles: [
      {
        tag: [t.emphasis],
        fontStyle: "italic",
      },
      {
        tag: [t.strong],
        fontStyle: "bold",
      },
      {
        tag: [t.link],
        color: colors.at(1),
      },
      {
        tag: [t.comment, t.lineComment, t.blockComment, t.docComment],
        fontStyle: "italic",
        color: hslToHsla(colors.at(0)!, 0.4),
      },
      {
        tag: [
          t.bracket,
          t.squareBracket,
          t.paren,
          t.punctuation,
          t.angleBracket,
        ],
        color: colors.at(0),
      },
      {
        tag: [t.variableName],
        color: colors.at(5),
        fontStyle: "italic",
      },
      { tag: t.propertyName, color: colors.at(5), fontStyle: "italic" },
      { tag: t.definition(t.variableName), color: colors.at(10) },
      { tag: t.definition(t.propertyName), color: colors.at(8) },
      {
        tag: [
          t.moduleKeyword,
          t.keyword,
          t.changed,
          t.annotation,
          t.modifier,
          t.namespace,
          t.self,
          t.meta,
        ],
        color: colors.at(1),
      },
      {
        tag: [t.typeName, t.typeOperator],
        color: colors.at(13),
      },
      {
        tag: [t.operator, t.special(t.string)],
        color: colors.at(6),
      },
      {
        tag: [t.number, t.bool, t.string, t.processingInstruction, t.inserted],
        color: colors.at(2),
      },
      {
        tag: [
          t.color,
          t.className,
          t.constant(t.name),
          t.standard(t.name),
          t.function(t.variableName),
          t.function(t.propertyName),
        ],
        color: colors.at(8),
      },
      {
        tag: [t.regexp],
        color: colors.at(12),
      },
      {
        tag: [t.tagName],
        color: colors.at(11),
      },
      {
        tag: [t.attributeValue],
        color: colors.at(2),
      },
      {
        tag: [t.attributeName],
        color: colors.at(6),
      },
      {
        tag: [t.heading],
        color: colors.at(1),
        fontWeight: "bold",
      },
      {
        tag: [t.quote],
        color: colors.at(6),
      },
    ],
  });

  return (
    <motion.div
      layout
      className={cn(
        "relative z-0 w-auto min-w-[512px] max-w-5xl rounded-xl overflow-hidden",
        "bg-gradient-to-br",
        theme.class,
        "transition-all duration-200 ease-in-out"
      )}
    >
      <motion.div
        layout
        className="relative z-[1] h-full w-full min-w-[480px] max-w-2xl rounded-xl overflow-hidden "
      >
        <div
          className={cn(
            "absolute inset-0 rounded-xl overflow-hidden",
            "after:absolute after:inset-0 after:z-[2] after:translate-y-6 after:rounded-xl after:bg-black/60 after:blur-xl"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 z-[3] rounded-xl",
              "bg-gradient-to-br",
              theme.class
            )}
          />
        </div>
        <div
          className={cn(
            "relative z-[4] rounded-xl overflow-hidden bg-black/70 p-4 shadow-xl border border-white/10"
          )}
        >
          {selectedLanguages && (
            <ReactCodeMirror
              value={code}
              onChange={handleOnChange}
              extensions={[
                selectedLanguages,
                styleTheme,
                EditorView.lineWrapping,
              ]}
              basicSetup={{
                lineNumbers: lineNumbers,
                foldGutter: false,
                autocompletion: false,
                indentOnInput: false,
                highlightActiveLine: false,
                highlightActiveLineGutter: false,
                dropCursor: false,
                searchKeymap: false,
                lintKeymap: false,
                completionKeymap: false,
                foldKeymap: false,
              }}
              theme={myTheme}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Code;

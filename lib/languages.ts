import { LanguageDefinition } from "./types";

export const SUPPORTED_LANGUAGES: LanguageDefinition[] = [
  {
    id: "typescript",
    label: "typescript",
    extension: () =>
      import("@codemirror/lang-javascript").then((lang) =>
        lang.javascript({ jsx: true, typescript: true })
      ),
  },
  {
    id: "javascript",
    label: "javascript",
    extension: () =>
      import("@codemirror/lang-javascript").then((lang) =>
        lang.javascript({ jsx: true })
      ),
  },
  {
    id: "java",
    label: "java",
    extension: () =>
      import("@codemirror/lang-java").then((lang) => lang.java()),
  },

  {
    id: "php",
    label: "php",
    extension: () => import("@codemirror/lang-php").then((lang) => lang.php()),
  },
  {
    id: "python",
    label: "python",
    extension: () =>
      import("@codemirror/lang-python").then((lang) => lang.python()),
  },
  {
    id: "rust",
    label: "rust",
    extension: () =>
      import("@codemirror/lang-rust").then((lang) => lang.rust()),
  },
  {
    id: "go",
    label: "go",
    extension: () => import("@codemirror/lang-go").then((lang) => lang.go()),
  },
  {
    id: "cpp",
    label: "cpp",
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "css",
    label: "css",
    extension: () => import("@codemirror/lang-css").then((lang) => lang.css()),
  },
  {
    id: "html",
    label: "html",
    extension: () =>
      import("@codemirror/lang-html").then((lang) =>
        lang.html({ matchClosingTags: true, autoCloseTags: true })
      ),
  },
  {
    id: "xml",
    label: "xml",
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "json",
    label: "json",
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "sql",
    label: "sql",
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "markdown",
    label: "markdown",
    extension: () =>
      import("@codemirror/lang-markdown").then((lang) => lang.markdown()),
  },
];

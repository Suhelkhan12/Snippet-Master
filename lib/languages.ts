import { LanguageDefinition } from "./types";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaJava,
  FaPhp,
  FaPython,
  FaRust,
  FaGolang,
  FaHtml5,
} from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiCss3, SiMysql } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";
import { IoCodeSlash } from "react-icons/io5";

export const SUPPORTED_LANGUAGES: LanguageDefinition[] = [
  {
    id: "typescript",
    label: "typescript",
    icon: SiTypescript,
    extension: () =>
      import("@codemirror/lang-javascript").then((lang) =>
        lang.javascript({ jsx: true, typescript: true })
      ),
  },
  {
    id: "javascript",
    label: "javascript",
    icon: IoLogoJavascript,
    extension: () =>
      import("@codemirror/lang-javascript").then((lang) =>
        lang.javascript({ jsx: true })
      ),
  },
  {
    id: "java",
    label: "java",
    icon: FaJava,
    extension: () =>
      import("@codemirror/lang-java").then((lang) => lang.java()),
  },

  {
    id: "php",
    label: "php",
    icon: FaPhp,
    extension: () => import("@codemirror/lang-php").then((lang) => lang.php()),
  },
  {
    id: "python",
    label: "python",
    icon: FaPython,
    extension: () =>
      import("@codemirror/lang-python").then((lang) => lang.python()),
  },
  {
    id: "rust",
    label: "rust",
    icon: FaRust,
    extension: () =>
      import("@codemirror/lang-rust").then((lang) => lang.rust()),
  },
  {
    id: "go",
    label: "go",
    icon: FaGolang,
    extension: () => import("@codemirror/lang-go").then((lang) => lang.go()),
  },
  {
    id: "cpp",
    label: "cpp",
    icon: TbBrandCpp,
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "css",
    label: "css",
    icon: SiCss3,
    extension: () => import("@codemirror/lang-css").then((lang) => lang.css()),
  },
  {
    id: "html",
    label: "html",
    icon: FaHtml5,
    extension: () =>
      import("@codemirror/lang-html").then((lang) =>
        lang.html({ matchClosingTags: true, autoCloseTags: true })
      ),
  },
  {
    id: "xml",
    label: "xml",
    icon: TbFileTypeXml,
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "json",
    label: "json",
    icon: BsFiletypeJson,
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "sql",
    label: "sql",
    icon: SiMysql,
    extension: () => import("@codemirror/lang-cpp").then((lang) => lang.cpp()),
  },
  {
    id: "markdown",
    label: "markdown",
    icon: IoCodeSlash,
    extension: () =>
      import("@codemirror/lang-markdown").then((lang) => lang.markdown()),
  },
];

import { generateColors } from "./colors";
import { ThemeDefinition } from "./types";

export const SUPPORTED_THEMES: ThemeDefinition[] = [
  {
    id: "sky",
    label: "Sky Color",
    class: "from-sky-500 to-blue-600",
    generatedColors: generateColors(["#0ea5e9", "#2563eb"]),
  },
  {
    id: "sunset",
    label: "Sunset",
    class: "from-orange-500 to-pink-600",
    generatedColors: generateColors(["#f97316", "#db2777"]),
  },
  {
    id: "forest",
    label: "Forest",
    class: "from-green-600 to-teal-500",
    generatedColors: generateColors(["#16a34a", "#14b8a6"]),
  },
  {
    id: "lavender",
    label: "Lavender",
    class: "from-purple-500 to-violet-600",
    generatedColors: generateColors(["#8b5cf6", "#7c3aed"]),
  },
  {
    id: "ocean",
    label: "Ocean",
    class: "from-blue-600 to-teal-600",
    generatedColors: generateColors(["#2563eb", "#0d9488"]),
  },
  {
    id: "peach",
    label: "Peach",
    class: "from-pink-400 to-orange-400",
    generatedColors: generateColors(["#f472b6", "#fb923c"]),
  },
  {
    id: "midnight",
    label: "Midnight",
    class: "from-gray-800 to-black",
    generatedColors: generateColors(["#1f2937", "#000000"]),
  },
  {
    id: "flamingo",
    label: "Flamingo",
    class: "from-rose-500 to-pink-600",
    generatedColors: generateColors(["#f43f5e", "#db2777"]),
  },
  {
    id: "mint",
    label: "Mint",
    class: "from-teal-400 to-green-500",
    generatedColors: generateColors(["#2dd4bf", "#22c55e"]),
  },
  {
    id: "citrus",
    label: "Citrus",
    class: "from-yellow-500 to-orange-500",
    generatedColors: generateColors(["#eab308", "#ea580c"]),
  },
  {
    id: "aqua",
    label: "Aqua",
    class: "from-cyan-500 to-blue-500",
    generatedColors: generateColors(["#06b6d4", "#3b82f6"]),
  },
  {
    id: "berry",
    label: "Berry",
    class: "from-purple-700 to-pink-700",
    generatedColors: generateColors(["#6b21a8", "#be185d"]),
  },
  {
    id: "sand",
    label: "Sand",
    class: "from-yellow-400 to-orange-400",
    generatedColors: generateColors(["#facc15", "#f97316"]),
  },
  {
    id: "grape",
    label: "Grape",
    class: "from-violet-600 to-indigo-700",
    generatedColors: generateColors(["#5b21b6", "#4338ca"]),
  },
  {
    id: "tropical",
    label: "Tropical",
    class: "from-lime-500 to-yellow-500",
    generatedColors: generateColors(["#84cc16", "#eab308"]),
  },
  {
    id: "blush",
    label: "Blush",
    class: "from-pink-400 to-rose-500",
    generatedColors: generateColors(["#f472b6", "#f43f5e"]),
  },
  {
    id: "sunrise",
    label: "Sunrise",
    class: "from-red-500 to-orange-500",
    generatedColors: generateColors(["#ef4444", "#f97316"]),
  },
  {
    id: "cool",
    label: "Cool",
    class: "from-blue-400 to-cyan-400",
    generatedColors: generateColors(["#60a5fa", "#22d3ee"]),
  },
  {
    id: "rosewood",
    label: "Rosewood",
    class: "from-rose-600 to-red-600",
    generatedColors: generateColors(["#e11d48", "#dc2626"]),
  },
  {
    id: "charcoal",
    label: "Charcoal",
    class: "from-gray-700 to-gray-900",
    generatedColors: generateColors(["#374151", "#111827"]),
  },
];

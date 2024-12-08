import { generateColors } from "./colors";
import { ChoiceDefinition, ThemeDefinition } from "./types";

export const SUPPORTED_THEMES: ThemeDefinition[] = [
  {
    id: "sky",
    label: "Sky Color",
    class: "from-sky-400 to-blue-400",
    generatedColors: generateColors(["#38bdf8", "#3b82f6"]),
  },
  {
    id: "sunset",
    label: "Sunset",
    class: "from-orange-400 to-pink-500",
    generatedColors: generateColors(["#fb923c", "#ec4899"]),
  },
  {
    id: "forest",
    label: "Forest",
    class: "from-green-500 to-teal-400",
    generatedColors: generateColors(["#22c55e", "#2dd4bf"]),
  },
  {
    id: "lavender",
    label: "Lavender",
    class: "from-purple-400 to-violet-500",
    generatedColors: generateColors(["#a78bfa", "#8b5cf6"]),
  },
  {
    id: "ocean",
    label: "Ocean",
    class: "from-blue-500 to-teal-500",
    generatedColors: generateColors(["#3b82f6", "#14b8a6"]),
  },
  {
    id: "peach",
    label: "Peach",
    class: "from-pink-300 to-orange-300",
    generatedColors: generateColors(["#f9a8d4", "#fdba74"]),
  },
  {
    id: "midnight",
    label: "Midnight",
    class: "from-gray-700 to-gray-900",
    generatedColors: generateColors(["#374151", "#111827"]),
  },
  {
    id: "flamingo",
    label: "Flamingo",
    class: "from-rose-400 to-pink-500",
    generatedColors: generateColors(["#fb7185", "#ec4899"]),
  },
  {
    id: "mint",
    label: "Mint",
    class: "from-teal-300 to-green-400",
    generatedColors: generateColors(["#5eead4", "#4ade80"]),
  },
  {
    id: "citrus",
    label: "Citrus",
    class: "from-yellow-400 to-orange-500",
    generatedColors: generateColors(["#facc15", "#f97316"]),
  },
  {
    id: "aqua",
    label: "Aqua",
    class: "from-cyan-400 to-blue-400",
    generatedColors: generateColors(["#22d3ee", "#60a5fa"]),
  },
  {
    id: "berry",
    label: "Berry",
    class: "from-purple-600 to-pink-600",
    generatedColors: generateColors(["#9333ea", "#db2777"]),
  },
  {
    id: "sand",
    label: "Sand",
    class: "from-yellow-300 to-orange-300",
    generatedColors: generateColors(["#fde68a", "#fbbf24"]),
  },
  {
    id: "grape",
    label: "Grape",
    class: "from-violet-500 to-indigo-600",
    generatedColors: generateColors(["#8b5cf6", "#6366f1"]),
  },
  {
    id: "tropical",
    label: "Tropical",
    class: "from-lime-400 to-yellow-400",
    generatedColors: generateColors(["#a3e635", "#fde047"]),
  },
  {
    id: "blush",
    label: "Blush",
    class: "from-pink-300 to-rose-400",
    generatedColors: generateColors(["#f9a8d4", "#fb7185"]),
  },
  {
    id: "sunrise",
    label: "Sunrise",
    class: "from-red-400 to-orange-400",
    generatedColors: generateColors(["#f87171", "#fb923c"]),
  },
  {
    id: "cool",
    label: "Cool",
    class: "from-blue-300 to-cyan-300",
    generatedColors: generateColors(["#93c5fd", "#67e8f9"]),
  },
  {
    id: "rosewood",
    label: "Rosewood",
    class: "from-rose-500 to-red-500",
    generatedColors: generateColors(["#f43f5e", "#ef4444"]),
  },
  {
    id: "charcoal",
    label: "Charcoal",
    class: "from-gray-600 to-gray-800",
    generatedColors: generateColors(["#4b5563", "#1f2937"]),
  },
];

export const SUPPORTED_PADDING_CHOICES: ChoiceDefinition[] = [
  {
    id: "small",
    label: "16",
    class: "p-4",
  },
  {
    id: "medium",
    label: "20",
    class: "p-5",
  },
  {
    id: "large",
    label: "24",
    class: "p-6",
  },
  {
    id: "extra-large",
    label: "28",
    class: "p-7",
  },
];

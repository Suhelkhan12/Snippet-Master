/**
 * Calculates the luminance of a color based on its RGB values.
 * The luminance is calculated using the standard formula for relative luminance in the sRGB color space.
 * This function takes into account the gamma correction applied to the RGB values.
 *
 * @param r - The red component of the color (between 0 and 255).
 * @param g - The green component of the color (between 0 and 255).
 * @param b - The blue component of the color (between 0 and 255).
 *
 * @returns A number representing the luminance of the color. The value is between 0 (darkest) and 1 (brightest).
 *
 * @example
 * const lum = luminance(255, 0, 0); // luminance of pure red
 * console.log(lum); // Output: 0.2126
 */
function luminance(r: number, g: number, b: number): number {
  r /= 255;
  g /= 255;
  b /= 255;

  return (
    0.2126 * (r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4) +
    0.7152 * (g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4) +
    0.0722 * (b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4)
  );
}

/**
 * Calculates the contrast ratio between two colors based on their luminance.
 * The contrast ratio is calculated using the formula defined by the WCAG (Web Content Accessibility Guidelines).
 * It helps to determine the readability of text or elements against a background color.
 *
 * @param r1 - The red component of the first color (between 0 and 255).
 * @param g1 - The green component of the first color (between 0 and 255).
 * @param b1 - The blue component of the first color (between 0 and 255).
 * @param r2 - The red component of the second color (between 0 and 255).
 * @param g2 - The green component of the second color (between 0 and 255).
 * @param b2 - The blue component of the second color (between 0 and 255).
 *
 * @returns A number representing the contrast ratio between the two colors. The value is typically between 1 (no contrast) and 21 (maximum contrast).
 *
 * @example
 * const contrast = calculateContastRatio(255, 255, 255, 0, 0, 0);
 * console.log(contrast); // Output: 21 (maximum contrast between white and black)
 */
function calculateContastRatio(
  r1: number,
  g1: number,
  b1: number,
  r2: number,
  g2: number,
  b2: number
) {
  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);

  return l1 > l2 ? (l1 + 0.5) / (l2 + 0.5) : (l2 + 0.5) / (l1 + 0.5);
}

/**
 * Converts a hex color code to its RGB equivalent.
 * The function accepts both 3-character and 6-character hex color codes.
 * It also handles hex codes with or without the '#' prefix and ignores any non-alphanumeric characters (e.g., dashes, periods).
 *
 * @param hex - The hex color code as a string. It may include the '#' prefix and can be 3 or 6 characters long.
 *
 * @returns An array containing the RGB components of the color. The array will have 3 elements: [r, g, b], where each is an integer between 0 and 255.
 *          If the hex code is invalid, it returns [0, 0, 0].
 *
 * @example
 * const rgb = hexToRgb("#FF5733");
 * console.log(rgb); // Output: [255, 87, 51]
 *
 * const rgbShort = hexToRgb("#F53");
 * console.log(rgbShort); // Output: [255, 85, 51]
 */
function hexToRgb(hex: string): number[] {
  hex = hex.replace(/^#/, "").replace(/[-.]/g, "");

  if (hex.length !== 3 && hex.length !== 6) return [0, 0, 0];

  if (hex.length === 6)
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

/**
 * Converts RGB values to a hex color code.
 * This function ensures that each RGB component is within the valid range (0 to 255) before converting it to hex.
 *
 * @param r - The red component of the color (between 0 and 255).
 * @param g - The green component of the color (between 0 and 255).
 * @param b - The blue component of the color (between 0 and 255).
 *
 * @returns A string representing the hex color code (e.g., "#FF5733").
 *
 * @example
 * const hex = rgbToHex(255, 87, 51);
 * console.log(hex); // Output: "#FF5733"
 */
function rgbToHex(r: number, g: number, b: number): string {
  const rc = Math.max(0, Math.min(255, r));
  const gc = Math.max(0, Math.min(255, g));
  const bc = Math.max(0, Math.min(255, b));

  return "#" + componentToHex(rc) + componentToHex(gc) + componentToHex(bc);
}

/**
 * Converts a single RGB component (0-255) to its 2-digit hexadecimal string representation.
 *
 * @param c - The RGB component to convert, which must be an integer between 0 and 255.
 *
 * @returns A 2-character string representing the hexadecimal value of the RGB component.
 *          If the value is a single digit (less than 16), it will be padded with a leading "0".
 *
 * @example
 * const hex = componentToHex(255);
 * console.log(hex); // Output: "ff"
 *
 * const hex = componentToHex(5);
 * console.log(hex); // Output: "05"
 */
function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Modifies the saturation and lightness values of an array of HSL colors.
 *
 * This function takes an array of HSL color strings and modifies the saturation and lightness
 * based on the corresponding values provided in the `saturationValues` and `lightnessValues` arrays.
 *
 * @param hslColors - An array of HSL color strings in the format `hsl(hue, saturation%, lightness%)`.
 * @param saturationValues - An array of saturation values (in percentage) to apply to each corresponding HSL color.
 * @param lightnessValues - An array of lightness values (in percentage) to apply to each corresponding HSL color.
 *
 * @returns An array of modified HSL color strings with updated saturation and lightness values.
 *
 * @example
 * const hslColors = ["hsl(120, 50%, 50%)", "hsl(240, 60%, 60%)"];
 * const saturationValues = [70, 80];
 * const lightnessValues = [40, 50];
 * const modifiedColors = modifyColors(hslColors, saturationValues, lightnessValues);
 * console.log(modifiedColors);
 *  Output: ["hsl(120, 70%, 40%)", "hsl(240, 80%, 50%)"]
 */
function modifyColors(
  hslColors: string[],
  saturationValues: number[],
  lightnessValues: number[]
): string[] {
  const modifiedHslColors: string[] = [];

  for (let i = 0; i < hslColors.length; i++) {
    const hslColor = hslColors[i];
    const saturationValue = saturationValues[i];
    const lightnessValue = lightnessValues[i];

    // Use regex with optional whitespace trimming and validate the match
    const match = hslColor.match(
      /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/
    );

    if (match) {
      const currentHue = match[1]; // Extract the hue value
      const modifiedHslColor = `hsl(${currentHue}, ${saturationValue}%, ${lightnessValue}%)`;

      modifiedHslColors.push(modifiedHslColor);
    } else {
      console.error(`Invalid HSL format: ${hslColor}`);
    }
  }

  return modifiedHslColors;
}

/**
 * Converts a CSS color string (either RGB or RGBA) to an RGB array.
 *
 * This function parses a CSS color string in the format `rgb(r, g, b)` or `rgba(r, g, b, a)`,
 * and returns the RGB values as an array of numbers.
 *
 * @param cssColor - A CSS color string in the form of `rgb(r, g, b)` or `rgba(r, g, b, a)`.
 *
 * @returns An array of three integers representing the RGB components of the color.
 *
 * @throws Error if the input string is not a valid RGB or RGBA color.
 *
 * @example
 * const rgb = cssColorsToRgb("rgb(255, 0, 0)");
 * console.log(rgb); // Output: [255, 0, 0]
 *
 * const rgba = cssColorsToRgb("rgba(255, 0, 0, 0.5)");
 * console.log(rgba); // Output: [255, 0, 0]
 */
function cssColorsToRgb(cssColor: string): number[] {
  const matches = cssColor.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/
  );

  if (!matches) {
    throw new Error(`Invalid color string: ${cssColor}`);
  }

  return [
    parseInt(matches[1], 10),
    parseInt(matches[2], 10),
    parseInt(matches[3], 10),
  ];
}

/**
 * Converts an array of HEX color strings to HSL format and modifies the saturation and lightness values.
 *
 * This function takes an array of HEX color strings, converts each color to HSL format,
 * and then applies modifications to the saturation and lightness of each color based on predefined values.
 *
 * @param colors - An array of HEX color strings in the format `#RRGGBB`.
 *
 * @returns An array of modified HSL color strings with adjusted saturation and lightness values.
 *
 * @example
 * const hexColors = ["#ff5733", "#33c1ff", "#5e33ff"];
 * const modifiedHslColors = convertToHsl(hexColors);
 * console.log(modifiedHslColors); // Output: [ "hsl(9, 70%, 90%)", "hsl(197, 80%, 80%)", "hsl(249, 90%, 65%)"]
 */
function convertToHsl(colors: string[]): string[] {
  const hslColors: string[] = [];

  for (const color of colors) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const rNormalised = r / 255;
    const gNormalised = g / 255;
    const bNormalised = b / 255;

    const max = Math.max(rNormalised, gNormalised, bNormalised);
    const min = Math.min(rNormalised, gNormalised, bNormalised);

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max != min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h =
        max === rNormalised
          ? (gNormalised - bNormalised) / d +
            (gNormalised < bNormalised ? 6 : 0)
          : max === gNormalised
          ? (bNormalised - rNormalised) / d + 2
          : (rNormalised - gNormalised) / d + 4;
      h /= 6;
    }

    hslColors.push(
      `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
        l * 100
      )}%)`
    );
  }
  return modifyColors(hslColors, [70, 80, 90, 100, 30], [90, 80, 65, 50, 40]);
}

export function generateColors(colors: string[]): string[] {
  let avgR = 0;
  let avgG = 0;
  let avgB = 0;

  const [rRef, gRef, bRef] = cssColorsToRgb("rgba(0,0,0,0.7)");

  if (colors.length > 0) {
    let totalR = 0;
    let totalG = 0;
    let totalB = 0;

    colors.forEach((color) => {
      const [r, g, b] = hexToRgb(color);
      totalR += r;
      totalG += g;
      totalB += b;
    });

    avgR = Math.floor(totalR / colors.length);
    avgG = Math.floor(totalG / colors.length);
    avgB = Math.floor(totalB / colors.length);
  } else {
    avgB = 0;
    avgG = 0;
    avgR = 0;
  }

  let color3 = rgbToHex(avgR + 20, avgG - 20, avgB - 20);
  let color4 = rgbToHex(avgR - 20, avgG + 20, avgB + 20);
  let color5 = rgbToHex(avgR + 10, avgG + 10, avgB - 30);
  let color6 = rgbToHex(avgR - 30, avgG - 10, avgB + 10);
  let color7 = rgbToHex(avgR + 20, avgG - 10, avgB + 20);

  const minContrastRatio: number = 7;

  [color3, color4, color5, color6, color7] = [
    color3,
    color4,
    color5,
    color6,
    color7,
  ].map((color) => {
    const [r, g, b] = hexToRgb(color);
    const constrastRatio = calculateContastRatio(r, g, b, rRef, gRef, bRef);

    if (constrastRatio < minContrastRatio) {
      const factor = (minContrastRatio + 0.05) / constrastRatio;
      return rgbToHex(
        Math.min(255, Math.max(0, Math.round(r * factor))),
        Math.min(255, Math.max(0, Math.round(g * factor))),
        Math.min(255, Math.max(0, Math.round(b * factor)))
      );
    } else return color;
  });

  const hslColors = convertToHsl([color3, color4, color5, color6, color7]);
  console.log({ hsl: hslColors });
  const adjustedColor = modifyColors(
    hslColors,
    [100, 93, 98, 100, 91],
    [90, 80, 70, 60, 50]
  );

  const shiftedColor = shiftHue(adjustedColor);
  return [...adjustedColor, ...shiftedColor];
}

export function shiftHue(colors: string[]): string[] {
  const shiftedColors = [];

  for (const degree of [-45, 45]) {
    for (const color of colors) {
      const match = color.match(
        /hsl\((\d+), (\d+)%, (\d+)%\)/
      ) as RegExpMatchArray;

      const hue = match[1];
      const saturation = match[2];
      const lightness = match[3];

      const shiftedHue = (parseInt(hue, 10) + degree) % 360;
      const shiftedColor = `hsl(${shiftedHue}, ${saturation}%, ${lightness}%)`;

      shiftedColors.push(shiftedColor);
    }
  }

  return shiftedColors;
}

export function hslToHsla(color: string, a: number): string {
  const values = color.match(/^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/);

  if (!values) {
    throw new Error(`Invalid HSL color: ${color}`);
  }

  const h = parseInt(values[1], 10);
  const s = parseInt(values[2], 10);
  const l = parseInt(values[3], 10);

  a = Math.max(0, Math.min(1, a));

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

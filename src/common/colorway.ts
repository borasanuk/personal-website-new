export type Colorway = {
  border?: string;
  background?: string;
  text?: string;
  shadow?: string;
  hoverShadow?: string;
};

export const getColorwayClasses = (colorway?: Colorway): string => {
  if (!colorway) {
    return "";
  }
  return (
    " border-" +
    colorway.border +
    " bg-" +
    colorway.background +
    " text-" +
    colorway.text +
    " shadow-" +
    colorway.shadow +
    " hover-shadow-" +
    colorway.hoverShadow +
    " "
  );
};

export const colors = [
  "pink",
  "peach",
  "yellow",
  "tan",
  "blue",
  "snow",
  "lime",
  "olive",
];

export const colorValues = {
  pinkLighter: "#ffefef",
  pink: "#edc5c5",
  pinkDarker: "#98375e",

  oliveLighter: "#edf9e2",
  olive: "#c4d3b5",
  oliveDarker: "#5c7444",

  limeLighter: "#eafce5",
  lime: "#d1f9c6",
  limeDarker: "#516a5c",

  yellowLighter: "#fff2d4",
  yellow: "#fbe6b4",
  yellowDarker: "#805a00",

  peachLighter: "#ffece3",
  peach: "#fbac8b",
  peachDarker: "#a33326",

  tanLighter: "#fff6dc",
  tan: "#fcf0cd",
  tanDarker: "#fc934e",

  blueLighter: "#f0f5ff",
  blue: "#b9daff",
  blueDarker: "#003f76",

  snowLighter: "#f8f8fb",
  snow: "#f2f8ff",
  snowDarker: "#222222",
};

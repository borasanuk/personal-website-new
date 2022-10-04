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

export const colorValues = {
  pink: "#edc5c5",
  pinkDarker: "#98375e",
  olive: "#c4d3b5",
  oliveDarker: "#5c7444",
  lime: "#d1f9c6",
  limeDarker: "#516a5c",
  yellow: "#fbe6b4",
  yellowDarker: "#a67504",
  peach: "#fbac8b",
  peachDarker: "#a33326",
  tan: "#fcf0cd",
  tanDarker: "#fa9c5d",
  snow: "#f9f7f3",
  snowDarker: "#222222",
};

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
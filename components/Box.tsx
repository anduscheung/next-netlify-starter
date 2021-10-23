import React, { FC } from "react";

type Fonts = "playfair" | "roboto" | "quicksand" | "nunito" | "robotoCondensed";

const fontMap = (font?: Fonts): string | undefined => {
  switch (font) {
    case "playfair":
      return "Playfair Display";
    case "roboto":
      return "sans-serif, Roboto";
    case "robotoCondensed":
      return "Roboto Condensed";
    case "quicksand":
      return "Quicksand";
    case "nunito":
      return "sans-serif, Nunito";
    default:
      return undefined;
  }
};
interface Box {
  className?: string;
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | undefined;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  lh?: string;
  font?: Fonts;
  fontSize?: number | string;
  weight?: "normal" | "bold" | "lighter" | "bolder" | number;
  color?: string;
  ls?: string | number;
  h?: number | string;
  w?: number | string;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  flex?: number;
  flexGrow?: number;
  flexDir?: "column" | "row" | "row-reverse" | "column-reverse" | undefined;
  bgc?: string;
  position?: "absolute" | "relative" | "fixed";
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  br?: number;
  maxWidth?: number;
  minWidth?: number;
  minHeight?: number | string;
  zIndex?: number;
  overflow?: string;
  boxShadow?: string;
  cursor?: string;
  onClick?: () => void;
  op?: string;
}

const Box: FC<Box> = ({
  className,
  children,
  lh,
  font,
  fontSize,
  color,
  weight,
  ls,
  alignItems,
  justifyContent,
  h,
  w,
  ml,
  mr,
  mt,
  mb,
  pl,
  pr,
  pt,
  pb,
  flex,
  flexDir,
  bgc,
  position,
  top,
  bottom,
  left,
  right,
  br,
  maxWidth,
  minWidth,
  minHeight,
  zIndex,
  overflow,
  boxShadow,
  cursor,
  onClick,
  op,
}) => {
  const fontFamily = fontMap(font);
  return (
    <div
      className={className}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: weight,
        lineHeight: lh,
        letterSpacing: ls,
        color: color,
        display: "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        height: h,
        width: w,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,
        flex: flex,
        flexDirection: flexDir,
        backgroundColor: bgc,
        position: position,
        top,
        bottom,
        left,
        right,
        borderRadius: br,
        maxWidth,
        minWidth,
        minHeight,
        zIndex,
        overflow,
        boxShadow,
        cursor,
        opacity: op,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;

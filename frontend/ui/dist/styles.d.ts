/// <reference types="react" />
export declare const PreviewLayoutBox: import("@emotion/styled").StyledComponent<
  import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    component?: import("react").ElementType<any>;
    ref?: import("react").Ref<unknown>;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
  } & import("@mui/material/OverridableComponent").CommonProps &
    Omit<
      Pick<
        import("react").DetailedHTMLProps<
          import("react").HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof import("react").HTMLAttributes<HTMLDivElement>
      > & {
        ref?: import("react").Ref<HTMLDivElement>;
      },
      | keyof import("@mui/material/OverridableComponent").CommonProps
      | (
          | "border"
          | "borderTop"
          | "borderRight"
          | "borderBottom"
          | "borderLeft"
          | "borderColor"
          | "borderRadius"
          | "display"
          | "displayPrint"
          | "overflow"
          | "textOverflow"
          | "visibility"
          | "whiteSpace"
          | "flexBasis"
          | "flexDirection"
          | "flexWrap"
          | "justifyContent"
          | "alignItems"
          | "alignContent"
          | "order"
          | "flex"
          | "flexGrow"
          | "flexShrink"
          | "alignSelf"
          | "justifyItems"
          | "justifySelf"
          | "gap"
          | "columnGap"
          | "rowGap"
          | "gridColumn"
          | "gridRow"
          | "gridAutoFlow"
          | "gridAutoColumns"
          | "gridAutoRows"
          | "gridTemplateColumns"
          | "gridTemplateRows"
          | "gridTemplateAreas"
          | "gridArea"
          | "bgcolor"
          | "color"
          | "zIndex"
          | "position"
          | "top"
          | "right"
          | "bottom"
          | "left"
          | "boxShadow"
          | "width"
          | "maxWidth"
          | "minWidth"
          | "height"
          | "maxHeight"
          | "minHeight"
          | "boxSizing"
          | "m"
          | "mt"
          | "mr"
          | "mb"
          | "ml"
          | "mx"
          | "my"
          | "p"
          | "pt"
          | "pr"
          | "pb"
          | "pl"
          | "px"
          | "py"
          | "margin"
          | "marginTop"
          | "marginRight"
          | "marginBottom"
          | "marginLeft"
          | "marginX"
          | "marginY"
          | "padding"
          | "paddingTop"
          | "paddingRight"
          | "paddingBottom"
          | "paddingLeft"
          | "paddingX"
          | "paddingY"
          | "typography"
          | "fontFamily"
          | "fontSize"
          | "fontStyle"
          | "fontWeight"
          | "letterSpacing"
          | "lineHeight"
          | "textAlign"
          | "textTransform"
        )
      | "ref"
      | "children"
      | "component"
      | "sx"
    > &
    import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>,
  {},
  {}
>;

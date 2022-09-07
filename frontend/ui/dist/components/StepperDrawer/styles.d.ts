/// <reference types="react" />
export declare const LargeDeviceDrawer: import("@emotion/styled").StyledComponent<import("@mui/material").DrawerProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Puller: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonClasses>;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    disabled?: boolean;
    disableElevation?: boolean;
    disableFocusRipple?: boolean;
    endIcon?: import("react").ReactNode;
    fullWidth?: boolean;
    href?: string;
    size?: "small" | "medium" | "large";
    startIcon?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
    variant?: "text" | "outlined" | "contained";
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions>;
    centerRipple?: boolean;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses>;
    disabled?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    focusVisibleClassName?: string;
    LinkComponent?: import("react").ElementType<any>;
    onFocusVisible?: import("react").FocusEventHandler<any>;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
    tabIndex?: number;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps>;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions>;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "tabIndex" | "color" | "sx" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "href" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const DrawerOpenBox: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    component?: import("react").ElementType<any>;
    ref?: import("react").Ref<unknown>;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "ref" | "sx" | "component" | ("p" | "color" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxShadow" | "boxSizing" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "zIndex" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "overflow" | "padding" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint")> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const DrawerClosedBox: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    component?: import("react").ElementType<any>;
    ref?: import("react").Ref<unknown>;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "ref" | "sx" | "component" | ("p" | "color" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxShadow" | "boxSizing" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "zIndex" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "overflow" | "padding" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint")> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;

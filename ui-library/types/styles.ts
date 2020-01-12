export interface IButton {
  variant?: string;
  height?: string;
  width?: string;
}

export interface ICard {
  z: number;
  noPadding?: boolean;
  noMargin?: boolean;
}

export interface ICheckBox {
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export interface IGrid {
  width?: number;
  withFlex: boolean;
}

export interface IIconType {
  size?: number;
  inverted?: boolean;
}

export interface ITextFieldStyle {
  showShadow?: boolean;
  isFocused?: boolean;
  withBorder?: boolean;
  height?: string;
  width?: string;
}

export interface ITypography {
  type: string;
  color?: string;
}

export interface ITextInputStyle {
  placeholderColor?: string;
}

export interface IAvatarStyle {
  zIndex?: number;
  marginLeft?: number;
  height?: string;
  width?: string;
}

export interface IAvatarStackWrapperStyle {}

export interface IRippleWrapperStyle {}

export interface IRippleContainerStyle {}

export interface IDrawerChildStyle {
  width?: string;
}

export interface IBottomTopModalWrapperStyle {}

export interface IBottomTopModalOverlayStyle {}

export interface ICollapseWrapperStyle {}

export interface ICollapseContentStyle {}

export interface ICollapseTitleStyle {}

export interface ITextAreaStyles {
  height?: string;
  width?: string;
  showShadow?: boolean;
  isFocused?: boolean;
  placeholderColor?: string;
}

export interface ISelectStyle {}

export interface IOptionStyle {
  isSelected?: boolean;
}

export interface IDrawerStyle {
  width?: string;
}

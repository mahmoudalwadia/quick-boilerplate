import React, { CSSProperties } from 'react';

export interface IButton {
  variant?: string;
  style?: CSSProperties;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  height?: string;
  width?: string;
}

export interface ICard {
  z: number;
  noPadding?: boolean;
  noMargin?: boolean;
}

export interface ICheckBox {
  onClick?: Function;
  labelProps?: object;
  label?: string;
  checked?: boolean;
}

export interface IIconType {
  use: string;
  size: number;
  inverted?: boolean;
  className?: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
}

export interface ITextField {
  showShadow?: boolean;
  value?: string;
  type?: 'text' | 'password';
  placeholder?: any;
  placeholderColor?: string;
  onChange?: Function;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onFocus?: Function;
  onBlur?: Function;
  disabled?: boolean;
  style?: CSSProperties;
  height?: string;
  width?: string;
}

export interface ITypography {
  id?: string;
  type: string;
  color?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export interface IAvatar {
  src: string;
  alt: string;
  zIndex?: number;
  marginLeft?: number;
  style?: CSSProperties;
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

export interface IAvatarStack {
  avatars: Array<IAvatar>;
  imgStyle?: CSSProperties;
  marginLeft?: number;
  maxNumber: number;
}

export interface IPasswordInput extends ITextField {}

export interface IPasswordInputIcon {
  visible: boolean;
  toggleVisible: Function;
}

export interface IRipple {
  children: React.ReactNode;
  style?: CSSProperties;
}

export interface IDrawer {
  open: boolean;
  onClose: Function;
  children?: React.ReactNode;
  width: string;
  placement?: string;
}

export interface IBottomTopModal {
  open: boolean;
  onClose: Function;
  children?: React.ReactNode;
}

export interface ICollapse {
  title?: string | React.ElementType;
  children: (ref: object) => React.ReactNode;
}

export interface ITextArea {
  value?: string;
  onChange?: Function;
  style?: CSSProperties;
  onFocus?: Function;
  onBlur?: Function;
  showShadow?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  height?: string;
  width?: string;
}

export interface ISelect {
  options: Array<IOption>;
  value?: string;
  onChange?: Function;
  label?: string;
  inputProps?: ITextField;
  renderOption?: (option: IOption) => React.ReactNode;
}

export interface IOption {
  label?: string;
  value?: string;
  onClick?: Function;
  isSelected?: boolean;
  renderOption?: (option: {
    label?: string;
    value?: string;
  }) => React.ReactNode;
}

export interface IFab {
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IMenu {
  title?: React.ReactNode | string;
  children?: React.ReactNode | Array<React.ReactNode>;
}

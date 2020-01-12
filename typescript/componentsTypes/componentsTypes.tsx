import { ReactNode } from 'react';

export interface IFooterList {
  title: string;
  list: { id: number; label: string; to: string }[];
}

export interface ICustomLink {
  href: string;
  color?: string;
  noUnderline?: boolean;
}

export interface IHeader { }

export interface INavbarLinks {
  column?: boolean;
  itemProps?: {
    mb?: string | number;
    mt?: string | number;
    height?: string | number;
    borderBottom?: string;
  };
}

export interface IFooter { }

export interface ITextField {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  onFocus?: Function;
  onBlur?: Function;
  placeholder?: string;
  placeholderColor?: string;
}

export interface INavbarDrawer {
  open: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: ReactNode;
  title?: ReactNode | string;
}

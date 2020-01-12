import React, { FC, ChangeEvent, FocusEvent, useState } from 'react';

import { componentsTypes } from '../../types';

import { Wrapper, TextInput, IconWrapper } from './styles';

/**
 * @author Mahmoud
 * @prop onChange, Function
 * @prop type, string, decide input type
 * @prop value, string
 * @prop placeholder, string
 * @prop placeholderColor, string
 * @prop showShadow, boolean, used to control shadow styles
 * @prop onFocus, Function
 * @prop onBlur, Function
 * @prop leftIcon, ReactNode, used to show input's left icon
 * @prop rightIcon, ReactNode, ised to show input's right icon
 * @prop disabled, boolean
 * @prop style, object, css style object
 * @whenToUse when you need to collect text
 */
const TextField: FC<componentsTypes.ITextField> = ({
  onChange,
  type,
  value,
  placeholder,
  placeholderColor,
  showShadow,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  disabled,
  style,
  height,
  width
}) => {
  const [textValue, setTextValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (onChange) {
      onChange(value, e);
    }
    setTextValue(value);
  }

  function handleFocus(e: FocusEvent<HTMLDivElement>) {
    if (onFocus) {
      onFocus(e);
    }
    setIsFocused(true);
  }

  function handleBlur(e: FocusEvent<HTMLDivElement>) {
    if (onBlur) {
      onBlur(e);
    }
    setIsFocused(false);
  }

  return (
    <Wrapper
      showShadow={showShadow}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      height={height}
      width={width}
      style={style}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <TextInput
        type={type}
        value={textValue}
        onChange={handleChange}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        disabled={disabled}
      />
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Wrapper>
  );
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;

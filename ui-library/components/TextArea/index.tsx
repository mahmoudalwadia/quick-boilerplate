import React, { FC, ChangeEvent, FocusEvent, useState } from 'react';

import { componentsTypes } from '../../types';

import { TextAreaStyled } from './styles';

/**
 * @author Mahmoud
 * @prop onChange, Function
 * @prop value, string
 * @prop onFocus, Function
 * @prop onBlur, Function
 * @prop showShadow, boolean, decide whether to show shadow styles or not
 * @prop placeholder, string
 * @prop placeholderColor , string, placeholder color, used for styling placeholder
 * @prop height, string, text area height
 * @prop width, string, text area width
 * @whenToUse when you want to collect long texts
 */
const TextArea: FC<componentsTypes.ITextArea> = ({
  onChange,
  value,
  onFocus,
  onBlur,
  showShadow,
  placeholder,
  placeholderColor,
  height,
  width
}) => {
  const [textValue, setTextValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    if (onChange) {
      onChange(value, e);
    }
    setTextValue(value);
  }

  function handleFocus(e: FocusEvent<HTMLTextAreaElement>) {
    if (onFocus) {
      onFocus(e);
    }
    setIsFocused(true);
  }

  function handleBlur(e: FocusEvent<HTMLTextAreaElement>) {
    if (onBlur) {
      onBlur(e);
    }
    setIsFocused(false);
  }

  return (
    <TextAreaStyled
      showShadow={showShadow}
      isFocused={isFocused}
      placeholderColor={placeholderColor}
      height={height}
      width={width}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {textValue}
    </TextAreaStyled>
  );
};

export default TextArea;

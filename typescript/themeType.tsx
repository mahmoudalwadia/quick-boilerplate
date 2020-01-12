import styled, { CreateStyled } from '@emotion/styled';
import { theme } from '../config';

export type ITheme = typeof theme;

export default styled as CreateStyled<ITheme>;

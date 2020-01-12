import { css } from '@emotion/core';

export default {
  flex: css`
    display: flex;
  `,
  flexRow: css`
    flex-direction: row;
  `,
  flexColumn: css`
    flex-direction: column;
  `,
  justifyCenter: css`
    justify-content: center;
  `,
  justifyEnd: css`
    justify-content: flex-end;
  `,
  justifyBetween: css`
    justify-content: space-between;
  `,
  justifyAround: css`
    justify-content: space-around;
  `,
  alignCenter: css`
    align-items: center;
  `,
  alignStart: css`
    align-items: flex-start;
  `,
  alignEnd: css`
    align-items: flex-end;
  `,
  wrap: css`
    flex-wrap: wrap;
  `
};

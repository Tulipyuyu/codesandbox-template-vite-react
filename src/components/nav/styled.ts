import { css } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";

export const Styled: StyledComponent<any> = styled.div((...rest) => {
  console.log("rest : ", rest);
  return css`
    #nav {
      background: #006271;
      display: flex;
      height: 2.5rem;
      line-height: 2.5rem;
      color: white;
      .item {
        padding: 0 1rem;
        position: relative;
        cursor: pointer;
      }
      // 除了最后一个
      .item:not(:last-child)::after {
        content: "";
        width: 1px;
        height: 0.75rem;
        background: rgba(255, 255, 255, 0.6);
        z-index: 10;
        position: absolute;
        top: 0.85rem;
        right: 0;
      }
      .item:hover {
        font-weight: bold;
      }
    }
  `;
});

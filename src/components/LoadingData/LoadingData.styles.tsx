import styled from "styled-components";

export type LoadingDataProps = {
  isLoading: boolean;
};


export const LoadingContainer = styled.div<LoadingDataProps>`
  overflow: hidden;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  pointer-events: ${(props) => (props.isLoading ? "auto" : "none")};
  z-index:1000;
`;

import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media (max-width: 567px) {
    padding: 0;
  }
  @media (max-width: 1128px) {
    padding: 20px 0;
  }
`;

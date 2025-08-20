import styled from "@emotion/styled";

export const IntroCon = styled.div`

  margin-left: 32px;
  margin-right: 32px;

  text-align: center;

  & > h3 {
    margin-bottom: 24px;

    font-size: 40px;
    font-weight: 500;

    color: #3e2753;
  }

  & > p {
    font-size: 16px;
    line-height: 1.75;

    color: #a39da9;

    opacity: 0.8;
  }
   
  @media (min-width: 1280px){
  width: 445px;

  text-align: left;

  }
`;

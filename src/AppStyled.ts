import styled from "@emotion/styled";

export const AppStyled = styled.div`
position: relative;

  min-width: 325px;

  padding-top: 64px;
  padding-bottom: 64px;


  background-color: #fafafa;

  overflow: hidden;

  &::before{
    display: inline-block;

    width: 510px;
    height: 1080px;

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    transform: translate(-60%, -50%);

    background: linear-gradient(to right, #e844ff, #8739ff);

    border-radius: 255px;
  }

    &::after{
    display: inline-block;

    width: 510px;
    height: 1080px;

    content: "";

    position: absolute;

    top: 0;
    right: 0;

    transform: translate(60%, 40%);

    background: linear-gradient(to right, #e844ff, #8739ff);

    border-radius: 255px;

    opacity: 0.05;

    @media (min-width: 1280px){
        transform: translate(60%, 10%);
    }
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
  }
`;

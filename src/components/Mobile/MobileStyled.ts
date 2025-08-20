import styled from "@emotion/styled";

export const MobileCon = styled.div`
  position: relative;

  z-index: 5;

  width: 247px;

  margin-bottom: 64px;
  margin-left: 64px;
  margin-right: 64px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: #ffffff;

  border-radius: 30px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);


  &::before {
    position: absolute;

    top: 0;
    left: 50%;
    z-index: 5;

    transform: translate(-50%, 0);

    display: inline-block;

    width: 129px;
    height: 29px;

    content: "";

    background-color: #fff;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

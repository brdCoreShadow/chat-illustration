import styled from "@emotion/styled";

export const ChatCon = styled.div`
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const ChatList = styled.ul`
  margin-bottom: 16px;

  & > li:nth-of-type(1) {
    width: 128px;

    margin-bottom: 8px;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;

    color: #9341c8;

    background-color: #eee5f4;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }
  }

  & > li:nth-of-type(2) {
    width: 128px;

    margin-bottom: 16px;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;

    color: #9341c8;

    background-color: #eee5f4;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }
  }

  & > li:nth-of-type(3) {
    margin-bottom: 8px;
  }

  & > li:nth-of-type(4) {
    width: 128px;

    margin-bottom: 8px;
    margin-left: auto;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;

    color: #6e5d7e;

    background-color: #fff;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }
  }

  & > li:nth-of-type(5) {
    width: 128px;

    margin-bottom: 16px;
    margin-left: auto;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;

    color: #6e5d7e;

    background-color: #fff;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }
  }

  & > li:nth-of-type(6) {
    width: 128px;

    margin-bottom: 8px;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;

    color: #9341c8;

    background-color: #eee5f4;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }
  }

  & > li:nth-of-type(7) {
    position: relative;

    width: 160px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 8px;

    padding-top: 12px;
    padding-bottom: 10px;
    padding-left: 28px;
    padding-right: 16px;

    color: #fff;

    background: linear-gradient(to right, #e844ff, #8739ff);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }

    & > h5 {
      font-size: 12px;
      font-weight: 700;
      line-height: 1.1;
    }

    &::before {
      position: absolute;

      top: 50%;
      left: 0;

      transform: translate(8px, -50%);

      display: inline-block;

      width: 12px;
      height: 12px;

      content: "";

      background-color: transparent;

      border: 1px solid #e472ff;

      border-radius: 50%;
    }
  }

  & > li:nth-of-type(8) {
    position: relative;

    width: 160px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    padding-top: 12px;
    padding-bottom: 10px;
    padding-left: 28px;
    padding-right: 16px;

    color: #fff;

    background: linear-gradient(to right, #e844ff, #8739ff);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;

    & > p {
      font-size: 8px;
      line-height: 1.4;
    }

    & > h5 {
      font-size: 12px;
      font-weight: 700;
      line-height: 1.1;
    }

    &::before {
      position: absolute;

      top: 50%;
      left: 0;

      transform: translate(8px, -50%);

      display: inline-block;

      width: 12px;
      height: 12px;

      content: "";

      background-color: transparent;

      border: 1px solid #e472ff;

      border-radius: 50%;
    }
  }
`;

export const DogsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > li {
    width: 40px;
    height: 40px;

    border-radius: 10px;

    overflow: hidden;
  }

  & > li:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export const ChatForm = styled.form`
  position: relative;

  & > input {
    width: 100%;

    padding-top: 12px;
    padding-bottom: 10px;
    padding-left: 20px;

    font-size: 9px;
    letter-spacing: -0.07px;

    background-color: #fff;

    border: none;

    border-radius: 16px;

    &::placeholder {
      color: #c5c9cc;
    }
  }
`;

export const SubmitBtn = styled.button`
  position: absolute;

  top: 0;
  right: 0;

  width: 25px;
  height: 25px;

  transform: translate(-5px, 5px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3e2753;

  border-radius: 50%;
`;

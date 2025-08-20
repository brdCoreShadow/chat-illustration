import styled from "@emotion/styled";

import arrowIcon from "../../assets/images/arrowIcon.png";

export const DisplayHeaderCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;

  padding-top: 30px;
  padding-bottom: 12px;
  padding-left: 28px;
  padding-right: 16px;

  background: linear-gradient(#e844ff, #8739ff);

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const AvaFlexCon = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  &::before {
    position: absolute;

    top: 50%;
    left: 0;

    transform: translate(-8px, -50%);

    display: inline-block;

    width: 4px;
    height: 10px;

    content: "";

    background-image: url(${arrowIcon});
  }
`;

export const AvaThumb = styled.div`
  display: inline-block;

  width: 24px;
  height: 24px;

  margin-right: 8px;

  border: 1px solid #fff;

  border-radius: 50%;

  overflow: hidden;
`;

export const AvaContentCon = styled.div`
  & > h3 {
    margin-bottom: 2px;

    font-size: 11px;
    font-weight: 500;

    color: #fff;
  }

  & > p {
    font-size: 8px;

    color: #d99eff;

    opacity: 0.7;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  transform: rotate(90deg);
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-right: 2px;
  }

  & > div {
    display: inline-block;

    width: 2px;
    height: 2px;

    background-color: #d8d8d8;

    border-radius: 50%;
  }
`;

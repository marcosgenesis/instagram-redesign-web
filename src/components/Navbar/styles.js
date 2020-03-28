import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  z-index: 2;
  background: #111;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  input {
    border: none;
    height: 40px;
    border-radius: 30px;
    background: #2b2c34;
    padding: 10px;
    color: #9fa0a7;
    &::placeholder {
      text-align: center;
      font-weight: bold;
      color: #9fa0a7;
    }
  }
  img {
    height: 30px;
    width: 30px;
  }
`;
export const Actions = styled.div`
  display: flex;
  svg {
    display: block;
    margin-right: 15px;
    &:hover {
      color: #999;
      cursor: pointer;
    }
  }
  .newPost {
    width: 9vw;
    height: 40px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(
      to right,
      rgba(226, 57, 105, 1) 0%,
      rgba(253, 172, 73, 1) 100%
    );
    font-size: 15px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 5px 10px;
      font-size: 20px;
      border-radius: 50%;
      margin-right: 10px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

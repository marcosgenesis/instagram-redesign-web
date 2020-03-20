import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
`;
export const Feed = styled.div`
  width: 70vw;
  position: absolute;
  right: 0;
  margin-top: 200px;
  &::before {
    z-index: -99;
    content: "";
    align-self: flex-end;
    position: absolute;
    right: 0;
    width: 60vw;
    height: 2000px;
    border-top-left-radius: 400px;
    border: 1px solid #fff;
  }
  #feedTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 40px;
    }
  }
`;

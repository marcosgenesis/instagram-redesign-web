import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  ul {
    margin-top: 200px;
    padding: 0px 40px;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::after {
      content: "";
      position: absolute;
      top: 0px;
      transform: translateX(-70%);
      width: 44vw;
      height: 80vh;
      border-radius: 50%;
      border: 1px solid #9fa0a7;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 10px;
        color: white;
        font-size: 18px;
      }
    }
  }
`;
export const Profiles = styled.div`
  padding: 10px 0;
  .profile {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

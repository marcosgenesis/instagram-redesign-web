import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  .profile {
    display: flex;
    align-items: center;
    img {
      margin: 10px 10px 10px 0px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p {
      font-weight: bold;
    }
  }
`;
export const PostContent = styled.div`
  display: flex;
  .photo {
    svg {
      width: 20px;
      height: 20px;
    }
    img {
      max-width: 800px;
      border-radius: 10px;
    }
    .info {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      p {
        color: #424242;
        margin-left: 170px;
      }
      .save-more-hour {
        display: flex;
      }
    }
  }
  .comments {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-right: 20px;
    .description {
      font-size: 18px;
    }
    ul {
      li {
        padding: 10px;
      }
    }
    .newComment {
      padding: 20px;
      margin-top: 20px;
      display: flex;
      .group {
        position: relative;
        label {
          color: #424242;
          font-size: 16px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          transition: $trans-time ease all;
        }
        input {
          background: none;
          color: #333;
          font-size: 18px;
          padding: 10px 10px 10px 5px;
          display: block;
          width: 320px;
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #424242;
          &:focus {
            outline: none;
          }
          &:focus ~ label,
          &:valid ~ label {
            top: -14px;
            font-size: 12px;
            color: rgba(226, 57, 105, 1);
          }
          &:focus ~ .bar:before {
            width: 320px;
          }
        }

        .bar {
          position: relative;
          display: block;
          width: 320px;
          &:before {
            content: "";
            height: 2px;
            width: 0;
            bottom: 0px;
            position: absolute;
            background: rgba(226, 57, 105, 1);
            transition: 300ms ease all;
            left: 0%;
          }
        }
      }
      button {
        margin-left: 10px;
        width: 7vw;
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
      }
    }
  }
`;

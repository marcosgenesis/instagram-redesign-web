import styled, { css } from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";
export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.div`
  position: relative;
  background: none;
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 7px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(226, 57, 105, 1);
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  top: calc(100% + 20px);
  left: calc(50% - 130px);
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 10px;
  border-radius: 5px;
  display: ${props => (props.visible ? "block" : "none")};
  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 25px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.7);
  }
`;
export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 15px 10px;
`;
export const Notification = styled.div`
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #fff;
    opacity: 0.6;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(226, 57, 105, 1);
        border-radius: 50%;
      }
    `}
`;

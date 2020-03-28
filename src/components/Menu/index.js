import React, { useEffect } from "react";
import anime from "animejs";

import {} from "react-icons/fi";
import { Container, Profiles } from "./styles";
import perfil from "../../assets/perfil.jpg";

export default function Menu() {
  useEffect(() => {
    anime({
      targets: ".item",
      translateX: [-64, 0],
      delay: function(el, i, l) {
        return i * 100;
      }
    });
  }, []);
  return (
    <Container>
      <ul>
        <li className="item">
          <svg width="50" height="50" viewBox="0 0 69 69" fill="#9FA0A7">
            <g transform="translate(-910.036 -337.581)">
              <path
                class="a"
                d="M944.536,341.581a30.5,30.5,0,1,1-30.5,30.5,30.534,30.534,0,0,1,30.5-30.5m0-4a34.5,34.5,0,1,0,34.5,34.5,34.5,34.5,0,0,0-34.5-34.5Z"
              />
              <path
                class="a"
                d="M952.128,386.1h-.03l-28.254-.424a2,2,0,0,1-1.716-2.976l13.181-23.577a2,2,0,0,1,1.743-1.024l28.143-.045h0a2,2,0,0,1,1.757,2.955l-13.07,24.046A2,2,0,0,1,952.128,386.1Zm-24.873-4.374,23.693.355,10.884-20.022-23.6.038Z"
              />
              <circle
                class="a"
                cx="3.884"
                cy="3.884"
                r="3.884"
                transform="translate(940.652 367.985)"
              />
            </g>
          </svg>
          <p>Home</p>
        </li>
        <li className="item">
          <svg width="50" height="50" viewBox="0 0 69 69" fill="#9FA0A7">
            <g transform="translate(-910.036 -337.581)">
              <path
                class="a"
                d="M944.536,341.581a30.5,30.5,0,1,1-30.5,30.5,30.534,30.534,0,0,1,30.5-30.5m0-4a34.5,34.5,0,1,0,34.5,34.5,34.5,34.5,0,0,0-34.5-34.5Z"
              />
              <path
                class="a"
                d="M952.128,386.1h-.03l-28.254-.424a2,2,0,0,1-1.716-2.976l13.181-23.577a2,2,0,0,1,1.743-1.024l28.143-.045h0a2,2,0,0,1,1.757,2.955l-13.07,24.046A2,2,0,0,1,952.128,386.1Zm-24.873-4.374,23.693.355,10.884-20.022-23.6.038Z"
              />
              <circle
                class="a"
                cx="3.884"
                cy="3.884"
                r="3.884"
                transform="translate(940.652 367.985)"
              />
            </g>
          </svg>
          <p>Popular</p>
        </li>
        <li className="item">
          <svg width="50" height="50" viewBox="0 0 69 69" fill="#9FA0A7">
            <g transform="translate(-910.036 -337.581)">
              <path
                class="a"
                d="M944.536,341.581a30.5,30.5,0,1,1-30.5,30.5,30.534,30.534,0,0,1,30.5-30.5m0-4a34.5,34.5,0,1,0,34.5,34.5,34.5,34.5,0,0,0-34.5-34.5Z"
              />
              <path
                class="a"
                d="M952.128,386.1h-.03l-28.254-.424a2,2,0,0,1-1.716-2.976l13.181-23.577a2,2,0,0,1,1.743-1.024l28.143-.045h0a2,2,0,0,1,1.757,2.955l-13.07,24.046A2,2,0,0,1,952.128,386.1Zm-24.873-4.374,23.693.355,10.884-20.022-23.6.038Z"
              />
              <circle
                class="a"
                cx="3.884"
                cy="3.884"
                r="3.884"
                transform="translate(940.652 367.985)"
              />
            </g>
          </svg>
          <p>Stories</p>
        </li>
        <li className="item">
          <svg width="50" height="50" viewBox="0 0 69 69" fill="#9FA0A7">
            <g transform="translate(-910.036 -337.581)">
              <path
                class="a"
                d="M944.536,341.581a30.5,30.5,0,1,1-30.5,30.5,30.534,30.534,0,0,1,30.5-30.5m0-4a34.5,34.5,0,1,0,34.5,34.5,34.5,34.5,0,0,0-34.5-34.5Z"
              />
              <path
                class="a"
                d="M952.128,386.1h-.03l-28.254-.424a2,2,0,0,1-1.716-2.976l13.181-23.577a2,2,0,0,1,1.743-1.024l28.143-.045h0a2,2,0,0,1,1.757,2.955l-13.07,24.046A2,2,0,0,1,952.128,386.1Zm-24.873-4.374,23.693.355,10.884-20.022-23.6.038Z"
              />
              <circle
                class="a"
                cx="3.884"
                cy="3.884"
                r="3.884"
                transform="translate(940.652 367.985)"
              />
            </g>
          </svg>
          <p>IGTV</p>
        </li>
      </ul>
      <Profiles>
        <div className="profile">
          <img src={perfil} alt="" />
        </div>
      </Profiles>
    </Container>
  );
}

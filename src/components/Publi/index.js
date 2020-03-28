import React from "react";

import { Container, PostContent } from "./styles";
import perfil from "../../assets/perfil.jpg";
import salvar from "../../assets/salvar.svg";
export default function Post() {
  return (
    <Container>
      <div className="profile">
        <img src={perfil} alt="" />
        <p>Marcos</p>
      </div>
      <PostContent>
        <div className="photo">
          <img src="https://source.unsplash.com/user/erondu/1600x900" alt="" />
          <div className="info">
            <div className="save-more-hour">
              <svg stroke="#fff" stroke-width="10" viewBox="0 0 149 171.21">
                <path
                  class="cls-1"
                  d="M122.8,163.62,96.3,128.16c-12-16.1-31.56-16.1-43.6,0L26.2,163.62C17.27,175.57,2,167.11,2,150.21V21C2,10.49,8.35,2,16.18,2H132.82C140.65,2,147,10.49,147,21V150.21C147,167.11,131.73,175.57,122.8,163.62Z"
                />
              </svg>
              <svg viewBox="0 0 21 78" fill="#fff">
                <circle class="cls-1" cx="10.5" cy="10.5" r="10.5" />
                <circle class="cls-1" cx="10.5" cy="67.5" r="10.5" />
                <circle class="cls-1" cx="10.5" cy="39" r="10.5" />
              </svg>
              <p>4 hours ago</p>
            </div>
            <div className="likes">
              <p>
                <b>432423</b> likes
              </p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            recusandae laudantium ut, eligendi illo dolor hic porro sapiente
            dignissimos consectetur, laborum dolore deserunt, aperiam natus
            ipsam aut labore praesentium nesciunt?
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consequuntur neque a ex natus beatae ea, voluptas sunt et ducimus
              dolor quos necessitatibus aspernatur illo non, ipsam quo maiores
              quaerat.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consequuntur neque a ex natus beatae ea, voluptas sunt et ducimus
              dolor quos necessitatibus aspernatur illo non, ipsam quo maiores
              quaerat.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consequuntur neque a ex natus beatae ea, voluptas sunt et ducimus
              dolor quos necessitatibus aspernatur illo non, ipsam quo maiores
              quaerat.
            </li>
          </ul>
          <div className="newComment">
            <div class="group">
              <input type="text" required="required" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Novo comentário</label>
            </div>
            <button type="submit">Comentar</button>
          </div>
        </div>
      </PostContent>
    </Container>
  );
}

import React, { useEffect } from "react";
import { Anime } from "react-anime";
import Menu from "../../components/Menu";
import { Container, Feed } from "./styles";
import Post from "../../components/Publi";
export default function Dashboard() {
  const list = [1, 2, 3, 4];
  return (
    <Container>
      <Menu></Menu>
      <Feed numPosts={list.length}>
        <div id="feedTitle">
          <h2>Feed</h2>
          <ul>
            <li>aa</li>
            <li>aa</li>
          </ul>
        </div>
        <Anime
          opacity={[0, 1]}
          translateY={[440, 0]}
          easing={"easeOutExpo"}
          delay={(el, i) => i * 600}
          duration={1000}
        >
          {list.map((v, i) => (
            <Post key={i} />
          ))}
        </Anime>
      </Feed>
    </Container>
  );
}

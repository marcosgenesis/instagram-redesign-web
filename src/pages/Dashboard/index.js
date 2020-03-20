import React from "react";
import Menu from "../../components/Menu";
import { Container, Feed } from "./styles";
import Post from "../../components/Publi";
export default function Dashboard() {
  return (
    <Container>
      <Menu></Menu>
      <Feed>
        <div id="feedTitle">
          <h2>Feed</h2>
          <ul>
            <li>aa</li>
            <li>aa</li>
          </ul>
        </div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Feed>
    </Container>
  );
}

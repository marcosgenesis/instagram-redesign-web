import React, { useRef, useEffect } from "react";
import Direct from "../Direct";
import Notification from "../Notification";
import { FiInstagram } from "react-icons/fi";
import { Container, Actions } from "./styles";

export default function Navbar() {
  useEffect(() => {}, []);

  const myRef = useRef();

  return (
    <Container>
      <input type="text" placeholder="Procurar" className="actions" />
      <FiInstagram size={30} />
      <Actions>
        <Direct />
        <Notification />
        <button type="submit" ref={myRef} className="newPost">
          <span>+</span>
          <p>Novo Post</p>
        </button>
      </Actions>
    </Container>
  );
}

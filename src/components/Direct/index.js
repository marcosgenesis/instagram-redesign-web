import React, { useState, useEffect } from "react";
import anime from "animejs";

import { FiSend } from "react-icons/fi";
import { Container, Badge, DirectList, DirectItem, Scroll } from "./styles";

export default function Direct() {
  const [visible, setVisible] = useState(false);
  const [read, setRead] = useState(false);

  useEffect(() => {
    anime({
      targets: `${Badge}`,
      translateY: [-30, 0]
    });
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={true}>
        <FiSend size={30} />
      </Badge>
      <DirectList visible={visible}>
        <Scroll>
          <DirectItem unread={read}>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </DirectItem>
          <DirectItem>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </DirectItem>
          <DirectItem>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </DirectItem>
          <DirectItem>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </DirectItem>
          <DirectItem>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </DirectItem>
        </Scroll>
      </DirectList>
    </Container>
  );
}

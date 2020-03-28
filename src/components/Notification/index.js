import React, { useEffect, useState } from "react";
import anime from "animejs";

import { FiHeart } from "react-icons/fi";

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll
} from "./styles";

export default function Direct() {
  const [visible, setVisible] = useState(false);

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
        <FiHeart size={30} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Ei você não me respondeu</p>
            <time>a 3 min</time>
            <button>Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

import { useState } from "react";
import {
  CheckInBox,
  Text,
  List,
  Item,
  Box,
  StyledSpan,
  Arrow,
  StyledButton,
  Popup,
  Number,
  CounterButton,
  StyledPlus,
  StyledMinus,
} from "./style.js";

const ChooseField = () => {
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const [activeRoom, setActiveRoom] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [activeAdult, setActiveAdult] = useState(false);
  const [activeChild, setActiveChild] = useState(false);

  const increase = (setCounter, counter) => setCounter(counter + 1);
  const decrease = (setCounter, counter) => setCounter(counter - 1);
  const toggleActive = (active, setActive) => () => setActive(!active);
  return (
    <CheckInBox>
      <Text>Book your stay</Text>
      <List>
        <Item>
          I want
          <Box>
            <StyledSpan>{room}</StyledSpan> {room <= 1 ? "Room" : "Rooms"}{" "}
            <Arrow
              role="button"
              onClick={toggleActive(activeRoom, setActiveRoom)}
            />
            <Popup activeClass={activeRoom}>
              <Number>{room}</Number>
              {room <= 1 ? "Room" : "Rooms"}{" "}
              <CounterButton
                disabled={room === 20}
                onClick={() => increase(setRoom, room)}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={room === 0}
                onClick={() => decrease(setRoom, room)}
              >
                <StyledMinus />
              </CounterButton>
            </Popup>
          </Box>
        </Item>
        <Item>
          from
          <Box>
            <StyledSpan>May 19</StyledSpan>
            <StyledSpan>-</StyledSpan>
            <StyledSpan>May 20</StyledSpan>
            <Arrow onClick={toggleActive(activeCalendar, setActiveCalendar)} />
            <Popup activeClass={activeCalendar}></Popup>
          </Box>
        </Item>
        <Item>
          for
          <Box>
            <StyledSpan>{adult}</StyledSpan>
            {adult <= 1 ? "Adult" : "Adults"}
            <Arrow
              role="button"
              onClick={toggleActive(activeAdult, setActiveAdult)}
            />
            <Popup activeClass={activeAdult}>
              <Number>{adult}</Number> {adult <= 1 ? "Adult" : "Adults"}{" "}
              <CounterButton
                disabled={adult === 20}
                onClick={() => increase(setAdult, adult)}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={adult === 0}
                onClick={() => decrease(setAdult, adult)}
              >
                {" "}
                <StyledMinus />
              </CounterButton>
            </Popup>
          </Box>
          <StyledSpan>•</StyledSpan>
          <Box>
            <StyledSpan>{child}</StyledSpan>
            {child <= 1 ? "Children" : "Childrens"}
            <Arrow onClick={toggleActive(activeChild, setActiveChild)} />
            <Popup activeClass={activeChild}>
              {" "}
              <Number>{child}</Number> {child <= 1 ? "Children" : "Childrens"}{" "}
              <CounterButton
                disabled={child === 20}
                onClick={() => increase(setChild, child)}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={child === 0}
                onClick={() => decrease(setChild, child)}
              >
                {" "}
                <StyledMinus />
              </CounterButton>
            </Popup>
          </Box>
        </Item>
        <Item>
          <StyledButton>Book a room</StyledButton>
        </Item>
      </List>
    </CheckInBox>
  );
};

export default ChooseField;

// import { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  incrementRoom,
  decrementRoom,
  toggleHideRoomField,
  incrementAdult,
  decrementAdult,
  toggleHideAdultField,
  incrementChild,
  decrementChld,
  toggleHideChildField,
  selectRoomValue,
  selectAdultValue,
  selectChildValue,
  selectHideRoomField,
  selectHideAdultField,
  selectHideChildField,
} from "./counterSlice.js";

const ChooseField = () => {
  const dispatch = useDispatch();
  const roomValue = useSelector(selectRoomValue);
  const adultValue = useSelector(selectAdultValue);
  const childValue = useSelector(selectChildValue);
  const isHideRoomField = useSelector(selectHideRoomField);
  const isHideAdultField = useSelector(selectHideAdultField);
  const isHideChildField = useSelector(selectHideChildField);

  return (
    <CheckInBox>
      <Text>Book your stay</Text>
      <List>
        <Item>
          I want
          <Box>
            <StyledSpan>{roomValue}</StyledSpan>{" "}
            {roomValue <= 1 ? "Room" : "Rooms"}{" "}
            <Arrow
              role="button"
              onClick={() => {
                dispatch(toggleHideRoomField());
              }}
            />
            <Popup activeClass={isHideRoomField}>
              <Number>{roomValue}</Number>
              {roomValue <= 1 ? "Room" : "Rooms"}{" "}
              <CounterButton
                disabled={roomValue === 20}
                onClick={() => dispatch(incrementRoom())}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={roomValue === 0}
                onClick={() => dispatch(decrementRoom())}
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
            {/* <Arrow onClick={toggleActive(activeCalendar, setActiveCalendar)} />
            <Popup activeClass={activeCalendar}></Popup> */}
          </Box>
        </Item>
        <Item>
          for
          <Box>
            <StyledSpan>{adultValue}</StyledSpan>
            {adultValue <= 1 ? "Adult" : "Adults"}
            <Arrow
              role="button"
              onClick={() => {
                dispatch(toggleHideAdultField());
              }}
            />
            <Popup activeClass={isHideAdultField}>
              <Number>{adultValue}</Number>{" "}
              {adultValue <= 1 ? "Adult" : "Adults"}{" "}
              <CounterButton
                disabled={adultValue === 20}
                onClick={() => dispatch(incrementAdult())}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={adultValue === 0}
                onClick={() => dispatch(decrementAdult())}
              >
                {" "}
                <StyledMinus />
              </CounterButton>
            </Popup>
          </Box>
          <StyledSpan>•</StyledSpan>
          <Box>
            <StyledSpan>{childValue}</StyledSpan>
            {childValue <= 1 ? "Children" : "Childrens"}
            <Arrow
              onClick={() => {
                dispatch(toggleHideChildField());
              }}
            />
            <Popup activeClass={isHideChildField}>
              {" "}
              <Number>{childValue}</Number>{" "}
              {childValue <= 1 ? "Children" : "Childrens"}{" "}
              <CounterButton
                disabled={childValue === 20}
                onClick={() => dispatch(incrementChild())}
              >
                <StyledPlus />
              </CounterButton>
              <CounterButton
                disabled={childValue === 0}
                onClick={() => dispatch(decrementChld())}
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

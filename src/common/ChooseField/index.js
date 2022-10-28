import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
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
  DatePickerWrapper,
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

  const [startDate, setStartDate] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);
  const handleStartChange = (e) => {
    setIsStartOpen(!isStartOpen);
    setStartDate(e);
  };
  const handleStartClick = (e) => {
    e.preventDefault();
    setIsStartOpen(!isStartOpen);
  };

  const [endDate, setEndDate] = useState(new Date());
  const [isEndOpen, setIsEndOpen] = useState(false);
  const handleEndChange = (e) => {
    setIsEndOpen(!isEndOpen);
    setEndDate(e);
  };
  const handleEndClick = (e) => {
    e.preventDefault();
    setIsEndOpen(!isEndOpen);
  };

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
          <Box>
            <StyledButton datePickerButton onClick={handleStartClick}>
              {format(startDate, "dd-MM-yyyy")}
            </StyledButton>
            {isStartOpen && (
              <DatePickerWrapper>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartChange}
                  inline
                />
              </DatePickerWrapper>
            )}
            <StyledSpan>-</StyledSpan>
            <StyledButton datePickerButton onClick={handleEndClick}>
              {format(endDate, "dd-MM-yyyy")}
            </StyledButton>
            {isEndOpen && (
              <DatePickerWrapper>
                <DatePicker
                  style={{ position: "fixed" }}
                  selected={endDate}
                  onChange={handleEndChange}
                  inline
                />
              </DatePickerWrapper>
            )}
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

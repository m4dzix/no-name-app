import {
  CheckInBox,
  Text,
  List,
  Item,
  Box,
  StyledSpan,
  //   StyledInput,
  Arrow,
  StyledButton,
} from "./style.js";

const ChooseField = () => (
  <CheckInBox>
    <Text>Book your stay</Text>
    <List>
      <Item>
        I want
        <Box>
          <StyledSpan>1</StyledSpan>Room <Arrow />
        </Box>
      </Item>
      <Item>
        from
        <Box>
          <StyledSpan>May 19</StyledSpan>
          <StyledSpan>-</StyledSpan>
          <StyledSpan>May 20</StyledSpan>
          <Arrow />
        </Box>
      </Item>
      <Item>
        for
        <Box>
          <StyledSpan>1</StyledSpan>
          Adult
          <Arrow />
        </Box>
        <StyledSpan>•</StyledSpan>
        <Box>
          <StyledSpan>0</StyledSpan>
          Children
          <Arrow />
        </Box>
      </Item>
      <Item>
        <StyledButton>Book a room</StyledButton>
      </Item>
    </List>
  </CheckInBox>
);

export default ChooseField;

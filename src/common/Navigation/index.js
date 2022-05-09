import { Nav, Logo, List, Item, Button, MenuIcon } from "./style";
import logo from "../../Assets/logo.png";
const Navigation = () => (
  <Nav>
    <Logo src={logo} />
    <List>
      <Item>Stay</Item>
      <Item>Dyning</Item>
      <Item>Gallery</Item>
      <Item>What`s on</Item>
      <Item>Explore</Item>
      <Item>Welinng</Item>
      <Item>Events</Item>
      <Item>
        <Button>Book a table</Button>
      </Item>
      <Item>
        <MenuIcon />
      </Item>
    </List>
  </Nav>
);

export default Navigation;

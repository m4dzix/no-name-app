import { Nav, Logo, List, Item, Button, MenuIcon } from "./style";
import logo from "../../Assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHideNavigation,
  SelectHideNavigationState,
} from "./navigationSlice";
const Navigation = () => {
  const dispatch = useDispatch();
  const isNavigationHide = useSelector(SelectHideNavigationState);
  return (
    <>
      <MenuIcon
        onClick={() => {
          dispatch(toggleHideNavigation());
        }}
      />
      <Nav hideNavigation={isNavigationHide}>
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
        </List>
      </Nav>
    </>
  );
};

export default Navigation;

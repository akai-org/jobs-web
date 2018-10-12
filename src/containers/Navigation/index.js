import React from "react";
import { connect } from "react-redux";
import { setMenuOpened } from "../../actions/index";
import Navigation from "../../components/Navigation/index";

const mapStateToProps = state => ({
  isMenuOpened: state.isMenuOpened
});

const mapDispatchToProps = dispatch => ({
  onLinkClick: () => dispatch(setMenuOpened(false)),
  onMobileMenuButtonClick: isMenuOpened => dispatch(setMenuOpened(!isMenuOpened)),
  onOverlayClick: () => dispatch(setMenuOpened(false))
});

const NavigationContainer = props => (
  <Navigation {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);

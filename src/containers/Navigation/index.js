import React, { Component } from "react";
import { connect } from "react-redux";
import { setMenuOpened, toggleMenuOpened } from "../../actions/index";
import Navigation from "../../components/Navigation/index";

const mapStateToProps = state => ({
  isMenuOpened: state.isMenuOpened
});

const mapDispatchToProps = dispatch => ({
  onLinkClick: () => dispatch(setMenuOpened(false)),
  onMobileMenuButtonClick: () => dispatch(toggleMenuOpened()),
});

const NavigationContainer = (props) => (
  <Navigation {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);

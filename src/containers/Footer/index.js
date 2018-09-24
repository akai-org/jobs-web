import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer/index";

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({ });

const FooterContainer = (props) => (
  <Footer {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);

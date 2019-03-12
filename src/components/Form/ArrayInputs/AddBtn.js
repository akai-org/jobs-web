import React from "react";
import PropTypes from "prop-types";
import { SecondaryButton } from "../../../styled-components/Buttons";

const AddBtn = ({ onClickHandler }) => (
  <SecondaryButton small as="button" type="button" onClick={onClickHandler}>
    Dodaj
  </SecondaryButton>
);

AddBtn.propTypes = {
  onClickHandler: PropTypes.func
};

export default AddBtn;

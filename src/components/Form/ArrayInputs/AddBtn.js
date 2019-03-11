import React from "react";
import PropTypes from "prop-types";

const AddBtn = ({ onClickHandler }) => (
  <button type="button" onClick={onClickHandler}>
    Dodaj
  </button>
);

AddBtn.propTypes = {
  onClickHandler: PropTypes.func
};

export default AddBtn;

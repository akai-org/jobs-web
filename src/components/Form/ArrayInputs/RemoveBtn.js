import React, { useContext } from "react";
import styled from "styled-components";

import FieldArrayContext from "./context";

const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-top: 7px;
  cursor: pointer;
`;

const RemoveBtn = () => {
  const value = useContext(FieldArrayContext);
  const removeItemHandler = () => value.fields.remove(value.index);

  return (
    <RemoveIcon
      src="https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/close-256.png"
      alt="Usuń"
      title="Usuń"
      onClick={removeItemHandler}
    />
  );
};

export default RemoveBtn;

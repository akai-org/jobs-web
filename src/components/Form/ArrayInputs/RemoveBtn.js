import React, { useContext } from "react";
import { Button } from "../../../styled-components/Buttons";

import FieldArrayContext from "./context";

const RemoveBtn = () => {
  const value = useContext(FieldArrayContext);
  const removeItemHandler = () => value.fields.remove(value.index);

  return (
    <Button small as="button" type="button" onClick={removeItemHandler}>
      Usuń
    </Button>
  );
};

export default RemoveBtn;

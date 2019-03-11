import React from "react";
import PropTypes from "prop-types";
import { FieldArray } from "react-final-form-arrays";

import FieldArrayContext from "./context";
import Field from "./Field";
import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";

class ArrayInputs extends React.Component {
  static Field = Field;

  static AddBtn = AddBtn;

  static RemoveBtn = RemoveBtn;

  render() {
    const { fieldsName, children } = this.props;
    return (
      <FieldArray name={fieldsName}>
        {({ fields }) =>
          fields.map((name, index) => (
            <FieldArrayContext.Provider
              key={name}
              value={{ fields, name, index }}
            >
              {children}
            </FieldArrayContext.Provider>
          ))
        }
      </FieldArray>
    );
  }
}

ArrayInputs.propTypes = {
  fieldsName: PropTypes.string,
  children: PropTypes.any
};

export default ArrayInputs;

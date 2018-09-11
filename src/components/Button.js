import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ButtonCom = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href={props.link}
        target={props.target}
      >
        Delete
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default ButtonCom;

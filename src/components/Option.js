import React from "react";

const Option = (props) => (
  <div>
    <li>{props.text}</li>
    <button onClick={(e) => props.handeDeleteOption(props.text)}>Remove</button>
  </div>
);

export default Option;

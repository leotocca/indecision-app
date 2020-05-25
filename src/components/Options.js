import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div>
      <ol>
        {props.options.length === 0 && (
          <p>Please add an option to get started</p>
        )}
        {props.options.map((option) => (
          <Option
            key={option}
            text={option}
            handeDeleteOption={props.handeDeleteOption}
          />
        ))}
      </ol>
    </div>
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
    </div>
  </div>
);

export default Options;

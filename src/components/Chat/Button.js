import React from "react";

function Button({ onClick = null, children = null }) {
  return <button onClick={onclick}>{children}</button>;
}

export default Button;

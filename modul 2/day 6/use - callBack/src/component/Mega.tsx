import React from "react";

function MegaBoost() {
  console.info("MegaBoost");
  return <button onClick={props.handleClick}>mega</button>;
}

export default React.memo(MegaBoost);

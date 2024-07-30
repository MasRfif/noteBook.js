import React from "react";

function decoration() {
  console.info("Decoration");

  return <div style={{ marginTop: "24px", fontSize: "48" }}>👑</div>;
}

export default React.memo(decoration);

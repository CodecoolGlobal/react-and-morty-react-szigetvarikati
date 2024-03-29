import "../get_schwifty.ttf"
import React, { useState } from "react";

function Button(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>
        {props.text}</button>
      {isShown && (
        <div className="hoverButtonText">
          {props.hover}
        </div>
      )}
    </div>
  )
}

export default Button;
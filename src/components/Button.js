import React from "react";

export default function Button(props) {
  return (
    <div className={`btn1 ${props.className}`}>
      <a href={props.href} rel="noreferrer" target="_blank" download>
        {props.children}
      </a>
    </div>
  );
}

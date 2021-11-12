import { useState } from "react";
import "./Contact.css";

export function Contact(props) {
  const [btnStatus, setBtnStatus] = useState("hide");

  function handleClick() {
    if (btnStatus === "hide") {
      setBtnStatus("show");
    } else {
      setBtnStatus("hide");
    }
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Clique aqui e fale comigo!
      </button>
      <div className={btnStatus}>{props.email}</div>
    </>
  );
}

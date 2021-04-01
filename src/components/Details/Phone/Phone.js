import React from "react";
import { AiOutlineCamera,AiOutlineUnlock } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";

const phone = (props) => {
  return (
    <div>
      <span className="icon-text mt-2">
        <span className="icon">
          <AiOutlineCamera size="1.5em" />
        </span>
        <span>{props.camera} mpx</span>
      </span>{" "}
      <br />
      <span className="icon-text mt-2">
        <span className="icon">
          <GrStorage size="1.5em" />
        </span>
        <span>{props.storage} GB</span>
      </span>
      <br />
      <span className="icon-text mt-2">
        <span className="icon">
          <AiOutlineUnlock size="1.5em" />
        </span>
        <span>Desbloquedo</span>
      </span>
    </div>
  );
};

export default phone;

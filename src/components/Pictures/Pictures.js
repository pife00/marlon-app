import React from "react";
import BigPicture from "../BigPicture/BigPicture";
import UploadPicture from "./UploadPicture/UploadPicture";

const picture = (props) => {
  return (
    <div className='card'>
      <div className='card-content'>
    <div className="container mt-3">
      
      <div className='columns'>
        <div className="column is-3">
          <BigPicture image="https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg" />
        </div>

        <div className="column is-3 ">
          <UploadPicture />
        </div>

      </div>
    </div>

      </div>
    </div>
  );
};

export default picture;

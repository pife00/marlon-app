import React, { useState } from "react";
import BigPicture from "../BigPicture/BigPicture";
import UploadPicture from "./UploadPicture/UploadPicture";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import Loading from "../UI/Loading/Loading";

const Picture = (props) => {
  const [isLoading, setLoading] = useState(false);

  let image = null;

  let loading = null;

  const loadingHandler = (loading) => {
    setLoading(loading);
  };

  if (isLoading) {
    loading = (
      <Modal>
        <Loading />
      </Modal>
    );
  }

  if (props.imagePicture) {
    image = props.imagePicture;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="container mt-3">
          <div className="columns">
            <div className="column is-3">
              <BigPicture image={image} />
            </div>

            <div className="column is-3 ">
              <UploadPicture onSetLoading={loadingHandler} />
            </div>
          </div>
        </div>
        {loading}
      </div>
    </div>
  );
};

const mapToStateToProps = (state) => {
  return {
    imagePicture: state.bigPicture.image,
  };
};

export default connect(mapToStateToProps)(Picture);

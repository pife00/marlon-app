import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const sendUser = (event) => {
    event.preventDefault();
    let userToSend = {
      ...user,
    };
    props.onUserInit(userToSend);
  };

  let redirect = null;

  if (props.auth) {
    redirect = <Redirect to="/admin/dashboard" />;
  }

  return (
    <div className="columns mt-2">
      {redirect}
      <div className="column is-4"></div>
      <div className="column is-4">
        <div className="card">
          <div className="card-content ">
            <form >
            <div className="has-text-centered">
              <h1 className="title">Iniciar Sesion</h1>
            </div>

            <div className="field">
              <label className="field">Correo</label>
              <div className="control">
                <input
                  value={user.email}
                  onChange={(event) => {
                    setUser((state) => ({
                      ...state,
                      email: event.target.value,
                    }));
                  }}
                  name="email"
                  type="email"
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label className="field">Contraseña</label>
              <div className="control">
                <input
                  name="password"
                  value={user.password}
                  onChange={(event) =>
                    setUser((state) => ({
                      ...state,
                      password: event.target.value,
                    }))
                  }
                  type="password"
                  className="input"
                />
              </div>
            </div>

            <div>
              <div className="has-text-centered">
                <button
                  type="submit"
                  onClick={sendUser}
                  className="button is-link mr-2 is-fullwidth"
                >
                  Ingresar
                </button>
                <small className=" has-text-weight-semibold has-text-centered has-text-danger">
                  {" "}
                  {props.error}{" "}
                </small>
              </div>
            </div>
            </form>
          </div>
          
        </div>
      </div>

      <div className="column is-4"></div>
      
    </div>
  );
};

const mapToStateToProps = (state) => {
  return {
    error: state.auth.error,
    auth: state.auth.user ? true : false,
  };
};

const maptoDispatchToProps = (dispatch) => {
  return {
    onUserInit: (user) => dispatch(actionTypes.userInit(user)),
  };
};

export default connect(mapToStateToProps, maptoDispatchToProps)(SignIn);

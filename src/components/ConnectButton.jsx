import React from "react";

function ConnectButton(props) {
  return (
    <div className="ConnectButton">
      {props.connected.connected ? (
        <button
          className="connect-btn"
          onClick={(e) => {
            props.toggleConnect(e, props.id);
          }}
        >
          Connected
        </button>
      ) : (
        <button
          className="bgColor connect-btn"
          onClick={(e) => {
            props.toggleConnect(e, props.id);
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default ConnectButton;

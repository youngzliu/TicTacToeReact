import React from "react";
import PropTypes from "prop-types";
import omark from "../assets/images/omark.png";
import xmark from "../assets/images/xmark.svg";

export default function Block(props) {
  if (props.value === "x") {
    return (
      <div>
        <style jsx>{`
          img {
            height: 250px;
            width: 250px;
          }
        `}</style>
        <img src={xmark} />
      </div>
    );
  } else if (props.value === "o") {
    return (
      <div>
        <style jsx>{`
          img {
            height: 250px;
            width: 250px;
          }
        `}</style>
        <img src={omark} />
      </div>
    );
  } else {
    return <div />;
  }
}

Block.propTypes = {
  value: PropTypes.string
};

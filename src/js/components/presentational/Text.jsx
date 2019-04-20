import React from "react";
import PropTypes from "prop-types";
const Text = ({ label }) => (
  <div>
    <p>{label}</p>
  </div>
);
Text.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Text;
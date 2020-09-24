import React from "react";
import { connect } from "react-redux";
import { removeUser } from "../redux/actions";

const User = (props) => {
  return (
    <tr>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.phone}</td>
      {props.user.gender ? <td>Male</td> : <td>Female</td>}

      <td>{props.user.age}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.removeUser(props.user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(null, mapDispatchToProps)(User);

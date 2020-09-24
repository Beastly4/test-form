import React, { useState } from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../redux/actions";
import SortIcon from "@material-ui/icons/Sort";

import User from "./User";

const UsersList = (props) => {
  const [flagFirstName, setFlagFirstName] = useState(false);
  const [flagLastName, setFlagLastName] = useState(false);
  const [flagPhone, setFlagPhone] = useState(false);
  const [flagGender, setFlagGender] = useState(false);
  const [flagAge, setFlagAge] = useState(false);

  const changeFlag = (flag, func) => {
    if (flag === false) {
      func("increase");
    } else if (flag === "increase") {
      func("decrease");
    } else {
      func(false);
    }
  };
  if (!props.users.length) {
    return <p className="text-secondary">No Users</p>;
  }
  return (
    <table className="table">
      <thead className="card-body">
        <tr>
          <th style={{ display: "flex", alignItems: "center" }} scope="col">
            {flagFirstName === false && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.increase(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagFirstName, setFlagFirstName);
                }}
              >
                First Name
              </p>
            )}

            {flagFirstName === "increase" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.decrease(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagFirstName, setFlagFirstName);
                }}
              >
                <SortIcon style={{ marginRight: 5 + "px" }} /> First Name
              </p>
            )}

            {flagFirstName === "decrease" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  changeFlag(flagFirstName, setFlagFirstName);
                }}
              >
                <SortIcon
                  style={{
                    marginRight: 5 + "px",
                    transform: "rotate(0.5turn)",
                  }}
                />
                First Name
              </p>
            )}
          </th>
          <th scope="col">
            {flagLastName === false && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.increase(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagLastName, setFlagLastName);
                }}
              >
                Last Name
              </p>
            )}

            {flagLastName === "increase" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.decrease(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagLastName, setFlagLastName);
                }}
              >
                <SortIcon style={{ marginRight: 5 + "px" }} /> Last Name
              </p>
            )}

            {flagLastName === "decrease" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  changeFlag(flagLastName, setFlagLastName);
                }}
              >
                <SortIcon
                  style={{
                    marginRight: 5 + "px",
                    transform: "rotate(0.5turn)",
                  }}
                />
                Last Name
              </p>
            )}
          </th>
          <th scope="col">
            {flagPhone === false && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.increase(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagPhone, setFlagPhone);
                }}
              >
                Phone
              </p>
            )}

            {flagPhone === "increase" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.decrease(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagPhone, setFlagPhone);
                }}
              >
                <SortIcon style={{ marginRight: 5 + "px" }} /> Phone
              </p>
            )}

            {flagPhone === "decrease" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  changeFlag(flagPhone, setFlagPhone);
                }}
              >
                <SortIcon
                  style={{
                    marginRight: 5 + "px",
                    transform: "rotate(0.5turn)",
                  }}
                />
                Phone
              </p>
            )}
          </th>
          <th scope="col">
            {flagGender === false && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.increase(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagGender, setFlagGender);
                }}
              >
                Gender
              </p>
            )}

            {flagGender === "increase" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.decrease(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagGender, setFlagGender);
                }}
              >
                <SortIcon style={{ marginRight: 5 + "px" }} /> Gender
              </p>
            )}

            {flagGender === "decrease" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  changeFlag(flagGender, setFlagGender);
                }}
              >
                <SortIcon
                  style={{
                    marginRight: 5 + "px",
                    transform: "rotate(0.5turn)",
                  }}
                />
                Gender
              </p>
            )}
          </th>
          <th scope="col">
            {flagAge === false && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.increase(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagAge, setFlagAge);
                }}
              >
                Age
              </p>
            )}

            {flagAge === "increase" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  props.decrease(props.users, Object.keys(props.users[0])[0]);
                  changeFlag(flagAge, setFlagAge);
                }}
              >
                <SortIcon style={{ marginRight: 5 + "px" }} /> Age
              </p>
            )}

            {flagAge === "decrease" && (
              <p
                style={{ margin: 0 }}
                onClick={() => {
                  changeFlag(flagAge, setFlagAge);
                }}
              >
                <SortIcon
                  style={{
                    marginRight: 5 + "px",
                    transform: "rotate(0.5turn)",
                  }}
                />
                Age
              </p>
            )}
          </th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  increase,
  decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

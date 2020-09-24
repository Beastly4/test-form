import React, { useState } from "react";

import { connect } from "react-redux";
import { createUser } from "../redux/actions";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const initState = {
    firstName: "",
    lastName: "",
    phone: "",
    gender: true,
    age: "",
  };
  const [state, setState] = useState(initState);

  const { firstName, lastName, phone, age } = state;

  function submitHandler() {
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || age === "") {
      return;
    }

    const exportUser = {
      ...state,
      id: Date.now().toString(),
    };

    props.createUser(exportUser);
    setState(initState);
  }

  function inputChangeHandler(event) {
    event.persist();
    if (event.target.name === "age") {
      setState((prev) => ({
        ...prev,
        ...{
          [event.target.name]: parseInt(event.target.value),
        },
      }));
    } else if (event.target.name === "gender") {
      setState((prev) => ({
        ...prev,
        ...{
          [event.target.name]: !state.gender,
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        ...{
          [event.target.name]: event.target.value,
        },
      }));
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Name"
          id="firstName"
          value={state.firstName}
          onChange={inputChangeHandler}
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.firstName && <p>Enter First Name</p>}

        <label htmlFor="lastName" className="pt-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          id="lastName"
          value={state.lastName}
          onChange={inputChangeHandler}
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.lastName && <p>Enter Last Name</p>}

        <label htmlFor="phone" className="pt-2">
          Phone Name
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          id="phone"
          value={state.phone}
          onChange={inputChangeHandler}
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.phone && <p>Enter Phone</p>}

        <p className="pt-2 ">Gender</p>
        <div className="form-check">
          <input
            type="radio"
            id="maleGender"
            name="gender"
            checked={state.gender}
            value={!state.gender}
            onChange={inputChangeHandler}
            className="form-check-input"
          />
          <label className="form-check-label " htmlFor="maleGender">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="femaleGender"
            name="gender"
            value={state.gender}
            onChange={inputChangeHandler}
            className="form-check-input"
          />
          <label className="form-check-label " htmlFor="femaleGender">
            Female
          </label>
        </div>

        <label htmlFor="age" className="pt-2">
          Age
        </label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          id="age"
          value={state.age}
          onChange={inputChangeHandler}
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.age && <p>Enter Age</p>}

        <button className="btn btn-success mt-3" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(Form);

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditUserForm(props) {
  const [user, setUser] = useState({
    name: props.tempUser.name,
    email: props.tempUser.email,
    gen: props.tempUser.gen,
    id: props.tempUser.id,
  });
  function handleSubmit(e) {
    e.preventDefault();
    props.handleEdit(props.tempUser.id, user);
    setUser({
      name: "",
      email: "",
      gen: "",
      id: "",
    });
    props.handleClose();
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  return (
    <div className="col-md-6">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter gen"
            value={user.gen}
            name="gen"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditUserForm;

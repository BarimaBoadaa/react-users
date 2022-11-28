import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import EditUserForm from "./EditUserForm";

function Users({ users, handleEdit, handleDelete }) {
  const [show, setShow] = useState(false);
  const [tempUser, settempUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    settempUser(item);
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            handleClose={handleClose}
            tempUser={tempUser}
            handleEdit={handleEdit}
          />
        </Modal.Body>
      </Modal>
      <div className="row">
        {users.map((item) => {
          return (
            <div key={item.id} className="col-md-4 my-1">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <p>{item.email}</p>
                  <p>{item.gen}</p>

                  <Button variant="primary" onClick={() => handleShow(item)}>
                    edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;

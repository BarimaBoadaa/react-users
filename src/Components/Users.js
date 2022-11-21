import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Users({ users }) {
  return (
    <>
      <div className="row">
        {users.map((item) => {
          return (
            <div key={item.id} className="col-md-4 my-1">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <p>{item.email}</p>
                  <p>{item.gen}</p>

                  <Button variant="primary">edit</Button>
                  <Button variant="danger">delete</Button>
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

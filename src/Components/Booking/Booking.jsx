import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [patients, setPatients] = useState([{ name: "", age: "", diagnosis: "" }]);
  const navigate = useNavigate();

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePatientChange = (index, event) => {
    const { name, value } = event.target;
    const updatedPatients = [...patients];
    updatedPatients[index][name] = value;
    setPatients(updatedPatients);
  };

  const addPatient = () => {
    setPatients([...patients, { name: "", age: "", diagnosis: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!address.address1 || !address.city || patients.some(p => !p.name || !p.age)) {
      alert("Please fill out all required fields.");
      return;
    }
    navigate('/patient-details', { state: { address, patients } }); // Pass the details to PatientDetails page
  };

  return (
    <div>
      <h1 className="ms-3">Patient Details:</h1>
      <div className="patientForm">
        <Form className="p-3" onSubmit={handleSubmit}>
          <h2>Address Details</h2>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address1"
              placeholder="1234 Main St"
              value={address.address1}
              onChange={handleAddressChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={address.address2}
              onChange={handleAddressChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                required
              >
                <option>Choose...</option>
                <option>State 1</option>
                <option>State 2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip"
                value={address.zip}
                onChange={handleAddressChange}
                required
              />
            </Form.Group>
          </Row>

          <h2 className="mt-4">Patient Details</h2>

          {patients.map((patient, index) => (
            <div key={index}>
              <h6 className="my-2">Patient {index + 1}</h6>
              <Row className="mb-3">
                <Form.Group as={Col} controlId={`formName${index}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter patient's name"
                    value={patient.name}
                    onChange={(event) => handlePatientChange(index, event)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId={`formAge${index}`}>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    type="number"
                    placeholder="Enter patient's age"
                    value={patient.age}
                    onChange={(event) => handlePatientChange(index, event)}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId={`formDiagnosis${index}`}>
                <Form.Label>Diagnosis</Form.Label>
                <Form.Control
                  as="textarea"
                  name="diagnosis"
                  placeholder="The problems faced by the patient"
                  style={{ height: "8rem" }}
                  value={patient.diagnosis}
                  onChange={(event) => handlePatientChange(index, event)}
                />
              </Form.Group>
            </div>
          ))}

          <Row className="mb-3">
            <Col>
              <Button type="button" onClick={addPatient} className="mb-3">
                Add Patient
              </Button>
            </Col>
            <Col className="text-end">
              <Button type="submit" className="ms-2">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

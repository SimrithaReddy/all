import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function App() {
  const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2M2YzI5ZmFmYTVkMTAwMWRlNDkwZjYiLCJpYXQiOjE2Nzk0Mjg5MzAsImV4cCI6MzQ3OTQyODkzMCwidHlwZSI6ImFjY2VzcyJ9.3GZU2CjalRjcOHRhqm-WCvCdWaHoD5Js32VvqO2j2uY"
  const [form, setForm] = useState({ cardNumber: "", cardExpiration: "", cardHolder: "" })
  const [formErrors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0) {
      axios.post('https://interview-api.onrender.com/v1/cards', {
        name: form.cardHolder,
        cardExpiration: form.cardExpiration,
        cardHolder: form.cardHolder,
        cardNumber: form.cardNumber,
        category: "VISA"
      },
        {
          headers: {
            "Authorization": `Bearer ${Token}`
          }
        }
      ).then((res) => {
        console.log(res.data)
        alert('card created sucessfully')
      }).catch((err) => {
        console.log(err.message)
      })
    } else {
      alert("please fill all details")
    }
  }
  const validate = () => {
    const errors = {}
    if (form.cardExpiration === "" && form.cardHolder === "" && form.cardNumber === "") {
      errors.main = "please fill details"
    }
    else if (form.cardExpiration.length !== 7 && form.cardExpiration[2]==="/") {
      errors.cardExpiration = `please fill mm/yyyy format not ${form.cardExpiration}`
    }
    else if (form.cardNumber.length !== 16) {
      console.log(form.cardNumber, form.cardNumber.length)
      errors.cardNumber = `cardNumber should contain 16 digits only`
    }
    return errors;
  }
  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              {formErrors.main && <p style={{ color: 'red' }}>*{formErrors.main}</p>}
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="visa"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 3193"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>

              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                name="cardHolder"
                placeholder="Annam doe"
                value={form.cardHolder}
                onChange={(e) => { setForm({ ...form, cardHolder: e.target.value }) }}
              />
              {formErrors.cardHolder && <p style={{ color: 'red' }}>*{formErrors.cardHolder}</p>}
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    name="cardNumber"
                    placeholder="1234 5678 9101 1213"
                    value={form.cardNumber}
                    onChange={(e) => { setForm({ ...form, cardNumber: e.target.value }) }}
                  />
                  {formErrors.cardNumber && <p style={{ color: 'red' }}>*{formErrors.cardNumber}</p>}
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    name="cardExpiration"
                    placeholder="MM/YYYY"
                    value={form.cardExpiration}
                    onChange={(e) => { setForm({ ...form, cardExpiration: e.target.value }) }}
                  />
                  {formErrors.cardExpiration && <p style={{ color: 'red' }}>*{formErrors.cardExpiration}</p>}
                </MDBCol>         
              </MDBRow>
              <MDBBtn
                color="success"
                size="lg"
                block
                onClick={(e) => handleSubmit(e)}
              >
                Create card
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
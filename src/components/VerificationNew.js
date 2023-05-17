import React from 'react'
import logo from '../images/logo.png'
import { Col, Row } from 'reactstrap'
export default function VerificationNew() {
  return (
    <div className="p-3">
      <div className="text-center">
        <img src={logo} alt="" className="logo" />
      </div>
      <h4 className="app_heading">
        National Health Insurance Agency Enrollee Status Verification Form
      </h4>

      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <form className="mt-5">
            <Row>
              <div>
                <h6 className="form_section">Principal Member Details</h6>
              </div>
              <Col md={4} className="mb-2">
                <label className="app_label">Last Name</label>
                <input className="app_input" type="text" />
              </Col>
              <Col md={4} className="mb-2">
                <label className="app_label">First Name</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Middle Name</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Employee Number</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">State of Posting</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">National ID</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Sex</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Marital Status</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">DOB</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Telephone</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Email</label>
                <input className="app_input" type="text" />
              </Col>
            </Row>
            <Row className="mt-3">
              <div>
                <h6 className="form_section">Employment Details</h6>
              </div>
              <Col md={4} className="mb-2">
                <label className="app_label">Employer</label>
                <input className="app_input" type="text" />
              </Col>
              <Col md={4} className="mb-2">
                <label className="app_label">Address</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Branch</label>
                <input className="app_input" type="text" />
              </Col>{' '}
            </Row>
            <Row className="mt-3">
              <div>
                <h6 className="form_section">Healthcare Options</h6>
              </div>
              <Col md={4} className="mb-2">
                <label className="app_label">HMO</label>
                <input className="app_input" type="text" />
              </Col>
              <Col md={4} className="mb-2">
                <label className="app_label">HCP</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Alternate HCP</label>
                <input className="app_input" type="text" />
              </Col>{' '}
            </Row>
            <Row className="mt-3">
              <div>
                <h6 className="form_section">Spouse</h6>
              </div>
              <Col md={4} className="mb-2">
                <label className="app_label">Last Name</label>
                <input className="app_input" type="text" />
              </Col>
              <Col md={4} className="mb-2">
                <label className="app_label">First Name</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">DOB</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Sex</label>
                <input className="app_input" type="text" />
              </Col>{' '}
            </Row>
            <Row className="mt-3">
              <div>
                <h6 className="form_section">Children</h6>
              </div>
              <Col md={4} className="mb-2">
                <label className="app_label">Last Name</label>
                <input className="app_input" type="text" />
              </Col>
              <Col md={4} className="mb-2">
                <label className="app_label">First Name</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">DOB</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Gender</label>
                <input className="app_input" type="text" />
              </Col>{' '}
              <Col md={4} className="mb-2">
                <label className="app_label">Alternate HCP</label>
                <input className="app_input" type="text" />
              </Col>{' '}
            </Row>
            <div>
              <button className="app_primary_button mt-2">Submit</button>
            </div>
          </form>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  )
}

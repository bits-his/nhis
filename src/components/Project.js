/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { Button, Col, Row, Spinner, Table } from "reactstrap";
import InputForm from "./input/InputForm";
import { _postApi } from "./api";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

export default function Project() {
  const _form = {
    nhia: "",
    program_type: "",
    surname: "",
    firstname: "",
    middlename: "",
    dob: "",
    gender: "",
    entity__tpye: "",
    hmo_code: "",
    hmo: "",
    email: "",
    martial_status: "",
    year_of_p: "",
    callup_no: "",
    state_code: "",
    services_year: "",
    services_batch: "",
    stream: "",
    state_of_origin: "",
    state_of_p: "",
    start_date: "",
    end_date: "",
    zone: "",
    zone_id: "",
    state_of_c: "",
  };
  const [form, setForm] = useState(_form);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  function handleChange(e) {
    const newData = { ...form };
    newData[e.target.id] = e.target.value;
    setForm(newData);
    console.log(newData);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setTableData((p) => [...p, form]);
    setForm(_form);
  };

  const handleDelete = (idx) => {
    const final = tableData.filter((it, id) => id !== idx);
    setTableData(final);
  };

  const handleSubmit = () => {
    setLoading(true);
    _postApi(
      "/enrolee",
      tableData,
      (res) => {
        setTableData([]);
        setLoading(false);
        alert("SuccessFul");
        console.log(res);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  return (
    <div className="p-3">
      <div className="text-center">
        <img src={require("../images/logo.jpeg")} alt="" className="logo" />
      </div>
      <div className="d-flex justify-content-between">
        <h4
          className="mr-5"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
          Back
        </h4>
        <h4 className="app_heading">NYSC Enrollee Management Portal</h4>
        <div></div>
      </div>
      <Row className="p-4 mt-0" onSubmit={handleAdd}>
        <Col md={4}>
          <label>NHIA</label>
          <InputForm
            value={form.nhia}
            id="nhia"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Program_type</label>
          <InputForm
            value={form.program_type}
            id="program_type"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Surname</label>
          <InputForm
            value={form.surname}
            id="surname"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>First Name</label>
          <InputForm
            id="firstname"
            value={form.firstname}
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Middle Name</label>
          <InputForm
            value={form.middlename}
            id="middlename"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>DOB</label>
          <InputForm
            value={form.dob}
            id="dob"
            type="date"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Gender</label>
          <InputForm
            value={form.gender}
            id="gender"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Entity_type</label>
          <InputForm
            value={form.entity__tpye}
            id="entity__tpye"
            onChange={(e) => handleChange(e)}
          />
        </Col>

        <Col md={4}>
          <label>hmo_code</label>
          <InputForm
            value={form.hmo_code}
            id="hmo_code"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>hmo</label>
          <InputForm
            value={form.hmo}
            id="hmo"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Email</label>
          <InputForm
            value={form.email}
            id="email"
            type="email"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Martial_status</label>
          <InputForm
            value={form.martial_status}
            id="martial_status"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Year_of_p</label>
          <InputForm
            value={form.year_of_p}
            id="year_of_p"
            onChange={(e) => handleChange(e)}
          />
        </Col>

        <Col md={4}>
          <label>Callup_no</label>
          <InputForm
            value={form.callup_no}
            id="callup_no"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>State_code</label>
          <InputForm
            value={form.state_code}
            id="state_code"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>services_year</label>
          <InputForm
            value={form.services_year}
            id="services_year"
            onChange={(e) => handleChange(e)}
          />
        </Col>

        <Col md={4}>
          <label>Service_batch</label>
          <InputForm
            value={form.services_batch}
            id="services_batch"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>Stream</label>
          <InputForm
            value={form.stream}
            id="stream"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>State_of_origin</label>
          <InputForm
            value={form.state_of_origin}
            id="state_of_origin"
            onChange={(e) => handleChange(e)}
          />
        </Col>

        <Col md={4}>
          <label>State_of_p</label>
          <InputForm
            value={form.state_of_p}
            id="state_of_p"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>start_date</label>
          <InputForm
            value={form.start_date}
            id="start_date"
            type="date"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>end_date</label>
          <InputForm
            value={form.end_date}
            id="end_date"
            type="date"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>zone</label>
          <InputForm
            value={form.zone}
            id="zone"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>zone_id</label>
          <InputForm
            value={form.zone_id}
            id="zone_id"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <label>state_of_c</label>
          <InputForm
            onChange={(e) => handleChange(e)}
            value={form.state_of_c}
            id="state_of_c"
          />
        </Col>
      </Row>
      <Col md={12}>
        <center>
          <Button className=" mt-3 px-5" color="warning" onClick={handleAdd}>
            Add
          </Button>
        </center>
      </Col>
      <Row className="m-0 p-3">
        <div style={{ width: "100%" }}>
          <Table
            striped
            borderless
            responsive
            size="sm"
            style={{ width: "3000px", fontSize: 14 }}
          >
            <thead>
              <tr>
                <td style={{ fontWeight: "500" }}>S/N</td>
                <td style={{ fontWeight: "500" }}>NHIS</td>
                <td style={{ fontWeight: "500" }}>Program_type</td>
                <td style={{ fontWeight: "500" }}>Surname Name</td>
                <td style={{ fontWeight: "500" }}>First Name</td>
                <td style={{ fontWeight: "500" }}>Middle Name</td>
                <td style={{ fontWeight: "500" }}>DOB</td>
                <td style={{ fontWeight: "500" }}>Gender</td>
                <td style={{ fontWeight: "500" }}>Entity Type</td>
                <td style={{ fontWeight: "500" }}>hmo_code</td>
                <td style={{ fontWeight: "500" }}>hmo</td>
                <td style={{ fontWeight: "500" }}>Email</td>
                <td style={{ fontWeight: "500" }}>Martial_status</td>
                <td style={{ fontWeight: "500" }}>Year_of_p</td>
                <td style={{ fontWeight: "500" }}>Callup_no</td>
                <td style={{ fontWeight: "500" }}>State_code</td>
                <td style={{ fontWeight: "500" }}>services_year</td>
                <td style={{ fontWeight: "500" }}>Service_batch</td>
                <td style={{ fontWeight: "500" }}>Stream</td>
                <td style={{ fontWeight: "500" }}>State_of_origin</td>
                <td style={{ fontWeight: "500" }}>State_of_p</td>
                <td style={{ fontWeight: "500" }}>start_date</td>
                <td style={{ fontWeight: "500" }}>end_date</td>
                <td style={{ fontWeight: "500" }}>zone</td>
                <td style={{ fontWeight: "500" }}>zone_id</td>
                <td style={{ fontWeight: "500" }}>state_of_c</td>
                {/* <td style={{ fontWeight: "500" }}>
                      <div style={{ textAlign: "right" }}>Action</div>
                    </td> */}
              </tr>
            </thead>
            {tableData.map((idx, id) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      <span
                        className="text-danger shadow p-1"
                        onClick={() => handleDelete(id)}
                        style={{ cursor: "pointer" }}
                      >
                        X
                      </span>{" "}
                      {id + 1}
                    </td>
                    <td>{idx.nhia}</td>
                    <td>{idx.program_type}</td>
                    <td>{idx.surname}</td>
                    <td>{idx.firstname}</td>
                    <td>{idx.middlename}</td>
                    <td>{idx.dob}</td>
                    <td>{idx.gender}</td>
                    <td>{idx.entity__tpye}</td>
                    <td>{idx.hmo_code}</td>
                    <td>{idx.hmo}</td>
                    <td>{idx.email}</td>
                    <td>{idx.martial_status}</td>
                    <td>{idx.year_of_p}</td>
                    <td>{idx.callup_no}</td>
                    <td>{idx.state_code}</td>
                    <td>{idx.services_year}</td>
                    <td>{idx.services_batch}</td>
                    <td>{idx.stream}</td>
                    <td>{idx.state_of_origin}</td>
                    <td>{idx.state_of_p}</td>
                    <td>{idx.start_date}</td>
                    <td>{idx.end_date}</td>
                    <td>{idx.zone}</td>
                    <td>{idx.zone_id}</td>
                    <td>{idx.state_of_c}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
          <Col md={12}>
            <center>
              <Button
                className=" mt-3 px-5"
                onClick={loading ? "" : handleSubmit}
                color="primary"
              >
                {loading ? <Spinner /> : "Submit"}
              </Button>
            </center>
          </Col>
        </div>
      </Row>
      {/* </Card> */}
    </div>
  );
}

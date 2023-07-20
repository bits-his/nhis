import React, { useCallback, useEffect, useState } from "react";
import { Button, Row, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { api_url } from "../variable";

function VerificationList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${api_url}/principals`
      // `http://localhost:34567/api/principals`,
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const [search, setSearch] = useState("");
  const handleChanges = ({ target: { value } }) => {
    setSearch(value);
  };
  const searchPrincipal = useCallback(() => {
    fetch(
      `${api_url}/search-principal?name=${search}`
      // `http://localhost:34567/api/search-principal?name=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [search]);
  useEffect(() => {
    searchPrincipal();
  }, [search, searchPrincipal]);
  return (
    <div className="p-3">
      {/* {JSON.stringify(search)} */}
      <div className="text-center">
        <img src={require("../images/logo.jpeg")} alt="" className="logo" />
      </div>
      <h4 className="app_heading">NYSC Enrollee Management Portal</h4>
      <div className="d-flex mt-5">
        <Button 
          color="primary"
          onClick={() => navigate('/create-new-list')}
        >Create New</Button>
        <Button
          color="warning"
          className="mx-2 px-5"
          onClick={() => navigate(`/upload`)}
        >
          Upload Excel
        </Button>
      </div>
      <Row className="mb-1  mb-0 px-3">
        {/* <Col md={6}>
                    <h4>Applications</h4>
                </Col>
                <Col md={6}>
                    <button
                        className="app_primary_button"
                        style={{ float: 'right' }}
                        onClick={() => navigate('/new-verification')}
                    >
                        New
                    </button>
                </Col> */}
      </Row>
      <div className="p-3">
        <input
          type="search"
          className="app_input mb-3"
          name="search"
          onChange={handleChanges}
          placeholder="search with name or EMPID"
        />
        <Table striped borderless responsive size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: "500" }}>S/N</td>
              <td style={{ fontWeight: "500" }}>First Name</td>
              <td style={{ fontWeight: "500" }}>Surname Name</td>
              <td style={{ fontWeight: "500" }}>Type</td>
              <td style={{ fontWeight: "500" }}>DOB</td>
              <td style={{ fontWeight: "500" }}>Entity Type</td>
              <td style={{ fontWeight: "500" }}>Gender</td>
              <td style={{ fontWeight: "500" }}>Employer</td>
              <td style={{ fontWeight: "500" }}>EMPID</td>
              <td style={{ fontWeight: "500" }}>HMOD</td>
              <td style={{ fontWeight: "500" }}>HCP Code</td>
              <td style={{ fontWeight: "500" }}>HCP Name</td>
              <td style={{ fontWeight: "500" }}>HCP Address</td>
              <td style={{ fontWeight: "500" }}>
                <div style={{ textAlign: "right" }}>Action</div>
              </td>
            </tr>
          </thead>
          {loading ? (
            <span>Loading data...</span>
          ) : (
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <td></td>
                  <td>{item.FirstName}</td>
                  <td>{item.Surname}</td>
                  <td>{item.Type}</td>
                  <td>{moment(item.DateOfBirth).format("MMM DD, YYYY")}</td>
                  <td>{item.EntityType}</td>
                  <td>{item.Gender}</td>
                  <td>{item.Employer}</td>
                  <td>{item.EMPID}</td>
                  <td>{item.HMO_ID}</td>
                  <td>{item.HCPCode}</td>
                  <td>{item.HCPName}</td>
                  <td>{item.HCPAddress}</td>
                  <td>
                    <div style={{ textAlign: "right" }}>
                      <button
                        className="action_btn"
                        onClick={() =>
                          navigate(`/view-principal?id=${item.EMPID}`)
                        }
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
}

export default VerificationList;

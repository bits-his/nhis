import React, { useCallback, useEffect, useState } from "react";
import { Button, Row, Spinner, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { api_url } from "../variable";

function VerificationList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchData = useCallback(() => {
    const offset = (currentPage - 1) * pageSize;
    setLoading(true);
    fetch(`${api_url}/principals`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        offset: offset,
        limit: pageSize,
        search: searchTerm,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setData(data.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [currentPage, searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  return (
    <div className="p-3">
      {/* {JSON.stringify(search)} */}
      <div className="text-center">
        <img src={require("../images/logo.jpeg")} alt="" className="logo" />
      </div>
      <h4 className="app_heading">NYSC Enrollee Management Portal</h4>
      <div className="d-flex mt-5">
        <Button color="primary">Create New</Button>
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
                 "id": 2,
            "Nhia": "23439",
            "ProgramType": "N",
            "Surname": "Adewale",
            "FirstName": "Muritala",
            "MiddleName": "Akinyemi",
            "DateOfBirth": "3920294",
            "Gender": "M",
            "EntityType": "FNFN",
            "HmoCode": "394",
            "Hmo": "ZKAW",
            "Email": "ade@gmail.com",
            "MaritalStatus": "Single",
            "YearOfP": "2023",
            "CallupNo": "NYSC/AUE/2022/272416",
            "StateCode": "fkfkr",
            "ServiceYear": "2011",
            "ServiceBatch": "N",
            "Stream": "2",
            "StateOfOrigin": "Kano",
            "StateOfP": "Osun",
            "StartDate": "2023",
            "EndDate": "2024",
            "Zone": "North Central",
            "ZoneId": "9",
            "StateOfC": "Kano"
                </Col> */}
      </Row>
      <div className="p-3">
        <input
          type="search"
          className="app_input mb-3"
          name="searchTerm"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="search with name or EMPID"
        />
        <Table striped borderless responsive size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ fontWeight: "500" }}>S/N</th>
              <th style={{ fontWeight: "500" }}>Nhia</th>
              <th style={{ fontWeight: "500" }}>Surname</th>
              <th style={{ fontWeight: "500" }}>First Name</th>
              <th style={{ fontWeight: "500" }}>Middle Name</th>
              <th style={{ fontWeight: "500" }}>DOB</th>
              <th style={{ fontWeight: "500" }}>Gender</th>
              <th style={{ fontWeight: "500" }}>Entity Type</th>
              <th style={{ fontWeight: "500" }}>HmoCode</th>
              <th style={{ fontWeight: "500" }}>Hmo</th>
              <th style={{ fontWeight: "500" }}>Email</th>
              <th style={{ fontWeight: "500" }}>Marital Status</th>
              <th style={{ fontWeight: "500" }}>Year Of Posting</th>
              <th style={{ fontWeight: "500" }}>Callup No</th>
              <th style={{ fontWeight: "500" }}>StateCode</th>
              <th style={{ fontWeight: "500" }}>Service Year</th>
              <th style={{ fontWeight: "500" }}>Service Batch</th>
              <th style={{ fontWeight: "500" }}>Stream</th>
              <th style={{ fontWeight: "500" }}>State Of Origin</th>
              <th style={{ fontWeight: "500" }}>State Of Posting</th>
              <th style={{ fontWeight: "500" }}>Start Date</th>
              <th style={{ fontWeight: "500" }}>End Date</th>
              <th style={{ fontWeight: "500" }}>Zone</th>
              <th style={{ fontWeight: "500" }}>Zone Id</th>
              <th style={{ fontWeight: "500" }}>State Of Camping</th>
            </tr>
          </thead>
          {loading ? (
            <span>
              Loading data... <Spinner />
            </span>
          ) : (
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <td className="d-flex">
                    <button
                      className="action_btn"
                      onClick={() =>
                        navigate(`/view-principal?id=${item.EMPID}`)
                      }
                    >
                      View
                    </button>
                    {index + 1}
                  </td>
                  <td>{item.Nhia}</td>
                  <td>{item.Surname}</td>
                  <td>{item.FirstName}</td>
                  <td>{item.MiddleName}</td>
                  <td>{item.DateOfBirth}</td>
                  <td>{item.Gender}</td>
                  <td>{item.EntityType}</td>
                  <td>{item.HmoCode}</td>
                  <td>{item.Hmo}</td>
                  <td>{item.Email}</td>
                  <td>{item.MaritalStatus}</td>
                  <td>{item.YearOfP}</td>
                  <td>{item.CallupNo}</td>
                  <td>{item.StateCode}</td>
                  <td>{item.ServiceYear}</td>
                  <td>{item.ServiceBatch}</td>
                  <td>{item.Stream}</td>
                  <td>{item.StateOfOrigin}</td>
                  <td>{item.StateOfP}</td>
                  <td>{item.StartDate}</td>
                  <td>{item.EndDate}</td>
                  <td>{item.Zone}</td>
                  <td>{item.ZoneId}</td>
                  <td>{item.StateOfC}</td>
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

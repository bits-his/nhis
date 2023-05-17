import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'reactstrap'
import logo from '../images/logo.PNG'
import { useNavigate } from 'react-router-dom'

function VerificationList() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(
            `https://yge.wvi.mybluehost.me/test/nhis-server/api/principals`,
        )
            .then((response) => response.json())
            .then((data) => {
                setLoading(false)
                setData(data.results)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }, [])
    const [state, setSearch] = useState({
        search: "",
    });
    const handleChanges = ({ target: { name, value } }) => {
        setSearch({ [name]: value });
    };
    let rows = [];
    data &&
        data.slice(0, 50).forEach((item, index) => {
            if (
                item.Firstname.toLowerCase().indexOf(state.search.toLowerCase()) ===
                -1 && item.Surname.toLowerCase().indexOf(state.search.toLowerCase()) ===
                -1
            ) {

                return;
            }
            rows.push(
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.Firstname}</td>
                    <td>{item.Surname}</td>
                    <td>{item.Type}</td>
                    <td>{item.DOBString}</td>
                    <td>{item.EntityType}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Employer}</td>
                    <td>{item.EMPID}</td>
                    <td>{item.HMO_ID}</td>
                    <td>{item.HCPCode}</td>
                    <td>{item.HCPName}</td>
                    <td>{item.HCPAddress}</td>

                    <td>
                        <div style={{ textAlign: 'right' }}>
                            <button className='action_btn' onClick={() => navigate(`/view-principal?id=${item.EMPID}`)}>View</button>
                        </div>
                    </td>
                </tr>
            );
        });
    return (
        <div className="p-3">
            {/* {JSON.stringify(data)} */}
            <div className="text-center">
                <img src={logo} alt="" className="logo" />
            </div>
            <h4 className="app_heading">
                National Health Insurance Agency Enrollee Status Verification Portal
            </h4>

            <Row className="mb-1 mt-5 mb-0 p-3">
                <Col md={6}>
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
                </Col>
            </Row>
            <div className="p-3">
                <input type='search' className='app_input mb-3' name="search"
                    onChange={handleChanges} placeholder='search...' />
                <Table striped borderless size="sm" style={{ fontSize: 14 }}>
                    <thead>
                        <tr>
                            <td style={{ fontWeight: '500' }}>S/N</td>
                            <td style={{ fontWeight: '500' }}>First Name</td>
                            <td style={{ fontWeight: '500' }}>Surname Name</td>
                            <td style={{ fontWeight: '500' }}>Type</td>
                            <td style={{ fontWeight: '500' }}>DOB</td>
                            <td style={{ fontWeight: '500' }}>Entity Type</td>
                            <td style={{ fontWeight: '500' }}>Gender</td>
                            <td style={{ fontWeight: '500' }}>Employer</td>
                            <td style={{ fontWeight: '500' }}>EMPID</td>
                            <td style={{ fontWeight: '500' }}>HMOD</td>
                            <td style={{ fontWeight: '500' }}>HCP Code</td>
                            <td style={{ fontWeight: '500' }}>HCP Name</td>
                            <td style={{ fontWeight: '500' }}>HCP Address</td>
                            <td style={{ fontWeight: '500' }}>
                                <div style={{ textAlign: 'right' }} >Action</div>
                            </td>
                        </tr>
                    </thead>

                    {loading ? <span>Loading data...</span> :
                        <tbody>
                            {rows}
                        </tbody>
                    }

                </Table>
                {rows.length === 0 ?
                    <div className="text-center mt-5">
                        <p className="">No results found for "{state.search}"</p>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default VerificationList

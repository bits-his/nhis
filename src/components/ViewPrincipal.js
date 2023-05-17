import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { useQuery } from './UseQ'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { VerificationPDF } from './VerificationPDF'
import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'
function ViewPrincipal() {
    // const params = useParams()
    // const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const query = useQuery()
    const id = query.get('id')
    const navigate = useNavigate()
    useEffect(() => {
        // setLoading(true)
        fetch(
            `https://yge.wvi.mybluehost.me/test/nhis-server/api/principalsDependants?id=${id}`,
            // `http://localhost:34567/api/principalsDependants?id=${id}`,
        )
            .then((response) => response.json())
            .then((data) => {
                // setLoading(false)
                setData(data.results)
            })
            .catch((err) => {
                // setLoading(false)
                console.log(err)
            })
    }, [id])
    console.log(id)
    return (
        <div className="p-3">
            {/* {JSON.stringify(id)} */}
            {/* {JSON.stringify(data)} */}
            <div className="text-center">
                <img src={require('../images/logo.PNG')} alt="" className="logo" />
            </div>
            <h4 className="app_heading">
                National Health Insurance Agency Enrollee Status Verification Portal
            </h4>
            {/* {JSON.stringify(principal)} */}
            <Row className='mt-5 mb-2 web_div'>
                <Col md={2}></Col>
                <Col md={4} sm={4} lg={4}>
                    <h5 className='' style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}><ArrowLeft />Back</h5>
                </Col>
                <Col md={4} sm={4} lg={4}>
                    <div style={{ float: 'right' }}>
                        <PDFDownloadLink
                            document={<VerificationPDF data={data} id={id}/>}
                            fileName="VerificationPDF"
                        >
                            {({ loading }) =>
                                loading ? (
                                    <button style={{ marginRight: 0 }} className="app_primary_button">
                                        Loading Document...
                                    </button>
                                ) : (
                                    <button className="app_primary_button" style={{ marginRight: 0 }}>
                                        {' '}
                                        Download PDF
                                    </button>
                                )
                            }
                        </PDFDownloadLink>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className='mt-5 mb-2 mobile_div'>
                <Col md={6} sm={6} xs={6} lg={6}>
                    <h5 className='' style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}><ArrowLeft />Back</h5>
                </Col>
                <Col md={6} sm={6} xs={6} lg={6}>
                    <div style={{ float: 'right' }}>
                        <PDFDownloadLink
                            document={<VerificationPDF data={data} id={id}/>}
                            fileName="VerificationPDF"
                        >
                            {({ loading }) =>
                                loading ? (
                                    <button style={{ marginRight: 0 }} className="app_primary_button">
                                        Loading Document...
                                    </button>
                                ) : (
                                    <button className="app_primary_button" style={{ marginRight: 0 }}>
                                        {' '}
                                        Download PDF
                                    </button>
                                )
                            }
                        </PDFDownloadLink>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <VerificationPDF data={data} id={id} />
                    </PDFViewer>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}

export default ViewPrincipal

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import logo from '../images/logo.PNG'
// import { useParams } from 'react-router-dom'
import { useQuery } from './UseQ'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { VerificationPDF } from './VerificationPDF'
function ViewPrincipal() {
    // const params = useParams()
    // const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const query = useQuery()
    const id = query.get('id')
    useEffect(() => {
        // setLoading(true)
        fetch(
            `http://localhost:34567/api/principalsDependants?id=${id}`,
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
                <img src={logo} alt="" className="logo" />
            </div>
            <h4 className="app_heading">
                National Health Insurance Scheme Enrollee Status Verification Form
            </h4>
            {/* {JSON.stringify(principal)} */}
            <Row>
                <Col md={2}></Col>
                <Col md={8}>

                    <PDFDownloadLink
                        document={<VerificationPDF />}
                        fileName="VerificationPDF"
                    >
                        {({ loading }) =>
                            loading ? (
                                <button style={{ marginRight: 0 }} className="app_primary_button mb-2 mt-5">
                                    Loading Document...
                                </button>
                            ) : (
                                <button className="app_primary_button mb-2 mt-5" style={{ marginRight: 0 }}>
                                    {' '}
                                    Download PDF
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <VerificationPDF data={data} />
                    </PDFViewer>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}

export default ViewPrincipal

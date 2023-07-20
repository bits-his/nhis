/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

export default function Signin() {
    const navigate = useNavigate()
  return (
    <div className='sigin_div'>
        <div className='sign-in'>
            <div className="text-center">
                <img src={require("../images/logo.jpeg")} alt="" className="logo" />
            </div>
            <h4 className="app_heading">NYSC Enrollee Management Portal</h4>
            <Row>
                <Col md={12}>
                    <Label className='label_tag'>
                        User Name
                    </Label>
                    <input
                        className='input_tag'
                    />
                </Col>
                <Col md={12}>
                    <Label className='label_tag'>
                        PassWord
                    </Label>
                    <input
                        className='input_tag'
                        type='password'
                    />
                </Col>
                <FormGroup switch className='sign-in-switch'>
                    <Label className='label_switch_tag'>
                        <Input type="switch" role="switch" />
                        Remember Me
                    </Label>
                </FormGroup>
                <center>
                    <button 
                        className='sign-in-bottom'
                        onClick={() => navigate('/dashboard')} 
                    >Login</button>
                </center>
                <div className='mt-3'>
                    <center>
                        <p className='sign-in-para1'>Don't have an account?<a href='#' className='sign-in-href'
                            onClick={()=> navigate('/sign-up')}
                        > Sign Up</a></p>
                    </center>
                </div>
            </Row>
        </div>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate()
    const styles = {
        cursor: 'pointer'
    }
  return (
    <div>
      <div className="text-center mb-4">
        <img src={require("../images/logo.jpeg")} alt="" className="logo" />
      </div>
      <div className="my-1" style={styles} onClick={() => navigate('/dashboard')}>
        Dashboard
      </div>
      <div className="my-1" style={styles} onClick={() => navigate()}>
        Create New Erollee
      </div>
    </div>
  );
}

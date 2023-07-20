import React, { useState } from "react";
import { Container, Table, Button } from "reactstrap";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { _postApi } from "./api";
import { Spinner } from "reactstrap";

const ExcelImporter = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      setData(excelData);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = () => {
    setLoading(true);
    _postApi(
      "/insertExcel",
      data,
      (response) => {
        console.log("Data submitted successfully:", response.data);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  return (
    <Container>
      <div {...getRootProps()} style={{ cursor: "pointer", marginBottom: 20 }}>
        <input {...getInputProps()} />
        <div>Drag and drop an Excel file here, or click to select one</div>
      </div>

      {data.length > 0 && (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="primary" onClick={loading ? "" : handleSubmit}>
            {loading ? <Spinner /> : "Submit your data"}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ExcelImporter;

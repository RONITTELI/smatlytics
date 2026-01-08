import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./dashboard.css";

const DynamicDataGenerator = () => {
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("patient");
  const [dataType, setDataType] = useState("clean");

  // Small realistic mess
  const lightlyMessy = (value, type) => {
    if (dataType === "clean") return value;

    const chance = Math.random();

    // only ~20% rows affected
    if (chance > 0.2) return value;

    if (type === "age") return `${value} yrs`;
    if (type === "date") return chance < 0.5 ? "12-08-2024" : "2024/08/12";
    if (type === "email") return value.toUpperCase();
    if (type === "phone") return value.replace(/(\d{5})/, "$1 ");
    if (type === "duplicate") return "DUPLICATE VALUE";

    return null;
  };

  const generateData = () => {
    let generated = [];
    let duplicateName = "John Doe";

    for (let i = 1; i <= limit; i++) {
      if (category === "patient") {
        generated.push({
          Patient_ID: i,
          Name: i % 4 === 0 ? duplicateName : `Patient ${i}`,
          Age: lightlyMessy(Math.floor(Math.random() * 40) + 20, "age"),
          Visit_Date: lightlyMessy("2024-08-12", "date"),
          Contact: lightlyMessy(`98765432${i}`, "phone")
        });
      }

      if (category === "employee") {
        generated.push({
          Employee_ID: i,
          Name: i % 5 === 0 ? duplicateName : `Employee ${i}`,
          Department: "IT",
          Salary: Math.floor(Math.random() * 50000) + 30000,
          Email: lightlyMessy(`emp${i}@company.com`, "email")
        });
      }

      if (category === "company") {
        generated.push({
          Company_ID: i,
          Company_Name: i % 3 === 0 ? "Tech Corp" : `Company ${i}`,
          Location: "India",
          Founded_Date: lightlyMessy("2015-06-10", "date"),
          Employees: Math.floor(Math.random() * 500)
        });
      }

      if (category === "salary") {
        generated.push({
          ID: i,
          Name: i % 4 === 0 ? duplicateName : `Person ${i}`,
          Basic: 25000,
          HRA: 8000,
          Total: 33000
        });
      }

      if (category === "school") {
        generated.push({
          School_ID: i,
          School_Name: i % 3 === 0 ? "Green Valley School" : `School ${i}`,
          City: "Delhi",
          Established: lightlyMessy("2002-05-18", "date"),
          Students: Math.floor(Math.random() * 2000)
        });
      }

      if (category === "college") {
        generated.push({
          College_ID: i,
          College_Name: i % 3 === 0 ? "ABC College" : `College ${i}`,
          University: "State University",
          Founded: lightlyMessy("1998-07-21", "date"),
          Students: Math.floor(Math.random() * 5000)
        });
      }
    }

    setData(generated);
  };

  const downloadExcel = () => {
    if (!data.length) return;

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(blob, `${category}_${dataType}_data.xlsx`);
  };

  return (
    <div className="container">
      <h2>Dynamic Data Generator</h2>

      <label>
        Records:
        <input
          type="number"
          min="1"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </label>

      <label>
        Dataset Type:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="employee">Employee</option>
          <option value="company">Company</option>
          <option value="salary">Salary</option>
          <option value="school">School</option>
          <option value="college">College</option>
        </select>
      </label>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="clean"
            checked={dataType === "clean"}
            onChange={() => setDataType("clean")}
          />
          Clean Data
        </label>

        <label>
          <input
            type="radio"
            value="messy"
            checked={dataType === "messy"}
            onChange={() => setDataType("messy")}
          />
          Light Messy Data
        </label>
      </div>

      <button onClick={generateData}>Generate Data</button>
      <button onClick={downloadExcel} disabled={!data.length}>
        Download Excel
      </button>

      <pre className="code-block">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default DynamicDataGenerator;

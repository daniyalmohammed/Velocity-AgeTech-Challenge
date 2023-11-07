import React, { useState } from 'react';
import './Sell.css';

function EquipmentTable() {
  const [tableData, setTableData] = useState([]);
  const [databaseLink, setDatabaseLink] = useState('');
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const rows = csvData.split('\n');
      const newTableData = [];

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].split(',');
        if (row.length === 5) {
          newTableData.push(row);
        }
      }

      setTableData(newTableData);
    };

    reader.readAsText(file);
  };

  const handleTableSubmit = () => {
    // You can handle table submission here
    // For example, send the tableData to a server or update a state variable.
  };

  const handleDatabaseLinkSubmit = () => {
    // You can handle the database link submission here
    // For example, save the database link to a state variable or send it to a server.
  };

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][cellIndex] = value;
    setTableData(updatedTableData);
  };

  return (
    <div>
      <h1>Upload All your Products in One Click!</h1>
      <input type="file" onChange={handleFileUpload} accept=".csv" />
      <table>
        <thead>
          <tr>
            <th>Equipment Type</th>
            <th>Model</th>
            <th>Count</th>
            <th>Price</th>
            <th>Rental Period</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleTableSubmit}>Submit</button>

      <div className="database-link-box">
        <h2>Have a database you'd like to link?</h2>
        <input
          type="text"
          placeholder="Database Link"
          value={databaseLink}
          onChange={(e) => setDatabaseLink(e.target.value)}
        />
        <button onClick={handleDatabaseLinkSubmit}>Submit Database Link</button>
      </div>
    </div>
  );
}

export default EquipmentTable;

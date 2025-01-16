import React from 'react';

    function ReturnEquipmentPage() {
      return (
        <div>
          <h2>Return Equipment</h2>
          <div className="form-container">
            <label>Name</label>
            <input type="text" />
            <label>Date</label>
            <input type="date" />
            <label>Time</label>
            <input type="time" />
            <label>Instructor</label>
            <input type="text" />
            <label>Return</label>
            <select>
              <option value="all">All</option>
              <option value="selected">Selected</option>
            </select>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Returned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beaker</td>
                  <td>1</td>
                  <td>
                    <input type="number" defaultValue="1" />
                  </td>
                </tr>
                <tr>
                  <td>Erlenmeyer Flask</td>
                  <td>1</td>
                  <td>
                    <input type="number" defaultValue="1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button>Confirm</button>
        </div>
      );
    }

    export default ReturnEquipmentPage;

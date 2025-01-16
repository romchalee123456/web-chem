import React from 'react';

    function BorrowingHistoryPage() {
      return (
        <div>
          <h2>Borrowing History</h2>
          <div className="form-container">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Instructor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>2023-05-20</td>
                  <td>10:00</td>
                  <td>Dr. Smith</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>2023-05-21</td>
                  <td>14:00</td>
                  <td>Dr. Jones</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default BorrowingHistoryPage;

import React from 'react';

    function EditEquipmentPage() {
      return (
        <div>
          <h2>Edit/Add Equipment</h2>
          <div className="form-container">
            <label>Search</label>
            <input type="text" />
            <button>Search</button>
          </div>
          <div className="form-container">
            <h3>Add New Equipment</h3>
            <label>Name</label>
            <input type="text" />
            <label>Quantity</label>
            <input type="number" />
            <label>Unit</label>
            <input type="text" />
            <label>Image</label>
            <input type="file" />
            <button>Add</button>
          </div>
        </div>
      );
    }

    export default EditEquipmentPage;

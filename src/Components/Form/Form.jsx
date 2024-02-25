import React, { useState } from "react";
function EditForm({ warehouse, onSave }) {
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({
      ...editedWarehouse,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(editedWarehouse);
  };

  return (
    <div>
      <h2>Edit Warehouse</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={editedWarehouse.name}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Code: </label>
        <input
          type="text"
          name="code"
          value={editedWarehouse.code}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>City: </label>
        <input
          type="text"
          name="city"
          value={editedWarehouse.city}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Space Available: </label>
        <input
          type="number"
          name="space_available"
          value={editedWarehouse.space_available}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Type: </label>
        <input
          type="text"
          name="type"
          value={editedWarehouse.type}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Cluster: </label>
        <input
          type="text"
          name="cluster"
          value={editedWarehouse.cluster}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Is Registered: </label>
        <select  className="form-control"
          name="is_registered"
          value={editedWarehouse.is_registered}
          onChange={handleInputChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <label>Is Live: </label>
        <select  className="form-control"
          name="is_live"
          value={editedWarehouse.is_live}
          onChange={handleInputChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <button onClick={handleSaveClick} className="btn btn-warning">Save</button>
    </div>
  );
}

export default EditForm;
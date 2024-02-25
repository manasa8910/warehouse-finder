import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './WarehouseDetails.css';
import EditForm from '../Form/Form'

function WarehouseDetails() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const idNumber = parseInt(id);
  const [isEditing, setIsEditing] = useState(false);
 

  const storeWarehouses = useSelector((reduxStoreData) => reduxStoreData.warehouselist) || [];


  const warehouse = storeWarehouses.find((warehouse) => warehouse.id === idNumber);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (editedWarehouse) => {
    dispatch({
      type: "UPDATE_WAREHOUSE", 
      payload: {
        id: idNumber, 
        updatedData: editedWarehouse, 
      },
    });
  
    setIsEditing(false); 
  };

  

  return (
    <>
    
    <div className="details">
      

      {isEditing ? (
        <EditForm warehouse={warehouse} onSave={handleSave} />
      ) : (
        <div>
          {warehouse ? (
            <>
              <h2 className="warehouse-title">Name: {warehouse.name}</h2>
              <p className="warehouse-info">Code: {warehouse.code}</p>
              <p className="warehouse-info">City: {warehouse.city}</p>
              <p className="warehouse-info">Space Available: {warehouse.space_available}</p>
              <p className="warehouse-info">Type: {warehouse.type}</p>
              <p className="warehouse-info">Cluster: {warehouse.cluster}</p>
              <p className="warehouse-info">
                Is Registered: {warehouse.is_registered ? 'Yes' : 'No'}
              </p>
              <p className="warehouse-info">
                Is Live: {warehouse.is_live ? 'Yes' : 'No'}
              </p>
              <button onClick={handleEditClick} className='btn btn-outline-primary'>Edit</button>
            </>
          ) : (
            <p>No data available for this warehouse.</p>
          )}
        </div>
      )}
    </div>
    <button style={{marginLeft:"12em",marginBottom:"4em"}} onClick={()=>navigate('/')} className='btn btn-info'>Home</button>
    </>
  );
}

export default WarehouseDetails;
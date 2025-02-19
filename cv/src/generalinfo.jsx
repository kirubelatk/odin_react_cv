import PropTypes from 'prop-types';
import './generalinfostyle.css';
import { useState, useEffect } from 'react';

function GeneralInfo({ info, setInfo }) {
  const [isEditing, setIsEditing] = useState(true);
  const [localFormData, setLocalFormData] = useState(info);

  // Sync local state with parent's info prop
  useEffect(() => {
    setLocalFormData(info);
  }, [info]);

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(localFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="input-section">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          value={localFormData.fname}
          onChange={handleChange}
          placeholder='First Name'
          readOnly={!isEditing}
        /><br />

        <input
          type="text"
          name="lname"
          value={localFormData.lname}
          onChange={handleChange}
          placeholder='Last Name'
          readOnly={!isEditing}
        /><br />

        <input
          type="email"
          name="email"
          value={localFormData.email}
          onChange={handleChange}
          placeholder='Email'
          readOnly={!isEditing}
        /><br />

        <input
          type="tel"
          name="num"
          value={localFormData.num}
          onChange={handleChange}
          placeholder='Phone Number'
          readOnly={!isEditing}
        /><br />
        
        <input
          type="text"
          name="address"
          value={localFormData.address}
          onChange={handleChange}
          placeholder='Address'
          readOnly={!isEditing}
        /><br /><br />

        <textarea 
          name="note" 
          value={localFormData.note} 
          rows={8} 
          cols={40}
          placeholder='Write something short that explains you as a person more' 
          onChange={handleChange}
          readOnly={!isEditing}
        /><br />

        <div className='buttons'>
          
            <button type="submit">
              Submit
            </button>
          
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          
        </div>
      </form>
    </div>
  );
}

GeneralInfo.propTypes = {
  info: PropTypes.shape({
    fname: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    num: PropTypes.string,
    address: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  setInfo: PropTypes.func.isRequired
};

export default GeneralInfo;
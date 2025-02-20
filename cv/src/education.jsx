import PropTypes from 'prop-types';
import './generalinfostyle.css';
import { useState, useEffect } from 'react';

function Education({ edu, setedu }) {
  const [isEditing, setIsEditing] = useState(true);
  const [localFormData, setLocalFormData] = useState(edu);

  // Sync local state with parent's edu prop
  useEffect(() => {
    setLocalFormData(edu);
  }, [edu]);

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setedu(localFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className='input-section'>
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='school'
          value={localFormData.school}
          onChange={handleChange}
          placeholder='Institute'
          readOnly={!isEditing}
        />
        <br />

        <input
          type="text"
          name='level'
          value={localFormData.level}
          onChange={handleChange}
          placeholder='Level'
          readOnly={!isEditing}
        />
        <br />

        <input
          type="date"
          name='start'
          value={localFormData.start}
          onChange={handleChange}
          placeholder='Start'
          readOnly={!isEditing}
        />
        <br />

        <input
          type="date"
          name='end'
          value={localFormData.end}
          onChange={handleChange}
          placeholder='End'
          readOnly={!isEditing}
        />
        <br />

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

Education.propTypes = {
  edu: PropTypes.shape({
    school: PropTypes.string,
    level: PropTypes.string,
    start: PropTypes.string,  // Changed to string
    end: PropTypes.string     // Changed to string
  }).isRequired,
  setedu: PropTypes.func.isRequired
};

export default Education;
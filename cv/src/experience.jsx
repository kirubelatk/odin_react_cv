import PropTypes from 'prop-types';
import './generalinfostyle.css';
import { useState, useEffect } from 'react';

function Experience({ expe, setExpe }) {
  const [isEditing, setIsEditing] = useState(true);
  const [localFormData, setLocalFormData] = useState(expe);

  // Sync local state with parent's expe prop
  useEffect(() => {
    setLocalFormData(expe);
  }, [expe]);

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpe(localFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className='input-section'>
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          value={localFormData.company}
          onChange={handleChange}
          placeholder='Company'
          readOnly={!isEditing}
        />
        <br />

        <input
          type="text"
          name="position"
          value={localFormData.position}
          onChange={handleChange}
          placeholder='Position'
          readOnly={!isEditing}
        />
        <br /><br />

        <textarea
          name="resp"
          value={localFormData.resp}
          onChange={handleChange}
          rows={8}
          cols={40}
          placeholder='Main Responsibilities'
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

        <div className="buttons">
          
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

Experience.propTypes = {
  expe: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    resp: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  setExpe: PropTypes.func.isRequired,
};

export default Experience;
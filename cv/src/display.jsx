import PropTypes from 'prop-types';
import './displays.css'
import profilep from './pc.png'
function Display({ info }) {
  return (
    <div className="display-section">

      
      <div className="info-card">
        
        <div className='fir'>
          <div className="firfir">
          <img src={profilep} alt="profile" className='pp'/>
          <p className='bigname'><strong> {info.fname} {info.lname}</strong> </p>
          </div>
          <div className="firsec">
        
        <p>
        <svg  className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
        <strong>{info.email}</strong> </p>
        <p> 
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        <strong>{info.num}</strong> </p>

        <p>
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <strong>{info.address}</strong> </p>
        </div>
        
        </div>
       

       <div className="secsec">
        <h1>Personal Information:</h1>
        <p className='secsecfir'> {info.note}</p>
       </div>
      </div>
     <hr />
    </div>
  );
}

Display.propTypes = {
  info: PropTypes.shape({
    fname: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    num: PropTypes.string,
    address: PropTypes.string,
    note: PropTypes.string,
  }).isRequired
};

export default Display;
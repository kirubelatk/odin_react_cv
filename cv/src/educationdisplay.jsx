import propTypes from 'prop-types';
import './displays.css'

function EducationDisplay({edu}){

    return(
        <>
        
        <div className='edu-card'>
        

          <div className="edusec">
            <div>
            <h1>Education:</h1>
            </div>
            <div className='edu-infos'>
            <div className='edu-info'>
              
            <p className='top'> {edu.level}</p> 
            <p className='med'>{edu.school} <hr /></p>
            </div>
           
            <div className='dates'>
            <p className='med'>{edu.start} - {edu.end}  </p>
            
            </div>
            </div>
          
          </div>
           
            
        </div>
        </>
    )
}

EducationDisplay.propTypes = {
  edu: propTypes.shape({
    school: propTypes.string,
    level: propTypes.string,
    start: propTypes.date,
    end: propTypes.date
  }).isRequired,
  setEduInfo: propTypes.func.isRequired
};

export default EducationDisplay;
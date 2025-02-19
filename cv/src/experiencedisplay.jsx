
import PropTypes from 'prop-types';
import './displays.css'
function ExperienceDisplay({expe}){

    return(

        <>
        
           
            <div className='expe-cont'>
              
            <div>
            <h1>Experiences:</h1>
            </div>
                <div className='expe-card'>
                <div className='expe-info'>
                <p className='top'> {expe.position}</p>
                <p className='med'> {expe.company}</p>
                
                <p className='mnr' > <strong> Main Responsibilities:</strong> <br /><br />{expe.resp}</p>
                <hr />
                </div>
                <div className="dates">
                <p className='med'> {expe.start} - {expe.end}</p>
                </div>
               
               </div>
        

            </div>
            
        </>
    )
}

ExperienceDisplay.propTypes = {
    expe: PropTypes.shape ({
        company: PropTypes.string,
        position: PropTypes.string,
        resp: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
 }).isRequired,
}

 export default ExperienceDisplay;
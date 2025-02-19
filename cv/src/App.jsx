import { useState } from 'react';
import Display from './display';
import GeneralInfo from './generalinfo';
import Education from './education';
import EducationDisplay from './educationdisplay';
import Experience from './experience';
import ExperienceDisplay from './experiencedisplay';
import './App.css';
function App() {
  
  const [geninfo, setGeninfo] = useState({
    fname: '',
    lname: '',
    email: '',
    num: '',
    address: '',
    note: '',
  });

  const [edu, setedu] = useState({
    school: '',
    level: '',
    start: '',
    end: '',
  });

  const [expe, setExpe] = useState({
    company: '',
    position:'',
    resp:'',
    start:'',
    end:'',
  });

  return (
    <>
   
    <div className="content">
    
    <div className="sec1">
    <h1>Enter CV Data</h1>
    < GeneralInfo info={geninfo} setInfo={setGeninfo} />
      <Education edu={edu} setedu={setedu} />
      <Experience expe={expe} setExpe={setExpe} />
    </div>
      
      <div className="sec2">
        
        <div className="gen">
        <Display info={geninfo} />
          
        </div>
      
      <div className='educ'>
      <EducationDisplay edu={edu} />
     
      </div>
      <hr />
      
      <div className="exper">
      <ExperienceDisplay expe={expe} />
      </div>
      
      </div>

    </div>
    
  
    </>
  );
}

export default App;
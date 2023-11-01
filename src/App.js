import './logo.svg'
import { useState } from 'react';
import './App.css'
import validation from './Validation.js';
function App() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    numberofemployees: '',
    description: '',
    jobtitle:'',
    age:'',
    Cv:''
  })
  const [errors, setErrors] = useState({});
  function handleInput(event){
    const newObj = { ...values, [event.target.name]: event.target.value };
      setValues(newObj)
    }
    function handleValidation(event){
    event.preventDefault();
    setErrors(validation(values));
    }
  return (
    <div className="style">
      <form onSubmit={handleValidation}>
        <div className="divider">
          <h1>Form validation</h1>
          <hr></hr>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="ui field">
            <div className="field">
              <h3>Company Data</h3>
            </div>
            <div className="field">
              <label>Name</label><br></br>
              <input type="text" name="name" placeholder="Name" onChange={handleInput} />
              {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className="field">
              <label>E-mail</label><br></br>
              <input type="text" name="email" placeholder="example@gmail.com" onChange={handleInput} />
              {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>
            <div className="field">
              <label>Number of employees</label><br></br>
              <input type="number" name="numberofemployees" placeholder="Number of employees" onChange={handleInput} />
              {errors.numberofemployees && <p style={{color:"red"}}>{errors.numberofemployees}</p>}
            </div>
            <div className="field">
              <label>Description</label><br></br>
              <textarea name="description" placeholder="Description" onChange={handleInput}></textarea>
            </div>
            <div className="field">
              <h3>Employee Data</h3>
            </div>
            <div className="field">
              <label>Name</label><br></br>
              <input type="text" name="name" placeholder="Name" />
              {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className="field">
              <label>E-mail</label><br></br>
              <input type="text" name="email" placeholder="E-mail" />
              {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>
            <div className="field">
              <label>Job title</label><br></br>
              <select name="Job title:" id="Job title:" onChange={handleInput}>
                <option value="accountant">Accountant</option>
                <option value="software developer">Software developer</option>
                <option value="software tester">Software tester</option>
                <option value="manager">Manager</option>
              </select>
              {errors.jobtitle && <p style={{color:"red"}}>{errors.jobtitle}</p>}
            </div>
            <div className="field">
              <label>Age</label><br></br>
              <input type="number" name="age" placeholder="Age" onChange={handleInput} />
              {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
            </div>
            <div className="field">
              <label>Cv (.pf)</label><br></br>
              <input type="file" name="Cv" placeholder=".pdf" onChange={handleInput}/> <br></br>
            </div>
            <div className="button">
              <button className="fluid ui button blue">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default App;


import React, {useState} from 'react';

const UserLogin = ({onSubmit, errors={}}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {email: emailError, password: passwordError} = errors;
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(username, password);
  };
  return (
    <>
      <button type="button" className="btn btn-sm d-flex align-items-center secondary p2pu-btn gray mx-0 dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Log In
      </button>
      <div className="dropdown-menu dropdown-menu-end login-dropdown shadow" aria-labelledby="loginDropdown">
        <form onSubmit={handleSubmit} >
          <div id="div_id_username" className="form-group">
            <label htmlFor="id_username" className="col-form-label  requiredField">Username<span className="asteriskField">*</span> </label>
            <div className="">
              <input 
                type="text" 
                name="username" 
                autoFocus="" 
                className={"textinput textInput form-control" + (emailError?" is-invalid":"") }
                required="" 
                id="id_username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
              />
              { emailError && 
                <div className="invalid-feedback">{emailError}</div>
              }
            </div> 
          </div> 
          <div id="div_id_password" className="form-group">
            <label htmlFor="id_password" className="col-form-label  requiredField">Password<span className="asteriskField">*</span> </label> 
            <div className=""> 
              <input 
                type="password"
                name="password"
                className={"textinput textInput form-control" + (passwordError?" is-invalid":"") }
                required=""
                id="id_password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
              { passwordError && 
                <div className="invalid-feedback">{passwordError}</div>
              }
            </div>
          </div>
          { typeof(errors) == 'string' && 
            <div className="alert alert-danger pt-2">
              Please ensure you are using the correct email address and password
            </div>
          }
          <div className="row align-items-center justify-content-between" id="div_id_submit" >
            <div className="col-7">
              <a href="https://learningcircles.p2pu.org/en/accounts/password_reset/" target="_blank" className="text-sm">forgot password?</a>
            </div>               
            <div className="col-5">
              <button type="submit" className="btn p2pu-btn btn-sm orange">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLogin



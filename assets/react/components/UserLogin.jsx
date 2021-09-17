import React, {useState} from 'react';

const UserLogin = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(username, password);
  };
  return (
    <nav id="log-in" className="order-2 order-md-4 me-0 dropdown">
      <button type="button" className="btn btn-sm d-flex align-items-center secondary p2pu-btn gray mx-0 ms-auto dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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
                className="textinput textInput form-control" 
                required="" 
                id="id_username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
              /> 
            </div> 
          </div> 
          <div id="div_id_password" className="form-group">
            <label htmlFor="id_password" className="col-form-label  requiredField">Password<span className="asteriskField">*</span> </label> 
            <div className=""> 
              <input 
                type="password"
                name="password"
                className="textinput textInput form-control"
                required=""
                id="id_password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
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
    </nav>
  );
}

export default UserLogin



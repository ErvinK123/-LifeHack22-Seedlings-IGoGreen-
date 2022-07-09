import React from 'react';
import '../../App.css';

document.body.style.backgroundColor = "#D9F8C4";
export default function SignUp() {
  return (<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}> 
	     <form>
              <label for="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
              <label for="pwd">Password:</label><br />
                <input type="password" id="pwd" name="pwd" /><br />
	      <button className='btn btn-primary bm-3 mt-3 mb-1' >Sign-up</button><br /> 
              <p>Already have an account? <a href="">Login</a></p>
	  </form> 	  </div>);
}

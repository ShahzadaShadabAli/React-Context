import { useEffect, useState } from "react";
import useAuthContext from "./hook/useAuthContext";

const Login = () => {

  let [ email, setEmail ] = useState('')
    let [ password, setPassword ] = useState('')
    const {state, dispatch} = useAuthContext()

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        dispatch({type: "login", payload: user})
      }
    }, [])

    function handleSubmit (e) {
      e.preventDefault()
      if (email === "james@example.com" && password === "123456") {
        alert("Login Successful")
        } else {
          alert("Incorrect Credentials")
          }
    }

    const handleLogout = () => {
      localStorage.removeItem('user')
      dispatch({type: 'logout'})
    }


    return ( 
        <div className="Login" style={{marginTop: 150}}>
                    <form style={formStyle} onSubmit={handleSubmit}>
                    {state.user && <div>{state.user.email} <button onClick={handleLogout}>Logout</button></div>}
                  {!state.user && <div>
                  <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} name="email" style={inputStyle} />
                    </div>
                    <div style={fieldStyle}>
                    <label style={labelStyle} autoCorrect="false" htmlFor="password">Password:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} id="password" name="password" style={inputStyle} />
                    </div>
                    <button type="submit" style={buttonStyle}>Submit</button>
                  </div>}
                </form>
        </div>
    );
}
const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };
  
  const fieldStyle = {
    marginBottom: '15px'
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };
  
  const textareaStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px'
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  };
 
export default Login;
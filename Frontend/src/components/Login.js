import { useState } from "react"
import { useLogin } from "../Hooks/useLogin"
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="log" onSubmit={handleSubmit}>
      <h3 >LOGIN</h3>
      <div className="form-control">
      
      <label>Email address:</label>
      <input className="form-control"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      
      <label>Password:</label>
      <input 
      className="form-control"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      </div>
      <button  disabled={isLoading} className= "button btn btn-warning" > Log in </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login
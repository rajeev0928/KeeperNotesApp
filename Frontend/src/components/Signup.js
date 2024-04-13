import { useState } from "react"
import { useSignup } from "../Hooks/useSignup"
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await signup(email, password)
  }

  return (
    <form className="log" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="form-control">
      <label>Email address:</label>
      <input 
      className="form-control"
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
      <button disabled={isLoading} className= "button btn btn-warning">Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
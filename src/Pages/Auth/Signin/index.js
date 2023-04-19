import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import { LoginIcon } from '@heroicons/react/outline'
import styled from 'styled-components'
const A = styled.div`
    
    height:400px;
    width:500px;
    border:2px solid yellow;
    position:relative;
    justify-content:center;
    left :450px;
    top:50px;
   
   
`;
const B = styled.div`
  position:relative;
  justify-content:center;
  left:190px;
  color:white;
  top:20px;
  font-size:50px;
`;

const C = styled.input`
  width:250px;
  position:relative;
  top:20px;
  left:130px;
  padding:5px;
  margin-top:10px;
  border-radius:5px;
  border: 2px solid #fccf03;
  color:black;
  
`;
const D = styled.span`
  position:relative;
  top:50px;
  left:120px;
  span{
    display: flex;
    flex-direction: row;
  }
  p{
    color: #fccf03;
    padding-left: 5px;
  }
`;

const E = styled.button`
 position:relative;
 justify-content:center;
 top:80px;
 left:150px;
 background-color:#fccf03;
 display:flex;
 flex-direction:row;
 margin-top:30px;
 align-items:center;
 width:40%;
 height:50px;
 color:black;
 



`;
const Signin = () => {

  const { currentUser, login, setCurrentUser, setIsSubmitting, loggedIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error!")
    }
    setIsSubmitting(false)
  }

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  return (
    <div>  
      <A>
      <div >
        <div>
          <B>
          Login
          </B>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignIn}
        >
          <div>
            
            <div>
              {/* <label>Email</label> */}
             
              <C
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                placeholder="Email Address"
                required
              />
            </div>
            

            <div>
              {/* <label>Password</label> */}
              <C
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div>
              <div>
                <D>
                  <span>
                  Don't have an account? Sign up{" "}
                  <Link to="/signup">
                    <p>
                    {" "}
                    here.
                    </p>
                  </Link>
                  </span>
                </D>
              </div>
            </div>
            <div>
              
              <E type="submit">
                <LoginIcon aria1-hidden="true" className="h-6 w-6"/>
                Login
              </E>
              
            </div>
          </div>
        </form>
      </div>
      </A>
    </div>
  )
}

export default Signin
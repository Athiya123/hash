import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import validations from './validations'
import styled from 'styled-components'
const A = styled.div`
    
    height:450px;
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
  left:180px;
  color:white;
  top:20px;
  font-size:50px;
`;

const C = styled.input`
  width:250px;
  position:relative;
  top:10px;
  left:130px;
  padding:5px;
  margin-top:10px;
  border-radius:5px; 
  border: 2px solid #fccf03;
  color:black;
  
`;
const F = styled.input`
  width:250px;
  position:relative;
  top:10px;
  left:130px;
  padding:5px;
  margin-top:10px;
  border-radius:5px;
  border: 2px solid #fccf03;
  color:black;
  
`;
const G = styled.input`
  width:250px;
  position:relative;
  top:10px;
  left:130px;
  padding:5px;
  margin-top:10px;
  border-radius:5px;
  border: 2px solid #fccf03;
  color:black;
  
`;
const H= styled.input`
  width:250px;
  position:relative;
  top:10px;
  left:130px;
  padding:5px;
  margin-top:10px;
  border-radius:5px;
  border: 2px solid #fccf03;
  color:black;
  
`;
const D = styled.span`
position: relative;
top:25px;
left :130px;
margin-top: 30px;
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
background-color: #fccf03;
  color: black;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 55%;
  height: 20px;
  position: relative;
  left:125px;
  align-items: center;
  justify-content: center;
  padding: 20px;
 
`;
const J = styled.span`
color: red;
font-size: 12px;
display:flex;
position: relative;
top:15px;
left:125px;
align-items:center;
`
const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div >
      <A>
        <div>
          <B >Sign Up</B>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
        >
          <div >
            <div>
            {errors.firstName && <span>{errors.firstName}</span>}
              {/* <label >First Name</label> */}
              <C
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
              
            </div>

            <div>
            {errors.lastName && <span>{errors.lastName}</span>}
              {/* <label>Last Name</label> */}
              <C
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>
            <div>
            {errors.email && <span >{errors.email}</span>}
              {/* <label>Email</label> */}
              <F
                type="email"
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <J>{errors.password}</J>}
              {/* <label >Password</label> */}
              <G
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <J>{errors.passwordConfirm}</J>}
              {/* <label >Password Confirm</label> */}
              <H
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
              />
              
            </div>
            <div >
              <div >
                <D>
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" >
                    <p>{" "}
                    here.
                    </p>
                  </Link>
                </span>

                </D>
              </div>
            </div>
            <div >
              <E type="submit" >
                <IdentificationIcon className = 'h-6 w-6'
                  aria1-hidden="true"
                />
                Sign Up
              </E>
            </div>
          </div>
        </form>
      </A>
    </div>
  )
}

export default Signup

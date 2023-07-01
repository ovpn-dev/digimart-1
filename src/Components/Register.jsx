import React, {useState} from 'react'
import './css/register.css'
import logo from './assets/logoWhite.png'
import hands from './assets/hands.png'
import GImage from './assets/GImage.png'
import {Link} from 'react-router-dom'
import eyes from './assets/eyes.svg'
import {toast} from 'react-toastify'
import { app,  } from './firebase/Firebase'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const[firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handlePasswordToggle = ()=>{
    setShowPassword(!showPassword)
  }

  const handleConfirmToggle =()=>{
    setShowConfirm(!showConfirm)
  }
const navigate= useNavigate()
  const onSubmit = async (e)=>{
    e.preventDefault()
    const auth = getAuth(app)
    if(password !== confirm){
      console.log('passswords do not match')
      toast.error('Passwords do not match')
    }
    else{
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user
        const db = getFirestore(app);
        const savedUser = await addDoc(collection(db, "users"), {
          firstName: firstname,
          lastName : lastname,
          Email: email,
          Number: phone
        });
        console.log(savedUser)
        console.log(user)
        toast.success('registration successful')
        navigate('/login')
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message
        toast.error(`code : ${errorCode}, msg: ${errorMessage}`)
        console.log(error)
      }
    }
    
  }

 
  const loginWithGoogle = async (e)=>{
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const Credentials = GoogleAuthProvider.credentialFromResult(result)
      const token = Credentials.accessToken
      const user =result.user
      console.log(user)
      toast('registration successful')
    } catch (error) {
      // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(`${errorCode}, ${errorMessage}`)
    }
  }
  return (
    <div className='Container'>
       <div className="left">
          <div className="child">
          <img src={logo} alt="digimart" className="whitelogo" />
          <img src={hands} alt="handshake" className="hands" width='550' />
          </div>
       </div>

       <div className="right">
         <h2 className="regisHead">Register</h2>
         <form action="" className="registrationForm" >
           <input type='text' placeholder='First name' value={firstname} className='firstName' 
           onChange={(e)=> setFirstname(e.target.value)} />

           <input type="text" placeholder='Last name' value={lastname} className="lastName"
            onChange={(e)=> setLastname(e.target.value)} />
           <input type="email" placeholder='Email' className="email" value={email}
            onChange={(e)=> setEmail(e.target.value)} />
           <input type="number" className="number" value={phone} placeholder='Phone number'
           onChange={(e)=> setPhone(e.target.value)} />
           <span className="pass">
           <input type={showPassword? 'text' : 'password'} value={password} onChange={(e)=> setPassword(e.target.value)} className="password" placeholder='Password' />
           <img src={eyes} alt="visibility" className="eyes" onClick={handlePasswordToggle} />
           </span>
           <span className="con">
           <input type={showConfirm? 'text': 'password'} value={confirm} onChange={(e)=> setConfirm(e.target.value)} placeholder='Confirm password' className="confirm" />
           <img src={eyes} alt="visibility" className="eyes" onClick={handleConfirmToggle} />
           </span>
           
           <button className="register" type='submit' onClick={onSubmit}>
            CREATE AN ACCOUNT 
          </button>
          <p className="or"><hr className='left-line' /> or <hr className='right-line' /></p>
          <button className="google" type='button' onClick={loginWithGoogle}>
            <span className="goog">
            <img src={GImage} alt='google' className='googl' width='40'/>
            </span> 
            <span className="words">Signup with Google</span>
            
          </button>
          <p className="loginW">Already have an account? <Link className='log' to='/login'>Login</Link></p>
         </form>
       </div>
    </div>
  )
}

export default Register
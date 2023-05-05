import { useState } from 'react';
import './SignUp.css';
import { useTheme } from '../Theme';


const Func = () => {
    return(
        <p>Password should have atleast 8 chacters</p>
    );
}



export default function SignUp(){
    const { theme }= useTheme();
    
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Foto, setFoto] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState({value : "", isTouched : false});
    const [Role, setRole] = useState("role");
    const Valid = () => {
        return ( 
            FirstName && 
            Email && 
            Foto &&
            Password.value.length > 8 && 
            Role !== "Role" && "role"
          ); 
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({value : "", isTouched : false});
        setRole("role");
    }
    
    const sign = (e) => {
        e.preventDefault();
        console.log(FirstName, LastName, Email, Password.value, Role, Foto);
        alert("Account created!"); 
        clearForm();
    }

    return (
        <div className='sign' 
        style={{
            backgroundColor: theme === "light" ? "white" : "blue",
            color: theme === "light" ? 'blue':"white"
          }}
        >
            <form onSubmit={sign}>
                <h1>Sign Up</h1>
                <fieldset>
                    <div className='f m'>
                        <label htmlFor='fn' className='l'>First Name <sup>*</sup> </label>
                        <input id='fn' type='text' placeholder='First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}  />
                    </div>
                    <div className='l m'>
                        <label htmlFor='ln' className='l'>Last Name </label>
                        <input id='ln' type='text' placeholder='Last Name' value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='p m'>
                        <label htmlFor='p' className='p'>Profile foto <sup>*</sup> </label>
                        <input id='p' type='file' placeholder='img' value={Foto} onChange={(e) => setFoto(e.target.value)}  />
                    </div>
                    <div className='email m'>
                        <label htmlFor='email' className='l'>Email address<sup>*</sup></label>
                        <input id='email' type='email' placeholder='Email' value={Email} onChange={(e) => { setEmail(e.target.value); }} />
                    </div>
                    <div className='pw m'>
                        <label htmlFor='pw' className='l'>Password <sup>*</sup></label>
                        <input id='pw' type='password' placeholder='Password' value={Password.value} onChange={(e) => { 
                        setPassword({ ...Password, value: e.target.value });}}  onBlur={() => { 
                            setPassword({ ...Password, isTouched: true });
                          }}  />
                        {Password.isTouched && Password.value.length <= 8 ? <Func /> : null}
                    </div>
                    <div className='role m'>
                        <label htmlFor='role' className='l'>Role <sup>*</sup></label>
                        <select value={Role} onChange={(e) => setRole(e.target.value)} >
                            <option value='role'>Role</option>
                            <option value='individual'>Individual</option>
                            <option value='business'>Business</option>
                        </select>
                    </div>
                    <button type='submit' disabled={!Valid()}>Create Account</button>
                </fieldset>
            </form>
        </div>
    )
}
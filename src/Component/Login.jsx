import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase';

const Login = () => {
    const [data, setData] = useState(null)
    const auth = getAuth(app)
    console.log(app);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider()
      const handaleToGoogle = () =>{
            signInWithPopup(auth , provider)
            .then(result =>{
                const user = result.user;
                setData(user)
                console.log(user);
            })
            .catch(error =>{
                console.log(error);
            })
        }
            const handaleToGoogleOut = () =>{
                signOut(auth)
                .then(result =>{
                    setData(null)
                })
                .catch(error =>{
                    console.log(error);
                })
      }

      const handaleToGit = () =>{
        signInWithPopup(auth , provider2)
        .then(result =>{
            const user = result.user;
            setData(user)
            console.log(user);
        })
        .catch(error =>{
            console.log("error",error.message);
        })
    }
    return (
        <>
        <div>
        {
          data?<button onClick={handaleToGoogleOut}>SingOut</button>  
          :
          <>
          <button onClick={handaleToGoogle}>Google</button> 
          <button onClick={handaleToGit}>gitHub</button> 

          </>
        }
        </div>
        {data?
            <div>
            <h1>user:{data.displayName}</h1>
            <p>user:{data.email}</p>
            <img src={data.photoURL} alt="" />
        </div>:''
        }
        </>
        
    );
};

export default Login;
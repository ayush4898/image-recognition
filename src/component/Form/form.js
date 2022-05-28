import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture} from '../Webcam/Webcam' 



const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [img,setImage] = useState('');
    const submitForm = async() => {
      console.log('yo',img);
        alert(<h1>{name} {email} {img}</h1>);
        setName('');
        setEmail('');
        setImage('');
        localStorage.setItem()
        // try {
        //   const docRef = await addDoc(collection(db, "users"), {
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        //   });
        //   console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <form className="form">
                        <WebcamCapture changeImage = {setImage}/>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home
import { useState } from 'react'
import styles from '../Form/Form.module.css'
import validations from './validations'
import rickGIF from './mortyeyes.png'

export default function Form({login}){
    const [userData, setUserData]= useState({
        email:'',
        password:'',
    })

    const [errors,setErrors]=useState({
        email:'',
        password:'',
    })

    const handleChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validations({
                ...userData,
                [event.target.name]: event.target.value
            } ,userData, errors)
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        login(userData)
    }

    const [passShow, setPassShow]= useState(false)

    const togglePassword=(e)=>{
        e.preventDefault()
        setPassShow(!passShow)
    }

    return(
        <div  className={styles.loginBox}>
        <img className={styles.rickImage} src={rickGIF} alt="RickImage" />
        <form action="" onSubmit={handleSubmit}>
        <main className={styles.main}><h3>Login</h3></main>

            <div className={styles.emailBox}>
            <label htmlFor="email" className={styles.emailBoxLabel}></label>
        <input required placeholder='Email' type="text" name="email" value={userData.email} onChange={handleChange} className={styles.emailBoxInput}  />
        {errors.email && <p className={styles.warning}>{errors.email}</p>}
            </div>

        <div className={styles.passBox}>
        <label htmlFor="password"  className={styles.emailBoxLabel}></label>
        <input required placeholder='Password' type={passShow ? 'text' : 'password'} name="password" value={userData.password} onChange={handleChange} className={styles.emailBoxInput} />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <button className={styles.eyeButton} onClick={togglePassword}>
        <i  className={styles.eye} class={passShow ? "bi bi-eye-slash" :"bi-eye" } id="eye"></i>
        </button>

        {errors.password && <p className={styles.warning}>{errors.password}</p>}
        
        </div>

        <div className={styles.buttonDiv}>
        <button type="submit" className={styles.buttonSubmit }>Submit</button>
        <span className={styles.spanButton}></span>
        </div>


    </form>
        </div>

    )
}


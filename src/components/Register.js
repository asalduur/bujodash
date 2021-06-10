import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  const {handleRegister} = useContext(UserContext)
  return (
    <Formik
      initialValues: {
        email: '',
        username: '',
        password: ''
      },
      validateionSchema: Yup.object({
        email: Yup.string().email('Invalid email address.').required('Required'),
        username: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
      }
    })
  >



  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="sphere"></div>
      <div className="sphere-1"></div>
      <div className="sphere-2"></div>
      <div className="form">
      <span className="form-name">Sign up</span>
      {/* <label htmlFor='Email'>Your Email</label> */}
      <input 
        required
        id='email-required'
        label='email'
        type='text'
        placeholder='Enter Email'
        {...formik.getFieldProps('email')}
      />
      {formik.errors.email && formik.touched.email ? (
        <span className='error'>{formik.errors.email}</span>
      ) : null}
      <input 
        required
        id='username-required'
        label='Username'
        type='text'
        placeholder='Enter username'
        {...formik.getFieldProps('username')}
      />
      {formik.errors.username && formik.touched.username ? (
        <span className='error'>{formik.errors.username}</span>
      ) : null}
      <input 
        required
        id='password-required'
        label='Password'
        type='password'
        placeholder='Enter password'
        {...formik.getFieldProps('password')}
      />
      {formik.errors.password && formik.touched.password ? (
        <span className='error'>{formik.errors.password}</span>
      ) : null}

      <button
        className='auth'
        onClick={() => handleRegister(formik.values.email, formik.values.username, formik.values.password)}
      >
        Sign up
      </button>
      <p>Have an account?<Link to='/'> <button className='btn-links'>Sign in</button></Link></p>
      </div>
    </form>
  )
  )
}

export default Register
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Login = () => {
  const {handleLogin} = useContext(UserContext)
  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >

  {formik => (
    <div className='form-container' onSubmit={formik.handleSubmit}>
      <div className="sphere"></div>
      <div className="sphere-1"></div>
      <div className="sphere-2"></div>
      <div className="form">
        <span className="form-name">Log in</span>
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
          type='submit'
          onClick={() => handleLogin(formik.values.username, formik.values.password)}>
              Log in
        </button>
        <p>Not a member?<Link to='/register'> <button className='btn-links'>Register</button></Link></p>
      </div>
    </div>
  )}
  </Formik>
  )
}

export default Login
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email :(').required('Required')
})

const Login = () => {

  const [success, setSuccess] = useState(false)
  const [validation, setValidation] = useState(false)

  return (
    <div className="container form_container">
      <h1>Welcome Back</h1>
      <hr />
      <h4>Sign in</h4>
      <Formik
        initialValues={{ email: 'adrian@gmail.com', password: 'testing123' }}
        validationSchema={LoginSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="twelve columns">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="u-full-width"
                />
                {
                  errors.email && touched.email
                    ? <div className="error_label">{errors.email}</div>
                    : null
                }
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="u-full-width"
                />
                {
                  errors.password && touched.password
                    ? <div className="error_label">{errors.password}</div>
                    : null
                }
              </div>
            </div>

            <button type="submit">
              Login
            </button>

          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login

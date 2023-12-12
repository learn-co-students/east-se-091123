import { useState } from 'react'
import { Box, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as yup from 'yup'

function Signup({ setUser }) {
    const [signup, setSignup] = useState(true)

    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Username too Short!').max(15, 'Username too Long!'),
        email: yup.string().email('Invalid email'),
        password: yup.string().min(5, 'Password too Short!').max(15, 'Password too Long!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('username required'),
        password: yup.string().required('password required')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signup ? signupSchema : loginSchema,
        onSubmit: (values) => {
            const endpoint = signup ? '/users' : '/login'
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(({ user }) => {
                        setUser(user)
                        // navigate into site
                    })
                } else { 
                    
                    console.log('errors? handle them')
                }
            })
        }
    })

    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    return (
        <Container maxWidth='sm'>
            {/* { Object.keys(formik.errors).map((key) => <li>{formik.errors[key]}</li>) } */}
            <Button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</Button>
            <form onSubmit={formik.handleSubmit}>
              
                    <TextField 
                        id="username" 
                        label="Username" 
                        variant="outlined" 
                        error={!!formik.errors.username}
                        helperText={formik.errors.username}
                        required
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
               
                <Box>
                    {signup && <TextField 
                        id="email"
                        label="email"
                        variant="outlined" 
                        error={!!formik.errors.email}
                        helperText={formik.errors.email}
                        required
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />}
                </Box>
                <Box>
                    <TextField 
                        id="password"
                        label="password"
                        type="password"
                        variant="outlined" 
                        error={!!formik.errors.password}
                        helperText={formik.errors.password}
                        required
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </Box>
                <Box>
                    {signup && <TextField 
                        id="passwordConfirmation"
                        label="passwordConfirmation"
                        type="password"
                        variant="outlined" 
                        error={!!formik.errors.passwordConfirmation}
                        helperText={formik.errors.passwordConfirmation}
                        required
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                    />}
                </Box>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </Container>
    )
}

export default Signup;
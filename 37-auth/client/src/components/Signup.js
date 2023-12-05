import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as yup from 'yup'

function Signup({ setUser }) {
    const [signup, setSignup] = useState(true)

    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Too Short!').max(15, 'Too Long!').required('Required!'),
        email: yup.string().email('Invalid email'),
        password: yup.string().min(5, 'Too Short!').max(15, 'Too Long!').required('Required!')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: signupSchema,
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
        <Box>
            {/* {formik.errors} */}
            <Button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</Button>
            <form onSubmit={formik.handleSubmit}>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
            
                {signup && <TextField 
                    id="email"
                    label="email"
                    variant="outlined" 
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />}
                <TextField 
                    id="password"
                    label="password"
                    type="password"
                    variant="outlined" 
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </Box>
    )
}

export default Signup;
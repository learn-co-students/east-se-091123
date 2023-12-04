import { Button, FormControl, InputLabel, TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as yup from 'yup'

function Signup({ setUser }) {

    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Too Short!').max(15, 'Too Long!').required('Required!'),
        email: yup.string().email('Invalid email').required('Required'),
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
            fetch('/users', {
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

    return (
        <div>
            {/* {formik.errors} */}
     
            <form onSubmit={formik.handleSubmit}>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
            
                <TextField 
                    id="email"
                    label="email"
                    variant="outlined" 
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
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
        </div>
    )
}

export default Signup;
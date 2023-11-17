import { useState } from 'react'


function App() {

    const [ form, setForm ] = useState( {} )
    const updateForm = e => {
        setForm( f => ( { ...f, [e.target.name]: e.target.value } ) )
    }

    const attemptNewUser = e => {
        e.preventDefault()
        fetch( '/users', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( form )
        } )
            .then( r => {

                console.log( 'Is everything ok?', r.ok )

            } )
    }

    return (
        <>
            <form onSubmit={ attemptNewUser }>
                <div>
                    name: 
                    <input name="name" onChange={ updateForm }/>
                </div>
                <div>
                    age : 
                    <input name="age" onChange={ updateForm } type="number"/>
                </div>
                <input type="submit"/>
            </form>
        </>
    );
}

export default App;

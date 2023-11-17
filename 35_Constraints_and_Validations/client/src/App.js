import { useState, useEffect } from 'react'


function App() {

    const [ error, setError ] = useState( '' )



    const [ users, setUsers ] = useState( [] )
    const addUser = newUser => {
        setUsers( u => [ ...u, newUser ] )
    }

    useEffect( () => {
        fetch( '/users' ).then( r => r.json() ).then( setUsers )
    }, [] )

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

                if( r.ok ) {
                    r.json().then( newUser => {
                        setError( '' )
                        addUser( newUser )
                    } )
                } else {
                    r.json().then( eObj => {
                        setError( eObj.error )
                    } )
                }

            } )
    }

    const allBad = { background: 'yellow', color: 'red' }

    return (
        <>
            <div style={allBad}>{ error ? error : null }</div>
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
            { users.map( u => <h1 key={u.id}>{ u.name }</h1> ) }
        </>
    );
}

export default App;

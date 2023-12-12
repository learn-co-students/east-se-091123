import { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'

import ProductionCard from './ProductionCard'

function ProductionContainer() {
    const [productions, setProductions] = useState([])

    useEffect(() => {
        fetch('/productions')
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(setProductions)
                } else {
                    console.log('not logged in')
                }
            })
    }, [])

    return (
     <div>
         <Typography variant="h1" component="h2"><span>F</span>latIron Theater <span>C</span>ompany</Typography>
         <Container maxWidth='sm'>
             {productions.map(production => <ProductionCard  key={production.id} production={production}  />)}
         </Container>
     </div>
    )
  }
  
export default ProductionContainer
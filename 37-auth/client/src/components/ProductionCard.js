import { Card } from "@mui/material"

function ProductionCard({production}) {
    const {title, budget, genre, image, id} = production

    return (
      <Card id={id}>
          <div>
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>$ {budget}</p>
          </div>
          <img src={image}/>
      </Card>
    )
}

export default ProductionCard
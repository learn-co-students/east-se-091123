
import HogTile from './HogTile'

const PigPen = ({ hogs }) => {

    /*
        [ {}, {}, {}, {} ]
        [ <HogTile />, <HogTile />, <HogTile />, <HogTile /> ]
    */


    const hogTileComponents = hogs.map( hogObj => {
        return <HogTile key={ hogObj.name } hog={ hogObj } />
    } )


    return (
        <div className="ui grid container">
           { hogTileComponents }
        </div>
    )
}


export default PigPen
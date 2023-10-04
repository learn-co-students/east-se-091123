
import Article from './Article'

const ArticleList = ({ posts }) => {

    /*
        "posts" is an array of objects

        we don't want to put an array of objects on the page, we want an array
        of components

        no:  [ {}, {}, {} ]

        yes: [ <Article />, <Article />, <Article /> ]
                                      
                                    the return value of this 
                                    function, the callback we're giving to 
                                    map, is what goes in the new array
                                             |
                                             V                        */
    const ourNewArray = posts.map( (postObj) => {
        return (
            <Article 
                title={ postObj.title } 
                date={ postObj.date }
                preview={ postObj.preview }
            />
        )
    } )


    return (
        <main>
            { ourNewArray }
        </main>
    )
}

export default ArticleList
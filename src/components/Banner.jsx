

function Banner(props) {
   console.log(props)
   const {ingredientName} = props

    return(
        <div>
            <h1>{ingredientName}</h1>
        </div>
    )
}

export default Banner;
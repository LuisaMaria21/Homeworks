export const GiftGrid = ({category}) => {

    console.log(category)
    const pesos = {
        "Pitbull":"Perros bravos", "Schnauzer": "Perros lindos", "Chihuahua": "Perros medio lindos y bravos"
    }

    return(
        <>
            <h3> Raza: {category} </h3>
            <p> {pesos[category]} </p>
        </>
    )
}
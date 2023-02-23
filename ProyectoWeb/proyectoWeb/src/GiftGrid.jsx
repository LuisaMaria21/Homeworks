import { useState } from "react"
import { useEffect } from "react"
import GifItem from './GifItem'

const getGifs = async (category) => {
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bHLmzL9XZKwPFZ8SaMiLA78jsJTJV8fI&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs


}


export const GifGrid = ({ category }) => {
    const [images, Setimages] = useState([])


    const InvoGifs = async() => {
        const variablegifs =await getGifs(category)
        Setimages(variablegifs)
        
    }
    useEffect(()=> {
        InvoGifs()
    },[])

    return (
        <>
            <h3>{category}</h3>
            <div className= "card-grid">
                {
                    images.map((image, key)=>{
                        return <GifItem key={key} {...image}/>
                    })
                }
            </div>
        </>
    )
}
export default GifGrid
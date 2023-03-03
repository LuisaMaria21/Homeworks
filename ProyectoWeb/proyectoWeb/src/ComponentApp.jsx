import { func } from "prop-types";
import { useState } from "react"
import { AddCategory } from "./AddCategory";
import GiftGrid from "./GiftGrid";

const defaultValue = ['Alegría']

function ComponentApp() {
  const [categories, setCategories] = useState(defaultValue);


  const addCategory = (cualquiera) => {

    const auxCategories = [...categories]
    auxCategories.push(cualquiera)
    setCategories(auxCategories)

  }

  return (
    <>
      <h1>Gifs</h1>
      <AddCategory onAddCategory={addCategory} />
      <ol>
        {
          categories.map(
            (category, key) => {

              return <GiftGrid category={category} key={key} />
            }
          )
        }
      </ol>
    </>
  )
}
export default ComponentApp;
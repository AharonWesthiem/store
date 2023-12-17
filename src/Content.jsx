import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Menu from "./Menu";
import CartContext from "./CartContext";
import ItemDetails from "./ItemDetails";
import ItemNotFound from "./ItemNotFound";
 

 
export default function Content({ items }) {
  
  const [displayItems, setDisplayItems] = useState(items)
  const [itemD, setItemD] = useState()
  console.log(itemD);


  useEffect(() => { setDisplayItems(items);handelUrl() }, [items])

  const handelUrl = () => {
    const url = location.pathname.split("/")
    if (url[1] === "item" && url[2]) {
      // let item = items.find(item => item.id === url[2])
      fetch(`https://jbh-mockserver.onrender.com/items/${url[2]}`)
      .then(r => r.json())
      .then(data => {
      setItemD( data || {})
      })
    }
  }


  const hanleColor = (c) => {
    setDisplayItems(c ? items.filter(f => f.color == c) : items)
  }
  const hanleSearch = (txt) => {
    setDisplayItems(txt ? items.filter(f => f.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) : items);
  }
  

  

  const colors = []
  items.forEach(f => { if (!colors.includes(f.category)) colors.push(f.category) })

  return (
    <div className="content">
      {itemD ? Object.keys(itemD).length ? <ItemDetails item={itemD} /> : <ItemNotFound />
        :
        <>
          <Menu hanleColor={hanleColor} hanleSearch={hanleSearch} colors={colors} />
          <ItemList displayItems={displayItems} />
        </>
      }
    </div>
  )
}

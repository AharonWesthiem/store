import { useEffect, useState } from "react";
import Item from "./Item"
import { useParams } from 'react-router-dom'
export default function ItemList({ }) {
    const [displayItem, setDisplayItem] = useState([])
    const { catName } = useParams();
   
    useEffect(() => {
        fetch('https://jbh-mockserver.onrender.com/categories/' + catName)
      .then(r => r.json())
      .then(data => {
        setDisplayItem(data)
      })
    },[])
    
  

    return (
        <div>
            <div id="itemList">
                {displayItem
                    .map(f => <Item key={f.id} item={f}/>)}
            </div>
        </div>
    )
}

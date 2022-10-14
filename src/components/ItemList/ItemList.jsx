import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({items}) => {

    return(
        <div className="productsContainer">
            {
                items.map(product=>(
                    <Item key={product.id} item={product}/>
                ))
            }
        </div>
    )
}
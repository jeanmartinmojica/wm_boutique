import { ItemCount } from "../ItemCount/ItemCount"
import Card from "react-bootstrap/Card";
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({itemProduct}) => {

    const {addProductContext} = useContext(CartContext)

    const [newStock, setNewStock] = useState (itemProduct.stock)

    const addProduct = (quantity)=>{
        setNewStock(itemProduct.stock - quantity)
        addProductContext(itemProduct, quantity)
    }

    return(
        <div>
            <Card style={{ width: "18rem"}}>
            <Card.Img
                variant="top"
                src={itemProduct.pictureUrl}/>
                <Card.Body>
                <Card.Title>{itemProduct.title}</Card.Title>
                <Card.Text>{`${itemProduct.price} USD`}</Card.Text>
                <Card.Text>{`On Stock: ${newStock}`}</Card.Text>
                <ItemCount onAdd={addProduct} itemProduct={itemProduct}/>
                </Card.Body>
                </Card>
        
        </div>
    )
}
import { ItemCount } from "../ItemCount/ItemCount"
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({item}) => {

    const {addProductContext} = useContext(CartContext)

    const addProduct = (quantity)=>{
        addProductContext(item, quantity)
    }

    return(
        <div>
            <Card style={{ width: "18rem"}}>
            <Card.Img
                variant="top"
                src={item.pictureUrl}/>
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{`${item.price} USD`}</Card.Text>
                <ItemCount onAdd={addProduct}/>
                </Card.Body>
                </Card>
        
        </div>
    )
}
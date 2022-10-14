import { ItemCount } from "../ItemCount/ItemCount"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemDetail = ({item}) => {

    return(
        <div>
            <Card style={{ width: "18rem"}}>
            <Card.Img
                variant="top"
                src={item.pictureUrl}/>
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{`${item.price} USD`}</Card.Text>
                <ItemCount/>
                <Button variant="success">Buy</Button>
                </Card.Body>
                </Card>
        
        </div>
    )
}
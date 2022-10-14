import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return(
        <div className='productsCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Link to={`/item/${item.id}`}>
                        <Button variant="success">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
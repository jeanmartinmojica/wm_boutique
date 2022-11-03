import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [itemProduct, setItemProduct] = useState({})

    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        const getProducts = async () =>{
            const queryRef = collection(db, 'products')
            const response = await getDocs (queryRef)
            const documents = response.docs
            const results = documents.map((element)=>{
                return({
                    ...element.data(),
                    id: element.id
                })
            })
            if(id){
                const foundProduct = results.find(el=>el.id === id)
                setItemProduct(foundProduct)
                setLoading(false)
            }else{
                setItemProduct(results)
                setLoading(false)
            }
        }
        getProducts()
    },[id])

    return(
        <div className="itemListContainer">
            <div>
                {loading ? (
                    <div className='spinner'>
                        <Spinner animation="border" variant="success" />
                    </div>
                ) : (
                <ItemDetail itemProduct={itemProduct}/>
                )}
            </div>
        </div>
    )
}
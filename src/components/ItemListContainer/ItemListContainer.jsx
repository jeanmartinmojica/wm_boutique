import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css'

export const ItemListContainer = () =>{

    const {categoryId} = useParams()

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getData = async () => {
            const queryRef = collection(db, 'products')
            const response = await getDocs(queryRef)
            const documents = response.docs
            const results = documents.map((element)=>{
                return({
                    ...element.data(),
                    id:element.id   
                })
            })
            if(categoryId){
                const filteredProducts = results.filter(el=>(el.category === categoryId))
                setProducts(filteredProducts)
                setLoading(false)
            }else{
                setProducts(results)
                setLoading(false)
            }
        }
        getData()
    },[categoryId])

        return(
            <div>
                {loading ? (
                    <div className='spinner'>
                        <Spinner animation="border" variant="success" />
                    </div>
                ) : (
                <ItemList items={products}/>
                )}
            </div>
        )
    }
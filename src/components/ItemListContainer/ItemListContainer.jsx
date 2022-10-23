import {collection, /* doc */ /* getDoc */ getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase'
//import { arrProducts } from "../DataBase/products"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = () =>{

    //const categoryName = useParams().categoryName
    const {categoryId} = useParams()

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true);

    /* const getProducts = ()=>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
            resolve(arrProducts)
            },3000)
        })
    }

    useEffect(()=>{
            getProducts().then((result)=>{
                if(categoryId){
                    const filteredProducts = result.filter(el=>(el.category === categoryId))
                    setProducts(filteredProducts)
                    setLoading(false)
                }else{
                    setProducts(result)
                    setLoading(false)
                }
        })
    },[categoryId]) */

    useEffect(()=>{
        const getData = async () => {
            //crear referencia del punto de acceso de la info.
            const queryRef = collection(db, 'products')
            const response = await getDocs(queryRef)
            //console.log(response)
            const documents = response.docs
            //contenido de un documento
            //console.log(documents[0].data())
            //console.log(documents[0].id)
            // const newDoc = {
            //     ...documents[0].data(),
            //     id: documents[0].id
            // }
            // console.log(newDoc)
            const results = documents.map((element)=>{
                return({
                    ...element.data(),
                    id:element.id   
                })
            })
            //
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
                    <div>
                        <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                        </Button>
                    </div>
                ) : (
                <ItemList items={products}/>
                )}
            </div>
        )
    }
import Axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import "../styles/base.css"
import { useDispatch } from 'react-redux'
import { listItems, completeItem } from '../actions/Action'
import { deleteItem } from '../actions/Action'


export default function(props){
    const items = useSelector(appState => appState.listReducer.items)

    const dispatch = useDispatch()

    const count = useSelector(appState => appState.listReducer.items.filter(item => !item.active)).length

    function del(id){
        dispatch(deleteItem(id))
    }

    function complete(id,status){
        dispatch(completeItem(id))
    }

    useEffect(() => {
        dispatch(listItems())
    }, [])

    return (
        <div>
            <div>
                {items.map((item, i) => (
                    <div key={`todo-${item.id}`} className='things' >
                        <div className={item.active === false ? '': 'complete'}onClick={(e)=>complete(item.id,item.active)}>{item.name}</div>
                        <button  onClick={(e)=> del(item.id)} >X</button>
                    </div>
                ))}
            </div>
            <div className="count">{count} items to do</div>
        </div>
    )
}
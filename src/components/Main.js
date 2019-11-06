import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { listItems, completeItem, deleteItem } from '../actions/Action'
import "../styles/base.css"


export default function(props){
    const items = useSelector(appState => appState.listReducer.items)

    const dispatch = useDispatch()

    const count = useSelector(appState => appState.listReducer.items.filter(item => !item.active)).length

    function del(id){
        dispatch(deleteItem(id))
    }

    function complete(id,status){
        dispatch(completeItem(id,status))
    }

    useEffect(() => {
        dispatch(listItems())
    }, [])

    return (
        <div>
            <div>
                {items.map((item) => (
                    <div key={`todo-${item.id}`} className='things' >
                        <div 
                            className={item.active === false ? '': 'complete'}
                            onClick={(e)=>complete(item.id,item.active)}>
                                {item.name}
                        </div>
                        <button  onClick={(e)=> del(item.id)} >X</button>
                    </div>
                ))}
            </div>
            <div className="count">{count} items to do</div>
        </div>
    )
}
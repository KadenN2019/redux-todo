import React, { useState } from 'react'
import { addItem } from '../actions/Action'
import { useDispatch } from 'react-redux'

export default function (props) {
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()

        dispatch(addItem(item))
        setItem('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                className="textbox"
                type='text' 
                id='item' 
                name = "item"
                value={item} 
                onChange={e => setItem(e.target.value)} 
            />
        </form>
    )
}
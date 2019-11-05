import ItemForm from "../components/ItemForm"

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload]}
    case 'LIST_ITEMS':
      return {...state, items: action.payload}
    case "COMP_ITEM":
      return {...state, items: state.items.map(item =>{
        if(item.id === action.id){
          item.active = !item.active
        }
        return item
      })}
    default:
      return state
  }
}

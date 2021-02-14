const initialState = {
  Barang: []
}

export default function barangReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BARANG":
      return { ...state, Barang: action.payload }
    case "ADD_BARANG":
      const newBarang = state.Barang.concat(action.payload)
      return { ...state, Barang: newBarang }
    case "DELETE_BARANG":
      const filterBarang = state.Barang.filter((element) => element.id !== action.payload)
      return { ...state, Barang: filterBarang}
    case "EDIT_BARANG":
      const editBarang = state.Barang.concat(action.payload)
      return { ...state, Barang: editBarang}
    default:
      return state;
  }
}
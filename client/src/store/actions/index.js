export function fetchBarang() {
  return (dispatch) => {
    fetch(`http://localhost:3000/barang`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw Error(response.statusText)
        }
      })
      .then((data) => {
        dispatch({ type: "SET_BARANG", payload: data })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export function addBarang(payload) {
  return (dispatch) => {
    fetch(`http://localhost:3000/barang`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw Error(response.statusText)
        }
      })
      .then((data) => {
        dispatch({ type: "ADD_BARANG", payload: data })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function editBarang(payload) {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/barang/${payload.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw Error(response.statusText)
        }
      })
      .then((data) => {
        dispatch({ type: "EDIT_BARANG", payload: data })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function deleteBarang(id) {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/barang/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw Error(response.statusText)
        }
      })
      .then((data) => {
        dispatch({ type: "DELETE_BARANG", payload: id })

      })
      .catch((err) => {
        console.log(err);
      })
  }
}
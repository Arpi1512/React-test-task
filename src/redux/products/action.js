export function addFavorite(product) {
  return {
    type: "addFavorite",
    product,
  };
}
export function removeProduct(id) {
  return {
    type: "removeProduct",
    payload: id,
  };
}

export function addFormData(formData) {
  return {
    type: "ADD_FORM_DATA",
    payload: {
      formData,
    },
  };
}

export function updateData({id,item}) {
  return {
    type: "updateData",
    payload: {
      id,
      item,
    },
  };
}

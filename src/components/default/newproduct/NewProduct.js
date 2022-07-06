import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../../redux/products/action";
import style from "../newproduct/newProduct.module.scss";
import parfum from "../../../Images/photo.jpeg"

export default memo(function NewProduct({onSave}) {
  const product = useSelector(s => s.products.items)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={style.form_content}>
      <form
        className="mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            id:product[product.length - 1].id + 1,
            name,
            description,
            count,
            price,
            photo:parfum,
          };
          dispatch(addFormData(formData));
          onSave()
        }}
      >
        <div className="form-group">
          <label>
            Name
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Price
            <input
              type="number"
              name="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Count
            <input
              type="number"
              className="form-control"
              onChange={(e) => setCount(e.target.value)}
              name="count"
              value={count}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description
            <textarea
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
            ></textarea>
          </label>
        </div>
        <div className="form-group">
          <label>
            Photo
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.value)}
              name="photo"
              value={photo}
              accept="image/*"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
})

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/products/action";
import { addFavorite } from "../../redux/products/action";
import NewProduct from "../newproduct/NewProduct";
import style from "../product/product.module.scss";

function ProductList() {
  const products = useSelector((s) => s.products.items);
  const [isActive, SetIsActive] = useState(false);
  const [product, setProduct] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const [curentIndex, setCurentIndex] = useState(-1);

  const dispatch = useDispatch();

  const handelClick = useCallback((e) => { SetIsActive(!isActive); },[SetIsActive]);
  const onSave = useCallback(() => {
    SetIsActive(false);
  }, [SetIsActive]);

  const handleSearch = useCallback((e) => {
      setSearchValue(e.target.value);
      const searchArray = products.filter((item) =>
        item.name.includes(e.target.value)
      );
      setProduct(searchArray);
    },
    [products, setSearchValue, setProduct]
  );

  const updatevalue = useCallback((key, value) => {
      let temp = [...products];
      temp[curentIndex][key] = value;
      setProduct(temp);
  }, [product,setProduct]);

  return (
    <div className={style.product_content}>
      <h1>Product List</h1>
      <div className={style.input_wrapp}>
        <button className={style.newproduct_btn} onClick={handelClick}>
          Add Product
        </button>
        <input
          placeholder={"Search..."}
          type={"text"}
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      {isActive ? <NewProduct onSave={onSave} /> : null}
      <div className={style.list}>
        {products.map((elm, index) => {
          return index !== curentIndex ? (
            <div key={index} className={style.product}>
              <img src={elm.photo} alt={"product"} />
              <h4>{elm.name}</h4>
              <h5>Price: {elm.price}$</h5>
              <h6>At store: {elm.count}</h6>
              <h6>About: {elm.description}</h6>
              <div className={style.btn_wrapp}>
                <button
                  className={style.add_btn}
                  onClick={ () =>  dispatch(addFavorite(elm))}
                >
                  Fav
                </button>
                <button
                  className={style.edit_btn}
                  onClick={() => setCurentIndex(index)}
                >
                  Edit
                </button>
                <button
                  className={style.delete_btn}
                  onClick={() => dispatch(removeProduct(elm.id))}
                >
                  Del
                </button>
              </div>
            </div>
          ) : (
            <div key={index}>
              <div>
                <input
                  onChange={(e) => updatevalue("name", e.target.value)}
                  value={elm.name}
                />
              </div>
              <div>
                <input
                  onChange={(e) => updatevalue("price", e.target.value)}
                  value={elm.price}
                />
              </div>
              <div>
                <input
                  onChange={(e) => updatevalue("count", e.target.value)}
                  value={elm.count}
                />
              </div>
              <div>
                <input
                  onChange={(e) => updatevalue("description", e.target.value)}
                  value={elm.description}
                />
              </div>
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => setCurentIndex(-1)}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger m-3"
                  onClick={() => setCurentIndex(-1)}
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;

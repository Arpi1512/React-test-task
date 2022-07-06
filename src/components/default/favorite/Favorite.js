import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../../redux/favorite/action";
import style from "../favorite/favorite.module.scss";

function Favorite() {
  const favorite = useSelector((s) => s.favorite.items);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={style.fav_content}>
        <h1>Favorite</h1>
        <div className={style.fav_list}>
          {favorite.map((elm, index) => {
            return (
              <div key={index} className={style.favorite}>
                <img src={elm.photo} alt={"favorit_img"} />
                  <h4>{elm.name}</h4>
                  <h5>Price: {elm.price}$</h5>
                  <h6>At store: {elm.count}</h6>
                <button
                  className={style.del_btn}
                  onClick={() => dispatch(removeFavorite(elm.id))}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorite;

import style from "../homepage/home.module.scss";
export default function Home() {
  return (
    <div>
      <div className={style.home_page}>
        <div className={style.welcome}>
          <h2>Escape to the world of fragrances.</h2>
        </div>
      </div>
    </div>
  );
}

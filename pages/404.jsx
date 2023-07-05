import style from "./404.module.css";

function Custom404() {
  return (
    <div className={style.container}>
      <div className={style.inner_container}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default Custom404;

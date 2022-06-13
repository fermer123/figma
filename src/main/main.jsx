import style from './main.module.scss';

const Main = () => {
  return (
    <div id='#main' className={style.main}>
      <div className={style.intro}>
        <div className={style.wrapper}>
          <h1 className={style.title}>Discover Amazing places in Japan</h1>
          <p className={style.subtitle}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this if i had the energy but under the bed, for attack the child,
            open the door
          </p>
          <form className={style.search_form}>
            <div className={style.search_form_wrap}>
              <p className={style.search_form_info}>
                <input
                  placeholder='What would you like to do?'
                  className={style.search_form_field}
                />
                <input
                  placeholder='Where would you like to go?'
                  className={style.search_form_field}
                />
                <button className={style.search_form_submit}>SEARCH</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;

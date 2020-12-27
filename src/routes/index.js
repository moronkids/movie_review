import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom"; // ini buat routing dari reactjs, must installing first
import Homepage from "pages/homepage";
import Detail from "pages/detail_movie/index";
import Wrapper from "components/Layout/index";
<<<<<<< HEAD
import Help from ""
=======
import Profile from "components/Profile/index";
>>>>>>> 76e2dc36652b0dd046ae566459b4860db6f944f1
// import Character from "pages/detail_movie/character";
// import Review from "pages/detail_movie/review"
import "assets/scss/styles.scss";
const Routesx = () => {
  const AppRoute = ({
    component: Component,
    layout: Layout,
    auth: Auth,
    ...rest
  }) => (
    <Auth>
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    </Auth>
  );
  const Guest = (props) => props.children;
  const _Guest = (props) => {
    return <Wrapper>{props.children}</Wrapper>;
  };
  return (
    <section>
      <Switch>
        <AppRoute
          exact
          path="/"
          layout={_Guest}
          auth={Guest}
          component={Homepage}
        />
        <AppRoute
          exact
          path="/detail_movie"
          layout={_Guest}
          auth={Guest}
          component={Detail}
        />
        <AppRoute
          exact
          path="/profile"
          layout={_Guest}
          auth={Guest}
          component={Profile}
        />

      </Switch>
    </section>
  );
};

export default Routesx;

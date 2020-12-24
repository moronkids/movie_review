import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom"; // ini buat routing dari reactjs, must installing first
import Homepage from "pages/homepage";
import Detail from "pages/detail_movie/index";
import Wrapper from "components/Layout/index";
import Review from "../components/Review/index"
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
          path="/overview"
          layout={_Guest}
          auth={Guest}
          component={Detail}
        />
        <AppRoute
          exact
          path="/characters"
          layout={_Guest}
          auth={Guest}
          component={Detail}
        />
        <AppRoute
          exact
          path="/review"
          layout={_Guest}
          auth={Guest}
          component={Detail}
        />
      </Switch>
    </section>
  );
};

export default Routesx;

import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom"; // ini buat routing dari reactjs, must installing first
import Homepage from "pages/homepage";
import Wrapper from "components/Layout/index";
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
      </Switch>
    </section>
  );
};

export default Routesx;

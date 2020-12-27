import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom"; // ini buat routing dari reactjs, must installing first
import Homepage from "pages/homepage";
import Detail from "pages/detail_movie/index";
import Wrapper from "components/Layout/index";
// import Help from ""
import Profile from "components/Profile/index";
import {connect} from "react-redux"
import "assets/scss/styles.scss";
const Routesx = ({ id }) => {
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
          path={"/detail_movie/"+id}
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
const mapStateToProps = (state) => {
  return {
    id: state.movie.id,

  };
}
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Routesx);

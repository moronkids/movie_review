import React, { useContext, useState,useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom"; // ini buat routing dari reactjs, must installing first
import Homepage from "pages/homepage";
import Detail from "pages/detail_movie/index";
import Wrapper from "components/Layout/index";
// import Help from ""
import { useLocation } from "react-router-dom";
import Profile from "components/Profile/index";
import {connect} from "react-redux"
import SearchBox from "components/search/index"
import SearchMain from "components/Layout/searchmain"
import NotFound from "components/Layout/404"
import "assets/scss/styles.scss";

const Routesx = ({ id , query}) => {
  const location = useLocation();
  console.log(location.pathname,query, "ini data")
  const [newId, setNewId] = useState("")
  const splitPathname = () => {
    let loc = location.pathname.split("/");
    console.log(loc ,"lokasi")
    setNewId(loc[2])
  }
  useEffect(() => {
    splitPathname();
  }, [])
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
          path={"/detail_movie/" + id}
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
        <AppRoute
          exact
          path="/search"
          layout={_Guest}
          auth={Guest}
          component={SearchBox}
        />
        <AppRoute
          exact
          path={"/searchx/" + query}
          layout={_Guest}
          auth={Guest}
          component={SearchMain}
        />
        <AppRoute
          exact
          path={"/*"}
          layout={_Guest}
          auth={Guest}
          component={NotFound}
        />
      </Switch>
    </section>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "bosku")
  return {
    id: state.movie.id,
    query: state.movie.query
  };
}
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Routesx);

import { Switch, Route, Redirect } from "react-router-dom";
import { AppPosts } from "./pages/AppPosts";

const Router = () => {
  return (
    <Switch>
      <Route exect path="/" render={() => <Redirect to="/posts" />} />
      <Route path="/posts">
        <AppPosts />
      </Route>
    </Switch>
  );
};
export default Router;

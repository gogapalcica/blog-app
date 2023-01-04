import { Switch, Route, Redirect } from "react-router-dom";
import { AppPosts } from "./pages/AppPosts";
import { SinglePost } from "./pages/SinglePosts";
import { AddPost } from "./pages/AddPost";

const Router = () => {
  return (
    <Switch>
      <Route exect path="/" render={() => <Redirect to="/posts" />} />
      <Route exact path="/posts">
        <AppPosts />
      </Route>
      <Route path="/posts/edit/:id">
        <AddPost />
      </Route>
      <Route path="/posts/create">
        <AddPost />
      </Route>
      <Route path="/posts/:id">
        <SinglePost />
      </Route>
    </Switch>
  );
};
export default Router;

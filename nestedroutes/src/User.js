import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

export const User = () => {
    const user = {"fullname": "Joe Bee"}
  return (
    <section>
      <Switch>
        <Route path={"/users/:userId/posts"}>
          <PostList />
        </Route>
        <Route path={"/users/:userId"}>
          <UserProfile user={user} />
        </Route>
      </Switch>
    </section>
  );
};

export default User;
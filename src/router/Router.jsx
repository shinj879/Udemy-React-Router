import { Switch, Route } from "react-router-dom";
// LinkはHTMLでいうところの<a>タグみたいなもの。簡単にページ遷移の処理を行える
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/**Switch（とRoute）はどのパスに対してどのコンポーネントを出すかという設定をできる */}
      <Route exact path="/">
        {/**　exactは完全一致。/だけだと、他のパスにも含まれているから。　*/}
        <Home />
      </Route>
      {/**homeのpath(/)を指定し、タグの囲いの中にコンポーネントを入れている */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

/** Routeは他の書き方もできる。Routeタグで囲うのではなく、引数にアロー関数を取る。
    アロー関数の中でリターンする部分にRouteタグで囲っていたはずのものを書くことで、同じ処理ができる。
    パスの中にさらに他のリンクが複数ある場合、render={()=>}と書いて、それぞれのパスに対するコンポーネントを指定する。
    renderは引数にpropsを取れて、いくつか値が入っている。（console.log()で確認できるよ）。
    その中でmatchの中のプロパティ「url」には、pathが入ってる。これを使うことで、確実に/page1配下に各コンポーネントを埋め込める */

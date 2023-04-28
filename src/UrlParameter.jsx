import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation(); /**分割代入でseachの値を取得 */
  const query = new URLSearchParams(
    search
  ); /**クエリに関する便利なメソッドを扱うための関数 */
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>{" "}
      {/**getメソッドを使ってname=●の●の部分を取得 */}
    </div>
  );
};

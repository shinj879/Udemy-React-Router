import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory(); /**usehisotryを一度変数に入れて使う。 */

  const onClickDetailA = () =>
    history.push(
      "/page1/detailA"
    ); /**pushというメソッドは、引数に遷移先のパスを入れることで、javascript側からページ遷移できる */
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};

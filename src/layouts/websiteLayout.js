import FooterWesite from "../components/fontend/footer";
import Header from "../components/fontend/header";
const WebsiteLayout = (props) => {
  return (
    <>
      <div id="main">
      <Header />
      {props.children}
      <FooterWesite />
      </div>
    </>
  );
};
export default WebsiteLayout

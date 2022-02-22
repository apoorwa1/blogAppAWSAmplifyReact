import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import { NavBar } from "./ui-components";
import MyPostCollection from "./ui-components/PostCollection";
import { MarketingFooter } from "./ui-components";
function App() {
  return (
    <AmplifyProvider>
      <NavBar />
      <MyPostCollection isPaginated itemsPerPage={5} />

      <MarketingFooter />
    </AmplifyProvider>
  );
}

export default withAuthenticator(App);

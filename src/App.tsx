import { AppWrapper } from "./components/AppWrapper";
import { FormHeader } from "./components/FormHeader";
import { FormWrapper } from "./components/FormWrapper";
import { Menu } from "./components/Menu";
import { PageWrapper } from "./components/PageWrapper";

function App() {
  return (
    <AppWrapper>
      <Menu />
      <PageWrapper>
        <h1>API Credentials</h1>
        <FormWrapper>
          <FormHeader />
        </FormWrapper>
      </PageWrapper>
    </AppWrapper>
  );
}

export default App;

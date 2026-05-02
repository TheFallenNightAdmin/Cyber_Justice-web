import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import CaseDanni from "./pages/CaseDanni";
import CaseJetX from "./pages/CaseJetX";
import CaseYurio from "./pages/CaseYurio";
import Tools from "./pages/Tools";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cases" component={Cases} />
        <Route path="/case/danni" component={CaseDanni} />
        <Route path="/case/jetx" component={CaseJetX} />
        <Route path="/case/yurio" component={CaseYurio} />
        <Route path="/tools" component={Tools} />
      </Switch>
    </Layout>
  );
}

export default App;

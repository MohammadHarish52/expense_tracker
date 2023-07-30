import Header from "./Components/Header";
import './App.css' ;
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import Addtransaction from "./Components/Addtransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <Addtransaction/>
      </div>
  </GlobalProvider>
  );
}
export default App;

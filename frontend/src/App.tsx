import Navbar from "components/Navbar";
import Footer from "components/Footer"
import DataTable from "components/DataTable"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello world</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

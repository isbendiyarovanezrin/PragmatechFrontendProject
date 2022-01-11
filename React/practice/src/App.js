import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Form email="nezi@gamil.com" password="b1i2l3m4i5r6em" />
      <Table />
    </div>
  );
}

export default App;

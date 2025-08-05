import ProductFeedback from "./components/ProductFeedback";

function App() {
  return (
    <div className="mx-auto md:max-w-6/12 max-w-10/12 my-12">
      <h1 className="text-2xl font-semibold mb-2">Product Feedback</h1>
      <div className="border-b-2 border-gray-300 w-full mb-4"></div>
      <ProductFeedback />
    </div>
  );
}

export default App;

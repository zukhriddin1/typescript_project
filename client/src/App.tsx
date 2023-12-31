import GroceryItem from "./components/GroceryItem";
import useGrocery from "./hooks/useGrocery";

function App() {
  const { items } = useGrocery();
  return (
    <section className="section-center">
      <form className="grocery-form">
        <p className="alert"></p>
        <h3>grocery bud</h3>

        <div className="form-control">
          <input type="text" id="grocery" placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      <div
        className={`grocery-container ${items.length > 0 && "show-container"}`}
      >
        <div className="grocery-list">
          {items.map((item) => (
            <GroceryItem key={item._id}>{item.name}</GroceryItem>
          ))}
        </div>
        <button className="clear-btn">clear items</button>
      </div>
      <div>
        <div className="grocery-list"></div>
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;

import { useSelector } from "react-redux";
import ProductCard from "./common/Card";

const CartDetails = ({ showSidebar, handleCloseSidebar, cartCount }) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, "cartItems");

  return (
    <div
      className={`offcanvas offcanvas-end ${showSidebar ? "show" : ""}`}
      tabIndex="-1"
      style={{
        visibility: showSidebar ? "visible" : "hidden",
        backgroundColor: "#fff",
        width: "350px",
      }}
    >
      <div className="offcanvas-header">
        <div className="offcanvas-title">Your Cart</div>
        <button
          type="button"
          className="btn-close"
          onClick={handleCloseSidebar}
        ></button>
      </div>
      <div
        className={`offcanvas-body ${
          cartCount === 0 ? "offcanvas-body-div " : ""
        }`}
      >
        {cartCount > 0 ? (
          <>
            {Array.isArray(cartItems) &&
              cartItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  showControls={true}
                  customClass="custom-style"
                />
              ))}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};
export default CartDetails;

import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilitis/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemquantity from "./UpdateItemquantity";
import { getcurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getcurrentQuantityById(pizzaId));

  return (
    <li className="items-center justify-between py-3 sm:flex">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font- text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemquantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

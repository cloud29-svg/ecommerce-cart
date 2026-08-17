import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCartItems, selectCartTotal } from "./cartSelectors";
import { removeFromCart, incrementQuantity, decrementQuantity } from "./cartSlice";
import React from "react";
import "./CartDropdown.css";

interface CartDropdownProps {
  onClose: () => void;
}

export function CartDropdown({ onClose }: CartDropdownProps): React.JSX.Element {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  const renderItem = (item: (typeof items)[number]) =>
    React.createElement(
      "div",
      { key: item.id, className: "cart-dropdown__item" },
      React.createElement("img", {
        src: item.thumbnail,
        alt: item.title,
        className: "cart-dropdown__item-image",
      }),
      React.createElement(
        "div",
        { className: "cart-dropdown__item-body" },
        React.createElement(
          "p",
          { className: "cart-dropdown__item-title" },
          item.title,
        ),
        React.createElement(
          "p",
          { className: "cart-dropdown__item-price" },
          `$${item.price.toFixed(2)}`,
        ),
        React.createElement(
          "div",
          { className: "cart-dropdown__qty-controls" },
          React.createElement(
            "button",
            {
              className: "cart-dropdown__qty-btn",
              "aria-label": "Decrease quantity",
              onClick: () => dispatch(decrementQuantity(item.id)),
            },
            "-",
          ),
          React.createElement(
            "span",
            { className: "cart-dropdown__qty-value" },
            item.quantity,
          ),
          React.createElement(
            "button",
            {
              className: "cart-dropdown__qty-btn",
              "aria-label": "Increase quantity",
              onClick: () => dispatch(incrementQuantity(item.id)),
            },
            "+",
          ),
        ),
      ),
      React.createElement(
        "button",
        {
          className: "cart-dropdown__remove",
          "aria-label": `Remove ${item.title} from cart`,
          onClick: () => dispatch(removeFromCart(item.id)),
        },
        "x",
      ),
    );

  return React.createElement(
    "div",
    { className: "cart-dropdown" },
    React.createElement(
      "div",
      { className: "cart-dropdown__header" },
      React.createElement("p", { className: "cart-dropdown__title" }, "Your Cart"),
      React.createElement(
        "button",
        {
          className: "cart-dropdown__close",
          "aria-label": "Close cart",
          onClick: onClose,
        },
        "x",
      ),
    ),
    items.length === 0
      ? React.createElement(
          "p",
          { className: "cart-dropdown__empty" },
          "Your cart is empty.",
        )
      : React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "div",
            { className: "cart-dropdown__list" },
            items.map(renderItem),
          ),
          React.createElement(
            "div",
            { className: "cart-dropdown__footer" },
            React.createElement(
              "p",
              { className: "cart-dropdown__total" },
              "Total: ",
              React.createElement("span", null, `$${total.toFixed(2)}`),
            ),
          ),
        ),
  );
}
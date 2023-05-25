import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../Shop/shop.css";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import Loader from "../../Components/Loader/Loader";

function Shop(props) {
  let id = sessionStorage.getItem("user_id");
  let token = sessionStorage.getItem("token");
  const [product, setProduct] = useState([]);
  const [flippedItem, setFlippedItem] = useState(null);
  const { categoryId } = props;
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  const getProducts = useCallback(async () => {
    try {
      if (categoryId === "") {
        const response = await axios.get("http://localhost:5000/item/getitem");
        setProduct(response.data);
        setItem(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:5000/item/items/${categoryId}`
        );
        setProduct(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [categoryId]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleCardFlip = (itemId) => {
    if (flippedItem === itemId) {
      setFlippedItem(null); // unflip the card
    } else {
      setFlippedItem(itemId); // flip the card
    }
  };

  const handleMoreInfoClick = (itemId) => {
    handleCardFlip(itemId);
  };

  //add to cart
  function addToCart(event, props) {
    if (token && id) {
      let key = props;

      axios
        .post(
          `http://localhost:5000/cart/${id}`,
          { productId: key },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            swal({
              title: "Item added to cart!",
              icon: "success",
              buttons: {
                cancel: "Continue Shopping",
                confirm: {
                  text: "See Cart",
                  value: "cart",
                  className: "swal-button",
                },
              },
              customClass: {
                confirmButton: "swal-button-center",
                container: "my-custom-container-class",
              },
            }).then((value) => {
              if (value === "cart") {
                window.location.href = "/cart";
              }
            });
          }
        })
        .catch((err) => {
          swal({
            title: "Something went wrong! Please try again.",
            icon: "error",
            buttons: {
              cancel: "Continue Shopping",
              confirm: {
                text: "See Cart",
                value: "cart",
                className: "swal-button",
              },
            },
            customClass: {
              confirmButton: "swal-button-center",
              container: "my-custom-container-class",
            },
          }).then((value) => {
            if (value === "cart") {
              window.location.href = "/cart";
            }
          });
        });
    } else {
      navigate("/login");
    }
  }

  if (!item) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="product-container">
      {Array.isArray(product) &&
        product.map((item, index) => (
          <a href="#" className="group relative block" key={index}>
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">
                Skinny Jeans Blue
              </h3>

              <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>

              <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
              </span>
            </div>
          </a>
        ))}
    </div>
  );
}

export default Shop;

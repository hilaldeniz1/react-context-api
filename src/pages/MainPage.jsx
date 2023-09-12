import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./../components/Loading";
import Card from "./../components/Card";

const MainPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="my-5 container d-flex flex-wrap justify-content-center justify-content-md-between gap-5">
      {/*
       *ürünler varsa her bir ürün icin ekrana kart bas
       *ürünler yoksa loading bas
       */}
      {products ? (
        products.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MainPage;

// context yapısına abone olmamızı (bize sundugu verilere erisim saglar) saglayan fonksıyon
import { useContext } from "react";
// abone olmak istedigimiz context yapısı
import { BasketContext } from "../context/basketContext";

const Card = ({ item }) => {
  // context yapısına abone olma (bize sundugu verilere erisim saglar)
  const context = useContext(BasketContext);
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={item.image} height={120} />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{item.title}</h4>
        <p className="text-success">$ {item.price}</p>
        <p>{item.category}</p>
        <button
          onClick={() => context.addToBasket(item)}
          className="w-100 bg-black text-white"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;

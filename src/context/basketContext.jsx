import { createContext, useState } from "react";

/*
 * context api:
 * uygulamada birden cok bilesenin ihtiyacı olan verileri
 * tek bir merkezde yönetmeye yarar
 * verileri ve bunları degistirmeye yarayan fonksiyonları tutar
 * ve bu değişkenleri uygulamadaki herhangi bir bilesene dogrudan aktarabilir.
 * merkezi state yönetim aracı
 */

// ! context yapısının temelini olusturma
export const BasketContext = createContext();

// ! saglayıcı ve onun tuttugu verılerı tanımlama
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  //   sepete yeni ürün ekle
  const addToBasket = (product) => {
    // sepete bu üründen daha önce eklenmiş mi kontrol et
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      // sepetteki elemanın miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //  state i güncelle
      setBasket(newBasket);
    } else {
      // miktarı 1 olarak ayarlayıp ürünü sepete ekler
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  // sepetten ürünü cıkart
  // eğerki ürün 1 den fazlaysa miktarını azalt
  // degilse direkt kaldır
  const removeFromBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (found.amount > 1) {
      // miktarı 1 azalt
      const updated = { ...found, amount: found.amount - 1 };

      // güncel elemanı diziye aktar
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      // state i güncelle
      setBasket(newBasket);
    } else {
      // ürünü direkt sepetten kaldır
      const filtred = basket.filter((i) => i.id !== found.id);
      // state i güncelle
      setBasket(filtred);
    }
  };

  // tuttugumuz verileri uygulamaya aktarmaya yarar
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

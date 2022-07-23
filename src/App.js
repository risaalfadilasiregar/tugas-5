import "./styles.css";
import Product from "./components/Product";
import React, { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Mobil Alphard Hitam",
    photo:
      "https://img.kliknusae.com/uploads/2020/06/Alphard.jpg",
    price: "Rp.800.000.000,00"

  },
  {
    id: 2,
    name: "Lamborghini Veneno",
    photo:
      "https://cdn.motor1.com/images/mgl/rPqjO/s1/best-lamborghini-list.webp",
    price: "Rp.63.000.000.000,00"
  },
  {
    id: 3,
    name: "Bugatti La Voiture Noire",
    photo:
      "https://cdn.motor1.com/images/mgl/nG3Mk/s1/bugatti-la-voiture-noire-definitive.webp",
    price: "Rp.255.900.000.000,00"
  }
];

function App() {
  const [angka,setAngka] = useState(0);
  const elemen = `Jumlah Product : ${angka}`;

  const addProduct = () =>{
      setAngka(
          (a) =>a + 1
      )
  }
  return (
    <div style={{
      textAlign:"center",
      color: "brown"
    }}>
    <h2>{elemen}</h2>
    <div style={{
      display:"flex",
      gap:25,
      padding:12,
    }}>
     
      {products.map(function (p) {
      return (
        <>
        <div>
            <h2>{elemen}</h2>
          <Product foto={p.photo} nama={p.name} harga={p.price} klik={addProduct}/>
        </div>
        </>
      );
    })
  }
   </div>
   </div>
 
  );
}

export default App;

function Product(props){
    return (
      <div style={{
        backgroundColor: "grey",
        padding:16,
        textAlign:"center"
      }}>
        <img style={{
          height:200,
          width:150
        }} src={props.foto}/>
        <h2 style={{
            color: "red"
          }}
        >{props.nama}</h2>
        <h3>{props.harga}</h3>
        <button style={{
          backgroundColor: "pink",
          color:"black",
          padding:10,
          borderRadius:12,
          borderStyle:"none"
        }} onClick={props.klik}>Tambah Ke keranjang</button>
      </div>
    );
  }
  export default Product;
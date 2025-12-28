function Cards(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.brand}</p>
    </div>
  )
}

export function Card() {
  const CardsInfo = { name: "무선 키보드", price: 39000, brand: "EZTECH" };
  return (
    <Cards name={CardsInfo.name} price={CardsInfo.price} brand={CardsInfo.brand} />
  )
}


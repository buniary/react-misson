export function ProductsCard({name, price, brand}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </div>
  )
}
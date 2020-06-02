import React from "react"
import { CardList } from "components/CardList"

const products = [
  { label: "Kart 1/2 Complete RTR Kart 1/2 Complete RTR Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
  { label: "Kart 1/2 Complete RTR", price: 1750 },
]

export const Products = () => (
  <CardList products={products} />
)

import React from "react"
import { Section } from "components/Section"
import { Categories } from "components/Products/Categories"
import { CardList } from "components/CardList"
import { ReactComponent as Battery } from "assets/categories/battery.svg"
import { ReactComponent as Break } from "assets/categories/break.svg"
import { ReactComponent as Chassis } from "assets/categories/chassis.svg"
import { ReactComponent as Gearshift } from "assets/categories/gearshift.svg"
import { ReactComponent as Piston } from "assets/categories/piston.svg"
import { ReactComponent as SeatBelt } from "assets/categories/seat-belt.svg"
import { ReactComponent as SteeringWheel } from "assets/categories/steering-wheel.svg"
import { ReactComponent as Suspension } from "assets/categories/suspension.svg"

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

const categories: any = [
  { label: "Structure", Svg: Battery },
  { label: "Transmission", Svg: Chassis },
  { label: "Acceleration", Svg: Gearshift },
  { label: "Braking", Svg: Piston },
  { label: "Combustion", Svg: SteeringWheel },
  { label: "Aerodynamics", Svg: Break },
  { label: "Embellishment", Svg: Suspension },
  { label: "Steering", Svg: SeatBelt },
  // { label: "Radio Plate", svg: xxxxx },
  // { label: "Mounting", svg: xxxxx },
]

export const Products = () => (
  <>
    <Categories categories={categories} />
    <Section>
      <CardList products={products} />
    </Section>
  </>
)

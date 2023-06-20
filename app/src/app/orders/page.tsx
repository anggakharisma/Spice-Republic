import { Food } from "@/type"
import FoodCard from "../components/FoodCard";
import { Suspense } from "react";

export default async function Orders() {
  const foods: Food[] = await getFoods();

  return (
    <div className="w-4/5 flex px-20 mb-24">
      <div className=" elf-start">
        <h1 className="text-3xl font-bold">Halo, Selamat Pagi</h1>
        <h3>Order disini</h3>
        <Suspense fallback={<h1 className="text-white bg-red-400">Loading</h1>}>
          <div className="grid grid-cols-3 mt-8 gap-12">
            {
              foods.map(food => <FoodCard food={food} key={food.ID}></FoodCard>)
            }
          </div>
        </Suspense>
      </div>
    </div >
  )
}

async function getFoods() {
  const res = await fetch(`${process.env.API_URL}/foods`);

  if (!res.ok) {
    throw new Error("error api might be offline");
  }
  const data = await res.json();
  return data.data
}

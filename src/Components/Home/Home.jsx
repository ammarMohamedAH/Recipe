
import CategoryHeader from "../CategoryHeader.jsx/CategoryHeader";
import MealCard from "../MealCard/MealCard";


export default function Home() { 
  return (
    <>
      <CategoryHeader></CategoryHeader>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20 p-10">
      <MealCard endpoint={'search.php?s='} keyValue={'home'}></MealCard>
      </div>
    </>
  )
}


import { useParams } from 'react-router-dom'

import CategoryHeader from '../CategoryHeader.jsx/CategoryHeader';
import MealCard from './../MealCard/MealCard';

export default function Category() {
    let {cat} = useParams();

    
  return (
    <>
    <CategoryHeader></CategoryHeader>
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20 p-10">
    <MealCard endpoint={`filter.php?c=${cat}`} keyValue={cat}></MealCard>
    </div>
    </>
  )
}

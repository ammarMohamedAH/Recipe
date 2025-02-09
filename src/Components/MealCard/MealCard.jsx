import { Link } from "react-router-dom";
import useApidata from "../../Hooks/useApidata";


export default function MealCard({endpoint,keyValue}) {
  let { data } = useApidata(`https://www.themealdb.com/api/json/v1/1/${endpoint}`,keyValue);
  const categ = data?.data?.meals;
  return (
    <>
      {categ?.map((categ)=><Card categ={categ} key={categ.idMeal}></Card>)}
    </>
  )
}

function Card({categ}){
  return(
    <div className="text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]">
      <img
        src={categ.strMealThumb}
        className="w-full -translate-y-20 rounded-full shadow-2xl drop-shadow-xl transition-all duration-700 group-hover:rotate-[360deg]"
        alt={categ.strMeal}
      />
      <h3 className=" -mt-12 text-xl font-semibold tracking-wider line-clamp-1">
        {categ.strMeal}
      </h3>
      {categ.strArea ? (
        <h5 className="flex justify-center items-center gap-2 text-emerald-600">
          <i className="fa-solid fa-earth-americas"></i>
          {categ.strArea}
        </h5>
      ) : (
        ""
      )}
      <button className="text-white bg-gradient-to-r mt-4 bg-green-500 hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full">
        <Link to={`/mealdet/${categ.idMeal}`}>View Recipe</Link>
      </button>
    </div>
  )
}
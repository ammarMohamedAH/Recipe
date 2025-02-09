import { useParams } from "react-router-dom";
import useApidata from "../../Hooks/useApidata";

export default function Mealinfo() {
    let { id } = useParams();
    let { data, isLoading, isError, error } = useApidata(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, `getDet`);
  
    
    console.log(data);
    
    let meal = data?.data?.meals[0];
    const ingredientMeasurePairs = [];
  
    if (meal) {
      for (let i = 1; i <= 20; i++) { 
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
    
        if (ingredient && ingredient.trim() !== "" && measure) {
          ingredientMeasurePairs.push({ ingredient, measure });
        }
      }
    }
    if (isLoading)
      return <div className="text-center text-xl font-bold">Loading...</div>;
  
    if (isError) return <div>Error: {error?.message || "Something went wrong"}</div>;
  
  
    if (!meal)
      return <div className="text-center text-gray-600">No meal found.</div>;
  
    return (
      <div className="flex flex-col gap-4 lg:flex-row py-6 px-6">
        <div className="lg:w-2/3">
          <h1 className="font-Pacifico mb-4 text-5xl font-semibold md:mb-4">
            {meal.strMeal}
          </h1>
          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            <div>
              <img
                className="mb-8 w-full rounded-2xl"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <ul className="flex justify-center gap-4">
                <li className="rounded-lg bg-red-600 px-4 py-2 text-white">
                  <a
                    target="_blank"
                    href={meal.strYoutube}
                    className="flex items-center justify-center gap-2"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    youtube
                  </a>
                </li>
                <li className="bg-green-600 rounded-lg px-4 py-2 text-white">
                  <a
                    target="_blank"
                    href={meal.strSource}
                    className="flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-globe"></i>
                    source
                  </a>
                </li>
              </ul>
            </div>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="rounded-2xl bg-white p-4">
            <h3 className="mb-4 border-b-4 p-2 text-2xl font-semibold">
              Ingredients
            </h3>
            {ingredientMeasurePairs.map((pair, index) => (
    <div key={index} className="flex justify-between p-2 border-b-2 last-of-type:border-b-0">
      <span>{pair.ingredient}:</span>
      <span>{pair.measure}</span>
    </div>
  ))}
  
          </div>
        </div>
      </div>
    );
}

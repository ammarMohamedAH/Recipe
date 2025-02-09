import { Link, NavLink, useNavigate } from "react-router-dom";
import useApidata from './../../Hooks/useApidata';

export default function CategoryHeader() {
    let {data}=useApidata(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`,`headlist`);

    const navigate = useNavigate();
    function toCategory(e){
  
      navigate(`/category/${e.target.value}`)
    }

    
  return (

    <div className="mt-8 text-left p-4">
      <h1 className="bg-gradient-to-r from-[#F29724]   via-[#ca1023c4] to-[#c90519]  bg-clip-text px-2 text-transparent font-bold text-4xl font-Pacifico">Learn, Cook, Eat Your Food</h1>
      <ul className="sm:flex p-4 hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 catUl">
        <li><NavLink to="/" className="inline-block px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 border-gray-500   " >All</NavLink></li>
        {data?.data?.meals.map((item,index)=><li className="me-2" key={index}><NavLink className="inline-block px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 border-gray-500  " to={`/category/${item.strCategory}`}>{item.strCategory}</NavLink></li>)}
         
      </ul>
      <div className="sm:hidden mt-8">
        <label htmlFor="cat" className="sr-only">Select your Category</label>
      <select onChange={toCategory} id="cat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {data?.data?.meals.map((item,index)=><option className="me-2" value={item.strCategory} key={index}><Link to={`/category/${item.strCategory}`}>{item.strCategory}</Link></option>)}
      </select>
      </div>
    </div>
  )
}

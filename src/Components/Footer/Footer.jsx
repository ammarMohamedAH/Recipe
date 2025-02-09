import { Link } from 'react-router-dom'
import logo from '../../assets/logo-BfNap0Pe.png'
export default function Footer() {
  return (
   <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link to="/" className="flex items-center mb-0 space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Recipe Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Recipe</span>
      </Link>
      <span className="text-2xl font-bold text-blue-700">Route</span>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Ammar Mohamed™</Link>. All Rights Reserved.</span>
  </div>
</footer>

  )
}

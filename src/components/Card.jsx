



import { Link } from "react-router-dom"


function Card({product}){
    return (
      <Link to={`/product/${product.id}`}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={product.productImage} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{product.productName}</div>
          <p class="text-gray-700 text-base">
            {product.productDescription}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.productBrand}</span>

        </div>
      </div>
      </Link>
    )
}

export default Card





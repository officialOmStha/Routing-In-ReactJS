import React from 'react'
import content from './content'

const CardPage = () => {
  return (
    <div className="p-6 md:px-20">
      
      <h2 className="text-2xl font-bold mb-6">Cards</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item, ind) => (
          <div key={ind} className="border rounded-2xl p-4 shadow">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="mt-2 font-bold">{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CardPage
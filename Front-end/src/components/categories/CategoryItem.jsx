//import React from 'react'

function CategoryItem({title,img}) {
  return (
    <div>
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default CategoryItem
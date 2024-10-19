function CategoryItem({title,img}) {
  return (
    // <div>
    //     <img src={img} alt="" />
    //     <p>{title}</p>
    // </div>
    <div className="category-box">
      <img src={img} alt="" className="image-responsive"/>
      <p className="box-title">{title}</p>
    </div>
  )
}

export default CategoryItem
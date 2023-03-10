import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss';
const Directory = ({category}) => {
  return (
    <div className="categories-container">
      {category.map((category) =>(
        <CategoryItem key={category.id} category={category}/>
      ))}

    </div>
  )
}

export default Directory;
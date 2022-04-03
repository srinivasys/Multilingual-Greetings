import './index.css'

const FilteredImages = props => {
  const {itemDetails} = props
  const {imageUrl, imageAltText} = itemDetails

  return (
    <li className="filter-item">
      <img src={imageUrl} alt={imageAltText} className="logo" />
    </li>
  )
}

export default FilteredImages

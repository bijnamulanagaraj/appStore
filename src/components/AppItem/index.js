// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem
  return (
    <li className="app-item-container">
      <img className="app-item-image" src={imageUrl} alt="itemImage" />
      <p className="app-item-description">{appName}</p>
    </li>
  )
}

export default AppItem

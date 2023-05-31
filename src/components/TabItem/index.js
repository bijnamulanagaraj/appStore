// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onClickTabId, isActive} = props
  const {tabId, displayText} = eachItem
  const buttonClassName = isActive
    ? 'item-button button-style-change'
    : 'item-button'
  const onClickButton = () => {
    onClickTabId(tabId)
  }
  return (
    <li key={tabId} className="tab-item-style">
      <button className={buttonClassName} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

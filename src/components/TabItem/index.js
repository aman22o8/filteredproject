import './index.css'

const TabItem = props => {
  const {tabDetails, updation, isActive} = props
  const {tabId, displayText} = tabDetails
  const onclicktabitem = () => {
    updation(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onclicktabitem}
        className={`tab-btn ${isActive ? 'active-tab-btn' : ''}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

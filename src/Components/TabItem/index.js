import './index.css'

const TabItem = props => {
  const {details, isTabActive, onChangeTabItam} = props
  const {tabId, displayText} = details

  const btnClass = isTabActive ? 'tabBtn active-tab' : 'tabBtn'

  const onClickTab = () => {
    onChangeTabItam(tabId)
  }

  return (
    <li className="tab-item-container">
      <button type="button" className={btnClass} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

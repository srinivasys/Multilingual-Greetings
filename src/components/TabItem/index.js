import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {id, buttonText} = tabDetails

  const onClickBtn = () => {
    onClickTab(id)
  }

  const activeTabBtn = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button type="button" className={activeTabBtn} onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem

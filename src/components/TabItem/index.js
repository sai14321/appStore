// Write your code here
import './index.css'

const TableItem = props => {
  const {tableItem, onChange} = props
  const {tabId, displayText} = tableItem
  const onClickAppBar = () => {
    onChange(tabId)
  }

  return (
    <div className="list">
      <li className="display">
        <button className="types" type="button" onClick={onClickAppBar}>
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TableItem

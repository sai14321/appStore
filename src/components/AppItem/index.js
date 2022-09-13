import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="singleApp">
      <div className="singleAppContainer">
        <img src={imageUrl} alt={appName} className="imgSize" />
        <p className="para">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem

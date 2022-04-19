import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbnail} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onThumbnailClick = () => {
    onClickThumbnail(imageUrl)
  }

  return (
    <button type="button" className="thumnail" onClick={onThumbnailClick}>
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
    </button>
  )
}

export default ThumbnailItem

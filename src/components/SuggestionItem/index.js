import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearch} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="list-container" onClick={onClickSuggestion}>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="icon"
      />
    </li>
  )
}
export default SuggestionItem

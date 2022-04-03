import {Component} from 'react'

import TabItem from './components/TabItem'
import FilteredImages from './components/FilteredImages'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickTab = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredItems = () => {
    const {activeTabId} = this.state
    const filteredLists = languageGreetingsList.filter(
      item => item.id === activeTabId,
    )
    return filteredLists
  }

  render() {
    const {activeTabId} = this.state
    const filteredLists = this.getFilteredItems()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <li className="tab-list">
          {languageGreetingsList.map(tabDetails => (
            <TabItem
              key={tabDetails.id}
              tabDetails={tabDetails}
              isActive={activeTabId === tabDetails.id}
              onClickTab={this.onClickTab}
            />
          ))}
        </li>
        <ul className="filter-list">
          {filteredLists.map(itemDetails => (
            <FilteredImages key={itemDetails.id} itemDetails={itemDetails} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

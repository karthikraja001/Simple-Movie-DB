import React, { Component } from 'react';
import './App.css';
import StaticLoader from './Static'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("john wick")
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <StaticLoader key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Check your Network ")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="appLogo"  src="search-logo.png"/>
              </td>
              <td width="15"/>
              <td>
                <h1 className="appName"> Simple Movie DB<br/><small className="smallSize">(Powered by TMDB)</small> </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className='searchBar' onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;

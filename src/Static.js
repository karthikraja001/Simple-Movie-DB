import React from 'react'

class StaticLoader extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table className="rowPrinter" key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
           <img alt="poster" width="200" height="300" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <p className="mTitle">{this.props.movie.title}</p>
          <p className="mOver">&emsp;&emsp;{this.props.movie.overview}</p>
          <input type="button" className="viewBtn" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default StaticLoader;
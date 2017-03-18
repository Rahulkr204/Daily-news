import React from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import classes from './WeatherApp.scss';

class WeatherApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    })
  }
  render(){

    return(
      <div className={classes.container}>
        Hello
        <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default WeatherApp

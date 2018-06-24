import { Component } from 'react'

export default class PersonItem extends Component {
  render () {
    const { item } = this.props
    const name = item.fields.name

    return (
      <div>
        {name}
      </div>
    )
  }
}
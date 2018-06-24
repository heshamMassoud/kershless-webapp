import { Component } from 'react'
import data from './../data/person'
import PersonList from '../components/PersonList'

const Index = () => (  
  <div>
      <PersonList data={data} />
  </div>
)

export default Index
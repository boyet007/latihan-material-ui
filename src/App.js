import React, {Component} from 'react';
import './App.css';
import { Header, Footer } from './components/Layouts'
import Exercises from './components/Exercises'
import { muscles, exercises } from './store.js'

export default class extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries (
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscle } = exercise

        exercises[muscles] = exercises[muscles] 
          ? [...exercises[muscles], exercise] 
          : [exercise]
  
          return exercises
      }, {})
    ) 
  }

  render() {
    const exercise = this.getExercisesByMuscles()
    return (
      <div className="App">
        <Header />
        <Exercises exercises={exercise} />
        <Footer muscles = {muscles}/>
      </div>
    );
  }
}



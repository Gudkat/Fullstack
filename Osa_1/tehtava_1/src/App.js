const Header = (props) =>  <h1>{props.course}</h1>
const Part = (props) => <p>{props.part} {props.exercises}</p>
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'Half stack application developement'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Usingg props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App

const Header = (props) =>  <h1>{props.course}</h1>
const Content = (props) => <p>{props.part} {props.exercises}</p>
const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'Half stack application developement'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Usingg props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App

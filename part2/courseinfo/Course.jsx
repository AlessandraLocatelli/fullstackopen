const Header = ({ course}) => {

  return <h1>{course.name}</h1>

} 

const Content = ({courses}) => {
  return (
    <div>
      <Header course={courses} />
      {courses.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Part = ({ part }) => {

  return <p>{part.name}{part.exercises}</p>

}


const Total = ({total}) => {

  return <p>Total of exercises: {total}</p>
 
 
 }



const Course = ({ courses }) => {

  return (
    
    
    <div>
         
         <h1>Web development curriculum</h1>
         <Content courses={courses}/>
         <Total total={ courses.parts.reduce((sum,part) => sum+part.exercises, 0)}/>


    </div>
    )

}

export default Course


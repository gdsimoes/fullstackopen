function Header({ course }) {
    return <h1>{course}</h1>;
}

function Part({ part, exercises }) {
    return (
        <p>
            {part} {exercises}
        </p>
    );
}

function Content({ parts }) {
    return (
        <>
            <Part part={parts[0].name} exercises={parts[0].exercises} />
            <Part part={parts[1].name} exercises={parts[1].exercises} />
            <Part part={parts[2].name} exercises={parts[2].exercises} />
        </>
    );
}

function Total({ total }) {
    return <p>Number of exercises {total}</p>;
}

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content
                parts={[
                    { name: part1, exercises: exercises1 },
                    { name: part2, exercises: exercises2 },
                    { name: part3, exercises: exercises3 },
                ]}
            />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    );
};

export default App;

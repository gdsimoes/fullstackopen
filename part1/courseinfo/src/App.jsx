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
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    return (
        <div>
            <Header course={course} />
            <Content
                parts={[
                    { name: part1.name, exercises: part1.exercises },
                    { name: part2.name, exercises: part2.exercises },
                    { name: part3.name, exercises: part3.exercises },
                ]}
            />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    );
};

export default App;

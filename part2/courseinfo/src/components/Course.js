const Header = ({ name }) => {
    return <h1>{name}</h1>;
};

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    );
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part
                    key={part.id}
                    name={part.name}
                    exercises={part.exercises}
                />
            ))}
        </>
    );
};

const Total = ({ parts }) => {
    const total = parts.reduce((curr, part) => curr + part.exercises, 0);
    // Since this is a simple project I avoided using CSS
    return (
        <p>
            <strong>Total of {total} exercises</strong>
        </p>
    );
};

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

export default Course;

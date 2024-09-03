function Header({ course }) {
    return <h2>{course}</h2>;
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
            {parts.map((part) => (
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            ))}
        </>
    );
}

function Total({ parts }) {
    return (
        <p>
            <strong>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
        </p>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default Course;

// 10 17 14 31

const Header = (props) => {
    return <h1>{props.name}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
};

const Content = (props) => {
    return (
        <>
            <Part
                name={props.parts[0].name}
                exercises={props.parts[0].exercises}
            />
            <Part
                name={props.parts[1].name}
                exercises={props.parts[1].exercises}
            />
            <Part
                name={props.parts[2].name}
                exercises={props.parts[2].exercises}
            />
        </>
    );
};

const Total = (props) => {
    return (
        <p>
            Number of exercises{" "}
            {props.parts[0].exercises +
                props.parts[1].exercises +
                props.parts[2].exercises}
        </p>
    );
};

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            {/* <Total parts={course.parts} /> */}
        </>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;

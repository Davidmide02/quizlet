

const Result = ({user}) => {
    return (
        <div className="result p-4 bg-blue-950 text-white font-medium mt-4">
            <h1 className="text-2xl font-bold">Result</h1>
            <p className="p-4">Name here : {user}</p>
            <p className="p-4">Score</p>
            <p className="p-4">Comment</p>


        </div>
    )
}


export default Result;
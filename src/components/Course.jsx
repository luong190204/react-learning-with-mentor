export default function Courses() {

    const courses = [
        {
            name: "Javascript",
            price: 1000,
        }, 
        {
            name: "C++",
            price: 200,
        },
        {
            name: "Java",
            price: 500,
        },
        
    ];
    


    return <div>
        <ul>
            {courses.map((value, index) => {
                return (
                    <>
                    {value.price >= 500 ? <li>
                        name: {value.name}, price: {value.price}
                    </li> : ""}
                    </>
                );
            })}
        </ul>

    </div>
}
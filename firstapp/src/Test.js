export default function Test({name1, roll1, add1}){

    var a = 321;
    var b = "Mern";

    return(
        <div>
                My Test file {a} {b} {name1} {roll1}
                <button onClick={add1}>Click</button>
        </div>
    )
}


// const abc = {
//     name1: "RadheShyamJi",
//     roll1: 7
//   }

// const {name1, roll1} = props


export function Test2(abc){
    var a = "batch12"
    return(
        <div>
                My Test2 File {a} student name is {abc.name1} and his roll number is {abc.roll1}
        </div>
    )
}

export function Test3(){
    return(
        <div>
                My Test2 File
        </div>
    )
}




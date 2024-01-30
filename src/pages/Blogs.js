import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function Blogs() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        )
        return <ul>{listItems}</ul>
}





// // const Blogs = () => {
// //     return <h1>Blog Articles</h1>
// // }
// const Blogs = () => {
//     const numbers = [1, 2, 3, 4, 5]
//     const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//     );
//     return <h1>{listItems}</h1>
// };

// export default Blogs
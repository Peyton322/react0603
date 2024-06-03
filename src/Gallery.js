import Profile  from "./Profile";
// Move me to Profile.js
// export function Profile(){
//     return(
//         <img
//         src="https://static.popdaily.com.tw/wp-content/uploads/2021/06/8o2ajcafzqckg0080gwok8gk4qu075n-823x1000.jpg "
//         width={120}
//         height={150}
//         alt="cute cat"/>
//     );
// }

export default function Gallery(){
    return(
        <section>
            <h1>
                金多美 !!!!
            </h1>
            <Profile/>
            <Profile/>
            <Profile/>

        </section>
    )
}
export default function Profile(){
    return(
        <Avatar
            person={{name :'陳家敏',imageID:'peyton'}}
            size={200}
        />
    )
}

//way1

function Avatar({person,size}){
    return(
        <div>
            <figure>
                <img 
                    src="https://hips.hearstapps.com/hmg-prod/images/dami2-1637306458.jpg?crop=0.499xw:1.00xh;0.501xw,0&resize=640:*"
                    alr="金多美"
                    width={200}
                    height={200}
                />
            </figure>
            <figcaption>
                name:{person.name}<br/>
                imageID:{person.imageID}<br/>
            </figcaption>
        </div>
    )
}

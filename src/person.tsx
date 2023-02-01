import { useEffect } from 'react';
import IPerson from "./interfaces/person";

const Person = (props: any) => {
    const divStyle = {
        left: `${props.position.x}px`,
        top: `${props.position.y}px`,
      };
    
    useEffect(()=>{
    }, [])
    
    return (
        <>
            <div className="person" style={divStyle}>
                <div className="person-description">
                    <div className="person-description-names">
                        {`${props.firstName} ${props.lastName}`}
                    </div>
                    <div>
                        data urodzenia: {props.birthDate}
                    </div>
                    <div>
                        data śmierci: {props.deathDate}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Person;
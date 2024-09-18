import './card.css';

//TA1
function CreateCard(props) {
    return (
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-content">{props.description}</p>
            <p className="card-content">Asignado a: {props.peopleas}</p>
            <p className="card-footer">Fecha de inicio: {props.startDate}</p>
            <p className="card-footer">Fecha de fin: {props.endDate}</p>
        </div>
    );
}

//TA2
export function CreateCardChildren(props){
    return (
        <div className="card">
            <div className="card-content">
                {props.children}
            </div>
        </div>
    );
};

export default CreateCard;

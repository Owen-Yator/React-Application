import { MouseEvent } from "react";
import { Fragment } from "react";
function ListGroup() {
    let items = [ 
        'New York',
        'Nairobi',
        'Tokyo',
        'Rio',
        'Berlin',
    ]
    let selectedIndex = 0;
    //event handler
    const handleClick = (event:MouseEvent) => console.log(event);
  return (
    <Fragment>
        <h1> List</h1>
        
    <ul className="list-group">
      {items.map(item => <li className="list-group-item active" key={item} onClick={handleClick}>{item}</li>)}
    </ul>
    </Fragment>
  );
}
export default ListGroup;

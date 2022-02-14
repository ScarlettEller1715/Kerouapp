import react from "react";

function ManualForm() {
    return (
        <form>
            <input type="text" placeholder="Origin"/>
            <input type="text" placeholder="Destination"/>
            <input type="text" placeholder="Distance in Miles"/>
            <input type="text" placeholder="Travel Time"/>
            <input type="text" placeholder="Gascost"/>
        </form>
    )
}

export default ManualForm;
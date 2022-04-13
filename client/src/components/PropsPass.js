function DetailPage(props) {
    return <h5>Hello, {props.name} ! This is child components</h5>;
}
  
function PropsPass() {
    return (
        <div>
            <h4>Parent component</h4>
            <DetailPage name="Sara" />
            <DetailPage name="Cahal" />
            <DetailPage name="Edite" />
        </div>
    );
}

export default PropsPass;
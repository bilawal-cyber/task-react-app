import Button from '../components/buttons'
const header = ({title, onAddClick, text}) => {
    return (
            <header className="header">
                <h1>{title}</h1>
                <Button color={text?'red':'green'} text={text?'Hide':'Add'} onClick={onAddClick}/>
            </header>
    )
}

export default header

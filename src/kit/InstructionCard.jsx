import './InstructionCard.scss'

function InstructionCard({title, body}) {
    return (
        <div className="instruction-card">
            <div className="instruction-card-title">{title}</div>
            <div className="instruction-card-body">{body}</div>
        </div>
    )
}

export default InstructionCard
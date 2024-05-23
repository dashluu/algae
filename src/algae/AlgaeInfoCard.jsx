import './AlgaeInfoCard.scss'

function AlgaeInfoCard({title, body}) {
    return (
        <div className="algae-info-card">
            <div className="algae-info-card-title">{title}</div>
            <div className="algae-info-card-body">{body}</div>
        </div>
    )
}

export default AlgaeInfoCard
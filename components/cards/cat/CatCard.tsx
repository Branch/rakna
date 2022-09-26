export interface ICatCard {
    title: string
    body: string
    author: string
}

const CatCard = ({ title, body, author }: ICatCard) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{body}</div>
            <span>{author}</span>
        </div>
    )
}

export default CatCard

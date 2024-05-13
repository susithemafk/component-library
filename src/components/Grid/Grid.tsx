import s from './Grid.module.scss'

interface GridProps {
    items: JSX.Element[]
    title: string
}

const Grid: React.FC<GridProps> = ({ items, title }) => {
    return (
        <div className={s.split}>
            <div>{title}</div>
            <div className={s.grid}>
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default Grid

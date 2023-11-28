import './botones.css'
export function Counter() {

    const botones = (
        <div>

            <h1>0</h1>

            <div>
                <button className="btn">+</button>
                <button className="btn">-</button>
                <button className="btn">reset</button>
            </div>

        </div>
    )
    return botones;

}
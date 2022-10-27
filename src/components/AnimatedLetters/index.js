import './index.scss'


const getRandomInt = (max = 100) => {
    return Math.floor(Math.random() * max);
}


const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + getRandomInt()} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;
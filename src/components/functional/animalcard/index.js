import React from "react";

const AnimalCard = (props) => {
    const { name,
        scienticName,
        size,
        diet,
        additional,
        showAdditonal} = props
    return (
        <div>
            <h2>{name}</h2>
            <h3>{scienticName}</h3>
            <h4>{size}</h4>
            <div>{diet.join(', ')}.</div>
            {additional && (
                <button 
                    onClick={() => showAdditonal(additional)}
                >
                    More info
                </button>
            )}
        </div>
    )
};

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    scienticName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    showAdditional: PropTypes.func.isRequired
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
}

export default AnimalCard;
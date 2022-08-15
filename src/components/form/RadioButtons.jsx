import '../../styles/index.scss';

const RadioButtons = ({id, name, handleChange, selectedPos}) => {
    return (
        <>
            <label className="radio-button-label" key={id}>
                <input
                    type="radio"
                    value={id}
                    name="position"
                    checked={selectedPos== id}
                    onChange={handleChange}
                    className="radio-button"
                    required
                />
                <span className="customCheckbox"></span>
                {name}
            </label>
        </>
    );
};

export default RadioButtons;
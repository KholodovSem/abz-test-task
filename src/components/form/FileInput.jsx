import '../../styles/index.scss';

const FileInput = ({handleChange}) => {
    return (
        <>
            <label className="file-input-label">
                <input
                    type="file"
                    name="file"
                    placeholder="Upload your photo"
                    required
                    className="file-input"
                    onChange={handleChange}
                />
            </label>
        </>
    );
};

export default FileInput;
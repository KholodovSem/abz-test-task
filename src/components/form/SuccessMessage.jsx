import '../../styles/index.scss';
import successImg from '../../img/form/success-image-1x.png';
import successImg2x from '../../img/form/success-image-2x.png';

const SuccessMessage = () => {
    return (
        <>
            <h1 className="success-message__title">User successfully registered</h1>
            <img srcSet={`${successImg} 1x, ${successImg2x} 2x`} src={successImg} alt="success image"
                 className="success-message__image"/>
        </>
    );
};

export default SuccessMessage;
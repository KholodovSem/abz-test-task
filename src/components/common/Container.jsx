import '../../styles/index.scss';

const Container = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;
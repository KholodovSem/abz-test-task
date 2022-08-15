import {useState} from "react";
import {getToken, postUser} from "../../helpers/GetUsers";
import {formingFormData} from "../../helpers/FormData";
import Inputs from "./Inputs";
import SuccessMessage from "./SuccessMessage";
import RadioButtons from "./RadioButtons";
import FileInput from "./FileInput";
import '../../styles/index.scss';

const Form = ({positions, newUser, formStatus}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(1);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const name = e.currentTarget.name;
        const value = name === "file" ? e.currentTarget.files[0] : e.currentTarget.value;

        switch (name) {
            case "name":
                return setName(value);

            case "email":
                return setEmail(value);

            case "phone":
                return setPhone(value);

            case "position":
                return setSelectedPosition(value);

            case "file":
                return setFile(value)

            default:
                return;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {data: {token}} = await getToken();

        const formData = formingFormData(selectedPosition, name, email, phone, file)

        postUser(token, formData).then(({ok}) => {
            if (ok) {
                newUser()
            }
        })
    }

    const formValidation = () => {
        return email.length > 0 && name.length > 0 && email.length && file !== null
    }

    return (
        <section className="post-section">
            <div className="container">
                {formStatus ?
                    <SuccessMessage/>
                    :
                    <>
                        <h1 className="post-section__title">Working with POST request</h1>
                        <form className="form" onSubmit={handleSubmit} id="createUser">
                            <div>
                                <Inputs
                                    name={name}
                                    email={email}
                                    handleChange={handleChange}
                                    phone={phone}
                                    children={<span className="number-example">+38 (XXX) XXX - XX - XX</span>}
                                />
                            </div>
                            <div className="radio-button-wrapper">
                                <p className="radio-button-text">Select your position</p>
                                {positions.length > 0 && positions.map((position) => (
                                    <RadioButtons
                                        id={position.id}
                                        name={position.name}
                                        handleChange={handleChange}
                                        selectedPos={selectedPosition}
                                        key={position.id}
                                    />
                                ))}
                            </div>
                            <FileInput handleChange={handleChange}/>
                            <button className={formValidation() ? "form-button-active" : "form-button-disabled"}>
                                Sign up
                            </button>
                        </form>
                    </>
                }
            </div>
        </section>
    );
};

export default Form;
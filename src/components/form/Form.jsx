import {useState} from "react";
import '../../styles/index.scss';
import axios from "axios";

const Form = ({positions}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const name = e.currentTarget.name;
        const value = name === "file"? e.currentTarget.files[0] : e.currentTarget.value;

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

        const {data: {token}} = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")

        const formData = new FormData();
        formData.append('position_id', Number(selectedPosition));
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', file)

        console.log(formData)

        const response = await axios.post("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
            headers: {
                'Token': token
            },
            body: formData
        })
    }


   const formValidation = () =>  email.length > 0 && name.length > 0 && email.length > 0

    return (
        <section className="post-section">
            <div className="container">
                <h1 className="post-section__title">Working with POST request</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder="Your name"
                            value={name}
                            name="name"
                            onChange={handleChange}
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                            className="form__input"
                        />
                        <input
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={handleChange}
                            type="email"
                            required
                            className="form__input"
                        />
                        <div className="inputWrapper">
                            <input
                                placeholder="Phone"
                                value={phone}
                                name="phone"
                                onChange={handleChange}
                                type="tel"
                                pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                                required
                                className="form__input"
                            />
                            <span className="number-example">+38 (XXX) XXX - XX - XX</span>
                        </div>
                    </div>
                    <div className="radio-button-wrapper">
                        <p className="radio-button-text">Select your position</p>
                        {positions.length > 0 && positions.map((position) => (
                            <label className="radio-button-label" key={position.id}>
                                <input
                                    type="radio"
                                    value={position.id}
                                    name="position"
                                    checked={selectedPosition == position.id}
                                    onChange={handleChange}
                                    className="radio-button"
                                    required
                                />
                                <span className="customCheckbox"></span>
                                {position.name}
                            </label>
                        ))}
                    </div>
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
                    <button className={ formValidation() ?  "form-button-active" : "form-button-disabled" } >Sign up</button>
                </form>
            </div>
        </section>
    );
};

export default Form;
import '../../styles/index.scss';

const Inputs = ({name, email, phone, handleChange, children}) => {
    return (
        <>
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
                {children}
            </div>
        </>
    );
};

export default Inputs;
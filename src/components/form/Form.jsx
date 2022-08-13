import {useState} from "react";
import '../../styles/index.scss';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <section>
            <h1>Working with POST request</h1>
            <form>
                <div>
                    <input
                        placeholder="Your name"
                        value={name}
                        type="text"
                    />
                    <input 
                        placeholder="Email"
                    />
                    <input
                        placeholder="Phone"
                    />
                </div>
                <div>
                    <p>Select your position</p>
                    <input type="radio" value="Male" name="gender"/> Frontend developer
                    <input type="radio" value="Female" name="gender"/> Backend developer
                    <input type="radio" value="Other" name="gender"/> Designer
                    <input type="radio" value="Other" name="gender"/> QA
                </div>
            </form>
        </section>
    );
};

export default Form;
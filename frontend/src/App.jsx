import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [item, setItem] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e) => {
        setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/", item)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setItem({
            name: "",
            email: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={item.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={item.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;

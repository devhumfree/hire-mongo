import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initial = { profile: "", exp: 0, techs: [], desc: "" }

function Create() {
    const skillSet = [
        {
            name: "자바스크립트"
        },
        {
            name: "자바"
        },
        {
            name: "파이썬"
        },
        {
            name: "장고"
        },
        {
            name: "솔리디티"
        }
    ]
    const navigate = useNavigate()
    const [form, setForm] = useState(initial)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://humfreejob.azurewebsites.net/post', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((response) => console.log(response))
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        navigate('/job/board');
    };

    const { profile, exp, desc } = form;

    const handleChange = (e) => {
        setForm({ ...form, techs: [...form.techs, e.target.value] });
    }

    return (
        <>
        <h2 className="text-xl font-bold mt-8 ml-6">공고 올리기</h2>
            <form
                className="max-w-md mx-auto my-8 p-6 bg-white border rounded shadow-md"
                autoComplete="off" noValidate onSubmit={handleSubmit}>
                제목: <input className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" type="text" value={profile} onChange={(e) => setForm({ ...form, profile: e.target.value })} /><br />
                경력: <input className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" type="number" value={exp} onChange={(e) => setForm({ ...form, exp: e.target.value })} /><br />
                설명: <input className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" type="text" value={desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} /><br />
                <div className="p-4 rounded shadow-md">
                    <ul className="pl-4">
                        {skillSet.map(({ name }, idx) => (
                            <li key={idx} className="mb-2">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${idx}`}
                                        name={name}
                                        value={name}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`custom-checkbox-${idx}`} className="select-none cursor-pointer">
                                        {name}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    올리기
                </button>

            </form>
        </>
    )
}

export default Create
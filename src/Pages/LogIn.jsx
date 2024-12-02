import React, { createContext, useEffect, useState } from 'react'






export default function LogIn() {

    const [SpanClass, SetSpanClass] = useState({ Name: "ml-4 text-red-500 hidden", Passwerd: "ml-4 text-red-500 hidden" })

    const [Form, SetForm] = useState({ Name: "", Passwerd: "" })

    const HandelChangeName = (Element) => {

        { Element.target.value.length == 0 ? SetSpanClass({ ...SpanClass, [Element.target.id]: "ml-4 text-red-500 " }) : SetSpanClass({ ...SpanClass, [Element.target.id]: "ml-4 text-red-500 hidden" }) }

        SetForm({ ...Form, [Element.target.id]: Element.target.value })

    }




    const SubmitHandel = (e) => {


        if (!Form.Name && !Form.Passwerd) {

            e.preventDefault()
            SetSpanClass({ Passwerd: "ml-4 text-red-500", Name: "ml-4 text-red-500" })
        }


        else if (!Form.Name) {
            e.preventDefault()
            SetSpanClass({ ...SpanClass, Name: "ml-4 text-red-500" })
        }
        else if (!Form.Passwerd) {
            e.preventDefault()

            SetSpanClass({ ...SpanClass, Passwerd: "ml-4 text-red-500" })
        }
    }


    return (
        <form action="" onSubmit={SubmitHandel}>
            <div className='mt-6'>
                <div className="sm:col-span-3">
                    <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input

                            onChange={HandelChangeName}
                            value={Form.Name}
                            id="Name"
                            name="name"
                            type="text"
                            // autoComplete="given-name"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <span className={SpanClass.Name}>Email Is required </span>
                    </div>

                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="Passwerd" className="block text-sm font-medium leading-6 text-gray-900">
                        Passwerd
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={HandelChangeName}
                            value={Form.Passwerd}
                            id="Passwerd"
                            name="Passwerd"
                            type="text"
                            // autoComplete="given-name"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <span className={SpanClass.Passwerd}>Passwerd Is required </span>
                    </div>
                </div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5">submit</button>
            </div>
        </form>
    )
}

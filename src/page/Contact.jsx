import React, { useState } from "react";




export default function Contact() {

    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)

    }

    return (
        <>
            <p className="titlePage">Pour toute demande, veuillez me contacter en utilisant ce formulaire</p>

            <form onSubmit={handleSubmit}>
                <label > Nom</label>

                <input type="text" name="nom" id="nom" value={name} onChange={(e) => {
                    setName(e.target.value)

                }} />
                <label > Prénom</label>
                <input type="text" />

                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="4" cols="50" required></textarea>

                <button type="submit"> Envoyer</button>



            </form >




        </>

    )
}
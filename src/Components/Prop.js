import React from "react";

export function Header(props) {
    return (
        <>
            <header><img src = {props.img} alt="Error Loading" id="earth"/><span>my travel journal</span></header>
        </>
    )
}

export function Prop(props) {
    return (

        <div id="window">

            <div id="set1">

                <img src={props.item.imageUrl} alt="Error Loading" id="image1" />


                <div id="text" >
                    <img src={props.item.locationLogo} alt="Error Loading" id="image2" />

                    <div> {props.item.location}
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <h1>{props.item.title}</h1>

                    <strong>{props.item.startDate}-{props.item.endDate}</strong>

                    <p>{props.item.description}</p>

                </div>

                <hr></hr>

            </div>

        </div>
    )
}
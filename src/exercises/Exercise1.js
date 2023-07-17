const Exercise1 = () => {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ]

    return (
        planets.map((planet, key) =>
            planet.isGasPlanet && <Planet key={key} props={planet} />
        )
    )
}

const Planet = (props) => {
    return (
        <div>
            <h1>{props.props.name}</h1>
        </div>
    )
}

export default Exercise1
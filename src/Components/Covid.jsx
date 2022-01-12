import React from 'react'
import { useState, useEffect } from 'react'

const Covid = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://data.covid19india.org/data.json')
        const actualData = await response.json();
        console.log(actualData);
        console.log(actualData.statewise);
        setData(actualData.statewise)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">State/Union Territory</th>
                        <th scope="col">Active</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Death</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Updated Time</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((elemant, index) => {
                        return (
                            <>
                                <tr>

                                    <th scope="row">{index+1}</th>
                                    <td>{elemant.state}</td>
                                    <td>{elemant.active}</td>
                                    <td>{elemant.confirmed}</td>
                                    <td>{elemant.deaths}</td>
                                    <td>{elemant.recovered}</td>
                                    <td>{elemant.lastupdatedtime}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Covid

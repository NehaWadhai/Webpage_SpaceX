
import React, { useState } from 'react';
import FilterTab from './FilterTab';
import ImageTab from './ImageTab';
import axios from 'axios'

export default function RenderData() {

    const [params, setParams] = useState({
        year: "",
        launch: "",
        land: "",

    })

    const [data, setData] = useState([])
    //Using useEffect hooks to make an API call depending on the parameters
    React.useEffect(() => {
        const callApi = (params) => {
            axios.get(
                `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params.launch}&land_success=${params.land}&launch_year=${params.year}`
            ).then((response) => {
                setData(response.data)
            })
        }
        callApi(params)
    }, [params])


    //CallBack Function to handle click of the button of Year
    const handleClickButton = (event) => {
        const yr = event.target.id
        setParams(prevState => ({
            ...prevState,
            year: yr
        })
        )
    }

    //Callback Function to handle click of the button Launch
    const handleClickLaunch = (event) => {
        const lc = event.target.id
        setParams(prevState => ({
            ...prevState,
            launch: lc
        })
        )
    }

    //Callback Function to handle click of the button Land
    const handleClickLand = (event) => {
        const ld = event.target.id
        setParams(prevState => ({
            ...prevState,
            land: ld
        }))
    }

    //Callback Function to handle click of the button Filter
    const handleClickFilter = () => {
        setParams(prevState => ({
            ...prevState,
            launch: "",
            land: "",
            year: ""

        }))
    }

    return <>
        <div className="list-column" >
            <FilterTab handleClick={handleClickButton} handleLaunch={handleClickLaunch}
                handleLand={handleClickLand} handleFilter={handleClickFilter} paramsvalue={params} />
            <ImageTab images={data}  />
        </div>
    </>

}
import { useState } from 'react'


// const domain = 'https://dr-admin-dashboard.herokuapp.com'
const domain = 'https://8000-autumn-night-66818328.eu-ws2.runcode.io';


export const DasProvider = () => {
    let [dasdata, setDasdata] = useState(true)

    let DasData = async (e )=> {
        e.preventDefault()
        let response = await fetch(`${domain}/api/dashboard/`, {
            method:'GET',
            // headers:{
            //     'Content-Type':'application/json'
            // },
            // body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setDasdata(data)
            alert(data)
        }else{
            alert('Something went wrong!')
        }
    }

    let contextData = {
        dasdata:dasdata,
        DasData:DasData,
    }


    return({contextData})
}
import React, { useState, useEffect } from 'react';

const PartnersTable = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/locations',
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(res => res.json())
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, []);

    return <div className='PartnersTable'>
        <table style={{ border: '3px solid black', padding: '30px' }}>
            <thead style={{ border: '3px solid black', padding: '30px', fontSize: 18 }}>
                <th style={{ border: '3px solid black', padding: '30px', fontSize: 18 }}>
                    ORAS
                </th>
                <th style={{ border: '3px solid black', padding: '30px', fontSize: 18 }}>
                    NUME LOCATIE
                </th>
                <th style={{ border: '3px solid black', padding: '30px', fontSize: 18 }}>
                    ADRESA
                </th>
                <th style={{ border: '3px solid black', padding: '30px', fontSize: 18 }}>
                    NR TELEFON
                </th>
            </thead>
            {data && data.map((e, i) =>
                <tr style={{ border: '3px solid black', padding: '30px' }} key={i}>
                    <td style={{ border: '3px solid black', padding: '30px' }}>{e.city}</td>

                    <td style={{ border: '3px solid black', padding: '30px' }}>{e.name}</td>

                    <td style={{ border: '3px solid black', padding: '30px' }}>{e.adress}</td>

                    <td style={{ border: '3px solid black', padding: '30px' }}>{e.telephone}</td>
                </tr>)}
        </table>
    </div>
}
export default PartnersTable;

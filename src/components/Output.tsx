import React from 'react'

export default function Output({ info }) {
  return (
    <section className="output-data comp">
        <div className='data'>
            {info.isFetching ? <p>Loading...</p> : (
                <>
                    <p>Fajr <span>{info.data?.data[0].timings.Fajr}</span></p>
                    <p>Sunrise <span>{info.data?.data[0].timings.Sunrise}</span></p>
                    <p>Dhuhr <span>{info.data?.data[0].timings.Dhuhr}</span></p>
                    <p>Asr <span>{info.data?.data[0].timings.Asr}</span></p>
                    <p>Maghrib <span>{info.data?.data[0].timings.Maghrib}</span></p>
                    <p>Ishaa <span>{info.data?.data[0].timings.Isha}</span></p> 
                </>
            )}
            {info.isError && <p>Error: <span>{info.error.message}</span></p>}
        </div>
    </section>
  )
}

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Output from './Output'

export default function Call() {
    const cityRef = React.useRef<HTMLInputElement>(null)
    // const countryRef = React.useRef<HTMLInputElement>(null)
    
    const prayerTimes = useQuery({ queryKey: ['times'], queryFn: () => fetchPrayerTimes(), enabled: false, })
    const location = useQuery({ queryKey: ['location'], queryFn: () => fetchLocation(), enabled: true, })

    async function fetchLocation() {
        const data = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client`)
        if (!data.ok) {
            console.log(data.status)
        }
        return data.json()
    }

    async function fetchPrayerTimes() {
        const date = new Date()
        const data = await fetch(`https://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${date.getMonth() + 1}?city=${cityRef.current.value}&country=`)
        if (!data.ok) {
            console.log(data.status)
        }
        return data.json()
    }

    function handleClick(e) {
        e.preventDefault()
        if (cityRef.current.value === '') return;
        prayerTimes.refetch()
        // location.refetch()
    }

    return (
        <>
        <section className='input-data comp'>
            <form className='flex justify-center flex-wrap content-center' name="city" id="cityform">
                {/* <input type="text" placeholder="الدوله" ref={countryRef} defaultValue={location.data?.countryName}/> */}
                <input type="text" placeholder="المدينة" ref={cityRef} defaultValue={location.data?.city}/>
                <input className='w-full bg-slate-600 p-5 rounded hover:bg-slate-500 transition-all my-8 cursor-pointer' type="submit" value="ابحث" onClick={handleClick}/>
            </form>
        </section>
        <Output info={prayerTimes} />
        </>
    )
}

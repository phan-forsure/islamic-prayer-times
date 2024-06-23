import { useQuery } from '@tanstack/react-query'
import React from 'react'

const cities: string[] = ['Cairo', 'London', 'Moscow', 'Paris', 'Rome', 'Sydney', 'Tokyo', 'Vienna']
const countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Egypt', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Unit States', 'Ghana', 'Greece', 'Guatemala', 'United Kingdom', 'Guinea', 'Guinea-Bissau']

export default function Call() {
    const cityRef = React.useRef<HTMLSelectElement>(null)
    const countryRef = React.useRef<HTMLSelectElement>(null)
    const dayRef = React.useRef<HTMLInputElement>(null)
    const monthRef = React.useRef<HTMLInputElement>(null)
    const yearRef = React.useRef<HTMLInputElement>(null)
    
    const info = useQuery({ queryKey: ['data'], queryFn: () => fetchData(), enabled: false })

    async function fetchData() {
        const data = await fetch(`http://api.aladhan.com/v1/calendarByCity/${yearRef.current.value}/${monthRef.current.value}?city=${cityRef.current.value}&country=${countryRef.current.value}`)
        if (!data.ok) {
            console.log(data.status)
        }
        return data.json()
    }

    function handleClick(e) {
        e.preventDefault()
        if (!dayRef.current.value ||!monthRef.current.value ||!yearRef.current.value) {
            return;
        }
        info.refetch()
    }

    return (
        <>
        <section className='input-data comp'>
            <form>
                <select name="" id="" ref={cityRef}>
                    {cities.map(city => <option key={city}>{city}</option>)}
                </select>

                <select name="" id="" ref={countryRef}>
                    {countries.map(city => <option key={city}>{city}</option>)}
                </select>

                <input type="number" name="" id="" max={29} min={0} ref={dayRef} placeholder={'Day'} />
                <input type="number" name="" id="" max={30} min={1} ref={monthRef} placeholder={'Month'} />
                <input type="number" name="" id="" ref={yearRef} placeholder={'Year'} />
                <input type="submit" value="Fetch" onClick={handleClick}/>
            </form>
        </section>
        <section className="output-data comp">
            <div className='data'>
                {info.isFetching ? <p>Loading...</p> : (
                    <>
                        <p>Fajr: {info.data?.data[0].timings.Fajr}</p>
                        <p>Sunrise: {info.data?.data[0].timings.Sunrise}</p>
                        <p>Dhuhr: {info.data?.data[0].timings.Dhuhr}</p>
                        <p>Asr: {info.data?.data[0].timings.Asr}</p>
                        <p>Maghrib: {info.data?.data[0].timings.Maghrib}</p>
                        <p>Ishaa: {info.data?.data[0].timings.Isha}</p> 
                    </>
                )}
                {info.isError && <p>Error: {info.error.message}</p>}
                
            </div>
        </section>
        </>
    )
}

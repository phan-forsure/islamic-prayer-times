import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Output from './Output'

const cities: string[] = ['Cairo', 'London', 'Moscow', 'Paris', 'Rome', 'Sydney', 'Tokyo', 'Vienna']
const countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Egypt', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'United States', 'Ghana', 'Greece', 'Guatemala', 'United Kingdom', 'Guinea', 'Guinea-Bissau']

export default function Call() {
    const cityRef = React.useRef<HTMLSelectElement>(null)
    const countryRef = React.useRef<HTMLSelectElement>(null)
    
    const info = useQuery({ queryKey: ['data'], queryFn: () => fetchData(), enabled: false, })

    async function fetchData() {
        const date = new Date()
        const data = await fetch(`http://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${date.getMonth() + 1}?city=${cityRef.current.value}&country=${countryRef.current.value}`)
        if (!data.ok) {
            console.log(data.status)
        }
        return data.json()
    }

    function handleClick(e) {
        e.preventDefault()
        info.refetch()
    }

    return (
        <>
        <section className='input-data comp'>
            <form className='flex justify-center flex-wrap content-center'>
                <select name="" id="" ref={countryRef}>
                    {countries.map(city => <option key={city}>{city}</option>)}
                </select>

                <select name="" id="" ref={cityRef}>
                    {cities.map(city => <option key={city}>{city}</option>)}
                </select>

                <input className='w-full bg-slate-600 p-5 rounded hover:bg-slate-500 transition-all my-8 cursor-pointer' type="submit" value="ابحث" onClick={handleClick}/>
            </form>
        </section>
        <Output info={info} />
        </>
    )
}

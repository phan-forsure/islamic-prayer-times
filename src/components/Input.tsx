import React from 'react'

const cities: string[] = ['Cairo', 'London', 'Moscow', 'Paris', 'Rome', 'Sydney', 'Tokyo', 'Vienna']
const countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Egypt', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Unit States', 'Ghana', 'Greece', 'Guatemala', 'United Kingdom', 'Guinea', 'Guinea-Bissau']

export default function Input() {
    const cityRef = React.useRef<HTMLSelectElement>(null)
    const countryRef = React.useRef<HTMLSelectElement>(null)
    const dayRef = React.useRef<HTMLInputElement>(null)

    function fetchData() {
        fetch(`http://api.aladhan.com/v1/calendarByCity/2024/6?city=${cityRef.current.value}&country=${countryRef.current.value}`)
        .then(res => res.json())
        .then(res => console.log(res.data[dayRef.current.value]))
    }

  return (
    <section className='input-data comp'>
        <form>
            <select name="" id="" ref={cityRef}>
                {cities.map(city => <option key={city}>{city}</option>)}
            </select>

            <select name="" id="" ref={countryRef}>
                {countries.map(city => <option key={city}>{city}</option>)}
            </select>

            <input type="number" name="" id="" max={29} min={0} ref={dayRef}/>

            <input type="submit" value="Fetch" onClick={(e) => {
                e.preventDefault()
                fetchData()
            }}/>
        </form>
    </section>
  )
}

import React from 'react'

export default function Output({ info }) {
  if (info.isFetching) {
    return (
      <section className="output-data comp flex justify-center items-center">
        <span className='animate-spin block rounded-full size-12 p-4 bg-transparent border-4 border-stone-300 border-r-slate-700 border-solid'></span>
      </section>
    )
  }

  if (info.isError) {
    return (
      <section className="output-data comp flex justify-center items-center">
        <p className='text-center'>حدث خطأ في البحث</p>
      </section>
    )
  }

  return (
    <section className="output-data comp flex justify-center items-center">
        <div className='data w-full'>
          {info.data ? (
            <>
            <p className='data-text'>Fajr <span>{info.data?.data[0].timings.Fajr}</span></p>
            <p>Sunrise <span>{info.data?.data[0].timings.Sunrise}</span></p>
            <p>Dhuhr <span>{info.data?.data[0].timings.Dhuhr}</span></p>
            <p>Asr <span>{info.data?.data[0].timings.Asr}</span></p>
            <p>Maghrib <span>{info.data?.data[0].timings.Maghrib}</span></p>
            <p>Ishaa <span>{info.data?.data[0].timings.Isha}</span></p> 
            </>
          ) : <p className='text-center'>لا بيانات</p>}
        </div>
    </section>
  )
}

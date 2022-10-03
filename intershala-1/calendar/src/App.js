import React,{useState} from 'react'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css'

const locales = {
  "en-US": require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title:"Big meeting",
    allDay:true,
    start:new Date(2022,9,12),
    end:new Date(2022,9,13)
  }
]

const App = () => {
  const [event,setEvent] = useState({title:"",start:"",end:""})
  const [allEvent,setAllEvent] = useState(events)

  const setEventFun = () => {
    setAllEvent([...allEvent,event])
    setEvent({
      title:"",
      start:"",
      end:""
    })
  }

  return (
    <>
    <div className='App'>
    <h1 style={{backgroundColor:'green'}}>Calendar</h1>
    <h2>Add New Event</h2>
    <div>
      <input type="text" placeholder="Add New Event" style={{width:"20%", marginRight:"10px"}}
        value={event.title} onChange={(e)=>setEvent({...event,title:e.target.value})}
      />
      <DatePicker placeholderText='Start Date' style={{marginRight:'10px'}}
      selected={event.start} onChange={(start)=>setEvent({...event,start})} />

<DatePicker placeholderText='End Date'
      selected={event.end} onChange={(end)=>setEvent({...event,end})} />

      <button className='btn btn-success mt-3' onClick={setEventFun}>Add Event</button>


    </div>
      <Calendar localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor="end"
        style={{height:500,margin:'50px'}}
      />
</div>
    </>
  )
}

export default App
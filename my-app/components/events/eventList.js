import EventItem from "./eventItem"
import classes from "./eventList.module.css"

export default function EventList(props) {
const {items} = props
console.log(items)
  return (
    <div>
      <ul className={classes.list}>
        {items.map((event) => (
        <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
        />
        ))}
      </ul>
    </div>
  )
}

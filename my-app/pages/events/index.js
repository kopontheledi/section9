import Head from "next/head"
import { Fragment } from "react"
import { getAllEvents } from "../../helpers/api-util"
import EventList from "@/components/events/eventList"
import EventSearch from "@/components/events/EventSearch"
import { useRouter } from "next/router"


export default function AllEventsPage(props) {
  const {events} = props.events;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <Head>
      <title>All Events</title>
        <meta 
        name="description" 
        content="find lot of events"/>
      </Head>

      <EventSearch onSearch={findEventsHandler}/>
      <EventList
      items={events}/>
    </Fragment>
   
  )
}

export async function getStaticProps(){
  const events = await getAllEvents();

  return{
    props: {
      events: events,
    },
    revalidate: 60
  }

}

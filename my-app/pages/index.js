import Head from "next/head";
// import Link from "next/link";
import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "../helpers/api-util";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta 
        name="description" 
        content="find lot of events"/>
      </Head>
      <NewsletterRegistration />
    <EventList 
    items={props.events}/>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return{
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

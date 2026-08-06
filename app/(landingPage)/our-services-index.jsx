import OurServicesGsap from "./our-services/our-services-gsap"
import OurServicesMarkup from "./our-services/our-services-markup"
import sports from "@/assets/landingPage/our-services/sports_equipment.png"
import garage from "@/assets/landingPage/our-services/sports-garage.png"
import livbid from '@/assets/landingPage/our-services/live-bid.png'
import ledwall from '@/assets/landingPage/our-services/led-wall.png'
import jersey from '@/assets/landingPage/our-services/cus-jersy.png'
import trophy from '@/assets/landingPage/our-services/trophy-medal.png'
import tournament from '@/assets/landingPage/our-services/tornament-man.png'
import eventsetup from '@/assets/landingPage/our-services/event-setup.png'

const services = [
  {
    no: '01',
    title: 'Sports Equipment',
    description:
      'All types of cricket and sports items including bats, balls, kits, accessories, and training equipment.',
  },
  {
    no: '02',
    title: 'BatZone Garage',
    description:
      'Professional bat customization, knocking, handle replacement, bat modifications, and performance tuning.',
  },
  {
    no: '03',
    title: 'LED Wall Live Telecast',
    description:
      'Enhance your tournament with professional LED wall live streaming, bringing every match, score, and highlight to spectators in real time.',
  },
  {
    no: '04',
    title: 'Customized Jerseys',
    description:
      'Custom jersey design and printing for cricket tournaments, clubs, schools, colleges, and corporate teams.',
  },
  {
    no: '05',
    title: 'Trophies & Medals',
    description:
      'Premium trophies, medals, mementos, and awards for all types of sports tournaments and events.',
  },
  {
    no: '06',
    title: 'Live Bidding Auction',
    description:
      'Real-time online player auction platform where team owners can bid from anywhere through the BatZone website.',
  },
  {
    no: '07',
    title: 'Tournament Management',
    description:
      'Complete cricket tournament planning and execution with end-to-end event coordination.',
  },
  {
    no: '08',
    title: 'Event Setup & Operations',
    description:
      'Pitch preparation, umpire arrangement, stage setup, sound system, scoring, and overall tournament operations.',
  },
]

const imagesList = [
  sports,
  garage,
  ledwall,
  jersey,
  trophy,
  livbid,
  tournament,
  eventsetup
]

function OurServicesIndex() {
  return (
    <>
      <OurServicesGsap>
        <OurServicesMarkup services={services} imagesList={imagesList} />
      </OurServicesGsap>
    </>
  )
}

export default OurServicesIndex

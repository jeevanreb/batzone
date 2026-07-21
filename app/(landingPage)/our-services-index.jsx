import OurServicesGsap from "./our-services/our-services-gsap"
import OurServicesMarkup from "./our-services/our-services-markup"
import visacard from "@/assets/landingPage/our-services/paymentGateway.png"
import sports from "@/assets/landingPage/our-services/sports.png"
import garage from "@/assets/landingPage/our-services/garage.png"
import upiCollection from '@/assets/landingPage/our-services/upiCollection.png'
import bulkPayouts from '@/assets/landingPage/our-services/bulkPayouts.png'
import virtualAccount from '@/assets/landingPage/our-services/virtualAccount.png'
import bbps from '@/assets/landingPage/our-services/bbps.png'
import paymentLinks from '@/assets/landingPage/our-services/paymentLinks.png'
import merchantOnboarding from '@/assets/landingPage/our-services/merchantOnboarding.png'
import apiBanking from '@/assets/landingPage/our-services/apiBanking.png'

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
    title: 'Broken Bat Repair',
    description:
      'Repair and restore broken cricket bats with durable finishing and balance correction.',
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
    bulkPayouts,
    sports,
    garage,
    paymentLinks,
    sports,
    garage
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

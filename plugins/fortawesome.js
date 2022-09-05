import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'


import { faPhone, faBuilding, faRotate, faHouseChimney, faTruckMoving, faSuitcase, faUsers, faGlobe, faLink, faMagnifyingGlass, faGear, faLightbulb, faEnvelope, faClock, faArrowRight, faArrowUpRightDots, faPeopleGroup, faChartPie, faSquarePlus, faSquarePollVertical, faRectangleList, faAngleDown, faTrophy, faRocket, faComments, faSitemap, faPerson, faGears, faBoxesStacked, faDesktop, faBasketShopping, faShieldHalved, faChartColumn, faExpand, faPlus, faArrowUpRightFromSquare, faSquarePhone, faPhoneFlip, faListOl, faWandMagicSparkles, faMaximize, faCaretRight, faSignsPost} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn, faTiktok, faBehance, faPinterestP} from '@fortawesome/free-brands-svg-icons'


library.add(faPhone, faBuilding, faRotate, faHouseChimney, faExpand, faPlus, faArrowUpRightFromSquare, faTruckMoving, faSuitcase, faUsers, faGlobe, faLink, faMagnifyingGlass, faGear, faLightbulb, faGlobe, faEnvelope, faClock, faFacebookF, faTwitter, faYoutube, faInstagram, faArrowRight, faArrowUpRightDots, faPeopleGroup, faChartPie, faSquarePlus, faSquarePollVertical, faRectangleList, faLinkedinIn, faTiktok, faAngleDown, faTrophy, faRocket, faComments, faSitemap, faPerson, faGears, faBoxesStacked, faDesktop, faBasketShopping, faShieldHalved, faChartColumn, faSquarePhone, faPhoneFlip, faBehance, faListOl, faWandMagicSparkles, faMaximize, faCaretRight, faSignsPost, faPinterestP)

Vue.component('font-awesome-icon', FontAwesomeIcon)
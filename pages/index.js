import Automotive from '../components/Automotive'
import Contact from '../components/Contact'
import HomeComponent from '../components/Home'
import Layout from '../components/Layout'
import Spacer from '../components/Spacer.js'
import Vaccancies from '../components/Vaccancies'
import Who from '../components/Who'

export default function Home() {
  return (
    <Layout home={true}>
      <Who />
      <Spacer x={-1} y={-1}/>
      <Vaccancies />
      <Spacer x={-1} y={1}/>
      <Automotive />
      <Spacer x={-1} y={-1}/>
      <Contact />
      <Spacer x={-1} y={1} dark={true}/>
    </Layout>
  )
}

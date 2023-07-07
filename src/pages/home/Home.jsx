import { Chart } from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./Home.css"
import { UserData } from "../../DummyData"
import { WidgetSm } from "../../components/widgetSm/widgetSm"
import WidgetLg from "../../components/widgetLg/widgetLg"


export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={UserData} title={"UserAnalytics"} dataKey="Active User" />
      
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

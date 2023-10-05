import { DiagramTab } from "../../components/DiagramTab";
import { Helmet } from "react-helmet";
import img from "../../assets/temporary/statisticspage.jpg";

const StatisticsPage = () => {
  return (
    <>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      {/* HERE PUT YOUR COMPONENTS  */}
      <DiagramTab />

      {/* YOU CAN DELETE CODE BELOW LATER */}
      <ul>
        This is <b>Statistics Page</b>. Please import and use here{" "}
        <b>componets </b>
        like:
        <hr />
        <li>Navigation</li>
        <li>Balance</li>
        <li>Currency</li>
        <li>
          DiagramTab:
          <li>
            <li>---Chart</li>
            <li>---DiagramFilters</li>
            <li>---Table</li>
          </li>
        </li>
      </ul>

      <img src={img} width="800" alt="Statisticspage" />
      <hr />
    </>
  );
};

export default StatisticsPage;

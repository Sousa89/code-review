// GeneratedContentSection.js

import GeneratedResults from "./GeneratedResults";
import GeneratedPicture from "./GeneratedPicture";

function GeneratedContentSection(props) {
  return (
    <section className="generatedContentSection">
      <h2>Huzzah! We've Cured your boredom!</h2>

      {props.generatedData ? (
        <GeneratedResults
          activity={props.generatedData.activity}
          participants={props.generatedData.participants}
          type={props.generatedData.type}
          price={props.generatedData.price}
        />
      ) : null}
      <GeneratedPicture searchParam={props.generatedData.activity} />
      <p>
        Dont like the result? Click the button again! I know, its a struggle,
        but it takes minimal effort.
      </p>
    </section>
  );
}

export default GeneratedContentSection;

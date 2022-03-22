// GeneratedResults.js

function GeneratedResults({ activity, participants, price, type }) {
  return (
    <div className="GeneratedResultsContainer">
      <h3>
        Look at boredy pants over here. Well, if you're into {type}, you should
        definitely try and....
      </h3>
      <h2>{activity}!</h2>
      {participants === 1 ? (
        <p>
          especially if theres just you.....all alone, with just your thoughts.
        </p>
      ) : (
        <p>Especially if there's {participants} of you!</p>
      )}

      {price === 0.0 ? (
        <p>and the best part, is that its FREEE! </p>
      ) : price <= 0.3 ? (
        <p>It will only cost you a couple of bucks</p>
      ) : price <= 0.6 ? (
        <p>Ehh it'll be a bit more money</p>
      ) : price <= 1 ? (
        <p>I hope you have a few bucks lying around</p>
      ) : null}
    </div>
  );
}

export default GeneratedResults;

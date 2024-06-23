export default function Input({ onValueChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            onChange={(event) =>
              onValueChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            type="number"
            required
          ></input>
        </p>
        <p>
          <label>Annual investment</label>
          <input
            onChange={(event) =>
              onValueChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            type="number"
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            onChange={(event) =>
              onValueChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            type="number"
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(event) => onValueChange("duration", event.target.value)}
            value={userInput.duration}
            type="number"
            required
          ></input>
        </p>
      </div>
    </section>
  );
}

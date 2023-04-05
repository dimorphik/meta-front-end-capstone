const isFormValid = (props) => {
  const isValid =
    !!props.todaysDate &&
    !!props.date &&
    !!props.time &&
    !!props.availableTimes.length &&
    !!props.guests;
  return isValid;
};

const BookingForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <h2>When would you like to dine with us?</h2>
      <label htmlFor="date">Choose date</label>
      <input
        required
        id="date"
        type="date"
        min={props.todaysDate}
        value={props.date}
        onChange={(e) => {
          props.setDate(e.target.value);
          props.dispatchAvailableTimes({ type: "", value: e.target.value });
        }}
      />
      {props.availableTimes.length ? (
        <>
          <label htmlFor="time">Time</label>
          <div id="time" className="time-list">
            {props.availableTimes.map((timeListItemValue) => (
              <button
                key={timeListItemValue}
                type="button"
                aria-label="On Click"
                className={props.time === timeListItemValue ? "selected" : ""}
                onClick={(e) => {
                  const newTime = e.target.innerText;
                  props.setTime(newTime);
                }}>
                {timeListItemValue}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="validation-error">
          We're sorry, but there are no reservation times available for this date. We hope you'll
          select another day to join us!
        </div>
      )}
      <label htmlFor="guests">Number of guests</label>
      <input
        required
        id="guests"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        value={props.guests}
        onChange={(e) => {
          props.setGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        defaultValue={props.occasion}
        onChange={(e) => {
          props.setOccasion(e.target.value);
        }}>
        {props.occasions.map((occasion) => (
          <option key={occasion}>{occasion}</option>
        ))}
      </select>
      <button aria-label="On Click" id="submit" disabled={!isFormValid(props)}>
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
export { isFormValid };

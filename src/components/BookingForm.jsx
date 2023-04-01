const BookingForm = (props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px", margin: "100px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={props.date}
        onChange={(e) => {
          props.setDate(e.target.value);
          props.dispatchAvailableTimes({ type: "", value: e.target.value });
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.availableTimes.map((time) => (
          <div key={time} style={{ padding: "10px" }}>
            {time}
          </div>
        ))}
      </div>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        defaultValue={props.time}
        onChange={(e) => props.setTime(e.target.value)}>
        {props.availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={props.guests}
        onChange={(e) => props.setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        defaultValue={props.occasion}
        onChange={(e) => props.setOccasion(e.target.value)}>
        {props.occasions.map((occasion) => (
          <option key={occasion}>{occasion}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;

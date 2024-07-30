import { useState } from "react";
import { Itinerary as ItineraryType } from "../reducers/itinerary-reducer";
import "./itinerary.css";

interface ItineraryListProps {
  itineraries: ItineraryType[];
  onEditItinerary: (itinerary: ItineraryType) => void;
  onDeleteItinerary: (itineraryId: number) => void;
}

function ItineraryList({
  itineraries,
  onEditItinerary,
  onDeleteItinerary,
}: ItineraryListProps) {
  console.log(itineraries);

  return (
    <ul className="itinerary-list">
      {itineraries.map((itinerary) => {
        return (
          <li key={itinerary.id}>
            <Itinerary
              itinerary={itinerary}
              onEdit={onEditItinerary}
              onDelete={onDeleteItinerary}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Itinerary({
  itinerary,
  onEdit,
  onDelete,
}: {
  itinerary: ItineraryType;
  onEdit: (itinerary: ItineraryType) => void;
  onDelete: (itineraryId: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let itineraryContent;

  if (isEditing) {
    itineraryContent = (
      <>
        <input
          type="text"
          value={itinerary.text}
          onChange={(event) => {
            onEdit({ ...itinerary, text: event.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    itineraryContent = (
      <>
        <p>{itinerary.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) =>
          onEdit({ ...itinerary, done: event.target.checked })
        }
      />
      {itineraryContent}
      <button onClick={() => onDelete(itinerary.id)}>Delete</button>
    </div>
  );
}

export default ItineraryList;

import { useReducer } from "react";

import "./App.css";
import AddItinerary from "./components/AddItinery";
import ItineraryList from "./components/itineraryList";
import {
  itineraryReducer,
  initialItinerary,
} from "./reducers/itinerary-reducer";

import { Itinerary } from "./reducers/itinerary-reducer";

function App() {
  const [itineraries, dispatch] = useReducer(
    itineraryReducer,
    initialItinerary
  );

  console.log(dispatch);

  function handleAdd(text: string) {
    dispatch({
      type: "ADD",
      id: Date.now(),
      text,
    });
  }

  function handleEdit(itinerary: Itinerary) {
    dispatch({
      type: "EDIT",
      itinerary,
    });
  }

  function handleDelete(itineraryId: number) {
    dispatch({
      type: "DELETE",
      id: itineraryId,
    });
  }

  return (
    <>
      <AddItinerary onAddItinerary={handleAdd} />
      <ItineraryList
        itineraries={itineraries}
        onEditItinerary={handleEdit}
        onDeleteItinerary={handleDelete}
      />
    </>
  );
}

export default App;

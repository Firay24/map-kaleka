import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import shortId from "shortid";
import { RootState } from "../../app/store";

interface MapItem {
  coordinate: string[];
  id: string;
}

export const fetchCoordinate = createAsyncThunk("map/fetch", async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b"
  );
  const data = await response.json();
  const dataWithId = data.data.map((result: { coordinates: string[] }) => ({
    id: shortId.generate(),
    ...result,
  }));
  return dataWithId;
});

const mapAdapter = createEntityAdapter({
  selectId: (map: MapItem) => map.id,
});

const mapslicer = createSlice({
  name: "map",
  initialState: mapAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoordinate.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoordinate.fulfilled, (state, action) => {
        state.loading = false;
        mapAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCoordinate.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const mapSelectors = mapAdapter.getSelectors(
  (state: RootState) => state.maps
);

export default mapslicer.reducer;

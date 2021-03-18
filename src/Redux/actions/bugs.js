import axios from "axios";
import moment from "moment";
import {
  ADD_BUG,
  RESOLVE_BUG,
  SET_BUGS,
  REQUEST_BUGS_START,
  REQUEST_BUGS_FAIL,
  ASSIGNE_BUG_TO_USER,
} from "../reducers/bugs";
import { apiCallFailed, startApiCall } from "./api";

/*
axios.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});
*/

axios.defaults.baseURL = "http://localhost:9001/api";

export const startSetBugs = () => (dispatch, getState) => {
  // DON'T FORGET TO TRY REFERENCE // done, WORK!
  const { lastFetch } = getState().entities.bugs;
  const timeDiff = moment().diff(moment(lastFetch), "minutes");
  if (timeDiff < 10) return;
  dispatch(startApiCall());
  dispatch(REQUEST_BUGS_START());
  return axios
    .get("/bugs")
    .then((response) => {
      dispatch(SET_BUGS(response.data));
    })
    .catch((reason) => {
      dispatch(REQUEST_BUGS_FAIL());
      dispatch(apiCallFailed(reason.message));
    });
};

export const startAddBug = (bug) => (dispatch, getState) => {
  dispatch(startApiCall());
  return axios
    .post("http://localhost:9001/api/bugs", bug)
    .then((response) => {
      // DON'T FORGET THE ARGUMENT INSTEAD OF RESPONSE
      dispatch(ADD_BUG(response.data));
    })
    .catch((reason) => {
      dispatch(apiCallFailed(reason.message));
    });
};

export const startResolveBug = (bugId) => (dispatch, getState) => {
  dispatch(startApiCall());
  return axios
    .patch("http://localhost:9001/api/bugs/" + bugId, {
      resolved: true,
    })
    .then((response) => {
      dispatch(RESOLVE_BUG({ id: response.data.id }));
    })
    .catch((reason) => {
      dispatch(apiCallFailed(reason.message));
    });
};

export const startAssignBugToUser = (bugId) => (dispatch, getState) => {
  dispatch(startApiCall());
  axios
    .patch("http://localhost:9001/api/bugs/" + bugId, {
      userId: 99,
    })
    .then((response) => {
      dispatch(
        ASSIGNE_BUG_TO_USER({
          bugId: response.data.id,
          userId: response.data.userId,
        })
      );
    })
    .catch((reason) => {
      dispatch(apiCallFailed(reason.message));
    });
};

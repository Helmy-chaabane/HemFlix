import { createAction } from "@reduxjs/toolkit";

export const startApiCall = createAction("StartApiCall");
export const apiCallFailed = createAction("ApiCallFailed");

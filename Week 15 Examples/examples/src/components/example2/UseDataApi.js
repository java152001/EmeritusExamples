import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const dataFetchReducer = (state, action) => {
        switch (action.type) {
          case 'FETCH_INIT':
            return {
              ...state,
              isLoading: true,
              isError: false,
            };
          case 'FETCH_SUCCESS':
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload,
            };
          case 'FETCH_FAILURE':
            return {
              ...state,
              isLoading: false,
              isError: true,
            };
          default:
            throw new Error();
        }
      };

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            // Part 1, step 1 code goes here
            dispatch({ type: "FETCH_INIT" })
            try {
                const result = await axios(url);
                if (!didCancel) {
                    dispatch({ type: "FETCH_SUCCESS", payload: result.data })
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        };
        fetchData();
        return () => {
            didCancel = true;
        };
    }, [url]);
    return [state, setUrl];
};

export default useDataApi;
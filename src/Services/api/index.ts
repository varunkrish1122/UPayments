import axios from './interceptor';
import {HeaderType, HttpMethods} from './definitions';
import {getHeaders} from './utilities';

// Later We can Add it Via Env Files for Production and Dev
const baseUrl = 'https://upayments-studycase-api.herokuapp.com/api';

class apiException {
  private details: string;
  private message: string;
  private statusCode: number;
  private timestamp: string;
  constructor(
    message: string = null,
    statusCode: number = null,
    details: string = null,
    timestamp: string = null
  ) {
    this.details = details;
    this.message = message;
    this.statusCode = statusCode;
    this.timestamp = timestamp;
  }
}

/**
 * @param {string} 	path			-	API endpoint
 * @param {string} 	method			- 	Type of request method (POST / GET / DELETE)
 * @param {Object} 	headerType 		- 	Type of header (Auth / Full / min)
 * @param {number} 	timeout			- 	Request timeout in milliseconds
 * @param {Object}  data			- 	Request payload
 * @param {Object}	extraParams		- 	Request additional paramaters
 * @param {Object}	queryParams		- 	Request query paramaters
 **/
export const makeAPICall = async (
  path: string,
  method: HttpMethods,
  headerType: HeaderType,
  timeout?: number,
  data?,
  extraParams?,
  queryParams?,
  successMessage?
) => {
  const requestConfig = {
    url:
      baseUrl +
      path +
      (queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''),
    method,
    data,
    timeout,
    headers: getHeaders(headerType),
    params: extraParams || {},
    transformResponse: [
      (data) => {
        // transform the response
        return data ? JSON.parse(data) : null;
      },
    ],
    successMessage,
  };

  return axios(requestConfig)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const {statusCode, message} = response?.data || {};
        if (statusCode >= 400) throw new apiException(message, statusCode);
        return response.data;
      }
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const {details, message, statusCode, timestamp} = error.response.data;
        throw new apiException(message, statusCode, details, timestamp);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw new apiException('Something went wrong !');
      } else {
        // Something happened in setting up the request that triggered an Error
        const {message = ''} = error;
        throw new apiException(message);
      }
    });
};

import {HeaderType} from './definitions';

// This Utility used to Add Common Headers Based on Request Type
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZybnNyMjg4NEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vdmFydW5rcmlzaDExMjIvVVBheW1lbnRzIiwiaWF0IjoxNjU5NDMxNjI3LCJleHAiOjE2NTk4NjM2Mjd9.-f7c5CqT3piaBOX9Gll0SffNHJn9CK1-_oSsppsEiho'
export const getHeaders = (headerType: HeaderType) => {
  switch (headerType) {
    case HeaderType.auth:
      return {
        contentType: 'application/json',
      };
    case HeaderType.min:
      return {
        Authorization: `Bearer ${token}`,
        contentType: 'application/json',
      };
    case HeaderType.full:
      return {
        Authorization: `Bearer ${token}`,
        contentType: 'application/json',
        encrypted: true,
      };
  }
};

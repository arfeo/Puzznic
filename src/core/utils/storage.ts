import { isObject } from './common';

import { ErrorHandlerFunc } from './types';

function getStorageData(
  storageName: string,
  keys?: string[] | string,
  onError?: ErrorHandlerFunc,
): any[] | any | undefined {
  try {
    const data: any = JSON.parse(window.localStorage.getItem(storageName));

    if (keys === undefined) {
      return data || {};
    }

    if (data && Object.prototype.toString.call(data) === '[object Object]') {
      if (Array.isArray(keys)) {
        return keys.map((key: string) => data[key]);
      }

      return data[keys];
    }

    return Array.isArray(keys) ? [] : undefined;
  } catch (error) {
    if (typeof onError === 'function') {
      onError(error);
    }
  }
}

function saveStorageData(storageName: string, key: string, data: any, onError?: ErrorHandlerFunc): void {
  try {
    window.localStorage.setItem(storageName, JSON.stringify({
      ...getStorageData(storageName),
      [key]: data,
    }));
  } catch (error) {
    if (typeof onError === 'function') {
      onError(error);
    }
  }
}

function removeStorageData(storageName: string, key: string, onError?: ErrorHandlerFunc): void {
  try {
    const currentData = getStorageData(storageName);

    if (isObject(currentData) && Object.prototype.hasOwnProperty.call(currentData, key)) {
      delete currentData[key];
    }

    window.localStorage.setItem(storageName, JSON.stringify(currentData));
  } catch (error) {
    if (typeof onError === 'function') {
      onError(error);
    }
  }
}

export {
  getStorageData,
  saveStorageData,
  removeStorageData,
};

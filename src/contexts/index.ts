import React from 'react';
import { UserStore } from '../stores';

export const stores = {
  UserStore: new UserStore()
};

export const storesContext = React.createContext(stores);

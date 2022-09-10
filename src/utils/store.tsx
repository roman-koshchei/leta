import { createContext } from 'react';

interface StoreCtx {

}

const StoreCtx = createContext<StoreCtx | null>(null);
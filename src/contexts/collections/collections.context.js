import { createContext } from "react"

import SHOP_DATA from "./shop.data.js"

const CollectionContext = createContext(SHOP_DATA)

export default CollectionContext
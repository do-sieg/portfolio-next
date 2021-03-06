import { LangContext } from "../../utils/lang";
import Home from "../index";

export default function Page() {
    return (
        <LangContext.Provider value="en">
            <Home />
        </LangContext.Provider>
    )
}

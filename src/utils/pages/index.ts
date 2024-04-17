import { Page } from "../types/pages";
import { CSD } from "./create-schema-defintion";

interface PageMap{
    [key:string]:Page
}

export const pages: PageMap = {
    "create-schema-definition": CSD
};
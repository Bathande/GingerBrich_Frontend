import { brandModel } from './../../models/brandModel';
import {axiosApi} from "../../../Apis/axiosDefaultSetting";
export async function addBrandApi(brand:brandModel):Promise<brandModel | undefined>{
    const responce= await axiosApi.post("/Brands",brand);
    return responce.data;
}

import ComplaintModel from "../models/ComplaintModel";
import { complaint } from "../types/complaints";
import CrudRepository from "./CrudRepository";

class ComplaintRepository extends CrudRepository<complaint>{
    constructor(){
        super(ComplaintModel);
    }
}

export default new ComplaintRepository();
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

    /////////////////////////////////////////////////////////////////////////////////////// 
    ////    This service has purpose to SET and GET       ////
    ////     variables globally through application              ////
    /////////////////////////////////////////////////////////////////////////////////////

    // ToDo - Make global universal FUNCTION

    projectId: number;
    datasetId: number;

    constructor() { }

    // PROJECT ID
    setProjectId(projectId: number) {
        this.projectId = projectId;
    }

    getProjectId() {
        return this.projectId;
    }

    // DATASET ID
    setDatasetId(id: number) {
        this.datasetId = id;
    }

    getDatasetId() {
        return this.datasetId;
    }
}
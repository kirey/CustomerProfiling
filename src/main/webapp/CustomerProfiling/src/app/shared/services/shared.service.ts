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
    disableTabs: boolean = true;
    datasetName: string;
    isDatasetLinked: boolean = false;

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

    // DATASET NAME
    setDatasetName(name: string) {
        this.datasetName = name;
    }

    getDatasetName() {
        return this.datasetName;
    }

    // DATASET LINKED
    setDatasetLink(isLinked: boolean) {
        this.isDatasetLinked = isLinked;
    }

    getIsDatasetLinked() {
        return this.isDatasetLinked;
    }

    // RESET VALUES - ONE PROJECT CMP
    resetValuesOneProject() {
        this.projectId = null;
        this.datasetId = null;
        this.disableTabs = true;
        this.datasetName = null;
        this.isDatasetLinked = false;
    }

}
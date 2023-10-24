class DataManager {

    constructor() {
        if (DataManager.instance) {
            return DataManager.instance;
        }
        this.driver = null;
        DataManager.instance = this;
    }




}

module.exports = new DataManager();
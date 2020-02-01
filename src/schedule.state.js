class Schedule {
    constructor() {
        this._data = new Array
    }


    modelSchedule( datum = {} ) {
        const newDatum = new Object
        newDatum['pid'] = datum.pid ? datum.pid : ''
        newDatum['message'] = datum.message ? datum.message : ''
                             
        return newDatum
    }

    setSchedule({ message, pid }) {  // void
        return this._data.push({ message, pid })
    }

    getSchedule(pid) {
        if (pid) {
            return this._data.filter(datum => datum.pid == pid)
        } else {
            return this._data
        }
    }

}

module.exports = Schedule
class Schedule {
    constructor() {
        this._data = new Array
    }


    modelSchedule( datum = {} ) {
        const newDatum = { pid: '', message: '' }

        if (datum.hasOwnProperty('pid'))newDatum['pid'] = datum.pid
        if (datum.hasOwnProperty('message'))newDatum['message'] = datum.message
                     
        return datum
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
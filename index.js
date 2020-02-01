#!/usr/bin/env node
const CronJob = require('node-cron')
const CronParser = require('cronstrue')
const cluster = require('cluster')
const moment  = require('moment')

const Schedule = require('./src/schedule.state')
let ScheduleGlobal = new Schedule()
let scheduleModel = ScheduleGlobal.modelSchedule



if (cluster.isMaster) {

    const CronTab = ['* * * * * *', '*/3 * * * * *', '*/5 * * * * *'] // Master getting CronTab


    for (let index = 0; index < CronTab.length; index++) { // Chunk process to cluster as much as cronTab
        let worker = cluster.fork()

        worker.send(CronTab[index]);
        worker.on('message', function (datum) {

            ScheduleGlobal.setSchedule(
                scheduleModel()
            )


            if (ScheduleGlobal._data.length == CronTab.length) {
                // send Signal to inform that all scheduler was running

                console.log( ScheduleGlobal.getSchedule() )
            }



        });

    }




} else {
    process.on('message', cronTime => {
        
        CronJob.schedule(cronTime, () => {
            process.send({
                message: `Running ${CronParser.toString(cronTime)}`,
                time : moment(Date.now()).format('HH:mm:ss'),
                pid: process.pid
            })
            
        })
        
        
    });
}
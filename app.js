const notes = require('./notes')
const chalk =require('chalk')
const yargs = require('yargs')
const { listNotes } = require('./notes')

//Costumize yarg version
yargs.version('1.1.0')

//add,remove,read,list

//creat add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note description',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    description:'remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    description:'List the notes',
    handler:function(){
        console.log("That's all your notes: ")
        listNotes()
    }
})


//create read command
yargs.command({
    command:'read',
    description:'Read the notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
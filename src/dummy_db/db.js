/* eslint-disable no-mixed-operators */ // This is because of the bitwise operators for randomUUID()
/*
    This class will act as the database it will mimic the structure of most RDBMS in likeness and behavior, and assume a model, structure has already been created
    This is the user_structure
    <uuid>: { 
        id: <uuid>,
        position: 0, // position 0 = VP, 1 = Sales Manager, 2 = Sales Lead, 3 = Sales Rep
        manages: [1,2,3] // prov
        status: "critical" 
    }
*/
export class Dummybase {
    constructor() {
        this.database = {} // This is only here so that VS code understands that the database is an Object, REMOVE: @Afoy-1995  
    }

    // Create CRUD operations
    /* 
        In most CREATE operations the id is assigned by the DB unless other specified
    */
    createDummyUser(user) {
        if ('id' in user) {
            this.database[user.id] = user
        } else {
            const id = this.randomUUID()
            const userObj = {
                id: id,
                ...user
            }
        this.database[id] = userObj
        }
        return {
            'status_code': 200,
            'message': 'User Created!'
        }
    }
    /*
        reads a user details
    */
    readDummyUser(id) {
        if (this.database[id] === undefined) {
            return null, {'status_code': 404, 'message': 'User Not Found!'}
        } else {
            return this.database[id]
        }
    }
    /*
        updates a user info
    */
    updateDummyUser(user) {
        if (this.database[user.id] === undefined) {
            return {
                'status_code': 404, 
                'message': 'User Not Found!'
            }
        } else {
            this.database[user.id] = user
            return {
                'status_code': 200,
                'message': 'User Updated!'
            }
        }
    }

    deleteDummyUser(user) {
        if (this.database[user.id] === undefined) {
            return {
                'status_code': 404,
                'message': 'User cannot be deleted!'
            }
        } else {
            delete this.database[user.id]
        }
    }


    // helper random uuid
    randomUUID() {
        let dt = new Date().getTime();
        let uuid = "xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, function(c) {
            let r = (dt + Math.random() * 16) % 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString()
        })

        return uuid
    }

    get profiles() {
        return Object.values(this.database)
    }
}